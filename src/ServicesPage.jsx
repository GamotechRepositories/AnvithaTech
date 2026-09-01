import { useState } from 'react'

export function ServicesPage({ services, onNavigateHome }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeService, setActiveService] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const categories = [
    { label: 'All', count: services.length },
    { label: 'AI & Automation', count: services.filter(s => s.category === 'AI & Automation').length },
    { label: 'Fintech & Payments', count: services.filter(s => s.category === 'Fintech & Payments').length },
    { label: 'Enterprise & ERP', count: services.filter(s => s.category === 'Enterprise & ERP').length },
    { label: 'Growth & Operations', count: services.filter(s => s.category === 'Growth & Operations').length },
  ]

  const filteredServices = services.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory
  })

  const handleOpenService = (item) => {
    setActiveService(item)
    setSubmitted(false)
    setFormData({ name: '', email: '', phone: '', message: '' })
    document.body.style.overflow = 'hidden'
  }

  const handleCloseModal = () => {
    setActiveService(null)
    setSubmitted(false)
    document.body.style.overflow = ''
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="services-page-wrapper">
      {/* Hero Banner */}
      <section className="services-page-hero">
        <div className="services-page-hero-content">
          <div className="services-breadcrumb">
            <button type="button" onClick={() => onNavigateHome('home')} className="breadcrumb-link">
              <i className="fas fa-home" /> Home
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Services</span>
          </div>

          <h1>Our Complete Suite of Services</h1>
          <p>
            Explore all 22 cutting-edge digital platforms, AI automation systems, fintech infrastructure, 
            and scalable enterprise SaaS solutions crafted for rapid business growth.
          </p>

          {/* Filter Tabs */}
          <div className="services-filter-tabs">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat.label}
                className={`filter-tab-btn ${selectedCategory === cat.label ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.label)}
              >
                <span>{cat.label}</span>
                <span className="tab-badge">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
        {/* Decorative background circles */}
        <div className="career-hero-circle c1" />
        <div className="career-hero-circle c2" />
        <div className="career-hero-circle c3" />
      </section>

      {/* Services Grid Section */}
      <section className="services-page-body">
        <div className="services-container">
          <div className="services-results-header">
            <h3>
              Showing <span>{filteredServices.length}</span> {filteredServices.length === 1 ? 'Service' : 'Services'}
              {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
            </h3>
            {selectedCategory !== 'All' ? (
              <button
                type="button"
                className="btn-reset-filters"
                onClick={() => setSelectedCategory('All')}
              >
                Reset Filters
              </button>
            ) : null}
          </div>

          {filteredServices.length === 0 ? (
            <div className="no-results-state">
              <h4>No matching services found</h4>
              <p>Please select a different category filter.</p>
              <button
                type="button"
                className="btn"
                onClick={() => setSelectedCategory('All')}
              >
                View All Services
              </button>
            </div>
          ) : (
            <div className="services-grid">
              {filteredServices.map((item) => (
                <div
                  className="service-card"
                  key={item.id || item.title}
                  onClick={() => handleOpenService(item)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="service-img-wrap">
                    <img src={item.image} alt={item.title} className="service-img" />
                    <div className="service-img-overlay">
                      <span className="service-number">
                        {item.id < 10 ? `0${item.id}` : item.id}
                      </span>
                      {item.category && (
                        <span className="service-category-tag">{item.category}</span>
                      )}
                    </div>
                  </div>
                  <div className="service-body">
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleOpenService(item)
                      }}
                      className="service-link"
                    >
                      Get Started <i className="fas fa-arrow-right" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Dedicated CTA Section */}
      <section className="services-page-cta">
        <div className="services-cta-box">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Whether you need a standalone AI tool, payment gateway integration, or a full-scale custom SaaS platform, our engineering team is ready to build it.
          </p>
          <div className="cta-actions">
            <button
              type="button"
              className="btn btn-primary-glow"
              onClick={() => onNavigateHome('contact')}
            >
              Request a Free Consultation
            </button>
            <button
              type="button"
              className="btn btn-secondary-outline"
              onClick={() => onNavigateHome('home')}
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      {/* ── Interactive Service Details & Get Started Modal ── */}
      {activeService && (
        <div className="svc-modal-overlay" onClick={handleCloseModal}>
          <div className="svc-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="svc-modal-close"
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              <i className="fas fa-times" />
            </button>

            {!submitted ? (
              <>
                <div className="svc-modal-header">
                  <div className="svc-modal-img-container">
                    <img src={activeService.image} alt={activeService.title} className="svc-modal-img" />
                    <span className="svc-modal-badge">{activeService.category}</span>
                  </div>
                  <div className="svc-modal-title-wrap">
                    <span className="svc-modal-num">
                      SERVICE #{activeService.id < 10 ? `0${activeService.id}` : activeService.id}
                    </span>
                    <h2>{activeService.title}</h2>
                    <p className="svc-modal-desc">{activeService.description}</p>
                  </div>
                </div>

                <div className="svc-modal-features">
                  <div className="svc-feat-card">
                    <i className="fas fa-bolt" />
                    <div>
                      <strong>Fast Deployment</strong>
                      <span>Ready-to-integrate APIs and turnkey setup.</span>
                    </div>
                  </div>
                  <div className="svc-feat-card">
                    <i className="fas fa-shield-alt" />
                    <div>
                      <strong>Enterprise Security</strong>
                      <span>Encrypted, compliant, and robust architecture.</span>
                    </div>
                  </div>
                  <div className="svc-feat-card">
                    <i className="fas fa-chart-line" />
                    <div>
                      <strong>Scalable & Reliable</strong>
                      <span>Engineered for high performance and uptime.</span>
                    </div>
                  </div>
                  <div className="svc-feat-card">
                    <i className="fas fa-headset" />
                    <div>
                      <strong>24/7 Technical Support</strong>
                      <span>Dedicated engineers for maintenance & help.</span>
                    </div>
                  </div>
                </div>

                <div className="svc-modal-form-wrap">
                  <div className="svc-form-header">
                    <h4>Get Started / Request Demo for <span>{activeService.title}</span></h4>
                    <p>Fill out the form below or message our team directly to get started instantly.</p>
                  </div>

                  <form className="svc-inquiry-form" onSubmit={handleFormSubmit}>
                    <div className="svc-form-row">
                      <div className="svc-field">
                        <label>Your Name *</label>
                        <div className="svc-input-box">
                          <i className="fas fa-user" />
                          <input
                            type="text"
                            placeholder="Enter your name"
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
                            placeholder="e.g. +91 98765 43210"
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
                          placeholder={`Tell us what you want to build or integrate with ${activeService.title}...`}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="svc-form-buttons">
                      <button type="submit" className="svc-btn-submit">
                        <i className="fas fa-paper-plane" /> Submit Request for {activeService.title}
                      </button>

                      <a
                        href={`https://wa.me/919999999999?text=Hello%20AANVITA%20Technologies,%20I%20am%20interested%20in%20getting%20started%20with%20${encodeURIComponent(activeService.title)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="svc-btn-whatsapp"
                      >
                        <i className="fab fa-whatsapp" /> Chat on WhatsApp
                      </a>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <div className="svc-modal-success">
                <div className="svc-success-icon-wrap">
                  <i className="fas fa-check-circle" />
                </div>
                <h3>Request Received Successfully!</h3>
                <p className="svc-success-lead">
                  Thank you <strong>{formData.name || 'valued customer'}</strong>! Your inquiry for <strong>{activeService.title}</strong> has been registered.
                </p>
                <p className="svc-success-sub">
                  Our technical consultant will review your requirements and get in touch with you via email (<strong>{formData.email}</strong>) or phone (<strong>{formData.phone}</strong>) within 24 hours.
                </p>
                <div className="svc-success-actions">
                  <button type="button" className="btn btn-primary-glow" onClick={handleCloseModal}>
                    Done / Back to Services
                  </button>
                  <a
                    href={`https://wa.me/919999999999?text=Hello%20AANVITA%20Technologies,%20I%20just%20submitted%20a%20request%20for%20${encodeURIComponent(activeService.title)}`}
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
      )}
    </div>
  )
}
