import os

output_dir = r"d:\Fprojects\aanvithatech\aanvithatech\src\assets"

def make_header(title, subtitle="Enterprise Platform"):
    return f"""
    <!-- Circuit lines in bg -->
    <path d="M 30 100 L 90 100 L 120 70 L 200 70" stroke="#0ea5e9" stroke-width="1.5" stroke-opacity="0.35" fill="none"/>
    <circle cx="200" cy="70" r="3" fill="#38bdf8"/>
    <path d="M 770 120 L 710 120 L 680 90 L 620 90" stroke="#0ea5e9" stroke-width="1.5" stroke-opacity="0.35" fill="none"/>
    <circle cx="620" cy="90" r="3" fill="#38bdf8"/>
    <path d="M 40 500 L 100 500 L 130 530 L 220 530" stroke="#0ea5e9" stroke-width="1.5" stroke-opacity="0.35" fill="none"/>
    <circle cx="220" cy="530" r="3" fill="#38bdf8"/>
    <path d="M 760 480 L 700 480 L 670 510 L 590 510" stroke="#0ea5e9" stroke-width="1.5" stroke-opacity="0.35" fill="none"/>
    <circle cx="590" cy="510" r="3" fill="#38bdf8"/>

    <!-- Main Window Mockup -->
    <rect x="50" y="40" width="700" height="520" rx="16" fill="#081432" stroke="#00bfff" stroke-width="1.5" filter="url(#glow-subtle)"/>
    <rect x="50" y="40" width="700" height="42" rx="16" fill="#0c1e4a"/>
    <rect x="50" y="70" width="700" height="12" fill="#0c1e4a"/>

    <!-- Window Dots -->
    <circle cx="75" cy="61" r="5" fill="#ef4444"/>
    <circle cx="92" cy="61" r="5" fill="#f59e0b"/>
    <circle cx="109" cy="61" r="5" fill="#10b981"/>

    <!-- App Title & Badges -->
    <text x="135" y="66" fill="#ffffff" font-family="Inter, system-ui, sans-serif" font-weight="700" font-size="13">{title}</text>
    <rect x="540" y="50" width="80" height="22" rx="11" fill="#0284c7" fill-opacity="0.25" stroke="#38bdf8" stroke-width="0.8"/>
    <text x="580" y="65" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600" text-anchor="middle">ACTIVE</text>
    <rect x="630" y="50" width="105" height="22" rx="11" fill="#1e293b"/>
    <text x="682" y="65" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10" text-anchor="middle">{subtitle}</text>
    """

def wrap_svg(inner_content):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040b1e"/>
      <stop offset="50%" stop-color="#061334"/>
      <stop offset="100%" stop-color="#020716"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f2354"/>
      <stop offset="100%" stop-color="#0a193c"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00bfff"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
    <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <filter id="glow-subtle" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#00bfff" flood-opacity="0.18"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="600" fill="url(#bg)"/>

  {inner_content}
</svg>"""

files = {}

# 12. Loan Management System
files["svc_loan_management.svg"] = wrap_svg(make_header("LOAN MANAGEMENT SYSTEM (LMS)", "Fintech Core") + """
  <!-- Top Stat Cards -->
  <g transform="translate(70, 95)">
    <rect width="200" height="75" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="15" y="28" fill="#94a3b8" font-family="Inter, sans-serif" font-size="11">Total Active Loans</text>
    <text x="15" y="56" fill="#ffffff" font-family="Inter, sans-serif" font-size="20" font-weight="700">$4,850,200</text>
    <text x="145" y="56" fill="#10b981" font-family="Inter, sans-serif" font-size="11" font-weight="600">+18.4%</text>

    <rect x="215" width="210" height="75" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="230" y="28" fill="#94a3b8" font-family="Inter, sans-serif" font-size="11">Monthly Disbursed</text>
    <text x="230" y="56" fill="#ffffff" font-family="Inter, sans-serif" font-size="20" font-weight="700">$892,400</text>
    <text x="365" y="56" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="600">324 Apps</text>

    <rect x="440" width="220" height="75" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="455" y="28" fill="#94a3b8" font-family="Inter, sans-serif" font-size="11">Collection Rate (EMI)</text>
    <text x="455" y="56" fill="#ffffff" font-family="Inter, sans-serif" font-size="20" font-weight="700">98.6%</text>
    <rect x="575" y="42" width="70" height="18" rx="9" fill="#10b981" fill-opacity="0.2"/>
    <text x="610" y="55" fill="#10b981" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">ON TRACK</text>
  </g>

  <!-- Middle Pipeline Flow -->
  <g transform="translate(70, 185)">
    <rect width="660" height="60" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="15" y="20" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="700">LOAN ORIGINATION PIPELINE</text>
    
    <rect x="15" y="28" width="115" height="24" rx="6" fill="#0284c7"/>
    <text x="72" y="44" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="600" text-anchor="middle">1. Application</text>

    <rect x="145" y="28" width="115" height="24" rx="6" fill="#0369a1"/>
    <text x="202" y="44" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="600" text-anchor="middle">2. KYC &amp; Credit</text>

    <rect x="275" y="28" width="115" height="24" rx="6" fill="#075985"/>
    <text x="332" y="44" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="600" text-anchor="middle">3. Underwriting</text>

    <rect x="405" y="28" width="115" height="24" rx="6" fill="#0c4a6e"/>
    <text x="462" y="44" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="600" text-anchor="middle">4. Approval</text>

    <rect x="535" y="28" width="110" height="24" rx="6" fill="#10b981"/>
    <text x="590" y="44" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="600" text-anchor="middle">5. Disbursed</text>
  </g>

  <!-- Bottom Details -->
  <g transform="translate(70, 260)">
    <rect width="250" height="275" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="15" y="28" fill="#ffffff" font-family="Inter, sans-serif" font-size="13" font-weight="700">AI Credit Assessment</text>
    
    <path d="M 45 160 A 80 80 0 0 1 205 160" fill="none" stroke="#1e293b" stroke-width="16" stroke-linecap="round"/>
    <path d="M 45 160 A 80 80 0 0 1 185 95" fill="none" stroke="url(#cyanGrad)" stroke-width="16" stroke-linecap="round"/>
    <text x="125" y="145" fill="#ffffff" font-family="Inter, sans-serif" font-size="28" font-weight="800" text-anchor="middle">785</text>
    <text x="125" y="165" fill="#10b981" font-family="Inter, sans-serif" font-size="11" font-weight="600" text-anchor="middle">EXCELLENT SCORE</text>
    
    <rect x="25" y="195" width="200" height="30" rx="6" fill="#081432"/>
    <text x="35" y="214" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Default Risk Ratio</text>
    <text x="215" y="214" fill="#10b981" font-family="Inter, sans-serif" font-size="10" font-weight="700" text-anchor="end">0.42% (Low)</text>

    <rect x="25" y="232" width="200" height="30" rx="6" fill="#081432"/>
    <text x="35" y="251" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Auto-Sanction Limit</text>
    <text x="215" y="251" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="700" text-anchor="end">$120,000</text>

    <rect x="265" width="395" height="275" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="280" y="28" fill="#ffffff" font-family="Inter, sans-serif" font-size="13" font-weight="700">Recent Loan Applications</text>

    <rect x="280" y="42" width="365" height="25" rx="4" fill="#081432"/>
    <text x="290" y="58" fill="#64748b" font-family="Inter, sans-serif" font-size="10" font-weight="600">APPLICANT</text>
    <text x="400" y="58" fill="#64748b" font-family="Inter, sans-serif" font-size="10" font-weight="600">AMOUNT</text>
    <text x="490" y="58" fill="#64748b" font-family="Inter, sans-serif" font-size="10" font-weight="600">TENURE</text>
    <text x="580" y="58" fill="#64748b" font-family="Inter, sans-serif" font-size="10" font-weight="600">STATUS</text>

    <text x="290" y="90" fill="#e2e8f0" font-family="Inter, sans-serif" font-size="11" font-weight="600">Apex Corp Ltd</text>
    <text x="400" y="90" fill="#ffffff" font-family="Inter, sans-serif" font-size="11">$75,000</text>
    <text x="490" y="90" fill="#94a3b8" font-family="Inter, sans-serif" font-size="11">36 Mo</text>
    <rect x="575" y="77" width="60" height="18" rx="4" fill="#10b981" fill-opacity="0.2"/>
    <text x="605" y="90" fill="#10b981" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">APPROVED</text>
    <line x1="280" y1="104" x2="645" y2="104" stroke="#1e293b" stroke-width="1"/>

    <text x="290" y="128" fill="#e2e8f0" font-family="Inter, sans-serif" font-size="11" font-weight="600">Nova Retail Inc</text>
    <text x="400" y="128" fill="#ffffff" font-family="Inter, sans-serif" font-size="11">$140,000</text>
    <text x="490" y="128" fill="#94a3b8" font-family="Inter, sans-serif" font-size="11">60 Mo</text>
    <rect x="575" y="115" width="60" height="18" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text x="605" y="128" fill="#38bdf8" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">UNDERWRITE</text>
    <line x1="280" y1="142" x2="645" y2="142" stroke="#1e293b" stroke-width="1"/>

    <text x="290" y="166" fill="#e2e8f0" font-family="Inter, sans-serif" font-size="11" font-weight="600">Starlight Tech</text>
    <text x="400" y="166" fill="#ffffff" font-family="Inter, sans-serif" font-size="11">$32,000</text>
    <text x="490" y="166" fill="#94a3b8" font-family="Inter, sans-serif" font-size="11">24 Mo</text>
    <rect x="575" y="153" width="60" height="18" rx="4" fill="#10b981" fill-opacity="0.2"/>
    <text x="605" y="166" fill="#10b981" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">DISBURSED</text>
    <line x1="280" y1="180" x2="645" y2="180" stroke="#1e293b" stroke-width="1"/>

    <rect x="280" y="200" width="365" height="55" rx="6" fill="#081432"/>
    <text x="290" y="222" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Automated Repayment &amp; Reconciliation</text>
    <rect x="290" y="232" width="260" height="8" rx="4" fill="#1e293b"/>
    <rect x="290" y="232" width="245" height="8" rx="4" fill="url(#cyanGrad)"/>
    <text x="635" y="240" fill="#10b981" font-family="Inter, sans-serif" font-size="11" font-weight="700" text-anchor="end">98.6%</text>
  </g>
