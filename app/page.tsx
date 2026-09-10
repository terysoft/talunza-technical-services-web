const whatsappBase = 'https://wa.me/263777323918';
const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? '/talunza-technical-services-web';

const serviceGroups = [
  {
    kicker: 'POWER & ELECTRICAL',
    title: 'Electrical, solar & energy systems',
    copy: 'Fault finding, installation, repair and upgrade work for the electrical and energy systems that keep homes, farms and businesses running.',
    items: [
      'House tubing, wiring, DB work & maintenance',
      'Electrical fault finding & rectification',
      'Solar system installation & upgrades',
      'Solar pump installation & troubleshooting',
      'Inverters, batteries & charging systems',
      'Generators, solar generators & backup-power support',
    ],
  },
  {
    kicker: 'CONNECT & PROTECT',
    title: 'Security, networking & connectivity',
    copy: 'Practical systems that improve visibility, communication and dependable access across shops, homes, offices, farms and remote sites.',
    items: [
      'CCTV installation, repair & expansion',
      'Alarm systems & practical security integration',
      'Starlink installation & optimisation',
      'Wi-Fi coverage, access points & network setup',
      'Structured cabling, routers, switches & links',
      'Satellite TV installation & realignment',
    ],
  },
  {
    kicker: 'REPAIR & SUPPORT',
    title: 'Computers, electronics & appliances',
    copy: 'Diagnosis before replacement. We isolate faults, explain the practical options and repair where the repair makes technical and economic sense.',
    items: [
      'Computer diagnostics, repair & upgrades',
      'Windows recovery, storage & data migration support',
      'Inverter and electronic equipment diagnostics',
      'Refrigeration & domestic appliance support',
      'Small equipment troubleshooting',
      'Software installation & business-system support',
    ],
  },
  {
    kicker: 'MAKE & INSTALL',
    title: 'Talunza Forge fabrication',
    copy: 'Useful fabricated products and installation hardware built around real customer needs, not fabrication for its own sake.',
    items: [
      'Phone, tablet, creator & desk stands',
      'TV stands, mounts & equipment supports',
      'Steel furniture, shelving & workbenches',
      'Frames, brackets, guards & enclosures',
      'Battery and inverter housings',
      'Custom small systems and installation hardware',
    ],
  },
];

const process = [
  ['01', 'Send the problem', 'Share your location, symptoms, photos or video and the equipment make/model if known.'],
  ['02', 'We isolate the likely fault', 'We decide whether the job needs remote guidance, a workshop inspection, site fault-finding or a quotation visit.'],
  ['03', 'Approve the next step', 'You get a clear scope and expected cost before avoidable work or purchases are made.'],
  ['04', 'Repair, install or build', 'The work is completed, tested and handed over with practical operating guidance where useful.'],
];

const sectors = ['Homes', 'Shops & offices', 'Farms', 'Schools & churches', 'Workshops', 'Lodges & hospitality', 'Remote sites', 'Small industry'];
const areas = ['Chiredzi', 'Triangle', 'Hippo Valley', 'Mkwasine', 'Boli', 'Chingele', 'Ngundu', 'Rutenga'];
const equipment = ['Breakers & protection', 'Solar kits & components', 'Inverters & batteries', 'Starlink kits & accessories', 'Wi-Fi access points', 'Routers & switches', 'CCTV kits & cameras', 'Cables & installation accessories', 'Mounts & brackets', 'Phone & creator accessories'];

function wa(text: string) {
  return `${whatsappBase}?text=${encodeURIComponent(text)}`;
}

