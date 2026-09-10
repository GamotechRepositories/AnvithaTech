import './LegalPages.css'

export function PrivacyPolicyPage({ onNavigateHome }) {
  const sections = [
    { id: 'introduction', label: '1. Introduction & Scope' },
    { id: 'privacy-principles', label: '2. Our Privacy Principles' },
    { id: 'information-collected', label: '3. Information We Collect' },
    { id: 'how-we-use', label: '4. How We Use Information' },
    { id: 'why-we-process', label: '5. Why We Process Information' },
    { id: 'cookies-tracking', label: '6. Cookies & Site Analytics' },
    { id: 'data-sharing', label: '7. Data Sharing & Infrastructure' },
    { id: 'data-security', label: '8. Data Security & Storage' },
    { id: 'retention', label: '9. Data Retention Policy' },
    { id: 'your-rights', label: '10. Your Rights & Choices' },
    { id: 'children', label: '11. Protection of Minors' },
    { id: 'contact', label: '12. Contact & Support' },
  ]

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="legal-page-wrapper">
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <nav className="legal-breadcrumb" aria-label="Breadcrumb">
            <button
              type="button"
              onClick={() => onNavigateHome('home')}
              className="legal-breadcrumb-link"
            >
              <i className="fas fa-home" /> Home
            </button>
            <span className="legal-breadcrumb-separator">/</span>
            <span className="legal-breadcrumb-current">Privacy Policy</span>
          </nav>

          <h1 className="legal-hero-title">
            Privacy <span>Policy</span>
          </h1>

          <p className="legal-hero-subtitle">
            Our commitment to safeguarding your personal and business data with enterprise-grade security,
            transparency, and international privacy best practices.
          </p>

          <div className="legal-meta-bar">
            <div className="legal-meta-item">
              <i className="fas fa-building" />
              <span>AANVITA TECHNOLOGIES L.L.C. (Dubai, UAE)</span>
            </div>
            <div className="legal-meta-item">
              <i className="fas fa-calendar-alt" />
              <span>Last Updated: September 2026</span>
            </div>
            <div className="legal-meta-item">
              <i className="fas fa-shield-check" />
              <span>Enterprise Grade</span>
            </div>
          </div>

          <div className="legal-badges">
            <span className="legal-badge">
              <i className="fas fa-check-circle" /> Enterprise Data Privacy
            </span>
            <span className="legal-badge legal-badge--purple">
              <i className="fas fa-globe" /> Global Standards Ready
            </span>
            <span className="legal-badge legal-badge--gold">
              <i className="fas fa-lock" /> 256-bit Secure Encryption
            </span>
          </div>
        </div>
      </section>

      {/* ── Main Container (Sidebar + Content) ──────────── */}
      <div className="legal-main-container">
        {/* Table of Contents Sticky Sidebar */}
        <aside className="legal-sidebar" aria-label="Table of Contents">
          <h3 className="legal-sidebar-title">
            <i className="fas fa-list-ul" /> Document Index
          </h3>
          <ul className="legal-toc-list">
            {sections.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="legal-toc-link"
                  onClick={(e) => scrollToSection(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="legal-sidebar-cta">
            <p>Have specific privacy or data security questions for your business?</p>
            <button
              type="button"
              className="legal-sidebar-btn"
              onClick={() => onNavigateHome('contact')}
            >
              <i className="fas fa-envelope" /> Contact Privacy Team
            </button>
          </div>
        </aside>

        {/* Legal Text Body */}
        <article className="legal-body">
          <div className="legal-notice-box">
            <i className="fas fa-shield-alt legal-notice-icon" aria-hidden="true" />
            <div className="legal-notice-text">
              <strong>Our Commitment:</strong> At{' '}
              <strong>Aanvitha Technologies L.L.C.</strong> (&quot;Aanvitha Tech&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;),
              headquartered in Dubai, United Arab Emirates, protecting the privacy, confidentiality, and integrity of our
              clients, partners, and visitors is essential to everything we build. This Privacy Policy explains transparently
              how we collect, use, and protect your information.
            </div>
          </div>

          {/* Section 1 */}
          <section id="introduction" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">01</span> Introduction & Scope
            </h2>
            <p>
              This Privacy Policy applies to the official website of Aanvitha Technologies (accessible at{' '}
              <a href="https://www.aanvitha.tech" className="cookie-policy-link" target="_blank" rel="noreferrer">
                www.aanvitha.tech
              </a>
              ), our interactive demonstration environments, contact channels, and client services.
            </p>
            <p>
              By visiting our website, submitting an inquiry, or working with us, you acknowledge the data practices described in this document.
            </p>
          </section>

          {/* Section 2 */}
          <section id="privacy-principles" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">02</span> Our Privacy Principles
            </h2>
            <p>
              Our data processing practices are guided by standard global privacy principles designed to protect your organization and its people:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item">
                <i className="fas fa-check legal-list-bullet" />
                <div>
                  <strong>Purpose & Transparency:</strong> We only collect information necessary to provide our services and communicate with you effectively.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-check legal-list-bullet" />
                <div>
                  <strong>Data Security by Design:</strong> We utilize modern cryptographic encryption, restricted role-based access, and enterprise cloud protection.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-check legal-list-bullet" />
                <div>
                  <strong>No Data Selling:</strong> We never sell, rent, or trade your personal or business information to any external parties or advertising brokers.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="information-collected" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">03</span> Information We Collect
            </h2>
            <p>
              Depending on how you interact with our website and services, we collect information in the following categories:
            </p>

            <h3 className="legal-sub-title">A. Information You Provide to Us Directly</h3>
            <ul className="legal-list">
              <li className="legal-list-item">
                <i className="fas fa-circle-dot legal-list-bullet" />
                <div>
                  <strong>Contact Details:</strong> Your name, business email address, phone number, company name, and job title when submitting a form or reaching out to us.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-circle-dot legal-list-bullet" />
                <div>
                  <strong>Project Requirements:</strong> Information you share regarding your project goals, technical requirements, or service inquiries.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-circle-dot legal-list-bullet" />
                <div>
                  <strong>Communications:</strong> Records of questions, feedback, or support messages exchanged via our contact forms, email, or chat assistant.
                </div>
              </li>
            </ul>

            <h3 className="legal-sub-title">B. Information Collected Automatically</h3>
            <ul className="legal-list">
              <li className="legal-list-item">
                <i className="fas fa-circle-dot legal-list-bullet" />
                <div>
                  <strong>Device & Network Information:</strong> Basic technical details such as your IP address, browser type, operating system, and general geographic location.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-circle-dot legal-list-bullet" />
                <div>
                  <strong>Usage Data:</strong> Pages visited, time spent on pages, and navigation patterns to help us measure site performance and fix technical issues.
                </div>
              </li>
            </ul>

            <h3 className="legal-sub-title">C. Client Project Data</h3>
            <p>
              When we build custom software, AI agents, or fintech integrations for business clients, handling of client data is governed by our project agreements and confidential non-disclosure terms.
            </p>
          </section>

          {/* Section 4 */}
          <section id="how-we-use" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">04</span> How We Use Information
            </h2>
            <p>We use the collected information for straightforward, legitimate business purposes:</p>
            <ul className="legal-list">
              <li className="legal-list-item">
                <i className="fas fa-check legal-list-bullet" />
                <div>
                  <strong>Providing & Delivering Services:</strong> Designing, engineering, deploying, and supporting your software solutions.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-check legal-list-bullet" />
                <div>
                  <strong>Responding to Inquiries:</strong> Answering your questions, scheduling discovery calls, and providing project estimates.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-check legal-list-bullet" />
                <div>
                  <strong>Security & Fraud Prevention:</strong> Protecting our website, servers, and systems against security incidents, unauthorized access, and malicious attacks.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-check legal-list-bullet" />
                <div>
                  <strong>Business Administration:</strong> Managing billing, invoicing, and keeping standard commercial records.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="why-we-process" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">05</span> Why We Process Information
            </h2>
            <p>We only collect and handle your information where there is a clear, legitimate business reason:</p>
            <ul className="legal-list">
              <li className="legal-list-item">
                <i className="fas fa-file-contract legal-list-bullet" />
                <div>
                  <strong>Contractual Commitments:</strong> To fulfill project agreements, deliver requested proposals, and perform our contractual services.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-user-check legal-list-bullet" />
                <div>
                  <strong>Your Consent:</strong> When you voluntarily submit forms, opt into notifications, or accept our cookie banner.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-briefcase legal-list-bullet" />
                <div>
                  <strong>Legitimate Business Interests:</strong> Maintaining platform stability, securing our systems, and improving our engineering capabilities.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-balance-scale legal-list-bullet" />
                <div>
                  <strong>Legal Requirements:</strong> Meeting standard tax, financial reporting, and commercial obligations.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="cookies-tracking" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">06</span> Cookies & Site Analytics
            </h2>
            <p>
              We use standard cookies and similar technologies to ensure our website functions correctly, remembers your preferences, and helps us analyze traffic patterns.
            </p>
            <ul className="legal-list">
              <li className="legal-list-item">
                <i className="fas fa-cookie legal-list-bullet" />
                <div>
                  <strong>Essential Cookies:</strong> Required for the website to function securely and load properly.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-chart-line legal-list-bullet" />
                <div>
                  <strong>Performance & Analytics Cookies:</strong> Help us understand which pages are visited most often and where improvements can be made.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-sliders-h legal-list-bullet" />
                <div>
                  <strong>Functional Cookies:</strong> Remember your interface preferences (such as dismissed notices).
                </div>
              </li>
            </ul>
            <p>
              You can adjust or disable cookie settings at any time through our on-site cookie banner or within your web browser settings.
            </p>
          </section>

          {/* Section 7 */}
          <section id="data-sharing" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">07</span> Data Sharing & Infrastructure
            </h2>
            <p>
              <strong>We do not sell, rent, or monetize your personal or company information.</strong>
            </p>
            <p>We only share information with trusted third parties under strict confidentiality when necessary to operate our business:</p>
            <ul className="legal-list">
              <li className="legal-list-item">
                <i className="fas fa-server legal-list-bullet" />
                <div>
                  <strong>Cloud Infrastructure Providers:</strong> Highly secure enterprise cloud hosting (e.g., AWS, Google Cloud) operating with strict encryption and confidentiality standards.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-gavel legal-list-bullet" />
                <div>
                  <strong>Legal & Safety Requirements:</strong> If required by law, official court order, or to protect the safety and rights of our clients and organization.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section id="data-security" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">08</span> Data Security & Storage
            </h2>
            <p>
              We take information security seriously and maintain technical and organizational safeguards to protect your data:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item">
                <i className="fas fa-lock legal-list-bullet" />
                <div>
                  <strong>Encryption:</strong> Modern TLS encryption for data in transit across the web, and 256-bit AES encryption for data stored at rest.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-user-shield legal-list-bullet" />
                <div>
                  <strong>Access Control:</strong> Access to sensitive project files is restricted strictly to authorized engineers who need it to fulfill project tasks.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-shield-virus legal-list-bullet" />
                <div>
                  <strong>Continuous Monitoring:</strong> Regular security updates, dependency checks, and defensive firewall protections.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 9 */}
          <section id="retention" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">09</span> Data Retention Policy
            </h2>
            <p>
              We keep personal information only for as long as necessary to fulfill the purposes outlined in this policy, support active client engagements, or satisfy statutory accounting and tax record-keeping requirements.
            </p>
            <p>
              When information is no longer required, it is safely deleted or anonymized so that it can no longer identify you or your business.
            </p>
          </section>

          {/* Section 10 */}
          <section id="your-rights" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">10</span> Your Rights & Choices
            </h2>
            <p>
              We respect your right to control your personal and business data. You have the following rights regarding information held about you:
            </p>

            <div className="legal-rights-grid">
              <div className="legal-right-card">
                <div className="legal-right-header">
                  <span className="legal-right-icon">
                    <i className="fas fa-eye" />
                  </span>
                  <h4 className="legal-right-title">Right to Access</h4>
                </div>
                <p className="legal-right-desc">
                  Request a copy of the personal information we maintain concerning you or your organization.
                </p>
              </div>

              <div className="legal-right-card">
                <div className="legal-right-header">
                  <span className="legal-right-icon">
                    <i className="fas fa-pen-fancy" />
                  </span>
                  <h4 className="legal-right-title">Right to Correction</h4>
                </div>
                <p className="legal-right-desc">
                  Ask us to update or correct any incomplete, outdated, or inaccurate information.
                </p>
              </div>

              <div className="legal-right-card">
                <div className="legal-right-header">
                  <span className="legal-right-icon">
                    <i className="fas fa-trash-alt" />
                  </span>
                  <h4 className="legal-right-title">Right to Deletion</h4>
                </div>
                <p className="legal-right-desc">
                  Request that we erase your data when there is no longer a business or legal need to retain it.
                </p>
              </div>

              <div className="legal-right-card">
                <div className="legal-right-header">
                  <span className="legal-right-icon">
                    <i className="fas fa-ban" />
                  </span>
                  <h4 className="legal-right-title">Opt-Out & Restrict</h4>
                </div>
                <p className="legal-right-desc">
                  Ask us to stop using your information for marketing or restrict certain types of processing.
                </p>
              </div>

              <div className="legal-right-card">
                <div className="legal-right-header">
                  <span className="legal-right-icon">
                    <i className="fas fa-file-export" />
                  </span>
                  <h4 className="legal-right-title">Data Portability</h4>
                </div>
                <p className="legal-right-desc">
                  Receive your information in a standard, machine-readable format to transfer elsewhere.
                </p>
              </div>

              <div className="legal-right-card">
                <div className="legal-right-header">
                  <span className="legal-right-icon">
                    <i className="fas fa-times-circle" />
                  </span>
                  <h4 className="legal-right-title">Withdraw Consent</h4>
                </div>
                <p className="legal-right-desc">
                  Revoke previously granted consent at any time without affecting past lawful activities.
                </p>
              </div>
            </div>

            <p>
              To exercise any of these options, simply contact our privacy desk at{' '}
              <a href="mailto:privacy@aanvitatechnologies.com" className="cookie-policy-link">
                privacy@aanvitatechnologies.com
              </a>
              . We respond to all verified inquiries promptly.
            </p>
          </section>

          {/* Section 11 */}
          <section id="children" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">11</span> Protection of Minors
            </h2>
            <p>
              Aanvitha Technologies provides business-to-business software engineering and enterprise technology services. Our website and platforms are intended exclusively for commercial and professional audiences and are not directed at children under 18 years of age.
            </p>
            <p>
              We do not knowingly collect personal information from minors. If you believe a minor has submitted information to us, please notify us and we will promptly remove it.
            </p>
          </section>

          {/* Section 12 */}
          <section id="contact" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">12</span> Contact & Support
            </h2>
            <p>
              If you have any questions, feedback, or requests regarding this Privacy Policy, please reach out to our team:
            </p>

            <div className="legal-contact-card">
              <div className="legal-contact-details">
                <div className="legal-contact-row">
                  <i className="fas fa-building" />
                  <span><strong>Company:</strong> AANVITA TECHNOLOGIES L.L.C.</span>
                </div>
                <div className="legal-contact-row">
                  <i className="fas fa-map-marker-alt" />
                  <span><strong>Headquarters:</strong> Al Budoor Building, Naif, Deira, Dubai, UAE</span>
                </div>
                <div className="legal-contact-row">
                  <i className="fas fa-envelope" />
                  <span><strong>Privacy Desk:</strong> privacy@aanvitatechnologies.com</span>
                </div>
                <div className="legal-contact-row">
                  <i className="fas fa-headset" />
                  <span><strong>General Inquiries:</strong> info@aanvitatechnologies.com</span>
                </div>
                <div className="legal-contact-row">
                  <i className="fas fa-phone-alt" />
                  <span><strong>Phone:</strong> +971 50 223 9477 (Mon - Sat: 9:00 AM - 7:00 PM GST)</span>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="legal-contact-btn"
                  onClick={() => onNavigateHome('contact')}
                >
                  <i className="fas fa-paper-plane" /> Contact Our Team
                </button>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
