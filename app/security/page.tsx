import type { Metadata } from 'next';
import styles from './security.module.css';

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '/talunza-technical-services-web';
const contact = 'https://wa.me/263777323918?text=' + encodeURIComponent('Hello TALUNZA Security. I need a security site assessment. My general area is: ____. Property type: ____. I am interested in: ____. Please advise on the next steps.');

export const metadata: Metadata = {
  title: 'TALUNZA Security | Perimeter, CCTV, Smart Protection & Reliable Power',
  description: 'Security assessments and coordinated installations for homes, farms, shops and industrial properties: electric fencing, CCTV, alarms, access control, solar backup, networking and thoughtful intelligent upgrades. Chiredzi and the Lowveld.',
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
    label: '01 / PERIMETER',
    title: 'Fencing, gates & physical security',
    description: 'Electric fencing, fence alarms, mesh and razor-wire barriers, security gates, steel protection and maintenance. Specialist work is scheduled subject to qualified technician availability.',
    examples: ['Electric fences & energizers', 'Security fencing & razor wire', 'Gate and perimeter sensors', 'Fabricated guards & enclosures'],
  },
  {
    label: '02 / VIDEO',
    title: 'CCTV & surveillance',
    description: 'Camera installation, repair, recording, appropriate night viewing and secure owner access. Compatible devices can be assessed for local AI-assisted event detection.',
    examples: ['Indoor/outdoor IP cameras', 'Network recorders & storage', 'Secure remote viewing', 'Device-health checks'],
  },
  {
    label: '03 / ACCESS',
    title: 'Access control & entry',
    description: 'Intercoms, video doorbells, controlled doors and gates, visitor access and mechanical/electronic protection designed with safe emergency egress.',
    examples: ['Gate motors & intercoms', 'Door access systems', 'Visitor credentials', 'Safe manual overrides'],
  },
  {
    label: '04 / ALARMS',
    title: 'Intrusion & hazard detection',
    description: 'Burglar alarms, panic devices and compatible sensors; specialist fire, smoke, gas or water-leak detection where qualified support and suitable approvals are available.',
    examples: ['Intrusion sensors & beams', 'Local sirens & alerts', 'Tamper detection', 'Specialist hazard warnings'],
  },
  {
    label: '05 / OFF-GRID',
    title: 'Solar-backed & remote security',
    description: 'Power and connectivity designed around rural conditions, unreliable mains, farm boundaries, pumps, stores and remote sites. Local safety functions take priority over the internet.',
    examples: ['Solar and battery backup', 'Camera/recorder power plans', '4G, Starlink & network links', 'Remote status sensors'],
  },
  {
    label: '06 / DIGITAL',
    title: 'Secure networks & maintenance',
    description: 'Device inventory, safer camera networking, supported software updates, access management, fault finding and evidence-led system handover.',
    examples: ['Protected CCTV networks', 'Router & Wi-Fi security', 'Technical fault diagnosis', 'Maintenance and support'],
  },
];

