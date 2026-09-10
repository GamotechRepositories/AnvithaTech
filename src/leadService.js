const STORAGE_KEY = 'aanvitha_captured_leads'

/**
 * Extract phone number or email if present in text
 */
export function extractContactDetails(text) {
  if (!text) return null

  // Email regex
  const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
  
  // Phone regex (e.g. +971..., 10 digits, etc.)
  const phoneMatch = text.match(/(?:\+?\d{1,4}[ -]?)?(?:\(?\d{2,4}\)?[ -]?)?\d{3,4}[ -]?\d{3,4}/)

  return {
    email: emailMatch ? emailMatch[0] : null,
    phone: phoneMatch && phoneMatch[0].length >= 8 ? phoneMatch[0] : null,
  }
}

/**
 * Get all captured leads from local storage
 */
export function getStoredLeads() {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (err) {
    console.error('Failed to parse leads from storage', err)
    return []
  }
}

/**
 * Save a new lead to storage and dispatch to webhook / email service
 */
/**
 * Save a new lead to storage and dispatch to webhook / email service
 */
export async function saveLead(leadData) {
  let cleanName = (leadData.name || '').trim()
  const lowerName = cleanName.toLowerCase()
  const isInvalidName =
    !cleanName ||
    lowerName === 'website visitor' ||
    lowerName.includes('kay nahi') ||
    lowerName.includes('kahi nahi') ||
    lowerName.includes('kuch nahi') ||
    lowerName.includes('nothing') ||
    lowerName.includes('kashi ahes') ||
    lowerName.includes('kasa ahes') ||
    /^(kashi|kasa|visitor|yes|no|nahi|nako|marathi|kashala|why|unknown|none|null|na)\b/i.test(cleanName)

  if (isInvalidName) {
    cleanName = 'Website Visitor'
  }

  const rawPhone = (leadData.phone || '').trim()
  const sheetSafePhone = rawPhone.startsWith('+') ? `'${rawPhone}` : rawPhone

  let cleanProject = (leadData.project || leadData.service || '').trim()
  if (!cleanProject || /^(yes|yeah|yup|ok|okay|me marathi|marathi|kashi|hi|hello|tell me)\b/i.test(cleanProject)) {
    cleanProject = 'Custom Software & Technology Inquiry'
  }

  const newLead = {
    id: leadData.id || `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    name: cleanName || 'Website Visitor',
    phone: sheetSafePhone || '',
    email: (leadData.email || '').trim(),
    project: cleanProject,
    summary: leadData.summary || '',
    timestamp: new Date().toLocaleString(),
    device: typeof navigator !== 'undefined' ? (navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop') : 'Unknown',
  }

  // 1. Save to browser localStorage so developer never loses a lead (with smart deduplication)
  if (typeof window !== 'undefined') {
    const existing = getStoredLeads()
    // Replace recent entry if same phone exists within last 5 minutes
    const filtered = existing.filter((l) => !(l.phone && newLead.phone && l.phone === newLead.phone && Date.now() - (l.createdAt || 0) < 300000))
    const updated = [{ ...newLead, createdAt: Date.now() }, ...filtered]
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    } catch (e) {
      console.warn('LocalStorage save error:', e)
    }
  }

  // 2. Dispatch to webhook if configured in .env (e.g. Google Sheets, Zapier, Make, Formspree, Telegram)
  const webhookUrl = import.meta.env.VITE_LEAD_WEBHOOK_URL
  if (webhookUrl && webhookUrl.trim().length > 0) {
    try {
      await fetch(webhookUrl.trim(), {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          source: 'Aanvitha Technologies AI Chatbot (www.aanvitha.tech)',
          ...newLead,
          rawChat: leadData.conversation || [],
        }),
      })
    } catch (err) {
      console.warn('Webhook dispatch failed:', err)
    }
  }

  return newLead
}

/**
 * Export all leads to CSV file for Excel / Google Sheets
 */
export function exportLeadsToCSV() {
  const leads = getStoredLeads()
  if (!leads.length) return false

  const headers = ['ID', 'Date & Time', 'Name', 'Phone / WhatsApp', 'Email', 'Project / Interest', 'Device']
  const rows = leads.map((l) => [
    `"${l.id}"`,
    `"${l.timestamp}"`,
    `"${(l.name || '').replace(/"/g, '""')}"`,
    `"${(l.phone || '').replace(/"/g, '""')}"`,
    `"${(l.email || '').replace(/"/g, '""')}"`,
    `"${(l.project || '').replace(/"/g, '""')}"`,
    `"${l.device || ''}"`,
  ])

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', `aanvitha_leads_${new Date().toISOString().slice(0, 10)}.csv`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
  return true
}
