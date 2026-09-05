import { useMemo } from 'react'

export const allIntegrations = [
  // AI & Machine Learning
  { name: 'OpenAI / ChatGPT', category: 'LLM & Vision Models', icon: 'fas fa-robot', bg: 'linear-gradient(135deg, #10a37f, #0a6952)' },
  { name: 'Anthropic Claude', category: 'Cognitive AI', icon: 'fas fa-brain', bg: 'linear-gradient(135deg, #d97706, #92400e)' },
  { name: 'Meta LLaMA', category: 'Open-Weights AI', icon: 'fas fa-microchip', bg: 'linear-gradient(135deg, #0668e1, #004fb6)' },
  { name: 'Hugging Face', category: 'Model Hub & Inference', icon: 'fas fa-smile', bg: 'linear-gradient(135deg, #ffd21e, #d4a700)', color: '#111' },
  { name: 'Google Vertex AI', category: 'Gemini Enterprise', icon: 'fab fa-google', bg: 'linear-gradient(135deg, #4285f4, #174ea6)' },
  { name: 'AWS Bedrock', category: 'Generative AI Cloud', icon: 'fab fa-aws', bg: 'linear-gradient(135deg, #ff9900, #b36b00)' },

  // Payments & Fintech
  { name: 'Stripe', category: 'Global Payment Rails', icon: 'fab fa-stripe-s', bg: 'linear-gradient(135deg, #635bff, #3f36d4)' },
  { name: 'Razorpay', category: 'UPI & Payment Gateway', icon: 'fas fa-credit-card', bg: 'linear-gradient(135deg, #0c2340, #040d1a)', accent: '#3395ff' },
  { name: 'PayPal', category: 'Cross-Border Checkout', icon: 'fab fa-paypal', bg: 'linear-gradient(135deg, #003087, #0079c1)' },
  { name: 'Core Banking APIs', category: 'IMPS / NEFT / ACH', icon: 'fas fa-university', bg: 'linear-gradient(135deg, #1e293b, #0b1120)', accent: '#3ee0d8' },
  { name: 'Square', category: 'POS & Card Readers', icon: 'fas fa-square', bg: 'linear-gradient(135deg, #282828, #111111)' },
  { name: 'Plaid', category: 'Bank Account Sync', icon: 'fas fa-link', bg: 'linear-gradient(135deg, #000000, #1a1a1a)', accent: '#00d26a' },

  // E-Commerce & Retail
  { name: 'Shopify', category: 'Store & Inventory Sync', icon: 'fab fa-shopify', bg: 'linear-gradient(135deg, #95bf47, #5e8020)' },
  { name: 'Amazon FBA', category: 'Marketplace Logistics', icon: 'fab fa-amazon', bg: 'linear-gradient(135deg, #ff9900, #b36b00)' },
  { name: 'WooCommerce', category: 'WordPress Commerce', icon: 'fab fa-wordpress', bg: 'linear-gradient(135deg, #96588a, #5b2850)' },
  { name: 'TikTok Shop', category: 'Social Commerce Stream', icon: 'fab fa-tiktok', bg: 'linear-gradient(135deg, #161823, #000000)', accent: '#fe2c55' },
  { name: 'Magento', category: 'Adobe Enterprise Store', icon: 'fab fa-magento', bg: 'linear-gradient(135deg, #f26322, #c34305)' },
  { name: 'BigCommerce', category: 'Headless Commerce', icon: 'fas fa-shopping-bag', bg: 'linear-gradient(135deg, #121118, #1e1d2b)' },

  // CRM & Enterprise Operations
  { name: 'Salesforce', category: 'Enterprise Deal Pipeline', icon: 'fab fa-salesforce', bg: 'linear-gradient(135deg, #00a1e0, #006097)' },
  { name: 'HubSpot', category: 'Inbound CRM & Leads', icon: 'fab fa-hubspot', bg: 'linear-gradient(135deg, #ff7a59, #c74423)' },
  { name: 'Zoho CRM', category: 'Omnichannel Sales Suite', icon: 'fas fa-cube', bg: 'linear-gradient(135deg, #e42528, #990f12)' },
  { name: 'SAP S/4HANA', category: 'Enterprise ERP & Supply', icon: 'fas fa-layer-group', bg: 'linear-gradient(135deg, #008fd3, #00547f)' },
  { name: 'Microsoft Dynamics', category: 'Enterprise Cloud ERP', icon: 'fab fa-microsoft', bg: 'linear-gradient(135deg, #002050, #001230)', accent: '#0078d4' },
  { name: 'Oracle NetSuite', category: 'Cloud Financials & ERP', icon: 'fas fa-circle-notch', bg: 'linear-gradient(135deg, #c74634, #8b1f11)' },

  // Communication & Support
  { name: 'WhatsApp Business', category: 'Official Meta Cloud API', icon: 'fab fa-whatsapp', bg: 'linear-gradient(135deg, #25d366, #0d7335)' },
  { name: 'Slack', category: 'Enterprise Alert Bots', icon: 'fab fa-slack', bg: 'linear-gradient(135deg, #4a154b, #2c0b2d)', accent: '#e01e5a' },
  { name: 'Telegram', category: 'Automated Bot Channels', icon: 'fab fa-telegram-plane', bg: 'linear-gradient(135deg, #229ed9, #106b97)' },
  { name: 'Microsoft Teams', category: 'Corporate Collaboration', icon: 'fab fa-microsoft', bg: 'linear-gradient(135deg, #6264a7, #3b3c69)' },
  { name: 'Zendesk', category: 'Omnichannel Helpdesk', icon: 'fas fa-headset', bg: 'linear-gradient(135deg, #03363d, #011a1e)', accent: '#03363d' },
  { name: 'Intercom', category: 'AI Conversational Support', icon: 'fas fa-comment-dots', bg: 'linear-gradient(135deg, #1f8eed, #0d65b0)' },
  { name: 'Twilio', category: 'Global SMS & Voice APIs', icon: 'fas fa-phone-alt', bg: 'linear-gradient(135deg, #f22f46, #b01023)' },
  { name: 'Discord', category: 'Community Event Bots', icon: 'fab fa-discord', bg: 'linear-gradient(135deg, #5865f2, #3943b7)' },

  // Automation, Cloud & Databases
  { name: 'Zapier', category: 'Multi-App Triggers', icon: 'fas fa-bolt', bg: 'linear-gradient(135deg, #ff4a00, #c83800)' },
  { name: 'Make (Integromat)', category: 'Visual Pipeline Scenarios', icon: 'fas fa-network-wired', bg: 'linear-gradient(135deg, #6e3ff3, #4517cb)' },
  { name: 'PostgreSQL', category: 'Relational DB Sync', icon: 'fas fa-database', bg: 'linear-gradient(135deg, #336791, #163248)' },
  { name: 'MongoDB', category: 'Document Database Engine', icon: 'fas fa-leaf', bg: 'linear-gradient(135deg, #47a248, #2e692f)' },
  { name: 'Redis', category: 'High-Throughput Cache', icon: 'fas fa-fire', bg: 'linear-gradient(135deg, #dc382d, #8e1a12)' },
  { name: 'GitHub', category: 'CI/CD & Code Webhooks', icon: 'fab fa-github', bg: 'linear-gradient(135deg, #24292e, #161b22)' },
  { name: 'Notion', category: 'Collaborative Knowledge Base', icon: 'fas fa-sticky-note', bg: 'linear-gradient(135deg, #2f343b, #191c20)' },
  { name: 'Airtable', category: 'Relational Cloud Records', icon: 'fas fa-table', bg: 'linear-gradient(135deg, #fcb400, #bf8800)' },
  { name: 'Asana', category: 'Project Workflows', icon: 'fas fa-tasks', bg: 'linear-gradient(135deg, #f06a6a, #b83232)' },
  { name: 'Jira Software', category: 'Agile Issue Management', icon: 'fab fa-jira', bg: 'linear-gradient(135deg, #0052cc, #0747a6)' },
  { name: 'Dropbox', category: 'Secure Cloud Assets', icon: 'fab fa-dropbox', bg: 'linear-gradient(135deg, #0061ff, #0045b5)' },
  { name: 'Google Drive', category: 'Enterprise Documents Sync', icon: 'fab fa-google-drive', bg: 'linear-gradient(135deg, #0f9d58, #0b8043)' },
  { name: 'Zoom', category: 'Live Meeting Transcription', icon: 'fas fa-video', bg: 'linear-gradient(135deg, #2d8cff, #0e6ae0)' },
  { name: 'Mailchimp', category: 'Automated Dunning Campaigns', icon: 'fab fa-mailchimp', bg: 'linear-gradient(135deg, #ffe01b, #c9ad00)', color: '#111' },
  { name: 'Klaviyo', category: 'E-Commerce Email & SMS', icon: 'fas fa-envelope-open-text', bg: 'linear-gradient(135deg, #181c20, #0a0c0e)', accent: '#54e38e' },
  { name: 'Snowflake', category: 'Enterprise Data Warehouse', icon: 'fas fa-snowflake', bg: 'linear-gradient(135deg, #29b5e8, #167a9f)' },
]