""")

# 13. CRM Platform
files["svc_enterprise_crm.svg"] = wrap_svg(make_header("ENTERPRISE CRM PLATFORM", "Sales Automation") + """
  <!-- Top Stats -->
  <g transform="translate(70, 95)">
    <rect width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="12" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Total Pipeline</text>
    <text x="12" y="52" fill="#ffffff" font-family="Inter, sans-serif" font-size="18" font-weight="700">$3.24M</text>

    <rect x="165" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="177" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Active Leads</text>
    <text x="177" y="52" fill="#38bdf8" font-family="Inter, sans-serif" font-size="18" font-weight="700">1,480</text>

    <rect x="330" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="342" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Conversion Rate</text>
    <text x="342" y="52" fill="#10b981" font-family="Inter, sans-serif" font-size="18" font-weight="700">28.6%</text>

    <rect x="495" width="165" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="507" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Deals Won (MTD)</text>
    <text x="507" y="52" fill="#ffffff" font-family="Inter, sans-serif" font-size="18" font-weight="700">$840,000</text>
  </g>

  <!-- Pipeline Kanban Columns -->
  <g transform="translate(70, 180)">
    <!-- Column 1: Inbound -->
    <rect width="155" height="355" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <rect width="155" height="32" rx="8" fill="#081432"/>
    <text x="12" y="21" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="700">INBOUND (12)</text>
    
    <!-- Deal 1 -->
    <rect x="8" y="42" width="139" height="70" rx="6" fill="#081432" stroke="#1e293b"/>
    <text x="16" y="60" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">Global Logistics</text>
    <text x="16" y="78" fill="#10b981" font-family="Inter, sans-serif" font-size="11" font-weight="700">$45,000</text>
    <text x="16" y="98" fill="#64748b" font-family="Inter, sans-serif" font-size="9">AI Voice Agent Deal</text>

    <!-- Deal 2 -->
    <rect x="8" y="122" width="139" height="70" rx="6" fill="#081432" stroke="#1e293b"/>
    <text x="16" y="140" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">FinSecure Pay</text>
    <text x="16" y="158" fill="#10b981" font-family="Inter, sans-serif" font-size="11" font-weight="700">$88,000</text>
    <text x="16" y="178" fill="#64748b" font-family="Inter, sans-serif" font-size="9">Payment Platform</text>

    <!-- Column 2: Qualified -->
    <rect x="168" width="155" height="355" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <rect x="168" width="155" height="32" rx="8" fill="#081432"/>
    <text x="180" y="21" fill="#60a5fa" font-family="Inter, sans-serif" font-size="11" font-weight="700">QUALIFIED (8)</text>

    <rect x="176" y="42" width="139" height="70" rx="6" fill="#081432" stroke="#1e293b"/>
    <text x="184" y="60" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">Apex Retail</text>
    <text x="184" y="78" fill="#10b981" font-family="Inter, sans-serif" font-size="11" font-weight="700">$64,000</text>
    <text x="184" y="98" fill="#64748b" font-family="Inter, sans-serif" font-size="9">E-commerce + CRM</text>

    <rect x="176" y="122" width="139" height="70" rx="6" fill="#081432" stroke="#1e293b"/>
    <text x="184" y="140" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">MediCare Health</text>
    <text x="184" y="158" fill="#10b981" font-family="Inter, sans-serif" font-size="11" font-weight="700">$120,000</text>
    <text x="184" y="178" fill="#64748b" font-family="Inter, sans-serif" font-size="9">Enterprise SaaS</text>

    <!-- Column 3: Proposal -->
    <rect x="336" width="155" height="355" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <rect x="336" width="155" height="32" rx="8" fill="#081432"/>
    <text x="348" y="21" fill="#a78bfa" font-family="Inter, sans-serif" font-size="11" font-weight="700">PROPOSAL (5)</text>

    <rect x="344" y="42" width="139" height="70" rx="6" fill="#081432" stroke="#1e293b"/>
    <text x="352" y="60" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">Horizon Bank</text>
    <text x="352" y="78" fill="#10b981" font-family="Inter, sans-serif" font-size="11" font-weight="700">$210,000</text>
    <text x="352" y="98" fill="#64748b" font-family="Inter, sans-serif" font-size="9">LMS + KYC Engine</text>

    <!-- Column 4: Closed Won -->
    <rect x="504" width="155" height="355" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <rect x="504" width="155" height="32" rx="8" fill="#081432"/>
    <text x="516" y="21" fill="#34d399" font-family="Inter, sans-serif" font-size="11" font-weight="700">WON (18)</text>

    <rect x="512" y="42" width="139" height="70" rx="6" fill="#081432" stroke="#1e293b"/>
    <text x="520" y="60" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">Prime Cloud Tech</text>
    <text x="520" y="78" fill="#10b981" font-family="Inter, sans-serif" font-size="11" font-weight="700">$350,000</text>
    <rect x="520" y="86" width="65" height="16" rx="4" fill="#10b981" fill-opacity="0.25"/>
    <text x="552" y="98" fill="#10b981" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">CLOSED</text>
  </g>
