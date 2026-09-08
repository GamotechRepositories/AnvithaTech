import React, { useState, useEffect } from 'react'
import './EnterpriseControlsSection.css'

const ssoOptions = [
  { id: 'google', name: 'Google SSO', icon: 'fab fa-google', color: '#EA4335' },
  { id: 'microsoft', name: 'Microsoft 365', icon: 'fab fa-microsoft', color: '#00A4EF' },
  { id: 'azure', name: 'Azure AD', icon: 'fas fa-cloud', color: '#0078D4' },
  { id: 'okta', name: 'Okta Verify', icon: 'fas fa-circle-notch', color: '#007dc1' },
  { id: 'otp', name: 'SMS / WhatsApp', icon: 'fab fa-whatsapp', color: '#25D366' },
  { id: 'saml', name: 'SAML 2.0', icon: 'fas fa-shield-alt', color: '#8b7cff' },
  { id: 'biometric', name: 'Passkey / 2FA', icon: 'fas fa-fingerprint', color: '#3ee0d8' },
  { id: 'ping', name: 'PingIdentity', icon: 'fas fa-id-badge', color: '#f43f5e' }
]

const SSO_STEP_PX = 27 // 23px button height + 4px gap
const triSsoOptions = [...ssoOptions, ...ssoOptions, ...ssoOptions]

