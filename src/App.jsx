import { useEffect, useRef, useState } from 'react'
import './App.css'
import logo from './assets/ChatGPT_Image_Aug_31__2026__08_35_16_PM-removebg-preview.png'
import welcomeImage from './assets/ChatGPT_Image_Aug_31__2026__09_14_04_PM-removebg-preview.png'
import heroImage from './assets/img1.jpg'
import waveImage from './assets/wave.png'
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
import svcHrmsSystem from './assets/svc_hrms_system.svg'
import svcInventoryMgmt from './assets/svc_inventory_mgmt.svg'
import svcEcommercePlatform from './assets/svc_ecommerce_platform.svg'
import svcBookingManagement from './assets/svc_booking_management.svg'
import svcBillingInvoicing from './assets/svc_billing_invoicing.svg'
import svcCustomerSupport from './assets/svc_customer_support.svg'
import svcBusinessAutomation from './assets/svc_business_automation.svg'
import svcCustomSaas from './assets/svc_custom_saas.svg'
import { ServicesPage } from './ServicesPage'
import { AboutPage } from './AboutPage'
import { CareerPage } from './CareerPage'
import { ContactPage } from './ContactPage'

const navItems = ['Home', 'About', 'Services', 'Career', 'Contact', 'FAQ']

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

const stats = [
  { value: '12.5K', label: 'Working Hours' },
  { value: '720', label: 'Completed Projects' },
  { value: '480', label: 'Happy Clients' },
  { value: '18', label: 'Awards Received' },
]

const reasons = [
  {
    icon: 'fas fa-brain',
    title: 'AI-First Strategy',
    desc: 'Strategic technology consulting powered by AI for growth-stage and enterprise businesses.',
  },
  {
    icon: 'fas fa-cubes',
    title: 'End-to-End Delivery',
    desc: 'Full product thinking from discovery to deployment — design, build, and optimize.',
  },
  {
    icon: 'fas fa-bolt',
    title: 'Automation-Led Workflows',
    desc: 'Custom automation that reduces manual effort, cuts costs, and maximizes ROI.',
  },
  {
    icon: 'fas fa-layer-group',
    title: 'Scalable Architecture',
    desc: 'Cloud-native, high-performance systems built for SaaS, fintech, and enterprise scale.',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Security & Compliance',
    desc: 'Enterprise-grade security, KYC/KYB compliance, and regulatory-ready infrastructure.',
  },
  {
    icon: 'fas fa-headset',
    title: '24/7 Support & Growth',
    desc: 'Dedicated post-launch support, iterative improvements, and long-term partnership.',
  },
]

