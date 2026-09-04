import { useEffect, useState } from 'react'

export function ServicesPage({ services, onNavigateHome, onSelectService, initialCategory = 'All' }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)

  useEffect(() => {
    setSelectedCategory(initialCategory)
  }, [initialCategory])

  const categories = [
    { label: 'All', count: services.length },
    { label: 'AI & Automation', count: services.filter((s) => s.category === 'AI & Automation').length },
    { label: 'Fintech & Payments', count: services.filter((s) => s.category === 'Fintech & Payments').length },
    { label: 'Enterprise & ERP', count: services.filter((s) => s.category === 'Enterprise & ERP').length },
    { label: 'Growth & Operations', count: services.filter((s) => s.category === 'Growth & Operations').length },
  ]

  const filteredServices = services.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory
  })

  const handleCardClick = (item) => {
    if (onSelectService) {
      onSelectService(item)
    }
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
              {filteredServices.map((item, index) => (
                <div
                  className="service-card"
                  key={item.id || item.title}
                  onClick={() => handleCardClick(item)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="service-img-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="service-img"
                      loading={index < 4 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
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
                        handleCardClick(item)
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
    </div>
  )
}
