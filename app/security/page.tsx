import type { Metadata } from 'next';
import styles from './security.module.css';
import SecurityBlueprintBuilder from './SecurityBlueprintBuilder';

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '/talunza-technical-services-web';
const contact = 'https://wa.me/263777323918?text=' + encodeURIComponent('Hello TALUNZA Security. I need a security site assessment. My general area is: ____. Property type: ____. I am interested in: ____. Please advise on the next steps.');

export const metadata: Metadata = {
  title: 'TALUNZA Security | Complete Security Solutions & Smart Protection Vision',
  description: 'TALUNZA Security end-state: physical protection, CCTV, access, alarms, resilient power, connectivity, cyber protection, farms and next-generation local-first intelligent features. Request a site assessment in Chiredzi and the Lowveld.',
  alternates: { canonical: 'https://talunza.co.zw/technical/security/' },
  openGraph: {
    title: 'TALUNZA Security | Integrated Property Protection',
    description: 'Physical security meets practical engineering, connectivity and intelligent technology. Enquire about a site-specific assessment.',
    url: 'https://talunza.co.zw/technical/security/',
    type: 'website',
  },
};

const offerings = [
  {
    "label": "01 / PHYSICAL PROTECTION",
    "title": "Perimeter fencing & barriers",
    "description": "Electric fencing, energizers, safe barriers, steelwork and protected property boundaries—designed around the terrain and safety requirements.",
    "examples": [
      "Electric fences and alarms",
      "Mesh, palisade, razor and barbed wire",
      "Security gates, guards and enclosures",
      "Repairs and fence inspections"
    ]
  },
  {
    "label": "02 / SMART SURVEILLANCE",
    "title": "CCTV, video & recording",
    "description": "Camera and recorder designs for usable evidence, sensible blind-spot coverage, night conditions and secure authorised viewing.",
    "examples": [
      "IP/PoE, dome and bullet cameras",
      "Night vision and suitable thermal options",
      "NVR, storage and evidence retention",
      "Local-first recording and supported analytics"
    ]
  },
  {
    "label": "03 / ALARMS & DETECTION",
    "title": "Intrusion, panic & tamper alarms",
    "description": "Layered detection using suitable wired or wireless devices, local sounders and conditional notifications without relying on the cloud for basic protection.",
    "examples": [
      "Door/window and motion sensors",
      "Fence zones, perimeter beams and tamper inputs",
      "Panic and duress devices",
      "Local alarms and fault diagnosis"
    ]
  },
  {
    "label": "04 / CONTROLLED ENTRY",
    "title": "Gates, doors & visitor access",
    "description": "Access hardware and credentials suited to the property, with emergency exit, anti-entrapment and manual-override requirements built into the design.",
    "examples": [
      "Gate motors and intercoms",
      "Smart locks and credentials where appropriate",
      "Video entry and visitor workflow concepts",
      "Controlled staff and contractor access"
    ]
  },
  {
    "label": "05 / RELIABLE POWER",
    "title": "Solar & resilient security power",
    "description": "Energy design across cameras, fencing, communications and recorders, including battery autonomy, electrical protection and safe operating modes.",
    "examples": [
      "Solar and battery-backed systems",
      "Power budgets for cameras and recorders",
      "Surge, protection and earthing assessment",
      "Device-health and backup warnings"
    ]
  },
  {
    "label": "06 / SECURE CONNECTIVITY",
    "title": "Network, Wi-Fi & remote links",
    "description": "Secure wired and wireless networks that connect the right devices without exposing camera feeds and access controllers openly to the internet.",
    "examples": [
      "Protected PoE and network cabling",
      "Starlink, fibre and cellular options",
      "Wireless bridges and rural site links",
      "Network segmentation and access controls"
    ]
  },
  {
    "label": "07 / FARM & RURAL",
    "title": "Farm, plot & remote infrastructure security",
    "description": "Land, pumps, boreholes, equipment, stores and distant gates require different power, communications and sensing strategies from city homes.",
    "examples": [
      "Remote gate and equipment alarms",
      "Long-range status sensors where feasible",
      "Solar camera and gateway sites",
      "Multi-zone farm security planning"
    ]
  },
  {
    "label": "08 / INDUSTRIAL",
    "title": "Warehouses, factories & site protection",
    "description": "Security zones for material stores, workshops, operating sites and loading areas, with safety controls and maintainable installation layouts.",
    "examples": [
      "Perimeter and vehicle gate plans",
      "Loading-bay and storage surveillance",
      "Equipment and enclosure tamper signals",
      "Inspection, handover and repairs"
    ]
  },
  {
    "label": "09 / SAFETY & ENVIRONMENT",
    "title": "Fire, water, gas & equipment warnings",
    "description": "Appropriately qualified specialists can integrate compatible safety alerts with broader property operations without presenting an ordinary burglar alarm as a certified fire system.",
    "examples": [
      "Smoke and fire detection via specialists",
      "Water leaks and flooding warnings",
      "Gas and environmental sensors",
      "Safe separation of life-safety systems"
    ]
  },
  {
    "label": "10 / NETWORK DEFENCE",
    "title": "Cybersecurity & privacy",
    "description": "Protect customer systems against weak passwords, exposed cameras and insecure networks through practical configuration, access review and recovery preparation.",
    "examples": [
      "Strong authentication and device inventory",
      "Firewall and VLAN planning",
      "Patch/firmware and backup review",
      "Privacy zones and authorised access"
    ]
  },
  {
    "label": "11 / MOVING ASSETS",
    "title": "Vehicle, fleet & mobile-asset protection",
    "description": "Optional physical and digital protection of authorised vehicles, trailers or equipment, coordinated with TALUNZA Track when lawful and technically justified.",
    "examples": [
      "Authorised trackers and equipment alarms",
      "Vehicle power and tamper considerations",
      "Fleet or asset event review concepts",
      "No covert or non-consensual tracking"
    ]
  },
  {
    "label": "12 / SERVICE & SUPPORT",
    "title": "Survey, installation & ongoing care",
    "description": "A single TALUNZA route for site assessment, equipment selection, qualified specialist assignments, verification, repairs and maintenance records.",
    "examples": [
      "Problem-first site security assessment",
      "Customer-approved installation scope",
      "Proof-of-work and test handover",
      "Servicing, diagnostics and upgrades"
    ]
  }
];

