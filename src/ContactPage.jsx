import { useState } from 'react'

const contactMethods = [
  {
    icon: 'fas fa-phone-alt',
    title: 'Call Us Directly',
    detail: '+971 00000 00000',
    sub: 'Mon - Sat: 9:00 AM - 7:00 PM GST',
    actionText: 'Call Now',
    actionHref: 'tel:+971000000000',
    color: '#005eb8',
  },
  {
    icon: 'fas fa-envelope-open-text',
    title: 'Email Us',
    detail: 'info@aanvitatechnologies.com',
    sub: 'Guaranteed reply within 24 hours',
    actionText: 'Send Email',
    actionHref: 'mailto:info@aanvitatechnologies.com',
    color: '#00bfff',
  },
  {
    icon: 'fab fa-whatsapp',
    title: 'Chat on WhatsApp',
    detail: '+971 00000 00000',
    sub: 'Instant technical & sales assistance',
    actionText: 'Start Chat',
    actionHref: 'https://wa.me/971000000000',
    color: '#25d366',
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Office Location',
    detail: 'Naif, Deira, Dubai, UAE',
    sub: 'Al Budoor Building • Land DM No. 118-1220',
    actionText: 'View on Map',
    actionHref: '#office-map',
    color: '#7c3aed',
  },
]

const servicesOptions = [
  'AI Chatbots & Voice Automation',
  'Custom SaaS & Web Platform',
  'Fintech & Payment Infrastructure',
  'Enterprise CRM / ERP Solution',
  'Cloud Architecture & DevOps',
  'Digital Transformation Consulting',
  'Other / General Inquiry',
]

const budgetRanges = [
  'Under $5,000 / ₹3-5 Lakhs',
  '$5,000 - $15,000 / ₹5-12 Lakhs',
  '$15,000 - $40,000 / ₹12-30 Lakhs',
  '$40,000+ / Enterprise Retainer',
  'Flexible / Need Advice',
]

