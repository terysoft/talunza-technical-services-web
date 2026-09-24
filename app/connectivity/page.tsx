import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Talunza Connect | Starlink, Wi-Fi, Schools, Hotspots & Dead-Zone Links',
  description: 'Starlink-first connectivity packages for homes, bars, schools, farms and remote sites around Chiredzi, Chilonga and the Lowveld.',
  alternates: { canonical: '/technical/connectivity/' },
};

const phone = '263777323918';
const starlinkSourcePrice = 300;
const wa = (text: string) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

type Package = {
  id: string;
  tag: string;
  icon: string;
  name: string;
  shortName: string;
  problem: string;
  price: number;
  detail: string;
  best: string;
  source: 'starlink' | 'lte' | 'source';
};

const packages: Package[] = [
  {
    id: 'starlink-base',
    tag: 'SOURCE',
    icon: '✦',
    name: 'TALUNZA STARLINK BASE',
    shortName: 'Starlink Base',
    problem: 'No internet source yet? Start here.',
    price: 300,
    detail: 'Starlink kit supply plus standard installation and setup. Ethernet cable beyond the standard setup is charged at US$0.70 per metre. Starlink service subscription is separate.',
    best: 'Homes · bars · schools · farms · lodges',
    source: 'source',
  },
  {
    id: 'home',
    tag: 'HOME',
    icon: '⌂',
    name: 'TALUNZA HOME',
    shortName: 'Home',
    problem: 'Starlink works, but Wi-Fi dies in bedrooms, back rooms or outside.',
    price: 105,
    detail: 'Mesh Wi-Fi sized to the building so the internet reaches the rooms where people actually use it.',
    best: 'Homes · offices · small lodges',
    source: 'starlink',
  },
  {
    id: 'business',
    tag: 'BAR · SHOP',
    icon: '◉',
    name: 'TALUNZA BUSINESS',
    shortName: 'Business',
    problem: 'Give customers and staff reliable Wi-Fi beyond the Starlink router.',
    price: 225,
    detail: 'Outdoor Wi-Fi, PoE, cabling, mounting and configuration for bars, shops and local business centres.',
    best: 'Bars · shops · yards · business centres',
    source: 'starlink',
  },
  {
    id: 'hotspot',
    tag: 'VOUCHERS',
    icon: '◎',
    name: 'TALUNZA HOTSPOT',
    shortName: 'Hotspot',
    problem: 'Turn Starlink into controlled customer Wi-Fi instead of sharing one password.',
    price: 255,
    detail: 'Managed hotspot with captive portal and voucher-ready access. Time, data and user rules can be configured for the site.',
    best: 'Bars · markets · lodges · public hotspots',
    source: 'starlink',
  },
  {
    id: 'signal',
    tag: 'LTE ALTERNATIVE',
    icon: '⌁',
    name: 'TALUNZA SIGNAL',
    shortName: 'Signal',
    problem: 'No Starlink? Use a distant mobile network where usable LTE exists.',
    price: 450,
    detail: 'Directional LTE equipment is aligned toward the usable network, then local Wi-Fi is distributed at the property. This is an alternative source, not a Starlink add-on.',
    best: 'Farms · schools · rural homes · shops',
    source: 'lte',
  },
  {
    id: 'school',
    tag: 'SCHOOL',
    icon: '▦',
    name: 'TALUNZA SCHOOL',
    shortName: 'School',
    problem: 'One Starlink router cannot properly serve staff, students and guests across a school.',
    price: 535,
    detail: 'Managed access points, PoE switching, cabling and separated Wi-Fi for staff, students and guests. Voucher and usage controls can be added.',
    best: 'Primary schools · training centres · churches',
    source: 'starlink',
  },
  {
    id: 'link',
    tag: 'DEAD ZONE',
    icon: '↔',
    name: 'TALUNZA LINK',
    shortName: 'Link',
    problem: 'Starlink is available at one point, but the people who need it are far away.',
    price: 670,
    detail: 'A surveyed point-to-point wireless bridge carries the Starlink connection between sites. Line-of-sight and interference are checked before quotation.',
    best: 'Schools · farms · compounds · remote shops',
    source: 'starlink',
  },
  {
    id: 'remote',
    tag: 'REMOTE HUB',
    icon: '⌖',
    name: 'TALUNZA REMOTE',
    shortName: 'Remote',
    problem: 'Carry Starlink to a distant point, then create useful Wi-Fi when it arrives.',
    price: 815,
    detail: 'Long-distance bridge plus a managed access point at the receiving site — useful for a school, shop, village point or remote business.',
    best: 'Remote schools · villages · growth points',
    source: 'starlink',
  },
  {
    id: 'campus',
    tag: 'CAMPUS',
    icon: '▥',
    name: 'TALUNZA CAMPUS',
    shortName: 'Campus',
    problem: 'A larger school needs Starlink distributed across several busy buildings and outdoor areas.',
    price: 930,
    detail: 'Higher-capacity managed Wi-Fi, outdoor coverage, PoE switching, staff/student separation and a growth path for more buildings.',
    best: 'Secondary · boarding · multi-building schools',
    source: 'starlink',
  },
];

