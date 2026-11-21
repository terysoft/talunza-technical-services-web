import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Poultry Egg Incubators | Made to Order in Zimbabwe',
  description: 'Request a quote for a poultry egg incubator built to your egg type and capacity. Manual or automatic turning options, power assessment and client-funded materials with separately agreed labour.',
  alternates: { canonical: 'https://talunza.co.zw/technical/incubators/' },
  openGraph: {
    title: 'Custom Poultry Egg Incubators | TALUNZA Forge',
    description: 'Made-to-order incubators. Tell us your egg capacity, egg species, preferred turning system and available power. Request a quote, with the option to purchase materials yourself.',
    url: 'https://talunza.co.zw/technical/incubators/',
  },
};

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? '/talunza-technical-services-web';

const quoteMessage = [
  'Hello TALUNZA. Please quote a custom poultry egg incubator.',
  'My location: ____.',
  'Egg species/type: ____.',
  'Target number of eggs per batch: ____.',
  'Egg turning: manual / automatic / please advise.',
  'Power available: mains / solar / backup / please advise.',
  'Required controls or monitoring: ____.',
  'I can buy materials from an agreed list: yes / need guidance.',
  'Collection/delivery preference: ____.',
  'Please provide a material specification, labour quote and separately agreed costs.',
].join('\n');

const quoteUrl = 'https://wa.me/263777323918?text=' + encodeURIComponent(quoteMessage);

const questions = [
  ['01', 'Egg type and capacity', 'Chicken, duck, quail or other eggs; tell us your target number of eggs per batch rather than selecting an arbitrary fixed size.'],
  ['02', 'Turning and controls', 'Discuss manual or automatic egg turning, temperature and humidity controls and any requested alarms or monitoring.'],
  ['03', 'Power and environment', 'We assess your mains supply, solar or backup arrangements, location, ventilation and intended operating conditions.'],
  ['04', 'Materials and quotation', 'We prepare a list for approval. You can purchase compatible materials directly; TALUNZA quotes labour, agreed consumables, transport and any specialist work separately.'],
];

export default function IncubatorsPage() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="/technical/" aria-label="Back to TALUNZA Technical Services">
          <img src={`${assetBase}/talunza-logo.svg`} alt="Talunza" /><span>Forge · Incubators</span>
        </a>
        <nav aria-label="Page navigation">
          <a href="/technical/">All technical services</a>
          <a href="#requirements">Requirements</a>
          <a className="navCta" href={quoteUrl}>Get a quote</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="incubator-heading">
        <div className="heroGlow" aria-hidden="true" />
        <div className="heroGrid">
          <div className="heroCopyWrap">
            <p className="eyebrow">TALUNZA FORGE · CUSTOM POULTRY EQUIPMENT</p>
            <h1 id="incubator-heading">An incubator built for your eggs.</h1>
            <p className="heroLine">Your capacity. Your requirements. A clear quotation.</p>
            <p className="heroCopy">
              We build poultry egg incubators to customer-requested sizes and specifications.
              Tell us what you want to hatch, how many eggs you need per batch and the power
              available. We agree the design and materials before the build.
            </p>
            <div className="actions">
              <a className="primary" href={quoteUrl}>Request an incubator quote</a>
              <a className="secondary" href="tel:+263777323918">Call 0777 323 918</a>
            </div>
            <div className="trustRow">
              <span>Made to order</span><span>Material list first</span><span>Labour quoted separately</span><span>Tested handover</span>
            </div>
          </div>
          <aside className="heroPanel" aria-label="Custom incubator specifications">
            <p>WHAT WE NEED TO QUOTE</p>
            <div className="heroProblem"><strong>Egg type</strong><span>Chicken, duck, quail or other poultry</span></div>
            <div className="heroProblem"><strong>Egg capacity</strong><span>State the eggs per batch you need</span></div>
            <div className="heroProblem"><strong>Turning method</strong><span>Manual, automatic or request guidance</span></div>
            <div className="heroProblem"><strong>Power and controls</strong><span>Mains, solar/backup and monitoring needs</span></div>
            <a href={quoteUrl}>Send your requirements →</a>
          </aside>
        </div>
      </section>

      <section className="section servicesSection" id="requirements">
        <div className="sectionHead">
          <p className="eyebrow dark">QUOTE BEFORE YOU BUY MATERIALS</p>
          <h2>Four things we agree before fabrication.</h2>
          <p>Size and features are not assumed. Every quotation identifies the actual scope, component requirements and acceptance checks.</p>
        </div>
        <div className="serviceGrid">
          {questions.map(([number, title, copy]) => (
            <article className="serviceCard" key={number}>
              <p className="cardKicker">{number}</p><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section supplySection">
        <div className="supplyGrid">
          <div>
            <p className="eyebrow dark">OUR WORKING MODEL</p>
            <h2>You can fund the materials directly.</h2>
            <p>You do not need TALUNZA to hold the cost of your steel, panels, heating components or controls. Once we have agreed an appropriate design, you may buy the specified materials directly. We inspect the supplied parts for compatibility and quote our labour and any separately agreed costs.</p>
            <p>A customer-requested feature is not automatically included. Prices, capacity, delivery and build schedule are confirmed in writing for each job.</p>
            <a className="textLink" href={quoteUrl}>Request your custom quote →</a>
          </div>
          <div className="chips equipmentChips">
            <span>Approved materials list</span><span>Fabrication labour</span><span>Turning options</span>
            <span>Temperature controls</span><span>Ventilation</span><span>Power assessment</span><span>Handover testing</span>
          </div>
        </div>
      </section>

      <section className="section darkSection">
        <div className="splitGrid">
          <div><p className="eyebrow">SAFETY AND REALISTIC EXPECTATIONS</p><h2>Built to a verified design, not a hatch-rate promise.</h2></div>
          <div className="principles">
            <article><strong>Electrical and thermal protection</strong><p>Heating, wiring, protective devices and independent over-temperature protections require suitable components and competent verification.</p></article>
            <article><strong>Operating conditions matter</strong><p>Egg quality, storage, calibration and operation affect outcomes. No fixed hatch percentage is promised.</p></article>
            <article><strong>Options are agreed, not implied</strong><p>Automatic turning, solar backup, remote alerts and humidity controls are scoped as requested options, not universal standard features.</p></article>
          </div>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div><p className="eyebrow">CHIREDZI · LOWVELD · QUOTE-FIRST FABRICATION</p><h2>Tell us how many eggs you want to hatch.</h2><p>Send your requirements via WhatsApp. We will clarify the design and quotation before materials are purchased.</p></div>
        <div className="contactActions"><a className="primary" href={quoteUrl}>WhatsApp your incubator request</a><a className="secondary" href="/technical/">All Technical Services</a></div>
      </section>
      <footer><p>TALUNZA Forge &amp; Technical Services · Chiredzi, Zimbabwe · +263 777 323 918</p></footer>
      <div className="mobileBar"><a href="tel:+263777323918">Call</a><a href={quoteUrl}>Request Quote</a></div>
    </main>
  );
}
