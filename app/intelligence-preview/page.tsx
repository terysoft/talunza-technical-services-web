'use client';

import { useState } from 'react';
import { runCapability } from '../../intelligence-prototype/capability-runner.mjs';
import { evaluateAttention } from '../../intelligence-prototype/attention-engine.mjs';
import type { CapabilityResult, CapabilityRequest } from '../../intelligence-prototype/capability-runner.mjs';
import styles from './page.module.css';

const samples = [
  { label: 'Solar inverter', text: 'My solar inverter stopped charging today.' },
  { label: 'Internet connection', text: 'Our Starlink router has no internet connection.' },
  { label: 'Refrigeration', text: 'The fridge compressor seems to have stopped cooling.' },
  { label: 'Safety concern', text: 'There is smoke and a burning smell near the inverter.' },
] as const;

const syntheticJob = {
  kind: 'technical.awaiting_information' as const,
  ref: 'synthetic:job-demonstration',
  revision: 'r1',
  observed_at: '2026-11-18T11:00:00+02:00',
  status: 'AWAITING_INFO',
  waiting_hours: 25,
  agreed_followup_hours: 24,
};

export default function IntelligencePreviewPage() {
  const [chosen, setChosen] = useState<number>(0);
  const [result, setResult] = useState<CapabilityResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [copyState, setCopyState] = useState('');
  const [dismissed, setDismissed] = useState<string[]>([]);

  const attention = evaluateAttention({
    snapshot: syntheticJob,
    now: '2026-11-18T12:00:00+02:00',
    scope: 'PUBLIC_SYNTHETIC',
    dismissed,
  });

  async function runDemo() {
    if (busy) return;
    setBusy(true);
    setResult(null);
    setCopyState('');
    try {
      const request: CapabilityRequest = {
        kind: 'request',
        schema_version: '1.0',
        request_id: crypto.randomUUID(),
        app_id: 'talunza-technical-services-web',
        capability_id: 'technical.intake_triage',
        locale: 'en-ZW',
        input: { text: samples[chosen].text },
      };
      setResult(await runCapability(request, { scope: 'PUBLIC_SYNTHETIC' }));
    } finally {
      setBusy(false);
    }
  }

  async function copyDraft() {
    if (!result || result.status !== 'drafted') return;
    try {
      await navigator.clipboard.writeText(
        `TALUNZA Technical Services — sample intake (NOT a diagnosis)\n\n${samples[chosen].text}\n\n${result.answer}\n\n${result.uncertainty ?? ''}`
      );
      setCopyState('Copied example. Review before sharing.');
    } catch {
      setCopyState('Copy is unavailable in this browser. You can select the answer manually.');
    }
  }

  return (
    <main className={styles.screen}>
      <div className={styles.container}>
        <a className={styles.backLink} href="../">← Technical Services home</a>
        <div className={styles.topline}><span className={styles.dot} /> TALUNZA · INTELLIGENCE LAB · V0</div>
        <h1>One capability. Useful assistance. <em>No AI bill.</em></h1>
        <p className={styles.intro}>
          This is a local, rules-only engineering preview of how TALUNZA could organize
          a technical problem before human diagnosis. The engine also supports a separate,
          synthetic Academy consumer through the same contract.
        </p>
        <div className={styles.warning}>
          <strong>Preview only.</strong> Every scenario is fictional and pre-written.
          No live AI, customer record, payment, diagnosis or automatic messaging is connected.
          This page is not a safety or installation instruction.
        </div>

        <section className={styles.panel} aria-labelledby="intake-title">
          <p className={styles.sectionTag}>CAPABILITY 01 · TECHNICAL.INTAKE_TRIAGE</p>
          <h2 id="intake-title">Try a sample fault report</h2>
          <p className={styles.hint}>Pick a demonstration. These examples contain no real customer information.</p>
          <div className={styles.choiceGrid} role="group" aria-label="Choose a sample issue">
            {samples.map((s, index) => (
              <button key={s.label} type="button"
                className={chosen === index ? styles.activeChoice : styles.choice}
                aria-pressed={chosen === index}
                onClick={() => { setChosen(index); setResult(null); setCopyState(''); }}>
                {s.label}
              </button>
            ))}
          </div>
          <p className={styles.sampleText}>“{samples[chosen].text}”</p>
          <button type="button" className={styles.primaryButton} onClick={runDemo} disabled={busy}>
            {busy ? 'Checking sample…' : 'Organize this problem'}
          </button>
          {result && (
            <div className={styles.result} role="status" aria-live="polite">
              <div className={styles.resultTop}><span>RULES-ONLY RESULT</span><span>SIMULATED DATA</span></div>
              <p>{result.answer}</p>
              <p className={styles.uncertainty}><strong>Uncertainty:</strong> {result.uncertainty}</p>
              <p className={styles.evidence}>
                Source: public service catalogue · Human review: required · Actions: proposals only
              </p>
              {result.status === 'drafted' && (
                <button className={styles.secondaryButton} type="button" onClick={copyDraft}>Copy example intake</button>
              )}
              {copyState && <p className={styles.hint} role="status">{copyState}</p>}
            </div>
          )}
        </section>

        <section className={styles.panel} aria-labelledby="attention-title">
          <p className={styles.sectionTag}>CAPABILITY 02 · ATTENTION</p>
          <h2 id="attention-title">Not every useful insight needs a prompt</h2>
          <p className={styles.hint}>
            This fixed fictional example shows a follow-up card derived from a job state,
            not a model-generated prediction or a live reminder.
          </p>
          {attention.length > 0 ? attention.map(card => (
            <div className={styles.attentionCard} key={card.card_id}>
              <div className={styles.resultTop}><span>EXAMPLE SIGNAL</span><span>NO NOTIFICATION SENT</span></div>
              <h3>{card.title}</h3>
              <p>{card.reason}</p>
              <p className={styles.uncertainty}>{card.suggested_action}</p>
              <button type="button" className={styles.secondaryButton}
                onClick={() => setDismissed(previous => [...previous, card.card_id])}>
                Dismiss this demonstration
              </button>
            </div>
          )) : <p className={styles.dismissed}>The example has been dismissed for this page session.</p>}
        </section>
        <p className={styles.footer}>
          Source-only development preview. The secure model adapters, real user permissions,
          reviewed content, production server and field tests are separate launch gates.
        </p>
      </div>
    </main>
  );
}