""")

# 14. ERP System
files["svc_erp_system.svg"] = wrap_svg(make_header("ERP ENTERPRISE PLATFORM", "Resource Planning") + """
  <!-- Top KPI Grid -->
  <g transform="translate(70, 95)">
    <rect width="150" height="65" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="12" y="22" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Finance &amp; Ledger</text>
    <text x="12" y="48" fill="#ffffff" font-family="Inter, sans-serif" font-size="18" font-weight="700">$14.8M</text>

    <rect x="165" width="150" height="65" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="177" y="22" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Procurement Orders</text>
    <text x="177" y="48" fill="#38bdf8" font-family="Inter, sans-serif" font-size="18" font-weight="700">842 Active</text>

    <rect x="330" width="150" height="65" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="342" y="22" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Supply Chain Health</text>
    <text x="342" y="48" fill="#10b981" font-family="Inter, sans-serif" font-size="18" font-weight="700">99.4%</text>

    <rect x="495" width="165" height="65" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="507" y="22" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Plant Efficiency</text>
    <text x="507" y="48" fill="#f59e0b" font-family="Inter, sans-serif" font-size="18" font-weight="700">94.8 OEE</text>
  </g>

  <!-- ERP Modules Grid -->
  <g transform="translate(70, 175)">
    <!-- Supply Chain & Manufacturing -->
    <rect width="320" height="175" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="15" y="25" fill="#ffffff" font-family="Inter, sans-serif" font-size="12" font-weight="700">Supply Chain &amp; Logistics</text>
    
    <!-- Flow boxes -->
    <rect x="15" y="45" width="85" height="45" rx="6" fill="#081432"/>
    <text x="57" y="65" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600" text-anchor="middle">Vendors</text>
    <text x="57" y="80" fill="#94a3b8" font-family="Inter, sans-serif" font-size="9" text-anchor="middle">128 Total</text>

    <text x="110" y="70" fill="#38bdf8" font-family="Inter, sans-serif" font-size="14" font-weight="700">→</text>

    <rect x="125" y="45" width="85" height="45" rx="6" fill="#081432"/>
    <text x="167" y="65" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600" text-anchor="middle">Warehouse</text>
    <text x="167" y="80" fill="#10b981" font-family="Inter, sans-serif" font-size="9" text-anchor="middle">4 Hubs</text>

    <text x="220" y="70" fill="#38bdf8" font-family="Inter, sans-serif" font-size="14" font-weight="700">→</text>

    <rect x="235" y="45" width="70" height="45" rx="6" fill="#081432"/>
    <text x="270" y="65" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600" text-anchor="middle">Dispatch</text>
    <text x="270" y="80" fill="#94a3b8" font-family="Inter, sans-serif" font-size="9" text-anchor="middle">98% Ontime</text>

    <rect x="15" y="105" width="290" height="55" rx="6" fill="#081432"/>
    <text x="25" y="125" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Active Manufacturing Output</text>
    <rect x="25" y="135" width="210" height="8" rx="4" fill="#1e293b"/>
    <rect x="25" y="135" width="185" height="8" rx="4" fill="url(#cyanGrad)"/>
    <text x="295" y="142" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="700" text-anchor="end">88%</text>

    <!-- Financial Accounting -->
    <rect x="340" width="320" height="175" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="355" y="25" fill="#ffffff" font-family="Inter, sans-serif" font-size="12" font-weight="700">Financial Ledger &amp; Cash Flow</text>

    <!-- Mini chart bars -->
    <g transform="translate(355, 60)">
      <rect x="0" y="50" width="25" height="40" rx="3" fill="#0284c7"/>
      <rect x="35" y="30" width="25" height="60" rx="3" fill="#0284c7"/>
      <rect x="70" y="40" width="25" height="50" rx="3" fill="#0284c7"/>
      <rect x="105" y="15" width="25" height="75" rx="3" fill="url(#cyanGrad)"/>
      <rect x="140" y="25" width="25" height="65" rx="3" fill="#0284c7"/>
      <rect x="175" y="10" width="25" height="80" rx="3" fill="url(#cyanGrad)"/>
      <rect x="210" y="5" width="25" height="85" rx="3" fill="url(#greenGrad)"/>

      <text x="260" y="35" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Operating Net</text>
      <text x="260" y="55" fill="#10b981" font-family="Inter, sans-serif" font-size="16" font-weight="700">+$2.1M</text>
      <text x="260" y="75" fill="#64748b" font-family="Inter, sans-serif" font-size="9">Q3 Audited</text>
    </g>

    <!-- ERP System Modules Bar -->
    <rect y="190" width="660" height="165" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="15" y="215" fill="#ffffff" font-family="Inter, sans-serif" font-size="12" font-weight="700">Integrated Enterprise Workflows</text>
    
    <rect x="15" y="230" width="145" height="110" rx="6" fill="#081432"/>
    <text x="25" y="255" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="600">Procurement</text>
    <text x="25" y="280" fill="#ffffff" font-family="Inter, sans-serif" font-size="14" font-weight="700">142 POs</text>
    <text x="25" y="300" fill="#10b981" font-family="Inter, sans-serif" font-size="10">Automated Approval</text>

    <rect x="175" y="230" width="145" height="110" rx="6" fill="#081432"/>
    <text x="185" y="255" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="600">Assets &amp; Depr.</text>
    <text x="185" y="280" fill="#ffffff" font-family="Inter, sans-serif" font-size="14" font-weight="700">$5.8M Assets</text>
    <text x="185" y="300" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10">Depr. Scheduled</text>

    <rect x="335" y="230" width="145" height="110" rx="6" fill="#081432"/>
    <text x="345" y="255" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="600">Human Capital</text>
    <text x="345" y="280" fill="#ffffff" font-family="Inter, sans-serif" font-size="14" font-weight="700">850 Staff</text>
    <text x="345" y="300" fill="#10b981" font-family="Inter, sans-serif" font-size="10">Payroll Synced</text>

    <rect x="495" y="230" width="150" height="110" rx="6" fill="#081432"/>
    <text x="505" y="255" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="600">Compliance &amp; Tax</text>
    <text x="505" y="280" fill="#ffffff" font-family="Inter, sans-serif" font-size="14" font-weight="700">GST / VAT</text>
    <text x="505" y="300" fill="#10b981" font-family="Inter, sans-serif" font-size="10">100% Tax Compliant</text>
  </g>
""")

# 15. HRMS System
files["svc_hrms_system.svg"] = wrap_svg(make_header("HRMS & TALENT MANAGEMENT", "Human Resources") + """
  <!-- Top Stat Cards -->
  <g transform="translate(70, 95)">
    <rect width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="12" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Total Employees</text>
    <text x="12" y="52" fill="#ffffff" font-family="Inter, sans-serif" font-size="18" font-weight="700">642 Staff</text>

    <rect x="165" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="177" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Attendance Today</text>
    <text x="177" y="52" fill="#10b981" font-family="Inter, sans-serif" font-size="18" font-weight="700">97.8%</text>

    <rect x="330" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="342" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Monthly Payroll</text>
    <text x="342" y="52" fill="#38bdf8" font-family="Inter, sans-serif" font-size="18" font-weight="700">$520,400</text>

    <rect x="495" width="165" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="507" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Pending Leaves</text>
    <text x="507" y="52" fill="#f59e0b" font-family="Inter, sans-serif" font-size="18" font-weight="700">6 Requests</text>
  </g>

  <!-- Left: Employee Directory & Right: Payroll Breakdown -->
  <g transform="translate(70, 180)">
    <!-- Employee Directory -->
    <rect width="360" height="355" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="15" y="28" fill="#ffffff" font-family="Inter, sans-serif" font-size="13" font-weight="700">Team Directory &amp; Attendance</text>

    <!-- Person 1 -->
    <rect x="15" y="45" width="330" height="55" rx="6" fill="#081432"/>
    <circle cx="42" cy="72" r="16" fill="#0284c7"/>
    <text x="42" y="76" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="700" text-anchor="middle">SJ</text>
    <text x="68" y="67" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">Sarah Jenkins</text>
    <text x="68" y="82" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Lead AI Engineer</text>
    <rect x="260" y="63" width="75" height="18" rx="4" fill="#10b981" fill-opacity="0.2"/>
    <text x="297" y="75" fill="#10b981" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">PRESENT</text>

    <!-- Person 2 -->
    <rect x="15" y="110" width="330" height="55" rx="6" fill="#081432"/>
    <circle cx="42" cy="137" r="16" fill="#6366f1"/>
    <text x="42" y="141" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="700" text-anchor="middle">MR</text>
    <text x="68" y="132" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">Marcus Rodriguez</text>
    <text x="68" y="147" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Product Designer</text>
    <rect x="260" y="128" width="75" height="18" rx="4" fill="#10b981" fill-opacity="0.2"/>
    <text x="297" y="140" fill="#10b981" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">PRESENT</text>

    <!-- Person 3 -->
    <rect x="15" y="175" width="330" height="55" rx="6" fill="#081432"/>
    <circle cx="42" cy="202" r="16" fill="#ec4899"/>
    <text x="42" y="206" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="700" text-anchor="middle">AL</text>
    <text x="68" y="197" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">Aria Lin</text>
    <text x="68" y="212" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Fintech Analyst</text>
    <rect x="260" y="193" width="75" height="18" rx="4" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="297" y="205" fill="#38bdf8" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">REMOTE</text>

    <!-- Person 4 -->
    <rect x="15" y="240" width="330" height="55" rx="6" fill="#081432"/>
    <circle cx="42" cy="267" r="16" fill="#f59e0b"/>
    <text x="42" y="271" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="700" text-anchor="middle">DK</text>
    <text x="68" y="262" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">David Kumar</text>
    <text x="68" y="277" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">DevOps Manager</text>
    <rect x="260" y="258" width="75" height="18" rx="4" fill="#10b981" fill-opacity="0.2"/>
    <text x="297" y="270" fill="#10b981" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">PRESENT</text>

    <!-- Right: Payroll & Performance -->
    <rect x="375" width="285" height="355" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="390" y="28" fill="#ffffff" font-family="Inter, sans-serif" font-size="13" font-weight="700">Payroll &amp; Tax Processing</text>

    <rect x="390" y="45" width="255" height="110" rx="6" fill="#081432"/>
    <text x="405" y="70" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Direct Salary Disbursement</text>
    <text x="405" y="98" fill="#10b981" font-family="Inter, sans-serif" font-size="20" font-weight="700">$520,400</text>
    <text x="405" y="125" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10">Auto-calculated Tax &amp; PF</text>
    <rect x="560" y="85" width="75" height="24" rx="4" fill="#0284c7"/>
    <text x="597" y="100" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="700" text-anchor="middle">PROCESSED</text>

    <rect x="390" y="170" width="255" height="165" rx="6" fill="#081432"/>
    <text x="405" y="195" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">Leave Approvals</text>
    
    <text x="405" y="222" fill="#e2e8f0" font-family="Inter, sans-serif" font-size="10">Emma Stone • Vacation (2 Days)</text>
    <rect x="560" y="210" width="35" height="18" rx="4" fill="#10b981"/>
    <text x="577" y="222" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">✓</text>
    <rect x="600" y="210" width="35" height="18" rx="4" fill="#ef4444"/>
    <text x="617" y="222" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">✕</text>

    <text x="405" y="262" fill="#e2e8f0" font-family="Inter, sans-serif" font-size="10">Kevin Patel • Sick Leave (1 Day)</text>
    <rect x="560" y="250" width="35" height="18" rx="4" fill="#10b981"/>
    <text x="577" y="262" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">✓</text>
    <rect x="600" y="250" width="35" height="18" rx="4" fill="#ef4444"/>
    <text x="617" y="262" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">✕</text>
  </g>
