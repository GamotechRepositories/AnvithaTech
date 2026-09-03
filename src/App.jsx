import { useEffect, useRef, useState } from 'react'
import './App.css'
import logo from './assets/ChatGPT_Image_Sep_3__2026__02_36_14_PM-removebg-preview.png'
import servicesFlowGif from './assets/aanvita_flow_multiple_points (2).gif'
import svcChatbot from './assets/svc_chatbot.jpg'
import svcSales from './assets/svc_sales.jpg'
import svcVoice from './assets/svc_voice.jpg'
import svcCrm from './assets/svc_crm.jpg'
import svcDocument from './assets/svc_document.jpg'
import svcAnalytics from './assets/svc_analytics.jpg'
import svcSocialScheduler from './assets/svc_social_scheduler.jpg'
import svcMultibrandSocial from './assets/svc_multibrand_social.jpg'
import svcPaymentGateway from './assets/svc_payment_gateway.jpg'
import svcPayinPayout from './assets/svc_payin_payout.jpg'
import svcKycVerification from './assets/svc_kyc_verification.jpg'
import svcLoanManagement from './assets/svc_loan_management.svg'
import svcEnterpriseCrm from './assets/svc_enterprise_crm.svg'
import svcErpSystem from './assets/svc_erp_system.svg'
import svcHrmsSystem from './assets/svc_hrms.jpg'
import svcInventoryMgmt from './assets/svc_inventory.jpg'
import svcEcommercePlatform from './assets/svc_ecommerce_platform.svg'
import svcBookingManagement from './assets/svc_booking.jpg'
import svcBillingInvoicing from './assets/svc_billing.jpg'
import svcCustomerSupport from './assets/svc_customer_support.svg'
import svcBusinessAutomation from './assets/svc_business_automation.jpg'
import svcCustomSaas from './assets/svc_custom_saas.svg'
import { ServicesPage } from './ServicesPage'
import { AboutPage } from './AboutPage'
import { CareerPage } from './CareerPage'
import { ContactPage } from './ContactPage'
import { ServiceCarousel } from './ServiceCarousel'

const navItems = ['Home', 'About', 'Services', 'Career', 'Contact']