export default function HomePage() {
  const quoteUrl = wa('Hello Talunza. I need technical assistance. My location is: ____. The problem is: ____.');

  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Talunza Technical Services home">
          <img src={`${assetBase}/talunza-logo.svg`} alt="Talunza" />
          <span>Technical Services</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#process">How it works</a>
          <a href="#coverage">Coverage</a>
          <a href="#contact" className="navCta">Get help</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroGlow" aria-hidden="true" />
        <div className="heroGrid">
          <div className="heroCopyWrap">
            <p className="eyebrow">CHIREDZI · LOWVELD · FIELD & WORKSHOP SUPPORT</p>
            <h1>Technical problems solved properly.</h1>
            <p className="heroLine">Install. Repair. Connect. Protect. Make.</p>
            <p className="heroCopy">
              Talunza provides practical technical services for homes, businesses, farms and institutions — combining electrical, energy, connectivity, electronics, computer and fabrication capability under one accountable service route.
            </p>
            <div className="actions">
              <a className="primary" href={quoteUrl}>WhatsApp your problem</a>
              <a className="secondary" href="tel:+263777323918">Call 0777 323 918</a>
            </div>
            <div className="trustRow" aria-label="Service principles">
              <span>Diagnosis first</span><span>Clear scope</span><span>Practical repair</span><span>Measured handover</span>
            </div>
          </div>

          <aside className="heroPanel" aria-label="Common Talunza jobs">
            <p>COMMON CALL-OUTS</p>
            <div className="heroProblem"><strong>No power / tripping</strong><span>Electrical fault finding</span></div>
            <div className="heroProblem"><strong>Pump not running</strong><span>Solar, cable & pump diagnosis</span></div>
            <div className="heroProblem"><strong>Weak internet / Wi-Fi</strong><span>Starlink & network optimisation</span></div>
            <div className="heroProblem"><strong>Camera system offline</strong><span>CCTV diagnosis & repair</span></div>
            <div className="heroProblem"><strong>Computer not booting</strong><span>Repair, recovery & upgrade</span></div>
            <a href={quoteUrl}>Describe your fault →</a>
          </aside>
        </div>
      </section>

      <section className="signalBand" aria-label="Talunza technical service promise">
        <span>Observe the fault</span><i /> <span>Test the cause</span><i /> <span>Fix the right thing</span><i /> <span>Verify the result</span>
      </section>

      <section id="services" className="section servicesSection">
        <div className="sectionHead">
          <p className="eyebrow dark">WHAT WE DO</p>
          <h2>One technical team route. Multiple practical capabilities.</h2>
          <p>Start with the problem. We choose the correct combination of trade skill, equipment, software, fabrication or specialist support needed to solve it.</p>
        </div>

        <div className="serviceGrid">
          {serviceGroups.map((group) => (
            <article className="serviceCard" key={group.title}>
              <p className="cardKicker">{group.kicker}</p>
              <h3>{group.title}</h3>
              <p>{group.copy}</p>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <a href={wa(`Hello Talunza. I need help with ${group.title.toLowerCase()}. My location is: ____. The problem is: ____.`)}>Ask about this service →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section supplySection">
        <div className="supplyGrid">
          <div>
            <p className="eyebrow dark">EQUIPMENT & COMPONENTS</p>
            <h2>Supply matched to the job.</h2>
            <p>Where practical, Talunza can source or supply compatible equipment and installation components so the customer does not have to guess what fits the system.</p>
            <a className="textLink" href={wa('Hello Talunza. I need equipment or components. Item/system: ____. Quantity: ____. Location: ____.')}>Ask for equipment availability →</a>
          </div>
          <div className="chips equipmentChips">{equipment.map((x) => <span key={x}>{x}</span>)}</div>
        </div>
      </section>

      <section className="section darkSection">
        <div className="splitGrid">
          <div>
            <p className="eyebrow">WHY TALUNZA</p>
            <h2>We do not replace parts until we understand the fault.</h2>
          </div>
          <div className="principles">
            <article><strong>Fault-finding before guessing</strong><p>We test the system and isolate the probable cause before recommending avoidable replacement.</p></article>
            <article><strong>Repair when repair is sensible</strong><p>We compare repair, replacement and upgrade options against reliability, safety and cost.</p></article>
            <article><strong>Physical + digital capability</strong><p>Electrical, networking, devices, computers, software and fabrication can be combined when the problem crosses disciplines.</p></article>
            <article><strong>Regulated work stays regulated</strong><p>Where qualifications, approvals or authority sign-off are required, work is routed only through appropriately qualified people and required human approval.</p></article>
          </div>
        </div>
      </section>

      <section id="process" className="section processSection">
        <div className="sectionHead narrow">
          <p className="eyebrow dark">HOW TO GET HELP</p>
          <h2>Send the problem first.</h2>
          <p>Good fault finding starts with context. The more useful evidence you send before a visit, the less time is wasted on site.</p>
        </div>
        <div className="processGrid">
          {process.map(([n, title, copy]) => (
            <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
        <div className="evidenceBox">
          <strong>For faster triage, send:</strong>
          <p>Your location · what stopped working · when it started · photos/video · error lights/messages · make/model · what was already tried.</p>
        </div>
      </section>

      <section className="section forgeSection">
        <div className="forgeGrid">
          <div>
            <p className="eyebrow dark">TALUNZA FORGE</p>
            <h2>When the solution needs to be made, we make it.</h2>
            <p>Forge is the fabrication and small-product manufacturing layer inside Technical Services. It supports installations, repairs and standalone products with brackets, mounts, frames, stands, enclosures, phone/creator accessories and steel furniture designed around practical use.</p>
            <a className="textLink" href={wa('Hello Talunza. I need a fabricated item or custom steel solution. I will send the measurements/photos now.')}>Request a fabrication quote →</a>
          </div>
          <div className="forgeVisual" aria-label="Talunza Forge capabilities">
            <span>Stands</span><span>Mounts</span><span>Furniture</span><span>Frames</span><span>Enclosures</span><span>Custom supports</span>
          </div>
        </div>
      </section>

      <section id="coverage" className="section coverageSection">
        <div className="sectionHead">
          <p className="eyebrow dark">WHO & WHERE WE SERVE</p>
          <h2>Chiredzi first. Lowveld practical.</h2>
          <p>Workshop and field support is scheduled according to location, travel, required equipment and technician availability.</p>
        </div>
        <div className="coverageGrid">
          <div><h3>Customer environments</h3><div className="chips">{sectors.map((x) => <span key={x}>{x}</span>)}</div></div>
          <div><h3>Core service area</h3><div className="chips">{areas.map((x) => <span key={x}>{x}</span>)}</div></div>
        </div>
      </section>

      <section className="section faqSection">
        <div className="sectionHead narrow">
          <p className="eyebrow dark">QUICK ANSWERS</p>
          <h2>Before you book a call-out.</h2>
        </div>
        <div className="faqList">
          <details><summary>Do you charge for fault finding?</summary><p>Yes, where diagnosis requires a site visit, disassembly, testing or substantial troubleshooting. The scope is explained before work proceeds.</p></details>
          <details><summary>Can I send photos or video before you come?</summary><p>Yes. WhatsApp evidence often helps us identify tools, likely parts and whether a site visit is the correct next step.</p></details>
          <details><summary>Do you supply equipment and parts?</summary><p>Where practical, we can quote suitable parts or equipment. For customer-supplied items, compatibility is checked before installation where possible.</p></details>
          <details><summary>Do you work outside Chiredzi?</summary><p>Yes, selected Lowveld and remote jobs can be scheduled. Travel and logistics are confirmed before dispatch.</p></details>
          <details><summary>Do you handle computer repair and software too?</summary><p>Yes. Computer diagnostics, recovery, upgrades and software/business-system support remain permanent parts of Talunza Technical Services.</p></details>
        </div>
      </section>

      <section id="contact" className="contactSection">
        <div>
          <p className="eyebrow">READY WHEN YOU ARE</p>
          <h2>Tell us what is not working.</h2>
          <p>Start with the fault, not the technology. We will help isolate the problem and recommend the right next step.</p>
        </div>
        <div className="contactActions">
          <a className="primary" href={quoteUrl}>WhatsApp 0777 323 918</a>
          <a className="secondary" href="tel:+263777323918">Call Talunza</a>
          <a className="secondary" href="https://www.talunza.co.zw">Main Talunza website</a>
        </div>
      </section>

      <footer>
        <img src={`${assetBase}/talunza-logo.svg`} alt="Talunza" />
        <p>Technical Services · Chiredzi, Zimbabwe</p>
        <p>© 2026 Talunza. Practical systems for real work.</p>
      </footer>

      <div className="mobileBar" aria-label="Quick contact">
        <a href="tel:+263777323918">Call</a>
        <a href={quoteUrl}>WhatsApp</a>
      </div>
    </main>
  );
}