""")

# 16. Inventory Management
files["svc_inventory_mgmt.svg"] = wrap_svg(make_header("INVENTORY & WAREHOUSE MANAGEMENT", "Supply Chain") + """
  <!-- Top Stat Cards -->
  <g transform="translate(70, 95)">
    <rect width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="12" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Total SKUs Tracked</text>
    <text x="12" y="52" fill="#ffffff" font-family="Inter, sans-serif" font-size="18" font-weight="700">18,450</text>

    <rect x="165" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="177" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Stock Valuation</text>
    <text x="177" y="52" fill="#38bdf8" font-family="Inter, sans-serif" font-size="18" font-weight="700">$2.84M</text>

    <rect x="330" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="342" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Fulfillment Rate</text>
    <text x="342" y="52" fill="#10b981" font-family="Inter, sans-serif" font-size="18" font-weight="700">99.1%</text>

    <rect x="495" width="165" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="507" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Low Stock Alerts</text>
    <text x="507" y="52" fill="#ef4444" font-family="Inter, sans-serif" font-size="18" font-weight="700">12 SKUs</text>
  </g>

  <!-- Stock Levels Table & Warehouse Map -->
  <g transform="translate(70, 180)">
    <rect width="400" height="355" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="15" y="28" fill="#ffffff" font-family="Inter, sans-serif" font-size="13" font-weight="700">Real-Time Stock Inventory</text>

    <!-- Table Header -->
    <rect x="15" y="42" width="370" height="25" rx="4" fill="#081432"/>
    <text x="25" y="58" fill="#64748b" font-family="Inter, sans-serif" font-size="10" font-weight="600">PRODUCT / SKU</text>
    <text x="175" y="58" fill="#64748b" font-family="Inter, sans-serif" font-size="10" font-weight="600">CATEGORY</text>
    <text x="270" y="58" fill="#64748b" font-family="Inter, sans-serif" font-size="10" font-weight="600">STOCK</text>
    <text x="340" y="58" fill="#64748b" font-family="Inter, sans-serif" font-size="10" font-weight="600">STATUS</text>

    <!-- Item 1 -->
    <text x="25" y="90" fill="#e2e8f0" font-family="Inter, sans-serif" font-size="11" font-weight="600">Smart Terminal Pro X</text>
    <text x="175" y="90" fill="#94a3b8" font-family="Inter, sans-serif" font-size="11">Hardware</text>
    <text x="270" y="90" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="700">1,420</text>
    <rect x="330" y="77" width="50" height="18" rx="4" fill="#10b981" fill-opacity="0.2"/>
    <text x="355" y="90" fill="#10b981" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">OPTIMAL</text>
    <line x1="15" y1="104" x2="385" y2="104" stroke="#1e293b" stroke-width="1"/>

    <!-- Item 2 -->
    <text x="25" y="128" fill="#e2e8f0" font-family="Inter, sans-serif" font-size="11" font-weight="600">Wireless Sensor Pod</text>
    <text x="175" y="128" fill="#94a3b8" font-family="Inter, sans-serif" font-size="11">IoT Nodes</text>
    <text x="270" y="128" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="700">2,850</text>
    <rect x="330" y="115" width="50" height="18" rx="4" fill="#10b981" fill-opacity="0.2"/>
    <text x="355" y="128" fill="#10b981" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">OPTIMAL</text>
    <line x1="15" y1="142" x2="385" y2="142" stroke="#1e293b" stroke-width="1"/>

    <!-- Item 3 -->
    <text x="25" y="166" fill="#e2e8f0" font-family="Inter, sans-serif" font-size="11" font-weight="600">Biometric POS Scanner</text>
    <text x="175" y="166" fill="#94a3b8" font-family="Inter, sans-serif" font-size="11">Devices</text>
    <text x="270" y="166" fill="#ef4444" font-family="Inter, sans-serif" font-size="11" font-weight="700">18</text>
    <rect x="330" y="153" width="50" height="18" rx="4" fill="#ef4444" fill-opacity="0.2"/>
    <text x="355" y="166" fill="#ef4444" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">LOW</text>
    <line x1="15" y1="180" x2="385" y2="180" stroke="#1e293b" stroke-width="1"/>

    <!-- Item 4 -->
    <text x="25" y="204" fill="#e2e8f0" font-family="Inter, sans-serif" font-size="11" font-weight="600">NFC Payment Cards</text>
    <text x="175" y="204" fill="#94a3b8" font-family="Inter, sans-serif" font-size="11">Supplies</text>
    <text x="270" y="204" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="700">45,000</text>
    <rect x="330" y="191" width="50" height="18" rx="4" fill="#10b981" fill-opacity="0.2"/>
    <text x="355" y="204" fill="#10b981" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">OPTIMAL</text>

    <!-- Auto reorder box -->
    <rect x="15" y="235" width="370" height="95" rx="6" fill="#081432"/>
    <text x="25" y="260" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="600">Automated Supplier Reorder Engine</text>
    <text x="25" y="282" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Auto-PO generated for POS Scanner (Qty: 500)</text>
    <rect x="25" y="295" width="120" height="22" rx="4" fill="#0284c7"/>
    <text x="85" y="310" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">DISPATCHED TO VENDOR</text>

    <!-- Right: Warehouse Storage Breakdown -->
    <rect x="415" width="245" height="355" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="430" y="28" fill="#ffffff" font-family="Inter, sans-serif" font-size="13" font-weight="700">Warehouse Capacity</text>

    <rect x="430" y="50" width="215" height="65" rx="6" fill="#081432"/>
    <text x="440" y="70" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Hub North (Dubai Central)</text>
    <rect x="440" y="80" width="195" height="8" rx="4" fill="#1e293b"/>
    <rect x="440" y="80" width="165" height="8" rx="4" fill="url(#cyanGrad)"/>
    <text x="440" y="105" fill="#38bdf8" font-family="Inter, sans-serif" font-size="9">85% Utilized • 4,800 Pallets</text>

    <rect x="430" y="125" width="215" height="65" rx="6" fill="#081432"/>
    <text x="440" y="145" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Hub South (Abu Dhabi)</text>
    <rect x="440" y="155" width="195" height="8" rx="4" fill="#1e293b"/>
    <rect x="440" y="155" width="120" height="8" rx="4" fill="url(#cyanGrad)"/>
    <text x="440" y="180" fill="#38bdf8" font-family="Inter, sans-serif" font-size="9">62% Utilized • 2,100 Pallets</text>

    <rect x="430" y="200" width="215" height="130" rx="6" fill="#081432"/>
    <text x="440" y="225" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">Barcode &amp; RFID Scanner</text>
    <text x="440" y="248" fill="#10b981" font-family="Inter, sans-serif" font-size="10">100% Real-time Sync Active</text>
    <text x="440" y="270" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Handheld Scanners: 34 Online</text>
    <rect x="440" y="285" width="195" height="24" rx="4" fill="#1e3a8a"/>
    <text x="537" y="301" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="700" text-anchor="middle">LIVE RFID AUDIT ACTIVE</text>
  </g>
