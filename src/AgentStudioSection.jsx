import { useState, useEffect } from 'react'

const agentDemos = [
  {
    id: 'chatbot',
    label: 'AI Chatbot',
    icon: 'fas fa-robot',
    themeColor: '#25d366',
    agentName: 'AI Chatbot & Support Buddy',
    agentDesc: 'Engages website visitors, answers questions 24/7, and qualifies inbound leads over Web & WhatsApp.',
    model: 'Claude 3.5 Sonnet',
    integrations: [
      { name: 'WhatsApp', icon: 'fab fa-whatsapp', color: '#25d366' },
      { name: 'Web Chat', icon: 'fas fa-comments', color: '#3ee0d8' },
      { name: 'Zendesk', icon: 'fas fa-headset', color: '#03363d' },
    ],
    user: {
      name: 'Tariq Al-Mansoor (VIP Buyer)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      message: 'Can I check order status for #TK-8921 and update my drop-off location to Downtown Dubai?',
    },
    trace: [
      { icon: 'fas fa-search', text: 'Verified customer identity & live GPS location in Logistics ERP' },
      { icon: 'fas fa-map-marker-alt', text: 'Auto-updated dispatch routing & sent instant WhatsApp confirmation' },
    ],
    // Bespoke UI Type: 'tracker'
    uiType: 'tracker',
    trackingData: {
      trackingId: 'TRK-DXB-98410',
      carrier: 'Aanvita Express Courier',
      eta: 'Today, 4:30 PM (On Schedule)',
      destination: 'Villa 42, Downtown Dubai, UAE',
      steps: [
        { label: 'Order Placed', time: '10:15 AM', done: true },
        { label: 'Warehouse Dispatched', time: '01:40 PM', done: true },
        { label: 'Out for Delivery', time: '03:10 PM', active: true },
        { label: 'Delivered', time: 'Est. 04:30 PM', done: false },
      ],
    },
  },
  {
    id: 'crm',
    label: 'CRM & Deals',
    icon: 'fas fa-chart-line',
    themeColor: '#38bdf8',
    agentName: 'CRM & Lead Pipeline Agent',
    agentDesc: 'Researches prospects, monitors deal risk, and keeps CRM pipelines synchronized in real time.',
    model: 'GPT-4o Enterprise',
    integrations: [
      { name: 'HubSpot', icon: 'fab fa-hubspot', color: '#ff7a59' },
      { name: 'Salesforce', icon: 'fab fa-salesforce', color: '#00a1e0' },
      { name: 'Slack', icon: 'fab fa-slack', color: '#e01e5a' },
    ],
    user: {
      name: 'Marcelo (VP of Revenue)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      message: "How's our Q1 enterprise pipeline looking? Anything at risk before Friday's board update?",
    },
    trace: [
      { icon: 'fas fa-search', text: 'Fetching Q1 open opportunities from HubSpot CRM' },
      { icon: 'fas fa-sync-alt', text: 'Cross-referencing historical closing velocity & Salesforce stages' },
    ],
    // Bespoke UI Type: 'pipeline'
    uiType: 'pipeline',
    pipelineData: {
      totalValue: '$316,500',
      forecastAccuracy: '94.2%',
      deals: [
        { name: 'Enterprise Expansion', account: 'Meridian Health', stage: 'Negotiation', amount: '$142,000', prob: 85, owner: 'Marcus Webb', status: 'high' },
        { name: 'Platform Rollout', account: 'Torchlight Systems', stage: 'Proposal Sent', amount: '$98,500', prob: 60, owner: 'Katherine Duh', status: 'med' },
        { name: 'Annual Renewal + AI Pod', account: 'Castleford Inc.', stage: 'Contract Review', amount: '$76,000', prob: 92, owner: 'Priya Nair', status: 'high' },
      ],
    },
  },
  {
    id: 'voice',
    label: 'AI Voice Agent',
    icon: 'fas fa-phone-alt',
    themeColor: '#ec4899',
    agentName: 'AI Voice Agent & Calling Bot',
    agentDesc: 'Conducts natural multi-lingual voice calls for customer qualification, support, and demo scheduling.',
    model: 'Gemini 1.5 Pro / Whisper',
    integrations: [
      { name: 'Twilio Voice', icon: 'fas fa-phone-volume', color: '#f22f46' },
      { name: 'Google Meet', icon: 'fab fa-google', color: '#4285f4' },
      { name: 'HubSpot', icon: 'fab fa-hubspot', color: '#ff7a59' },
    ],
    user: {
      name: 'Inbound Caller (+971 50 281 ****)',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
      message: 'Hello! Calling to book an on-site enterprise demonstration for our Dubai finance team next Tuesday.',
    },
    trace: [
      { icon: 'fas fa-microphone-alt', text: 'Real-time conversational speech-to-intent synthesis (85ms latency)' },
      { icon: 'fas fa-calendar-check', text: 'Validated consultant availability & dispatched Google Meet calendar invite' },
    ],
    // Bespoke UI Type: 'voice'
    uiType: 'voice',
    voiceData: {
      caller: '+971 50 281 ****',
      company: 'Falcon FinCorp UAE',
      duration: '02:14',
      sentiment: '98% Positive',
      meetingTitle: 'Enterprise Architecture & AI Pod Demo',
      meetingTime: 'Tue, Mar 18 • 11:00 AM (GST)',
      platform: 'Google Meet',
    },
  },
  {
    id: 'erp',
    label: 'ERP & Ops',
    icon: 'fas fa-layer-group',
    themeColor: '#0284c7',
    agentName: 'Enterprise ERP & Supply Engine',
    agentDesc: 'Synchronizes inventory across warehouses, automates purchase orders, and optimizes supplier logistics.',
    model: 'Claude 3.5 Sonnet',
    integrations: [
      { name: 'SAP S/4HANA', icon: 'fas fa-cubes', color: '#008fd3' },
      { name: 'NetSuite', icon: 'fas fa-circle-notch', color: '#c74634' },
      { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
    ],
    user: {
      name: 'Warehouse Ops Monitor',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      message: 'Critical stock alert: Low inventory threshold triggered for Component SKU-7721 at Dubai South Hub.',
    },
    trace: [
      { icon: 'fas fa-box-open', text: 'Audited stock levels & supplier lead times across 3 regional nodes' },
      { icon: 'fas fa-file-invoice-dollar', text: 'Auto-generated purchase requisition #PO-8841 and notified supplier' },
    ],
    // Bespoke UI Type: 'erp'
    uiType: 'erp',
    erpData: {
      poNumber: '#PO-2026-8841',
      supplier: 'Global Tech Components Ltd',
      deliveryEta: '48 Hours (Express Freight)',
      items: [
        { sku: 'SKU-7721-DXB', name: 'Micro-Controller Units', stock: 140, max: 800, threshold: 200, status: 'low', reorder: 660 },
        { sku: 'SKU-4409-AUH', name: 'Power Modules (Heavy)', stock: 520, max: 600, threshold: 150, status: 'ok', reorder: 0 },
        { sku: 'SKU-9912-SHJ', name: 'Optic Fiber Transceivers', stock: 310, max: 400, threshold: 100, status: 'ok', reorder: 0 },
      ],
    },
  },
  {
    id: 'fintech',
    label: 'Fintech & Rails',
    icon: 'fas fa-credit-card',
    themeColor: '#10b981',
    agentName: 'Fintech Rails & Payout Reconciler',
    agentDesc: 'Processes multi-currency payouts, audits transactional ledger entries, and validates bank compliance.',
    model: 'GPT-4o Enterprise',
    integrations: [
      { name: 'Stripe', icon: 'fab fa-stripe-s', color: '#635bff' },
      { name: 'UAE Central Bank', icon: 'fas fa-university', color: '#3ee0d8' },
      { name: 'Plaid', icon: 'fas fa-link', color: '#00d26a' },
    ],
    user: {
      name: 'Elena Rostova (Head of Finance)',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
      message: 'Reconcile today’s international gateway disbursements and highlight any VAT discrepancies.',
    },
    trace: [
      { icon: 'fas fa-receipt', text: 'Parsed 3,420 transactional ledger entries across UAE FAB & Stripe' },
      { icon: 'fas fa-check-double', text: 'Zero VAT discrepancies detected against UAE corporate tax rules' },
    ],
    // Bespoke UI Type: 'fintech'
    uiType: 'fintech',
    fintechData: {
      settledCount: '3,420 Transactions',
      complianceRate: '100% Tax Compliant',
      gateways: [
        { rail: 'UAE Central / FAB Rails', currency: 'AED', volume: 'AED 480,200', fee: '0.12%', status: 'Reconciled', badge: 'audit-pass' },
        { rail: 'Stripe Global Card Rails', currency: 'USD', volume: '$128,450', fee: '1.4%', status: 'Reconciled', badge: 'audit-pass' },
        { rail: 'GCC Cross-Border IBAN', currency: 'SAR', volume: 'SAR 94,100', fee: '0.25%', status: 'Reconciled', badge: 'audit-pass' },
      ],
    },
  },
  {
    id: 'hrms',
    label: 'HRMS & Payroll',
    icon: 'fas fa-user-check',
    themeColor: '#a855f7',
    agentName: 'HRMS & Automated Payroll Agent',
    agentDesc: 'Calculates salary, handles UAE WPS compliance, tracks leaves, and screens incoming candidate scorecards.',
    model: 'Llama 3.3 Enterprise',
    integrations: [
      { name: 'HRMS Cloud', icon: 'fas fa-user-tie', color: '#3ee0d8' },
      { name: 'UAE WPS', icon: 'fas fa-shield-alt', color: '#10b981' },
      { name: 'Google Suite', icon: 'fab fa-google', color: '#4285f4' },
    ],
    user: {
      name: 'Kareem Al-Sayed (HR Director)',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      message: 'Run monthly WPS payroll calculation for 180 employees across UAE & UK corporate entities.',
    },
    trace: [
      { icon: 'fas fa-users', text: 'Audited biometric attendance, leave deduction & benefits records' },
      { icon: 'fas fa-file-invoice-dollar', text: 'Compiled UAE Ministry compliant SIF / WPS salary file successfully' },
    ],
    // Bespoke UI Type: 'hrms'
    uiType: 'hrms',
    hrmsData: {
      totalStaff: '180 Employees',
      totalDisbursement: '$348,000 USD Eqv.',
      entities: [
        { name: 'Aanvita UAE (Dubai HQ)', staff: '112 Staff', gross: 'AED 845,000', wps: '100% WPS Compliant', status: 'Ready to Disburse' },
        { name: 'Aanvita UK (London)', staff: '42 Staff', gross: '£168,000', wps: 'HMRC PAYE Approved', status: 'Ready to Disburse' },
        { name: 'Aanvita India Center', staff: '26 Staff', gross: '₹2,450,000', wps: 'EPF / TDS Reconciled', status: 'Ready to Disburse' },
      ],
    },
  },
]

const AUTO_CYCLE_INTERVAL_MS = 3200 // Smooth auto-switch every 3.2 seconds

export function AgentStudioSection({ onNavigate }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-cycle one by one, pause on hover so user can read data comfortably
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % agentDemos.length)
    }, AUTO_CYCLE_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [isPaused])

  const currentDemo = agentDemos[activeIndex] || agentDemos[0]

  return (
    <section className="agent-studio-section" id="agent-studio">
      <div className="agent-studio-bg" aria-hidden="true">
        <div className="agent-studio-glow agent-studio-glow--1" />
        <div className="agent-studio-glow agent-studio-glow--2" />
        <div className="agent-studio-grid-lines" />
      </div>

      <div className="agent-studio-container">
        {/* Left Column: Pitch & Capabilities */}
        <div className="agent-studio-pitch" data-reveal>
          <div className="agent-studio-badge">
            <span>Agentic Platform</span>
            <i className="fas fa-arrow-right" />
          </div>

          <h2 className="agent-studio-title">
            Let custom AI agents <span>run your heavy workflows</span>
          </h2>

          <p className="agent-studio-lead">
            Understanding a task is the only prerequisite to automating it. Connect your ERP,
            CRM, databases, and communication channels — our autonomous agents handle cross-system
            execution in real time with zero human fatigue.
          </p>

          <div className="agent-studio-actions">
            <button
              type="button"
              className="btn btn-primary-glow"
              onClick={() => onNavigate && onNavigate('contact')}
            >
              Build Your Agent
            </button>
            <button
              type="button"
              className="btn btn-secondary-outline"
              onClick={() => onNavigate && onNavigate('services')}
            >
              Explore Solutions
            </button>
          </div>

          <div className="agent-studio-features">
            <div className="agent-feat-item">
              <i className="fas fa-bolt" />
              <span>Real-time Triggers</span>
            </div>
            <div className="agent-feat-item">
              <i className="fas fa-network-wired" />
              <span>400+ Connectors</span>
            </div>
            <div className="agent-feat-item">
              <i className="fas fa-table" />
              <span>Tailored Visual UI</span>
            </div>
            <div className="agent-feat-item">
              <i className="fas fa-shield-alt" />
              <span>Guardrails & Safety</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Workspace Simulator with Bespoke UI for Each Service */}
        <div className="agent-studio-interactive" data-reveal>
          <div
            className="agent-studio-window"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Window Top Controls */}
            <div className="agent-window-bar">
              <div className="agent-window-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="agent-window-title">
                <i className="fas fa-terminal" /> aanvita-runtime // {currentDemo.id}-agent.session
              </div>
              <div className="agent-window-live">
                <span className="live-pulse" />
                <span>AUTO-CYCLE ({activeIndex + 1}/{agentDemos.length})</span>
              </div>
            </div>

            <div className="agent-window-body">
              {/* Department Tab Switcher */}
              <div className="agent-tabs-sidebar">
                {agentDemos.map((demo, idx) => {
                  const isActive = activeIndex === idx
                  return (
                    <button
                      key={demo.id}
                      type="button"
                      className={`agent-tab-btn ${isActive ? 'is-active' : ''}`}
                      onClick={() => setActiveIndex(idx)}
                      aria-selected={isActive}
                      style={{ '--accent': demo.themeColor }}
                    >
                      <i className={demo.icon} />
                      <span>{demo.label}</span>
                      {isActive && <span className="agent-tab-progress" aria-hidden="true" />}
                    </button>
                  )
                })}
              </div>

              {/* Live Agent Workspace Content - Changes dynamically with unique UI per service */}
              <div className="agent-workspace-wrapper">
                <div key={currentDemo.id} className="agent-workspace-panel">
                  {/* Agent Profile Header */}
                <div className="agent-header-strip">
                  <div className="agent-header-info">
                    <div
                      className="agent-avatar-icon"
                      style={{
                        background: `radial-gradient(circle, ${currentDemo.themeColor}25, transparent)`,
                        borderColor: `${currentDemo.themeColor}55`,
                        color: currentDemo.themeColor,
                      }}
                    >
                      <i className={currentDemo.icon} />
                    </div>
                    <div>
                      <h3 className="agent-name">{currentDemo.agentName}</h3>
                      <p className="agent-desc">{currentDemo.agentDesc}</p>
                    </div>
                  </div>

                  <div className="agent-header-badges">
                    <span className="agent-model-chip">
                      <i className="fas fa-microchip" /> {currentDemo.model}
                    </span>
                    <div className="agent-integrations-list">
                      {currentDemo.integrations.map((integ) => (
                        <span key={integ.name} className="agent-integ-pill" title={integ.name}>
                          <i className={integ.icon} style={{ color: integ.color }} />
                          <span>{integ.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Simulated User Question */}
                <div className="agent-chat-stream">
                  <div className="agent-user-msg">
                    <img src={currentDemo.user.avatar} alt={currentDemo.user.name} className="agent-user-avatar" />
                    <div className="agent-user-balloon">
                      <div className="agent-user-name">{currentDemo.user.name}</div>
                      <p>{currentDemo.user.message}</p>
                    </div>
                  </div>

                  {/* Agent Reasoning Card */}
                  <div className="agent-reasoning-card">
                    <div className="agent-reasoning-head">
                      <span className="agent-bot-badge">
                        <i className="fas fa-robot" style={{ color: currentDemo.themeColor }} /> {currentDemo.agentName}
                      </span>
                      <span className="agent-reasoning-status">
                        <i className="fas fa-check-circle" /> Executed in 380ms
                      </span>
                    </div>

                    <div className="agent-trace-steps">
                      {currentDemo.trace.map((step, idx) => (
                        <div key={idx} className="agent-trace-item">
                          <i className={step.icon} style={{ color: currentDemo.themeColor }} />
                          <span>{step.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* ══════════════════════════════════════════════════════
                        BESPOKE UI ACCORDING TO SERVICE TYPE
                        ══════════════════════════════════════════════════════ */}

                    {/* 1. CHATBOT: WhatsApp & GPS Package Tracker UI */}
                    {currentDemo.uiType === 'tracker' && (
                      <div className="bespoke-card bespoke-tracker">
                        <div className="tracker-top-bar">
                          <div>
                            <span className="tracker-label">Tracking ID</span>
                            <span className="tracker-code">{currentDemo.trackingData.trackingId}</span>
                          </div>
                          <div className="tracker-badge">
                            <span className="tracker-badge-dot" />
                            <span>Out for Delivery</span>
                          </div>
                        </div>

                        <div className="tracker-stepper">
                          {currentDemo.trackingData.steps.map((step, sIdx) => (
                            <div
                              key={step.label}
                              className={`tracker-step ${step.done ? 'is-done' : ''} ${step.active ? 'is-active' : ''}`}
                            >
                              <div className="tracker-step-node">
                                {step.done ? <i className="fas fa-check" /> : <span>{sIdx + 1}</span>}
                              </div>
                              <span className="tracker-step-title">{step.label}</span>
                              <span className="tracker-step-time">{step.time}</span>
                            </div>
                          ))}
                        </div>

                        <div className="tracker-footer">
                          <div className="tracker-destination">
                            <i className="fas fa-map-marker-alt" />
                            <span>Destination: <strong>{currentDemo.trackingData.destination}</strong></span>
                          </div>
                          <div className="tracker-eta">
                            <i className="fas fa-clock" />
                            <span>ETA: {currentDemo.trackingData.eta}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 2. CRM: Interactive Pipeline & Probability Matrix UI */}
                    {currentDemo.uiType === 'pipeline' && (
                      <div className="bespoke-card bespoke-pipeline">
                        <div className="pipeline-header-stats">
                          <div className="pipeline-stat-box">
                            <span className="stat-label">Total Q1 Pipeline</span>
                            <strong className="stat-num">{currentDemo.pipelineData.totalValue}</strong>
                          </div>
                          <div className="pipeline-stat-box">
                            <span className="stat-label">Forecast Confidence</span>
                            <strong className="stat-num stat-cyan">{currentDemo.pipelineData.forecastAccuracy}</strong>
                          </div>
                          <div className="pipeline-stat-box">
                            <span className="stat-label">Active Deals</span>
                            <strong className="stat-num">3 Enterprise</strong>
                          </div>
                        </div>

                        <div className="pipeline-deals-list">
                          {currentDemo.pipelineData.deals.map((deal) => (
                            <div key={deal.name} className="pipeline-deal-item">
                              <div className="deal-left">
                                <span className="deal-title">{deal.name}</span>
                                <span className="deal-account">{deal.account}</span>
                              </div>
                              <div className="deal-mid">
                                <span className="deal-stage-badge">{deal.stage}</span>
                                <div className="deal-prob-bar">
                                  <div className="deal-prob-fill" style={{ width: `${deal.prob}%` }} />
                                </div>
                                <span className="deal-prob-text">{deal.prob}% Win Rate</span>
                              </div>
                              <div className="deal-right">
                                <strong className="deal-amount">{deal.amount}</strong>
                                <span className="deal-owner">{deal.owner}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 3. VOICE: Calling HUD & Waveform & Calendar Booking UI */}
                    {currentDemo.uiType === 'voice' && (
                      <div className="bespoke-card bespoke-voice">
                        <div className="voice-hud-bar">
                          <div className="voice-caller-info">
                            <div className="voice-avatar-ring">
                              <i className="fas fa-phone-alt" />
                            </div>
                            <div>
                              <span className="voice-caller-name">{currentDemo.voiceData.company}</span>
                              <span className="voice-caller-number">{currentDemo.voiceData.caller}</span>
                            </div>
                          </div>

                          {/* Animated Voice Waveform */}
                          <div className="voice-waveform" aria-hidden="true">
                            <span className="wave-bar w1" />
                            <span className="wave-bar w2" />
                            <span className="wave-bar w3" />
                            <span className="wave-bar w4" />
                            <span className="wave-bar w5" />
                            <span className="wave-bar w6" />
                            <span className="wave-bar w7" />
                            <span className="wave-bar w8" />
                          </div>

                          <div className="voice-call-status">
                            <span className="call-live-dot" />
                            <span>{currentDemo.voiceData.duration} (Live HD)</span>
                          </div>
                        </div>

                        {/* Live Speech-to-Intent Recognition */}
                        <div className="voice-transcript-bar">
                          <i className="fas fa-closed-captioning" />
                          <span>Speech-to-Intent: <strong>"Confirmed on-site demo with finance team for next Tuesday 11:00 AM GST"</strong></span>
                        </div>

                        {/* Calendar Booking Box */}
                        <div className="voice-booking-card">
                          <div className="booking-icon">
                            <i className="fas fa-calendar-check" />
                          </div>
                          <div className="booking-details">
                            <span className="booking-kicker">Automated Google Meet Scheduled</span>
                            <h4 className="booking-title">{currentDemo.voiceData.meetingTitle}</h4>
                            <span className="booking-slot">
                              <i className="far fa-clock" /> {currentDemo.voiceData.meetingTime}
                            </span>
                          </div>
                          <div className="booking-badge">
                            <i className="fas fa-check" /> Confirmed
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 4. ERP: Warehouse Inventory Gauges & Automated PO UI */}
                    {currentDemo.uiType === 'erp' && (
                      <div className="bespoke-card bespoke-erp">
                        <div className="erp-top-bar">
                          <div className="erp-po-info">
                            <span className="erp-label">Automated SAP Reorder Requisition</span>
                            <strong className="erp-po-code">{currentDemo.erpData.poNumber}</strong>
                          </div>
                          <div className="erp-badge">
                            <i className="fas fa-truck-loading" />
                            <span>Vendor Dispatched • ETA {currentDemo.erpData.deliveryEta}</span>
                          </div>
                        </div>

                        <div className="erp-stock-list">
                          {currentDemo.erpData.items.map((item) => (
                            <div key={item.sku} className="erp-stock-item">
                              <div className="stock-info">
                                <span className="stock-sku">{item.sku}</span>
                                <span className="stock-name">{item.name}</span>
                              </div>
                              <div className="stock-meter-wrap">
                                <div className="stock-meter-bar">
                                  <div
                                    className={`stock-meter-fill ${item.status === 'low' ? 'fill-low' : 'fill-ok'}`}
                                    style={{ width: `${(item.stock / item.max) * 100}%` }}
                                  />
                                </div>
                                <span className="stock-count">
                                  <strong>{item.stock}</strong> / {item.max} Units
                                </span>
                              </div>
                              <div className="stock-action">
                                {item.status === 'low' ? (
                                  <span className="reorder-pill">
                                    <i className="fas fa-plus-circle" /> Auto-Ordered +{item.reorder}
                                  </span>
                                ) : (
                                  <span className="status-ok-pill">
                                    <i className="fas fa-check-circle" /> Optimal Level
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 5. FINTECH: Multi-Currency Settlement & VAT Audit UI */}
                    {currentDemo.uiType === 'fintech' && (
                      <div className="bespoke-card bespoke-fintech">
                        <div className="fintech-summary-grid">
                          {currentDemo.fintechData.gateways.map((gw) => (
                            <div key={gw.rail} className="fintech-rail-card">
                              <div className="rail-head">
                                <span className="rail-name">{gw.rail}</span>
                                <span className="rail-curr-badge">{gw.currency}</span>
                              </div>
                              <strong className="rail-volume">{gw.volume}</strong>
                              <div className="rail-foot">
                                <span className="rail-status">
                                  <i className="fas fa-check-circle" /> {gw.status}
                                </span>
                                <span className="rail-fee">Fee: {gw.fee}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="fintech-audit-strip">
                          <div className="audit-left">
                            <i className="fas fa-shield-check" />
                            <span>UAE VAT & Central Bank Audit: <strong>100% Tax Compliant (0 Anomalies)</strong></span>
                          </div>
                          <span className="audit-right">
                            <i className="fas fa-sync" /> Real-Time Sync
                          </span>
                        </div>
                      </div>
                    )}

                    {/* 6. HRMS: UAE WPS Payroll Batch & Compliance UI */}
                    {currentDemo.uiType === 'hrms' && (
                      <div className="bespoke-card bespoke-hrms">
                        <div className="hrms-header-row">
                          <div className="hrms-stat-item">
                            <span className="stat-label">Active Headcount</span>
                            <strong>{currentDemo.hrmsData.totalStaff}</strong>
                          </div>
                          <div className="hrms-stat-item">
                            <span className="stat-label">Total Monthly Payroll</span>
                            <strong className="stat-green">{currentDemo.hrmsData.totalDisbursement}</strong>
                          </div>
                          <div className="hrms-stat-item">
                            <span className="stat-label">Ministry Compliance</span>
                            <span className="wps-certified-badge">
                              <i className="fas fa-shield-alt" /> UAE WPS Certified
                            </span>
                          </div>
                        </div>

                        <div className="hrms-entity-list">
                          {currentDemo.hrmsData.entities.map((entity) => (
                            <div key={entity.name} className="hrms-entity-item">
                              <div className="entity-left">
                                <span className="entity-name">{entity.name}</span>
                                <span className="entity-staff">{entity.staff}</span>
                              </div>
                              <div className="entity-mid">
                                <strong className="entity-gross">{entity.gross}</strong>
                                <span className="entity-wps">{entity.wps}</span>
                              </div>
                              <div className="entity-right">
                                <span className="hrms-payout-btn">
                                  <i className="fas fa-paper-plane" /> {entity.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Gradient Faint-Out Mask at the Bottom (like apps showcase) */}
              <div className="agent-panel-fade-mask" aria-hidden="true" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