const productList = [
  {
    id: 1,
    image: svcChatbot,
    title: 'AI Chatbot',
    category: 'AI & Automation',
    description: 'Deploy intelligent chatbots on Website & WhatsApp for 24/7 AI-powered customer support and engagement.',
  },
  {
    id: 2,
    image: svcSales,
    title: 'AI Sales Assistant',
    category: 'AI & Automation',
    description: 'Automate lead qualification, follow-ups & conversion journeys with AI-driven sales intelligence.',
  },
  {
    id: 3,
    image: svcVoice,
    title: 'AI Voice Agent',
    category: 'AI & Automation',
    description: 'AI-powered voice calling agents for inbound/outbound sales and customer support operations.',
  },
  {
    id: 4,
    image: svcCrm,
    title: 'AI CRM',
    category: 'AI & Automation',
    description: 'AI-powered lead management, pipeline automation, and smart sales CRM for growing businesses.',
  },
  {
    id: 5,
    image: svcDocument,
    title: 'AI Document Processing',
    category: 'AI & Automation',
    description: 'Automatically extract and process data from invoices, KYC documents, and business forms.',
  },
  {
    id: 6,
    image: svcAnalytics,
    title: 'AI Business Analytics',
    category: 'AI & Automation',
    description: 'AI-powered dashboards and business intelligence for real-time insights and smarter decisions.',
  },
  {
    id: 7,
    image: svcSocialScheduler,
    title: 'Social Media Scheduler',
    category: 'Growth & Operations',
    description: 'Schedule, plan, and automate multi-channel content publishing across Facebook, Instagram, LinkedIn & X.',
  },
  {
    id: 8,
    image: svcMultibrandSocial,
    title: 'Multi-Brand Social Media Dashboard',
    category: 'Growth & Operations',
    description: 'Manage multiple brand accounts, audience analytics, engagement metrics, and campaigns from one portal.',
  },
  {
    id: 9,
    image: svcPaymentGateway,
    title: 'Payment Gateway Platform',
    category: 'Fintech & Payments',
    description: 'Secure, high-speed multi-currency payment gateway with fraud detection and seamless one-click checkout.',
  },
  {
    id: 10,
    image: svcPayinPayout,
    title: 'Payin & Payout Platform',
    category: 'Fintech & Payments',
    description: 'Automate instant merchant payouts, bulk disbursements, split payments, and multi-channel collection rails.',
  },
  {
    id: 11,
    image: svcKycVerification,
    title: 'KYC & KYB Verification System',
    category: 'Fintech & Payments',
    description: 'AI-powered biometric ID validation, registry verification, risk scoring, and anti-fraud compliance checks.',
  },
  {
    id: 12,
    image: svcLoanManagement,
    title: 'Loan Management System (LMS)',
    category: 'Fintech & Payments',
    description: 'End-to-end loan lifecycle management with digital origination, credit scoring, underwriting & EMI collections.',
  },
  {
    id: 13,
    image: svcEnterpriseCrm,
    title: 'CRM',
    category: 'Enterprise & ERP',
    description: 'Comprehensive customer relationship management with deal pipeline tracking, activity logs, and lead scoring.',
  },
  {
    id: 14,
    image: svcErpSystem,
    title: 'ERP',
    category: 'Enterprise & ERP',
    description: 'Integrated enterprise resource planning connecting procurement, finance, operations, and supply chain.',
  },
  {
    id: 15,
    image: svcHrmsSystem,
    title: 'HRMS',
    category: 'Enterprise & ERP',
    description: 'Streamline employee onboarding, attendance, leave approvals, automated payroll, and performance management.',
  },
  {
    id: 16,
    image: svcInventoryMgmt,
    title: 'Inventory Management',
    category: 'Enterprise & ERP',
    description: 'Real-time multi-warehouse stock tracking, RFID barcode sync, automated reorders, and supplier integration.',
  },
  {
    id: 17,
    image: svcEcommercePlatform,
    title: 'E-commerce Platform',
    category: 'Growth & Operations',
    description: 'High-converting digital storefronts with catalog management, express checkout, order tracking, and cart sync.',
  },
  {
    id: 18,
    image: svcBookingManagement,
    title: 'Booking Management',
    category: 'Growth & Operations',
    description: 'Smart appointment booking calendar, staff resource allocation, payment deposits, and automated SMS reminders.',
  },
  {
    id: 19,
    image: svcBillingInvoicing,
    title: 'Billing & Invoicing',
    category: 'Fintech & Payments',
    description: 'Automated recurring subscriptions, tax-compliant GST/VAT invoicing, payment links, and dunning management.',
  },
  {
    id: 20,
    image: svcCustomerSupport,
    title: 'Customer Support Software',
    category: 'Growth & Operations',
    description: 'Omnichannel helpdesk ticketing, live chat routing, SLA tracking, and AI-assisted agent co-pilot replies.',
  },
  {
    id: 21,
    image: svcBusinessAutomation,
    title: 'Business Automation Platform',
    category: 'AI & Automation',
    description: 'Custom trigger-based workflow automation connecting APIs, databases, webhooks, and enterprise apps.',
  },
  {
    id: 22,
    image: svcCustomSaas,
    title: 'Custom SaaS Platforms',
    category: 'Enterprise & ERP',
    description: 'Tailor-made multi-tenant cloud SaaS architectures built for high scalability, security, and global performance.',
  },
]

