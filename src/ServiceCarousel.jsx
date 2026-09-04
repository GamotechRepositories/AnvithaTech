import { useEffect, useMemo, useRef } from 'react'

const AUTO_SCROLL_SPEED = 85
const AUTO_SCROLL_DURATION_MS = 600

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

function wrapLoop(track, loopWidth) {
  if (!loopWidth || loopWidth <= 0) return
  if (track.scrollLeft >= loopWidth) {
    track.scrollLeft -= loopWidth
  } else if (track.scrollLeft < 0) {
    track.scrollLeft += loopWidth
  }
}

export function ServiceCarousel({ services, onSelectService }) {
  const trackRef = useRef(null)
  const cardRefs = useRef([])
  const pauseRef = useRef(false)
  const loopWidthRef = useRef(0)
  const isVisibleRef = useRef(true)

  const loopItems = useMemo(() => [...services, ...services], [services])

  const updateLoopWidth = () => {
    const track = trackRef.current
    const firstCard = cardRefs.current[0]
    const secondSetCard = cardRefs.current[services.length]
    if (secondSetCard && firstCard) {
      loopWidthRef.current = secondSetCard.offsetLeft - firstCard.offsetLeft
    } else if (track) {
      loopWidthRef.current = track.scrollWidth / 2
    }
  }

  useEffect(() => {
    updateLoopWidth()
    window.addEventListener('resize', updateLoopWidth, { passive: true })
    return () => window.removeEventListener('resize', updateLoopWidth)
  }, [loopItems.length])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry ? entry.isIntersecting : true
        if (entry?.isIntersecting) {
          updateLoopWidth()
        }
      },
      { rootMargin: '300px 0px' }
    )
    observer.observe(track)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let cancelled = false
    let rafId
    let last = performance.now()

    const tick = (now) => {
      if (cancelled) return
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now

      const track = trackRef.current
      if (track && isVisibleRef.current && !pauseRef.current) {
        if (!loopWidthRef.current || loopWidthRef.current <= 0) {
          updateLoopWidth()
        }
        const w = loopWidthRef.current
        if (w > 0) {
          track.scrollLeft += AUTO_SCROLL_SPEED * dt
          wrapLoop(track, w)
        }
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
    if (!track) return
    pauseRef.current = true
    const card = cardRefs.current[0]
    const step = card ? card.offsetWidth + 24 : 320
    const target = track.scrollLeft + direction * step
    smoothScrollTrack(track, target).then(() => {
      wrapLoop(track, loopWidthRef.current)
      setTimeout(() => {
        pauseRef.current = false
      }, 700)
    })
  }

  return (
    <div
      className="svc-carousel-wrapper"
      onPointerEnter={() => {
        pauseRef.current = true
      }}
      onPointerLeave={() => {
        pauseRef.current = false
      }}
    >
      <div className="svc-carousel-stage">
        <button
          type="button"
          className="svc-carousel-nav svc-carousel-nav--prev"
          aria-label="Previous service"
          onClick={() => scrollByCard(-1)}
        >
          <i className="fas fa-chevron-left" />
        </button>

        <div
          ref={trackRef}
          className="svc-carousel-track"
          tabIndex={0}
          role="region"
          aria-label="Interactive services list"
          onScroll={() => {
            const track = trackRef.current
            if (track) wrapLoop(track, loopWidthRef.current)
          }}
        >
          {loopItems.map((item, index) => (
            <article
              key={`${item.id}-${index}`}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className="svc-flip-wrap"
              onClick={() => onSelectService && onSelectService(item)}
              style={{ cursor: 'pointer' }}
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
                      onClick={(e) => {
                        e.stopPropagation()
                        if (onSelectService) onSelectService(item)
                      }}
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
    </div>
  )
}