const innovations = [
  [
    "Guardian Correlation",
    "Connect compatible fence-zone, sensor, camera, network and power events into a single attributable incident timeline."
  ],
  [
    "AI Incident Brief",
    "Summarise reviewed evidence, timestamps and uncertainty for an authorised owner; never invent a person or conclude guilt."
  ],
  [
    "Offline Guardian",
    "Keep supported alarms and local recording operating independently of internet; queue records for later authorised sync."
  ],
  [
    "Site Pulse",
    "Watch supported camera, recorder, disk, battery, gateway and network heartbeats. A missing heartbeat can itself mean a device needs inspection."
  ],
  [
    "Farm Guardian",
    "Combine remote gate, pump, shed, perimeter and battery telemetry across large properties where technically feasible."
  ],
  [
    "Evidence Vault",
    "Secure incident evidence using role controls, integrity records, retention rules and auditable access."
  ],
  [
    "Multi-Site Command",
    "Provide permitted owners a combined view of shops, homes, farms or commercial properties with strong site separation."
  ],
  [
    "Security Digital Twin",
    "Maintain a private, restricted site diagram of security zones, power dependencies, maintenance and device status."
  ],
  [
    "Predictive Maintenance",
    "Spot repeated device faults and deterioration trends from actual field evidence, not speculative AI certainty."
  ],
  [
    "Smart Verification",
    "Corroborate independent camera and sensor signals when compatible, and prioritise uncertain incidents for human review rather than relying on a single trigger."
  ],
  [
    "Privacy-Safe Review",
    "Use purpose-bound recording, restricted viewing, relevant privacy zones and redaction where appropriate."
  ],
  [
    "Adaptive Communications",
    "Design approved fallback paths over independent links while showing when remote access really is unavailable."
  ],
  [
    "Safe Deterrence",
    "Coordinate permitted local lights or sirens through deterministic rules and electrical/safety interlocks."
  ],
  [
    "Guardian Timeline",
    "Bring verified security, access, equipment, power and network events into a searchable history."
  ],
  [
    "Technician Copilot",
    "Guide approved inspections and service handovers with recorded measurements, manufacturer evidence and checklists."
  ],
  [
    "Incident Drill Simulator",
    "Test disconnections and alarm/event workflows safely in simulation before relying on a live installation."
  ],
  [
    "Human Escalation & Acknowledgement",
    "Route verified incidents to agreed authorised contacts or properly licensed response providers; record acknowledgment, action and close-out without promising instant dispatch."
  ],
  [
    "Authorised Sale-to-Camera Bookmark",
    "Link a permitted Business transaction timestamp to the corresponding camera interval for later investigation, without copying cash records or videos between systems."
  ],
  [
    "False-Alarm Learning",
    "Record reviewed reasons such as animal, weather, worker, test or device fault to improve deterministic settings and reduce costly unnecessary call-outs."
  ],
  [
    "Regulated Aerial Observation",
    "Explore optional drone-assisted site observation only under applicable aviation permits, approved operators, privacy safeguards and safe operating conditions."
  ]
];

