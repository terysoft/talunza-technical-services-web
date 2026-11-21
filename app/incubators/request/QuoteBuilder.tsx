'use client';

import { useState, type FormEvent } from 'react';
import styles from './quote.module.css';

const whatsAppNumber = '263777323918';

type Values = {
  species: string;
  capacity: string;
  turning: string;
  power: string;
  backup: string;
  controls: string;
  customerMaterials: string;
  location: string;
  delivery: string;
  notes: string;
};

function getValues(form: HTMLFormElement): Values {
  const data = new FormData(form);
  const value = (key: keyof Values) => String(data.get(key) ?? '').trim();
  return {
    species: value('species'),
    capacity: value('capacity'),
    turning: value('turning'),
    power: value('power'),
    backup: value('backup'),
    controls: value('controls'),
    customerMaterials: value('customerMaterials'),
    location: value('location'),
    delivery: value('delivery'),
    notes: value('notes'),
  };
}

function makeMessage(data: Values): string {
  const lines = [
    'Hello TALUNZA. I would like a quotation for a made-to-order poultry egg incubator.',
    'Egg type: ' + data.species,
    'Target egg capacity per batch: ' + data.capacity,
    'Egg turning: ' + data.turning,
    'Available power: ' + data.power,
    'Backup power: ' + data.backup,
    'Requested controls: ' + data.controls,
    'Materials arrangement: ' + data.customerMaterials,
    'Location: ' + data.location,
    'Collection/delivery: ' + data.delivery,
  ];
  if (data.notes) lines.push('Additional requirements: ' + data.notes);
  lines.push('Please confirm the design, approved materials list, labour and other separately agreed costs before purchases.');
  return lines.join('\n');
}

export default function QuoteBuilder() {
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = getValues(event.currentTarget);
    const capacity = Number(data.capacity);
    if (!Number.isSafeInteger(capacity) || capacity < 1 || capacity > 100000) {
      setError('Enter the number of eggs per batch (1 to 100,000). This is a request, not a validated production capacity.');
      return;
    }
    if (!data.species || !data.turning || !data.power || !data.location || !data.customerMaterials) {
      setError('Please complete egg type, turning, power, location and material arrangement.');
      return;
    }
    setError('');
    const url = 'https://wa.me/' + whatsAppNumber + '?text=' + encodeURIComponent(makeMessage(data));
    window.location.assign(url);
  }

  return (
    <main className={styles.page}>
      <header className={styles.top}>
        <a className={styles.back} href="/technical/incubators/">← Incubators</a>
        <a className={styles.brand} href="/technical/">TALUNZA · Technical Services</a>
      </header>
      <section className={styles.intro}>
        <p className={styles.eyebrow}>MADE TO ORDER · FREE INITIAL ENQUIRY</p>
        <h1>Request a custom incubator quote.</h1>
        <p>Tell us what you need. We review your requirements, propose suitable materials and quote labour separately. No fixed price or promised hatch percentage is implied.</p>
      </section>
      <div className={styles.layout}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="species">Egg type <span>*</span></label>
            <select id="species" name="species" required defaultValue="">
              <option value="" disabled>Choose one</option>
              <option>Chicken</option><option>Duck</option><option>Quail</option>
              <option>Turkey</option><option>Mixed / other — specify in notes</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="capacity">Eggs per batch <span>*</span></label>
            <input id="capacity" name="capacity" type="number" min="1" max="100000" step="1" inputMode="numeric" placeholder="e.g. 100" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="turning">Egg turning <span>*</span></label>
            <select id="turning" name="turning" required defaultValue="">
              <option value="" disabled>Choose one</option>
              <option>Manual</option><option>Automatic — quote separately</option><option>Please advise</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="power">Main power source <span>*</span></label>
            <select id="power" name="power" required defaultValue="">
              <option value="" disabled>Choose one</option>
              <option>Grid electricity</option><option>Solar / inverter</option><option>Generator</option><option>Not yet decided</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="backup">Backup power</label>
            <select id="backup" name="backup" defaultValue="Please advise">
              <option>Available</option><option>Not available</option><option>Please advise</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="controls">Controls and monitoring</label>
            <select id="controls" name="controls" defaultValue="Basic temperature control; please advise">
              <option>Basic temperature control; please advise</option>
              <option>Temperature and humidity display</option>
              <option>Alarms / remote monitoring — assess feasibility</option>
              <option>Please advise on all controls</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="customerMaterials">Who will purchase the materials? <span>*</span></label>
            <select id="customerMaterials" name="customerMaterials" required defaultValue="Client buys approved materials">
              <option>Client buys approved materials</option>
              <option>Please help identify suppliers / quote sourcing support</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="location">Town / area <span>*</span></label>
            <input id="location" name="location" maxLength={100} placeholder="e.g. Chiredzi, Hippo Valley" autoComplete="address-level2" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="delivery">Handover preference</label>
            <select id="delivery" name="delivery" defaultValue="Please advise">
              <option>Collect from workshop</option><option>Delivery / installation — quote separately</option><option>Please advise</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="notes">Other requirements (optional)</label>
            <textarea id="notes" name="notes" rows={4} maxLength={600} placeholder="Space limits, preferred features, intended usage and any available parts" />
          </div>
          <p className={styles.privacy}>Your answers are prepared on this page and passed to WhatsApp only after you tap the button. TALUNZA does not receive them from this form itself. WhatsApp's terms and privacy practices apply when you continue. Do not send sensitive personal information.</p>
          {error && <p className={styles.error} role="alert">{error}</p>}
          <button className={styles.submit} type="submit">Continue to WhatsApp quotation</button>
          <p className={styles.fallback}>Prefer a simple message? <a href="https://wa.me/263777323918">Open WhatsApp directly</a> or call <a href="tel:+263777323918">0777 323 918</a>.</p>
        </form>
        <aside className={styles.aside}>
          <h2>How a quote works</h2>
          <ol>
            <li>Send the egg type, capacity and requirements.</li>
            <li>We review the proposed design and safety constraints.</li>
            <li>We agree a compatible materials list before purchase.</li>
            <li>You buy the approved materials directly; we separately quote labour and any agreed additional costs.</li>
            <li>We arrange fabrication, checks and handover as specified.</li>
          </ol>
          <p>Automatic turning, monitoring, transport, installation and backup power are optional scopes, not included by default. Electrical and thermal protections are subject to competent review and testing.</p>
        </aside>
      </div>
    </main>
  );
}
