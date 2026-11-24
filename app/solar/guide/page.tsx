import type { Metadata } from 'next';
import styles from './guide.module.css';

export const metadata: Metadata = {
  title: 'Zimbabwe Solar Rules 2026: Buying, Installation & Warranties',
  description: 'Practical customer guidance on Zimbabwe solar product checks, installer qualifications, reported warranty requirements and the November 2026 ZERA regulations. Updated 24 November 2026.',
  alternates: { canonical: '/technical/solar/guide/' },
};

const wa = 'https://wa.me/263777323918?text=Hello%20TALUNZA.%20I%20have%20a%20solar%20equipment%20or%20installation%20question.%20My%20area%20is%3A%20____.%20The%20system%20or%20product%20is%3A%20____.';

const warrantyRows = [
  ['Solar panels', '10 years'],
  ['Lithium batteries and solar water heaters', '5 years'],
  ['Inverters, charge controllers and home solar kits', '2 years'],
  ['Lead-acid batteries', '1 year'],
] as const;

const sourceLinks = [
  { label: 'ZERA: official website and contacts', url: 'https://www.zera.co.zw/', kind: 'Official regulator' },
  { label: 'ZERA: Solar Product Registration System', url: 'https://solarprs.zera.co.zw/', kind: 'Official model-registration portal' },
  { label: 'ZimLII: Zimbabwe legislation index', url: 'https://zimlii.org/', kind: 'Legislation listing (SI 187 of 2026)' },
  { label: 'The Herald: 24 November solar regulations report', url: 'https://www.heraldonline.co.zw/zera-to-licence-solar-installers-enforce-quality-checks-under-new-regulations/', kind: 'Secondary reporting — not substitute for the gazette' },
] as const;