""")

# 17. E-commerce Platform
files["svc_ecommerce_platform.svg"] = wrap_svg(make_header("E-COMMERCE COMMERCE PLATFORM", "Digital Storefront") + """
  <!-- Top Stat Cards -->
  <g transform="translate(70, 95)">
    <rect width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="12" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Total Revenue (MTD)</text>
    <text x="12" y="52" fill="#ffffff" font-family="Inter, sans-serif" font-size="18" font-weight="700">$248,600</text>

    <rect x="165" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="177" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Total Orders</text>
    <text x="177" y="52" fill="#38bdf8" font-family="Inter, sans-serif" font-size="18" font-weight="700">3,420</text>

    <rect x="330" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="342" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Conversion Rate</text>
    <text x="342" y="52" fill="#10b981" font-family="Inter, sans-serif" font-size="18" font-weight="700">4.82%</text>

    <rect x="495" width="165" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="507" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Avg Order Value</text>
    <text x="507" y="52" fill="#ffffff" font-family="Inter, sans-serif" font-size="18" font-weight="700">$72.65</text>
  </g>

  <!-- Products Grid + Live Checkout -->
  <g transform="translate(70, 180)">
    <rect width="400" height="355" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="15" y="28" fill="#ffffff" font-family="Inter, sans-serif" font-size="13" font-weight="700">Storefront Product Catalog</text>

    <!-- Product 1 -->
    <rect x="15" y="45" width="180" height="140" rx="6" fill="#081432"/>
    <rect x="25" y="55" width="160" height="50" rx="4" fill="#0c1e4a"/>
    <text x="105" y="85" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600" text-anchor="middle">PRO AUDIO HEADSET</text>
    <text x="25" y="125" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="700">$189.00</text>
    <text x="25" y="145" fill="#10b981" font-family="Inter, sans-serif" font-size="9">In Stock (342)</text>
    <rect x="110" y="115" width="75" height="24" rx="4" fill="#0284c7"/>
    <text x="147" y="131" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">ADD TO CART</text>

    <!-- Product 2 -->
    <rect x="205" y="45" width="180" height="140" rx="6" fill="#081432"/>
    <rect x="215" y="55" width="160" height="50" rx="4" fill="#0c1e4a"/>
    <text x="295" y="85" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600" text-anchor="middle">SMART WATCH ULTRA</text>
    <text x="215" y="125" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="700">$299.00</text>
    <text x="215" y="145" fill="#10b981" font-family="Inter, sans-serif" font-size="9">In Stock (128)</text>
    <rect x="300" y="115" width="75" height="24" rx="4" fill="#0284c7"/>
    <text x="337" y="131" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">ADD TO CART</text>

    <!-- Product 3 -->
    <rect x="15" y="195" width="180" height="140" rx="6" fill="#081432"/>
    <rect x="25" y="205" width="160" height="50" rx="4" fill="#0c1e4a"/>
    <text x="105" y="235" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600" text-anchor="middle">WIRELESS CHARGER</text>
    <text x="25" y="275" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="700">$49.00</text>
    <text x="25" y="295" fill="#10b981" font-family="Inter, sans-serif" font-size="9">In Stock (890)</text>
    <rect x="110" y="265" width="75" height="24" rx="4" fill="#0284c7"/>
    <text x="147" y="281" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">ADD TO CART</text>

    <!-- Product 4 -->
    <rect x="205" y="195" width="180" height="140" rx="6" fill="#081432"/>
    <rect x="215" y="205" width="160" height="50" rx="4" fill="#0c1e4a"/>
    <text x="295" y="235" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600" text-anchor="middle">4K ACTION CAMERA</text>
    <text x="215" y="275" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="700">$349.00</text>
    <text x="215" y="295" fill="#10b981" font-family="Inter, sans-serif" font-size="9">In Stock (74)</text>
    <rect x="300" y="265" width="75" height="24" rx="4" fill="#0284c7"/>
    <text x="337" y="281" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">ADD TO CART</text>

    <!-- Right: Checkout Flow & Shipping -->
    <rect x="415" width="245" height="355" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="430" y="28" fill="#ffffff" font-family="Inter, sans-serif" font-size="13" font-weight="700">1-Click Checkout &amp; Pay</text>

    <rect x="430" y="45" width="215" height="140" rx="6" fill="#081432"/>
    <text x="440" y="68" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Order Summary (2 Items)</text>
    <text x="440" y="92" fill="#ffffff" font-family="Inter, sans-serif" font-size="11">Subtotal: $488.00</text>
    <text x="440" y="112" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Shipping: FREE Express</text>
    <text x="440" y="132" fill="#10b981" font-family="Inter, sans-serif" font-size="14" font-weight="700">Total: $488.00</text>
    <rect x="440" y="145" width="195" height="28" rx="4" fill="url(#cyanGrad)"/>
    <text x="537" y="163" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="700" text-anchor="middle">PAY WITH APPLE PAY / CARD</text>

    <rect x="430" y="195" width="215" height="140" rx="6" fill="#081432"/>
    <text x="440" y="220" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="600">Multi-Channel Sync</text>
    <text x="440" y="245" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Amazon / Noon / Shopify Sync</text>
    <text x="440" y="270" fill="#10b981" font-family="Inter, sans-serif" font-size="10">✓ Automated Tracking No.</text>
    <text x="440" y="295" fill="#10b981" font-family="Inter, sans-serif" font-size="10">✓ WhatsApp Order Updates</text>
    <rect x="440" y="305" width="195" height="18" rx="4" fill="#0c1e4a"/>
    <text x="537" y="318" fill="#38bdf8" font-family="Inter, sans-serif" font-size="9" text-anchor="middle">LIVE COURIER API INTEGRATED</text>
  </g>
""")

# 18. Booking Management
files["svc_booking_management.svg"] = wrap_svg(make_header("BOOKING & APPOINTMENT PLATFORM", "Schedule Engine") + """
  <!-- Top Stat Cards -->
  <g transform="translate(70, 95)">
    <rect width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="12" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Today's Bookings</text>
    <text x="12" y="52" fill="#ffffff" font-family="Inter, sans-serif" font-size="18" font-weight="700">48 Slots</text>

    <rect x="165" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="177" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Occupancy Rate</text>
    <text x="177" y="52" fill="#10b981" font-family="Inter, sans-serif" font-size="18" font-weight="700">92.4%</text>

    <rect x="330" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="342" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Revenue (Today)</text>
    <text x="342" y="52" fill="#38bdf8" font-family="Inter, sans-serif" font-size="18" font-weight="700">$8,450</text>

    <rect x="495" width="165" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="507" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">No-Show Ratio</text>
    <text x="507" y="52" fill="#10b981" font-family="Inter, sans-serif" font-size="18" font-weight="700">1.2% (Low)</text>
  </g>

  <!-- Interactive Calendar Grid & Schedule -->
  <g transform="translate(70, 180)">
    <rect width="400" height="355" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="15" y="28" fill="#ffffff" font-family="Inter, sans-serif" font-size="13" font-weight="700">Weekly Booking Schedule</text>

    <!-- Days row -->
    <rect x="15" y="42" width="370" height="25" rx="4" fill="#081432"/>
    <text x="40" y="58" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600">MON</text>
    <text x="95" y="58" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600">TUE</text>
    <text x="150" y="58" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600">WED</text>
    <text x="205" y="58" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600">THU</text>
    <text x="260" y="58" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600">FRI</text>
    <text x="315" y="58" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600">SAT</text>
    <text x="360" y="58" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">SUN</text>

    <!-- Slot blocks -->
    <rect x="20" y="75" width="50" height="40" rx="4" fill="#0284c7"/>
    <text x="45" y="92" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">09:00 AM</text>
    <text x="45" y="106" fill="#e0f2fe" font-family="Inter, sans-serif" font-size="8" text-anchor="middle">Dr. John</text>

    <rect x="75" y="75" width="50" height="40" rx="4" fill="#0369a1"/>
    <text x="100" y="92" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">10:30 AM</text>
    <text x="100" y="106" fill="#e0f2fe" font-family="Inter, sans-serif" font-size="8" text-anchor="middle">VIP Suite</text>

    <rect x="130" y="75" width="50" height="40" rx="4" fill="#10b981"/>
    <text x="155" y="92" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">11:15 AM</text>
    <text x="155" y="106" fill="#e0f2fe" font-family="Inter, sans-serif" font-size="8" text-anchor="middle">Consult</text>

    <rect x="185" y="75" width="50" height="40" rx="4" fill="#0284c7"/>
    <text x="210" y="92" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">01:00 PM</text>
    <text x="210" y="106" fill="#e0f2fe" font-family="Inter, sans-serif" font-size="8" text-anchor="middle">Meeting</text>

    <rect x="240" y="75" width="50" height="40" rx="4" fill="#0284c7"/>
    <text x="265" y="92" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">02:30 PM</text>
    <text x="265" y="106" fill="#e0f2fe" font-family="Inter, sans-serif" font-size="8" text-anchor="middle">Auditorium</text>

    <rect x="295" y="75" width="50" height="40" rx="4" fill="#6366f1"/>
    <text x="320" y="92" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">04:00 PM</text>
    <text x="320" y="106" fill="#e0f2fe" font-family="Inter, sans-serif" font-size="8" text-anchor="middle">Workshop</text>

    <!-- Booking List Cards -->
    <rect x="15" y="125" width="370" height="210" rx="6" fill="#081432"/>
    <text x="25" y="148" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="600">Upcoming Confirmed Appointments</text>

    <text x="25" y="175" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">Alexander Wright • Executive Boardroom</text>
    <text x="25" y="190" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Today, 02:30 PM • 12 Guests • Paid $350</text>
    <rect x="305" y="170" width="70" height="20" rx="4" fill="#10b981" fill-opacity="0.25"/>
    <text x="340" y="184" fill="#10b981" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">CONFIRMED</text>
    <line x1="25" y1="205" x2="375" y2="205" stroke="#1e293b" stroke-width="1"/>

    <text x="25" y="230" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">Dr. Elena Rostova • Dental Suite 4</text>
    <text x="25" y="245" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Today, 04:00 PM • Patient #P489 • Paid $120</text>
    <rect x="305" y="225" width="70" height="20" rx="4" fill="#10b981" fill-opacity="0.25"/>
    <text x="340" y="239" fill="#10b981" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">CONFIRMED</text>
    <line x1="25" y1="260" x2="375" y2="260" stroke="#1e293b" stroke-width="1"/>

    <text x="25" y="285" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">Emirates Flight Crew • Shuttle Booking</text>
    <text x="25" y="300" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Tomorrow, 08:00 AM • 4 Vans • Invoice Sent</text>
    <rect x="305" y="280" width="70" height="20" rx="4" fill="#0284c7" fill-opacity="0.25"/>
    <text x="340" y="294" fill="#38bdf8" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">SYNCED</text>

    <!-- Right: Automation & Reminders -->
    <rect x="415" width="245" height="355" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="430" y="28" fill="#ffffff" font-family="Inter, sans-serif" font-size="13" font-weight="700">Auto Reminders &amp; Alerts</text>

    <rect x="430" y="45" width="215" height="90" rx="6" fill="#081432"/>
    <text x="440" y="68" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600">WhatsApp &amp; SMS Reminders</text>
    <text x="440" y="88" fill="#10b981" font-family="Inter, sans-serif" font-size="14" font-weight="700">100% Automated</text>
    <text x="440" y="112" fill="#94a3b8" font-family="Inter, sans-serif" font-size="9">Sent 2 hrs before session</text>

    <rect x="430" y="145" width="215" height="90" rx="6" fill="#081432"/>
    <text x="440" y="168" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600">Google Calendar 2-Way Sync</text>
    <text x="440" y="188" fill="#ffffff" font-family="Inter, sans-serif" font-size="14" font-weight="700">Real-Time Sync</text>
    <text x="440" y="212" fill="#10b981" font-family="Inter, sans-serif" font-size="9">✓ Zero double-bookings</text>

    <rect x="430" y="245" width="215" height="90" rx="6" fill="#081432"/>
    <text x="440" y="268" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600">Deposit / Payment Lock</text>
    <text x="440" y="288" fill="#ffffff" font-family="Inter, sans-serif" font-size="14" font-weight="700">Instant Advance</text>
    <text x="440" y="312" fill="#38bdf8" font-family="Inter, sans-serif" font-size="9">Credit Card / Apple Pay</text>
  </g>
