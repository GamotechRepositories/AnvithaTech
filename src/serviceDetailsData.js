export const serviceDetailsData = {
  1: {
    title: 'AI Chatbot',
    features: [
      {
        title: 'Multi-Platform Deployment',
        desc: 'Seamless native integration on Website, WhatsApp Business, Instagram DM, and Telegram.',
      },
      {
        title: 'Contextual NLU & Memory',
        desc: 'Remembers user preferences, prior conversations, and session parameters for natural dialogue.',
      },
      {
        title: 'CRM & Database Sync',
        desc: 'Automatically captures leads, qualifies prospects, and syncs data to your core CRM in real time.',
      },
      {
        title: 'Human-in-the-Loop Handoff',
        desc: 'Smooth fallback to live support agents with complete chat transcript context and sentiment tagging.',
      },
    ],
    specs: [
      { label: 'Language Engine', value: 'Transformer-based hybrid LLM with intent classification & entity extraction' },
      { label: 'Response Latency', value: 'Sub-350ms average generation speed with streaming response support' },
      { label: 'Channels', value: 'WhatsApp Cloud API, Web Widget, Messenger, Telegram & Webhooks' },
      { label: 'Data Security', value: 'SOC-2 compliant with zero training on proprietary customer conversation data' },
      { label: 'Handover Protocol', value: 'WebSocket live escalation to Zendesk, Freshdesk, Zoho & custom CRMs' },
    ],
    integrations: [
      { name: 'WhatsApp Cloud API', category: 'Messaging Rail', icon: 'fab fa-whatsapp' },
      { name: 'Telegram Bot API', category: 'Instant Chat', icon: 'fab fa-telegram-plane' },
      { name: 'Instagram Direct', category: 'Social DM', icon: 'fab fa-instagram' },
      { name: 'Salesforce CRM', category: 'Enterprise CRM', icon: 'fab fa-salesforce' },
      { name: 'HubSpot', category: 'Marketing & CRM', icon: 'fab fa-hubspot' },
      { name: 'Zendesk', category: 'Helpdesk Handoff', icon: 'fas fa-headset' },
      { name: 'Google Workspace', category: 'Calendar & Docs', icon: 'fab fa-google' },
      { name: 'Custom Webhooks', category: 'REST / GraphQL', icon: 'fas fa-code-branch' },
    ],
  },
  2: {
    title: 'KYC & KYB Verification System',
    features: [
      {
        title: 'AI Biometric Liveness',
        desc: '3D face match with anti-spoofing passive liveness detection compliant with iBeta Level 2.',
      },
      {
        title: 'Government ID OCR',
        desc: 'Instant scanning and extraction from National IDs, Passports, Driving Licenses, and Tax Cards.',
      },
      {
        title: 'Corporate KYB Screening',
        desc: 'Automated corporate registry verification, Ultimate Beneficial Owner (UBO) lookup, and AML checks.',
      },
      {
        title: 'Risk Scoring & Audit Trail',
        desc: 'Dynamic fraud risk calculation with timestamped forensic logs for regulatory audits.',
      },
    ],
    specs: [
      { label: 'Face Match Accuracy', value: '99.8% precision with ISO/IEC 19794-5 biometric standard compliance' },
      { label: 'Extraction Latency', value: 'Automated document parsing and OCR validation in under 4 seconds' },
      { label: 'Global Coverage', value: 'Support for 150+ country identity cards, passports & trade licenses' },
      { label: 'Regulatory Lists', value: 'Real-time sanction screening against PEP, OFAC, and FATF databases' },
      { label: 'API Protocols', value: 'RESTful endpoints, Mobile SDKs (iOS/Android), and turnkey iFrame widget' },
    ],
    integrations: [
      { name: 'Govt ID Databases', category: 'Official Registries', icon: 'fas fa-id-card' },
      { name: 'UIDAI & Digilocker', category: 'Govt Identity', icon: 'fas fa-fingerprint' },
      { name: 'OFAC & PEP Sanctions', category: 'AML Screening', icon: 'fas fa-shield-alt' },
      { name: 'Core Banking APIs', category: 'Fintech Rail', icon: 'fas fa-university' },
      { name: 'CIBIL & Experian', category: 'Credit Verification', icon: 'fas fa-chart-line' },
      { name: 'iOS & Android SDK', category: 'Mobile App Embedding', icon: 'fas fa-mobile-alt' },
      { name: 'Enterprise Webhooks', category: 'Instant Decisioning', icon: 'fas fa-bolt' },
    ],
  },
  3: {
    title: 'AI Voice Agent',
    features: [
      {
        title: 'Human-Like Speech',
        desc: 'Ultra-realistic neural speech synthesis with natural inflections, pauses, and accent adaptability.',
      },
      {
        title: 'Inbound & Outbound Calling',
        desc: 'Automated outbound lead calling, customer appointment confirmations, and inbound support triage.',
      },
      {
        title: 'Real-Time Interruption Handling',
        desc: 'Detects caller interruptions and adapts speech flow instantly without robotic lag.',
      },
      {
        title: 'Automated CRM Logging',
        desc: 'Generates instant call recordings, audio transcriptions, sentiment analysis, and action items.',
      },
    ],
    specs: [
      { label: 'Voice Latency', value: 'Sub-600ms end-to-end speech-to-speech round-trip latency' },
      { label: 'Speech-to-Text', value: 'Fine-tuned multi-lingual acoustic models with industry jargon adaptation' },
      { label: 'Telephony Rails', value: 'SIP trunking, WebRTC, Twilio, Plivo, and native PBX integrations' },
      { label: 'Call Concurrency', value: 'Elastic cloud telephony handling 1,000+ simultaneous audio channels' },
      { label: 'Analytics', value: 'Real-time acoustics sentiment, keyword spotting, and conversion tagging' },
    ],
    integrations: [
      { name: 'Twilio Voice', category: 'Cloud Telephony', icon: 'fas fa-phone-alt' },
      { name: 'Plivo & Asterisk', category: 'SIP Trunking', icon: 'fas fa-broadcast-tower' },
      { name: 'Google Calendar', category: 'Meeting Booking', icon: 'fab fa-google' },
      { name: 'Microsoft Outlook', category: 'Enterprise Calendar', icon: 'fab fa-microsoft' },
      { name: 'Salesforce CRM', category: 'Call Logging', icon: 'fab fa-salesforce' },
      { name: 'HubSpot', category: 'Lead Update', icon: 'fab fa-hubspot' },
      { name: 'WebRTC Browser Audio', category: 'Direct Web Calling', icon: 'fas fa-headphones' },
    ],
  },
  4: {
    title: 'Payin & Payout Platform',
    features: [
      {
        title: 'Multi-Rail Collections',
        desc: 'Accept payments via Virtual Accounts, QR Codes, Net Banking, UPI, and Cards.',
      },
      {
        title: 'Instant Bulk Payouts',
        desc: 'Disburse vendor payments, partner commissions, and customer refunds 24/7 in real time.',
      },
      {
        title: 'Split Payments & Escrow',
        desc: 'Programmatic marketplace split routing with escrow holding and tax deductions.',
      },
      {
        title: 'Automated Reconciliation',
        desc: 'Two-way matching between bank settlement feeds and internal order ledgers.',
      },
    ],
    specs: [
      { label: 'Payout Rails', value: 'Real-time IMPS, NEFT, RTGS, UPI, and international wire network rails' },
      { label: 'Throughput', value: '5,000+ payout transactions per minute with queue prioritization' },
      { label: 'Webhook Architecture', value: 'Idempotent event triggers with automated retry and signature verification' },
      { label: 'Ledger Engine', value: 'Double-entry programmatic ledger with real-time balance reservations' },
      { label: 'Regulatory Compliance', value: 'Central Bank authorized nodal and escrow account compliance structures' },
    ],
    integrations: [
      { name: 'NPCI UPI 2.0', category: 'Instant Collection', icon: 'fas fa-qrcode' },
      { name: 'Corporate Bank Rails', category: 'IMPS / NEFT / RTGS', icon: 'fas fa-university' },
      { name: 'Visa & Mastercard', category: 'Card Networks', icon: 'fab fa-cc-visa' },
      { name: 'HDFC / ICICI H2H', category: 'Host-to-Host Banking', icon: 'fas fa-landmark' },
      { name: 'Razorpay & Cashfree', category: 'Aggregators', icon: 'fas fa-exchange-alt' },
      { name: 'Tally Prime & QuickBooks', category: 'Accounting Ledger', icon: 'fas fa-file-invoice-dollar' },
      { name: 'REST Webhooks', category: 'Automated Triggers', icon: 'fas fa-plug' },
    ],
  },
  5: {
    title: 'AI Document Processing',
    features: [
      {
        title: 'Multi-Format Ingestion',
        desc: 'Parses PDFs, scanned images, Word documents, spreadsheets, and emails seamlessly.',
      },
      {
        title: 'Key-Value Field Extraction',
        desc: 'Extracts line items, vendor details, tax amounts, and totals with pinpoint accuracy.',
      },
      {
        title: 'Automated Validation Rules',
        desc: 'Validates math totals, cross-checks invoice PO numbers, and verifies bank details.',
      },
      {
        title: 'Enterprise ERP Integration',
        desc: 'Pushes structured JSON data directly into SAP, Oracle, NetSuite, and QuickBooks.',
      },
    ],
    specs: [
      { label: 'Extraction Accuracy', value: '99.2% field recognition on structured, semi-structured & handwritten forms' },
      { label: 'Throughput', value: 'Parallel cloud workers processing 50,000+ pages per hour' },
      { label: 'Format Support', value: 'PDF, TIFF, JPG, PNG, DOCX, XLSX with multi-page segmentation' },
      { label: 'Data Export', value: 'Webhooks, REST API, JSON, CSV, and direct database sync connectors' },
      { label: 'Retention Policy', value: 'Configurable auto-purge and zero-data-retention compliance modes' },
    ],
    integrations: [
      { name: 'SAP S/4HANA', category: 'Enterprise ERP', icon: 'fas fa-cubes' },
      { name: 'Oracle NetSuite', category: 'Cloud Financials', icon: 'fas fa-database' },
      { name: 'Microsoft Dynamics 365', category: 'Business Suite', icon: 'fab fa-microsoft' },
      { name: 'QuickBooks & Xero', category: 'SME Accounting', icon: 'fas fa-file-invoice' },
      { name: 'Google Drive & Dropbox', category: 'Cloud Storage', icon: 'fab fa-google-drive' },
      { name: 'AWS S3 & Azure Blob', category: 'Object Storage', icon: 'fab fa-aws' },
    ],
  },
  6: {
    title: 'E-commerce Platform',
    features: [
      {
        title: 'Headless Storefront',
        desc: 'High-speed, SEO-optimized web and mobile storefronts with sub-second page loads.',
      },
      {
        title: 'Multi-Channel Inventory',
        desc: 'Real-time inventory sync across your website, Amazon, retail stores, and warehouses.',
      },
      {
        title: 'Frictionless Checkout',
        desc: '1-step checkout with address autocompletion, abandoned cart recovery, and coupon engines.',
      },
      {
        title: 'Order & Shipping Hub',
        desc: 'Automated courier partner allocation, live package tracking, and returns management.',
      },
    ],
    specs: [
      { label: 'Architecture', value: 'Headless GraphQL API with React/Next.js edge-rendered frontends' },
      { label: 'Concurrency', value: 'Engineered to handle 50,000+ peak concurrent flash-sale shoppers' },
      { label: 'Payment Options', value: 'Native multi-currency gateways, Apple Pay, Google Pay, and BNPL' },
      { label: 'Catalog Capacity', value: 'Supports 500,000+ SKUs with faceted search and instant filtering' },
      { label: 'Performance', value: '99+ Google Lighthouse score with edge caching and image optimization' },
    ],
    integrations: [
      { name: 'Shopify & WooCommerce', category: 'Storefront Connectors', icon: 'fab fa-shopify' },
      { name: 'Stripe & Razorpay', category: 'Checkout Rails', icon: 'fab fa-stripe' },
      { name: 'Shiprocket & BlueDart', category: 'Logistics Fulfillment', icon: 'fas fa-shipping-fast' },
      { name: 'Amazon Seller Central', category: 'Marketplace Sync', icon: 'fab fa-amazon' },
      { name: 'Meta Pixel & GA4', category: 'Marketing & ROAS', icon: 'fab fa-facebook' },
      { name: 'WhatsApp Notifications', category: 'Order Updates', icon: 'fab fa-whatsapp' },
    ],
  },
  7: {
    title: 'Social Media Scheduler',
    features: [
      {
        title: 'Visual Content Calendar',
        desc: 'Drag-and-drop planning across Instagram, Facebook, LinkedIn, X, TikTok, and YouTube.',
      },
      {
        title: 'Smart Best-Time Posting',
        desc: 'AI algorithms determine the optimal publishing time for each channel to maximize reach.',
      },
      {
        title: 'Bulk Scheduling & CSV',
        desc: 'Upload months of content, carousels, reels, and video clips in a single batch.',
      },
      {
        title: 'Unified Social Inbox',
        desc: 'Monitor and reply to comments, mentions, and direct messages across all channels from one view.',
      },
    ],
    specs: [
      { label: 'Supported Networks', value: 'Instagram Graph API, Facebook Pages, LinkedIn v2, X/Twitter API, YouTube' },
      { label: 'Media Optimization', value: 'Auto-transcoding and smart cropping for platform-specific aspect ratios' },
      { label: 'Execution Precision', value: 'Second-level cron execution with automated failover and retry mechanisms' },
      { label: 'Team Workflows', value: 'Multi-tier approval workflows with draft review and client approval links' },
      { label: 'Analytics Engine', value: 'Cross-platform engagement, impressions, follower growth, and hashtag reach' },
    ],
    integrations: [
      { name: 'Instagram Graph API', category: 'Feed & Reels', icon: 'fab fa-instagram' },
      { name: 'Facebook Pages', category: 'Meta Graph', icon: 'fab fa-facebook' },
      { name: 'LinkedIn API v2', category: 'Company & Personal', icon: 'fab fa-linkedin' },
      { name: 'X / Twitter API', category: 'Real-Time Tweets', icon: 'fab fa-twitter' },
      { name: 'YouTube Data API', category: 'Video & Shorts', icon: 'fab fa-youtube' },
      { name: 'TikTok for Business', category: 'Short Video', icon: 'fas fa-video' },
      { name: 'Canva Cloud', category: 'Direct Design Import', icon: 'fas fa-palette' },
    ],
  },
  8: {
    title: 'Business Automation Platform',
    features: [
      {
        title: 'Visual Workflow Builder',
        desc: 'Drag-and-drop canvas to build complex multi-step automated business logic without code.',
      },
      {
        title: '500+ App Connectors',
        desc: 'Pre-built integrations with Google Workspace, Slack, HubSpot, Stripe, Databases, and AWS.',
      },
      {
        title: 'Conditional Branching',
        desc: 'Robust if/else logic, data transformers, loops, and fallback exception handling.',
      },
      {
        title: 'Webhooks & API Triggers',
        desc: 'Trigger workflows from inbound webhooks, scheduled cron jobs, database updates, or manual events.',
      },
    ],
    specs: [
      { label: 'Execution Engine', value: 'High-performance event-driven worker clusters running on serverless containers' },
      { label: 'Trigger Latency', value: 'Sub-100ms instant webhook capture and pipeline execution' },
      { label: 'Error Handling', value: 'Configurable auto-retry with exponential backoff and dead-letter queues' },
      { label: 'Data Mapping', value: 'Visual JSON payload transformer with regex, formula, and mathematical functions' },
      { label: 'Security', value: 'OAuth 2.0 token management, AES-256 encrypted credential storage & audit trails' },
    ],
    integrations: [
      { name: 'Google Workspace', category: 'Sheets, Docs & Gmail', icon: 'fab fa-google' },
      { name: 'Slack & Teams', category: 'Instant Chat Alerts', icon: 'fab fa-slack' },
      { name: 'PostgreSQL & MySQL', category: 'Database Triggers', icon: 'fas fa-database' },
      { name: 'Stripe & PayPal', category: 'Billing Events', icon: 'fab fa-stripe' },
      { name: 'HubSpot & Salesforce', category: 'CRM Sync', icon: 'fab fa-hubspot' },
      { name: 'Jira & GitHub', category: 'DevOps Webhooks', icon: 'fab fa-github' },
      { name: 'Open REST APIs', category: 'Custom Endpoints', icon: 'fas fa-code' },
    ],
  },
  9: {
    title: 'Payment Gateway Platform',
    features: [
      {
        title: 'Global Multi-Currency',
        desc: 'Accept payments in 135+ currencies with local payment methods worldwide.',
      },
      {
        title: 'High-Converting Checkout',
        desc: 'Customizable hosted checkout and drop-in UI components with zero redirection friction.',
      },
      {
        title: 'Smart Dynamic Routing',
        desc: 'Automatically routes payments across multiple banking acquirers for maximum success rates.',
      },
      {
        title: '3D Secure 2.0 & Fraud Shield',
        desc: 'Native biometric frictionless authentication and machine-learning fraud scoring.',
      },
    ],
    specs: [
      { label: 'Compliance Level', value: 'Certified PCI-DSS Level 1 Service Provider with tokenized card vaulting' },
      { label: 'Uptime SLA', value: '99.99% infrastructure availability with active-active cloud multi-region failover' },
      { label: 'Settlement Cycles', value: 'Automated T+1 / T+2 rolling settlement schedules with multi-currency payouts' },
      { label: 'Developer SDKs', value: 'SDKs for Node.js, Python, PHP, Java, React Native, Flutter, and iOS/Android' },
      { label: 'Security Protocol', value: 'Microsecond webhook dispatch with HMAC SHA-256 signature authentication' },
    ],
    integrations: [
      { name: 'Visa & Mastercard', category: 'Global Cards', icon: 'fab fa-cc-visa' },
      { name: 'Apple Pay & Google Pay', category: 'One-Tap Wallets', icon: 'fab fa-apple' },
      { name: 'UPI & QR Rails', category: 'Instant Mobile Pay', icon: 'fas fa-qrcode' },
      { name: 'Net Banking (50+ Banks)', category: 'Direct NetBanking', icon: 'fas fa-university' },
      { name: 'WooCommerce & Magento', category: 'E-commerce Plugins', icon: 'fab fa-wordpress' },
      { name: 'Next.js & React Native', category: 'Developer SDKs', icon: 'fab fa-react' },
    ],
  },
  10: {
    title: 'AI CRM',
    features: [
      {
        title: 'Predictive Lead Scoring',
        desc: 'Machine learning ranks incoming leads by conversion likelihood based on behavioral signals.',
      },
      {
        title: 'Automated Pipeline Stages',
        desc: 'Deals move automatically between stages based on email opens, calls, or meeting bookings.',
      },
      {
        title: '360° Customer Timeline',
        desc: 'Unified activity timeline aggregating WhatsApp chats, call recordings, emails, and notes.',
      },
      {
        title: 'Sales Forecasting & Insights',
        desc: 'Real-time revenue projections, rep performance quotas, and deal slippage alerts.',
      },
    ],
    specs: [
      { label: 'Data Capacity', value: 'Unlimited contacts, accounts, and deal records with sub-second Elasticsearch indexing' },
      { label: 'Communication Sync', value: 'Native 2-way sync with Google Workspace, Microsoft 365, and VoIP dialers' },
      { label: 'Automation Rules', value: 'Trigger-based email cadences, task assignment, and field auto-updates' },
      { label: 'Customization', value: 'Custom objects, dynamic fields, custom deal stages, and tailored sales pipelines' },
      { label: 'Mobile Application', value: 'Dedicated offline-capable mobile app with geolocation check-in for field reps' },
    ],
    integrations: [
      { name: 'Google Workspace', category: 'Gmail & Meet Sync', icon: 'fab fa-google' },
      { name: 'Microsoft 365', category: 'Outlook & Teams', icon: 'fab fa-microsoft' },
      { name: 'WhatsApp Cloud API', category: 'Direct Chat Log', icon: 'fab fa-whatsapp' },
      { name: 'Zoom Conferencing', category: 'Call Recordings', icon: 'fas fa-video' },
      { name: 'Twilio Voice', category: 'Click-to-Call Dialer', icon: 'fas fa-phone-volume' },
      { name: 'Zapier & Make', category: 'Ecosystem Sync', icon: 'fas fa-plug' },
      { name: 'LinkedIn Navigator', category: 'Lead Intelligence', icon: 'fab fa-linkedin' },
    ],
  },
  11: {
    title: 'HRMS',
    features: [
      {
        title: 'Biometric & Geo-Attendance',
        desc: 'Real-time attendance logging via biometric devices, mobile selfie check-in, and geo-fencing.',
      },
      {
        title: 'Automated Payroll & Taxes',
        desc: '1-click salary calculations with automated deductions for PF, ESI, TDS, and statutory taxes.',
      },
      {
        title: 'Leave & Shift Management',
        desc: 'Configurable leave policies, multi-tier approval workflows, and automated rotational shifts.',
      },
      {
        title: 'Employee Self-Service',
        desc: 'Intuitive portal for downloading payslips, submitting expense claims, and requesting leaves.',
      },
    ],
    specs: [
      { label: 'Hardware Integration', value: 'Direct IP/API sync with ZKTeco, eSSL, Matrix, and Suprema biometric scanners' },
      { label: 'Statutory Compliance', value: 'Automated compliance for India (PF/ESI/TDS), UAE (WPS), and GCC labor laws' },
      { label: 'Workflow Engine', value: 'Multi-level hierarchy approvals with automated escalation matrix' },
      { label: 'Performance Module', value: '360° review cycles, OKRs, KPI tracking, and performance matrix grids' },
      { label: 'Document Storage', value: 'Encrypted digital employee record vault with role-based document access' },
    ],
    integrations: [
      { name: 'ZKTeco & eSSL', category: 'Biometric Hardware', icon: 'fas fa-fingerprint' },
      { name: 'Corporate Salary Bank', category: 'Direct Salary Credit', icon: 'fas fa-university' },
      { name: 'EPFO & ESIC Portals', category: 'Govt Statutory Filings', icon: 'fas fa-building' },
      { name: 'Income Tax TDS', category: 'Form 16 & Tax Vault', icon: 'fas fa-file-invoice-dollar' },
      { name: 'Slack & MS Teams', category: 'Leave Approvals', icon: 'fab fa-slack' },
      { name: 'WhatsApp Bot', category: 'Payslip & Attendance', icon: 'fab fa-whatsapp' },
      { name: 'Google Calendar', category: 'Holiday & Shift Sync', icon: 'fab fa-google' },
    ],
  },
  12: {
    title: 'AI Sales Assistant',
    features: [
      {
        title: 'Autonomous Lead Nurturing',
        desc: 'Instantly engages newly captured leads on WhatsApp, SMS, and Email within 60 seconds.',
      },
      {
        title: 'Objection Handling Engine',
        desc: 'Trained on your product catalog and FAQs to answer complex buyer objections naturally.',
      },
      {
        title: 'Smart Meeting Booking',
        desc: 'Synchronizes with sales reps Google and Outlook calendars to book qualified demos automatically.',
      },
      {
        title: 'Rep Coaching & Analytics',
        desc: 'Highlights top-performing pitch tactics, common objections, and conversion drop-off points.',
      },
    ],
    specs: [
      { label: 'Response Speed', value: 'Sub-2 second conversational generation with contextual knowledge retrieval (RAG)' },
      { label: 'Calendar Sync', value: 'Bi-directional real-time availability sync with Google Calendar, Outlook & Calendly' },
      { label: 'Lead Qualification', value: 'BANT (Budget, Authority, Need, Timeline) score calculation before scheduling' },
      { label: 'Channels', value: 'Coordinated sequencing across WhatsApp, Email, LinkedIn InMail, and SMS' },
      { label: 'CRM Sync', value: 'Direct bi-directional integration with Salesforce, HubSpot, Zoho & custom CRMs' },
    ],
    integrations: [
      { name: 'Salesforce Sales Cloud', category: 'CRM Sync', icon: 'fab fa-salesforce' },
      { name: 'HubSpot CRM', category: 'Pipeline Automation', icon: 'fab fa-hubspot' },
      { name: 'WhatsApp Cloud API', category: 'Conversational Sales', icon: 'fab fa-whatsapp' },
      { name: 'Google Calendar', category: 'Demo Slot Booking', icon: 'fab fa-google' },
      { name: 'Outlook 365', category: 'Calendar Sync', icon: 'fab fa-microsoft' },
      { name: 'LinkedIn InMail', category: 'B2B Outreach', icon: 'fab fa-linkedin' },
      { name: 'Calendly & Zoom', category: 'Auto Meeting Links', icon: 'fas fa-video' },
    ],
  },
  13: {
    title: 'Loan Management System (LMS)',
    features: [
      {
        title: 'Digital Loan Origination',
        desc: '100% paperless onboarding with e-KYC, income statement parsing, and collateral capture.',
      },
      {
        title: 'Automated Credit Underwriting',
        desc: 'Business rule engine (BRE) evaluates credit bureau scores, bank statements, and risk profiles.',
      },
      {
        title: 'EMI Calculation & Amortization',
        desc: 'Flexible interest calculation engines (reducing balance, flat rate, bullet payments).',
      },
      {
        title: 'Automated Collections & NACH',
        desc: 'Auto-debit collections via e-Mandate/NACH with automated SMS and WhatsApp dunning alerts.',
      },
    ],
    specs: [
      { label: 'Credit Bureau APIs', value: 'Instant credit decisioning with API hooks to CIBIL, Experian, CRIF, and Equifax' },
      { label: 'Collection Rails', value: 'Auto e-NACH, UPI AutoPay, virtual account reconciliation & payment links' },
      { label: 'Accounting Core', value: 'Automated loan disbursement vouchers and interest accrual journal entries' },
      { label: 'NPA Management', value: 'Automated delinquency bucket classification (SMA-0, SMA-1, SMA-2, NPA)' },
      { label: 'Compliance Reports', value: 'Pre-formatted regulatory compliance returns for Central Banks and NBFC regulators' },
    ],
    integrations: [
      { name: 'CIBIL & Experian', category: 'Credit Score APIs', icon: 'fas fa-chart-line' },
      { name: 'Digilocker & Aadhaar', category: 'Govt e-KYC', icon: 'fas fa-id-badge' },
      { name: 'NPCI e-NACH AutoPay', category: 'Recurring EMI Debit', icon: 'fas fa-sync' },
      { name: 'Perfios Analyzer', category: 'Bank Statement Parsing', icon: 'fas fa-file-pdf' },
      { name: 'Core Banking (CBS)', category: 'Disbursement Rails', icon: 'fas fa-university' },
      { name: 'WhatsApp & SMS Dunning', category: 'Repayment Alerts', icon: 'fab fa-whatsapp' },
    ],
  },
  14: {
    title: 'CRM',
    features: [
      {
        title: 'Enterprise Account Hierarchies',
        desc: 'Manage complex parent-child corporate account structures, divisions, and subsidiaries.',
      },
      {
        title: 'Role-Based Governance',
        desc: 'Granular permissions controlling who can view, edit, or export deal data and customer contacts.',
      },
      {
        title: 'Territory & Lead Routing',
        desc: 'Automatically routes leads based on geography, industry vertical, and company size.',
      },
      {
        title: 'Contract & Quote Generation',
        desc: 'Generate professional branded PDF quotes and proposals with electronic signature capture.',
      },
    ],
    specs: [
      { label: 'Architecture Scale', value: 'Multi-tenant enterprise microservices architecture designed for 100,000+ users' },
      { label: 'Audit Logging', value: 'Immutable tamper-proof audit trails for all record modifications, views, and exports' },
      { label: 'Custom Entity Builder', value: 'Unlimited relational data models, custom validation rules, and rollup fields' },
      { label: 'Single Sign-On', value: 'Enterprise SAML 2.0, Okta, Azure Active Directory, and Google Workspace SSO' },
      { label: 'SLA Tracking', value: 'Automated case escalation rules, response time monitoring, and contract SLA tracking' },
    ],
    integrations: [
      { name: 'Microsoft 365 & Azure AD', category: 'Enterprise SSO', icon: 'fab fa-microsoft' },
      { name: 'Okta & SAML 2.0', category: 'Identity Management', icon: 'fas fa-key' },
      { name: 'DocuSign & Adobe Sign', category: 'e-Contracts & E-Sign', icon: 'fas fa-file-signature' },
      { name: 'SAP / NetSuite ERP', category: 'ERP Invoice Sync', icon: 'fas fa-cubes' },
      { name: 'Twilio Cloud Telephony', category: 'VoIP Inbound/Outbound', icon: 'fas fa-phone-alt' },
      { name: 'Power BI & Tableau', category: 'Executive BI Reports', icon: 'fas fa-chart-pie' },
    ],
  },
  15: {
    title: 'ERP',
    features: [
      {
        title: 'Unified Enterprise Ledger',
        desc: 'Multi-currency, multi-entity general ledger with real-time financial reporting and P&L.',
      },
      {
        title: 'Procurement & Purchase Orders',
        desc: 'Requisition approval flows, vendor quotation comparison, and automated PO generation.',
      },
      {
        title: 'Production & Bill of Materials',
        desc: 'Manage multi-level BOMs, work centers, job scheduling, and production batch tracking.',
      },
      {
        title: 'Supply Chain Visibility',
        desc: 'Real-time inventory depletion tracking between factories, suppliers, and distribution hubs.',
      },
    ],
    specs: [
      { label: 'Financial Standards', value: 'Double-entry accounting compliant with IFRS, GAAP, GST, and VAT regulations' },
      { label: 'Integrated Modules', value: 'Modular service architecture connecting Inventory, Sales, Finance, Purchasing & HR' },
      { label: 'Database Concurrency', value: 'High-concurrency transactional database handling millions of journal records' },
      { label: 'Integration APIs', value: 'Open REST and GraphQL APIs for seamless connection with legacy factory systems' },
      { label: 'Compliance & Backup', value: 'SOC-1 & SOC-2 compliance with daily automated encrypted database snapshots' },
    ],
    integrations: [
      { name: 'Bank Host-to-Host (H2H)', category: 'Direct Corporate Payouts', icon: 'fas fa-university' },
      { name: 'GST & E-Way Bill Portal', category: 'Tax Authority Filing', icon: 'fas fa-receipt' },
      { name: 'WMS Warehouse Hub', category: 'Barcoded Logistics', icon: 'fas fa-warehouse' },
      { name: 'Tally Prime Sync', category: 'Legacy Data Bridge', icon: 'fas fa-calculator' },
      { name: 'Industrial IoT & SCADA', category: 'Machine Floor Telemetry', icon: 'fas fa-microchip' },
      { name: 'Shopify & Amazon FBA', category: 'Omnichannel Orders', icon: 'fas fa-shopping-cart' },
    ],
  },
  16: {
    title: 'Inventory Management',
    features: [
      {
        title: 'Multi-Location Stock Tracking',
        desc: 'Monitor inventory quantities in real time across multiple warehouses, stores, and transit.',
      },
      {
        title: 'Barcode & QR Code Scanning',
        desc: 'Fast mobile receiving, picking, packing, and dispatch with standard barcode scanners.',
      },
      {
        title: 'Automated Reorder Triggers',
        desc: 'Notifies purchasing teams and generates supplier POs when stock hits safety thresholds.',
      },
      {
        title: 'Batch & Expiry Management',
        desc: 'Track item lots, serial numbers, manufacture dates, and expiration cycles with FIFO rules.',
      },
    ],
    specs: [
      { label: 'Hardware Support', value: 'Handheld Zebra/Honeywell barcode scanners, Bluetooth RFID readers & mobile scan' },
      { label: 'Sync Latency', value: 'Real-time stock reservation and deduction in less than 200ms across all channels' },
      { label: 'SKU Capacity', value: 'Manages millions of SKU variants with bin, rack, and aisle location mapping' },
      { label: 'Channel Decrement', value: 'Instant inventory decrement upon order placement from Shopify, Amazon, and ERP' },
      { label: 'Valuation Methods', value: 'Automated stock valuation reporting compliant with FIFO, LIFO, and Weighted Average' },
    ],
    integrations: [
      { name: 'Zebra & Honeywell', category: 'Handheld Barcode Scanners', icon: 'fas fa-barcode' },
      { name: 'Shopify & WooCommerce', category: 'Online Storefront Stock', icon: 'fab fa-shopify' },
      { name: 'Amazon FBA & Flipkart', category: 'Marketplace Inventory', icon: 'fab fa-amazon' },
      { name: 'SAP & NetSuite ERP', category: 'Central Ledger Sync', icon: 'fas fa-network-wired' },
      { name: 'Shiprocket & Delhivery', category: 'Automated Shipping', icon: 'fas fa-truck' },
      { name: 'QuickBooks Online', category: 'Cost of Goods Sold (COGS)', icon: 'fas fa-book' },
    ],
  },
  17: {
    title: 'AI Business Analytics',
    features: [
      {
        title: 'Automated Data Warehousing',
        desc: 'Consolidates raw data from advertising platforms, payment gateways, databases, and CRMs.',
      },
      {
        title: 'AI Trend & Anomaly Detection',
        desc: 'Detects revenue spikes, churn risks, and operational bottlenecks automatically.',
      },
      {
        title: 'Executive Dashboards',
        desc: 'Interactive drag-and-drop dashboards tailored for founders, finance, sales, and operations leaders.',
      },
      {
        title: 'Natural Language Querying',
        desc: 'Ask questions in plain English and receive instant charts and data visualizations.',
      },
    ],
    specs: [
      { label: 'Query Performance', value: 'Columnar data warehouse technology running analytical queries over 50M+ rows in seconds' },
      { label: 'Data Connectors', value: '100+ native ETL connectors for PostgreSQL, MySQL, Snowflake, BigQuery, Stripe & Ads' },
      { label: 'Streaming Cadence', value: 'Real-time event streaming and configurable micro-batch schedules down to 1 minute' },
      { label: 'Visualization Types', value: '40+ interactive chart types, heatmaps, cohort tables, and geospatial map views' },
      { label: 'Access Governance', value: 'Granular row-level and column-level security ensuring users only see authorized metrics' },
    ],
    integrations: [
      { name: 'Snowflake & BigQuery', category: 'Cloud Data Warehouse', icon: 'fas fa-snowflake' },
      { name: 'AWS Redshift & S3', category: 'Enterprise Data Lake', icon: 'fab fa-aws' },
      { name: 'PostgreSQL & MongoDB', category: 'Live Production DBs', icon: 'fas fa-database' },
      { name: 'Google Ads & Meta Ads', category: 'Attribution & ROAS', icon: 'fab fa-google' },
      { name: 'Stripe & Banking Feeds', category: 'Revenue & Churn Metrics', icon: 'fab fa-stripe' },
      { name: 'Slack Scheduled Digests', category: 'Automated KPI Alerts', icon: 'fab fa-slack' },
    ],
  },
  18: {
    title: 'Booking Management',
    features: [
      {
        title: 'Smart Availability Calendar',
        desc: 'Client-facing booking widget displaying real-time open slots based on staff availability.',
      },
      {
        title: 'Two-Way Calendar Sync',
        desc: 'Automatically syncs appointments with Google Calendar, Microsoft Outlook, and Apple iCal.',
      },
      {
        title: 'Automated Reminders & WhatsApp',
        desc: 'Sends instant confirmation, reschedule links, and SMS/WhatsApp reminder notifications.',
      },
      {
        title: 'Deposit & Advance Payments',
        desc: 'Collects full fees or partial non-refundable booking deposits during the scheduling flow.',
      },
    ],
    specs: [
      { label: 'Timezone Engine', value: 'Automated dynamic timezone detection and calendar conversion for global clients' },
      { label: 'Resource Conflict Guard', value: 'Multi-staff, room, and equipment conflict checking to eliminate double-booking' },
      { label: 'Embedding Formats', value: 'Embeddable responsive widget, standalone booking microsite, and mobile web app' },
      { label: 'Notification Channels', value: 'WhatsApp Cloud API, Twilio SMS, SendGrid Email, and Webhook pushes' },
      { label: 'Cancellation Rules', value: 'Automated refund calculation and cancellation policy window enforcement' },
    ],
    integrations: [
      { name: 'Google Calendar', category: '2-Way Schedule Sync', icon: 'fab fa-google' },
      { name: 'Microsoft Outlook 365', category: 'Enterprise Calendar', icon: 'fab fa-microsoft' },
      { name: 'Zoom & Google Meet', category: 'Dynamic Video Links', icon: 'fas fa-video' },
      { name: 'Stripe & Razorpay', category: 'Deposit Payments', icon: 'fab fa-stripe' },
      { name: 'WhatsApp Cloud API', category: 'Instant SMS / WA Alerts', icon: 'fab fa-whatsapp' },
      { name: 'Apple iCal Sync', category: 'Mobile Calendar', icon: 'fab fa-apple' },
    ],
  },
  19: {
    title: 'Billing & Invoicing',
    features: [
      {
        title: 'Recurring Subscription Billing',
        desc: 'Supports recurring monthly/annual plans, usage-based metering, trials, and addons.',
      },
      {
        title: 'Tax-Compliant E-Invoicing',
        desc: 'Automated generation of GST (e-Invoice IRN/QR), UAE VAT, and international compliant invoices.',
      },
      {
        title: 'Smart Dunning & Payment Retries',
        desc: 'Automated smart retry schedules for failed card charges with gentle payment reminders.',
      },
      {
        title: 'Customer Self-Service Portal',
        desc: 'Gives customers a dedicated link to update payment cards, view receipts, and change plans.',
      },
    ],
    specs: [
      { label: 'Invoice Generation', value: 'Sub-second high-resolution PDF generation with digital signature & cryptographic QR' },
      { label: 'Billing Models', value: 'Tiered pricing, volume pricing, per-seat billing, overage metering & milestone billing' },
      { label: 'Accounting Sync', value: 'Direct synchronization with Tally, Zoho Books, QuickBooks, and Xero' },
      { label: 'Multi-Currency', value: 'Multi-currency invoicing with live exchange rate conversion and localized tax display' },
      { label: 'Security Vault', value: 'PCI-DSS compliant hosted payment forms with tokenized card storage' },
    ],
    integrations: [
      { name: 'GST Portal IRN Gateway', category: 'Govt e-Invoicing QR', icon: 'fas fa-receipt' },
      { name: 'Stripe Billing & Cards', category: 'Recurring Subscriptions', icon: 'fab fa-stripe-s' },
      { name: 'Tally Prime & Zoho Books', category: 'Automated Accounting', icon: 'fas fa-file-invoice' },
      { name: 'Corporate Virtual Accounts', category: 'Auto Reconciliation', icon: 'fas fa-university' },
      { name: 'PayPal & Global Rails', category: 'International Billing', icon: 'fab fa-paypal' },
      { name: 'QuickBooks & Xero', category: 'Financial Ledgers', icon: 'fas fa-calculator' },
    ],
  },
  20: {
    title: 'Customer Support Software',
    features: [
      {
        title: 'Omnichannel Ticketing Hub',
        desc: 'Consolidates support requests from Email, Live Chat, WhatsApp, and Social Media in one queue.',
      },
      {
        title: 'AI Copilot for Agents',
        desc: 'Generates suggested replies, summarizes lengthy customer histories, and drafts answers instantly.',
      },
      {
        title: 'SLA Timers & Escalations',
        desc: 'Real-time countdowns on response and resolution targets with automatic manager escalations.',
      },
      {
        title: 'CSAT & Agent Leaderboards',
        desc: 'Automated post-resolution satisfaction surveys and team performance productivity dashboards.',
      },
    ],
    specs: [
      { label: 'Routing Logic', value: 'Round-robin, skill-based, and load-balanced ticket assignment algorithms' },
      { label: 'Chat Latency', value: 'Sub-second message delivery via persistent WebSockets on live chat widgets' },
      { label: 'Knowledge Base', value: 'Built-in searchable customer help center with SEO indexing and internal agent docs' },
      { label: 'Automated Macros', value: 'One-click macro execution for common customer resolution workflows' },
      { label: 'Telephony CTI', value: 'In-app VoIP dialer with click-to-call, call recording, and transcript attachment' },
    ],
    integrations: [
      { name: 'Email (IMAP / SMTP)', category: 'Universal Mailbox', icon: 'fas fa-envelope' },
      { name: 'WhatsApp Cloud API', category: 'Direct Client Chat', icon: 'fab fa-whatsapp' },
      { name: 'Jira Service Desk', category: 'Engineering Escalation', icon: 'fab fa-jira' },
      { name: 'Slack & Teams', category: 'Internal Agent Alerts', icon: 'fab fa-slack' },
      { name: 'Zendesk & Freshdesk Sync', category: 'Helpdesk Data Migration', icon: 'fas fa-exchange-alt' },
      { name: 'In-App Web Chat Widget', category: 'Live Visitor Support', icon: 'fas fa-comments' },
    ],
  },
  21: {
    title: 'Multi-Brand Social Media Dashboard',
    features: [
      {
        title: 'Multi-Tenant Brand Workspaces',
        desc: 'Separate workspaces for each brand, client, or subsidiary with zero cross-data contamination.',
      },
      {
        title: 'Universal Social Inbox',
        desc: 'View and reply to comments, messages, and mentions across 20+ social accounts in one feed.',
      },
      {
        title: 'Client White-Label Portals',
        desc: 'Branded client portal with custom domain, logo, and approval workflows for agency clients.',
      },
      {
        title: 'Cross-Brand Benchmarking',
        desc: 'Compare performance, engagement rates, and follower growth across all your managed brands.',
      },
    ],
    specs: [
      { label: 'Account Capacity', value: 'Connect up to 100+ social profiles per enterprise workspace with granular roles' },
      { label: 'API Integrations', value: 'Official enterprise access to Meta Graph, LinkedIn Marketing, X API, and TikTok' },
      { label: 'Report Delivery', value: 'White-labeled automated PDF and CSV reporting with scheduled weekly email delivery' },
      { label: 'Moderation Guard', value: 'Keyword blacklisting, automated sentiment tagging, and spam comment auto-hiding' },
      { label: 'Audit Trail', value: 'Comprehensive activity log of all published content, approved edits, and deleted items' },
    ],
    integrations: [
      { name: 'Meta Business Suite', category: 'Instagram & Facebook', icon: 'fab fa-facebook' },
      { name: 'LinkedIn Company Pages', category: 'Professional Brand Hub', icon: 'fab fa-linkedin' },
      { name: 'X / Twitter Pro API', category: 'Real-Time Engagement', icon: 'fab fa-twitter' },
      { name: 'TikTok for Business', category: 'Viral Video Marketing', icon: 'fas fa-play-circle' },
      { name: 'Google Business Profile', category: 'Local Reviews & Maps', icon: 'fab fa-google' },
      { name: 'Canva Cloud Asset Sync', category: 'Direct Design Pipeline', icon: 'fas fa-images' },
    ],
  },
  22: {
    title: 'Custom SaaS Platforms',
    features: [
      {
        title: 'Multi-Tenant Cloud Architecture',
        desc: 'Shared infrastructure with complete tenant database isolation or tenant-per-schema isolation.',
      },
      {
        title: 'Turnkey Auth & User Management',
        desc: 'Enterprise SSO (SAML/OAuth), multi-factor authentication, and self-serve team invitations.',
      },
      {
        title: 'Subscription & Metered Billing',
        desc: 'Pre-integrated billing engine with usage tracking, plan tiers, invoices, and payment webhooks.',
      },
      {
        title: 'Developer API & Webhooks',
        desc: 'Public REST/GraphQL APIs with rate limiting, API key generation, and developer documentation.',
      },
    ],
    specs: [
      { label: 'Cloud Infrastructure', value: 'Microservices architecture with Docker, Kubernetes, and serverless compute clusters' },
      { label: 'Tenant Isolation', value: 'Dynamic tenant routing, tenant data isolation, and tenant-specific configuration' },
      { label: 'Scaling Benchmark', value: 'Auto-scaling container clusters capable of serving millions of daily API requests' },
      { label: 'Security Standard', value: 'OWASP Top 10 hardened, TLS 1.3 encryption in transit, and AES-256 at rest' },
      { label: 'Multi-Cloud Support', value: 'Deployable across AWS, Google Cloud, Microsoft Azure, or private cloud environments' },
    ],
    integrations: [
      { name: 'AWS, GCP & Azure', category: 'Cloud Infrastructure', icon: 'fab fa-aws' },
      { name: 'Docker & Kubernetes', category: 'Container Clusters', icon: 'fab fa-docker' },
      { name: 'Auth0 & Okta SSO', category: 'Enterprise Identity', icon: 'fas fa-user-shield' },
      { name: 'Stripe SaaS Billing', category: 'Recurring Subscription Rails', icon: 'fab fa-stripe' },
      { name: 'SendGrid & Resend', category: 'Transactional Emails', icon: 'fas fa-envelope' },
      { name: 'GitHub CI/CD Actions', category: 'Automated Deployment', icon: 'fab fa-github' },
      { name: 'Datadog & PostHog', category: 'APM & User Analytics', icon: 'fas fa-chart-line' },
    ],
  },
}