export function EnterpriseControlsSection({ onNavigate }) {
  // Interactive branch selection state
  const [activeBranch, setActiveBranch] = useState('Pune (HQ)')
  
  // Interactive model toggle state
  const [activeModel, setActiveModel] = useState('gemini')

  // Interactive guardrail rule state
  const [ruleApproved, setRuleApproved] = useState(null)

  // Interactive and auto-cycling circular SSO state (centered active selection)
  const [ssoIndex, setSsoIndex] = useState(ssoOptions.length) // starts at 8 (first item of middle set)
  const [ssoTransition, setSsoTransition] = useState(true)
  const [isSsoPaused, setIsSsoPaused] = useState(false)

  useEffect(() => {
    if (isSsoPaused) return
    const timer = setInterval(() => {
      setSsoTransition(true)
      setSsoIndex((prev) => prev + 1)
    }, 2200)
    return () => clearInterval(timer)
  }, [isSsoPaused])

  const handleSsoTransitionEnd = () => {
    const N = ssoOptions.length
    if (ssoIndex >= N * 2) {
      setSsoTransition(false)
      setSsoIndex((prev) => (prev % N) + N)
    } else if (ssoIndex < N) {
      setSsoTransition(false)
      setSsoIndex((prev) => (prev % N) + N)
    }
  }

  useEffect(() => {
    if (!ssoTransition) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSsoTransition(true)
        })
      })
      return () => cancelAnimationFrame(id)
    }
  }, [ssoTransition])

  return (
    <section className="egc-section" id="enterprise-controls">
      <div className="egc-container">
        {/* Header matching Screenshot 1 */}
        <div className="egc-header">
          <div className="egc-kicker">
            <span>Enterprise Infrastructure</span>
            <span className="egc-kicker-arrow" aria-hidden="true">&rarr;</span>
          </div>
          <h2 className="egc-title">Enterprise-grade controls</h2>
        </div>

        {/* VPC Deployments Banner Card matching Screenshot 1 */}
        <div className="egc-vpc-card">
          <div className="egc-vpc-content">
            <h3 className="egc-vpc-title">Private Cloud & VPC deployments</h3>
            <p className="egc-vpc-desc">
              Deploy your custom ERP, AI assistants, and web platforms inside your own AWS, Microsoft Azure, Google Cloud, or secure on-premise servers.
            </p>
          </div>

          <div className="egc-vpc-logos">
            <div className="egc-cloud-item">
              <div className="egc-cloud-badge egc-cloud-azure" title="Microsoft Azure">
                <img 
                  src="https://res.cloudinary.com/vpqvkwtj/image/upload/v1788851349/ea585cc5-81f7-46a3-8443-6912933f218c.png" 
                  alt="Microsoft Azure" 
                  className="egc-cloud-img"
                  loading="lazy"
                />
              </div>
              <span className="egc-cloud-label">Azure</span>
            </div>

            <div className="egc-cloud-item">
              <div className="egc-cloud-badge egc-cloud-aws" title="Amazon Web Services">
                <img 
                  src="https://res.cloudinary.com/vpqvkwtj/image/upload/v1788851840/443727b5-1209-4e22-a591-1b1a65bc3ac9.png" 
                  alt="Amazon Web Services" 
                  className="egc-cloud-img" 
                  loading="lazy"
                />
              </div>
              <span className="egc-cloud-label">AWS</span>
            </div>

            <div className="egc-cloud-item">
              <div className="egc-cloud-badge egc-cloud-gcp" title="Google Cloud Platform">
                <img 
                  src="https://res.cloudinary.com/vpqvkwtj/image/upload/v1788851489/6ac4c360-66ef-449d-b8df-b9b2c234917e.png" 
                  alt="Google Cloud Platform" 
                  className="egc-cloud-img"
                  loading="lazy"
                />
              </div>
              <span className="egc-cloud-label">Google Cloud</span>
            </div>

            <div className="egc-cloud-item">
              <div className="egc-cloud-badge egc-cloud-local" title="Private Server / On-Premise">
                <img 
                  src="https://res.cloudinary.com/vpqvkwtj/image/upload/v1788851619/e2edded3-c09a-4a86-892e-09f530780b1c.png" 
                  alt="On-Premise Server" 
                  className="egc-cloud-img"
                  loading="lazy"
                />
              </div>
              <span className="egc-cloud-label">On-Premise</span>
            </div>
          </div>
        </div>

        {/* ── 10 Core Features Grid (Aanvitha Tech Genuine Capabilities) ── */}
        {/* Open 5-column layout without generic cards, compact & responsive */}
        <div className="egc-grid">
          
          {/* Item 1: Role-Based ERP Control */}
          <div className="egc-item">
            <div className="egc-widget-canvas">
              <div className="egc-w-admin-box">
                <div className="egc-w-admin-top">
                  <span className="egc-w-admin-tag">
                    <i className="fas fa-user-shield" style={{ color: '#3ee0d8', marginRight: '4px' }} /> Admin
                  </span>
                  <div className="egc-w-avatar-group">
                    <span className="egc-w-avatar egc-av-1" title="Receptionist" />
                    <span className="egc-w-avatar egc-av-2" title="Accountant" />
                    <span className="egc-w-avatar egc-av-3" title="Manager" />
                    <span className="egc-w-avatar-plus">+6</span>
                  </div>
                </div>
                <div className="egc-w-admin-grid">
                  <div className="egc-w-admin-col">
                    <span className="egc-app-link"><i className="fas fa-file-invoice-dollar" style={{ color: '#3ee0d8' }} /> Billing</span>
                    <span className="egc-app-link"><i className="fas fa-boxes" style={{ color: '#f5c16c' }} /> Stock</span>
                    <span className="egc-app-link"><i className="fas fa-chart-line" style={{ color: '#8b7cff' }} /> Reports</span>
                  </div>
                  <div className="egc-w-admin-col">
                    <span className="egc-app-link"><i className="fas fa-users-cog" style={{ color: '#10b981' }} /> Staff</span>
                    <span className="egc-app-link"><i className="fas fa-history" style={{ color: '#38bdf8' }} /> Audit</span>
                    <span className="egc-app-link"><i className="fas fa-lock" style={{ color: '#ef4444' }} /> Scoped</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="egc-feature-text">
              <strong className="egc-feature-title">Role-based ERP control.</strong> Configure custom permissions for Admins, Managers, Accountants, and Staff.
            </p>
          </div>

          {/* Item 2: Enterprise Single Sign-On (SSO) */}
          <div className="egc-item">
            <div className="egc-widget-canvas">
              <div 
                className="egc-w-sso-stack"
                onMouseEnter={() => setIsSsoPaused(true)}
                onMouseLeave={() => setIsSsoPaused(false)}
                title="Auto-cycling SSO providers (Click or hover to select)"
              >
                <div 
                  className="egc-sso-scroll-track"
                  onTransitionEnd={handleSsoTransitionEnd}
                  style={{
                    transform: `translateY(-${(ssoIndex - 1) * SSO_STEP_PX}px)`,
                    transition: ssoTransition ? 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
                  }}
                >
                  {triSsoOptions.map((opt, idx) => {
                    const isActive = idx === ssoIndex
                    return (
                      <div 
                        key={`${opt.id}-${idx}`}
                        className={`egc-sso-btn ${isActive ? 'egc-sso-active' : ''}`}
                        onClick={() => {
                          setSsoTransition(true)
                          setSsoIndex(idx)
                        }}
                        title={opt.name}
                      >
                        <i className={`${opt.icon} egc-sso-ico`} style={{ color: opt.color }} />
                        <span className="egc-sso-label">{opt.name}</span>
                        {isActive && <i className="fas fa-check egc-sso-active-check" />}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <p className="egc-feature-text">
              <strong className="egc-feature-title">Enterprise Single Sign-On.</strong> Seamless 1-click identity verification with Google, Microsoft, Okta, and SMS OTP.
            </p>
          </div>

          {/* Item 3: Multi-LLM AI Engine */}
          <div className="egc-item">
            <div className="egc-widget-canvas">
              <div className="egc-w-models-box">
                <div className="egc-models-scroll-container">
                  <div className="egc-models-track">
                    {/* Primary Set */}
                    {[
                      { id: 'gemini', name: 'Gemini 2.0 Flash', icon: 'fas fa-sparkles', color: '#3ee0d8', allowed: true },
                      { id: 'gpt', name: 'OpenAI GPT-4o', icon: 'fas fa-robot', color: '#10a37f', allowed: true },
                      { id: 'claude', name: 'Claude 3.5 Sonnet', icon: 'fas fa-brain', color: '#d97706', allowed: true },
                      { id: 'llama', name: 'Llama 3.3 70B', icon: 'fas fa-microchip', color: '#8b7cff', allowed: true },
                      { id: 'deepseek', name: 'DeepSeek R1 Local', icon: 'fas fa-server', color: '#38bdf8', allowed: true },
                      { id: 'mistral', name: 'Mistral Large 2', icon: 'fas fa-wind', color: '#f59e0b', allowed: true },
                      { id: 'gpt35', name: 'Legacy GPT-3.5', icon: 'fas fa-history', color: '#ef4444', allowed: false },
                      { id: 'uncensored', name: 'Public Raw AI', icon: 'fas fa-shield-virus', color: '#ef4444', allowed: false },
                      { id: 'unverified', name: 'Unsigned 3rd Party', icon: 'fas fa-ban', color: '#ef4444', allowed: false },
                      { id: 'rawapi', name: 'Zero-Filter APIs', icon: 'fas fa-exclamation-triangle', color: '#ef4444', allowed: false }
                    ].map((m, idx) => (
                      <div 
                        key={`m1-${m.id}-${idx}`}
                        className={`egc-model-row ${m.allowed ? '' : 'egc-model-blocked'} ${activeModel === m.id ? 'egc-model-selected' : ''}`}
                        onClick={() => m.allowed && setActiveModel(m.id)}
                        title={m.allowed ? `${m.name} (Production Ready)` : `${m.name} (Restricted/Blocked)`}
                      >
                        <span className="egc-model-name">
                          <i className={m.icon} style={{ color: m.color }} /> {m.name}
                        </span>
                        {m.allowed ? (
                          <i className="fas fa-check-circle egc-icon-check" />
                        ) : (
                          <i className="fas fa-times-circle egc-icon-cross" />
                        )}
                      </div>
                    ))}
                    {/* Duplicate Set for Seamless Infinite Vertical Marquee */}
                    {[
                      { id: 'gemini-dup', name: 'Gemini 2.0 Flash', icon: 'fas fa-sparkles', color: '#3ee0d8', allowed: true },
                      { id: 'gpt-dup', name: 'OpenAI GPT-4o', icon: 'fas fa-robot', color: '#10a37f', allowed: true },
                      { id: 'claude-dup', name: 'Claude 3.5 Sonnet', icon: 'fas fa-brain', color: '#d97706', allowed: true },
                      { id: 'llama-dup', name: 'Llama 3.3 70B', icon: 'fas fa-microchip', color: '#8b7cff', allowed: true },
                      { id: 'deepseek-dup', name: 'DeepSeek R1 Local', icon: 'fas fa-server', color: '#38bdf8', allowed: true },
                      { id: 'mistral-dup', name: 'Mistral Large 2', icon: 'fas fa-wind', color: '#f59e0b', allowed: true },
                      { id: 'gpt35-dup', name: 'Legacy GPT-3.5', icon: 'fas fa-history', color: '#ef4444', allowed: false },
                      { id: 'uncensored-dup', name: 'Public Raw AI', icon: 'fas fa-shield-virus', color: '#ef4444', allowed: false },
                      { id: 'unverified-dup', name: 'Unsigned 3rd Party', icon: 'fas fa-ban', color: '#ef4444', allowed: false },
                      { id: 'rawapi-dup', name: 'Zero-Filter APIs', icon: 'fas fa-exclamation-triangle', color: '#ef4444', allowed: false }
                    ].map((m, idx) => (
                      <div 
                        key={`m2-${m.id}-${idx}`}
                        className={`egc-model-row ${m.allowed ? '' : 'egc-model-blocked'} ${activeModel === m.id.replace('-dup', '') ? 'egc-model-selected' : ''}`}
                        onClick={() => m.allowed && setActiveModel(m.id.replace('-dup', ''))}
                        title={m.allowed ? `${m.name} (Production Ready)` : `${m.name} (Restricted/Blocked)`}
                      >
                        <span className="egc-model-name">
                          <i className={m.icon} style={{ color: m.color }} /> {m.name}
                        </span>
                        {m.allowed ? (
                          <i className="fas fa-check-circle egc-icon-check" />
                        ) : (
                          <i className="fas fa-times-circle egc-icon-cross" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="egc-feature-text">
              <strong className="egc-feature-title">Multi-LLM AI engine.</strong> Connect production-grade Gemini, OpenAI, Claude, or private on-premise AI models.
            </p>
          </div>

          {/* Item 4: Enterprise Data Security */}
          <div className="egc-item">
            <div className="egc-widget-canvas">
              <div className="egc-w-soc2-imgbox">
                <img 
                  src="https://res.cloudinary.com/vpqvkwtj/image/upload/v1788852068/1af7f596-23be-439f-aea2-a5c4368ecb7c.png" 
                  alt="Enterprise Data Security" 
                  className="egc-soc2-custom-img"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="egc-feature-text">
              <strong className="egc-feature-title">Enterprise data security.</strong> Military-grade AES-256 database encryption at rest and TLS 1.3 in transit.
            </p>
          </div>

          {/* Item 5: 100% Data Ownership & Privacy */}
          <div className="egc-item">
            <div className="egc-widget-canvas">
              <div className="egc-w-privacy-imgbox">
                <img 
                  src="https://res.cloudinary.com/vpqvkwtj/image/upload/v1788854100/16d1c718-84a7-4f8a-88e3-20fbd6f077cb.png" 
                  alt="100% Data Privacy" 
                  className="egc-privacy-custom-img"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="egc-feature-text">
              <strong className="egc-feature-title">100% Data privacy.</strong> You retain complete ownership of your code and customer database with zero vendor lock-in.
            </p>
          </div>

          {/* Item 6: Encrypted API & Secrets Vault */}
          <div className="egc-item">
            <div className="egc-widget-canvas">
              <div className="egc-w-pwd-box">
                <div className="egc-pwd-header">
                  <div className="egc-pwd-header-left">
                    <i className="fas fa-key egc-pwd-key-ico" />
                    <span>API Key Vault</span>
                  </div>
                  <span className="egc-vault-status-pill">
                    <i className="fas fa-lock" /> AES
                  </span>
                </div>

                <div className="egc-pwd-strip">
                  <div className="egc-pwd-stars">
                    {[...Array(8)].map((_, i) => (
                      <i 
                        key={i} 
                        className="fas fa-star egc-star-glyph" 
                        style={{ animationDelay: `${i * 0.25}s` }} 
                      />
                    ))}
                  </div>
                  <i className="fas fa-shield-alt egc-strip-lock" />
                </div>

                <div className="egc-pwd-badges">
                  <span className="egc-vbadge">
                    <i className="fas fa-bolt" /> Razorpay
                  </span>
                  <span className="egc-vbadge">
                    <i className="fab fa-whatsapp" /> WhatsApp
                  </span>
                  <span className="egc-vbadge">
                    <i className="fas fa-comment-dots" /> SMS
                  </span>
                </div>
              </div>
            </div>
            <p className="egc-feature-text">
              <strong className="egc-feature-title">Encrypted API vault.</strong> Hardware-grade secret management for payment gateways, WhatsApp API, and SMS keys.
            </p>
          </div>

          {/* Item 7: Custom Business Guardrails */}
          <div className="egc-item">
            <div className="egc-widget-canvas">
              <div className="egc-w-policy-box">
                <div className="egc-policy-item">
                  <span className="egc-policy-label">
                    <i className="fas fa-check" style={{ color: '#10b981' }} /> Verify bill before cancel
                  </span>
                  <i className="fas fa-check-circle egc-icon-check" />
                </div>
                <div className="egc-policy-item egc-policy-blocked">
                  <span className="egc-policy-label">
                    <i className="fas fa-ban" style={{ color: '#ef4444' }} /> Discount &gt; 20% without OTP
                  </span>
                  <i className="fas fa-times-circle egc-icon-cross" />
                </div>
                <p className="egc-policy-caption">"Enforce fraud protection & limits"</p>
              </div>
            </div>
            <p className="egc-feature-text">
              <strong className="egc-feature-title">Custom business guardrails.</strong> Enforce anti-fraud checks, billing caps, and mandatory approval workflows.
            </p>
          </div>

          {/* Item 8: Real-Time Activity Audit Trail */}
          <div className="egc-item">
            <div className="egc-widget-canvas">
              <div className="egc-w-mcp-flow">
                <span className="egc-mcp-lbl egc-mcp-tl">By Manager</span>
                <span className="egc-mcp-lbl egc-mcp-tr">Just now</span>

                <svg className="egc-mcp-svg" viewBox="0 0 180 84" fill="none" aria-hidden="true">
                  {/* Top-Left down to horizontal across to pill top */}
                  <path className="egc-mcp-path egc-mcp-path-tl" d="M 24 14 V 20 A 6 6 0 0 0 30 26 H 64 A 6 6 0 0 1 70 32 V 33" />
                  {/* Top-Right down to horizontal across to pill top */}
                  <path className="egc-mcp-path egc-mcp-path-tr" d="M 156 14 V 20 A 6 6 0 0 1 150 26 H 116 A 6 6 0 0 0 110 32 V 33" />
                  {/* Bottom-Left up to horizontal across to pill bottom */}
                  <path className="egc-mcp-path egc-mcp-path-bl" d="M 24 70 V 64 A 6 6 0 0 1 30 58 H 64 A 6 6 0 0 0 70 52 V 51" />
                  {/* Bottom-Right from pill bottom down to Executed */}
                  <path className="egc-mcp-path egc-mcp-path-br" d="M 110 51 V 52 A 6 6 0 0 0 116 58 H 150 A 6 6 0 0 1 156 64 V 70" />
                </svg>

                <div className="egc-mcp-pill-node">
                  <i className="fas fa-file-invoice" style={{ color: '#3ee0d8', fontSize: '1.15rem' }} />
                  <strong className="egc-mcp-brand">Invoice</strong>
                  <span className="egc-mcp-action">#2489 Logged</span>
                </div>

                <span className="egc-mcp-lbl egc-mcp-bl">Via ERP Core</span>
                <span className="egc-mcp-lbl egc-mcp-br">Encrypted</span>
              </div>
            </div>
            <p className="egc-feature-text">
              <strong className="egc-feature-title">Real-time audit trails.</strong> Tamper-proof logs tracking every billing edit, login, and inventory shift with timestamps.
            </p>
          </div>

          {/* Item 9: Automated Daily Cloud Backups */}
          <div className="egc-item">
            <div className="egc-widget-canvas">
              <div className="egc-w-bar-chart">
                <div className="egc-chart-bars">
                  <div className="egc-bar-col">
                    <span className="egc-bar-val">✓ Mon</span>
                    <div className="egc-bar egc-bar-1" />
                    <span className="egc-bar-lbl">Cloud</span>
                  </div>
                  <div className="egc-bar-col">
                    <span className="egc-bar-val">✓ Tue</span>
                    <div className="egc-bar egc-bar-2" />
                    <span className="egc-bar-lbl">Daily</span>
                  </div>
                  <div className="egc-bar-col">
                    <span className="egc-bar-val">✓ Today</span>
                    <div className="egc-bar egc-bar-3" />
                    <span className="egc-bar-lbl">Live</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="egc-feature-text">
              <strong className="egc-feature-title">Automated daily backups.</strong> Geo-redundant database snapshots with point-in-time instant recovery.
            </p>
          </div>

          {/* Item 10: Multi-Branch & Cloud Scalability */}
          <div className="egc-item">
            <div className="egc-widget-canvas">
              <div className="egc-w-spend-modal" title="Multi-Location 2-Way Realtime Replication">
                {/* Header */}
                <div className="egc-sync-hdr">
                  <div className="egc-sync-hdr-title">
                    <i className="fas fa-network-wired egc-sync-hdr-ico" />
                    <span>Multi-Location Sync</span>
                  </div>
                  <div className="egc-sync-live-badge">
                    <span className="egc-sync-live-dot" />
                    <span>14ms</span>
                  </div>
                </div>

                {/* Live Nodes & Replication Highway */}
                <div className="egc-sync-nodes-row">
                  <div 
                    className={`egc-sync-node ${activeBranch === 'Pune (HQ)' ? 'active' : ''}`}
                    onClick={() => setActiveBranch('Pune (HQ)')}
                    title="Click to view Pune Primary DB"
                  >
                    <span className="egc-node-title">
                      <i className="fas fa-building" />
                      Pune (HQ)
                    </span>
                    <span className="egc-node-role">Primary DB</span>
                    <span className="egc-node-state">
                      <i className="fas fa-check-circle" /> Synced
                    </span>
                  </div>

                  <div className="egc-sync-highway">
                    <div className="egc-highway-track">
                      <div className="egc-highway-pulse" />
                    </div>
                    <span className="egc-highway-lbl">⇄ 2-Way</span>
                  </div>

                  <div 
                    className={`egc-sync-node ${activeBranch === 'Mumbai' ? 'active' : ''}`}
                    onClick={() => setActiveBranch('Mumbai')}
                    title="Click to view Mumbai Retail Hub"
                  >
                    <span className="egc-node-title">
                      <i className="fas fa-store" />
                      Mumbai
                    </span>
                    <span className="egc-node-role">Retail Hub</span>
                    <span className="egc-node-state">
                      <i className="fas fa-check-circle" /> Synced
                    </span>
                  </div>
                </div>

                {/* Telemetry Status Bar */}
                <div className="egc-sync-footer">
                  <span className="egc-sync-foot-item">
                    <i className="fas fa-boxes" /> Stock: Live
                  </span>
                  <span className="egc-sync-foot-div">•</span>
                  <span className="egc-sync-foot-item">
                    <i className="fas fa-shield-alt" /> 0 Conflict
                  </span>
                </div>
              </div>
            </div>
            <p className="egc-feature-text">
              <strong className="egc-feature-title">Multi-branch scalability.</strong> Centralized visibility to run multi-location hotels, hospitals, and stores in real time.
            </p>
          </div>

        </div>

        {/* Bottom Contact / Architecture Review Callout */}
        <div className="egc-bottom-cta">
          <button 
            type="button" 
            className="btn btn--primary" 
            onClick={() => onNavigate && onNavigate('Contact')}
          >
            Consult Our Solution Architect
          </button>
        </div>
      </div>
    </section>
  )
}