const faqList = [
  {
    id: 1,
    category: 'General',
    question: 'What services does AANVITA Technologies specialize in?',
    answer:
      'We deliver end-to-end digital transformation solutions including AI Chatbots & Voice Agents, Custom SaaS platforms, Fintech & Payment Gateway integrations, Enterprise CRM/ERP, Cloud DevOps, and automated operational workflows designed to scale with your business.',
  },
  {
    id: 2,
    category: 'Technology',
    question: 'Can you integrate AI and automation into our existing systems?',
    answer:
      'Yes, absolutely. We seamlessly integrate custom AI models, LLMs, and automated pipelines with your existing software stack—including legacy ERPs, CRMs, cloud databases, and third-party APIs like WhatsApp, Stripe, and Slack—without interrupting your ongoing operations.',
  },
  {
    id: 3,
    category: 'Pricing',
    question: 'How are your projects priced and what models do you offer?',
    answer:
      'We offer transparent, flexible pricing models suited to your project scope: fixed-price milestone delivery for clearly defined projects, and dedicated team/retainer models for continuous agile development. We provide detailed transparent estimates before beginning any work.',
  },
  {
    id: 4,
    category: 'Timeline',
    question: 'How long does it take from concept to final deployment?',
    answer:
      'A targeted MVP, prototype, or custom automation tool generally launches within 3 to 6 weeks. Larger enterprise platforms or multi-module SaaS products typically take 2 to 4 months. We work in rapid 2-week sprints so you see tangible progress regularly.',
  },
  {
    id: 5,
    category: 'Technology',
    question: 'How does your development and collaboration process work?',
    answer:
      'We follow an agile 4-step framework: (1) Discovery & Consultation, (2) Architecture & UI/UX prototyping, (3) Agile development & QA testing, and (4) Cloud deployment with post-launch optimization, telemetry monitoring, and dedicated collaboration channels.',
  },
  {
    id: 6,
    category: 'Security',
    question: 'How do you safeguard client data, IP, and confidentiality?',
    answer:
      'Intellectual property and security are our top priorities. We sign comprehensive Non-Disclosure Agreements (NDAs), transfer 100% IP ownership to you upon completion, and build with enterprise security standards including end-to-end encryption and compliance-ready infrastructure.',
  },
  {
    id: 7,
    category: 'Support',
    question: 'Do you provide ongoing maintenance and post-launch support?',
    answer:
      'Yes, we provide SLA-backed maintenance and support packages covering 24/7 server health monitoring, security patches, regular backups, bug fixes, and feature enhancements to ensure your platform runs smoothly at all times.',
  },
  {
    id: 8,
    category: 'General',
    question: 'Can we begin with a Proof of Concept (PoC) or MVP first?',
    answer:
      'Definitely! We actively encourage building a Proof of Concept (PoC) or Minimum Viable Product (MVP). This allows you to validate market demand, gather early user feedback, and test core value propositions with minimum upfront investment.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentView, setCurrentView] = useState('home')
  const [hwwVisible, setHwwVisible] = useState(false)
  const [openFaq, setOpenFaq] = useState(1)
  const hwwRef = useRef(null)

  const toggleFaq = (id) => {
    setOpenFaq((prev) => (prev === id ? null : id))
  }

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

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header')
      if (!header) return

      if (window.scrollY > 35 || currentView === 'services' || currentView === 'about' || currentView === 'career' || currentView === 'contact') {
        header.style.background = '#002e5f'
        header.style.boxShadow = '0 .2rem .5rem rgba(0,0,0,.4)'
      } else {
        header.style.background = 'transparent'
        header.style.boxShadow = 'none'
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setMenuOpen(false)
        document.querySelector('.header .navbar')?.classList.remove('nav-toggle')
        document.querySelector('.header .fa-bars')?.classList.remove('fa-times')
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [currentView])

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev)
  }

  const navigateTo = (destination) => {
    setMenuOpen(false)
    if (destination === 'services') {
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
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        }, 80)
      }
    }
  }

  useEffect(() => {
    const navBar = document.querySelector('.header .navbar')
    const bars = document.querySelector('.header .fa-bars')

    if (navBar) {
      navBar.classList.toggle('nav-toggle', menuOpen)
    }

    if (bars) {
      bars.classList.toggle('fa-times', menuOpen)
    }
  }, [menuOpen])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHwwVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
    )
    const el = hwwRef.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className="header">
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
          className="fa-bars fas"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
        />

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
                  : currentView === 'home' && window.location.hash.toLowerCase() === `#${itemLower}`
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
        </nav>
      </header>

      {currentView === 'services' ? (
        <ServicesPage
          services={productList}
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
          <section id="home" className="home" style={{ backgroundImage: `url(${heroImage})` }}>
            <h1>
              Build Smarter Business <span className="home-solutions-word">Solutions</span>
            </h1>
            <h2>With AANVITA Technologies</h2>
            <div className="wave wave1" style={{ backgroundImage: `url(${waveImage})` }} />
            <div className="wave wave2" style={{ backgroundImage: `url(${waveImage})` }} />
            <div className="wave wave3" style={{ backgroundImage: `url(${waveImage})` }} />
          </section>

          <section id="about" className="home-about-section">
            <div className="home-about-container">

              {/* LEFT — Text */}
              <div className="home-about-text">
<h2 className="home-about-title">
                  Welcome to <span>AANVITA Technologies!</span>
                </h2>
                <p className="home-about-desc">
                  We're your one-stop destination for comprehensive digital solutions — offering
                  intelligent AI automation, scalable SaaS platforms, fintech infrastructure, and
                  enterprise systems. Our mission is to empower businesses with transformative
                  technology and drive growth through smart digital strategies.
                </p>
                <p className="home-about-desc">
                  From startups to large enterprises, we design, build, and deploy systems that
                  improve productivity, customer experience, and competitive performance. Let's
                  collaborate and unlock your full potential in the digital world!
                </p>

              </div>

              {/* RIGHT — Illustration */}
              <div className="home-about-visual">
                <img
                  src={welcomeImage}
                  alt="Welcome to AANVITA Technologies"
                  className="home-about-img"
                />
              </div>

            </div>
          </section>

          {/* Home Featured Services Preview (Top 3 Cards) */}
          <div className="services-wrap" id="services">
            <div className="services-container">
              <div className="services-header">
                <h1>Our Services</h1>
                <p>
                  We help businesses build smart digital systems and scalable product experiences
                  through AI, automation, payment infrastructure, customer experience tools, and ERP
                  platforms.
                </p>
              </div>

              <div className="services-grid">
                {productList.slice(0, 6).map((item, index) => (
                  <div className="service-card" key={item.title}>
                    <div className="service-img-wrap">
                      <img src={item.image} alt={item.title} className="service-img" />
                      <div className="service-img-overlay">
                        <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                    </div>
                    <div className="service-body">
                      <h6>{item.title}</h6>
                      <p>{item.description}</p>
                      <button
                        type="button"
                        onClick={() => navigateTo('services')}
                        className="service-link"
                      >
                        Learn More <i className="fa fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Services CTA */}
              <div className="services-explore-cta">
                <button
                  type="button"
                  className="btn-explore-all-services"
                  onClick={() => navigateTo('services')}
                >
                  <span>Explore All 22 Services &amp; Solutions</span>
                  <i className="fa fa-arrow-right" />
                </button>
                <p className="services-explore-subtext">
                  Including Payment Gateways, LMS, CRM, ERP, HRMS, Social Media Tools &amp; Custom SaaS Platforms
                </p>
              </div>
            </div>
          </div>

          <section className="counters">
            <div className="container" style={{ justifyContent: 'center' }}>
              {stats.map((stat) => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <i className="far fa-clock fa-4x" />
                  <div className="counter" data-target={stat.value}>
                    {stat.value}
                  </div>
                  <h3>{stat.label}</h3>
                </div>
              ))}
            </div>
          </section>

          <section className="how-we-work-section" id="portfolio">
            <div className="hww-container">
              <div className="hww-header">
                <h2 className="hww-title">How We <span>Work?</span></h2>
                <p className="hww-subtitle">
                  A clear, structured process that takes your idea from concept to a fully
                  deployed, high-performing digital product.
                </p>
              </div>

              <div className={`hww-steps${hwwVisible ? ' hww-visible' : ''}`} ref={hwwRef}>
                {/* 3 Animated Glowing Balls flowing continuously */}
                <div className="hww-pulse-dots" aria-hidden="true">
                  <span className="hww-dot hww-dot-1" />
                  <span className="hww-dot hww-dot-2" />
                  <span className="hww-dot hww-dot-3" />
                </div>

                {[
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
                ].map((item, idx) => (
                  <div className="hww-step-card" key={item.step} data-index={idx}>
                    <div className="hww-step-number">{item.step}</div>
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

          <div className="communicate">
            <div className="communicate-content">
              <h3>Need a Smart Business Platform?</h3>
              <p>Let’s build your next growth engine with AI and custom software.</p>
              <a
                href="#contact"
                className="communicate-btn"
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('contact')
                }}
              >
                <span>Contact Now</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>

          <section className="why-choose-section" id="team">
            <div className="why-choose-container">

              {/* Left — Text + Feature Cards */}
              <div className="why-choose-left">
                <h2 className="why-choose-title">
                  The Smart Choice for <span>Digital Growth</span>
                </h2>
                <p className="why-choose-subtitle">
                  We combine AI, automation, and deep domain expertise to build
                  systems that give your business a lasting competitive edge.
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

              {/* Right — Visual panel */}
              <div className="why-choose-right">
                <div className="wc-visual">
                  <div className="wc-stat-blob">
                    <div className="wc-stat">
                      <span className="wc-stat-num">22+</span>
                      <span className="wc-stat-label">Products & Services</span>
                    </div>
                    <div className="wc-stat">
                      <span className="wc-stat-num">480+</span>
                      <span className="wc-stat-label">Happy Clients</span>
                    </div>
                    <div className="wc-stat">
                      <span className="wc-stat-num">720</span>
                      <span className="wc-stat-label">Projects Delivered</span>
                    </div>
                    <div className="wc-stat">
                      <span className="wc-stat-num">18</span>
                      <span className="wc-stat-label">Awards Won</span>
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

          <section className="faq-section" id="faq">
            <div className="faq-container">
              {/* Header */}
              <div className="faq-header">
                <h2 className="faq-title">
                  Frequently Asked <span>Questions</span>
                </h2>
                <p className="faq-subtitle">
                  Find quick answers to common questions about our technical expertise, development workflow, pricing models, and post-launch support.
                </p>
              </div>

              {/* Accordion List */}
              <div className="faq-accordion-list">
                {faqList.map((faq) => {
                  const isOpen = openFaq === faq.id
                  return (
                    <div
                      key={faq.id}
                      className={`faq-item ${isOpen ? 'open' : ''}`}
                    >
                      <button
                        type="button"
                        className="faq-item-header"
                        onClick={() => toggleFaq(faq.id)}
                        aria-expanded={isOpen}
                      >
                        <div className="faq-q-left">
                          <span className="faq-cat-tag">{faq.category}</span>
                          <h3 className="faq-question-text">{faq.question}</h3>
                        </div>
                        <div className="faq-toggle-icon">
                          <i className={`fas fa-plus ${isOpen ? 'rotate-open' : ''}`} />
                        </div>
                      </button>
                      <div className={`faq-item-body ${isOpen ? 'show' : ''}`}>
                        <div className="faq-item-content">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Bottom Support CTA Banner */}
              <div className="faq-support-card">
                <div className="faq-support-info">
                  <div className="faq-support-icon">
                    <i className="fas fa-headset" />
                  </div>
                  <div>
                    <h4>Still have questions?</h4>
                    <p>Can't find what you're looking for? Our consulting team is ready to assist you.</p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="faq-support-btn"
                  onClick={(e) => {
                    e.preventDefault()
                    navigateTo('contact')
                  }}
                >
                  <span>Get In Touch</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      <footer className="footer-new">
        {/* Top content grid */}
        <div className="footer-grid">

          {/* Col 1 — Brand */}
          <div className="footer-brand">
            <img src={logo} alt="AANVITA Technologies" className="footer-logo" />
            <p className="footer-tagline">
              Empowering businesses with AI automation, SaaS platforms, fintech
              infrastructure, and enterprise systems for the digital era.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn" className="footer-social-link"><i className="fab fa-linkedin-in" /></a>
              <a href="#" aria-label="Twitter" className="footer-social-link"><i className="fab fa-twitter" /></a>
              <a href="#" aria-label="Instagram" className="footer-social-link"><i className="fab fa-instagram" /></a>
              <a href="#" aria-label="Facebook" className="footer-social-link"><i className="fab fa-facebook-f" /></a>
              <a href="#" aria-label="YouTube" className="footer-social-link"><i className="fab fa-youtube" /></a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="footer-col">
            <h5 className="footer-col-title">Quick Links</h5>
            <ul className="footer-nav-list">
              {[
                ['Home', 'home'],
                ['About Us', 'about'],
                ['Services', 'services'],
                ['How We Work', 'portfolio'],
                ['FAQ', 'faq'],
                ['Contact', 'contact'],
              ].map(([label, target]) => (
                <li key={label}>
                  <a href={`#${target}`} onClick={(e) => { e.preventDefault(); navigateTo(target) }}>
                    <i className="fas fa-chevron-right" />{label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div className="footer-col">
            <h5 className="footer-col-title">Contact Us</h5>
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

          {/* Col 4 — Newsletter */}
          <div className="footer-col">
            <h5 className="footer-col-title">Stay Updated</h5>
            <p className="footer-newsletter-desc">
              Subscribe for the latest updates on AI solutions, product releases,
              and digital transformation insights.
            </p>
            <form className="footer-newsletter-form" action="" method="post">
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

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 <span>AANVITA TECHNOLOGIES L.L.C.</span> All Rights Reserved.
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
