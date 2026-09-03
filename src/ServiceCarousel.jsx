import { useCallback, useEffect, useRef, useState } from 'react'

const AUTO_SCROLL_DWELL_MS = 5200
const AUTO_SCROLL_DURATION_MS = 1500

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

export function ServiceCarousel({ services }) {
  const trackRef = useRef(null)
  const cardRefs = useRef([])
  const pauseRef = useRef(false)
  const [centerIndex, setCenterIndex] = useState(0)
  const [activeService, setActiveService] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const updateCenter = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const trackRect = track.getBoundingClientRect()
    const centerX = trackRect.left + trackRect.width / 2

    let closest = 0
    let closestDist = Infinity

    cardRefs.current.forEach((el, i) => {
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cardCenter = rect.left + rect.width / 2
      const dist = Math.abs(centerX - cardCenter)
      if (dist < closestDist) {
        closestDist = dist
        closest = i
      }
    })

    setCenterIndex(closest)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    updateCenter()
    track.addEventListener('scroll', updateCenter, { passive: true })
    window.addEventListener('resize', updateCenter)

    return () => {
      track.removeEventListener('scroll', updateCenter)
      window.removeEventListener('resize', updateCenter)
    }
  }, [updateCenter, services.length])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    if (window.matchMedia('(pointer: coarse)').matches) return undefined

    let cancelled = false
    let dwellTimer

    const wait = (ms) => new Promise((resolve) => {
      dwellTimer = window.setTimeout(resolve, ms)
    })

    const runAutoScroll = async () => {
      while (!cancelled) {
        await wait(AUTO_SCROLL_DWELL_MS)
        if (cancelled || pauseRef.current || activeService) continue

        const track = trackRef.current
        const card = cardRefs.current[0]
        if (!track || !card) continue

        const step = card.offsetWidth + 12
        const maxScroll = track.scrollWidth - track.clientWidth

        if (track.scrollLeft >= maxScroll - 4) {
          track.scrollLeft = 0
          updateCenter()
          await wait(500)
        } else {
          await smoothScrollTrack(track, track.scrollLeft + step)
        }
      }
    }

    runAutoScroll()

    return () => {
      cancelled = true
      window.clearTimeout(dwellTimer)
    }
  }, [activeService, services.length, updateCenter])

  const scrollByCard = (direction) => {
    const track = trackRef.current
    const card = cardRefs.current[0]
    if (!track || !card) return
    const step = direction * (card.offsetWidth + 12)
    smoothScrollTrack(track, track.scrollLeft + step)
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
          window.setTimeout(() => { pauseRef.current = false }, 4000)
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
          {services.map((item, index) => {
            const isCenter = centerIndex === index
            return (
              <article
                key={item.id || item.title}
                ref={(el) => { cardRefs.current[index] = el }}
                className={`svc-flip-card${isCenter ? ' is-centered' : ''}`}
                aria-current={isCenter ? 'true' : undefined}
              >
                <div className="svc-flip-scale">
                  <div className="svc-flip-inner">
                    <div className="svc-flip-front service-card">
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
                          {item.category ? (
                            <span className="service-category-tag">{item.category}</span>
                          ) : null}
                        </div>
                      </div>
                      <div className="service-body">
                        <h6>{item.title}</h6>
                        <p className="svc-flip-front-desc">{item.description}</p>
                      </div>
                    </div>

                    <div className="svc-flip-back service-card">
                      <div className="svc-flip-back-bg" aria-hidden="true">
                        <div className="svc-flip-back-grid" />
                        <div className="svc-flip-back-orb svc-flip-back-orb--1" />
                        <div className="svc-flip-back-orb svc-flip-back-orb--2" />
                        <div className="svc-flip-back-orb svc-flip-back-orb--3" />
                        <div className="svc-flip-back-shimmer" />
                        <div className="svc-flip-back-particles">
                          {[...Array(6)].map((_, i) => (
                            <span key={i} style={{ '--i': i }} />
                          ))}
                        </div>
                      </div>
                      <div className="service-body svc-flip-back-body">
                        {item.category ? (
                          <span className="service-category-tag svc-flip-back-tag">{item.category}</span>
                        ) : null}
                        <h6>{item.title}</h6>
                        <p>{item.description}</p>
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
                </div>
              </article>
            )
          })}
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
          <i className="fas fa-hand-pointer" />
          Swipe or scroll — center card reveals details
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
                            placeholder="+91 98765 43210"
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
