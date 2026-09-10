const leadServices = [
  'Electrical tubing, wiring, fault finding & maintenance',
  'Solar installations, solar pumps, inverters & batteries',
  'CCTV, alarms & security systems',
  'Starlink, Wi-Fi, networking & structured cabling',
];

const moreServices = [
  'Satellite TV installation',
  'Computer repair & diagnostics',
  'Software services & business systems',
  'Refrigeration & domestic appliance support',
  'Welding, repairs & custom fabrication',
  'Equipment mounting, enclosures & practical installations',
];

const forgeProducts = [
  'Phone, tablet & creator stands',
  'TV stands & wall mounts',
  'Desk, bed & articulated mounts',
  'Steel furniture & shelving',
  'Custom frames, brackets & equipment supports',
  'Battery, inverter & equipment enclosures',
];

const whatsappUrl =
  'https://wa.me/263777323918?text=Hello%20Talunza%2C%20I%20need%20technical%20assistance.';

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">CHIREDZI & THE LOWVELD</p>
        <h1>Talunza Technical Services</h1>
        <p className="heroLine">Install • Repair • Connect • Protect • Make</p>
        <p className="heroCopy">
          Practical technical help for homes, businesses, farms and institutions — from electrical and solar faults to connectivity, computers and fabricated solutions.
        </p>
        <div className="actions">
          <a className="primary" href={whatsappUrl}>WhatsApp Talunza</a>
          <a className="secondary" href="tel:+263777323918">Call 0777 323 918</a>
        </div>
      </section>

      <section id="services" className="section">
        <p className="eyebrow">FIELD SERVICES</p>
        <h2>Problems we can assess and solve</h2>
        <div className="grid">
          {leadServices.map((service) => (
            <article className="card" key={service}>
              <h3>{service}</h3>
              <p>Assessment, installation, troubleshooting, repair and practical field support.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section soft">
        <p className="eyebrow">MORE TECHNICAL SERVICES</p>
        <h2>One route into practical technical support</h2>
        <div className="chips">
          {moreServices.map((service) => <span key={service}>{service}</span>)}
        </div>
        <p className="note">
          Talunza coordinates the customer journey and quality standard. Where regulated or specialist work requires additional qualifications, the work is routed to appropriately qualified people and required human sign-off.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">TALUNZA FORGE</p>
        <h2>Fabrication that becomes useful products</h2>
        <p className="wideCopy">
          Forge sits inside the Technical Services customer experience: we design, fabricate, improve and install practical products rather than presenting fabrication as a disconnected business.
        </p>
        <div className="chips">
          {forgeProducts.map((product) => <span key={product}>{product}</span>)}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">HOW TO GET HELP</p>
        <h2>Send the problem first.</h2>
        <p className="wideCopy">
          For faster triage, send your location, a short description of the problem, photos or video where useful, and the equipment make/model if known. We can then advise whether the next step is remote guidance, fault finding, a site visit, repair or a quotation.
        </p>
        <div className="actions">
          <a className="primary" href={whatsappUrl}>Send problem on WhatsApp</a>
          <a className="secondary" href="tel:+263777323918">Call Talunza</a>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">SERVICE AREA</p>
        <h2>Chiredzi first. Lowveld practical.</h2>
        <p className="wideCopy">
          Chiredzi is our home base, with work scheduled across Triangle, Hippo Valley, Mkwasine, Boli, Chingele, Ngundu, Rutenga and surrounding Lowveld communities. Remote and farm jobs are planned according to travel, equipment and technician availability.
        </p>
      </section>

      <section id="report" className="report">
        <p className="eyebrow">NEED HELP?</p>
        <h2>Tell us what is not working.</h2>
        <p>
          Start with the problem. Talunza will help isolate the fault, recommend the right next step and quote only after the job is understood.
        </p>
        <div className="actions">
          <a className="primary" href={whatsappUrl}>WhatsApp 0777 323 918</a>
          <a className="secondary" href="https://www.talunza.co.zw">Visit talunza.co.zw</a>
        </div>
      </section>
    </main>
  );
}
