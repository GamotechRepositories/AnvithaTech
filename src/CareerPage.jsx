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
          <p className="section-kicker">Careers</p>
          <h1>Build the Future with <span>AANVITA</span></h1>
          <p>
            Join a team of innovators, engineers, and creators building AI-powered products
            that transform how businesses operate across the globe.
          </p>
          <div className="career-hero-actions">
            <button
              type="button"
              className="career-btn-primary"
              onClick={() => {
                const el = document.getElementById('openings')
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              View Open Roles <i className="fas fa-arrow-down" />
            </button>
            <button
              type="button"
              className="career-btn-ghost"
              onClick={() => onNavigateHome('home')}
            >
              <i className="fas fa-home" /> Back to Home
            </button>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="career-hero-circle c1" />
        <div className="career-hero-circle c2" />
        <div className="career-hero-circle c3" />
      </section>

      {/* ── Why Join Us ── */}
      <section className="career-perks-section">
        <div className="career-section-header">
          <h2>Why You'll Love Working Here</h2>
          <p>We invest in people who are passionate about making an impact.</p>
        </div>
        <div className="career-perks-grid">
          {perks.map((p) => (
            <div key={p.title} className="career-perk-card">
              <div className="career-perk-icon">
                <i className={p.icon} />
              </div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
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
            However, we are continuously growing and always excited to connect with talented engineers,
            designers, and business innovators. Share your resume with our talent team, and we will get
            in touch as soon as a matching role becomes available!
          </p>

          <div className="no-openings-actions">
            <a
              href="mailto:info@aanvitatechnologies.com?subject=Job%20Application%20/%20Resume%20-%20AANVITA%20Technologies"
              className="career-btn-primary"
            >
              <i className="fas fa-paper-plane" /> Send Your Resume via Email
            </a>
            <button
              type="button"
              className="career-btn-ghost-dark"
              onClick={() => onNavigateHome('contact')}
            >
              <i className="fas fa-envelope-open-text" /> Contact HR Team
            </button>
          </div>

          <div className="no-openings-features">
            <div className="no-openings-feat-item">
              <i className="fas fa-bolt" />
              <span>Direct Resume Review</span>
            </div>
            <div className="no-openings-feat-item">
              <i className="fas fa-star" />
              <span>Priority for Future Roles</span>
            </div>
            <div className="no-openings-feat-item">
              <i className="fas fa-laptop-house" />
              <span>Remote & Hybrid Friendly</span>
            </div>
          </div>
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