""")

# 19. Billing & Invoicing
files["svc_billing_invoicing.svg"] = wrap_svg(make_header("BILLING & INVOICING PLATFORM", "Recurring Revenue") + """
  <!-- Top Stat Cards -->
  <g transform="translate(70, 95)">
    <rect width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="12" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Total Invoiced</text>
    <text x="12" y="52" fill="#ffffff" font-family="Inter, sans-serif" font-size="18" font-weight="700">$384,200</text>

    <rect x="165" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="177" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Paid Collections</text>
    <text x="177" y="52" fill="#10b981" font-family="Inter, sans-serif" font-size="18" font-weight="700">$356,800</text>

    <rect x="330" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="342" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Pending / Overdue</text>
    <text x="342" y="52" fill="#f59e0b" font-family="Inter, sans-serif" font-size="18" font-weight="700">$27,400</text>

    <rect x="495" width="165" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="507" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Recurring Subscriptions</text>
    <text x="507" y="52" fill="#38bdf8" font-family="Inter, sans-serif" font-size="18" font-weight="700">428 Active</text>
  </g>

  <!-- Left: Invoice Sheet Preview & Right: Subscription Lifecycle -->
  <g transform="translate(70, 180)">
    <rect width="390" height="355" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="15" y="28" fill="#ffffff" font-family="Inter, sans-serif" font-size="13" font-weight="700">Digital Tax Invoice #INV-2024-890</text>

    <!-- Invoice Header Box -->
    <rect x="15" y="42" width="360" height="65" rx="6" fill="#081432"/>
    <text x="25" y="65" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="700">BILLED TO: CyberDynamics LLC</text>
    <text x="25" y="82" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">TRN / Tax ID: 100482938400003</text>
    <text x="25" y="98" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Due Date: 15 Sep 2024 (Net 30)</text>
    <rect x="285" y="55" width="80" height="24" rx="4" fill="#10b981" fill-opacity="0.25"/>
    <text x="325" y="71" fill="#10b981" font-family="Inter, sans-serif" font-size="10" font-weight="700" text-anchor="middle">PAID ONLINE</text>

    <!-- Line Items Table -->
    <rect x="15" y="115" width="360" height="25" rx="4" fill="#081432"/>
    <text x="25" y="131" fill="#64748b" font-family="Inter, sans-serif" font-size="10" font-weight="600">DESCRIPTION</text>
    <text x="220" y="131" fill="#64748b" font-family="Inter, sans-serif" font-size="10" font-weight="600">QTY</text>
    <text x="270" y="131" fill="#64748b" font-family="Inter, sans-serif" font-size="10" font-weight="600">TAX (5%)</text>
    <text x="330" y="131" fill="#64748b" font-family="Inter, sans-serif" font-size="10" font-weight="600">TOTAL</text>

    <text x="25" y="160" fill="#ffffff" font-family="Inter, sans-serif" font-size="10">AI Enterprise SaaS Platform (Monthly)</text>
    <text x="220" y="160" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">1</text>
    <text x="270" y="160" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">$150.00</text>
    <text x="330" y="160" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="700">$3,150.00</text>
    <line x1="15" y1="172" x2="375" y2="172" stroke="#1e293b" stroke-width="1"/>

    <text x="25" y="195" fill="#ffffff" font-family="Inter, sans-serif" font-size="10">Voice Agent API Add-on (5,000 mins)</text>
    <text x="220" y="195" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">1</text>
    <text x="270" y="195" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">$45.00</text>
    <text x="330" y="195" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="700">$945.00</text>
    <line x1="15" y1="207" x2="375" y2="207" stroke="#1e293b" stroke-width="1"/>

    <!-- Total box -->
    <rect x="15" y="225" width="360" height="110" rx="6" fill="#081432"/>
    <text x="25" y="250" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Subtotal: $3,900.00 | VAT: $195.00</text>
    <text x="25" y="280" fill="#ffffff" font-family="Inter, sans-serif" font-size="18" font-weight="800">Total Due: $4,095.00</text>
    <rect x="235" y="255" width="130" height="30" rx="4" fill="url(#cyanGrad)"/>
    <text x="300" y="274" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="700" text-anchor="middle">SHARE PAYMENT LINK</text>

    <!-- Right: Subscription Engine -->
    <rect x="405" width="255" height="355" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="420" y="28" fill="#ffffff" font-family="Inter, sans-serif" font-size="13" font-weight="700">Recurring Engine</text>

    <rect x="420" y="45" width="225" height="90" rx="6" fill="#081432"/>
    <text x="430" y="68" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600">Auto-Debit &amp; Card Vault</text>
    <text x="430" y="90" fill="#10b981" font-family="Inter, sans-serif" font-size="14" font-weight="700">98.4% Auto-Collected</text>
    <text x="430" y="112" fill="#94a3b8" font-family="Inter, sans-serif" font-size="9">Stripe, PayCaps, Razorpay</text>

    <rect x="420" y="145" width="225" height="90" rx="6" fill="#081432"/>
    <text x="430" y="168" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600">Smart Dunning &amp; Retries</text>
    <text x="430" y="190" fill="#ffffff" font-family="Inter, sans-serif" font-size="14" font-weight="700">$12,400 Recovered</text>
    <text x="430" y="212" fill="#38bdf8" font-family="Inter, sans-serif" font-size="9">AI Failed Payment Recovery</text>

    <rect x="420" y="245" width="225" height="90" rx="6" fill="#081432"/>
    <text x="430" y="268" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600">GST / ZATCA / Tax Ready</text>
    <text x="430" y="290" fill="#10b981" font-family="Inter, sans-serif" font-size="14" font-weight="700">E-Invoicing Compliant</text>
    <text x="430" y="312" fill="#94a3b8" font-family="Inter, sans-serif" font-size="9">Instant QR Code &amp; XML</text>
  </g>