const innovations = [
  ['Fence-to-Camera Intelligence', 'Correlate a compatible fence alarm zone with relevant camera footage and device status.'],
  ['Offline Guardian', 'Keep independent local alarms and recording available without internet; sync eligible records later.'],
  ['AI Incident Brief', 'Summarise verified device events and reviewed evidence without guessing identities or declaring guilt.'],
  ['Site Pulse', 'Detect recorder, power, network and sensor failures before a faulty device goes unnoticed.'],
  ['Farm Guardian', 'Connect appropriate remote farm sensors and security zones through compatible gateways.'],
  ['Evidence Vault', 'Protect incident records with authorised access, timestamps, integrity checks and retention controls.'],
  ['Multi-Site Command', 'Give authorised owners a joined-up view of multiple properties while separating each customer’s data.'],
  ['Technician Copilot', 'Create structured inspection records, test results and maintenance follow-ups.'],
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
      <header className={styles.header}>
        <a href={base + '/'} className={styles.brand} aria-label="TALUNZA Technical Services">
          <img src={base + '/talunza-logo.svg'} alt="TALUNZA" />
          <span>SECURITY</span>
        </a>
        <nav aria-label="Security page navigation" className={styles.nav}>
          <a href="#solutions">Solutions</a>
          <a href="#intelligence">Intelligence</a>
          <a href="#approach">Our approach</a>
          <a className={styles.navAction} href={contact}>Request assessment</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>TALUNZA SECURITY · CHIREDZI & LOWVELD</p>
          <h1>Secure the boundary.<br /><span>Understand the event.</span><br />Keep the system working.</h1>
          <p className={styles.lead}>Physical protection, electric fencing, CCTV, alarms, access control, reliable power and connected technology—designed as one sensible security system for your property.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href={contact}>Request a security assessment</a>
            <a className={styles.ghost} href="#solutions">Explore security solutions</a>
          </div>
          <div className={styles.trust} aria-label="Our focus">
            <span>Physical + digital</span><span>Lowveld-first</span><span>Site-specific design</span><span>Verified handover</span>
          </div>
        </div>
        <div className={styles.heroPanel} aria-label="Integrated security layers">
          <p className={styles.panelEyebrow}>INTEGRATED BY DESIGN</p>
          <ol>
            <li><span>01</span><div><strong>Protect</strong><small>Fences, barriers, access</small></div></li>
            <li><span>02</span><div><strong>Detect</strong><small>Cameras, alarms, sensors</small></div></li>
            <li><span>03</span><div><strong>Verify</strong><small>Relevant evidence, review</small></div></li>
            <li><span>04</span><div><strong>Recover</strong><small>Power, connectivity, maintenance</small></div></li>
          </ol>
          <p className={styles.panelFoot}>Compatible systems can be integrated following assessment and testing.</p>
        </div>
      </section>

      <section className={styles.section} id="solutions">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>COMPLETE SECURITY SOLUTIONS</p>
          <h2>Not just a camera. Not just a fence.</h2>
          <p>Choose what your property actually needs. TALUNZA coordinates the customer journey and engages qualified specialists for work requiring their skills.</p>
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

      <section className={styles.darkSection} id="intelligence">
        <div className={styles.sectionHeading}>
          <p className={styles.kickerLight}>INTELLIGENT UPGRADES · DEVELOPMENT ROADMAP</p>
          <h2>Security that can explain what happened.</h2>
          <p>These are advanced TALUNZA Security concepts being evaluated for compatible equipment—not a claim that a live AI monitoring platform or staffed response service already exists.</p>
        </div>
        <div className={styles.intelligenceGrid}>
          {innovations.map(([name, description]) => (
            <article className={styles.innovation} key={name}><span aria-hidden="true">✦</span><h3>{name}</h3><p>{description}</p></article>
          ))}
        </div>
        <div className={styles.boundary}>Design principle: alarms and recording must work locally wherever practical. AI assists human judgement; it must not autonomously unlock gates, disable fences or call emergency services.</div>
      </section>

      <section className={styles.section} id="approach">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>HOW WE WORK</p>
          <h2>One customer route. The right specialist for the job.</h2>
          <p>We start with the property and risk, not a fixed equipment bundle. Installation scheduling depends on confirmed technician and equipment availability.</p>
        </div>
        <div className={styles.steps}>
          {steps.map(([name, description], index) => <article key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{description}</p></article>)}
        </div>
        <div className={styles.note}>
          <strong>Safety, privacy and honest availability matter.</strong>
          <p>Electric-fence and electrical work must meet applicable rules and competent installation requirements. CCTV and remote access require permission, protected credentials, sensible retention and privacy safeguards. TALUNZA does not advertise a staffed 24-hour response or guarding service at this stage.</p>
        </div>
      </section>

      <section className={styles.footerCta} id="contact">
        <div><p className={styles.eyebrow}>HOMES · SHOPS · FARMS · INDUSTRIAL SITES</p><h2>Tell us what you need to protect.</h2><p>Share your general area and desired outcome. We can discuss an assessment and the right mix of security, power and connectivity.</p></div>
        <div className={styles.finalActions}><a className={styles.primary} href={contact}>WhatsApp TALUNZA Security</a><a className={styles.ghost} href="tel:+263777323918">Call 0777 323 918</a></div>
      </section>
      <footer className={styles.footer}><span>TALUNZA Security · A TALUNZA Technical Services sector</span><a href={base + '/'}>Technical Services home</a><span>Chiredzi & Lowveld · Zimbabwe</span></footer>
    </main>
  );
}