export function IntegrationsSection() {
  // Split 48 authentic apps into 4 columns for seamless vertical auto-scrolling
  const columns = useMemo(() => {
    const col1 = []
    const col2 = []
    const col3 = []
    const col4 = []

    allIntegrations.forEach((item, index) => {
      const colIndex = index % 4
      if (colIndex === 0) col1.push(item)
      else if (colIndex === 1) col2.push(item)
      else if (colIndex === 2) col3.push(item)
      else col4.push(item)
    })

    return [col1, col2, col3, col4]
  }, [])

  return (
    <section className="integ-section" id="integrations">
      <div className="integ-bg-ambient" aria-hidden="true">
        <div className="integ-radial-glow-1" />
        <div className="integ-radial-glow-2" />
        <div className="integ-grid-overlay" />
      </div>

      <div className="integ-container">
        {/* Header Block */}
        <div className="integ-header" data-reveal>
          <div className="integ-badge">
            <span className="live-dot" />
            <span>Integrations · 400+ Apps</span>
          </div>

          <h2 className="integ-title">
            Connect <span className="hero-gradient">400+ Apps</span>
          </h2>

          <p className="integ-subtitle">
            Connect your AI Agents, payment rails, and enterprise systems directly with the real world.
          </p>
        </div>

        {/* Master Showcase Frame with Smooth Vertical Auto-Scrolling Streams */}
        <div className="integ-master-card" data-reveal>
          {/* Top & Bottom gradient fades for infinite flow illusion */}
          <div className="integ-stream-mask-top" aria-hidden="true" />
          <div className="integ-stream-mask-bottom" aria-hidden="true" />

          <div className="integ-scroll-grid">
            {columns.map((colItems, colIdx) => {
              // Alternate speeds and directions for natural, organic dynamic movement
              const animationClass =
                colIdx === 0
                  ? 'integ-col-track-up-1'
                  : colIdx === 1
                    ? 'integ-col-track-up-2'
                    : colIdx === 2
                      ? 'integ-col-track-up-3'
                      : 'integ-col-track-up-4'

              // Duplicate items to form a continuous infinite loop (translateY -50%)
              const duplicatedList = [...colItems, ...colItems]

              return (
                <div key={colIdx} className="integ-stream-column">
                  <div className={`integ-col-track ${animationClass}`}>
                    {duplicatedList.map((app, idx) => (
                      <div key={`${app.name}-${idx}`} className="integ-item-card">
                        <div
                          className="integ-item-icon"
                          style={{
                            background: app.bg,
                            color: app.color || '#fff',
                            borderColor: app.accent || 'rgba(255,255,255,0.16)',
                            boxShadow: app.accent ? `0 6px 20px ${app.accent}33` : undefined,
                          }}
                        >
                          <i className={app.icon} />
                        </div>
                        <div className="integ-item-details">
                          <h4 className="integ-item-name">{app.name}</h4>
                          <span className="integ-item-cat">{app.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Continuous Marquee Stream */}
        <div className="integ-marquee-strip">
          <div className="integ-marquee-track">
            <span>✦ 400+ Pre-built Connectors</span>
            <span>✦ Bi-directional Event Webhooks</span>
            <span>✦ SOC2 & GDPR Ready</span>
            <span>✦ 99.99% Uptime SLA</span>
            <span>✦ Automated Error Recovery</span>
            <span>✦ Zero Data Loss Protocols</span>
            <span>✦ Instant WhatsApp & CRM Sync</span>
            <span>✦ Multi-tenant Enterprise Architecture</span>
            {/* Repeated for smooth loop */}
            <span>✦ 400+ Pre-built Connectors</span>
            <span>✦ Bi-directional Event Webhooks</span>
            <span>✦ SOC2 & GDPR Ready</span>
            <span>✦ 99.99% Uptime SLA</span>
            <span>✦ Automated Error Recovery</span>
            <span>✦ Zero Data Loss Protocols</span>
            <span>✦ Instant WhatsApp & CRM Sync</span>
            <span>✦ Multi-tenant Enterprise Architecture</span>
          </div>
        </div>
      </div>
    </section>
  )
}
