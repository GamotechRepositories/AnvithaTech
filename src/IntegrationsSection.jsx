import { useState } from 'react'

export const integrationCategories = [
  'All',
  'AI & Automation',
  'Fintech & Payments',
  'E-Commerce & Retail',
  'CRM & Enterprise',
  'Communication',
]

export const integrationsList = [
  // AI & Automation
  {
    id: 'openai',
    name: 'OpenAI / ChatGPT',
    category: 'AI & Automation',
    icon: 'fas fa-robot',
    bg: 'linear-gradient(135deg, #10a37f, #0a6952)',
    tag: 'LLM & Vision APIs',
    latency: '32ms',
  },
  {
    id: 'claude',
    name: 'Anthropic Claude',
    category: 'AI & Automation',
    icon: 'fas fa-brain',
    bg: 'linear-gradient(135deg, #d97706, #92400e)',
    tag: 'Cognitive Reasoning',
    latency: '40ms',
  },
  {
    id: 'zapier',
    name: 'Zapier',
    category: 'AI & Automation',
    icon: 'fas fa-bolt',
    bg: 'linear-gradient(135deg, #ff4a00, #c83800)',
    tag: 'Workflow Triggers',
    latency: '55ms',
  },
  {
    id: 'make',
    name: 'Make (Integromat)',
    category: 'AI & Automation',
    icon: 'fas fa-network-wired',
    bg: 'linear-gradient(135deg, #6e3ff3, #4517cb)',
    tag: 'Visual Data Pipelines',
    latency: '48ms',
  },
  {
    id: 'aws',
    name: 'AWS Cloud',
    category: 'AI & Automation',
    icon: 'fab fa-aws',
    bg: 'linear-gradient(135deg, #232f3e, #111720)',
    accent: '#ff9900',
    tag: 'Lambda / S3 / SQS',
    latency: '18ms',
  },
  {
    id: 'gcp',
    name: 'Google Cloud',
    category: 'AI & Automation',
    icon: 'fab fa-google',
    bg: 'linear-gradient(135deg, #4285f4, #174ea6)',
    tag: 'Vertex AI & BigQuery',
    latency: '24ms',
  },

  // Fintech & Payments
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'Fintech & Payments',
    icon: 'fab fa-stripe-s',
    bg: 'linear-gradient(135deg, #635bff, #3f36d4)',
    tag: 'Global Payment Rails',
    latency: '28ms',
  },
  {
    id: 'razorpay',
    name: 'Razorpay',
    category: 'Fintech & Payments',
    icon: 'fas fa-credit-card',
    bg: 'linear-gradient(135deg, #0c2340, #040d1a)',
    accent: '#3395ff',
    tag: 'UPI / Cards / NetBanking',
    latency: '34ms',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    category: 'Fintech & Payments',
    icon: 'fab fa-paypal',
    bg: 'linear-gradient(135deg, #003087, #0079c1)',
    tag: 'Cross-Border Checkout',
    latency: '42ms',
  },
  {
    id: 'core-banking',
    name: 'Core Banking APIs',
    category: 'Fintech & Payments',
    icon: 'fas fa-university',
    bg: 'linear-gradient(135deg, #1e293b, #0b1120)',
    accent: '#3ee0d8',
    tag: 'IMPS / RTGS / ACH Payouts',
    latency: '60ms',
  },

  // E-Commerce & Retail
  {
    id: 'shopify',
    name: 'Shopify',
    category: 'E-Commerce & Retail',
    icon: 'fab fa-shopify',
    bg: 'linear-gradient(135deg, #95bf47, #5e8020)',
    tag: 'Catalog & Live Inventory',
    latency: '36ms',
  },
  {
    id: 'amazon',
    name: 'Amazon FBA',
    category: 'E-Commerce & Retail',
    icon: 'fab fa-amazon',
    bg: 'linear-gradient(135deg, #ff9900, #b36b00)',
    tag: 'Order & Shipment Sync',
    latency: '52ms',
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    category: 'E-Commerce & Retail',
    icon: 'fab fa-wordpress',
    bg: 'linear-gradient(135deg, #96588a, #5b2850)',
    tag: 'Store Webhook Bridge',
    latency: '44ms',
  },
  {
    id: 'tiktok',
    name: 'TikTok Shop',
    category: 'E-Commerce & Retail',
    icon: 'fab fa-tiktok',
    bg: 'linear-gradient(135deg, #161823, #000000)',
    accent: '#fe2c55',
    tag: 'Social Commerce Stream',
    latency: '38ms',
  },

  // CRM & Enterprise
  {
    id: 'salesforce',
    name: 'Salesforce',
    category: 'CRM & Enterprise',
    icon: 'fab fa-salesforce',
    bg: 'linear-gradient(135deg, #00a1e0, #006097)',
    tag: 'Bi-directional Deals Sync',
    latency: '45ms',
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'CRM & Enterprise',
    icon: 'fab fa-hubspot',
    bg: 'linear-gradient(135deg, #ff7a59, #c74423)',
    tag: 'Inbound Leads & Contacts',
    latency: '39ms',
  },
  {
    id: 'zoho',
    name: 'Zoho CRM & Books',
    category: 'CRM & Enterprise',
    icon: 'fas fa-cube',
    bg: 'linear-gradient(135deg, #e42528, #990f12)',
    tag: 'Invoices & Client Portals',
    latency: '46ms',
  },
  {
    id: 'sap',
    name: 'SAP ERP',
    category: 'CRM & Enterprise',
    icon: 'fas fa-layer-group',
    bg: 'linear-gradient(135deg, #008fd3, #00547f)',
    tag: 'Enterprise Supply Chain',
    latency: '68ms',
  },
  {
    id: 'postgres',
    name: 'PostgreSQL / SQL',
    category: 'CRM & Enterprise',
    icon: 'fas fa-database',
    bg: 'linear-gradient(135deg, #336791, #163248)',
    tag: 'Direct DB Replication',
    latency: '12ms',
  },

  // Communication
  {
    id: 'whatsapp',
    name: 'WhatsApp Business',
    category: 'Communication',
    icon: 'fab fa-whatsapp',
    bg: 'linear-gradient(135deg, #25d366, #0d7335)',
    tag: 'Official Meta Cloud API',
    latency: '22ms',
  },
  {
    id: 'slack',
    name: 'Slack',
    category: 'Communication',
    icon: 'fab fa-slack',
    bg: 'linear-gradient(135deg, #4a154b, #2c0b2d)',
    accent: '#e01e5a',
    tag: 'Real-Time Alert Bots',
    latency: '26ms',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    category: 'Communication',
    icon: 'fab fa-telegram-plane',
    bg: 'linear-gradient(135deg, #229ed9, #106b97)',
    tag: 'Automated Bot Channels',
    latency: '20ms',
  },
  {
    id: 'teams',
    name: 'Microsoft Teams',
    category: 'Communication',
    icon: 'fab fa-microsoft',
    bg: 'linear-gradient(135deg, #6264a7, #3b3c69)',
    tag: 'Corporate Notifications',
    latency: '35ms',
  },
  {
    id: 'zendesk',
    name: 'Zendesk',
    category: 'Communication',
    icon: 'fas fa-headset',
    bg: 'linear-gradient(135deg, #03363d, #011a1e)',
    accent: '#03363d',
    tag: 'Omnichannel Ticketing',
    latency: '42ms',
  },
]

