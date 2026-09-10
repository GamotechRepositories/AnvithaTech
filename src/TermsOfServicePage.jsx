import './LegalPages.css'

export function TermsOfServicePage({ onNavigateHome }) {
  const sections = [
    { id: 'acceptance', label: '1. Agreement to Terms' },
    { id: 'corporate-identity', label: '2. Company Information' },
    { id: 'services-scope', label: '3. Technology Services' },
    { id: 'intellectual-property', label: '4. Intellectual Property & Ownership' },
    { id: 'client-obligations', label: '5. Acceptable Use' },
    { id: 'payment-terms', label: '6. Commercial Terms & Invoicing' },
    { id: 'ai-disclaimer', label: '7. AI & Autonomous Systems' },
    { id: 'fintech-disclaimer', label: '8. Technology Provider Notice' },
    { id: 'liability-limitation', label: '9. Limitation of Liability' },
    { id: 'indemnification', label: '10. Mutual Indemnification' },
    { id: 'governing-law', label: '11. Governing Law & Jurisdiction' },
    { id: 'termination', label: '12. Term & Termination' },
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
            <span className="legal-breadcrumb-current">Terms of Service</span>
          </nav>

          <h1 className="legal-hero-title">
            Terms of <span>Service</span>
          </h1>

          <p className="legal-hero-subtitle">
            Standard commercial terms, intellectual property protections, warranties,
            and service policies governing our enterprise technology, AI, and software engineering solutions.
          </p>

          <div className="legal-meta-bar">
            <div className="legal-meta-item">
              <i className="fas fa-gavel" />
              <span>Jurisdiction: Dubai, United Arab Emirates</span>
            </div>
            <div className="legal-meta-item">
              <i className="fas fa-calendar-alt" />
              <span>Last Updated: September 2026</span>
            </div>
            <div className="legal-meta-item">
              <i className="fas fa-file-contract" />
              <span>Enterprise Commercial Terms</span>
            </div>
          </div>

          <div className="legal-badges">
            <span className="legal-badge">
              <i className="fas fa-building" /> Registered Dubai Entity
            </span>
            <span className="legal-badge legal-badge--purple">
              <i className="fas fa-shield-alt" /> Limitation of Liability
            </span>
            <span className="legal-badge legal-badge--gold">
              <i className="fas fa-copyright" /> Intellectual Property Protected
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
            <p>Require a tailored Master Service Agreement (MSA) or custom statement of work?</p>
            <button
              type="button"
              className="legal-sidebar-btn"
              onClick={() => onNavigateHome('contact')}
            >
              <i className="fas fa-file-signature" /> Request Enterprise MSA
            </button>
          </div>
        </aside>

        {/* Legal Text Body */}
        <article className="legal-body">
          <div className="legal-notice-box">
            <i className="fas fa-balance-scale legal-notice-icon" aria-hidden="true" />
            <div className="legal-notice-text">
              <strong>Notice of Commercial Terms:</strong> These Terms of Service (&quot;Terms&quot;) govern the relationship
              between <strong>AANVITA TECHNOLOGIES L.L.C.</strong> (&quot;Aanvitha Tech&quot;, &quot;Company&quot;,
              &quot;we&quot;, &quot;us&quot;) and any business, organization, or individual (&quot;Client&quot;, &quot;User&quot;, &quot;you&quot;)
              accessing our website, software tools, APIs, AI platforms, or engaging our engineering consulting services.
            </div>
          </div>

          {/* Section 1 */}
          <section id="acceptance" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">01</span> Agreement to Terms
            </h2>
            <p>
              By accessing, browsing, or using{' '}
              <a href="https://www.aanvitha.tech" className="cookie-policy-link" target="_blank" rel="noreferrer">
                www.aanvitha.tech
              </a>
              , signing a project agreement, or engaging our software services, you confirm that you have read, understood,
              and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
            <p>
              If you do not agree with any part of these terms, you should discontinue using our website and services.
            </p>
          </section>

          {/* Section 2 */}
          <section id="corporate-identity" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">02</span> Company Information
            </h2>
            <p>
              Aanvitha Technologies L.L.C. is an incorporated technology company based in Dubai, United Arab Emirates,
              with headquarters at Al Budoor Building, Naif, Deira, Dubai, UAE.
            </p>
            <p>
              We provide technology consulting, custom software engineering, artificial intelligence automation systems,
              fintech software platforms, and cloud solutions to clients globally.
            </p>
          </section>

          {/* Section 3 */}
          <section id="services-scope" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">03</span> Technology Services
            </h2>
            <p>Aanvitha Technologies specializes in end-to-end digital solutions, including:</p>
            <ul className="legal-list">
              <li className="legal-list-item">
                <i className="fas fa-check legal-list-bullet" />
                <div>
                  <strong>AI & Automation:</strong> Conversational AI chatbots, voice calling agents, sales copilots, document intelligence pipelines, and automated business workflows.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-check legal-list-bullet" />
                <div>
                  <strong>Fintech & Payment Systems:</strong> Payment gateway integrations, payin/payout routing software, KYC/KYB identity validation systems, and loan management architectures.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-check legal-list-bullet" />
                <div>
                  <strong>Enterprise Software:</strong> Custom ERP, HRMS, CRM systems, e-commerce platforms, multi-warehouse inventory systems, and cloud SaaS architectures.
                </div>
              </li>
            </ul>
            <p>
              Detailed project scope, timelines, deliverables, and fees are defined in individual project Statements of Work (SOW) or commercial contracts agreed upon with each client.
            </p>
          </section>

          {/* Section 4 */}
          <section id="intellectual-property" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">04</span> Intellectual Property & Ownership
            </h2>
            <h3 className="legal-sub-title">A. Aanvitha Technologies Intellectual Property</h3>
            <p>
              All website designs, brand assets, proprietary software libraries, pre-built algorithmic modules, prompt frameworks,
              and code architectures developed independently by Aanvitha Technologies remain our exclusive intellectual property,
              protected by international copyright and intellectual property standards.
            </p>

            <h3 className="legal-sub-title">B. Custom Client Deliverables</h3>
            <p>
              Upon receipt of full payment for all agreed milestones under a project contract, the Client owns the custom deliverables
              and frontend code specifically developed for their project, excluding our underlying reusable frameworks and third-party open-source components.
            </p>
          </section>

          {/* Section 5 */}
          <section id="client-obligations" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">05</span> Acceptable Use
            </h2>
            <p>When using our website, APIs, or software platforms, you agree not to:</p>
            <ul className="legal-list">
              <li className="legal-list-item">
                <i className="fas fa-ban legal-list-bullet" />
                <div>
                  Reverse engineer, decompile, or extract the underlying source code of our proprietary simulation engines or AI models.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-ban legal-list-bullet" />
                <div>
                  Deploy our AI voice agents, chatbots, or automated systems for spam, fraudulent telemarketing, harassment, or unlawful communications.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-ban legal-list-bullet" />
                <div>
                  Introduce viruses, malicious code, unauthorized scrapers, or launch denial-of-service attacks against our systems.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="payment-terms" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">06</span> Commercial Terms & Invoicing
            </h2>
            <p>
              Project invoices are issued according to the milestones specified in individual client agreements and may be denominated in AED, USD, EUR, or other agreed major currencies.
            </p>
            <ul className="legal-list">
              <li className="legal-list-item">
                <i className="fas fa-receipt legal-list-bullet" />
                <div>
                  <strong>Applicable Taxes:</strong> Standard domestic transactions within the UAE are subject to applicable Value Added Tax (VAT) in accordance with UAE tax regulations.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-credit-card legal-list-bullet" />
                <div>
                  <strong>Payment Schedules:</strong> Invoices are payable according to agreed timelines. Consistent late payments exceeding agreed terms may result in temporary suspension of development sprints or API services until accounts are settled.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="ai-disclaimer" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">07</span> AI & Autonomous Systems
            </h2>
            <p>
              Artificial intelligence models, natural language systems, and machine learning pipelines generate outputs probabilistically.
              While we implement industry-leading accuracy guardrails and verification layers:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item">
                <i className="fas fa-robot legal-list-bullet" />
                <div>
                  <strong>Review & Verification:</strong> AI systems may occasionally produce unexpected or imprecise responses. Clients should maintain human oversight for critical business transactions.
                </div>
              </li>
              <li className="legal-list-item">
                <i className="fas fa-exclamation-triangle legal-list-bullet" />
                <div>
                  <strong>Client Configuration:</strong> The Client is responsible for setting and monitoring the business policies, pricing data, and prompts governing their customer-facing AI agents.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section id="fintech-disclaimer" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">08</span> Technology Provider Notice
            </h2>
            <p>
              <strong>Aanvitha Technologies is an independent software technology developer. We are not a bank, financial institution, money transmitter, or licensed lender.</strong>
            </p>
            <p>
              Our payment gateway integrations, disbursement routers, and KYC tools function solely as software automation tools. Clients offering financial services remain responsible for obtaining all requisite banking or regulatory licenses in their operating jurisdictions.
            </p>
          </section>

          {/* Section 9 */}
          <section id="liability-limitation" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">09</span> Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, AANVITA TECHNOLOGIES L.L.C., ITS DIRECTORS, EMPLOYEES, AND PARTNERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITY.
            </p>
            <p>
              OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATED TO OUR SERVICES OR DIGITAL PLATFORMS SHALL BE STRICTLY LIMITED TO THE AMOUNT ACTUALLY PAID BY THE CLIENT TO AANVITA TECHNOLOGIES UNDER THE APPLICABLE PROJECT STATEMENT OF WORK IN THE PRECEDING THREE (3) MONTHS.
            </p>
          </section>

          {/* Section 10 */}
          <section id="indemnification" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">10</span> Mutual Indemnification
            </h2>
            <p>
              You agree to defend and hold harmless Aanvitha Technologies L.L.C. from third-party claims arising from your breach of these Terms, unauthorized use of our platforms, or data and materials provided by you for custom software integration.
            </p>
          </section>

          {/* Section 11 */}
          <section id="governing-law" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">11</span> Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms, their interpretation, and any disputes arising out of or related to your use of our platforms or services shall be governed by and construed in accordance with the <strong>laws of the Emirate of Dubai and the United Arab Emirates</strong>.
            </p>
            <p>
              Both parties submit to the jurisdiction of the <strong>Competent Courts of Dubai</strong> for the resolution of any legal claims or disputes.
            </p>
          </section>

          {/* Section 12 */}
          <section id="termination" className="legal-section">
            <h2 className="legal-section-title">
              <span className="legal-section-num">12</span> Term & Termination
            </h2>
            <p>
              We reserve the right to suspend or discontinue access to our website, APIs, or software demonstrations if there is a material violation of these Terms or activities that compromise network security.
            </p>
            <p>
              If any provision of these Terms is held to be invalid or unenforceable, that provision will be modified to the minimum extent necessary, and the remaining provisions will remain in full force.
            </p>

            <div className="legal-contact-card">
              <div className="legal-contact-details">
                <div className="legal-contact-row">
                  <i className="fas fa-building" />
                  <span><strong>Entity:</strong> AANVITA TECHNOLOGIES L.L.C.</span>
                </div>
                <div className="legal-contact-row">
                  <i className="fas fa-envelope" />
                  <span><strong>Legal & Contracts:</strong> info@aanvitatechnologies.com</span>
                </div>
                <div className="legal-contact-row">
                  <i className="fas fa-map-marker-alt" />
                  <span><strong>Office:</strong> Al Budoor Building, Naif, Deira, Dubai, UAE</span>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="legal-contact-btn"
                  onClick={() => onNavigateHome('contact')}
                >
                  <i className="fas fa-handshake" /> Inquire About Enterprise SOW
                </button>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