export function ContactPage({ onNavigateHome }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: servicesOptions[0],
    budget: budgetRanges[1],
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: servicesOptions[0],
      budget: budgetRanges[1],
      message: '',
    })
  }

  return (
    <div className="contact-page">
      {/* ── Hero Section ── */}
      <section className="cp-hero">
        <div className="cp-hero-inner">
          <div className="contact-breadcrumb">
            <button type="button" onClick={() => onNavigateHome('home')} className="breadcrumb-link">
              <i className="fas fa-home" /> Home
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Contact</span>
          </div>
          <h1>
            Let's Build Something <span>Extraordinary Together</span>
          </h1>
          <p>
            Have a project in mind, need advice on AI and SaaS architecture, or
            looking for a dedicated tech partner? Reach out and our senior engineers
            will get back to you within 24 hours.
          </p>
        </div>
        <div className="career-hero-circle c1" />
        <div className="career-hero-circle c2" />
        <div className="career-hero-circle c3" />
      </section>

      {/* ── Contact Methods (Single Unified Card) ── */}
      <section className="cp-methods-section">
        <div className="cp-container">
          <div className="cp-unified-contact-card">
            <div className="cp-unified-grid">
              {contactMethods.map((m) => (
                <div key={m.title} className="cp-unified-item">
                  <div
                    className="cp-unified-icon"
                    style={{ background: `${m.color}18`, color: m.color }}
                  >
                    <i className={m.icon} />
                  </div>
                  <div className="cp-unified-body">
                    <span className="cp-unified-label">{m.title}</span>
                    <strong className="cp-unified-value">{m.detail}</strong>
                    <span className="cp-unified-sub">{m.sub}</span>
                  </div>
                  <a
                    href={m.actionHref}
                    className="cp-unified-action"
                    target={m.actionHref.startsWith('http') ? '_blank' : '_self'}
                    rel="noreferrer"
                  >
                    <span>{m.actionText}</span>
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Form & Info Section ── */}
      <section className="cp-form-section" id="contact-form-section">
        <div className="cp-container">
          <div className="cp-layout-grid">
            {/* Interactive Contact Form */}
            <div className="cp-form-card">
              {!submitted ? (
                <>
                  <div className="cp-form-header">
                    <h3>Send Us a Detailed Message</h3>
                    <p>Fill in your requirements below and we will respond promptly.</p>
                  </div>

                  <form className="cp-form" onSubmit={handleSubmit}>
                    <div className="cf-row">
                      <div className="cf-field">
                        <label htmlFor="cp-name">Full Name *</label>
                        <div className="cf-input-wrap">
                          <i className="fas fa-user" />
                          <input
                            id="cp-name"
                            type="text"
                            placeholder="Your full name"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="cf-field">
                        <label htmlFor="cp-phone">Phone Number *</label>
                        <div className="cf-input-wrap">
                          <i className="fas fa-phone" />
                          <input
                            id="cp-phone"
                            type="tel"
                            placeholder="10-digit number"
                            pattern="[0-9]{10}"
                            maxLength="10"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="cf-row">
                      <div className="cf-field">
                        <label htmlFor="cp-email">Business Email *</label>
                        <div className="cf-input-wrap">
                          <i className="fas fa-envelope" />
                          <input
                            id="cp-email"
                            type="email"
                            placeholder="name@company.com"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="cf-field">
                        <label htmlFor="cp-company">Company / Organization</label>
                        <div className="cf-input-wrap">
                          <i className="fas fa-building" />
                          <input
                            id="cp-company"
                            type="text"
                            placeholder="e.g. Acme Innovations"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({ ...formData, company: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="cf-row">
                      <div className="cf-field">
                        <label htmlFor="cp-service">Service Interested In</label>
                        <div className="cf-input-wrap">
                          <i className="fas fa-layer-group" />
                          <select
                            id="cp-service"
                            className="cp-select"
                            value={formData.service}
                            onChange={(e) =>
                              setFormData({ ...formData, service: e.target.value })
                            }
                          >
                            {servicesOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="cf-field">
                        <label htmlFor="cp-budget">Estimated Budget</label>
                        <div className="cf-input-wrap">
                          <i className="fas fa-wallet" />
                          <select
                            id="cp-budget"
                            className="cp-select"
                            value={formData.budget}
                            onChange={(e) =>
                              setFormData({ ...formData, budget: e.target.value })
                            }
                          >
                            {budgetRanges.map((b) => (
                              <option key={b} value={b}>
                                {b}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="cf-field">
                      <label htmlFor="cp-message">Project Description & Requirements *</label>
                      <div className="cf-input-wrap cf-textarea-wrap">
                        <i className="fas fa-comment-dots" />
                        <textarea
                          id="cp-message"
                          rows="5"
                          placeholder="Tell us about your objectives, timeline, integrations needed, or any specific questions..."
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="cf-submit-btn cp-submit-btn"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Inquiry</span>
                          <i className="fas fa-paper-plane" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="career-success cp-success-box">
                  <div className="career-success-icon">
                    <i className="fas fa-check-circle" />
                  </div>
                  <h3>Thank You, {formData.name || 'Friend'}!</h3>
                  <p>
                    Your inquiry regarding <strong>{formData.service}</strong> has been
                    successfully received. One of our technical lead consultants will review
                    your notes and contact you at <strong>{formData.email}</strong> within
                    24 hours.
                  </p>
                  <button
                    type="button"
                    className="career-btn-primary"
                    onClick={handleReset}
                  >
                    <i className="fas fa-redo-alt" /> Submit Another Request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive Map Section ── */}
      <section className="cp-map-section" id="office-map">
        <div className="cp-container">
          <div className="cp-map-card">
            <div className="cp-map-header">
              <div>
                <h3>Visit Or Connect With Our Office</h3>
                <p>
                  Al Budoor Building, 29th Street, Naif Road, Naif, Deira, Dubai, UAE
                  {' '}• Land DM No. 118-1220
                </p>
              </div>
              <div className="cp-map-badges">
                <span><i className="fas fa-map-marker-alt" /> Naif, Deira, Dubai</span>
                <span><i className="fas fa-clock" /> Gulf Standard Time (GST)</span>
              </div>
            </div>
            <div className="cp-map-frame">
              <iframe
                title="Aanvita Technologies Office Location"
                src="https://www.google.com/maps?q=Al+Budoor+Building,+29th+Street,+Naif+Road,+Naif,+Deira,+Dubai,+UAE&z=16&output=embed"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
