import { useState } from 'react'

const contactMethods = [
  {
    icon: 'fas fa-phone-alt',
    title: 'Call Us Directly',
    detail: '+91 00000 00000',
    sub: 'Mon - Sat: 9:00 AM - 7:00 PM IST',
    actionText: 'Call Now',
    actionHref: 'tel:+910000000000',
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
    detail: '+91 00000 00000',
    sub: 'Instant technical & sales assistance',
    actionText: 'Start Chat',
    actionHref: 'https://wa.me/910000000000',
    color: '#25d366',
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Office Location',
    detail: 'AANVITA TECHNOLOGIES L.L.C',
    sub: 'LLC - SO • India & Global',
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
          <p className="section-kicker">Contact</p>
          <h1>
            Let's Build Something <span>Extraordinary Together</span>
          </h1>
          <p>
            Have a project in mind, need advice on AI and SaaS architecture, or
            looking for a dedicated tech partner? Reach out and our senior engineers
            will get back to you within 24 hours.
          </p>
          <div className="cp-hero-actions">
            <a href="#contact-form-section" className="career-btn-primary">
              Send a Message <i className="fas fa-arrow-down" />
            </a>
            <button
              type="button"
              className="career-btn-ghost"
              onClick={() => onNavigateHome('home')}
            >
              <i className="fas fa-home" /> Back to Home
            </button>
          </div>
        </div>
        <div className="career-hero-circle c1" />
        <div className="career-hero-circle c2" />
        <div className="career-hero-circle c3" />
      </section>

      {/* ── Contact Methods Grid ── */}
      <section className="cp-methods-section">
        <div className="cp-container">
          <div className="cp-methods-grid">
            {contactMethods.map((m) => (
              <div key={m.title} className="cp-method-card">
                <div
                  className="cp-method-icon"
                  style={{ background: `${m.color}15`, color: m.color }}
                >
                  <i className={m.icon} />
                </div>
                <h3>{m.title}</h3>
                <p className="cp-method-detail">{m.detail}</p>
                <span className="cp-method-sub">{m.sub}</span>
                <a
                  href={m.actionHref}
                  className="cp-method-link"
                  target={m.actionHref.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                >
                  {m.actionText} <i className="fas fa-arrow-right" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Form & Info Section ── */}
      <section className="cp-form-section" id="contact-form-section">
        <div className="cp-container">
          <div className="cp-layout-grid">
            {/* Left: Value proposition & Trust Points */}
            <div className="cp-info-box">
              <h2>Transform Your Business With Proven Engineering</h2>
              <p className="cp-info-lead">
                Every consultation begins with listening to your actual operational
                bottlenecks and business vision.
              </p>

              <div className="cp-perks-list">
                <div className="cp-perk-item">
                  <div className="cp-perk-bullet">
                    <i className="fas fa-check" />
                  </div>
                  <div>
                    <h4>Free 30-Min Technical Discovery</h4>
                    <p>Direct chat with a solutions architect, not an aggressive salesperson.</p>
                  </div>
                </div>

                <div className="cp-perk-item">
                  <div className="cp-perk-bullet">
                    <i className="fas fa-shield-alt" />
                  </div>
                  <div>
                    <h4>Strict NDA & IP Confidentiality</h4>
                    <p>Your business logic, documents, and concepts are 100% confidential and protected.</p>
                  </div>
                </div>

                <div className="cp-perk-item">
                  <div className="cp-perk-bullet">
                    <i className="fas fa-bolt" />
                  </div>
                  <div>
                    <h4>Fast Feasibility & Proposal in 48h</h4>
                    <p>Transparent timeline, modular budget options, and architectural milestones.</p>
                  </div>
                </div>

                <div className="cp-perk-item">
                  <div className="cp-perk-bullet">
                    <i className="fas fa-handshake" />
                  </div>
                  <div>
                    <h4>Flexible Working Models</h4>
                    <p>Fixed-cost milestones, dedicated engineering pods, or long-term product retainers.</p>
                  </div>
                </div>
              </div>

              {/* Direct Card */}
              <div className="cp-direct-card">
                <i className="fas fa-comments cp-direct-icon" />
                <div>
                  <h5>Need Immediate Assistance?</h5>
                  <p>Speak to our consulting team right away on WhatsApp.</p>
                  <a
                    href="https://wa.me/910000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="cp-direct-btn"
                  >
                    <i className="fab fa-whatsapp" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
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
                <p>AANVITA Technologies • Serving businesses in India & globally</p>
              </div>
              <div className="cp-map-badges">
                <span><i className="fas fa-globe-asia" /> Pan-India & Worldwide</span>
                <span><i className="fas fa-clock" /> Indian Standard Time (IST)</span>
              </div>
            </div>
            <div className="cp-map-frame">
              <iframe
                title="Aanvita Technologies Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30711243.17762776!2d64.4398422293091!3d20.011408266548177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1644684739958!5m2!1sen!2sin"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
