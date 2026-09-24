import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Talunza Connectivity | Wi-Fi, Schools, Hotspots & Dead-Zone Links',
  description: 'Installed Wi-Fi, Starlink distribution, school networks, voucher hotspots, long-distance wireless links and weak-signal solutions for Chiredzi, Chilonga and the Lowveld.',
  alternates: { canonical: '/technical/connectivity/' },
};

const phone = '263777323918';
const wa = (text: string) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

const packages = [
  {
    id: 'whole-home',
    tag: 'HOME',
    icon: '⌂',
    name: 'TALUNZA WHOLE HOME',
    problem: 'Wi-Fi works in one room but dies in the rest of the house.',
    price: 'from US$105 installed',
    detail: 'A practical mesh Wi-Fi setup for Starlink and other internet connections. Two-node and three-node options are sized to the building.',
    best: 'Homes · offices · small lodges',
  },
  {
    id: 'bar-connect',
    tag: 'BAR · SHOP',
    icon: '◉',
    name: 'TALUNZA BAR CONNECT',
    problem: 'Give customers reliable Wi-Fi beyond the router room.',
    price: 'from US$225 installed',
    detail: 'Outdoor access point, PoE, outdoor cabling, mounting and configuration for bars, shops and local business centres.',
    best: 'Bars · shops · yards · business centres',
  },
  {
    id: 'hotspot-pay',
    tag: 'VOUCHERS',
    icon: '◎',
    name: 'TALUNZA HOTSPOT PAY',
    problem: 'Turn connectivity into a controlled service instead of sharing one password.',
    price: 'from US$255 installed',
    detail: 'Managed hotspot with captive portal and voucher-ready access. Time, data and user rules are configured for the site.',
    best: 'Bars · markets · lodges · public hotspots',
  },
  {
    id: 'signal-rescue',
    tag: 'WEAK LTE',
    icon: '⌁',
    name: 'TALUNZA SIGNAL RESCUE',
    problem: 'Mobile signal exists outside or on higher ground but is poor where people work or live.',
    price: 'from US$450 installed',
    detail: 'Directional LTE equipment is aligned toward the usable network, then local Wi-Fi is distributed inside the property.',
    best: 'Farms · schools · rural homes · shops',
  },
  {
    id: 'school-start',
    tag: 'SCHOOLS',
    icon: '▦',
    name: 'TALUNZA SCHOOL START',
    problem: 'One router cannot safely or reliably serve staff, students and guests.',
    price: 'from US$535 installed',
    detail: 'Managed access points, PoE switching, cabling and separated Wi-Fi for staff, students and guests. Voucher and usage controls can be added.',
    best: 'Primary schools · training centres · churches',
  },
  {
    id: 'link',
    tag: 'DEAD ZONES',
    icon: '↔',
    name: 'TALUNZA LINK',
    problem: 'The internet source is hundreds of metres or kilometres away.',
    price: 'from US$670 installed',
    detail: 'A surveyed point-to-point wireless bridge carries connectivity between buildings or sites. Line-of-sight and interference are checked before quotation.',
    best: 'Schools · farms · compounds · remote shops',
  },
  {
    id: 'deadzone-hotspot',
    tag: 'REMOTE HOTSPOT',
    icon: '⌖',
    name: 'TALUNZA DEADZONE HOTSPOT',
    problem: 'Carry internet to a remote point, then distribute Wi-Fi when it arrives.',
    price: 'from US$815 installed',
    detail: 'Talunza Link plus a managed access point at the receiving site — useful for a school, shop, village point or remote business.',
    best: 'Remote schools · villages · growth points',
  },
  {
    id: 'school-campus',
    tag: 'CAMPUS',
    icon: '▥',
    name: 'TALUNZA SCHOOL CAMPUS',
    problem: 'Larger schools need coverage across several busy areas, not one overloaded access point.',
    price: 'from US$930 installed',
    detail: 'Higher-capacity managed Wi-Fi, outdoor coverage, PoE switching, staff/student separation and a growth path for more buildings.',
    best: 'Secondary · boarding · multi-building schools',
  },
];

