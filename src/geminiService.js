import { COMPANY_PROFILE, COMPANY_SERVICES, SYSTEM_INSTRUCTION } from './companyKnowledge.js'

/**
 * Retrieve the active Gemini API key from environment variables (.env)
 * or localStorage fallback if configured.
 */
export function getActiveApiKey() {
  const envKey =
    (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GEMINI_API_KEY) ||
    (typeof process !== 'undefined' && process.env && process.env.VITE_GEMINI_API_KEY) ||
    ''
  if (envKey && envKey.trim().length > 0) {
    return envKey.trim()
  }
  const customKey = typeof window !== 'undefined' ? localStorage.getItem('aanvitha_gemini_api_key') : null
  if (customKey && customKey.trim().length > 0) {
    return customKey.trim()
  }
  return ''
}

/**
 * Fast offline fallback when network fails
 */
function getOfflineAnswer(query) {
  const q = (query || '').toLowerCase()

  if (q.includes('kay nahi') || q.includes('kahi nahi') || q.includes('kuch nahi') || q.includes('nothing') || q === 'nahi' || q === 'nako') {
    return `### काही हरकत नाही! 🙏\n\nमी तुम्हाला कशी मदत करू शकते? तुम्ही Aanvitha Technologies च्या **AI Voice Agent, KYC/KYB सिस्टीम, ERP/CRM प्लॅटफॉर्म्स**, किंवा तुमच्या प्रोजेक्टच्या गरजेनुसार सॉफ्टवेअरबद्दल कोणताही प्रश्न विचारू शकता!`
  }

  if (q.includes('marathi') || q.includes('kashi ahes') || q.includes('kasa ahes') || q.includes('kay kartes') || q.includes('kay chalalay') || q.includes('namaskar')) {
    return `### नमस्कार! Aanvitha Technologies मध्ये आपले स्वागत आहे! 🙏\n\nमी **Aanvi**, तुमची AI मार्गदर्शक. मी तुम्हाला कशी मदत करू शकते?\n\nतुम्ही आमच्या **AI सोल्युशन्स, Fintech प्लॅटफॉर्म्स, ERP सिस्टीम्स** किंवा इतर कोणत्याही सेवेबद्दल मराठीतून विचारू शकता!`
  }

  if (q.includes('hindi') || q.includes('kaise ho') || q.includes('namaste') || q.includes('kya karte ho')) {
    return `### नमस्ते! Aanvitha Technologies में आपका स्वागत है! 🙏\n\nमैं **Aanvi**, आपकी AI सलाहकार। मैं आज आपकी क्या मदद कर सकती हूँ?\n\nआप हमारे **AI प्रोडक्ट्स, फिनटेक प्लेटफॉर्म, ईआरपी सिस्टम** या प्रोजेक्ट डेमो के बारे में बेझिझक पूछ सकते हैं!`
  }

  if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('whatsapp') || q.includes('call') || q.includes('reach')) {
    return `### Contact Aanvitha Technologies\n\nWe would love to connect with you! Here are our official contact channels:\n\n- **Website:** [www.aanvitha.tech](https://www.aanvitha.tech)\n- **WhatsApp / Phone:** [${COMPANY_PROFILE.phone}](tel:${COMPANY_PROFILE.phone})\n- **Email:** [${COMPANY_PROFILE.email}](mailto:${COMPANY_PROFILE.email})\n- **Headquarters:** ${COMPANY_PROFILE.headquarters} (${COMPANY_PROFILE.buildingDetails})\n- **Hours:** ${COMPANY_PROFILE.hours}\n\nFeel free to share your project requirements with us right here!`
  }

  if (q.includes('service') || q.includes('offer') || q.includes('what do you do') || q.includes('products')) {
    return `### Aanvitha Technologies Services\n\nWe provide 22+ enterprise-grade digital solutions categorized into:\n\n1. **AI & Automation:** AI Chatbots, Voice Calling Agents, AI Document Processing, AI Sales Assistant, and AI Analytics.\n2. **Fintech & Payments:** Multi-Currency Payment Gateways, Payin & Payout Platforms, KYC/KYB Biometric Verification, and Loan Management Systems.\n3. **Enterprise & ERP:** Cloud ERP, HRMS & Payroll, Enterprise CRM, Multi-Warehouse Inventory, and Custom SaaS Architectures.\n4. **Growth & Operations:** High-Converting E-Commerce, Social Media Auto-Schedulers, Appointment Engines, and Omnichannel Helpdesk.\n\nAsk me about any specific service for more details!`
  }

  if (q.includes('location') || q.includes('address') || q.includes('where') || q.includes('dubai') || q.includes('office')) {
    return `### Our Headquarters\n\n**Aanvitha Technologies** is based in Dubai, UAE:\n\n- **Address:** ${COMPANY_PROFILE.headquarters}\n- **Building:** ${COMPANY_PROFILE.buildingDetails}\n- **Founder:** ${COMPANY_PROFILE.founder}\n- **Hours:** ${COMPANY_PROFILE.hours}`
  }

  if (q.includes('price') || q.includes('cost') || q.includes('budget') || q.includes('quote')) {
    return `### Project Pricing & Estimates\n\nEvery enterprise engagement is custom-tailored to your scope, integration requirements, and hosting architecture (Cloud or On-Premise).\n\nTo receive an exact scope proposal and commercial estimate:\n1. Email us at **${COMPANY_PROFILE.email}**\n2. Or message us on WhatsApp at **${COMPANY_PROFILE.phone}**\n3. Our solution architect will schedule a free 30-minute discovery consultation with you!`
  }

  const matchedService = COMPANY_SERVICES.find(
    (s) => q.includes(s.title.toLowerCase()) || (s.highlights && s.highlights.some((h) => q.includes(h.toLowerCase())))
  )

  if (matchedService) {
    return `### ${matchedService.title} (${matchedService.category})\n\n${matchedService.summary}\n\n**Key Capabilities:**\n${matchedService.highlights.map((h) => `- ${h}`).join('\n')}\n\nWould you like to schedule a demo or speak with our solutions architect about integrating this into your stack?`
  }

  return `### Hello from Aanvitha Technologies!\n\nI am **Aanvi**, your AI solutions guide. We engineer bespoke **AI systems, Fintech rails, Enterprise ERP/CRM, and Custom SaaS platforms** for high-growth businesses.\n\nFeel free to ask about our **Services**, **Dubai Office**, or **How to Contact Us**!`
}

