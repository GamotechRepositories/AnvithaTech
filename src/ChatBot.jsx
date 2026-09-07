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
  content: `Hello! 👋 I'm **Aanvi** from **Aanvitha Technologies** (aanvita.tech).\n\nHow can I assist you today? Feel free to ask about our **AI products, Fintech platforms, ERP systems**, or how to get in touch with our team!`,
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

// Helper to check if a string is a valid person name
const INVALID_NAMES = new Set([
  'yes', 'yeah', 'yep', 'yup', 'sure', 'ok', 'okay', 'fine', 'haan', 'ho', 'hnn',
  'nahi', 'no', 'nope', 'hi', 'hello', 'hey', 'namaste', 'namaskar', 'shubh',
  'kashi', 'kasa', 'kashi ahes', 'kasa ahes', 'kase ahat', 'kay chalay', 'kay challay',
  'kaise ho', 'kaisi ho', 'kya haal hai', 'kem cho', 'majama', 'thik', 'thik ahe', 'chaan',
  'tell me', 'more', 'details', 'info', 'interested', 'services', 'service', 'products', 'product',
  'pricing', 'price', 'cost', 'quote', 'demo', 'ai', 'fintech', 'erp', 'crm', 'hotel', 'hospital', 'app',
  'website', 'software', 'dashboard', 'saas', 'hrms', 'lms', 'kyc', 'kyb', 'developer',
  'which service', 'which services', 'what do you do', 'good', 'great', 'pls', 'please',
  'me marathi madhe bolat ahe', 'marathi', 'software development', 'mala software develop karayach ahe',
  'mala software delvelop karayach ahe', 'visitor', 'website visitor'
])