export function IntegrationsSection({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('All')
  const [hoveredApp, setHoveredApp] = useState(null)

  const filteredApps =
    activeTab === 'All'
      ? integrationsList
      : integrationsList.filter((app) => app.category === activeTab)

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
            <span>Enterprise Ecosystem</span>
          </div>

          <h2 className="integ-title">
            Connect <span className="hero-gradient">100+ Apps & Platforms</span>
          </h2>

          <p className="integ-subtitle">
            Connect your AI agents, payment rails, and enterprise software directly with the real world.
            Pre-built connectors, real-time webhooks, and enterprise APIs ready to plug into your stack.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="integ-tabs-wrap">
            <div className="integ-tabs">
              {integrationCategories.map((cat) => {
                const count =
                  cat === 'All'
                    ? integrationsList.length
                    : integrationsList.filter((a) => a.category === cat).length
                const isActive = activeTab === cat
                return (
                  <button
                    key={cat}
                    type="button"
                    className={`integ-tab-btn${isActive ? ' is-active' : ''}`}
                    onClick={() => setActiveTab(cat)}
                  >
                    <span>{cat}</span>
                    <span className="integ-tab-count">{count}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Full Width Apps Showcase Grid */}
        <div className="integ-cards-grid">
          {filteredApps.map((app) => {
            const isHovered = hoveredApp === app.id
            return (
              <div
                key={app.id}
                className={`integ-card${isHovered ? ' is-hovered' : ''}`}
                onMouseEnter={() => setHoveredApp(app.id)}
                onMouseLeave={() => setHoveredApp(null)}
              >
                <div className="integ-card-sheen" aria-hidden="true" />
                
                {/* Icon Brand Tile */}
                <div
                  className="integ-icon-tile"
                  style={{
                    background: app.bg,
                    boxShadow: app.accent ? `0 8px 24px ${app.accent}44` : undefined,
                    borderColor: app.accent || 'rgba(255,255,255,0.18)',
                  }}
                >
                  <i className={app.icon} />
                </div>

                {/* App Info */}
                <div className="integ-card-info">
                  <h4 className="integ-app-name">{app.name}</h4>
                  <span className="integ-app-tag">{app.tag}</span>
                </div>

                {/* Realtime latency badge */}
                <div className="integ-card-meta">
                  <span className="integ-sync-pill">
                    <i className="fas fa-check" /> Active
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Continuous Marquee Stream */}
        <div className="integ-marquee-strip">
          <div className="integ-marquee-track">
            <span>✦ 100+ Pre-built Connectors</span>
            <span>✦ Bi-directional Event Webhooks</span>
            <span>✦ SOC2 & GDPR Ready</span>
            <span>✦ 99.99% Uptime SLA</span>
            <span>✦ Automated Error Recovery</span>
            <span>✦ Zero Data Loss Protocols</span>
            <span>✦ Instant WhatsApp & CRM Sync</span>
            <span>✦ Multi-tenant Enterprise Architecture</span>
            {/* Repeated for smooth loop */}
            <span>✦ 100+ Pre-built Connectors</span>
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