function money(n: number) {
  return `US$${n.toLocaleString('en-US')}`;
}

export default function Page() {
  const siteSurvey = wa('Hello Talunza. I need a Talunza Connect site survey. Location: ____. Do I already have Starlink? YES/NO. Problem: ____. Approximate distance/area: ____.');
  const starlinkOrder = wa('Hello Talunza. I want TALUNZA STARLINK BASE. Location: ____. I want to pay: CASH / US$120 DEPOSIT + 6 x US$30. Ethernet cable needed: ____ metres.');

  return (
    <main>
      <section className="hero connectivityHero">
        <div className="connectivityOrbits" aria-hidden="true"><i></i><i></i><i></i></div>
        <div className="heroGrid">
          <div>
            <p className="eyebrow">TALUNZA CONNECT · CHILONGA · CHIREDZI · LOWVELD</p>
            <h1>Start with Starlink. Make it reach.</h1>
            <p className="heroCopy">Starlink is our default internet source for places where dependable fixed broadband is difficult. Talunza then turns that single connection into useful coverage for a home, bar, school, farm, lodge or remote site.</p>
            <div className="actions">
              <a className="primary" href={siteSurvey}>Build my setup</a>
              <a className="secondary" href="tel:+263777323918">Call Talunza</a>
            </div>
            <div className="trustRow"><span>One named package</span><span>Installed pricing</span><span>Starlink-first</span><span>Expandable later</span></div>
          </div>
          <aside className="heroPanel signalPanel">
            <p>WHAT DO YOU NEED?</p>
            <a href="#starlink-base"><strong>No Starlink yet</strong><span>Start for US$300 →</span></a>
            <a href="#home"><strong>Cover the whole home</strong><span>Talunza Home →</span></a>
            <a href="#hotspot"><strong>Sell / control Wi-Fi</strong><span>Talunza Hotspot →</span></a>
            <a href="#school"><strong>Connect a school</strong><span>Talunza School →</span></a>
            <a href="#link"><strong>Reach a dead zone</strong><span>Talunza Link →</span></a>
            <a href="#signal"><strong>Use mobile signal instead</strong><span>Talunza Signal →</span></a>
          </aside>
        </div>
      </section>

      <section className="sourceRule" aria-label="Talunza Connect pricing rule">
        <div>
          <span className="sourceRuleMark">01</span>
          <p><b>Already have working Starlink?</b><br />Choose only the package you need below.</p>
        </div>
        <div>
          <span className="sourceRuleMark">02</span>
          <p><b>No Starlink kit yet?</b><br />Add <strong>US$300</strong> for Talunza Starlink Base: kit + standard installation.</p>
        </div>
        <div>
          <span className="sourceRuleMark">03</span>
          <p><b>Prefer instalments?</b><br /><strong>US$120 deposit + 6 monthly payments of US$30.</strong> Subject to stock and approval.</p>
        </div>
      </section>

      <section className="signalBand" aria-label="Talunza Connect system">
        <span>SOURCE</span><i></i><span>COVER</span><i></i><span>CONTROL</span><i></i><span>EXTEND</span><i></i><span>MANAGE</span>
      </section>

      <section className="section packagesSection">
        <div className="sectionHead">
          <p className="eyebrow dark">NAMED PACKAGES · LESS COMPLEXITY</p>
          <h2>Tell us the problem. Pick the package.</h2>
          <p>Every price below is a starter installed price for that package. For Starlink-based packages, the first price assumes a working Starlink connection is already on site. If there is no Starlink kit, the second price shows the package plus Talunza Starlink Base.</p>
        </div>

        <div className="packageGrid">
          {packages.map((pkg) => {
            const withStarlink = pkg.source === 'starlink' ? pkg.price + starlinkSourcePrice : null;
            const href = pkg.source === 'source'
              ? starlinkOrder
              : wa(`Hello Talunza. I want ${pkg.name}. Location: ____. I already have Starlink: YES/NO. My problem is: ____.`);

            return (
              <article className={`packageCard ${pkg.source === 'source' ? 'sourcePackage' : ''}`} id={pkg.id} key={pkg.id}>
                <div className="packageTop"><span className="packageIcon">{pkg.icon}</span><b>{pkg.tag}</b></div>
                <h3>{pkg.name}</h3>
                <p className="packageProblem">{pkg.problem}</p>

                {pkg.source === 'source' && (
                  <div className="priceStack">
                    <span>STARLINK SOURCE</span>
                    <strong>{money(pkg.price)}</strong>
                    <small>kit + standard installation</small>
                    <em>US$120 deposit + 6 × US$30</em>
                  </div>
                )}

                {pkg.source === 'starlink' && (
                  <div className="priceStack">
                    <span>IF YOU ALREADY HAVE STARLINK</span>
                    <strong>{money(pkg.price)}</strong>
                    <small>package installed</small>
                    <em>Need Starlink too? From {money(withStarlink!)}</em>
                  </div>
                )}

                {pkg.source === 'lte' && (
                  <div className="priceStack">
                    <span>NO STARLINK REQUIRED</span>
                    <strong>{money(pkg.price)}</strong>
                    <small>LTE signal-recovery setup</small>
                    <em>Network signal must be usable at the surveyed point.</em>
                  </div>
                )}

                <p>{pkg.detail}</p>
                <small className="packageBest">{pkg.best}</small>
                <a href={href}>{pkg.source === 'source' ? 'Get Starlink →' : `Ask for ${pkg.shortName} →`}</a>
              </article>
            );
          })}
        </div>

        <div className="pricingNote">
          <strong>Simple rule:</strong>
          <p>Starlink is the source. Talunza Connect packages distribute, control or extend it. Extra poles, unusually long cable runs, transport, civil work, difficult roof access and non-standard hardware are quoted after survey. Additional Starlink Ethernet cable is US$0.70 per metre. Starlink monthly service is paid separately.</p>
        </div>
      </section>

      <section className="section darkSection connectivityFlow">
        <div className="splitGrid">
          <div>
            <p className="eyebrow">A BIGGER CONNECTIVITY BUSINESS</p>
            <h2>One dish can become local infrastructure.</h2>
            <p className="flowLead">Talunza Connect is designed as a system, not a pile of routers. Start with an internet source, cover the immediate site, control who uses it, then extend it to another building or dead zone when the economics make sense.</p>
          </div>
          <div className="linkDiagram" aria-label="Talunza Connect architecture">
            <div><b>1</b><strong>SOURCE</strong><span>Starlink Base by default · LTE where appropriate</span></div>
            <i>↓</i>
            <div><b>2</b><strong>COVER</strong><span>Home · business · school Wi-Fi</span></div>
            <i>↓</i>
            <div><b>3</b><strong>CONTROL</strong><span>Staff · student · guest · voucher access</span></div>
            <i>↓</i>
            <div><b>4</b><strong>EXTEND</strong><span>Long-distance links to farms, schools and remote hubs</span></div>
          </div>
        </div>
      </section>

      <section className="section surveySection">
        <div className="sectionHead narrow">
          <p className="eyebrow dark">BEFORE WE BUY EQUIPMENT</p>
          <h2>Show us the ground.</h2>
          <p>Send the location pin and a short video. For links, show both ends. For schools and buildings, show the rooms and outdoor areas. Talunza sizes the package around the actual site instead of selling unnecessary hardware.</p>
        </div>
        <div className="processGrid">
          <article><span>01</span><h3>Choose the outcome</h3><p>Home coverage, school network, hotspot, dead-zone link or signal recovery.</p></article>
          <article><span>02</span><h3>Confirm the source</h3><p>Already have Starlink? We reuse it. No source? Add Talunza Starlink Base.</p></article>
          <article><span>03</span><h3>Survey & quote</h3><p>We verify cable path, mounting, power, line-of-sight, users and expansion needs.</p></article>
          <article><span>04</span><h3>Install & prove</h3><p>Mount, configure, test coverage and leave a clear path for the next expansion.</p></article>
        </div>
      </section>

      <section className="contactSection">
        <div>
          <p className="eyebrow">TALUNZA CONNECT</p>
          <h2>One source. The right reach.</h2>
          <p>Tell us where you are, whether Starlink is already installed, and what place cannot connect. We turn that into a named package and a clear quotation.</p>
        </div>
        <div className="contactActions">
          <a className="primary" href={siteSurvey}>Build my setup</a>
          <a className="secondary" href="/technical/">All Technical Services</a>
        </div>
      </section>
    </main>
  );
}