function isValidPersonName(str) {
  if (!str) return false
  const trimmed = str.trim()
  const lower = trimmed.toLowerCase()
  if (INVALID_NAMES.has(lower)) return false
  if (/\d/.test(trimmed)) return false
  if (trimmed.length < 2 || trimmed.length > 30) return false
  if (/^(kashi|kasa|kaise|kaisi|kya|kem|hello|hi|hey|mala|me|amhi|aapan)\b/i.test(lower)) return false
  if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) return false
  return true
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
    stage: 'idle', // 'idle' | 'awaiting_name' | 'awaiting_phone' | 'awaiting_email' | 'awaiting_details' | 'completed'
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

    // ── Smart Conversational Lead Extraction ──
    const lastBotMsg = [...messages].reverse().find((m) => m.role === 'model')?.content?.toLowerCase() || ''
    const detected = extractContactDetails(prompt)
    let updatedDraft = { ...leadDraft }

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

    // 3. Extract Name ONLY if it is a valid person name and not a contact or correction
    if (!detected?.phone && !detected?.email && !isNameCorrection) {
      const cleanCandidate = prompt.replace(/^(my name is|i am|this is|i'm|myself|naam|naav|nav|name|call me)\s+/i, '').trim()
      if (isValidPersonName(cleanCandidate)) {
        updatedDraft.name = cleanCandidate
      }
    }

    // 4. User provides requirements/details
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
      !isNameCorrection
    ) {
      updatedDraft.details = prompt
      updatedDraft.stage = 'completed'
    }

    // 5. Check user intent flags
    const isAffirmative = /^(yes|yeah|yep|yup|sure|ok|okay|haan|ho|hnn|interested|definitely|tell me|more|pls|please|bolo|sang|sanga)\b/i.test(prompt)
    const isBusinessOrServiceInquiry = detectBusinessIntent(prompt)

    if (isBusinessOrServiceInquiry) {
      updatedDraft.business = prompt
    }

    if (updatedDraft.stage === 'idle' && (isBusinessOrServiceInquiry || isAffirmative)) {
      updatedDraft.stage = 'awaiting_name'
    }

    // Determine current progression stage
    if (!updatedDraft.name && updatedDraft.stage !== 'idle') {
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
    let leadInstruction = ''

    if (!updatedDraft.name) {
      // If user said "yes", "sure", "interested" to explore solutions
      if (
        isAffirmative ||
        lastBotMsg.includes('particular domain') ||
        lastBotMsg.includes('caught your interest') ||
        lastBotMsg.includes('which specific domain') ||
        lastBotMsg.includes('solution you would like')
      ) {
        leadInstruction = `ACTIVE CONVERSATION INSTRUCTION:
The visitor replied "${prompt}" to explore our solutions.
1. Acknowledge their interest enthusiastically:
   "That's wonderful! Which specific domain or solution caught your interest (AI & Automation, Fintech & Payments, Enterprise ERP, or Growth & Operations)?"
2. IN THE VERY SAME RESPONSE, ASK FOR THEIR NAME AND CONTACT:
   "Also, to help our solutions team prepare a customized live demo and proposal for you, may I please know your name and WhatsApp/phone number (and email, if you'd like)?"
3. STRICT PROHIBITION: DO NOT write "Chat on WhatsApp", "Go to Contact Page", or "Request Callback". Do NOT present button choices. End with this dual question.`
      } else if (isBusinessOrServiceInquiry) {
        leadInstruction = `ACTIVE CONVERSATION INSTRUCTION:
The visitor is asking about solutions or services: "${prompt}".
1. Explain our core offerings clearly and concisely in 2-3 high-impact bullet points.
2. AT THE VERY END OF YOUR ANSWER, ASK FOR THEIR NAME IN THE VISITOR'S LANGUAGE:
   (e.g., in Marathi: "तुमच्या व्यवसायासाठी योग्य प्रस्ताव आणि डेमो देण्यासाठी तुमचे नाव जाणून घेऊ शकतो का?", in Hindi: "क्या मैं आपका नाम जान सकता हूँ?", in English: "May I please know your name?")
3. LANGUAGE MANDATE: You MUST reply in the EXACT SAME LANGUAGE as the user!
4. STRICT PROHIBITION: DO NOT write "Chat on WhatsApp", "Go to Contact Page", or "Request Callback". Do NOT present any buttons or options. End strictly with this question.`
      }
    } else if (updatedDraft.stage === 'awaiting_contact' && isValidPersonName(updatedDraft.name)) {
      leadInstruction = `ACTIVE CONVERSATION INSTRUCTION:
The visitor provided their name: "${updatedDraft.name}".
1. Acknowledge them warmly by name IN THE VISITOR'S LANGUAGE (e.g. in Marathi: "तुम्हाला भेटून खूप आनंद झाला, ${updatedDraft.name}!", in Hindi: "आपसे मिलकर खुशी हुई, ${updatedDraft.name}!", in English: "Nice to meet you, ${updatedDraft.name}!").
2. Ask for their WhatsApp or mobile phone number (and optional email address) IN THE VISITOR'S LANGUAGE so our solutions team can reach out with the proposal and demo.
3. LANGUAGE MANDATE: You MUST reply in the EXACT SAME LANGUAGE (Marathi/Hindi/English/etc.) as the visitor!
4. STRICT PROHIBITION: DO NOT write "Chat on WhatsApp", "Go to Contact Page", or "Request Callback".`
    } else if (updatedDraft.stage === 'awaiting_details') {
      leadInstruction = `ACTIVE CONVERSATION INSTRUCTION:
The visitor (${updatedDraft.name || 'Visitor'}) has shared their contact details (${updatedDraft.phone ? `Phone: ${updatedDraft.phone}` : ''}${updatedDraft.email ? `, Email: ${updatedDraft.email}` : ''}).
1. Acknowledge their contact details warmly IN THE VISITOR'S LANGUAGE.
2. Ask for their business/hotel name, city/address/location, and any specific requirements IN THE VISITOR'S LANGUAGE.
3. LANGUAGE MANDATE: You MUST reply in the EXACT SAME LANGUAGE (Marathi/Hindi/English/etc.) as the visitor!
4. STRICT PROHIBITION: DO NOT write "Chat on WhatsApp", "Go to Contact Page", or "Request Callback".`
    } else if (updatedDraft.stage === 'completed') {
      leadInstruction = `ACTIVE CONVERSATION INSTRUCTION:
The visitor (${updatedDraft.name || 'Visitor'}) has provided all requirements and address details: "${prompt}".
1. Warmly confirm IN THE VISITOR'S LANGUAGE that all details have been recorded.
2. Reassure them IN THE VISITOR'S LANGUAGE that our senior engineering team at Aanvitha Technologies in Dubai (Naif, Deira) will review their requirements and contact them shortly on WhatsApp (${updatedDraft.phone || 'their phone'}) ${updatedDraft.email ? `and email (${updatedDraft.email})` : ''}.
3. LANGUAGE MANDATE: You MUST reply in the EXACT SAME LANGUAGE (Marathi/Hindi/English/etc.) as the visitor!
4. STRICT PROHIBITION: DO NOT write "Chat on WhatsApp", "Go to Contact Page", or "Request Callback".`
    }

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
                content: `I apologize, our AI assistant is experiencing high traffic right now. You can reach our Dubai team directly at **info@aanvitatechnologies.com** or via WhatsApp at **+971 00000 00000**.`,
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