export default function Page() {
  const siteSurvey = wa('Hello Talunza. I need a connectivity site survey. Location: ____. Problem: ____. Approximate distance/area: ____.');
  return (
    <main>
      <section className="hero connectivityHero">
        <div className="connectivityOrbits" aria-hidden="true"><i></i><i></i><i></i></div>
        <div className="heroGrid">
          <div>
            <p className="eyebrow">CHILONGA · CHIREDZI · LOWVELD</p>
            <h1>Internet should reach where life happens.</h1>
            <p className="heroCopy">Talunza designs and installs whole-home Wi-Fi, business hotspots, school networks, weak-signal recovery and long-distance wireless links. We start with the real coverage problem, then choose the equipment.</p>
            <div className="actions">
              <a className="primary" href={siteSurvey}>Request a site survey</a>
              <a className="secondary" href="tel:+263777323918">Call Talunza</a>
            </div>
            <div className="trustRow"><span>Problem-first design</span><span>Installed pricing</span><span>Expandable systems</span><span>Field-tested handover</span></div>
          </div>
          <aside className="heroPanel signalPanel">
            <p>CHOOSE THE PROBLEM</p>
            <a href="#whole-home"><strong>Dead rooms</strong><span>Whole-home Wi-Fi →</span></a>
            <a href="#hotspot-pay"><strong>Sell / control Wi-Fi</strong><span>Voucher hotspot →</span></a>
            <a href="#school-start"><strong>Connect a school</strong><span>Managed campus Wi-Fi →</span></a>
            <a href="#link"><strong>Internet is far away</strong><span>Long-distance link →</span></a>
            <a href="#signal-rescue"><strong>Weak mobile signal</strong><span>Signal rescue →</span></a>
          </aside>
        </div>
      </section>

      <section className="signalBand" aria-label="Connectivity services">
        <span>HOME WI-FI</span><i></i><span>VOUCHERS</span><i></i><span>SCHOOLS</span><i></i><span>LONG-DISTANCE LINKS</span><i></i><span>LTE RESCUE</span>
      </section>

      <section className="section packagesSection">
        <div className="sectionHead">
          <p className="eyebrow dark">INSTALLED STARTER PACKAGES</p>
          <h2>Buy the solution, not a box.</h2>
          <p>Starter prices combine equipment, Talunza's hardware markup and standard labour for the package shown. Final quotation changes where poles, unusually long cable runs, transport, civil work, difficult roof access or extra equipment are required.</p>
        </div>
        <div className="packageGrid">
          {packages.map((pkg) => (
            <article className="packageCard" id={pkg.id} key={pkg.id}>
              <div className="packageTop"><span className="packageIcon">{pkg.icon}</span><b>{pkg.tag}</b></div>
              <h3>{pkg.name}</h3>
              <p className="packageProblem">{pkg.problem}</p>
              <strong className="packagePrice">{pkg.price}</strong>
              <p>{pkg.detail}</p>
              <small>{pkg.best}</small>
              <a href={wa(`Hello Talunza. I am interested in ${pkg.name}. My location is: ____. My coverage/signal problem is: ____.`)}>Ask about this setup →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section darkSection connectivityFlow">
        <div className="splitGrid">
          <div>
            <p className="eyebrow">THE TALUNZA WAY</p>
            <h2>One internet source can become a network.</h2>
            <p className="flowLead">Starlink, fibre or LTE can feed a home, school, business centre or a distant site. The design depends on distance, obstacles, users and what must stay separated.</p>
          </div>
          <div className="linkDiagram" aria-label="Example rural connectivity flow">
            <div><b>1</b><strong>Internet source</strong><span>Starlink · fibre · LTE</span></div>
            <i>→</i>
            <div><b>2</b><strong>Talunza link</strong><span>Router · bridge · managed switch</span></div>
            <i>→</i>
            <div><b>3</b><strong>People connect</strong><span>Home · school · bar · farm</span></div>
          </div>
        </div>
      </section>

      <section className="section surveySection">
        <div className="sectionHead narrow">
          <p className="eyebrow dark">BEFORE WE QUOTE</p>
          <h2>Show us the ground.</h2>
          <p>For long links and weak-signal jobs, send the location pins, approximate distance and a short video or photos from both ends. For buildings, show the rooms, walls, roof and where the internet equipment currently sits.</p>
        </div>
        <div className="processGrid">
          <article><span>01</span><h3>Send location</h3><p>Pin, building, destination and the exact places where coverage fails.</p></article>
          <article><span>02</span><h3>Survey</h3><p>We check line-of-sight, cable path, power, mounting and likely radio environment.</p></article>
          <article><span>03</span><h3>Quote</h3><p>You get a defined equipment and labour scope instead of a vague router recommendation.</p></article>
          <article><span>04</span><h3>Install & test</h3><p>Mount, configure, measure coverage, document the handover and keep an expansion path.</p></article>
        </div>
      </section>

      <section className="contactSection">
        <div>
          <p className="eyebrow">CONNECT THE SITE</p>
          <h2>Dead room, dead zone or whole school?</h2>
          <p>Send the location and the problem. We will tell you what evidence we need before equipment is purchased.</p>
        </div>
        <div className="contactActions">
          <a className="primary" href={siteSurvey}>WhatsApp site survey</a>
          <a className="secondary" href="/technical/">All Technical Services</a>
        </div>
      </section>
    </main>
  );
}
