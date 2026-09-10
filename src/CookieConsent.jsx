import { useState, useEffect } from 'react'

export function CookieConsent({ onNavigate }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem('aanvita_cookie_consent')
      if (!consent) {
        // Show after a subtle delay for smooth user experience
        const timer = setTimeout(() => {
          setIsVisible(true)
        }, 1000)
        return () => clearTimeout(timer)
      }
    } catch {
      // Fallback if localStorage is disabled in iframe/incognito
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    try {
      localStorage.setItem('aanvita_cookie_consent', 'accepted')
    } catch (e) {
      console.warn('Unable to persist cookie consent:', e)
    }
    setIsVisible(false)
  }

  const handleDecline = () => {
    try {
      localStorage.setItem('aanvita_cookie_consent', 'declined')
    } catch (e) {
      console.warn('Unable to persist cookie consent:', e)
    }
    setIsVisible(false)
  }

  const handleDismiss = () => {
    setIsVisible(false)
  }

  const handlePolicyClick = (e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate('privacy-policy')
    } else {
      window.location.hash = '#privacy-policy'
    }
  }

  if (!isVisible) return null

  return (
    <aside
      className="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent banner"
    >
      <div className="cookie-banner-header">
        <h4 className="cookie-banner-title">
          <span className="cookie-banner-icon" aria-hidden="true">
            <i className="fas fa-cookie-bite" />
          </span>
          Cookie Consent
        </h4>
        <button
          type="button"
          className="cookie-banner-close"
          onClick={handleDismiss}
          aria-label="Dismiss cookie banner"
        >
          <i className="fas fa-times" />
        </button>
      </div>

      <p className="cookie-banner-body">
        We use cookies to analyze site performance, enhance your browsing experience, and optimize our services.
        Read our{' '}
        <a
          href="#privacy-policy"
          className="cookie-policy-link"
          onClick={handlePolicyClick}
        >
          Privacy Policy
        </a>{' '}
        to learn more.
      </p>

      <div className="cookie-banner-actions">
        <button
          type="button"
          className="cookie-btn cookie-btn-accept"
          onClick={handleAccept}
          id="accept-cookies-btn"
        >
          Accept All
        </button>
        <button
          type="button"
          className="cookie-btn cookie-btn-decline"
          onClick={handleDecline}
          id="decline-cookies-btn"
        >
          Decline
        </button>
      </div>
    </aside>
  )
}
