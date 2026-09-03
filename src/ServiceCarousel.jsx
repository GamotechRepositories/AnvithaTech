import { useEffect, useMemo, useRef, useState } from 'react'

const AUTO_SCROLL_SPEED = 36
const AUTO_SCROLL_DURATION_MS = 900

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - ((-2 * t + 2) ** 3) / 2)

function smoothScrollTrack(track, targetLeft, duration = AUTO_SCROLL_DURATION_MS) {
  const startLeft = track.scrollLeft
  const distance = targetLeft - startLeft
  if (Math.abs(distance) < 1) return Promise.resolve()

  const startTime = performance.now()

  return new Promise((resolve) => {
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      track.scrollLeft = startLeft + distance * easeInOutCubic(progress)
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        resolve()
      }
    }
    requestAnimationFrame(step)
  })
}

function wrapLoop(track) {
  const loopWidth = track.scrollWidth / 2
  if (loopWidth <= 0) return
  if (track.scrollLeft >= loopWidth) {
    track.scrollLeft -= loopWidth
  } else if (track.scrollLeft < 0) {
    track.scrollLeft += loopWidth
  }
}

export function ServiceCarousel({ services }) {
  const trackRef = useRef(null)
  const cardRefs = useRef([])
  const pauseRef = useRef(false)
  const modalOpenRef = useRef(false)
  const [activeService, setActiveService] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const loopItems = useMemo(() => [...services, ...services], [services])

  useEffect(() => {
    modalOpenRef.current = Boolean(activeService)
  }, [activeService])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let cancelled = false
    let rafId
    let last = performance.now()

    const tick = (now) => {
      if (cancelled) return
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now

      const track = trackRef.current
      if (track && !pauseRef.current && !modalOpenRef.current) {
        track.scrollLeft += AUTO_SCROLL_SPEED * dt
        wrapLoop(track)
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      cancelled = true
      cancelAnimationFrame(rafId)
    }
  }, [services.length])

  const scrollByCard = (direction) => {
    const track = trackRef.current
    const card = cardRefs.current[0]
    if (!track || !card) return
    const step = direction * (card.offsetWidth + 12)
    pauseRef.current = true
    smoothScrollTrack(track, track.scrollLeft + step).then(() => {
      wrapLoop(track)
      window.setTimeout(() => { pauseRef.current = false }, 1200)
    })
  }

  const openInquiry = (service) => {
    setActiveService(service)
    setSubmitted(false)
    setFormData({ name: '', email: '', phone: '', message: '' })
    pauseRef.current = true
    document.body.classList.add('menu-open')
  }

  const closeInquiry = () => {
    setActiveService(null)
    setSubmitted(false)
    pauseRef.current = false
    document.body.classList.remove('menu-open')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <div
        className="svc-carousel"
        onTouchStart={() => { pauseRef.current = true }}
        onTouchEnd={() => {
          window.setTimeout(() => {
            if (!modalOpenRef.current) pauseRef.current = false
          }, 2800)
        }}
      >
        <button
          type="button"
          className="svc-carousel-nav svc-carousel-nav--prev"
          aria-label="Previous service"
          onClick={() => scrollByCard(-1)}
        >
          <i className="fas fa-chevron-left" />
        </button>

        <div className="svc-carousel-track" ref={trackRef}>
          {loopItems.map((item, index) => (
            <article
              key={`${item.id || item.title}-${index}`}
              ref={(el) => { cardRefs.current[index] = el }}
              className="svc-flip-card"
            >
              <div className="svc-flip-scale">
                <div className="service-card svc-carousel-card">
                  <div className="service-img-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="service-img"
                      loading={index < 4 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                    <div className="service-img-overlay">
                      {item.category ? (
                        <span className="service-category-tag">{item.category}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="service-body">
                    <h6>{item.title}</h6>
                    <p className="svc-flip-front-desc">{item.description}</p>
                    <button
                      type="button"
                      className="service-link"
                      onClick={() => openInquiry(item)}
                    >
                      Get Started <i className="fas fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="svc-carousel-nav svc-carousel-nav--next"
          aria-label="Next service"
          onClick={() => scrollByCard(1)}
        >
          <i className="fas fa-chevron-right" />
        </button>

        <p className="svc-carousel-hint">
          <i className="fas fa-sync-alt" />
          Continuous loop — swipe anytime to browse
        </p>
      </div>

      {activeService ? (
        <div className="svc-modal-overlay" onClick={closeInquiry}>
          <div className="svc-modal-box" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="svc-modal-close" onClick={closeInquiry} aria-label="Close">
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

                <div className="svc-modal-form-wrap">
                  <div className="svc-form-header">
                    <h4>
                      Get started with <span>{activeService.title}</span>
                    </h4>
                    <p>Tell us a bit about your project — we respond within 24 hours.</p>
                  </div>

                  <form className="svc-inquiry-form" onSubmit={handleFormSubmit}>
                    <div className="svc-form-row">
                      <div className="svc-field">
                        <label>Your name *</label>
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
                            placeholder="+971 50 123 4567"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="svc-field">
                      <label>Work email *</label>
                      <div className="svc-input-box">
                        <i className="fas fa-envelope" />
                        <input
                          type="email"
                          placeholder="you@company.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="svc-field">
                      <label>Project notes</label>
                      <div className="svc-input-box svc-textarea-box">
                        <i className="fas fa-comment-alt" />
                        <textarea
                          rows={3}
                          placeholder="Timeline, integrations, scale…"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="svc-form-buttons">
                      <button type="submit" className="svc-btn-submit">
                        Submit inquiry <i className="fas fa-paper-plane" />
                      </button>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <div className="svc-modal-success">
                <div className="svc-success-icon-wrap">
                  <i className="fas fa-check" />
                </div>
                <h3>Request received</h3>
                <p>
                  Thank you, <strong>{formData.name || 'there'}</strong>! We&apos;ll reach out about{' '}
                  <strong>{activeService.title}</strong> at <strong>{formData.email}</strong> within 24 hours.
                </p>
                <button type="button" className="svc-btn-submit" onClick={closeInquiry}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  )
}
