const perks = [
  {
    icon: 'fas fa-rocket',
    title: 'Fast Growth',
    desc: 'Accelerate your career with real ownership, mentorship, and cross-functional exposure.',
  },
  {
    icon: 'fas fa-brain',
    title: 'AI-First Culture',
    desc: 'Work at the forefront of AI, automation, and cloud-native product development.',
  },
  {
    icon: 'fas fa-laptop-house',
    title: 'Flexible Work',
    desc: 'Hybrid and remote-friendly setup so you can do your best work from anywhere.',
  },
  {
    icon: 'fas fa-users',
    title: 'Collaborative Team',
    desc: 'A diverse, passionate team that celebrates ideas, iteration, and impact.',
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Learning Budget',
    desc: 'Annual learning allowance for courses, certifications, and conferences.',
  },
  {
    icon: 'fas fa-hand-holding-heart',
    title: 'Great Benefits',
    desc: 'Competitive pay, health coverage, performance bonuses, and paid time off.',
  },
]

export function CareerPage({ onNavigateHome }) {
  return (
    <div className="career-page">

      {/* ── Hero ── */}
      <section className="career-hero">
        <div className="career-hero-inner">
          <div className="career-breadcrumb">
            <button type="button" onClick={() => onNavigateHome('home')} className="breadcrumb-link">
              <i className="fas fa-home" /> Home
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Careers</span>
          </div>
          <h1>Build the Future with <span>AANVITA</span></h1>
          <p>
            Join a team of innovators, engineers, and creators building AI-powered products
            that transform how businesses operate across the globe.
          </p>
        </div>
        {/* Decorative circles */}
        <div className="career-hero-circle c1" />
        <div className="career-hero-circle c2" />
        <div className="career-hero-circle c3" />
      </section>

      {/* ── Why Join Us ── */}
      <section className="career-perks-section">
        <div className="career-container">
          <div className="career-section-header">
            <h2>Why You'll Love Working Here</h2>
            <p className="career-section-lead">
              We invest in ambitious people who are passionate about building high-impact technology,
              driving innovation, and solving complex real-world engineering challenges.
            </p>
          </div>
          <div className="career-points-grid">
            {perks.map((p) => (
              <div key={p.title} className="career-point-item">
                <div className="career-point-bullet">
                  <i className={p.icon} />
                </div>
                <div className="career-point-text">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions (No Current Openings Notice) ── */}
      <section className="career-openings-section" id="openings">
        <div className="career-section-header">
          <h2>Open Positions & Hiring</h2>
          <p>Check our current openings status and explore future opportunities.</p>
        </div>

        <div className="career-no-openings-box">
          <div className="no-openings-badge">
            <i className="fas fa-info-circle" /> Hiring Update
          </div>

          <div className="no-openings-icon-wrap">
            <i className="fas fa-briefcase" />
          </div>

          <h3>Currently, There Are No Open Positions Available</h3>

          <p className="lead-msg">
            We do not have any active job openings right now as all our current positions are filled.
          </p>

          <p className="sub-msg">
            We are continuously scaling our products and operations. Please check back regularly for
            upcoming opportunities and future role announcements.
          </p>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="career-cta-section">
        <div className="career-cta-inner">
          <h2>Connect With Our Talent Team</h2>
          <p>
            Have questions about career paths, culture, or future openings? We'd love to hear from you.
          </p>
          <a
            href="mailto:info@aanvitatechnologies.com?subject=Career%20Inquiry%20-%20AANVITA%20Technologies"
            className="career-btn-primary"
          >
            <i className="fas fa-envelope" /> info@aanvitatechnologies.com
          </a>
        </div>
      </section>

    </div>
  )
}
