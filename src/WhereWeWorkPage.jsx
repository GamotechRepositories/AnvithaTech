import { useState } from 'react'
import { sectorImages } from './sectorData'

export function WhereWeWorkPage({ onNavigateHome }) {
  const [flippedId, setFlippedId] = useState(null)
  const [temporarilyUnflippedId, setTemporarilyUnflippedId] = useState(null)

  const handleCardInteraction = (id) => {
    setFlippedId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="www-page-wrapper">
      {/* Hero Header */}
      <section className="www-hero-section">
        <div className="www-container">
          <div className="services-breadcrumb">
            <button
              type="button"
              onClick={() => onNavigateHome && onNavigateHome('home')}
              className="breadcrumb-link"
            >
              <i className="fas fa-home" /> Home
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Where We Work</span>
          </div>

          <h1 className="www-main-title">
            Where We <span className="hero-gradient">Work</span>
          </h1>
          <p className="www-main-lead">
            Enterprise systems, AI automation, and payment platforms engineered specifically for the
            unique demands of 15+ mission-critical industries and beyond.
          </p>
        </div>
      </section>

      {/* Flip Cards Grid */}
      <section className="www-gallery-section">
        <div className="www-container">
          <div className="www-grid">
            {sectorImages.map((sector) => {
              const isFlipped = flippedId === sector.id
              const isTemporarilyUnflipped = temporarilyUnflippedId === sector.id
              return (
                <div
                  key={sector.id}
                  className={`www-flip-card${isFlipped ? ' is-flipped' : ''}${isTemporarilyUnflipped ? ' is-temporarily-unflipped' : ''}`}
                  aria-label={sector.title}
                  onMouseLeave={() => setTemporarilyUnflippedId(null)}
                >
                  {/* Ambient Glow Aura */}
                  <div className="www-card-aura" aria-hidden="true" />

                  <div className="www-flip-inner">
                    {/* FRONT: Ultra-premium HUD Showcase — Zero Text */}
                    <div
                      className="www-flip-front"
                      onClick={() => handleCardInteraction(sector.id)}
                      role="button"
                      tabIndex={0}
                      aria-label={`${sector.title} — click to view insights`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') handleCardInteraction(sector.id)
                      }}
                    >
                      <img
                        src={sector.image}
                        alt={sector.alt}
                        className="www-img"
                        loading="lazy"
                        decoding="async"
                      />

                      {/* Glass Light Sheen Sweep */}
                      <div className="www-card-sheen" aria-hidden="true" />

                      {/* 4 Cyber Corner Reticles (Top & Bottom Corners - Zero Text) */}
                      <div className="www-reticle www-reticle-tl" aria-hidden="true" />
                      <div className="www-reticle www-reticle-tr" aria-hidden="true" />
                      <div className="www-reticle www-reticle-bl" aria-hidden="true" />
                      <div className="www-reticle www-reticle-br" aria-hidden="true" />

                      {/* Bottom Glowing Laser Rail (Zero Text) */}
                      <div className="www-hud-bottom" aria-hidden="true">
                        <span className="www-bottom-glow-bar" />
                      </div>
                    </div>

                    {/* BACK: Pure text content with scroll support */}
                    <div className="www-flip-back">
                      <div className="www-back-content">
                        <div className="www-back-header">
                          <h3 className="www-back-title">{sector.title}</h3>
                          <button
                            type="button"
                            className="www-back-close-btn"
                            onClick={(e) => {
                              e.stopPropagation()
                              setFlippedId(null)
                              setTemporarilyUnflippedId(sector.id)
                            }}
                            aria-label="Back to image"
                          >
                            <i className="fas fa-times" />
                          </button>
                        </div>
                        <p className="www-back-desc">{sector.desc}</p>
                        <button
                          type="button"
                          className="www-back-flip-btn"
                          onClick={(e) => {
                            e.stopPropagation()
                            setFlippedId(null)
                            setTemporarilyUnflippedId(sector.id)
                          }}
                        >
                          <i className="fas fa-undo" /> View Image
                        </button>
                      </div>
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