const environments = [
  {
    "type": "Homes & families",
    "goal": "Comfortable everyday protection",
    "plan": "Perimeter, appropriate cameras, secure visitor entry, local alarms and backup that work without constant internet."
  },
  {
    "type": "Shops & offices",
    "goal": "Protect stock and daily operations",
    "plan": "Entrances, stock areas, recording, staff access and incident evidence with privacy-conscious retention."
  },
  {
    "type": "Farms & remote sites",
    "goal": "Protect widely separated assets",
    "plan": "Fence zones, remote pumps and stores, long-range low-power sensors, solar-backed gateways and safe alerting."
  },
  {
    "type": "Schools & institutions",
    "goal": "Safe access and safeguarding",
    "plan": "Appropriate gates, visitor control and monitored common areas with strict privacy and child-protection limits."
  },
  {
    "type": "Industrial & warehouses",
    "goal": "Layered site and asset security",
    "plan": "Perimeter, loading points, access zones, incident reporting, independent power and asset maintenance."
  },
  {
    "type": "Lodges & hospitality",
    "goal": "Protect property without intruding on guests",
    "plan": "Reception and common-area security, useful lighting, secure access, device health and guest privacy."
  }
];

const layerSteps = [
  [
    "Protect",
    "Physical barriers, wiring and site layout"
  ],
  [
    "Detect",
    "Approved alarms, sensors and cameras"
  ],
  [
    "Verify",
    "Recorded evidence and human review"
  ],
  [
    "Notify",
    "Local alerts and available communications"
  ],
  [
    "Respond",
    "Authorised people and agreed procedures"
  ],
  [
    "Learn",
    "Maintenance, testing and better design"
  ]
];

const steps = [
  ['Understand', 'Tell us the property type, general area and main concern. Do not send access codes or passwords.'],
  ['Assess', 'We inspect practical risks, power, connectivity, access points and relevant existing equipment.'],
  ['Design & quote', 'We recommend an appropriately scoped combination of hardware, qualified installation and optional technology.'],
  ['Install & verify', 'A suitable technician performs the agreed work and documents tests, safe handover and support responsibilities.'],
];