/**
 * Strip forbidden action button phrases and format cleanly
 */
export function cleanBotResponse(text) {
  if (!text) return ''
  return text
    .replace(/(?:^|\n)\s*[-*•]?\s*(?:Chat on WhatsApp|Go to Contact Page|Request Callback)[^\n]*/gi, '')
    .replace(/\b(Chat on WhatsApp|Go to Contact Page|Request Callback)\b/gi, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

// Ultra-fast lightweight models prioritized for sub-second latency (< 1s) and high quota
const FAST_MODELS = [
  'gemini-3.5-flash-lite',
  'gemini-flash-lite-latest',
  'gemini-3.5-flash',
  'gemini-3.6-flash',
  'gemini-flash-latest',
]

/**
 * Real-time Streaming Gemini request with sliding memory window (Ultra-fast response)
 * @param {Array<{ role: 'user' | 'model', content: string }>} conversationHistory
 * @param {(text: string) => void} onChunk
 * @param {string} [leadContext] - Optional dynamic lead qualification instruction
 * @returns {Promise<string>}
 */
export async function streamGeminiMessage(conversationHistory, onChunk, leadContext = '') {
  const apiKey = getActiveApiKey()

  if (!apiKey) {
    const lastUserMessage = [...conversationHistory].reverse().find((m) => m.role === 'user')?.content || ''
    const fallback = getOfflineAnswer(lastUserMessage)
    if (onChunk) onChunk(fallback)
    return fallback
  }

  // Sliding memory window: Keep last 6 messages to keep payloads small & latency under 1s
  const historyToSend = conversationHistory.slice(-6)
  const contents = historyToSend.map((msg) => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content }],
  }))

  const systemText = leadContext
    ? `${SYSTEM_INSTRUCTION}\n\n${leadContext}`
    : `${SYSTEM_INSTRUCTION}\n\nCRITICAL LANGUAGE MANDATE: Always reply in the visitor's EXACT language (English, Arabic, Hindi, Marathi, Spanish, French, German, Gujarati, Tamil, etc.). Never switch languages!`

  const requestBody = {
    system_instruction: {
      parts: [{ text: systemText }],
    },
    contents: contents,
    generationConfig: {
      temperature: 0.5,
      topP: 0.9,
      maxOutputTokens: 800,
    },
  }

  for (const model of FAST_MODELS) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${apiKey}`
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) continue

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let fullText = ''
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const jsonStr = line.slice(6).trim()
            if (!jsonStr || jsonStr === '[DONE]') continue
            try {
              const parsed = JSON.parse(jsonStr)
              const chunk = parsed?.candidates?.[0]?.content?.parts?.[0]?.text
              if (chunk) {
                fullText += chunk
                const cleaned = cleanBotResponse(fullText)
                if (onChunk) onChunk(cleaned)
              }
            } catch (e) {
              // Ignore partial JSON parse chunks
            }
          }
        }
      }

      const finalCleaned = cleanBotResponse(fullText)
      if (finalCleaned.length > 0) {
        return finalCleaned
      }
    } catch (err) {
      console.warn(`Streaming attempt on ${model} failed, trying fallback:`, err)
    }
  }

  // Fallback to standard request if streaming reader encountered an issue
  return sendGeminiMessage(conversationHistory, leadContext)
}

/**
 * Standard non-streaming Gemini API request (Optimized for speed)
 * @param {Array<{ role: 'user' | 'model', content: string }>} conversationHistory 
 * @returns {Promise<string>}
 */
export async function sendGeminiMessage(conversationHistory, leadContext = '') {
  const apiKey = getActiveApiKey()

  if (!apiKey) {
    const lastUserMessage = [...conversationHistory].reverse().find((m) => m.role === 'user')?.content || ''
    return getOfflineAnswer(lastUserMessage)
  }

  // Sliding memory window: Keep last 6 messages
  const historyToSend = conversationHistory.slice(-6)
  const contents = historyToSend.map((msg) => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content }],
  }))

  const systemText = leadContext
    ? `${SYSTEM_INSTRUCTION}\n\n${leadContext}`
    : SYSTEM_INSTRUCTION

  const requestBody = {
    system_instruction: {
      parts: [{ text: systemText }],
    },
    contents: contents,
    generationConfig: {
      temperature: 0.5,
      topP: 0.9,
      maxOutputTokens: 800,
    },
  }

  let lastError = null

  for (const model of FAST_MODELS) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        const errorJson = await response.json().catch(() => ({}))
        const errorMessage = errorJson?.error?.message || response.statusText
        lastError = new Error(`Gemini API error (${response.status}): ${errorMessage}`)
        continue
      }

      const data = await response.json()
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text

      if (text && text.trim().length > 0) {
        return cleanBotResponse(text.trim())
      }
    } catch (err) {
      lastError = err
    }
  }

  if (lastError) {
    console.warn('Gemini request fallback:', lastError.message)
    const lastUserMessage = [...conversationHistory].reverse().find((m) => m.role === 'user')?.content || ''
    return getOfflineAnswer(lastUserMessage)
  }

  return 'Hello! How can I assist you with Aanvitha Technologies services today?'
}

/**
 * Intelligently analyze the full conversation history to extract structured lead details.
 * Gemini understands multilingual context (Marathi, Hindi, English, Arabic, etc.),
 * correctly detects greetings (e.g. "kashi ahes" is greeting, not name),
 * handles name corrections, and summarizes true project requirements.
 * 
 * @param {Array<{ role: 'user' | 'model', content: string }>} conversationHistory
 * @returns {Promise<{ name: string, phone: string, email: string, project: string } | null>}
 */
export async function extractLeadWithAI(conversationHistory) {
  const apiKey = getActiveApiKey()
  if (!apiKey || !conversationHistory || conversationHistory.length === 0) return null

  const prompt = `You are an expert lead qualification intelligence system for Aanvitha Technologies.