const reasons = [
  {
    icon: 'fas fa-brain',
    title: 'AI-first strategy',
    desc: 'Strategic technology consulting powered by AI for growth-stage and enterprise businesses.',
  },
  {
    icon: 'fas fa-cubes',
    title: 'End-to-end delivery',
    desc: 'Full product thinking from discovery to deployment — design, build, and optimize.',
  },
  {
    icon: 'fas fa-bolt',
    title: 'Automation-led workflows',
    desc: 'Custom automation that reduces manual effort, cuts costs, and maximizes ROI.',
  },
  {
    icon: 'fas fa-layer-group',
    title: 'Scalable architecture',
    desc: 'Cloud-native, high-performance systems built for SaaS, fintech, and enterprise scale.',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Security & compliance',
    desc: 'Enterprise-grade security, KYC/KYB compliance, and regulatory-ready infrastructure.',
  },
  {
    icon: 'fas fa-headset',
    title: '24/7 support & growth',
    desc: 'Dedicated post-launch support, iterative improvements, and long-term partnership.',
  },
]

const aiPipeline = [
  {
    step: '01',
    icon: 'fas fa-satellite-dish',
    title: 'Ingest',
    desc: 'Chat, voice, documents, and APIs — every signal lands in one stream.',
  },
  {
    step: '02',
    icon: 'fas fa-brain',
    title: 'Understand',
    desc: 'Models read intent, risk, and context in milliseconds — not batch reports.',
  },
  {
    step: '03',
    icon: 'fas fa-project-diagram',
    title: 'Orchestrate',
    desc: 'Rules and AI decide which system, agent, or human should act next.',
  },
  {
    step: '04',
    icon: 'fas fa-bolt',
    title: 'Execute',
    desc: 'Payments, CRM, ERP, tickets, and workflows close the loop automatically.',
  },
]

const platformDomains = [
  'AI chat & voice',
  'Document intelligence',
  'KYC / KYB',
  'Payment rails',
  'CRM · ERP · HRMS',
  'Analytics copilots',
  'Custom SaaS',
]

const practiceAreas = [
  {
    icon: 'fas fa-robot',
    title: 'AI & Automation',
    category: 'AI & Automation',
    accent: '#3ee0d8',
    desc: 'Agents that sell, support, and process work around the clock.',
    items: ['Chatbots & WhatsApp', 'Voice calling agents', 'Sales copilot', 'Document intelligence', 'Workflow automation'],
  },
  {
    icon: 'fas fa-university',
    title: 'Fintech & Payments',
    category: 'Fintech & Payments',
    accent: '#f5c16c',
    desc: 'Compliant money movement, identity, and credit systems.',
    items: ['Payment gateway', 'Payin & payout rails', 'KYC / KYB verification', 'Loan management (LMS)', 'Billing & invoicing'],
  },
  {
    icon: 'fas fa-sitemap',
    title: 'Enterprise systems',
    category: 'Enterprise & ERP',
    accent: '#8b7cff',
    desc: 'The operating layer for people, inventory, and finance.',
    items: ['CRM & pipeline', 'ERP & supply chain', 'HRMS & payroll', 'Inventory control', 'Custom SaaS platforms'],
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Growth & operations',
    category: 'Growth & Operations',
    accent: '#d084ff',
    desc: 'Tools that turn traffic, bookings, and support into revenue.',
    items: ['E-commerce storefronts', 'Booking calendars', 'Social publishing', 'Omnichannel helpdesk', 'Business analytics'],
  },
]

const industryCards = [
  {
    icon: 'fas fa-coins',
    title: 'Fintech',
    desc: 'Onboarding, payouts, credit scoring, and compliance-ready payment stacks.',
  },
  {
    icon: 'fas fa-heartbeat',
    title: 'Healthcare',
    desc: 'Appointment systems, document intake, and secure operational workflows.',
  },
  {
    icon: 'fas fa-store',
    title: 'Retail & commerce',
    desc: 'Catalog, checkout, inventory, and multi-brand campaign control.',
  },
  {
    icon: 'fas fa-truck',
    title: 'Logistics',
    desc: 'Warehouse visibility, ERP sync, and automated exception handling.',
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Education',
    desc: 'Scheduling, CRM, and automated learner support across channels.',
  },
  {
    icon: 'fas fa-cloud',
    title: 'SaaS & services',
    desc: 'Multi-tenant platforms, billing, and AI copilots inside your own product.',
  },
]

