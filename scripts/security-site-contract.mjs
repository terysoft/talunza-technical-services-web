#!/usr/bin/env node
/**
 * TALUNZA Security source-level public contract.
 * No dependencies, network, customer data, deployment or paid CI required.
 * This does NOT replace Next typecheck/build, browser checks or live smoke.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');
const problems = [];
const assert = (condition, message) => { if (!condition) problems.push(message); };

const page = read('app/security/page.tsx');
const builder = read('app/security/SecurityBlueprintBuilder.tsx');
const css = read('app/security/security.module.css');
const technicalHome = read('app/page.tsx');
const securityDocs = read('docs/security-sector-v1.md');

function dataArray(name, nextName) {
  const start = 'const ' + name + ' = ';
  const next = '\nconst ' + nextName + ' = ';
  const startIndex = page.indexOf(start);
  const nextIndex = page.indexOf(next, startIndex + start.length);
  if (startIndex < 0 || nextIndex < 0) { problems.push('Cannot find ' + name + ' array'); return []; }
  const chunk = page.slice(startIndex + start.length, nextIndex).trim().replace(/;\s*$/, '');
  try { return JSON.parse(chunk); }
  catch (error) { problems.push('Invalid JSON-style ' + name + ' data: ' + error.message); return []; }
}

const offerings = dataArray('offerings', 'innovations');
const innovations = dataArray('innovations', 'environments');
const environments = dataArray('environments', 'layerSteps');

assert(offerings.length === 12, 'Security must show all 12 service families');
assert(innovations.length === 16, 'Security must show all 16 future intelligent features');
assert(environments.length === 6, 'Security should show six customer contexts');
assert(new Set(offerings.map((x) => x.label)).size === 12, 'Service family labels must be unique');
assert(new Set(innovations.map((x) => x[0])).size === 16, 'Roadmap capability labels must be unique');
assert(new Set(environments.map((x) => x.type)).size === 6, 'Property environments must be distinct');
assert(offerings.every((x) => x.label && x.title && x.description && Array.isArray(x.examples) && x.examples.length >= 3),
  'Every service family must provide title, description and concrete examples');
assert(innovations.every((x) => Array.isArray(x) && x.length === 2 && x.every(Boolean)),
  'Every roadmap feature must have a name and meaningful description');

const used = new Set([...page.matchAll(/styles\.([A-Za-z][\w]*)/g), ...builder.matchAll(/styles\.([A-Za-z][\w]*)/g)].map((x) => x[1]));
for (const key of used) assert(new RegExp('\\.' + key + '(?![A-Za-z0-9_-])').test(css), 'Undefined CSS Module selector: ' + key);
const ids = [...page.matchAll(/\bid="([^"]+)"/g)].map((x) => x[1]);
assert(ids.length === new Set(ids).size, 'Security page has duplicate static IDs');
for (const hash of [...page.matchAll(/href="#([^"]+)"/g)].map((x) => x[1])) {
  assert(ids.includes(hash), 'Broken security page hash: #' + hash);
}

assert(page.includes("https://talunza.co.zw/technical/security/"), 'Canonical Security URL missing');
assert(technicalHome.includes("Explore TALUNZA Security"), 'Technical site entry link missing');
assert(page.includes('Skip to security solutions') && page.includes('Jump to Security sections'),
  'Keyboard skip and mobile quick navigation must exist');
assert(css.includes('.skipLink:focus-visible') && css.includes('.quickNav') && css.includes('scroll-margin-top'),
  'Skip link focus, mobile navigation, and anchor offset styles must exist');
assert(page.includes('id="questions"') && css.includes('.faqList'), 'Native FAQ and styles must be present');
assert((page.match(/<summary>/g) || []).length >= 6, 'Need at least six customer FAQs');
assert(page.includes('Remote viewing and cloud notifications cannot be guaranteed') &&
  page.includes('Not as an advertised operational service'), 'Must distinguish offline limitations and response licensing');
assert(page.includes('id="vision"') && page.includes('id="ecosystem"') && page.includes('id="blueprint"'),
  'End-state, integrated ecosystem and interactive tool must be discoverable');
for (const label of ['Enquire now','Assessed per project','Under development']) {
  assert(page.includes(label), 'Customer status label missing: ' + label);
}
assert(page.includes("SecurityBlueprintBuilder"), 'Interactive concept builder must be rendered');
assert(builder.includes("useState") && builder.includes("Generate my concept"), 'Builder interaction missing');
assert(builder.includes('aria-controls="security-blueprint-output"'), 'Builder button must identify result region');
assert(builder.includes('role="status"') && builder.includes('aria-live="polite"'), 'Builder needs concise accessible status');
assert(builder.includes('summary.map((item, index)') && builder.includes('Preliminary considerations:'),
  'WhatsApp handoff must include the generated plan, not just selected priorities');
assert(builder.includes('showPlan ?') && builder.includes('setShowPlan(false)'), 'Builder must clear stale results after edits');
assert(builder.includes('siteExtras[site]'), 'Builder must include property-specific advice');
assert(builder.includes('checked={chosen.includes(goal)}'), 'Goals must remain controlled and accessible');
assert(builder.includes('styles.goalSelected') && css.includes('.goalSelected'),
  'Selected priorities must have an explicit state that works on older Android browsers');
assert(builder.includes("wa.me/263777323918") && page.includes("wa.me/263777323918"), 'TALUNZA contact handoff missing');
assert(builder.includes('deliberately open WhatsApp') && builder.includes('confirm it inside WhatsApp'), 'Consent and send-state disclosure missing');
assert(!/(?:\bUSD\b|US\$|\$\d+|\bpricing\b|\bprice\b)/i.test(page + builder),
  'No Security prices may appear on the public customer page');
assert(!/(?:localStorage|sessionStorage|fetch\(|XMLHttpRequest|sendBeacon)/.test(builder),
  'Security concept builder must remain client-only unless separately approved');
assert(!/(?:0772927004|0778614206|SCD Electronics)/i.test(page + builder),
  'Do not reuse unapproved specialist company branding or contacts');
assert(securityDocs.includes('Founder end-state publishing lock'), 'Security source documents must link to the end-state lock');

if (problems.length) {
  console.error('TALUNZA SECURITY SOURCE CONTRACT: FAIL');
  for (const issue of problems) console.error(' - ' + issue);
  process.exitCode = 1;
} else {
  console.log('TALUNZA SECURITY SOURCE CONTRACT: PASS (source-level only)');
  console.log('12 families; 16 roadmap capabilities; 6 environments; CSS, anchors, CTA and status checks passed.');
}