Carefully review the entire dialogue transcript between the visitor and the AI assistant (Aanvi).
Extract the verified lead details into structured JSON:

1. "name": The visitor's verified person name (e.g. "Vinay").
   - CRITICAL: Never use colloquial words, negations, or greetings as a name! In Marathi, "kay nahi" / "kahi nahi" means "nothing" / "no name". In Hindi, "kuch nahi" means "nothing". In English, "nothing" / "none" / "no". Greetings like "kashi ahes" / "kasa ahes" or questions like "kashala" / "why" are NEVER names. If the visitor replied with "kay nahi" or did not explicitly provide a real person's name, output "Website Visitor".
2. "phone": The visitor's phone or WhatsApp number (e.g. "9999999999" or "+971..."), or "" if none provided.
3. "email": The visitor's email address, or "" if none provided.
4. "project": A concise, high-value professional summary in English of the project, software, service, or business need the visitor is inquiring about (e.g., "Custom Software Development", "AI Voice Agent for Hotel", "Payment Gateway Integration").
   - CRITICAL: Never set "project" to casual chat, language notes (e.g. "me marathi madhe bolat ahe"), greetings, or simple words like "yes" or "ok". If they inquired about services or development, summarize their actual business inquiry. If unclear, use "General Tech Inquiry".

Conversation Transcript:
${conversationHistory.map((m) => `${m.role === 'user' ? 'Visitor' : 'Assistant'}: ${m.content}`).join('\n')}

Output MUST be valid JSON only matching:
{
  "name": "string",
  "phone": "string",
  "email": "string",
  "project": "string"
}`

  const requestBody = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.1,
      responseMimeType: 'application/json',
      maxOutputTokens: 250,
    },
  }

  for (const model of ['gemini-3.5-flash-lite', 'gemini-flash-lite-latest', 'gemini-3.5-flash', 'gemini-3.6-flash']) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      })
      if (!response.ok) continue

      const data = await response.json()
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text
      if (rawText) {
        const parsed = JSON.parse(rawText)
        const rawName = (parsed.name || '').trim()
        const lowerName = rawName.toLowerCase()
        const isInvalid = !rawName ||
          rawName === 'Website Visitor' ||
          lowerName.includes('kashi') ||
          lowerName.includes('kasa') ||
          lowerName.includes('kay nahi') ||
          lowerName.includes('kahi nahi') ||
          lowerName.includes('kuch nahi') ||
          lowerName.includes('nothing') ||
          lowerName === 'nahi' ||
          lowerName === 'nako'

        return {
          name: isInvalid ? 'Website Visitor' : rawName,
          phone: parsed.phone && parsed.phone.trim() ? parsed.phone.trim() : '',
          email: parsed.email && parsed.email.trim() ? parsed.email.trim() : '',
          project: parsed.project && parsed.project.trim() ? parsed.project.trim() : 'General Tech Inquiry',
        }
      }
    } catch (err) {
      console.warn(`Lead extraction on ${model} failed, trying next:`, err)
    }
  }

  return null
}

