const leadServices = [
  'Electrical tubing & installations',
  'Solar installation & troubleshooting',
  'CCTV & alarm systems',
  'Starlink, Wi-Fi & networking',
];

const moreServices = [
  'Satellite installation',
  'Computer repair',
  'Refrigeration & appliances',
  'Welding & fabrication',
  'Incubator fabrication & repair',
  'Mechanical & auto electrical',
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">CHIREDZI & THE LOWVELD</p>
        <h1>Talunza Technical Services</h1>
        <p className="heroLine">Install • Repair • Connect • Protect</p>
        <p className="heroCopy">
          One number. Many technical problems solved — for homes, businesses, farms and institutions.
        </p>
        <div className="actions">
          <a className="primary" href="#report">Report a problem</a>
          <a className="secondary" href="#services">View services</a>
        </div>
      </section>

      <section id="services" className="section">
        <p className="eyebrow">KNOWN FOR THIS</p>
        <h2>Core services</h2>
        <div className="grid">
          {leadServices.map((service) => (
            <article className="card" key={service}>
              <h3>{service}</h3>
              <p>Installation, troubleshooting, repair and practical field support.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section soft">
        <p className="eyebrow">MORE TECHNICAL SERVICES</p>
        <h2>A growing local service network</h2>
        <div className="chips">
          {moreServices.map((service) => <span key={service}>{service}</span>)}
        </div>
        <p className="note">
          Talunza coordinates the customer journey and quality standard, including work fulfilled by verified specialist partners.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">SERVICE AREA</p>
        <h2>Built for Chiredzi first</h2>
        <p className="wideCopy">
          Chiredzi is our home base, with planned coverage across Triangle, Hippo Valley, Mkwasine, Boli, Chingele, Ngundu, Rutenga and surrounding Lowveld communities. Remote and farm jobs are scheduled according to travel and technician availability.
        </p>
      </section>

      <section id="report" className="report">
        <p className="eyebrow">NEED HELP?</p>
        <h2>Tell us what is wrong.</h2>
        <p>
          The full report-a-problem flow is being built here: choose a service, describe the fault, add your location, upload photos or video, then receive triage and a quotation.
        </p>
        <button type="button" disabled>Booking form coming next</button>
      </section>
    </main>
  );
}
