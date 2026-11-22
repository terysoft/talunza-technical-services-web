"use client";

import { useMemo, useState } from 'react';
import styles from './security.module.css';

type Site = 'Home & family' | 'Shop & office' | 'Farm & remote land' | 'School & institution' | 'Industrial & warehouse' | 'Lodge & hospitality';
type Goal = 'Protect the perimeter' | 'See and record events' | 'Control gates and doors' | 'Protect during power cuts' | 'Connect remote equipment' | 'Detect hazards and faults' | 'Secure devices and networks' | 'Manage multiple sites';

const siteChoices: Site[] = ['Home & family', 'Shop & office', 'Farm & remote land', 'School & institution', 'Industrial & warehouse', 'Lodge & hospitality'];
const goals: Goal[] = [
  'Protect the perimeter', 'See and record events', 'Control gates and doors',
  'Protect during power cuts', 'Connect remote equipment', 'Detect hazards and faults',
  'Secure devices and networks', 'Manage multiple sites',
];

const recommendations: Record<Goal, string> = {
  'Protect the perimeter': 'Site-appropriate fencing, barriers, intrusion zones and safe perimeter alarms',
  'See and record events': 'Coverage-planned CCTV, local recorder and authorised event review',
  'Control gates and doors': 'Video intercoms, suitable access credentials and safe gate/door control',
  'Protect during power cuts': 'Protected supply, correctly sized battery/solar backup and local fail-safe behaviour',
  'Connect remote equipment': 'Site-specific wireless or wired connectivity assessment and protected device gateway',
  'Detect hazards and faults': 'Compatible tamper, hazard, recorder-health, battery and network-fault sensors',
  'Secure devices and networks': 'Network segmentation, strong logins, restricted remote access and update plan',
  'Manage multiple sites': 'Tenant-separated, permission-based multi-property reporting concept',
};

const siteExtras: Record<Site, string> = {
  'Home & family': 'Consider privacy zones, simple operation and safe household access.',
  'Shop & office': 'Consider opening/closing workflows, visitor areas and appropriate evidence retention.',
  'Farm & remote land': 'Check line of sight, local power autonomy, terrain and real network coverage.',
  'School & institution': 'Prioritise child safeguarding, authorised staff access and minimal sensitive footage.',
  'Industrial & warehouse': 'Assess isolation zones, vehicle access, worker safety and maintenance handover.',
  'Lodge & hospitality': 'Protect guest privacy while securing reception, shared entrances and equipment.',
};

export default function SecurityBlueprintBuilder() {
  const [site, setSite] = useState<Site>('Home & family');
  const [chosen, setChosen] = useState<Goal[]>(['Protect the perimeter', 'See and record events', 'Protect during power cuts']);
  const [showPlan, setShowPlan] = useState(false);

  const summary = useMemo(() => chosen.map((goal) => recommendations[goal]), [chosen]);
  const message = [
    'Hello TALUNZA Security. I used the Security Blueprint Builder.',
    'Property type: ' + site,
    'Priorities: ' + (chosen.length ? chosen.join('; ') : 'Please help me assess my needs'),
    'Preliminary considerations:',
    siteExtras[site],
    ...(summary.length ? summary.map((item, index) => (index + 1) + '. ' + item) : ['Begin with a security site assessment.']),
    'This is an unverified concept, not a quotation or a confirmed installation.',
    'Please advise on a site assessment. I can share my general area next.',
  ].join('\n');
  const whatsappUrl = 'https://wa.me/263777323918?text=' + encodeURIComponent(message);

  function toggle(goal: Goal) {
    setChosen((previous) => previous.includes(goal) ? previous.filter((item) => item !== goal) : [...previous, goal]);
    setShowPlan(false);
  }

  return (
    <div className={styles.builder} aria-labelledby="security-builder-title">
      <div className={styles.builderHeading}>
        <div>
          <p className={styles.kicker}>FREE INTERACTIVE PLANNING TOOL</p>
          <h3 id="security-builder-title">Build your security concept.</h3>
          <p>Choose the property and what matters most. Get a starting blueprint without entering an exact address, alarm codes or camera passwords.</p>
        </div>
        <span className={styles.builderStamp}>Local to this page · No account needed</span>
      </div>
      <div className={styles.builderMain}>
        <div className={styles.builderInputs}>
          <label className={styles.fieldLabel} htmlFor="security-site">What are you protecting?</label>
          <select className={styles.siteSelect} id="security-site" value={site} onChange={(event) => { setSite(event.target.value as Site); setShowPlan(false); }}>
            {siteChoices.map((choice) => <option key={choice} value={choice}>{choice}</option>)}
          </select>
          <fieldset className={styles.goalFieldset}>
            <legend className={styles.fieldLabel}>Which needs matter to you?</legend>
            <div className={styles.goalGrid}>
              {goals.map((goal) => (
                <label key={goal} className={`${styles.goalOption} ${chosen.includes(goal) ? styles.goalSelected : ""}`}>
                  <input type="checkbox" checked={chosen.includes(goal)} onChange={() => toggle(goal)} />
                  <span>{goal}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <button type="button" className={styles.generate} onClick={() => setShowPlan(true)} aria-controls="security-blueprint-output">Generate my concept →</button>
        </div>
        <div className={styles.builderOutput} id="security-blueprint-output">
          <p className={styles.previewLabel} role="status" aria-live="polite">{showPlan ? 'YOUR PRELIMINARY SECURITY CONCEPT IS READY' : 'CONCEPT PREVIEW'}</p>
          <h4>{site}</h4>
          {showPlan ? (
            <>
              <p>{siteExtras[site]}</p>
              <ul>{(summary.length ? summary : ['Start with a site security assessment and identify essential protection needs.']).map((item) => <li key={item}>{item}</li>)}</ul>
              <p className={styles.disclaimer}>This is a rule-based planning aid, not an AI diagnosis, engineering design, protection guarantee or confirmed availability. TALUNZA checks equipment, law, privacy, staffing and the site before any quotation or work.</p>
              <a href={whatsappUrl} className={styles.resultLink} target="_blank" rel="noopener noreferrer">Share this preliminary concept with TALUNZA →</a>
            </>
          ) : (
            <>
              <p>We will combine your selections into an initial security scope, including local power and connectivity where relevant.</p>
              <p className={styles.disclaimer}>Your choices stay in this page until you deliberately open WhatsApp. Sending the prepared message happens only after you confirm it inside WhatsApp.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
