import { useState } from 'react'

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

const openings = [
  {
    id: 1,
    title: 'Full Stack Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote / India',
    experience: '2–5 Years',
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    desc: 'Build and scale high-performance web applications across our SaaS and fintech product lines.',
  },
  {
    id: 2,
    title: 'AI / ML Engineer',
    department: 'AI & Automation',
    type: 'Full-time',
    location: 'Remote / India',
    experience: '2–4 Years',
    skills: ['Python', 'LLMs', 'LangChain', 'TensorFlow'],
    desc: 'Design and deploy AI models powering our chatbot, voice agent, and document processing products.',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Remote',
    experience: '1–3 Years',
    skills: ['Figma', 'Prototyping', 'Design Systems', 'User Research'],
    desc: 'Craft intuitive, beautiful interfaces for our enterprise SaaS and fintech platforms.',
  },
  {
    id: 4,
    title: 'Business Development Executive',
    department: 'Sales & Growth',
    type: 'Full-time',
    location: 'India',
    experience: '1–3 Years',
    skills: ['B2B Sales', 'CRM', 'Lead Generation', 'Negotiation'],
    desc: 'Identify and close enterprise clients for our AI automation and SaaS product suite.',
  },
  {
    id: 5,
    title: 'DevOps / Cloud Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote / India',
    experience: '2–4 Years',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    desc: 'Own infrastructure, deployments, and reliability across our multi-product cloud ecosystem.',
  },
  {
    id: 6,
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    type: 'Full-time',
    location: 'India',
    experience: '1–3 Years',
    skills: ['SEO', 'Paid Ads', 'Content', 'Analytics'],
    desc: 'Drive growth through performance marketing, content strategy, and brand campaigns.',
  },
]

const deptColors = {
  Engineering: '#005eb8',
  'AI & Automation': '#7c3aed',
  Design: '#0891b2',
  'Sales & Growth': '#059669',
  Marketing: '#d97706',
}

export function CareerPage({ onNavigateHome }) {
  const [activeJob, setActiveJob] = useState(null)
  const [filterDept, setFilterDept] = useState('All')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const departments = ['All', ...Array.from(new Set(openings.map((j) => j.department)))]
  const filtered = filterDept === 'All' ? openings : openings.filter((j) => j.department === filterDept)

  const handleApply = (job) => {
    setActiveJob(job)
    setFormData((f) => ({ ...f, role: job.title }))
    setSubmitted(false)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveJob(null)
    document.body.style.overflow = ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
          <div className="career-hero-actions">
            <a href="#openings" className="career-btn-primary">
              View Open Roles <i className="fas fa-arrow-down" />
            </a>
            <button
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

      {/* ── Open Positions ── */}
      <section className="career-openings-section" id="openings">
        <div className="career-section-header">
          <h2>Find Your Role</h2>
          <p>Explore opportunities across engineering, design, sales, and more.</p>
        </div>

        {/* Department filter */}
        <div className="career-dept-filters">
          {departments.map((d) => (
            <button
              key={d}
              className={`career-dept-btn${filterDept === d ? ' active' : ''}`}
              onClick={() => setFilterDept(d)}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="career-jobs-grid">
          {filtered.map((job) => (
            <div key={job.id} className="career-job-card">
              <div className="career-job-top">
                <span
                  className="career-job-dept"
                  style={{ background: `${deptColors[job.department]}18`, color: deptColors[job.department] }}
                >
                  {job.department}
                </span>
                <span className="career-job-type">{job.type}</span>
              </div>
              <h3 className="career-job-title">{job.title}</h3>
              <p className="career-job-desc">{job.desc}</p>
              <div className="career-job-meta">
                <span><i className="fas fa-map-marker-alt" />{job.location}</span>
                <span><i className="fas fa-clock" />{job.experience}</span>
              </div>
              <div className="career-job-skills">
                {job.skills.map((s) => (
                  <span key={s} className="career-skill-tag">{s}</span>
                ))}
              </div>
              <button className="career-apply-btn" onClick={() => handleApply(job)}>
                Apply Now <i className="fas fa-arrow-right" />
              </button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="career-no-jobs">
            <i className="fas fa-search" />
            <p>No openings in this department right now. Check back soon!</p>
          </div>
        )}
      </section>

      {/* ── CTA Banner ── */}
      <section className="career-cta-section">
        <div className="career-cta-inner">
          <h2>Don't See a Perfect Fit?</h2>
          <p>
            We're always looking for exceptional talent. Send us your resume and we'll
            reach out when a matching role opens up.
          </p>
          <a href="mailto:careers@aanvitatechnologies.com" className="career-btn-primary">
            <i className="fas fa-envelope" /> Send Your Resume
          </a>
        </div>
      </section>

      {/* ── Apply Modal ── */}
      {activeJob && (
        <div className="career-modal-overlay" onClick={closeModal}>
          <div className="career-modal" onClick={(e) => e.stopPropagation()}>
            <button className="career-modal-close" onClick={closeModal}>
              <i className="fas fa-times" />
            </button>

            {!submitted ? (
              <>
                <div className="career-modal-header">
                  <span
                    className="career-job-dept"
                    style={{
                      background: `${deptColors[activeJob.department]}18`,
                      color: deptColors[activeJob.department],
                    }}
                  >
                    {activeJob.department}
                  </span>
                  <h3>{activeJob.title}</h3>
                  <div className="career-job-meta" style={{ marginTop: '0.8rem' }}>
                    <span><i className="fas fa-map-marker-alt" />{activeJob.location}</span>
                    <span><i className="fas fa-clock" />{activeJob.experience}</span>
                  </div>
                </div>

                <form
                  className="career-apply-form"
                  onSubmit={handleSubmit}
                >
                  <div className="cf-row">
                    <div className="cf-field">
                      <label>Full Name</label>
                      <div className="cf-input-wrap">
                        <i className="fas fa-user" />
                        <input
                          type="text"
                          placeholder="Your full name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="cf-field">
                      <label>Phone</label>
                      <div className="cf-input-wrap">
                        <i className="fas fa-phone" />
                        <input
                          type="tel"
                          placeholder="10-digit number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="cf-field">
                    <label>Email Address</label>
                    <div className="cf-input-wrap">
                      <i className="fas fa-envelope" />
                      <input
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="cf-field">
                    <label>Applying For</label>
                    <div className="cf-input-wrap">
                      <i className="fas fa-briefcase" />
                      <input type="text" value={formData.role} readOnly />
                    </div>
                  </div>
                  <div className="cf-field">
                    <label>Cover Note / Message</label>
                    <div className="cf-input-wrap cf-textarea-wrap">
                      <i className="fas fa-comment-alt" />
                      <textarea
                        rows="4"
                        placeholder="Tell us why you're a great fit..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                  </div>
                  <button type="submit" className="cf-submit-btn" style={{ width: '100%', justifyContent: 'center' }}>
                    Submit Application <i className="fas fa-paper-plane" />
                  </button>
                </form>
              </>
            ) : (
              <div className="career-success">
                <div className="career-success-icon">
                  <i className="fas fa-check-circle" />
                </div>
                <h3>Application Submitted!</h3>
                <p>
                  Thank you for applying for <strong>{activeJob.title}</strong>. Our team
                  will review your application and get back to you within 3–5 business days.
                </p>
                <button className="career-btn-primary" onClick={closeModal}>
                  Close <i className="fas fa-times" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