const engagementModels = [
  {
    step: '01',
    title: 'Proof of Concept',
    time: '1–2 weeks',
    desc: 'Validate one high-value workflow — a chatbot, KYC check, or payment rail — before you commit full budget.',
  },
  {
    step: '02',
    title: 'Fixed-scope MVP',
    time: '3–6 weeks',
    desc: 'A production first release with architecture, QA, and a clear milestone plan you can ship.',
  },
  {
    step: '03',
    title: 'Dedicated pod',
    time: 'Ongoing sprints',
    desc: 'A senior engineering squad embedded with your team for continuous product delivery.',
  },
  {
    step: '04',
    title: 'Platform retainer',
    time: 'SLA-backed',
    desc: 'Monitoring, patches, new modules, and 24/7 support after go-live.',
  },
]

const workSteps = [
  {
    step: '01',
    icon: 'fas fa-search',
    title: 'Discover',
    desc: 'We start by understanding your business goals, target audience, pain points, and technical requirements through in-depth discovery sessions.',
  },
  {
    step: '02',
    icon: 'fas fa-lightbulb',
    title: 'Strategize',
    desc: 'We craft a tailored technology roadmap — choosing the right stack, architecture, and automation approach aligned to your growth objectives.',
  },
  {
    step: '03',
    icon: 'fas fa-code',
    title: 'Design & Build',
    desc: 'Our engineers and designers build your solution with clean code, intuitive UX, and scalable architecture — milestone by milestone.',
  },
  {
    step: '04',
    icon: 'fas fa-check-square',
    title: 'Test & Deploy',
    desc: 'Rigorous QA testing, performance checks, and security audits before a smooth, zero-downtime deployment to production.',
  },
  {
    step: '05',
    icon: 'fas fa-chart-line',
    title: 'Support & Grow',
    desc: 'Post-launch, we monitor, optimize, and scale your platform — adding features and integrations as your business evolves.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentView, setCurrentView] = useState('home')
  const [servicesCategory, setServicesCategory] = useState('All')
  const [hwwVisible, setHwwVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  const hwwRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    if (currentView !== 'home') return undefined
    const id = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % aiPipeline.length)
    }, 2800)
    return () => window.clearInterval(id)
  }, [currentView])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase()
      if (hash === '#services' || hash === '#/services' || hash === '#all-services') {
        setCurrentView('services')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#about-us' || hash === '#aboutus') {
        setCurrentView('about')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#career' || hash === '#careers' || hash === '#openings' || hash === '#/career') {
        setCurrentView('career')
        if (hash === '#openings') {
          setTimeout(() => {
            const el = document.getElementById('openings')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }, 120)
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      } else if (hash === '#contact' || hash === '#/contact' || hash === '#contact-us') {
        setCurrentView('contact')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setCurrentView('home')
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, y / max) : 0)
    }
    const onResize = () => {
      if (window.innerWidth > 1000) setMenuOpen(false)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [currentView])

  useEffect(() => {
    const glow = glowRef.current
    if (!glow || window.matchMedia('(pointer: coarse)').matches) return
    const move = (e) => {
      glow.style.transform = `translate3d(${e.clientX - 180}px, ${e.clientY - 180}px, 0)`
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    if (!nodes.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    )
    nodes.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [currentView])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHwwVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.01, rootMargin: '120px 0px 0px 0px' }
    )
    const el = hwwRef.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [currentView])

  const handleMenuToggle = () => setMenuOpen((prev) => !prev)

  const navigateTo = (destination, options = {}) => {
    setMenuOpen(false)
    if (destination === 'services') {
      setServicesCategory(options.category || 'All')
      setCurrentView('services')
      window.location.hash = '#services'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (destination === 'about') {
      setCurrentView('about')
      window.location.hash = '#about-us'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (destination === 'career' || destination === 'careers' || destination === 'openings') {
      setCurrentView('career')
      window.location.hash = '#career'
      if (destination === 'openings') {
        setTimeout(() => {
          const el = document.getElementById('openings')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 120)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else if (destination === 'contact') {
      setCurrentView('contact')
      window.location.hash = '#contact'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setCurrentView('home')
      window.location.hash = `#${destination}`
      if (destination === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setTimeout(() => {
          const el = document.getElementById(destination)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 80)
      }
    }
  }

  const headerSolid = scrolled || currentView !== 'home' || menuOpen

  return (
    <>
      <div className="site-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="site-grain" aria-hidden="true" />
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className={`header${headerSolid ? ' header--solid' : ''}${menuOpen ? ' header--open' : ''}`}>
        <div className="header-inner">
        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault()
            navigateTo('home')
          }}
        >
          <img src={logo} alt="AANVITA Technologies" />
        </a>

        <button
          type="button"
            className={`nav-toggle-btn${menuOpen ? ' is-open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
          >
            <span />
            <span />
            <span />
          </button>

        <nav className={`navbar${menuOpen ? ' nav-toggle' : ''}`}>
          <ul>
            {navItems.map((item) => {
              const itemLower = item.toLowerCase()
              const isActive =
                itemLower === 'services'
                  ? currentView === 'services'
                  : itemLower === 'about'
                  ? currentView === 'about'
                  : itemLower === 'career'
                  ? currentView === 'career'
                  : itemLower === 'contact'
                  ? currentView === 'contact'
                          : currentView === 'home' &&
                            (itemLower === 'home'
                              ? !window.location.hash || window.location.hash.toLowerCase() === '#home'
                              : window.location.hash.toLowerCase() === `#${itemLower}`)
              return (
                <li key={item}>
                  <a
                    href={`#${itemLower}`}
                    className={isActive ? 'active-nav-link' : ''}
                    onClick={(e) => {
                      e.preventDefault()
                      navigateTo(itemLower)
                    }}
                  >
                    {item}
                  </a>
                </li>
              )
            })}
          </ul>
            <button type="button" className="nav-cta" onClick={() => navigateTo('contact')}>
              Start a project
            </button>
        </nav>
        </div>
      </header>

      <main id="main">
      {currentView === 'services' ? (
          <ServicesPage
            services={productList}
            initialCategory={servicesCategory}
            onNavigateHome={(target) => navigateTo(target || 'home')}
          />
      ) : currentView === 'about' ? (
        <AboutPage onNavigateHome={(target) => navigateTo(target || 'home')} />
      ) : currentView === 'career' ? (
        <CareerPage onNavigateHome={(target) => navigateTo(target || 'home')} />
      ) : currentView === 'contact' ? (
        <ContactPage onNavigateHome={(target) => navigateTo(target || 'home')} />
      ) : (
        <>
            <section id="home" className="home">
              <div className="hero-bg" aria-hidden="true">
                <div className="hero-grid" />
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="hero-orb hero-orb-3" />
              </div>

              <div className="hero-inner">
                <div className="hero-copy">
                  <p className="hero-eyebrow">
                    <span className="live-dot" />
                    AI · SaaS · Fintech · Enterprise
                  </p>
                  <h1>
                    AANVITA
                    <span className="hero-gradient">builds the stack you run on.</span>
                  </h1>
                  <p className="hero-lead">
                    AI agents, payment rails, and enterprise platforms — designed as one product,
                    not a pile of disconnected tools.
                  </p>
                </div>

                <div className="hero-stage">
                  <div className="hero-flow">
                    <img
                      src={servicesFlowGif}
                      alt="How AANVITA services flow from idea to live product"
                    />
                  </div>
                </div>
              </div>

              <button type="button" className="hero-scroll" onClick={() => navigateTo('about')}>
                <span>Scroll</span>
                <i />
              </button>
          </section>

            <div className="section-seam" aria-hidden="true"><span /></div>

            <section id="about" className="platform-intro">
              <div className="platform-bg" aria-hidden="true">
                <div className="platform-grid" />
                <div className="platform-orb platform-orb-a" />
                <div className="platform-orb platform-orb-b" />
              </div>

              <div className="platform-inner">
                <div className="platform-split">
                  <div className="platform-copy" data-reveal>
                    <p className="section-kicker">Next-generation stack</p>
                    <h2 className="platform-title">
                      AANVITA builds the <span>AI operating layer</span> serious companies run on
                </h2>
                    <p className="platform-lead">
                      Not another plugin shop. We connect agents, fintech rails, and enterprise
                      systems into one architecture — so your business moves faster than competitors
                      still wiring tools together by hand.
                    </p>

                    <ul className="platform-points">
                      <li>
                        <i className="fas fa-check" />
                        One event stream from chat and voice to CRM, ERP, and payouts
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Production-grade security, observability, and SLA-backed support
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        100% IP ownership — your platform, your code, your data
                      </li>
                    </ul>

                    <div className="platform-actions">
                      <button type="button" className="home-about-btn" onClick={() => navigateTo('capabilities')}>
                        Explore the stack <i className="fas fa-arrow-right" />
                      </button>
                      <button type="button" className="btn-ghost studio-ghost" onClick={() => navigateTo('about')}>
                        About AANVITA
                      </button>
                    </div>
              </div>

                  <div className="platform-stage" data-reveal>
                    <div className="stage-panel">
                      <div className="stage-head">
                        <span className="stage-live">
                          <i className="live-dot" /> Intelligence loop
                        </span>
                        <em>always processing</em>
              </div>

                      <ol className="stage-flow">
                        {aiPipeline.map((item, i) => (
                          <li
                            key={item.step}
                            className={activeStep === i ? 'is-active' : ''}
                          >
                            <div className="stage-marker">
                              <i className={item.icon} />
                            </div>
                            <div className="stage-body">
                              <span>
                                {item.step} · {item.title}
                              </span>
                              <p>{item.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ol>

                      <div className="stage-tags" aria-label="Platform domains">
                        {platformDomains.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </section>

            <div className="section-seam" aria-hidden="true"><span /></div>

            <section className="pillar-section" id="capabilities">
              <div className="pillar-section-bg" aria-hidden="true">
                <div className="pillar-section-grid" />
                <div className="pillar-section-orb pillar-section-orb--1" />
                <div className="pillar-section-orb pillar-section-orb--2" />
              </div>

              <div className="pillar-inner">
                <div className="services-header" data-reveal>
                  <p className="section-kicker">What we provide</p>
                  <h1>Four practices. One delivery team.</h1>
                  <p>
                    Every product we ship sits in one of these layers — so you can start with a
                    single agent or stand up a full operating platform.
                </p>
              </div>
                <div className="pillar-grid">
                  {practiceAreas.map((area, i) => {
                    const productCount = productList.filter((s) => s.category === area.category).length
                    return (
                    <article
                      key={area.title}
                      className="pillar-card"
                      data-reveal
                      style={{
                        '--delay': `${i * 0.08}s`,
                        '--pillar-accent': area.accent,
                      }}
                    >
                      <div className="pillar-card-bg" aria-hidden="true">
                        <div className="pillar-card-glow" />
                        <div className="pillar-card-shine" />
                      </div>

                      <div className="pillar-card-inner">
                        <div className="pillar-card-head">
                          <span className="pillar-card-num">{String(i + 1).padStart(2, '0')}</span>
                          <div className="pillar-icon">
                            <i className={area.icon} />
                          </div>
                        </div>

                        <span className="pillar-card-badge">{productCount} products</span>
                        <h3>{area.title}</h3>
                        <p>{area.desc}</p>

                        <ul className="pillar-card-list">
                          {area.items.map((item) => (
                            <li key={item}>
                              <i className="fas fa-check" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pillar-card-footer">
                          <button
                            type="button"
                            className="pillar-card-cta"
                            onClick={() => navigateTo('services', { category: area.category })}
                          >
                            View products <i className="fas fa-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </article>
                    )
                  })}
                    </div>
                  </div>
            </section>

            <div className="section-seam" aria-hidden="true"><span /></div>

            <div className="services-wrap" id="services">
              <div className="services-container">
                <div className="services-header" data-reveal>
                  <p className="section-kicker">Product suite</p>
                  <h1>Systems that compound</h1>
                  <p>
                    All 22 systems we ship — swipe through the stack, tap the center card for
                    details, and request a demo in one step.
                  </p>
              </div>

                <ServiceCarousel services={productList} />

                <div className="services-explore-cta" data-reveal>
                  <button type="button" className="btn-explore-all-services" onClick={() => navigateTo('services')}>
                    <span>Browse by category</span>
                  <i className="fa fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>

            <div className="section-seam" aria-hidden="true"><span /></div>

            <section className="industry-section" id="industries">
              <div className="industry-inner">
                <div className="services-header" data-reveal>
                  <p className="section-kicker">Where we work</p>
                  <h1>Built for operators, not slide decks</h1>
                  <p>
                    The same platform patterns — identity, money movement, workflows, and systems of
                    record — adapted to the industry you already run.
                  </p>
                  </div>
                <div className="industry-grid">
                  {industryCards.map((item, i) => (
                    <article key={item.title} className="industry-card" data-reveal style={{ '--delay': `${i * 0.07}s` }}>
                      <i className={item.icon} />
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </article>
                  ))}
                </div>
            </div>
          </section>

            <div className="section-seam" aria-hidden="true"><span /></div>

          <section className="how-we-work-section" id="portfolio">
            <div className="hww-container">
                <div className="hww-header" data-reveal>
                  <p className="section-kicker">Method</p>
                  <h2 className="hww-title">
                    How we <span>work</span>
                  </h2>
                <p className="hww-subtitle">
                  A clear, structured process that takes your idea from concept to a fully
                  deployed, high-performing digital product.
                </p>
              </div>

              <div className={`hww-steps${hwwVisible ? ' hww-visible' : ''}`} ref={hwwRef}>
                <div className="hww-pulse-dots" aria-hidden="true">
                  <span className="hww-dot hww-dot-1" />
                  <span className="hww-dot hww-dot-2" />
                  <span className="hww-dot hww-dot-3" />
                </div>

                  {workSteps.map((item, idx) => (
                  <div className="hww-step-card" key={item.step} data-index={idx}>
                    <div className="hww-step-icon">
                      <i className={item.icon} />
                    </div>
                    <h4 className="hww-step-title">{item.title}</h4>
                    <p className="hww-step-desc">{item.desc}</p>
                    <div className="hww-connector" />
                  </div>
                ))}
              </div>
            </div>
          </section>

            <div className="section-seam" aria-hidden="true"><span /></div>

            <section className="engage-section" id="engagement">
              <div className="engage-inner">
                <div className="services-header" data-reveal>
                  <p className="section-kicker">How to start</p>
                  <h1>Pick the shape of the engagement</h1>
                  <p>
                    Most teams begin with a focused proof of concept, then expand into an MVP or a
                    dedicated pod. You keep 100% of the IP either way.
                  </p>
                </div>
                <div className="engage-grid">
                  {engagementModels.map((item, i) => (
                    <article key={item.step} className="engage-card" data-reveal style={{ '--delay': `${i * 0.08}s` }}>
                      <span>{item.step}</span>
                      <h3>{item.title}</h3>
                      <em>{item.time}</em>
                      <p>{item.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

          <div className="communicate">
              <div className="communicate-content" data-reveal>
                <p className="section-kicker kicker-on-dark">Next build</p>
                <h3>Need a smart business platform?</h3>
              <p>Let’s build your next growth engine with AI and custom software.</p>
              <a
                href="#contact"
                className="communicate-btn"
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('contact')
                }}
              >
                  <span>Talk to an engineer</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>

          <section className="why-choose-section" id="team">
            <div className="why-choose-container">
                <div className="why-choose-left" data-reveal>
                  <p className="section-kicker">Why AANVITA</p>
                <h2 className="why-choose-title">
                    The smart choice for <span>digital growth</span>
                </h2>
                <p className="why-choose-subtitle">
                    We combine AI, automation, and deep domain expertise to build systems that give
                    your business a lasting competitive edge.
                </p>

                <div className="why-choose-grid">
                  {reasons.map((r) => (
                    <div key={r.title} className="wc-card">
                      <div className="wc-card-icon">
                        <i className={r.icon} />
                      </div>
                      <div className="wc-card-body">
                        <h4>{r.title}</h4>
                        <p>{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

                <div className="why-choose-right" data-reveal>
                <div className="wc-visual">
                  <div className="wc-stat-blob">
                    <div className="wc-stat">
                      <span className="wc-stat-num">22+</span>
                        <span className="wc-stat-label">Products & services</span>
                    </div>
                    <div className="wc-stat">
                      <span className="wc-stat-num">480+</span>
                        <span className="wc-stat-label">Happy clients</span>
                    </div>
                    <div className="wc-stat">
                      <span className="wc-stat-num">720</span>
                        <span className="wc-stat-label">Projects delivered</span>
                    </div>
                    <div className="wc-stat">
                      <span className="wc-stat-num">18</span>
                        <span className="wc-stat-label">Awards won</span>
                    </div>
                  </div>
                  <div className="wc-trusted-badge">
                    <i className="fas fa-check-circle" />
                    <span>Trusted by businesses across 10+ countries</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      </main>

      <footer className="footer-new">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="AANVITA Technologies" className="footer-logo" />
            <p className="footer-tagline">
              Empowering businesses with AI automation, SaaS platforms, fintech infrastructure, and
              enterprise systems for the digital era.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn" className="footer-social-link">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="#" aria-label="Twitter" className="footer-social-link">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" aria-label="Instagram" className="footer-social-link">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" aria-label="Facebook" className="footer-social-link">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" aria-label="YouTube" className="footer-social-link">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">Quick links</h5>
            <ul className="footer-nav-list">
              {[
                ['Home', 'home'],
                ['About Us', 'about'],
                ['What we provide', 'capabilities'],
                ['Services', 'services'],
                ['How We Work', 'portfolio'],
                ['Contact', 'contact'],
              ].map(([label, target]) => (
                <li key={label}>
                  <a
                    href={`#${target}`}
                    onClick={(e) => {
                      e.preventDefault()
                      navigateTo(target)
                    }}
                  >
                    <i className="fas fa-chevron-right" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">Contact us</h5>
            <ul className="footer-contact-list">
              <li>
                <i className="fas fa-map-marker-alt" />
                <span>AANVITA Technologies, India</span>
              </li>
              <li>
                <i className="fas fa-envelope" />
                <span>info@aanvitatechnologies.com</span>
              </li>
              <li>
                <i className="fas fa-phone-alt" />
                <span>+91 00000 00000</span>
              </li>
              <li>
                <i className="fas fa-clock" />
                <span>Mon – Fri: 9:00 AM – 6:00 PM IST</span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">Stay updated</h5>
            <p className="footer-newsletter-desc">
              Subscribe for the latest updates on AI solutions, product releases, and digital
              transformation insights.
            </p>
            <form
              className="footer-newsletter-form"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <div className="footer-newsletter-wrap">
                <i className="fas fa-envelope" />
                <input type="email" name="email" placeholder="Your email address" required />
              </div>
              <button type="submit" className="footer-subscribe-btn">
                Subscribe <i className="fas fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 <span>AANVITA TECHNOLOGIES L.L.C.</span> All rights reserved.
          </p>
          <button
            className="footer-back-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up" />
          </button>
        </div>
      </footer>
    </>
  )
}

export default App
