import { useState } from 'react'
import { sectorImages } from './sectorData'

export function WhereWeWorkPage({ onNavigateHome }) {
  const [flippedId, setFlippedId] = useState(null)

  const handleCardInteraction = (id) => {
    setFlippedId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="www-page-wrapper">
      {/* Hero */}
      <section className="www-hero">
        <div className="www-hero-inner">
          <nav className="www-breadcrumb" aria-label="Breadcrumb">
            <button type="button" onClick={() => onNavigateHome('home')} className="breadcrumb-link">
              <i className="fas fa-home" /> Home
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Where We Work</span>
          </nav>

          <p className="section-kicker">Specialized Sectors</p>
          <h1 className="www-title">
            Where We <span>Work</span>
          </h1>
          <p className="www-subtitle">
            Enterprise systems, AI automation, and payment platforms engineered specifically for
            the unique demands of 14+ mission-critical industries.
          </p>
        </div>
      </section>

      {/* Flip Cards Grid */}
      <section className="www-gallery-section">
        <div className="www-container">
          <div className="www-grid">
            {sectorImages.map((sector) => {
              const isFlipped = flippedId === sector.id
              return (
                <div
                  key={sector.id}
                  className={`www-flip-card${isFlipped ? ' is-flipped' : ''}`}
                  onClick={() => handleCardInteraction(sector.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${sector.title} — click to ${isFlipped ? 'close' : 'learn more'}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleCardInteraction(sector.id)
                  }}
                >
                  <div className="www-flip-inner">
                    {/* FRONT */}
                    <div className="www-flip-front">
                      <img
                        src={sector.image}
                        alt={sector.alt}
                        className="www-img"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="www-front-overlay">
                        <span className="www-front-title">
                          <i className={sector.icon} /> {sector.title}
                        </span>
                        <span className="www-hover-hint">
                          <i className="fas fa-sync-alt" /> Tap to explore
                        </span>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="www-flip-back">
                      <div className="www-back-icon">
                        <i className={sector.icon} />
                      </div>
                      <h3 className="www-back-title">{sector.title}</h3>
                      <p className="www-back-desc">{sector.desc}</p>
                      <div className="www-back-tags">
                        {sector.tags.map((tag) => (
                          <span key={tag} className="www-back-tag">{tag}</span>
                        ))}
                      </div>
                      <button
                        type="button"
                        className="www-back-cta"
                        onClick={(e) => {
                          e.stopPropagation()
                          onNavigateHome('contact')
                        }}
                      >
                        Start a project <i className="fas fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="www-bottom-cta">
            <h3>Need a tailored solution for your sector?</h3>
            <p>Our engineers craft bespoke digital infrastructure for any industry workflow.</p>
            <button
              type="button"
              className="www-cta-btn"
              onClick={() => onNavigateHome('contact')}
            >
              <span>Speak with our team</span>
              <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
