import { useEffect, useState } from 'react'

export function ServiceDetailPage({ service, allServices = [], onNavigateHome, onSelectService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  // Scroll to top when service changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setSubmitted(false)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }, [service?.id])

  if (!service) {
    return (
      <div className="sd-page-clean">
        <div className="services-container" style={{ textAlign: 'center', padding: '10rem 2rem' }}>
          <h2>Service Not Found</h2>
          <p style={{ color: 'var(--muted)', margin: '1.6rem 0 2.4rem' }}>
            The requested service could not be located.
          </p>
          <button
            type="button"
            className="btn btn-primary-glow"
            onClick={() => onNavigateHome('services')}
          >
            ← Browse All Services
          </button>
        </div>
      </div>
    )
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const serviceNum = service.id < 10 ? `0${service.id}` : `${service.id}`

  const whatsappText = encodeURIComponent(
    `Hello AANVITA Technologies, I am interested in getting started with ${service.title} (Service #${serviceNum}).`
  )

  // Core features from original design presented as clean list items (NOT cards)
  const coreFeatures = [
    {
      title: 'Fast Deployment',
      desc: 'Ready-to-integrate APIs, prebuilt SDKs, and turnkey configuration for zero-lag launch.',
    },
    {
      title: 'Enterprise Security',
      desc: 'End-to-end encryption, strict access governance, and SOC2-ready compliance out of the box.',
    },
    {
      title: 'Scalable & Reliable',
      desc: 'Cloud-native architecture engineered for ultra-high throughput and continuous 99.9% uptime.',
    },
    {
      title: '24/7 Technical Support',
      desc: 'Dedicated enterprise engineering team providing continuous maintenance, health checks, and rapid SLA.',
    },
  ]

  // Clean capability highlights tailored to category (clean borderless list items)
  const categoryHighlights = {
    'AI & Automation': [
      { label: 'Latency', value: 'Sub-second real-time response pipelines' },
      { label: 'Data Privacy', value: 'Zero model retention on proprietary business data' },
      { label: 'Integrations', value: 'WhatsApp, Telegram, Webhooks & enterprise CRMs' },
      { label: 'Architecture', value: 'Multi-agent orchestration & vector memory' },
    ],
    'Fintech & Payments': [
      { label: 'Compliance', value: 'PCI-DSS certified tokenization & KYC/AML screening' },
      { label: 'Routing', value: 'Smart multi-rail failover with 99.99% payment success' },
      { label: 'Settlement', value: 'Instant reconciliation, split payouts & tax invoicing' },
      { label: 'Security', value: 'Bank-grade 256-bit encryption & anti-fraud AI' },
    ],
    'Enterprise & ERP': [
      { label: 'Data Fabric', value: 'Real-time sync across inventory, HR, finance & CRM' },
      { label: 'Governance', value: 'Granular role-based access control & full audit trails' },
      { label: 'Scale', value: 'Multi-tenant cloud architecture with zero downtime' },
      { label: 'Analytics', value: 'Live executive dashboards & automated report export' },
    ],
    'Growth & Operations': [
      { label: 'Channels', value: 'Centralized publishing across Facebook, IG, LinkedIn & X' },
      { label: 'Conversion', value: 'Frictionless checkout, cart recovery & lead capture' },
      { label: 'Automation', value: 'Event-driven triggers, reminders & client notifications' },
      { label: 'Telemetry', value: 'Deep engagement analytics, ROAS tracking & reporting' },
    ],
  }[service.category] || [
    { label: 'Speed', value: 'Turnkey deployment with modular microservices' },
    { label: 'Security', value: 'Hardened endpoints, SSL/TLS & encrypted databases' },
    { label: 'Capacity', value: 'Engineered for high concurrency & enterprise scale' },
    { label: 'Support', value: 'Direct access to senior solutions architects 24/7' },
  ]

  return (
    <div className="sd-page-clean">
      {/* ── Top Minimalist Bar ── */}
      <nav className="sd-top-bar" aria-label="Breadcrumb">
        <div className="services-container sd-top-inner">
          <div className="services-breadcrumb">
            <button
              type="button"
              onClick={() => onNavigateHome('home')}
              className="breadcrumb-link"
            >
              <i className="fas fa-home" /> Home
            </button>
            <span className="breadcrumb-separator">/</span>
            <button
              type="button"
              onClick={() => onNavigateHome('services')}
              className="breadcrumb-link"
            >
              Services
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{service.title}</span>
          </div>

          <button
            type="button"
            onClick={() => onNavigateHome('services')}
            className="sd-clean-back-btn"
          >
            <i className="fas fa-arrow-left" /> Back to Services
          </button>
        </div>
      </nav>

      {/* ── Main Hero Section (Clean Typographic - No Image, No Top Buttons) ── */}
      <section className="sd-clean-hero">
        <div className="services-container">
          <div className="sd-clean-hero-content">
            <div className="sd-meta-line">
              <span className="sd-meta-number">SERVICE #{serviceNum}</span>
              <span className="sd-meta-dot">•</span>
              <span className="sd-meta-category">{service.category}</span>
              <span className="sd-meta-dot">•</span>
              <span className="sd-meta-live">
                <span className="live-dot" /> Production Ready
              </span>
            </div>

            <h1 className="sd-clean-title">{service.title}</h1>

            <p className="sd-clean-description">{service.description}</p>

            {/* Clean Feature List with checkmarks */}
            <div className="sd-clean-feature-list">
              {coreFeatures.map((feat) => (
                <div key={feat.title} className="sd-clean-feature-item">
                  <div className="sd-feat-bullet">
                    <i className="fas fa-check" />
                  </div>
                  <div className="sd-feat-text">
                    <strong>{feat.title}</strong>
                    <span> — {feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities Specs Strip (Borderless, Clean) ── */}
      <section className="sd-clean-specs-section">
        <div className="services-container">
          <div className="sd-specs-header">
            <span className="section-kicker">Specifications</span>
            <h2>Key Capabilities & Technical Highlights</h2>
          </div>

          <div className="sd-specs-table">
            {categoryHighlights.map((spec, i) => (
              <div key={i} className="sd-spec-row">
                <span className="sd-spec-label">{spec.label}</span>
                <span className="sd-spec-value">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrated Form Section (Clean Split Layout, No Nested Box Cards) ── */}
      <section id="inquiry-section" className="sd-clean-form-section">
        <div className="services-container">
          <div className="sd-form-split-layout">
            {/* Left Column: Context & Direct Contact */}
            <div className="sd-form-left-col">
              <span className="section-kicker">Instant Onboarding</span>
              <h2>
                Request a Demo for <span>{service.title}</span>
              </h2>
              <p>
                Fill out the quick inquiry details below. Our enterprise solutions team will review
                your architecture requirements and schedule an interactive demo.
              </p>

              <div className="sd-direct-contact-box">
                <div className="sd-direct-point">
                  <i className="fas fa-bolt" />
                  <div>
                    <strong>24-Hour SLA</strong>
                    <span>Direct engineering consultation within one business day.</span>
                  </div>
                </div>
                <div className="sd-direct-point">
                  <i className="fas fa-shield-alt" />
                  <div>
                    <strong>NDA Protected</strong>
                    <span>Your proprietary data and requirements remain strictly confidential.</span>
                  </div>
                </div>
                <div className="sd-direct-point">
                  <i className="fab fa-whatsapp" />
                  <div>
                    <strong>Need Immediate Answers?</strong>
                    <a
                      href={`https://wa.me/919999999999?text=${whatsappText}`}
                      target="_blank"
                      rel="noreferrer"
                      className="sd-inline-wa-link"
                    >
                      Click here to chat instantly on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="sd-form-right-col">
              {!submitted ? (
                <form className="sd-minimal-form" onSubmit={handleFormSubmit}>
                  <div className="sd-form-row">
                    <div className="svc-field">
                      <label>Your Name *</label>
                      <div className="svc-input-box">
                        <i className="fas fa-user" />
                        <input
                          type="text"
                          placeholder="e.g. Rahul Sharma"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="svc-field">
                      <label>Phone / WhatsApp *</label>
                      <div className="svc-input-box">
                        <i className="fas fa-phone-alt" />
                        <input
                          type="tel"
                          placeholder="e.g. +971 50 123 4567"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="svc-field">
                    <label>Work Email *</label>
                    <div className="svc-input-box">
                      <i className="fas fa-envelope" />
                      <input
                        type="email"
                        placeholder="your.email@company.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="svc-field">
                    <label>Project Details / Custom Requirements (Optional)</label>
                    <div className="svc-input-box svc-textarea-box">
                      <i className="fas fa-comment-dots" />
                      <textarea
                        rows="3"
                        placeholder={`Tell us what you want to build or integrate with ${service.title}...`}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="sd-form-footer-buttons">
                    <button type="submit" className="btn btn-primary-glow sd-btn-submit-main">
                      <i className="fas fa-paper-plane" /> Submit Request for {service.title}
                    </button>
                    <a
                      href={`https://wa.me/919999999999?text=${whatsappText}`}
                      target="_blank"
                      rel="noreferrer"
                      className="sd-clean-wa-btn"
                    >
                      <i className="fab fa-whatsapp" /> Chat on WhatsApp
                    </a>
                  </div>
                </form>
              ) : (
                <div className="sd-clean-success-box">
                  <div className="svc-success-icon-wrap">
                    <i className="fas fa-check-circle" />
                  </div>
                  <h3>Request Received Successfully!</h3>
                  <p className="svc-success-lead">
                    Thank you <strong>{formData.name || 'valued customer'}</strong>! Your inquiry for{' '}
                    <strong>{service.title}</strong> has been registered.
                  </p>
                  <p className="svc-success-sub">
                    Our technical consultant will review your requirements and reach out to you at{' '}
                    <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> within 24 hours.
                  </p>
                  <div className="svc-success-actions">
                    <button
                      type="button"
                      className="btn btn-primary-glow"
                      onClick={() => onNavigateHome('services')}
                    >
                      ← Back to All Services
                    </button>
                    <a
                      href={`https://wa.me/919999999999?text=${encodeURIComponent(
                        `Hello AANVITA Technologies, I just submitted a request for ${service.title}.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="svc-btn-whatsapp"
                    >
                      <i className="fab fa-whatsapp" /> Connect on WhatsApp Now
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Minimal Footer Navigation Bar ── */}
      <div className="sd-bottom-bar">
        <div className="services-container sd-bottom-inner">
          <div>
            <h4>Looking for other enterprise capabilities?</h4>
            <p>Explore our complete suite of 22 digital systems, AI platforms, and fintech rails.</p>
          </div>
          <button
            type="button"
            className="btn btn-primary-glow"
            onClick={() => onNavigateHome('services')}
          >
            Browse All 22 Services <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  )
}