export default function SecurityPage() {
  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#solutions">Skip to security solutions</a>
      <header className={styles.header}>
        <a href={base + '/'} className={styles.brand} aria-label="TALUNZA Technical Services">
          <img src={base + '/talunza-logo.svg'} alt="TALUNZA" />
          <span>SECURITY</span>
        </a>
        <nav aria-label="Security page navigation" className={styles.nav}>
          <a href="#solutions">Solutions</a>
          <a href="#blueprint">Build a concept</a>
          <a href="#vision">End-state</a>
          <a href="#approach">Our approach</a>
          <a className={styles.navAction} href={contact} aria-label="Request a TALUNZA Security assessment">Get help</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>TALUNZA SECURITY · CHIREDZI & LOWVELD</p>
          <h1>Protect what matters.<br /><span>Connect every layer.</span><br />Build for tomorrow.</h1>
          <p className={styles.lead}>A complete TALUNZA Security offering: fencing, cameras, alarms, access, solar power, networking, cybersecurity, rural protection and a clearly labelled future intelligent platform. Every project is scoped and verified.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href={contact}>Request a security assessment</a>
            <a className={styles.ghost} href="#solutions">Explore security solutions</a>
          </div>
          <div className={styles.trust} aria-label="Our focus">
            <span>Complete end-state vision</span><span>Lowveld-first</span><span>Local-first by design</span><span>Site-specific assessment</span>
          </div>
        </div>
        <div className={styles.heroPanel} aria-label="Integrated security layers">
          <p className={styles.panelEyebrow}>THE TALUNZA SECURITY MODEL</p>
          <ol>
            <li><span>01</span><div><strong>Protect</strong><small>Fences, barriers, access</small></div></li>
            <li><span>02</span><div><strong>Detect</strong><small>Cameras, alarms, sensors</small></div></li>
            <li><span>03</span><div><strong>Verify</strong><small>Relevant evidence, review</small></div></li>
            <li><span>04</span><div><strong>Recover</strong><small>Power, connectivity, maintenance</small></div></li>
          </ol>
          <p className={styles.panelFoot}>We publish the full intended capability so customers can plan ambitious projects. Every actual delivery depends on site assessment, compatible hardware, qualified people and verification.</p>
        </div>
      </section>

      <nav className={styles.quickNav} aria-label="Jump to Security sections">
        <a href="#solutions">All services</a>
        <a href="#blueprint">Free blueprint</a>
        <a href="#environments">Property types</a>
        <a href="#vision">Intelligent future</a>
        <a href="#ecosystem">TALUNZA ecosystem</a>
        <a href="#aftercare">Aftercare</a>
        <a href="#approach">How it works</a>
        <a href="#questions">FAQs</a>
      </nav>

      <section className={styles.section} id="solutions">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>COMPLETE SECURITY SOLUTIONS</p>
          <h2>One complete security company. Many connected capabilities.</h2>
          <p>This is the complete range TALUNZA Security is positioning itself to deliver or integrate. Ask about any capability; the actual project scope and specialist availability are confirmed individually.</p>
        </div>
        <div className={styles.grid}>
          {offerings.map((item) => (
            <article className={styles.serviceCard} key={item.title}>
              <p className={styles.cardLabel}>{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>{item.examples.map((example) => <li key={example}>{example}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="blueprint">
        <SecurityBlueprintBuilder />
      </section>

      <section className={styles.section} id="environments">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>DESIGNED FOR REAL PROPERTIES</p>
          <h2>Different environments. One connected approach.</h2>
          <p>These are examples of how an integrated TALUNZA Security design can fit a customer's property—not pre-installed packages or guaranteed hardware configurations.</p>
        </div>
        <div className={styles.environmentGrid}>
          {environments.map((item) => (
            <article className={styles.environmentCard} key={item.type}>
              <p className={styles.cardLabel}>{item.type}</p><h3>{item.goal}</h3><p>{item.plan}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.flowBand} aria-label="TALUNZA integrated security method">
        <p className={styles.kickerLight}>THE INTELLIGENCE & EXECUTION LOOP</p>
        <h2>From a boundary alarm to a useful decision.</h2>
        <ol className={styles.layerFlow}>
          {layerSteps.map(([title,copy],index) => (
            <li key={title}><span>{String(index+1).padStart(2,'0')}</span><strong>{title}</strong><small>{copy}</small></li>
          ))}
        </ol>
        <p>Local alarm and recording remain the first line of defence. Cloud visibility and intelligent insights are enhancements only when the equipment, network and permissions support them.</p>
      </section>

      <section className={styles.darkSection} id="vision">
        <div className={styles.sectionHeading}>
          <p className={styles.kickerLight}>OUR END-STATE INTELLIGENT CAPABILITIES</p>
          <h2>The next level: security that connects, verifies and learns.</h2>
          <p>Our long-term product vision includes these advanced tools. They are design and development targets, not a claim of an existing deployed AI control centre, automatic police dispatch or always-staffed monitoring. Hardware compatibility and site testing determine what can actually be delivered.</p>
        </div>
        <div className={styles.intelligenceGrid}>
          {innovations.map(([name, description]) => (
            <article className={styles.innovation} key={name}><span aria-hidden="true">✦</span><h3>{name}</h3><p>{description}</p></article>
          ))}
        </div>
        <div className={styles.boundary}>End-state, not fiction: the roadmap can be shown publicly today, but a feature becomes an operational promise only after it is installed, tested and supported. AI must not autonomously unlock gates, disable fences or dispatch emergency services.</div>
      </section>

      <section className={styles.section} id="ecosystem">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>ONE TALUNZA ECOSYSTEM</p>
          <h2>Engineering, connectivity and software in one job.</h2>
          <p>The end state integrates complementary TALUNZA capabilities without forcing customers to manage disconnected contractors, dashboards or records.</p>
        </div>
        <div className={styles.ecosystemGrid}>
          <article><strong>TALUNZA Energy</strong><span>Solar, batteries and reliable safety-critical power</span></article>
          <article><strong>TALUNZA Connect</strong><span>Wi-Fi, cellular/Starlink networking and remote connectivity</span></article>
          <article><strong>TALUNZA Forge</strong><span>Gates, camera supports, frames and protected equipment cabinets</span></article>
          <article><strong>TALUNZA Works</strong><span>Authorised jobs, specialist assignment, quality checks and maintenance</span></article>
          <article><strong>TALUNZA Capture</strong><span>Controlled inspection evidence, fault documentation and handovers</span></article>
          <article><strong>TALUNZA Track / FarmOps</strong><span>Relevant owner-approved mobile assets and farm infrastructure context</span></article>
          <article><strong>TALUNZA Living</strong><span>Owner-approved smart-home, property access and household technology retrofits with safe manual control</span></article>
          <article><strong>TALUNZA Business</strong><span>Permissioned transaction timestamps for security incident evidence, without copying the financial ledger</span></article>
          <article><strong>TALUNZA Academy</strong><span>Technician learning and verified field practice; not automatic accreditation or regulated-work certification</span></article>
        </div>
      </section>

      <section className={styles.section} id="aftercare">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>TALUNZA CARE · THE NEXT CHAPTER</p>
          <h2>Protection should not end when installation is finished.</h2>
          <p>Our proposed cross-sector service lifecycle connects safe commissioning, installed-equipment records, repairs and planned maintenance. It builds on the existing TALUNZA Field ServiceCare prototype rather than creating a separate security maintenance platform.</p>
        </div>
        <div className={styles.environmentGrid}>
          <article className={styles.environmentCard}>
            <p className={styles.cardLabel}>01 / DOCUMENT</p>
            <h3>Know what was installed.</h3>
            <p>With owner permission, retain applicable equipment identity, approved installation scope, relevant test results and warranty or service responsibility in the authorised system.</p>
          </article>
          <article className={styles.environmentCard}>
            <p className={styles.cardLabel}>02 / MAINTAIN</p>
            <h3>Plan inspections and repairs.</h3>
            <p>A technician can review a real asset's maintenance history and propose follow-up work. Due dates must come from verified evidence or be labelled unknown.</p>
          </article>
          <article className={styles.environmentCard}>
            <p className={styles.cardLabel}>03 / IMPROVE</p>
            <h3>Learn from actual failures.</h3>
            <p>Record accepted fault causes, approved repairs and handover outcomes so future upgrades can be better informed. AI suggestions never certify physical safety.</p>
          </article>
        </div>
        <div className={styles.note}>
          <strong>End-state integration, not an active subscription promise.</strong>
          <p>Works remains responsible for jobs and maintenance approvals; Field ServiceCare provides a limited draft-planning prototype; Capture holds authorised source evidence and Business records financial truth. No automated reminders, guaranteed uptime or unattended monitoring are claimed operational here.</p>
        </div>
      </section>

      <section className={styles.statusBand}>
        <div><p className={styles.kickerLight}>CLEAR DELIVERY STATUS</p><h2>Explore the full vision today. Confirm delivery before installation.</h2></div>
        <div className={styles.statusGrid}>
          <article><strong>Enquire now</strong><p>Ask about any security service, request a site assessment or use the free concept builder. Scope and specialist availability are confirmed for the job.</p></article>
          <article><strong>Assessed per project</strong><p>Fencing, CCTV, power, access, sensors and integrations are matched to qualified installation, manufacturer capability, safety and local conditions.</p></article>
          <article><strong>Under development</strong><p>Guardian AI, event correlation, remote multi-site command, predictive health and evidence intelligence require prototypes, testing, privacy controls and operating support.</p></article>
        </div>
      </section>

      <section className={styles.section} id="approach">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>HOW WE WORK</p>
          <h2>One TALUNZA customer route. Specialists where needed.</h2>
          <p>We receive the enquiry, define the problem, review the physical site and coordinate an approved scope with appropriately qualified personnel. No single technician is falsely promised for every trade.</p>
        </div>
        <div className={styles.steps}>
          {steps.map(([name, description], index) => <article key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{description}</p></article>)}
        </div>
        <div className={styles.note}>
          <strong>Safety, privacy and honest availability matter.</strong>
          <p>Electric-fence and electrical work must meet applicable rules and competent installation requirements. CCTV and remote access require permission, protected credentials, sensible retention and privacy safeguards. TALUNZA does not advertise a staffed 24-hour response or guarding service at this stage.</p>
        </div>
      </section>

      <section className={styles.section} id="questions" aria-labelledby="security-questions-title">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>PRACTICAL ANSWERS</p>
          <h2 id="security-questions-title">Before planning your security system.</h2>
          <p>Security is site-specific. These answers explain what works today, what depends on compatible equipment, and how TALUNZA treats your property information.</p>
        </div>
        <div className={styles.faqList}>
          <details>
            <summary>Will my security still work when internet access fails?</summary>
            <p>Properly designed local alarms, camera recorders and manual overrides can keep operating without internet, provided their local power and equipment are working. Remote viewing and cloud notifications cannot be guaranteed during an outage.</p>
          </details>
          <details>
            <summary>Can existing CCTV cameras and electric fences be connected?</summary>
            <p>Sometimes. We first check the specific controller, recorder, camera models, firmware and available interfaces. An existing device may support only some integrations, or none safely.</p>
          </details>
          <details>
            <summary>Can you arrange electric fencing or another specialist installation?</summary>
            <p>We assess the request and coordinate with appropriately qualified, available specialists for the agreed work. We do not promise any one person will be available for every project.</p>
          </details>
          <details>
            <summary>Are Guardian AI, remote monitoring and multi-site command available now?</summary>
            <p>These are part of the published TALUNZA Security end-state vision. Software and hardware capabilities are introduced only after development, testing, safety and privacy review. We do not currently claim a live AI security control centre.</p>
          </details>
          <details>
            <summary>Do you provide security guards or emergency response?</summary>
            <p>Not as an advertised operational service at this stage. Guarding, managed monitoring and formal emergency response require verified licences, trained personnel, agreements and appropriate response capacity.</p>
          </details>
          <details>
            <summary>How will security footage and private property details be handled?</summary>
            <p>Access should be limited to authorised people, with purpose-based recording, protected credentials and appropriate retention. We do not need camera passwords, precise security layouts or private footage in an initial public enquiry.</p>
          </details>
        </div>
      </section>

      <section className={styles.footerCta} id="contact">
        <div><p className={styles.eyebrow}>HOMES · SHOPS · FARMS · INDUSTRIAL SITES</p><h2>Tell us what you need to protect.</h2><p>Whether you need a simple fence repair or an ambitious connected security system, start with the outcome. We help shape the scope, confirm what can be delivered, and identify what requires further engineering.</p></div>
        <div className={styles.finalActions}><a className={styles.primary} href={contact}>WhatsApp TALUNZA Security</a><a className={styles.ghost} href="tel:+263777323918">Call 0777 323 918</a></div>
      </section>
      <footer className={styles.footer}><span>TALUNZA Security · A TALUNZA Technical Services sector</span><a href={base + '/'}>Technical Services home</a><span>Chiredzi & Lowveld · Zimbabwe</span></footer>
    </main>
  );
}