export default function SolarGuidePage() {
  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <a href="../" aria-label="Back to TALUNZA Solar Services">← TALUNZA Solar Services</a>
        <a href="/technical/">All Technical Services</a>
      </header>

      <section className={styles.hero} aria-labelledby="guide-heading">
        <p className={styles.kicker}>ZIMBABWE SOLAR BUYER GUIDE · 2026</p>
        <h1 id="guide-heading">Buying or installing solar? Know what to check.</h1>
        <p className={styles.lead}>Zimbabwe published new solar product and installation regulations on 20 November 2026. This guide separates established facts, reported details awaiting primary-text confirmation, and practical customer questions.</p>
        <p className={styles.review}>Last researched: 24 November 2026 · Independent TALUNZA educational guide · Not an official ZERA publication, legal certification or product-approval list.</p>
        <div className={styles.actions}>
          <a href={wa} className={styles.cta}>Ask TALUNZA about your system</a>
          <a href="https://solarprs.zera.co.zw/" className={styles.ghost}>Check the official ZERA product portal</a>
        </div>
      </section>

      <div className={styles.body}>
        <section className={styles.block} aria-labelledby="what-changed">
          <p className={styles.sectionKicker}>01 · THE RULES</p>
          <h2 id="what-changed">What changed in November 2026?</h2>
          <p>The <strong>Energy Regulatory (Solar Products and Installation) Regulations, 2026 (SI 187 of 2026)</strong> were published on 20 November 2026. Reporting describes requirements for regulated solar products, installer licensing, consumer warranties, commissioning records and enforcement.</p>
          <div className={styles.notice}>
            <strong>Important source boundary</strong>
            <p>The six-month transition and detailed fee/warranty figures below are described in contemporary reporting. The complete final gazetted text has not yet been independently reviewed in this guide. A six-month period from 20 November points to approximately <strong>20 May 2027</strong>; confirm exact commencement and applicability with ZERA.</p>
          </div>
          <div className={styles.three}>
            <article><strong>Products</strong><p>Ask whether the exact model is recorded on ZERA&apos;s current official register and request product and conformity documents.</p></article>
            <article><strong>Installers</strong><p>Ask what qualifications and current authorisations cover the specific work; historical training listings alone are not a current licence.</p></article>
            <article><strong>Handover</strong><p>Ask for appropriate signed completion, testing, equipment and warranty documents from the responsible qualified persons.</p></article>
          </div>
        </section>

        <section className={styles.block} aria-labelledby="product-check">
          <p className={styles.sectionKicker}>02 · BEFORE YOU PAY</p>
          <h2 id="product-check">Seven useful questions to ask your solar supplier</h2>
          <ol className={styles.checklist}>
            <li>What are the exact brand and model numbers on the panels, inverter, controller and battery?</li>
            <li>Can I see the product datasheet and verify the model against the official ZERA portal?</li>
            <li>Who is the seller, and will I receive a dated invoice showing what I bought?</li>
            <li>What are the written manufacturer, seller and installer/workmanship warranties, separately?</li>
            <li>Who receives warranty claims and who pays for transport, replacement and labour, where applicable?</li>
            <li>Who will assess electrical compatibility, protection, roof support and installation safety?</li>
            <li>What actual inspection, commissioning and customer handover records will I receive?</li>
          </ol>
          <p className={styles.small}>A model appearing in a register does <strong>not</strong> by itself prove that the physical unit sold to you is genuine. A nameplate photo does not replace provenance, appropriate tests or supplier verification.</p>
        </section>

        <section className={styles.block} aria-labelledby="warranty-guide">
          <p className={styles.sectionKicker}>03 · WARRANTY AWARENESS</p>
          <h2 id="warranty-guide">Reported minimum seller-warranty periods</h2>
          <p>The Herald&apos;s 24 November 2026 summary reports the following minimum periods under SI 187. These are <strong>reported regulatory figures awaiting direct final-gazette cross-check</strong>, not warranties issued by TALUNZA or statements about a particular product in stock.</p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <caption>Warranty periods as reported on 24 November 2026; confirmation from final gazette pending</caption>
              <thead><tr><th scope="col">Product category</th><th scope="col">Reported minimum</th></tr></thead>
              <tbody>{warrantyRows.map(([item, term]) => <tr key={item}><td>{item}</td><td>{term}</td></tr>)}</tbody>
            </table>
          </div>
          <p className={styles.small}>Ask for actual written terms and supplier support before purchase. Statutory obligations, manufacturer guarantees and workmanship responsibilities are separate matters; exclusions and claim procedures require review of applicable law and contracts.</p>
        </section>

        <section className={styles.block} aria-labelledby="qualifications">
          <p className={styles.sectionKicker}>04 · QUALIFICATIONS AND SCOPE</p>
          <h2 id="qualifications">Training, licences and project registration are different</h2>
          <ul className={styles.list}>
            <li><strong>Solar installer:</strong> 2026 reporting describes four ZERA licence tiers, ST1–ST4. The final qualification, experience, testing and work-scope conditions still need checking against the gazette.</li>
            <li><strong>Electrical work:</strong> separate competence, registration, inspection and safe installation obligations may also apply to the work being carried out.</li>
            <li><strong>Equipment:</strong> registration of a product model is not a technician licence and does not prove individual serial-number authenticity.</li>
            <li><strong>Large own-use generation:</strong> SI 126 of 2026 separately requires preregistration of qualifying 100 kW–10 MW own-consumption projects and a licence above 10 MW. That does not establish a blanket exemption for small household installations from other applicable rules.</li>
          </ul>
          <p className={styles.small}>TALUNZA does not claim ZERA licensing, formal accreditation or regulator endorsement through this guide. Regulated work, tests and certificates require appropriately authorised persons.</p>
        </section>

        <section className={styles.block} aria-labelledby="talunza-route">
          <p className={styles.sectionKicker}>05 · TALUNZA TECHNICAL SERVICES</p>
          <h2 id="talunza-route">How we approach a solar enquiry</h2>
          <div className={styles.steps}>
            <article><span>1</span><div><strong>Describe the need</strong><p>Send your general area, appliances or fault symptoms and equipment nameplates. Avoid posting your private address or serials publicly.</p></div></article>
            <article><span>2</span><div><strong>Check before recommending</strong><p>We review the information available and identify unknowns. Detailed design, testing, site visits and materials are separately scoped.</p></div></article>
            <article><span>3</span><div><strong>Authorised field work</strong><p>Any regulated tasks must be assigned to appropriately competent or authorised people, with applicable inspection and completion requirements.</p></div></article>
            <article><span>4</span><div><strong>Evidence-led handover</strong><p>Keep equipment details, service notes, test results, warranty evidence and the proper signed documents where applicable.</p></div></article>
          </div>
          <div className={styles.actions}><a className={styles.cta} href={wa}>Ask TALUNZA on WhatsApp</a><a className={styles.ghostLight} href="../assessment/">Open solar assessment form (draft feature)</a></div>
          <p className={styles.small}>Solar assessment form is part of an unmerged website development branch, not a verified live service. Publication requires security and release checks.</p>
        </section>

        <section className={styles.block} aria-labelledby="future">
          <p className={styles.sectionKicker}>06 · WHAT WE ARE BUILDING TOWARD</p>
          <h2 id="future">Connected tools for reliable technical work</h2>
          <p>TALUNZA&apos;s intended end state connects practical electrical and solar work with documentation, learning and after-sales support. These digital capabilities are <strong>planned or under source-level development, not live customer services</strong>.</p>
          <div className={styles.three}>
            <article><strong>Energy System Passport</strong><p>A customer-controlled record of equipment, commissioning, service history and applicable handover documents.</p></article>
            <article><strong>Warranty & Supplier Assurance</strong><p>Link written seller terms, purchased equipment and warranty claims to actual transactions and evidence.</p></article>
            <article><strong>Academy Solar Learning</strong><p>Original, offline-capable learning on power, measurement, batteries, safe buying and supervised technical skills.</p></article>
            <article><strong>Pumps & Farm Energy</strong><p>Join fault and maintenance records for pumps, controllers, inverters and irrigation power.</p></article>
            <article><strong>Remote Property Oversight</strong><p>With customer permission, provide transparent work progress and reviewed handover evidence for remote payers.</p></article>
            <article><strong>Security Backup Systems</strong><p>Document appropriate power and communications resilience for fencing, cameras and other security infrastructure.</p></article>
          </div>
        </section>

        <section className={styles.block} aria-labelledby="sources">
          <p className={styles.sectionKicker}>07 · CHECK THE SOURCE</p>
          <h2 id="sources">Official verification and reporting</h2>
          <p>Rules can change. These links help you confirm what is current rather than relying on screenshots or an outdated article.</p>
          <ul className={styles.sources}>
            {sourceLinks.map((src) => <li key={src.url}><a href={src.url} target="_blank" rel="noopener noreferrer">{src.label} ↗</a><span>{src.kind}</span></li>)}
          </ul>
          <p className={styles.small}>For specific installation-licence eligibility, current fees, product approval, binding legal terms or disputes, contact ZERA directly. This page is not an application portal or an official register.</p>
        </section>
      </div>

      <footer className={styles.footer}>
        <strong>TALUNZA Technical Services · Chiredzi & the Lowveld</strong>
        <p>Real systems. Measured work. Clear documentation.</p>
        <a href="../">Return to solar services</a>
      </footer>
    </main>
  );
}