""")

# 20. Customer Support Software
files["svc_customer_support.svg"] = wrap_svg(make_header("CUSTOMER SUPPORT HELPDESK", "Omnichannel Service") + """
  <!-- Top Stat Cards -->
  <g transform="translate(70, 95)">
    <rect width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="12" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Active Tickets</text>
    <text x="12" y="52" fill="#ffffff" font-family="Inter, sans-serif" font-size="18" font-weight="700">24 Open</text>

    <rect x="165" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="177" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">First Response Time</text>
    <text x="177" y="52" fill="#10b981" font-family="Inter, sans-serif" font-size="18" font-weight="700">1.4 Mins</text>

    <rect x="330" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="342" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">CSAT Score</text>
    <text x="342" y="52" fill="#38bdf8" font-family="Inter, sans-serif" font-size="18" font-weight="700">4.9 / 5.0</text>

    <rect x="495" width="165" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="507" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">AI Auto-Resolution</text>
    <text x="507" y="52" fill="#ffffff" font-family="Inter, sans-serif" font-size="18" font-weight="700">76.4%</text>
  </g>

  <!-- Left: Ticket Queue & Right: Live Chat Screen -->
  <g transform="translate(70, 180)">
    <rect width="380" height="355" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="15" y="28" fill="#ffffff" font-family="Inter, sans-serif" font-size="13" font-weight="700">Live Support Tickets Queue</text>

    <!-- Ticket 1 -->
    <rect x="15" y="45" width="350" height="65" rx="6" fill="#081432"/>
    <circle cx="35" cy="77" r="14" fill="#0284c7"/>
    <text x="35" y="81" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">WA</text>
    <text x="60" y="68" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">Payment webhook timeout</text>
    <text x="60" y="85" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">WhatsApp • User: Liam Vance</text>
    <rect x="275" y="65" width="80" height="20" rx="4" fill="#ef4444" fill-opacity="0.2"/>
    <text x="315" y="79" fill="#ef4444" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">URGENT</text>

    <!-- Ticket 2 -->
    <rect x="15" y="120" width="350" height="65" rx="6" fill="#081432"/>
    <circle cx="35" cy="152" r="14" fill="#10b981"/>
    <text x="35" y="156" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">EM</text>
    <text x="60" y="143" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">Upgrade to Enterprise Plan</text>
    <text x="60" y="160" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Email • User: Rachel Green</text>
    <rect x="275" y="140" width="80" height="20" rx="4" fill="#10b981" fill-opacity="0.2"/>
    <text x="315" y="154" fill="#10b981" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">SALES LEAD</text>

    <!-- Ticket 3 -->
    <rect x="15" y="195" width="350" height="65" rx="6" fill="#081432"/>
    <circle cx="35" cy="227" r="14" fill="#6366f1"/>
    <text x="35" y="231" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">WB</text>
    <text x="60" y="218" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">KYC verification document</text>
    <text x="60" y="235" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Live Web Chat • User: David Lee</text>
    <rect x="275" y="215" width="80" height="20" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text x="315" y="229" fill="#38bdf8" font-family="Inter, sans-serif" font-size="9" font-weight="700" text-anchor="middle">IN PROGRESS</text>

    <!-- Omnichannel badges bar -->
    <rect x="15" y="275" width="350" height="60" rx="6" fill="#081432"/>
    <text x="25" y="298" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="700">CONNECTED CHANNELS</text>
    <text x="25" y="318" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">WhatsApp • Live Web Chat • Email • In-App Voice</text>

    <!-- Right: AI Agent Co-Pilot -->
    <rect x="395" width="265" height="355" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="410" y="28" fill="#ffffff" font-family="Inter, sans-serif" font-size="13" font-weight="700">AI Support Co-Pilot</text>

    <rect x="410" y="45" width="235" height="150" rx="6" fill="#081432"/>
    <text x="420" y="68" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="600">Suggested Smart Reply</text>
    <rect x="420" y="80" width="215" height="65" rx="4" fill="#0c1e4a"/>
    <text x="430" y="100" fill="#e2e8f0" font-family="Inter, sans-serif" font-size="9">"Hello Liam! I have verified your</text>
    <text x="430" y="115" fill="#e2e8f0" font-family="Inter, sans-serif" font-size="9">webhook payload. The transaction was</text>
    <text x="430" y="130" fill="#e2e8f0" font-family="Inter, sans-serif" font-size="9">settled successfully (ID #89201)."</text>
    <rect x="420" y="155" width="215" height="28" rx="4" fill="url(#cyanGrad)"/>
    <text x="527" y="173" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="700" text-anchor="middle">APPROVE &amp; SEND (AI)</text>

    <rect x="410" y="205" width="235" height="130" rx="6" fill="#081432"/>
    <text x="420" y="228" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">SLA &amp; Knowledge Base</text>
    <text x="420" y="250" fill="#10b981" font-family="Inter, sans-serif" font-size="10">✓ SLA Compliance: 99.8%</text>
    <text x="420" y="272" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10">✓ 420 Help Center Articles</text>
    <text x="420" y="294" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">✓ Multi-Language Translation</text>
  </g>
""")

# 21. Business Automation Platform
files["svc_business_automation.svg"] = wrap_svg(make_header("BUSINESS AUTOMATION & WORKFLOWS", "Automation Engine") + """
  <!-- Top Stat Cards -->
  <g transform="translate(70, 95)">
    <rect width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="12" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Active Workflows</text>
    <text x="12" y="52" fill="#ffffff" font-family="Inter, sans-serif" font-size="18" font-weight="700">186 Flows</text>

    <rect x="165" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="177" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Executions (24h)</text>
    <text x="177" y="52" fill="#38bdf8" font-family="Inter, sans-serif" font-size="18" font-weight="700">1.28M Runs</text>

    <rect x="330" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="342" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Success Rate</text>
    <text x="342" y="52" fill="#10b981" font-family="Inter, sans-serif" font-size="18" font-weight="700">99.98%</text>

    <rect x="495" width="165" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="507" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Hours Saved / Mo</text>
    <text x="507" y="52" fill="#ffffff" font-family="Inter, sans-serif" font-size="18" font-weight="700">4,620 Hrs</text>
  </g>

  <!-- Visual Workflow Diagram -->
  <g transform="translate(70, 180)">
    <rect width="660" height="355" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="20" y="28" fill="#ffffff" font-family="Inter, sans-serif" font-size="13" font-weight="700">Visual Trigger &amp; Action Flow Builder</text>

    <!-- Node 1: Trigger -->
    <rect x="25" y="50" width="130" height="85" rx="8" fill="#081432" stroke="#0284c7" stroke-width="1.5"/>
    <rect x="25" y="50" width="130" height="24" rx="8" fill="#0284c7"/>
    <text x="90" y="66" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="700" text-anchor="middle">1. TRIGGER</text>
    <text x="35" y="92" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="600">New Order Paid</text>
    <text x="35" y="112" fill="#38bdf8" font-family="Inter, sans-serif" font-size="9">Webhook • Instant</text>

    <!-- Connector 1 -->
    <path d="M 155 92 L 195 92" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,2"/>
    <polygon points="195,89 200,92 195,95" fill="#38bdf8"/>

    <!-- Node 2: AI Logic / Filter -->
    <rect x="200" y="50" width="130" height="85" rx="8" fill="#081432" stroke="#6366f1" stroke-width="1.5"/>
    <rect x="200" y="50" width="130" height="24" rx="8" fill="#6366f1"/>
    <text x="265" y="66" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="700" text-anchor="middle">2. AI PROCESSOR</text>
    <text x="210" y="92" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="600">Score &amp; Categorize</text>
    <text x="210" y="112" fill="#a78bfa" font-family="Inter, sans-serif" font-size="9">ML Fraud Filter</text>

    <!-- Connector 2 -->
    <path d="M 330 92 L 370 92" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,2"/>
    <polygon points="370,89 375,92 370,95" fill="#38bdf8"/>

    <!-- Node 3: Database & ERP Sync -->
    <rect x="375" y="50" width="130" height="85" rx="8" fill="#081432" stroke="#0ea5e9" stroke-width="1.5"/>
    <rect x="375" y="50" width="130" height="24" rx="8" fill="#0ea5e9"/>
    <text x="440" y="66" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="700" text-anchor="middle">3. ERP &amp; INVENTORY</text>
    <text x="385" y="92" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="600">Deduct Stock</text>
    <text x="385" y="112" fill="#38bdf8" font-family="Inter, sans-serif" font-size="9">Auto Invoicing</text>

    <!-- Connector 3 -->
    <path d="M 505 92 L 545 92" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,2"/>
    <polygon points="545,89 550,92 545,95" fill="#38bdf8"/>

    <!-- Node 4: Notify Customer -->
    <rect x="550" y="50" width="90" height="85" rx="8" fill="#081432" stroke="#10b981" stroke-width="1.5"/>
    <rect x="550" y="50" width="90" height="24" rx="8" fill="#10b981"/>
    <text x="595" y="66" fill="#ffffff" font-family="Inter, sans-serif" font-size="10" font-weight="700" text-anchor="middle">4. NOTIFY</text>
    <text x="558" y="92" fill="#ffffff" font-family="Inter, sans-serif" font-size="9" font-weight="600">WhatsApp</text>
    <text x="558" y="112" fill="#10b981" font-family="Inter, sans-serif" font-size="9">Sent Confirmed</text>

    <!-- Bottom: Live Execution Stream -->
    <rect x="25" y="155" width="615" height="180" rx="8" fill="#081432"/>
    <text x="40" y="180" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="700">REAL-TIME AUTOMATION LOGS</text>

    <text x="40" y="210" fill="#10b981" font-family="Courier, monospace" font-size="10">[12:04:18] SUCCESS: Workflow #189 executed in 142ms • Invoice #INV-920 generated</text>
    <text x="40" y="235" fill="#10b981" font-family="Courier, monospace" font-size="10">[12:04:16] SUCCESS: WhatsApp dispatch triggered for order #ORD-48293</text>
    <text x="40" y="260" fill="#38bdf8" font-family="Courier, monospace" font-size="10">[12:04:11] INFO: Multi-brand analytics aggregated across 8 Facebook &amp; IG channels</text>
    <text x="40" y="285" fill="#10b981" font-family="Courier, monospace" font-size="10">[12:04:02] SUCCESS: Automated KYC risk score evaluated: PASS (Risk score 12/100)</text>
    <text x="40" y="310" fill="#a78bfa" font-family="Courier, monospace" font-size="10">[12:03:55] INFO: AI Voice Call completed (Duration: 3m 12s, Lead status: HOT)</text>
  </g>
""")

# 22. Custom SaaS Platforms
files["svc_custom_saas.svg"] = wrap_svg(make_header("CUSTOM ENTERPRISE SAAS PLATFORMS", "Cloud Architecture") + """
  <!-- Top Stat Cards -->
  <g transform="translate(70, 95)">
    <rect width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="12" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Cloud Uptime SLA</text>
    <text x="12" y="52" fill="#10b981" font-family="Inter, sans-serif" font-size="18" font-weight="700">99.99%</text>

    <rect x="165" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="177" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">API Latency</text>
    <text x="177" y="52" fill="#38bdf8" font-family="Inter, sans-serif" font-size="18" font-weight="700">22 ms</text>

    <rect x="330" width="150" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="342" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Multi-Tenant Clusters</text>
    <text x="342" y="52" fill="#ffffff" font-family="Inter, sans-serif" font-size="18" font-weight="700">64 Nodes</text>

    <rect x="495" width="165" height="70" rx="8" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="507" y="25" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Security Grade</text>
    <text x="507" y="52" fill="#10b981" font-family="Inter, sans-serif" font-size="18" font-weight="700">SOC2 / ISO</text>
  </g>

  <!-- Architecture Overview & Microservices -->
  <g transform="translate(70, 180)">
    <rect width="660" height="355" rx="10" fill="url(#cardGrad)" stroke="#1e3a8a" stroke-width="1"/>
    <text x="20" y="28" fill="#ffffff" font-family="Inter, sans-serif" font-size="13" font-weight="700">High-Availability Cloud Microservices Architecture</text>

    <!-- Cloud Nodes Row -->
    <rect x="25" y="45" width="145" height="120" rx="8" fill="#081432" stroke="#0284c7" stroke-width="1"/>
    <text x="35" y="68" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="700">API Gateway &amp; CDN</text>
    <text x="35" y="90" fill="#ffffff" font-family="Inter, sans-serif" font-size="12">Global Edge</text>
    <text x="35" y="110" fill="#94a3b8" font-family="Inter, sans-serif" font-size="9">Rate Limiting &amp; WAF</text>
    <rect x="35" y="125" width="80" height="18" rx="4" fill="#10b981" fill-opacity="0.2"/>
    <text x="75" y="138" fill="#10b981" font-family="Inter, sans-serif" font-size="8" font-weight="700" text-anchor="middle">ACTIVE</text>

    <rect x="190" y="45" width="145" height="120" rx="8" fill="#081432" stroke="#0284c7" stroke-width="1"/>
    <text x="200" y="68" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="700">Auth &amp; Multi-Tenancy</text>
    <text x="200" y="90" fill="#ffffff" font-family="Inter, sans-serif" font-size="12">Tenant Isolation</text>
    <text x="200" y="110" fill="#94a3b8" font-family="Inter, sans-serif" font-size="9">Role-Based Access (RBAC)</text>
    <rect x="200" y="125" width="80" height="18" rx="4" fill="#10b981" fill-opacity="0.2"/>
    <text x="240" y="138" fill="#10b981" font-family="Inter, sans-serif" font-size="8" font-weight="700" text-anchor="middle">ACTIVE</text>

    <rect x="355" y="45" width="145" height="120" rx="8" fill="#081432" stroke="#0284c7" stroke-width="1"/>
    <text x="365" y="68" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="700">Core Business Logic</text>
    <text x="365" y="90" fill="#ffffff" font-family="Inter, sans-serif" font-size="12">Microservices</text>
    <text x="365" y="110" fill="#94a3b8" font-family="Inter, sans-serif" font-size="9">Auto-scaling Pods</text>
    <rect x="365" y="125" width="80" height="18" rx="4" fill="#10b981" fill-opacity="0.2"/>
    <text x="405" y="138" fill="#10b981" font-family="Inter, sans-serif" font-size="8" font-weight="700" text-anchor="middle">ACTIVE</text>

    <rect x="520" y="45" width="115" height="120" rx="8" fill="#081432" stroke="#0284c7" stroke-width="1"/>
    <text x="530" y="68" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="700">Database Layer</text>
    <text x="530" y="90" fill="#ffffff" font-family="Inter, sans-serif" font-size="12">Postgres &amp; Redis</text>
    <text x="530" y="110" fill="#94a3b8" font-family="Inter, sans-serif" font-size="9">Read Replicas</text>
    <rect x="530" y="125" width="70" height="18" rx="4" fill="#10b981" fill-opacity="0.2"/>
    <text x="565" y="138" fill="#10b981" font-family="Inter, sans-serif" font-size="8" font-weight="700" text-anchor="middle">HEALTHY</text>

    <!-- Bottom: Tenant Analytics & Telemetry -->
    <rect x="25" y="180" width="610" height="155" rx="8" fill="#081432"/>
    <text x="40" y="205" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="700">Real-Time Cloud Telemetry</text>

    <text x="40" y="235" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">CPU Load (Kubernetes Cluster)</text>
    <rect x="40" y="245" width="260" height="8" rx="4" fill="#1e293b"/>
    <rect x="40" y="245" width="90" height="8" rx="4" fill="url(#cyanGrad)"/>
    <text x="310" y="253" fill="#38bdf8" font-family="Inter, sans-serif" font-size="10" font-weight="700">34%</text>

    <text x="40" y="280" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Global Database Replication Lag</text>
    <rect x="40" y="290" width="260" height="8" rx="4" fill="#1e293b"/>
    <rect x="40" y="290" width="30" height="8" rx="4" fill="url(#greenGrad)"/>
    <text x="310" y="298" fill="#10b981" font-family="Inter, sans-serif" font-size="10" font-weight="700">4 ms</text>

    <rect x="360" y="215" width="255" height="100" rx="6" fill="#0c1e4a"/>
    <text x="375" y="240" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="700">Enterprise Security Stack</text>
    <text x="375" y="262" fill="#10b981" font-family="Inter, sans-serif" font-size="10">✓ End-to-end AES-256 Encryption</text>
    <text x="375" y="282" fill="#10b981" font-family="Inter, sans-serif" font-size="10">✓ Automated CI/CD Deployment</text>
    <text x="375" y="302" fill="#10b981" font-family="Inter, sans-serif" font-size="10">✓ Custom White-label Domains</text>
  </g>
""")

for filename, content in files.items():
    path = os.path.join(output_dir, filename)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated {filename}")

print("All 11 SVGs generated successfully!")
