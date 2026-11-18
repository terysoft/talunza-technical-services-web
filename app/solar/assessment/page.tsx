'use client';

import { useMemo, useState } from 'react';

type Goal = 'backup' | 'off_grid' | 'reduce_bills' | 'upgrade' | 'repair';

const whatsappNumber = '263777323918';

function safeText(value: string, maxLength: number): string {
  return value.trim().replace(/[\u0000-\u001f\u007f]+/g, ' ').slice(0, maxLength);
}

export default function SolarAssessmentPage() {
  const [goal, setGoal] = useState<Goal>('backup');
  const [locality, setLocality] = useState('');
  const [appliances, setAppliances] = useState('');
  const [hours, setHours] = useState('');
  const [existing, setExisting] = useState('');
  const [budget, setBudget] = useState('');
  const [contact, setContact] = useState('');
  const [consent, setConsent] = useState(false);

  const complete = consent && locality.trim().length > 1 && appliances.trim().length > 4;
  const message = useMemo(() => {
    const parts = [
      'Hello TALUNZA Energy. I request a free initial solar energy assessment.',
      'Goal: ' + goal.replaceAll('_', ' '),
      'Area: ' + safeText(locality, 90),
      'Appliances / quantities / ratings / hours: ' + safeText(appliances, 850),
      'Desired backup hours: ' + (safeText(hours, 35) || 'Not sure'),
      'Existing system: ' + (safeText(existing, 180) || 'Not provided'),
      'Equipment budget (optional): ' + (safeText(budget, 80) || 'Not decided'),
      'Preferred name / callback (optional): ' + (safeText(contact, 120) || 'Not provided'),
      'Please advise what rating-label photos and site details you need before recommending equipment.',
    ];
    return parts.join('\n');
  }, [goal, locality, appliances, hours, existing, budget, contact]);

  const whatsapp = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(message);

  return (
    <main>
      <section className="hero" style={{ minHeight: 'auto' }}>
        <div style={{ width: 'min(900px, calc(100% - 2rem))', margin: 'auto', padding: '3rem 0' }}>
          <p className="eyebrow">TALUNZA ENERGY · DESIGN BEFORE SUPPLY</p>
          <h1 style={{ maxWidth: '15ch', fontSize: 'clamp(2.2rem, 6vw, 4.3rem)' }}>Tell us what you need to power.</h1>
          <p className="heroCopy">Complete a short energy assessment before choosing solar equipment. No guessed inverter sizes or guaranteed solar output.</p>
          <p style={{ color: '#bde7d2', marginTop: '1.25rem' }}>Free initial WhatsApp assessment. Site visits, installation, materials and travel are quoted separately.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2.5rem', paddingBottom: '3rem' }}>
        <form
          aria-label="Solar energy enquiry"
          style={{ maxWidth: 760, margin: 'auto', padding: 'clamp(1rem, 4vw, 2rem)', background: '#fff', border: '1px solid #d8e2e1', borderRadius: '1.25rem' }}
          onSubmit={(event) => event.preventDefault()}
        >
          <h2 style={{ fontSize: '1.6rem', margin: '0 0 .5rem', letterSpacing: '-.04em' }}>Solar energy assessment</h2>
          <p style={{ color: '#516872', marginTop: 0 }}>No account needed. Your answers stay on this page until you choose to open WhatsApp. Nothing is sent to TALUNZA automatically.</p>

          <label htmlFor="energy-goal" style={{ display: 'block', fontWeight: 750, marginTop: '1.4rem' }}>What are you trying to achieve?</label>
          <select id="energy-goal" value={goal} onChange={(event) => setGoal(event.target.value as Goal)} style={field}>
            <option value="backup">Backup during power cuts</option>
            <option value="off_grid">Fully off-grid electricity</option>
            <option value="reduce_bills">Reduce electricity bills</option>
            <option value="upgrade">Expand an existing solar system</option>
            <option value="repair">Diagnose an existing system</option>
          </select>

          <label htmlFor="energy-area" style={label}>Town or general area *</label>
          <input id="energy-area" name="area" value={locality} maxLength={90} required placeholder="Example: Chiredzi, Hippo Valley" onChange={(event) => setLocality(event.target.value)} style={field} />

          <label htmlFor="energy-appliances" style={label}>What appliances or equipment should run? *</label>
          <textarea id="energy-appliances" name="appliances" value={appliances} required minLength={5} maxLength={850} rows={5} placeholder={'Example: 1 fridge (label says 90W), 8 LED lights (9W each), 1 TV (60W). If possible include hours per day and which run together.'} onChange={(event) => setAppliances(event.target.value)} style={field} />
          <p style={hint}>If a rating is unknown, say so. We may request a photo of the manufacturer's label. Pumps and motors also need startup information.</p>

          <label htmlFor="energy-hours" style={label}>Required backup duration</label>
          <input id="energy-hours" value={hours} maxLength={35} placeholder="Example: 8 hours, overnight, or not sure" onChange={(event) => setHours(event.target.value)} style={field} />

          <label htmlFor="energy-existing" style={label}>Existing inverter, battery or panels (if any)</label>
          <textarea id="energy-existing" value={existing} maxLength={180} rows={2} placeholder="Make, model, voltage and known faults — or 'none'" onChange={(event) => setExisting(event.target.value)} style={field} />

          <label htmlFor="energy-budget" style={label}>Optional equipment budget</label>
          <input id="energy-budget" value={budget} maxLength={80} placeholder="Example: US$500–800, or not yet decided" onChange={(event) => setBudget(event.target.value)} style={field} />

          <label htmlFor="energy-callback" style={label}>Preferred name or callback number (optional)</label>
          <input id="energy-callback" value={contact} maxLength={120} autoComplete="name" placeholder="Only if you want us to call back" onChange={(event) => setContact(event.target.value)} style={field} />

          <label style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start', margin: '1.6rem 0', color: '#29404b' }}>
            <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} style={{ marginTop: '.3rem' }} />
            <span>I choose to share the information above with TALUNZA through WhatsApp so the team can respond to my enquiry. This is not consent to receive marketing messages.</span>
          </label>

          <div style={{ background: '#f0f6f5', borderRadius: '.85rem', padding: '1rem', marginBottom: '1rem' }}>
            <strong>Preview before sending</strong>
            <pre style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', font: 'inherit', fontSize: '.86rem', margin: '.75rem 0 0' }}>{message}</pre>
          </div>

          {complete ? (
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', padding: '1rem', borderRadius: '.8rem', background: '#0c6349', color: '#fff', textDecoration: 'none', fontWeight: 800 }}>Review and send via WhatsApp</a>
          ) : (
            <p role="status" style={{ background: '#fff4e9', borderRadius: '.8rem', padding: '1rem', margin: 0 }}>Enter your area and appliances, then tick the sharing agreement to enable WhatsApp.</p>
          )}
          <p style={hint}>Opening WhatsApp does not send the message automatically. Check the generated text there before pressing Send. For safety-critical wiring or inverter faults, a technician must assess the actual installation.</p>
          <p style={{ marginBottom: 0 }}><a href="../">Back to solar services</a> · <a href="tel:+263777323918">Call 0777 323 918</a></p>
        </form>
      </section>
    </main>
  );
}

const field: React.CSSProperties = { display: 'block', width: '100%', marginTop: '.4rem', padding: '.9rem', font: 'inherit', border: '1px solid #b9c9cc', borderRadius: '.65rem', background: '#fff', color: '#07131f' };
const label: React.CSSProperties = { display: 'block', fontWeight: 750, marginTop: '1.3rem' };
const hint: React.CSSProperties = { color: '#526973', fontSize: '.87rem', lineHeight: 1.6 };
