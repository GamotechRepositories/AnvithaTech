import { useState } from 'react'
import './EnterpriseControlsSection.css'

export function EnterpriseControlsSection({ onNavigate }) {
  // Interactive state for Model Restrictions widget
  const [modelStates, setModelStates] = useState({
    claude: true,
    gemini: true,
    gpt: true,
    deepseek: false,
    grok: false,
  })

  // Interactive state for Spend Cap Approval widget
  const [approvalStatus, setApprovalStatus] = useState('pending') // 'pending' | 'approved' | 'denied'

  const toggleModel = (key) => {
    setModelStates((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section className="enterprise-controls-section" id="security-controls">
      {/* Background ambient lighting and grid */}
      <div className="ent-bg-glow ent-bg-glow--left" aria-hidden="true" />
      <div className="ent-bg-glow ent-bg-glow--right" aria-hidden="true" />
      <div className="ent-grid-overlay" aria-hidden="true" />

      <div className="ent-container">
        {/* Section Header */}
        <header className="ent-header" data-reveal>
          <div
            className="ent-kicker-badge"
            role="button"
            tabIndex={0}
            onClick={() => onNavigate && onNavigate('contact')}
            onKeyDown={(e) => e.key === 'Enter' && onNavigate && onNavigate('contact')}
          >
            <span>Controls</span>
            <i className="fas fa-arrow-right" />
          </div>
          <h2 className="ent-title">Enterprise-grade controls</h2>
          <p className="ent-subtitle">
            Security, private cloud isolation, and governance built for high-scale enterprise operations.
          </p>
        </header>

        {/* ── Top Bento Grid (Usage Monitoring, Audit Logging, VPC Deployments) ── */}
        <div className="ent-bento-grid">
          {/* Card 1: Usage Monitoring (Left Wide Card) */}
          <div className="ent-card ent-card--usage" data-reveal>
            <div className="ent-usage-metrics">
              <div className="ent-metric-col">
                <span className="ent-metric-label">Credits used</span>
                <span className="ent-metric-val">48.6k</span>
              </div>
              <div className="ent-metric-col">
                <span className="ent-metric-label">Spend</span>
                <span className="ent-metric-val">$243.00</span>
              </div>
              <div className="ent-metric-col">
                <span className="ent-metric-label">Budget used</span>
                <span className="ent-metric-val ent-metric-val--highlight">86%</span>
              </div>
            </div>

            {/* Interactive Trend Chart Graphic */}
            <div className="ent-chart-container">
              {/* Legend lines */}
              <div className="ent-chart-legend">
                <span className="ent-legend-tag ent-legend-tag--current">This quarter</span>
                <span className="ent-legend-tag ent-legend-tag--budget">Budget</span>
                <span className="ent-legend-tag ent-legend-tag--past">Last quarter</span>
              </div>

              {/* Chart SVG Graphic */}
              <div className="ent-chart-stage">
                {/* Projected Overrun Alert Tooltip */}
                <div className="ent-chart-tooltip">
                  <div className="ent-tooltip-inner">
                    <i className="fas fa-exclamation-triangle" />
                    <div>
                      <strong>At Risk</strong>
                      <span>Projected overrun</span>
                    </div>
                  </div>
                  <div className="ent-tooltip-stem" />
                </div>

                <svg className="ent-chart-svg" viewBox="0 0 540 180" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ff007a" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#ff007a" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Budget threshold dashed line */}
                  <line x1="20" y1="75" x2="520" y2="75" stroke="#374151" strokeDasharray="4 4" strokeWidth="1.5" />

                  {/* Last Quarter Line (Muted Grey) */}
                  <path
                    d="M 30,135 Q 150,138 270,132 T 510,128"
                    fill="none"
                    stroke="#4b5563"
                    strokeWidth="2"
                    strokeOpacity="0.7"
                  />
                  {/* Dots for last quarter */}
                  <circle cx="30" cy="135" r="3.5" fill="#1e2230" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="150" cy="138" r="3.5" fill="#1e2230" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="270" cy="132" r="3.5" fill="#1e2230" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="390" cy="130" r="3.5" fill="#1e2230" stroke="#4b5563" strokeWidth="2" />
                  <circle cx="510" cy="128" r="3.5" fill="#1e2230" stroke="#4b5563" strokeWidth="2" />

                  {/* Current Quarter Area & Curve (Vibrant Neon Pink) */}
                  <path
                    d="M 30,120 Q 150,110 270,82 T 510,38 L 510,175 L 30,175 Z"
                    fill="url(#pinkGrad)"
                  />
                  <path
                    d="M 30,120 Q 150,110 270,82 T 510,38"
                    fill="none"
                    stroke="#ff007a"
                    strokeWidth="3"
                  />

                  {/* Dots for current quarter */}
                  <circle cx="30" cy="120" r="4.5" fill="#ff007a" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="150" cy="110" r="4.5" fill="#ff007a" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="270" cy="82" r="5" fill="#ffffff" stroke="#ff007a" strokeWidth="2.5" className="ent-pulse-node" />
                  <circle cx="390" cy="60" r="4.5" fill="#ff007a" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="510" cy="38" r="4.5" fill="#ff007a" stroke="#ffffff" strokeWidth="2" />
                </svg>

                {/* X-Axis Month Labels */}
                <div className="ent-chart-axis">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span className="ent-axis-highlight">Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                </div>
              </div>
            </div>

            <div className="ent-card-copy">
              <h3>Usage monitoring</h3>
              <p>
                Track organization-wide credit and API usage in real time. Implement budget, token limits,
                and quota controls to avoid surprises.
              </p>
            </div>
          </div>

          {/* Right Column: Stacked Cards (Audit Logging & VPC Deployments) */}
          <div className="ent-bento-col-right">
            {/* Card 2: Audit Logging */}
            <div className="ent-card ent-card--audit" data-reveal>
              <div className="ent-audit-status">
                <span className="ent-pulse-radar" />
                <span className="ent-status-text">Capturing...</span>
              </div>

              <div className="ent-audit-feed">
                <div className="ent-audit-item">
                  <span className="ent-feed-node" />
                  <p>
                    <strong>Kat</strong> updated Aron's role to Admin
                  </p>
                </div>
                <div className="ent-audit-item">
                  <span className="ent-feed-node" />
                  <p>
                    <strong>Rahul</strong> invited a new workspace member
                  </p>
                </div>
                <div className="ent-audit-item">
                  <span className="ent-feed-node" />
                  <p>
                    <strong>Max</strong> created the Data Analyst agent
                  </p>
                </div>
                <div className="ent-audit-item ent-audit-item--masked">
                  <span className="ent-feed-node" />
                  <p>
                    <strong>System</strong> exported encrypted SOC 2 audit log
                  </p>
                </div>
              </div>

              <div className="ent-card-copy">
                <h3>Audit logging</h3>
                <p>
                  Capture detailed audit trails for actions across the organization to understand where data is flowing.
                </p>
              </div>
            </div>

            {/* Card 3: VPC Deployments */}
            <div className="ent-card ent-card--vpc" data-reveal>
              <div className="ent-cloud-logos">
                {/* Microsoft Azure */}
                <div className="ent-cloud-badge ent-cloud-badge--azure" title="Microsoft Azure">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                    <path d="M12.9 2L4 16.5h6.2L12.9 2z" fill="#0078d4" />
                    <path d="M13.6 5.5l-2.7 4.5 4.3 7h4.8l-6.4-11.5z" fill="#50e6ff" />
                  </svg>
                  <span>Azure</span>
                </div>

                {/* AWS */}
                <div className="ent-cloud-badge ent-cloud-badge--aws" title="Amazon Web Services">
                  <i className="fab fa-aws" />
                  <span>AWS</span>
                </div>

                {/* Google Cloud */}
                <div className="ent-cloud-badge ent-cloud-badge--gcp" title="Google Cloud Platform">
                  <i className="fab fa-google" />
                  <span>Google Cloud</span>
                </div>
              </div>

              <div className="ent-card-copy">
                <h3>VPC deployments</h3>
                <p>
                  Deploy Aanvitha platforms inside your own AWS, Azure, or Google Cloud environment to keep data in your private network.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom 10-Item Enterprise Governance Matrix ── */}
        <div className="ent-features-matrix">
          {/* 1. Roles and Permissions */}
          <div className="ent-matrix-item" data-reveal>
            <div className="ent-mini-widget ent-mini-widget--roles">
              <div className="ent-role-header">
                <span className="ent-role-pill">Admin</span>
                <div className="ent-avatar-stack">
                  <span className="ent-avatar ent-avatar--1">K</span>
                  <span className="ent-avatar ent-avatar--2">R</span>
                  <span className="ent-avatar ent-avatar--3">M</span>
                  <span className="ent-avatar-more">+4</span>
                </div>
              </div>
              <div className="ent-integration-pills">
                <span className="ent-chip"><i className="fab fa-slack" /> Slack</span>
                <span className="ent-chip"><i className="fas fa-envelope" /> Gmail</span>
                <span className="ent-chip"><i className="fab fa-github" /> GitHub</span>
                <span className="ent-chip"><i className="fas fa-stream" /> Linear</span>
                <span className="ent-chip"><i className="fab fa-jira" /> Jira</span>
              </div>
            </div>
            <h4>Roles and permissions.</h4>
            <p>Manage reusable roles, credentials, and secrets with scoped access.</p>
          </div>

          {/* 2. SAML SSO and SCIM */}
          <div className="ent-matrix-item" data-reveal>
            <div className="ent-mini-widget ent-mini-widget--sso">
              <div className="ent-sso-item">
                <i className="far fa-circle" />
                <span>Sign in with Okta</span>
              </div>
              <div className="ent-sso-item">
                <i className="fab fa-google" />
                <span>Sign in with Google</span>
              </div>
              <div className="ent-sso-item">
                <i className="fab fa-microsoft" />
                <span>Sign in with Microsoft</span>
              </div>
              <div className="ent-sso-item ent-sso-item--azure">
                <span className="ent-azure-icon">A</span>
                <span>Sign in with Azure AD</span>
              </div>
            </div>
            <h4>SAML SSO and SCIM.</h4>
            <p>Securely streamline identity and access management.</p>
          </div>

          {/* 3. AI Model Restrictions */}
          <div className="ent-matrix-item" data-reveal>
            <div className="ent-mini-widget ent-mini-widget--models">
              <div
                className={`ent-model-toggle ${modelStates.claude ? 'is-allowed' : 'is-blocked'}`}
                onClick={() => toggleModel('claude')}
              >
                <span className="ent-model-name">
                  <i className="fas fa-brain" /> Claude 3.5 Sonnet
                </span>
                <span className="ent-toggle-badge">{modelStates.claude ? '✓' : '✕'}</span>
              </div>
              <div
                className={`ent-model-toggle ${modelStates.gemini ? 'is-allowed' : 'is-blocked'}`}
                onClick={() => toggleModel('gemini')}
              >
                <span className="ent-model-name">
                  <i className="fas fa-bolt" /> Gemini 2.5/3.6 Flash
                </span>
                <span className="ent-toggle-badge">{modelStates.gemini ? '✓' : '✕'}</span>
              </div>
              <div
                className={`ent-model-toggle ${modelStates.gpt ? 'is-allowed' : 'is-blocked'}`}
                onClick={() => toggleModel('gpt')}
              >
                <span className="ent-model-name">
                  <i className="fas fa-robot" /> GPT-4o Enterprise
                </span>
                <span className="ent-toggle-badge">{modelStates.gpt ? '✓' : '✕'}</span>
              </div>
              <div
                className={`ent-model-toggle ${modelStates.deepseek ? 'is-allowed' : 'is-blocked'}`}
                onClick={() => toggleModel('deepseek')}
              >
                <span className="ent-model-name">
                  <i className="fas fa-code-branch" /> DeepSeek V3
                </span>
                <span className="ent-toggle-badge">{modelStates.deepseek ? '✓' : '✕'}</span>
              </div>
            </div>
            <h4>AI model restrictions.</h4>
            <p>Control which AI models and cognitive engines teams can use.</p>
          </div>

          {/* 4. SOC 2 Type II */}
          <div className="ent-matrix-item" data-reveal>
            <div className="ent-mini-widget ent-mini-widget--soc">
              <div className="ent-shield-wrapper">
                <span className="ent-shield-glow" />
                <div className="ent-shield-icon">
                  <i className="fas fa-shield-alt" />
                </div>
              </div>
            </div>
            <h4>SOC 2 Type II.</h4>
            <p>Independently audited and compliant architecture.</p>
          </div>

          {/* 5. GDPR & Sovereignty */}
          <div className="ent-matrix-item" data-reveal>
            <div className="ent-mini-widget ent-mini-widget--gdpr">
              <div className="ent-gdpr-badge">
                <div className="ent-star-ring">
                  {[...Array(12)].map((_, i) => (
                    <span key={i} className="ent-star" style={{ transform: `rotate(${i * 30}deg) translateY(-26px)` }}>★</span>
                  ))}
                </div>
                <i className="fas fa-lock ent-gdpr-lock" />
              </div>
            </div>
            <h4>GDPR.</h4>
            <p>Zero Data Retention agreements for private models.</p>
          </div>

          {/* 6. Credential Management */}
          <div className="ent-matrix-item" data-reveal>
            <div className="ent-mini-widget ent-mini-widget--credentials">
              <div className="ent-secret-box">
                <span className="ent-secret-bullet" />
                <span className="ent-secret-bullet" />
                <span className="ent-secret-bullet" />
                <span className="ent-secret-bullet" />
                <span className="ent-secret-bullet" />
                <span className="ent-secret-bullet" />
                <span className="ent-secret-bullet" />
                <span className="ent-secret-bullet" />
              </div>
            </div>
            <h4>Credential management.</h4>
            <p>Store secrets in one place and scope who can use them.</p>
          </div>

          {/* 7. App Policies and Guardrails */}
          <div className="ent-matrix-item" data-reveal>
            <div className="ent-mini-widget ent-mini-widget--guardrails">
              <div className="ent-policy-row ent-policy-row--allowed">
                <span><i className="fas fa-envelope" /> Email a teammate</span>
                <span className="ent-policy-check">✓</span>
              </div>
              <div className="ent-policy-row ent-policy-row--blocked">
                <span><i className="fas fa-envelope-open" /> Email a vendor</span>
                <span className="ent-policy-cross">✕</span>
              </div>
              <div className="ent-rule-tag">"Block all external emails"</div>
            </div>
            <h4>App policies and guardrails.</h4>
            <p>Write plain English rules that block, tag, or log actions before they run.</p>
          </div>

          {/* 8. MCP Client and Server Tracking */}
          <div className="ent-matrix-item" data-reveal>
            <div className="ent-mini-widget ent-mini-widget--tracking">
              <div className="ent-flow-diagram">
                <div className="ent-flow-meta">
                  <span className="ent-flow-author">By Operator</span>
                  <span className="ent-flow-date">Sep 17</span>
                </div>
                <div className="ent-flow-node">
                  <i className="fab fa-slack" />
                  <span>Slack</span>
                  <small>send message</small>
                </div>
                <div className="ent-flow-footer">
                  <span>Via Claude</span>
                  <span className="ent-executed-tag">Executed</span>
                </div>
              </div>
            </div>
            <h4>MCP client and server tracking.</h4>
            <p>Trace every tool call through one logging and analytics layer.</p>
          </div>

          {/* 9. Reporting and Analytics */}
          <div className="ent-matrix-item" data-reveal>
            <div className="ent-mini-widget ent-mini-widget--analytics">
              <div className="ent-bar-chart">
                <div className="ent-bar-group">
                  <span className="ent-bar-label">1.2k</span>
                  <div className="ent-bar ent-bar--q1" />
                  <span className="ent-bar-quarter">Q1</span>
                </div>
                <div className="ent-bar-group">
                  <span className="ent-bar-label">2.6k</span>
                  <div className="ent-bar ent-bar--q2" />
                  <span className="ent-bar-quarter">Q2</span>
                </div>
                <div className="ent-bar-group">
                  <span className="ent-bar-label ent-bar-label--hi">5.4k</span>
                  <div className="ent-bar ent-bar--q3" />
                  <span className="ent-bar-quarter">Q3</span>
                </div>
              </div>
            </div>
            <h4>Reporting and analytics.</h4>
            <p>See AI adoption, usage, and outcomes for every team in one place.</p>
          </div>

          {/* 10. Spend Caps and Approvals */}
          <div className="ent-matrix-item" data-reveal>
            <div className="ent-mini-widget ent-mini-widget--spend">
              <div className="ent-approval-dialog">
                <div className="ent-approval-title">
                  <i className="fas fa-credit-card" />
                  <span>Credit increase request</span>
                </div>
                <p className="ent-approval-desc">
                  Gonzalo hit the 50k cap on Deal Reviewer. Raise to 75k?
                </p>
                <div className="ent-approval-actions">
                  {approvalStatus === 'pending' ? (
                    <>
                      <button
                        type="button"
                        className="ent-btn-deny"
                        onClick={() => setApprovalStatus('denied')}
                      >
                        Deny
                      </button>
                      <button
                        type="button"
                        className="ent-btn-approve"
                        onClick={() => setApprovalStatus('approved')}
                      >
                        Approve
                      </button>
                    </>
                  ) : (
                    <div className={`ent-approval-confirmed ${approvalStatus}`}>
                      {approvalStatus === 'approved' ? '✓ Approved' : '✕ Denied'}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <h4>Spend caps and approvals.</h4>
            <p>Cap spend by agent, team, or org, and approve costly actions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
