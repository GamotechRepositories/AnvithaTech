export function AboutPage({ onNavigateHome }) {
  const stats = [
    { value: '12.5K+', label: 'Working Hours' },
    { value: '720+', label: 'Completed Projects' },
    { value: '480+', label: 'Happy Clients' },
    { value: '18', label: 'Awards Received' },
  ]

  const values = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation First',
      desc: 'We embrace cutting-edge technologies and creative thinking to deliver future-ready digital solutions.',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Trust & Integrity',
      desc: 'Every engagement is built on transparency, honesty, and long-term partnership with our clients.',
    },
    {
      icon: 'fas fa-rocket',
      title: 'Results Driven',
      desc: 'We measure success by the business outcomes we create — growth, efficiency, and competitive edge.',
    },
    {
      icon: 'fas fa-users',
      title: 'Client-Centric',
      desc: 'Your goals are our goals. We listen, strategize, and build solutions that serve your exact needs.',
    },
    {
      icon: 'fas fa-cogs',
      title: 'Engineering Excellence',
      desc: 'From architecture to deployment, we maintain the highest standards of code quality and scalability.',
    },
    {
      icon: 'fas fa-globe-asia',
      title: 'Global Perspective',
      desc: 'With a global client base, we bring international best practices to every local and cross-border challenge.',
    },
  ]


  const milestones = [
    { year: 'Phase 1', event: 'Incorporation of AANVITA TECHNOLOGIES L.L.C under the leadership of Arun Kumar Gopala Suvarna' },
    { year: 'Phase 2', event: 'Development & launch of intelligent AI automation, modern CRM & bespoke SaaS solutions' },
    { year: 'Phase 3', event: 'Expansion into full-suite enterprise platforms (HRMS, ERP) & secure fintech systems' },
    { year: 'Phase 4', event: 'Scaling client deliveries to 480+ businesses from Dubai and expanding global reach' },
  ]

  return (
    <div className="about-page-wrapper">
      {/* Hero */}
      <section className="about-page-hero">
        <div className="about-page-hero-content">
          <div className="about-breadcrumb">
            <button type="button" onClick={() => onNavigateHome('home')} className="breadcrumb-link">
              <i className="fas fa-home" /> Home
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">About Us</span>
          </div>
          <p className="section-kicker">The company</p>
          <h1>Who We Are</h1>
          <p>
            AANVITA Technologies is a modern technology company focused on delivering
            practical digital transformation for growing organizations. We combine strategy,
            automation, and software engineering to create systems that improve productivity,
            customer experience, and performance.
          </p>
          <div className="about-hero-actions">
            <button
              type="button"
              className="btn btn-primary-glow"
              onClick={() => onNavigateHome('contact')}
            >
              Get In Touch
            </button>
            <button
              type="button"
              className="btn btn-secondary-outline"
              onClick={() => onNavigateHome('services')}
            >
              Our Services
            </button>
          </div>
        </div>
        {/* Decorative background circles */}
        <div className="career-hero-circle c1" />
        <div className="career-hero-circle c2" />
        <div className="career-hero-circle c3" />
      </section>

      {/* Stats */}
      <section className="about-stats-section">
        <div className="about-container">
          <div className="about-stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="about-stat-card">
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Journey */}
      <section className="about-story-section">
        <div className="about-container">
          <div className="about-story-grid">
            <div className="about-story-text">
              <p className="section-kicker">Story</p>
              <h2 className="about-section-title">Our Journey</h2>
              <p>
                AANVITA Technologies was founded with a clear mission — to bridge the gap
                between powerful technology and businesses that need it most. We started as a small
                team of passionate engineers and strategists, united by a belief that technology
                should simplify work, accelerate growth, and create sustainable competitive advantages.
              </p>
              <p>
                Over the years, we have grown into a multi-disciplinary technology firm delivering
                cutting-edge AI automation, enterprise software, and scalable SaaS
                platforms to businesses across the UAE and global markets.
              </p>
              <p>
                Today, AANVITA stands as a trusted name in digital transformation — powering
                smarter operations, faster growth, and better customer experiences for hundreds
                of clients worldwide.
              </p>
            </div>
            <div className="about-story-milestones">
              {milestones.map((m) => (
                <div key={m.year} className="about-milestone-item">
                  <div className="about-milestone-year">{m.year}</div>
                  <div className="about-milestone-dot" />
                  <div className="about-milestone-event">{m.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values-section">
        <div className="about-container">
          <p className="section-kicker">Principles</p>
          <h2 className="about-section-title">Our Core Values</h2>
          <p className="about-section-subtitle">
            Our core values are not just words on paper — they are the principles that guide every
            project, every decision, and every client relationship we build.
          </p>
          <div className="about-values-grid">
            {values.map((v) => (
              <div key={v.title} className="about-value-card">
                <div className="about-value-icon">
                  <i className={v.icon} />
                </div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal & Corporate Info */}
      <section className="about-legal-section">
        <div className="about-container">

          <div className="about-legal-box">
            <div className="about-legal-item">
              <i className="fas fa-building" />
              <div>
                <strong>Company Name</strong>
                <span>AANVITA TECHNOLOGIES L.L.C</span>
              </div>
            </div>
            <div className="about-legal-item">
              <i className="fas fa-certificate" />
              <div>
                <strong>Legal Type</strong>
                <span>Limited Liability Company - Single Owner (LLC - SO)</span>
              </div>
            </div>
            <div className="about-legal-item">
              <i className="fas fa-user-tie" />
              <div>
                <strong>Owner / Director</strong>
                <span>ARUN KUMAR GOPALA SUVARNA</span>
              </div>
            </div>
            <div className="about-legal-item">
              <i className="fas fa-map-marker-alt" />
              <div>
                <strong>Headquarters</strong>
                <span>Al Budoor Building, Naif, Deira, Dubai, UAE</span>
              </div>
            </div>
            <div className="about-legal-item">
              <i className="fas fa-envelope" />
              <div>
                <strong>Email</strong>
                <span>info@aanvitatechnologies.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-page-cta">
        <div className="about-cta-box">
          <h2>Ready to Build Something Great?</h2>
          <p>
            Partner with AANVITA to transform your business with smart automation, AI systems, and
            scalable digital platforms built for long-term growth.
          </p>
          <div className="cta-actions">
            <button
              type="button"
              className="btn btn-primary-glow"
              onClick={() => onNavigateHome('contact')}
            >
              Start a Conversation
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
