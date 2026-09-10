import { useState, useRef, useEffect } from 'react'
import './ChatBot.css'
import { streamGeminiMessage, cleanBotResponse, extractLeadWithAI } from './geminiService'
import {
  saveLead,
  getStoredLeads,
  exportLeadsToCSV,
  extractContactDetails,
} from './leadService'

const AANVI_AVATAR_URL = 'https://res.cloudinary.com/vpqvkwtj/image/upload/v1788778171/08ffbcb6-0ef4-42f1-b00f-4073d402a82b.png'

const INITIAL_MESSAGE = {
  id: 'welcome',
  role: 'model',
  content: `Hello! 👋 I'm **Aanvi** from **Aanvitha Technologies** (www.aanvitha.tech).\n\nHow can I assist you today? Feel free to ask about our **AI products, Fintech platforms, ERP systems**, or how to get in touch with our team!`,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
}

const QUICK_SUGGESTIONS = [
  'What services do you offer?',
  'Tell me about your AI Voice Agent',
  'How does your KYC & KYB system work?',
  'Where is your Dubai office located?',
  'How do I request a project quote?',
]

/**
 * Lightweight safe markdown renderer for chat messages
 */
function MarkdownText({ text }) {
  if (!text) return null

  const lines = text.split('\n')
  const elements = []
  let currentList = null
  let listType = null

  const renderInline = (str) => {
    const parts = str.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>
      }
      const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/)
      if (linkMatch) {
        return (
          <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer">
            {linkMatch[1]}
          </a>
        )
      }
      return part
    })
  }

  const flushList = () => {
    if (currentList) {
      if (listType === 'ol') {
        elements.push(<ol key={`list-${elements.length}`}>{currentList}</ol>)
      } else {
        elements.push(<ul key={`list-${elements.length}`}>{currentList}</ul>)
      }
      currentList = null
      listType = null
    }
  }

  lines.forEach((line, idx) => {
    const trimmed = line.trim()

    if (!trimmed) {
      flushList()
      return
    }

    if (trimmed.startsWith('### ')) {
      flushList()
      elements.push(<h3 key={idx}>{renderInline(trimmed.replace(/^###\s+/, ''))}</h3>)
      return
    }

    const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/)
    if (numMatch) {
      if (listType !== 'ol') {
        flushList()
        listType = 'ol'
        currentList = []
      }
      currentList.push(<li key={`item-${idx}`}>{renderInline(numMatch[2])}</li>)
      return
    }

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('• ')) {
      if (listType !== 'ul') {
        flushList()
        listType = 'ul'
        currentList = []
      }
      currentList.push(
        <li key={`item-${idx}`}>
          {renderInline(trimmed.replace(/^[-*•]\s+/, ''))}
        </li>
      )
      return
    }

    flushList()
    elements.push(<p key={idx}>{renderInline(trimmed)}</p>)
  })

  flushList()

  return <>{elements}</>
}

// Check if user input is an explicit negation, refusal, or "nothing" (e.g. "kay nahi", "nothing", etc.)
function isRefusalOrNothing(text) {
  if (!text) return false
  const t = text.trim().toLowerCase()

  const exactRefusals = new Set([
    'kay nahi', 'kahi nahi', 'kahi nahi re', 'kahi nako', 'kahi pan', 'kay nai', 'kahi nai', 'kay naahi', 'kahi naahi',
    'kuch nahi', 'kuchh nahi', 'kuch bhi nahi', 'kuch nai', 'kuchh nai',
    'nothing', 'nothing special', 'nothing much', 'nothing really', 'none', 'no name', 'no thanks',
    'nahi', 'nahin', 'na', 'no', 'nope', 'nah', 'nako', 'nakoy', 'nko', 'nahit', 'nahi re', 'nahi g',
    'kashala', 'kashasathi', 'kashala pahije', 'ka', 'ka bar', 'ka bara', 'kyu', 'kyun', 'kyun chahiye', 'kis liye',
    'why', 'why do you ask', 'why do you need it', 'what for',
    'nantar', 'nantar sangu', 'nantar bolu', 'baad me', 'baad mein', 'fir kabhi', 'phir kabhi', 'later', 'not now', 'maybe later',
    'nahi sangnar', 'nahi sangayche', 'mala nahi sangayche', 'nahi batana', 'dont want to say', "don't want to say", 'skip', 'n/a',
    'mahit nahi', 'mahiti nahi', 'mala mahit nahi', 'pata nahi', 'malum nahi', 'mujhe nahi pata', "don't know", 'dont know',
    'काही नाही', 'काही नाही रे', 'नाही', 'नको', 'कशाला', 'का', 'काहीपण', 'काही पण', 'माहित नाही', 'नंतर', 'काही नको',
    'कुछ नहीं', 'नहीं', 'नहीं बताना', 'क्यों', 'क्यों चाहिए', 'पता नहीं', 'मालूम नहीं', 'बाद में'
  ])

  if (exactRefusals.has(t)) return true

  // Pattern matches
  if (/^(kay|kahi|kuch|kuchh)\s+(nahi|nai|naahi)\b/i.test(t)) return true
  if (/\b(kay|kahi|kuch)\s+(nahi|nai)\b/i.test(t)) return true
  if (/^(nothing|none|no thanks|not now|skip|later)\b/i.test(t)) return true
  if (/^(nahi\s+(sangnar|sangu|batana|dunga|pahije|hawa)|nako\s+ahe|nako\s+mala)\b/i.test(t)) return true
  if (/(?:nahi\s+sangnar|not\s+interested|don'?t\s+want|prefer\s+not|dont\s+know|don'?t\s+know)/i.test(t)) return true
  if (/^(काही\s+नाही|कुछ\s+नहीं|नाही\s+सांगणार)/.test(t)) return true

  return false
}

// Check if user input is a question
function isQuestion(text) {
  if (!text) return false
  const t = text.trim().toLowerCase()
  if (t.includes('?')) return true

  const questionWordList = [
    'kay', 'kahi', 'kasa', 'kashi', 'kase', 'kiti', 'kuthe', 'kadhi', 'kashala', 'ka', 'kon',
    'what', 'which', 'where', 'when', 'who', 'whom', 'whose', 'why', 'how', 'can you', 'could you', 'do you',
    'kya', 'kaise', 'kaisi', 'kahan', 'kitna', 'kitne', 'kitni', 'kyu', 'kyun', 'kaun', 'konsa', 'konse',
    'pricing kay', 'cost kiti', 'kay chalalay', 'kay kartes', 'kay karta', 'kay ahe',
    'काय', 'कसे', 'कशी', 'कुठे', 'किती', 'कधी', 'कशाला', 'का', 'कोण', 'कसं', 'सांगा'
  ]

  return questionWordList.some((w) => new RegExp(`(^|\\s)${w}(\\s|$)`, 'i').test(t))
}

// Check if user input is a greeting or casual chat
function isCasualOrGreeting(text) {
  if (!text) return false
  const t = text.trim().toLowerCase()
  const casualPhrases = [
    'hi', 'hello', 'hey', 'namaskar', 'namaste', 'shubh', 'kem cho', 'majama',
    'kashi ahes', 'kasa ahes', 'kase ahat', 'kay chalay', 'kay challay', 'kay chalalay', 'kay kartes', 'kay karta',
    'kaise ho', 'kaisi ho', 'kya haal hai', 'kya chal raha hai', 'kya karte ho',
    'good morning', 'good afternoon', 'good evening', 'good night',
    'thik', 'thik ahe', 'chaan', 'mast', 'bar', 'bara ahe', 'acha', 'accha', 'achha', 'theek', 'theek hai',
    'dhanyawad', 'thank you', 'thanks', 'bye', 'alvida', 'shukriya',
    'नमस्कार', 'नमस्ते', 'कशी आहेस', 'कसा आहेस', 'काय चाललंय', 'काय करतेस', 'ठीक आहे', 'छान'
  ]
  return casualPhrases.some((p) => t === p || t.startsWith(p + ' '))
}

// Non-name words and tech vocabulary that should never be treated as names
const NON_NAME_WORDS = new Set([
  'yes', 'yeah', 'yep', 'yup', 'sure', 'ok', 'okay', 'fine', 'haan', 'ho', 'hnn', 'ha',
  'nahi', 'no', 'nope', 'nah', 'nako', 'nakoy', 'nko', 'nahit',
  'hi', 'hello', 'hey', 'namaste', 'namaskar', 'shubh',
  'kashi', 'kasa', 'kase', 'kashi ahes', 'kasa ahes', 'kase ahat', 'kay chalay', 'kay challay',
  'kaise ho', 'kaisi ho', 'kya haal hai', 'kem cho', 'majama', 'thik', 'thik ahe', 'chaan', 'mast',
  'tell me', 'more', 'details', 'info', 'interested', 'services', 'service', 'products', 'product',
  'pricing', 'price', 'cost', 'quote', 'proposal', 'demo', 'ai', 'fintech', 'erp', 'crm', 'hotel', 'hospital', 'app',
  'website', 'software', 'dashboard', 'saas', 'hrms', 'lms', 'kyc', 'kyb', 'developer', 'engineering',
  'which service', 'which services', 'what do you do', 'good', 'great', 'pls', 'please', 'help',
  'me marathi madhe bolat ahe', 'marathi', 'hindi', 'english',
  'mala software develop karayach ahe', 'visitor', 'website visitor', 'user', 'client',
  'dubai', 'office', 'headquarters', 'company', 'address', 'contact', 'email', 'phone', 'number',
  'booking', 'payment', 'gateway', 'voice', 'agent', 'document', 'ecommerce', 'scheduler',
  'mala', 'me', 'amhi', 'tumhi', 'aapan', 'aap', 'hum', 'tum', 'main', 'mujhe', 'mera', 'meri', 'mere',
  'kay nahi', 'kahi nahi', 'kuch nahi', 'nothing', 'kashala', 'why', 'nantar', 'later'
])

// Strict person name validator
function isValidPersonName(str) {
  if (!str) return false
  const trimmed = str.trim()
  const lower = trimmed.toLowerCase()

  if (NON_NAME_WORDS.has(lower)) return false
  if (isRefusalOrNothing(trimmed)) return false
  if (isQuestion(trimmed)) return false
  if (isCasualOrGreeting(trimmed)) return false
  if (detectBusinessIntent(trimmed)) return false

  // Cannot contain numbers
  if (/\d/.test(trimmed)) return false

  // Max 3 words (e.g. First Middle Last)
  const words = trimmed.split(/\s+/)
  if (words.length > 3) return false

  // Total length must be reasonable (2 to 30 chars)
  if (trimmed.length < 2 || trimmed.length > 30) return false

  // Each word should be at least 2 chars
  if (words.some((w) => w.length < 2)) return false

  // Allowed characters: English letters, Devanagari characters, space, dot, apostrophe, hyphen
  if (!/^[a-zA-Z\u0900-\u097F\s.'-]+$/.test(trimmed)) return false

  return true
}

// Extract explicit name introduction pattern (e.g. "My name is X", "Maza nav X ahe", "माझे नाव X आहे")
function extractExplicitName(text) {
  if (!text) return null
  const t = text.trim()

  const patterns = [
    /^(?:my name is|i am|i'm|this is|call me|myself|name is|name:)\s+([a-zA-Z\u0900-\u097F\s.'-]+)/i,
    /^(?:maz[ae]?\s+(?:nav|naav|naam|name)\s+(?:ahe\s+)?|mera\s+naam\s+|nav\s+|naav\s+|naam\s+|माझे\s+नाव\s+|नाव\s+)\s*([a-zA-Z\u0900-\u097F\s.'-]+)/i,
    /([a-zA-Z\u0900-\u097F\s.'-]+)\s+(?:nav|naav)\s+ahe/i,
  ]

  for (const pattern of patterns) {
    const match = t.match(pattern)
    if (match && match[1]) {
      // Clean up trailing copula verbs e.g. "ahe", "hai", "is", "here", "boltoy", "आहे", "है"
      let candidate = match[1].replace(/\s+(?:ahe|aahe|hai|is|here|boltoy|boltoi|boltoy me|आहे|है|हूँ)$/i, '').trim()
      if (isValidPersonName(candidate)) {
        return candidate
      }
    }
  }

  return null
}

// Helper to detect business context or project inquiry intent
function detectBusinessIntent(text) {
  const t = (text || '').toLowerCase()
  const keywords = [
    'hotel', 'hospital', 'restaurant', 'resort', 'clinic', 'store', 'shop', 'ecommerce', 'retail',
    'real estate', 'logistics', 'school', 'college', 'startup', 'company', 'business', 'agency',
    'fintech', 'app', 'website', 'software', 'erp', 'crm', 'chatbot', 'voice agent', 'pricing',
    'quote', 'proposal', 'cost', 'develop', 'build', 'need', 'want', 'looking for', 'services',
    'service', 'provide', 'offer', 'solutions', 'solution', 'products', 'product', 'domain', 'hiring'
  ]
  return keywords.some((k) => t.includes(k))
}

export function ChatBot({ onNavigatePage, onNavigateService }) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [messages, setMessages] = useState([INITIAL_MESSAGE])
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Conversational lead tracking (Name -> Phone -> Email -> Requirements/Address)
  const [leadDraft, setLeadDraft] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    details: '',
    stage: 'idle', // 'idle' | 'awaiting_name' | 'declined_name' | 'awaiting_contact' | 'awaiting_details' | 'completed'
  })

  // Admin Leads Dashboard state
  const [showAdminLeads, setShowAdminLeads] = useState(false)
  const [leadsList, setLeadsList] = useState([])

  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Autoscroll to bottom when messages update
  useEffect(() => {
    if (isOpen && hasStarted) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isLoading, isOpen, hasStarted])

  // Focus input when opened and started
  useEffect(() => {
    if (isOpen && hasStarted) {
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [isOpen, hasStarted])

  // Prevent background page scrolling when chat is open (especially on mobile)
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen])

  // Admin keyboard shortcut: Ctrl + Shift + L
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'L' || e.key === 'l')) {
        e.preventDefault()
        setLeadsList(getStoredLeads())
        setShowAdminLeads((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Clear chat handler
  const handleClearChat = () => {
    setMessages([INITIAL_MESSAGE])
    setLeadDraft({ name: '', phone: '', email: '', business: '', details: '', stage: 'idle' })
    setHasStarted(false)
  }

  // Submit query
  const handleSendMessage = async (textToSend) => {
    const prompt = (textToSend || inputText).trim()
    if (!prompt || isLoading) return

    setInputText('')

    // ── Smart Conversational Lead & Name Extraction ──
    const lastBotMsg = [...messages].reverse().find((m) => m.role === 'model')?.content?.toLowerCase() || ''
    const detected = extractContactDetails(prompt)
    let updatedDraft = { ...leadDraft }

    // Did bot just ask for their name in the last message?
    const isBotAskingForName =
      updatedDraft.stage === 'awaiting_name' ||
      lastBotMsg.includes('तुमचे नाव') ||
      lastBotMsg.includes('your name') ||
      lastBotMsg.includes('आपला नाव') ||
      lastBotMsg.includes('aapka naam') ||
      lastBotMsg.includes('know your name') ||
      lastBotMsg.includes('नांव') ||
      lastBotMsg.includes('नाव जाणून')

    // 1. Extract Phone or Email if present anywhere in the message
    if (detected?.phone) {
      updatedDraft.phone = detected.phone
    }
    if (detected?.email) {
      updatedDraft.email = detected.email
    }

    // 2. Detect Name Negation/Correction (e.g. "kashi ahe s maz name nahi ahe", "not my name")
    const isNameCorrection = /(?:maz[ae]?\s+(?:nav|naav|name)\s+nahi|not\s+my\s+name|isn'?t\s+my\s+name|nav\s+nahi|name\s+nahi)/i.test(prompt)
    if (isNameCorrection) {
      updatedDraft.name = ''
    }

    // 3. Detect Refusal / "Nothing" / "kay nahi"
    const userDeclinedName = isRefusalOrNothing(prompt)

    if (userDeclinedName) {
      // User explicitly declined or said "kay nahi" / "kahi nahi" / "nothing"
      updatedDraft.name = ''
      if (isBotAskingForName) {
        updatedDraft.stage = 'declined_name'
      }
    } else if (!detected?.phone && !detected?.email && !isNameCorrection) {
      // 4. Try explicit name introduction pattern (e.g. "My name is Priya", "Maza nav Rahul ahe")
      const explicitName = extractExplicitName(prompt)
      if (explicitName) {
        updatedDraft.name = explicitName
        updatedDraft.stage = 'awaiting_contact'
      } else if (
        isBotAskingForName &&
        !isQuestion(prompt) &&
        !isCasualOrGreeting(prompt) &&
        !detectBusinessIntent(prompt) &&
        isValidPersonName(prompt)
      ) {
        // 5. Standalone direct name only when bot actually just asked for it
        updatedDraft.name = prompt.trim()
        updatedDraft.stage = 'awaiting_contact'
      }
    }

    // 6. User provides requirements/details
    if (
      (updatedDraft.stage === 'awaiting_details' ||
        lastBotMsg.includes('business or hotel') ||
        lastBotMsg.includes('where is it located') ||
        lastBotMsg.includes('city/address') ||
        lastBotMsg.includes('office location') ||
        lastBotMsg.includes('features you would like')) &&
      !detected?.phone &&
      !detected?.email &&
      !lastBotMsg.includes('email address') &&
      prompt.length > 3 &&
      !isValidPersonName(prompt) &&
      !isNameCorrection &&
      !userDeclinedName
    ) {
      updatedDraft.details = prompt
      updatedDraft.stage = 'completed'
    }

    // 7. Check user intent flags
    const isAffirmative = /^(yes|yeah|yep|yup|sure|ok|okay|haan|ho|hnn|interested|definitely|tell me|more|pls|please|bolo|sang|sanga)\b/i.test(prompt)
    const isBusinessOrServiceInquiry = detectBusinessIntent(prompt)

    if (isBusinessOrServiceInquiry) {
      updatedDraft.business = prompt
    }

    if (updatedDraft.stage === 'idle' && (isBusinessOrServiceInquiry || isAffirmative)) {
      updatedDraft.stage = 'awaiting_name'
    }

    // Determine current progression stage
    if (!updatedDraft.name && updatedDraft.stage !== 'idle' && updatedDraft.stage !== 'declined_name') {
      updatedDraft.stage = 'awaiting_name'
    } else if (updatedDraft.name && !updatedDraft.phone && !updatedDraft.email) {
      updatedDraft.stage = 'awaiting_contact'
    } else if (updatedDraft.name && (updatedDraft.phone || updatedDraft.email) && !updatedDraft.details) {
      updatedDraft.stage = 'awaiting_details'
    } else if (updatedDraft.name && (updatedDraft.phone || updatedDraft.email) && updatedDraft.details) {
      updatedDraft.stage = 'completed'
    }

    setLeadDraft(updatedDraft)

    // Build targeted, strict dynamic instruction for Gemini
    // CRITICAL: Always prioritize deeply thinking through and answering the user's question first!
    let leadInstruction = `ACTIVE CONVERSATION INSTRUCTION:
1. PRIMARY MANDATE - ANSWER THE VISITOR'S QUESTION OR TOPIC FIRST:
Review what the visitor wrote: "${prompt}".
- If the visitor asked any question, requested details, or shared a business requirement (e.g. AI Voice Agent, KYC/KYB biometric system, ERP, CRM, payment gateway, pricing structure, Dubai office, or technical capabilities):
  -> You MUST FIRST provide a comprehensive, thoughtful, well-structured, and insightful answer in the visitor's language!
  -> Give clear bullet points, key capabilities, and explain how Aanvitha Technologies builds or deploys this solution.
  -> NEVER ignore or skip the visitor's question to just ask for contact info!

2. UNIVERSAL LANGUAGE MIRRORING MANDATE (CRITICAL & STRICT):
- You MUST detect the language and script of the visitor's message and reply in that EXACT SAME LANGUAGE without exception!
- This applies to ANY language globally (English, Arabic, Hindi, Marathi, Spanish, French, German, Gujarati, Tamil, Telugu, Kannada, Bengali, Russian, Japanese, etc.).
- NEVER switch to another language! Whatever language the visitor is communicating in, reply 100% in that exact language.
- If the visitor only inputs a person's name (e.g. "Ahmed", "Carlos", "Hans", "Rahul"), phone/email, or a single word:
  -> Review the earlier messages in this conversation and CONTINUE in that EXACT ongoing language of the conversation!

3. CONVERSATIONAL SITUATION:
`

    if (userDeclinedName) {
      leadInstruction += `- The visitor declined or said "${prompt}" ("nothing" / no name / refusal).
- Under NO circumstances call them "${prompt}" or treat it as a name!
- Acknowledge politely in the visitor's ongoing language (e.g., "No problem at all! How can I assist you?" / "काही हरकत नाही!" / "لا مشكلة على الإطلاق!", etc.).
- Do NOT ask for their name again.
- Answer any question they asked thoroughly, or ask how you can assist them with Aanvitha Technologies' solutions.`
    } else if (updatedDraft.name && updatedDraft.stage === 'awaiting_contact') {
      leadInstruction += `- The visitor introduced their name: "${updatedDraft.name}".
- First, answer any questions or comments they made thoroughly in the visitor's ongoing language.
- Then warmly greet them by name in that exact same ongoing language (e.g. "It's a pleasure to meet you, ${updatedDraft.name}!" in English, "تشرفت بلقائك يا ${updatedDraft.name}!" in Arabic, "तुम्हाला भेटून आनंद झाला, ${updatedDraft.name}!" in Marathi, etc.).
- Ask in the visitor's language if they would like to share their WhatsApp or mobile phone number (and optional email) so our solutions team can share the tailored live demo and proposal.`
    } else if (updatedDraft.stage === 'awaiting_details') {
      leadInstruction += `- The visitor (${updatedDraft.name || 'Visitor'}) has shared contact details (${updatedDraft.phone ? `Phone: ${updatedDraft.phone}` : ''}${updatedDraft.email ? `, Email: ${updatedDraft.email}` : ''}).
- First, answer any questions they asked in the visitor's language.
- Ask for their business or organization name, location, and specific feature requirements.`
    } else if (updatedDraft.stage === 'completed') {
      leadInstruction += `- The visitor (${updatedDraft.name || 'Visitor'}) has provided requirements: "${prompt}".
- Confirm in the visitor's language that all details have been recorded and our senior engineering team at Aanvitha Technologies in Dubai will review everything and contact them shortly via WhatsApp/email.`
    } else if (updatedDraft.stage === 'awaiting_name' && !userDeclinedName) {
      leadInstruction += `- Answer the visitor's inquiry in depth with 2-3 clear, high-impact bullet points in the visitor's language.
- At the very end of your answer, gently ask for their name in the visitor's exact language so our solutions team can prepare a personalized proposal and live demo.`
    } else {
      leadInstruction += `- Provide a warm, intelligent, and helpful response regarding Aanvitha Technologies' enterprise digital solutions in the visitor's exact language.`
    }

    leadInstruction += `

4. STRICT PROHIBITIONS:
- DO NOT write "Chat on WhatsApp", "Go to Contact Page", or "Request Callback".
- DO NOT present button choices or channel options.
- NEVER address the visitor by words like "kay nahi", "kahi nahi", "kuch nahi", "nothing", "kashi ahes", or "nako".`

    // Auto-save & sync to Google Sheet with AI verification
    const hasContact = Boolean(detected?.phone || detected?.email || updatedDraft.phone || updatedDraft.email)

    if (hasContact) {
      const activeConversation = [...messages, { role: 'user', content: prompt }]

      // 1. Initial fast local save so nothing is lost
      const initialName = (updatedDraft.name && isValidPersonName(updatedDraft.name)) ? updatedDraft.name : 'Website Visitor'
      const initialPhone = updatedDraft.phone || detected?.phone || ''
      const initialEmail = updatedDraft.email || detected?.email || ''
      const initialProject = updatedDraft.details || updatedDraft.business || 'Custom Software Inquiry'

      saveLead({
        name: initialName,
        phone: initialPhone,
        email: initialEmail,
        project: initialProject,
        conversation: activeConversation,
      })

      // 2. Intelligent AI Lead extraction from full conversation transcript
      // Accurately extracts verified Name (ignoring greetings like "kashi ahes"), Phone, Email & true Project intent
      extractLeadWithAI(activeConversation)
        .then((aiLead) => {
          if (aiLead && (aiLead.phone || aiLead.email)) {
            const finalName = (aiLead.name && aiLead.name !== 'Website Visitor' && !aiLead.name.toLowerCase().includes('kashi'))
              ? aiLead.name
              : (isValidPersonName(updatedDraft.name) ? updatedDraft.name : 'Website Visitor')

            const finalPhone = aiLead.phone || initialPhone
            const finalEmail = aiLead.email || initialEmail
            const finalProject = (aiLead.project && aiLead.project !== 'General Tech Inquiry')
              ? aiLead.project
              : initialProject

            setLeadDraft((prev) => ({
              ...prev,
              name: finalName,
              phone: finalPhone,
              email: finalEmail,
              details: finalProject,
              stage: 'completed',
            }))

            saveLead({
              name: finalName,
              phone: finalPhone,
              email: finalEmail,
              project: finalProject,
              conversation: activeConversation,
            })
          }
        })
        .catch((err) => {
          console.warn('AI Lead extraction background error:', err)
        })
    }

    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    const botMsgId = `model-${Date.now()}`
    const placeholderBotMessage = {
      id: botMsgId,
      role: 'model',
      content: '',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    const updatedHistory = [...messages, userMessage]
    setMessages([...updatedHistory, placeholderBotMessage])
    setIsLoading(true)

    try {
      const conversationPayload = updatedHistory.map((m) => ({
        role: m.role,
        content: m.content,
      }))

      let accumulatedText = ''
      const replyText = await streamGeminiMessage(
        conversationPayload,
        (streamedText) => {
          accumulatedText = streamedText
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMsgId ? { ...msg, content: streamedText } : msg
            )
          )
        },
        leadInstruction
      )

      const finalContent = cleanBotResponse(replyText || accumulatedText)

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMsgId ? { ...msg, content: finalContent } : msg
        )
      )
    } catch (err) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMsgId
            ? {
                ...msg,
                content: `I apologize, our AI assistant is experiencing high traffic right now. You can reach our Dubai team directly at **info@aanvitatechnologies.com** or via WhatsApp at **+971 50 223 9477**.`,
              }
            : msg
        )
      )
    } finally {
      setIsLoading(false)
    }
  }

  // Clear leads from admin modal
  const handleClearLeads = () => {
    if (window.confirm('Are you sure you want to clear all stored leads?')) {
      localStorage.removeItem('aanvitha_captured_leads')
      setLeadsList([])
    }
  }

  return (
    <div className="aanvi-chatbot-wrapper">
      {/* Floating launcher button */}
      {!isOpen && (
        <button
          type="button"
          className="aanvi-launcher-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant"
        >
          <div className="aanvi-launcher-icon-wrap">
            <span className="aanvi-pulse-ring" />
            <img src={AANVI_AVATAR_URL} alt="Aanvi" className="aanvi-launcher-img" />
          </div>
          <span className="aanvi-launcher-label">Ask Aanvi AI</span>
        </button>
      )}

      {/* Chat window modal */}
      {isOpen && (
        <div className="aanvi-chat-card" role="dialog" aria-modal="true">
          {!hasStarted ? (
            /* ── Pre-Chat Onboarding / Welcome Screen (Reference UI) ── */
            <div className="aanvi-onboarding-screen">
              {/* Top Bar: Close Button */}
              <div className="aanvi-onboarding-top">
                <button
                  type="button"
                  className="aanvi-icon-btn aanvi-close-btn"
                  title="Close Chat"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Chat"
                >
                  <i className="fas fa-times" />
                </button>
              </div>

              {/* Center Stage: Futuristic Concentric Orbits, Floating Crystals & 3D Robot */}
              <div className="aanvi-onboarding-center">
                <div className="aanvi-orbit-stage">
                  {/* Glowing Wireframe Concentric Orbits */}
                  <svg className="aanvi-orbit-svg" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <radialGradient id="aanviStageGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#7928ca" stopOpacity="0.42" />
                        <stop offset="48%" stopColor="#00d2ff" stopOpacity="0.16" />
                        <stop offset="85%" stopColor="#060914" stopOpacity="0" />
                      </radialGradient>
                      <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.65" />
                        <stop offset="50%" stopColor="#7928ca" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.1" />
                      </linearGradient>
                      <linearGradient id="orbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.65" />
                        <stop offset="60%" stopColor="#00d2ff" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>

                    {/* Central Atmosphere Glow */}
                    <circle cx="170" cy="170" r="150" fill="url(#aanviStageGlow)" />

                    {/* Elliptical Wireframe Orbits */}
                    <ellipse cx="170" cy="170" rx="155" ry="105" stroke="url(#orbitGrad1)" strokeWidth="1.1" strokeDasharray="5 7" opacity="0.45" transform="rotate(-18 170 170)" />
                    <ellipse cx="170" cy="170" rx="134" ry="84" stroke="url(#orbitGrad2)" strokeWidth="1.3" opacity="0.65" transform="rotate(14 170 170)" />
                    <ellipse cx="170" cy="170" rx="110" ry="62" stroke="url(#orbitGrad1)" strokeWidth="1.6" opacity="0.8" transform="rotate(-22 170 170)" />
                    <ellipse cx="170" cy="170" rx="84" ry="44" stroke="#00d2ff" strokeWidth="1.2" strokeDasharray="3 5" opacity="0.75" transform="rotate(20 170 170)" />
                  </svg>

                  {/* Floating Cosmic Shards */}
                  <div className="aanvi-floating-shard shard-1" />
                  <div className="aanvi-floating-shard shard-2" />
                  <div className="aanvi-floating-shard shard-3" />
                  <div className="aanvi-floating-shard shard-4" />

                  {/* Centered Robot Avatar */}
                  <div className="aanvi-hero-avatar-wrap">
                    <img
                      src={AANVI_AVATAR_URL}
                      alt="Aanvi AI Buddy"
                      className="aanvi-hero-avatar-img"
                    />
                  </div>
                </div>

                {/* Greeting Title */}
                <div className="aanvi-onboarding-copy">
                  <div className="aanvi-onboarding-hi">Hi, I'm Aanvi! 👋</div>
                  <h2 className="aanvi-onboarding-title">
                    How may I help you<br />today!
                  </h2>
                </div>
              </div>

              {/* Bottom Action: Get Started Button */}
              <div className="aanvi-onboarding-bottom">
                <button
                  type="button"
                  className="aanvi-get-started-btn"
                  onClick={() => {
                    setHasStarted(true)
                    setTimeout(() => inputRef.current?.focus(), 250)
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          ) : (
            /* ── Active Chat Conversation Screen ── */
            <div className="aanvi-chat-active-flow">
              {/* Header */}
              <div className="aanvi-chat-header">
                <div className="aanvi-header-identity">
                  <div className="aanvi-header-avatar-box">
                    <img src={AANVI_AVATAR_URL} alt="Aanvi" className="aanvi-header-avatar-img" />
                  </div>
                  <div className="aanvi-header-titles">
                    <div className="aanvi-header-name">
                      Aanvi
                    </div>
                    <div className="aanvi-header-sub">
                      Aanvitha Technologies
                    </div>
                  </div>
                </div>

                <div className="aanvi-header-actions">
                  <button
                    type="button"
                    className="aanvi-icon-btn aanvi-restart-btn"
                    title="Restart Chat"
                    onClick={handleClearChat}
                    aria-label="Restart Chat"
                  >
                    <i className="fas fa-redo-alt" />
                  </button>
                  <button
                    type="button"
                    className="aanvi-icon-btn aanvi-close-btn"
                    title="Close Chat"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close Chat"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>

              {/* Messages body */}
              <div className="aanvi-chat-messages">
                {/* Conversation rows - Pure, natural chat without buttons */}
                {messages.map((msg) => (
                  <div key={msg.id} className={`aanvi-msg-row ${msg.role}`}>
                    {msg.role === 'model' && (
                      <div className="aanvi-msg-avatar">
                        <img src={AANVI_AVATAR_URL} alt="Aanvi" className="aanvi-msg-avatar-img" />
                      </div>
                    )}
                    <div className="aanvi-msg-bubble">
                      {msg.content ? (
                        <MarkdownText text={msg.content} />
                      ) : (
                        <div style={{ display: 'flex', gap: '5px', padding: '6px 4px', alignItems: 'center' }}>
                          <span className="aanvi-typing-dot" />
                          <span className="aanvi-typing-dot" />
                          <span className="aanvi-typing-dot" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                <div ref={messagesEndRef} />
              </div>

              {/* Footer with input */}
              <div className="aanvi-chat-footer">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSendMessage()
                  }}
                  className="aanvi-input-wrap"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    className="aanvi-input-field"
                    placeholder="Ask about our services, AI, ERP, contact..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    className="aanvi-send-btn"
                    disabled={!inputText.trim() || isLoading}
                    aria-label="Send Message"
                  >
                    <i className="fas fa-paper-plane" />
                  </button>
                </form>

                {/* Clickable footer shortcut for Developer/Admin to view leads */}
                <div
                  className="aanvi-footer-powered aanvi-footer-powered-clickable"
                  onClick={() => {
                    setLeadsList(getStoredLeads())
                    setShowAdminLeads(true)
                  }}
                  title="Click to view captured website leads & export CSV (Ctrl+Shift+L)"
                >
                  Powered by <span>Google Gemini</span> • Aanvitha Technologies <i className="fas fa-chart-line" style={{ fontSize: '0.65rem', opacity: 0.6 }} />
                </div>
              </div>
            </div>
          )}

          {/* Admin Leads Dashboard Modal */}
          {showAdminLeads && (
            <div className="aanvi-admin-modal-overlay">
              <div className="aanvi-admin-header">
                <h4>
                  <i className="fas fa-user-friends" /> Captured Leads ({leadsList.length})
                </h4>
                <button
                  type="button"
                  className="aanvi-icon-btn"
                  onClick={() => setShowAdminLeads(false)}
                >
                  <i className="fas fa-times" />
                </button>
              </div>

              <div className="aanvi-admin-body">
                {leadsList.length === 0 ? (
                  <div className="aanvi-admin-empty">
                    <i className="fas fa-inbox" style={{ fontSize: '2rem', marginBottom: '8px', opacity: 0.3 }} />
                    <p>No leads captured yet.</p>
                    <p style={{ fontSize: '0.72rem' }}>
                      When visitors chat and share their name, phone, or email, they will appear here automatically!
                    </p>
                  </div>
                ) : (
                  leadsList.map((lead) => (
                    <div key={lead.id} className="aanvi-admin-lead-item">
                      <div className="aanvi-admin-lead-top">
                        <span className="aanvi-admin-lead-name">{lead.name}</span>
                        <span>{lead.timestamp}</span>
                      </div>
                      <div className="aanvi-admin-lead-contact">
                        {lead.phone && (
                          <a href={`tel:${lead.phone}`} target="_blank" rel="noreferrer">
                            <i className="fas fa-phone-alt" /> {lead.phone}
                          </a>
                        )}
                        {lead.phone && (
                          <a href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer">
                            <i className="fab fa-whatsapp" /> WhatsApp
                          </a>
                        )}
                        {lead.email && (
                          <a href={`mailto:${lead.email}`}>
                            <i className="fas fa-envelope" /> {lead.email}
                          </a>
                        )}
                      </div>
                      {lead.project && (
                        <div className="aanvi-admin-lead-msg">
                          <strong>Note / Query:</strong> {lead.project}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>

              <div className="aanvi-admin-footer">
                <button
                  type="button"
                  className="aanvi-admin-btn-export"
                  disabled={leadsList.length === 0}
                  onClick={() => exportLeadsToCSV()}
                >
                  <i className="fas fa-file-download" /> Export to CSV (Excel)
                </button>
                {leadsList.length > 0 && (
                  <button
                    type="button"
                    className="aanvi-admin-btn-clear"
                    onClick={handleClearLeads}
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
