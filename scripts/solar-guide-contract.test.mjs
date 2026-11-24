import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

function source(path) {
  return readFileSync(new URL('../' + path, import.meta.url), 'utf8');
}

test('solar guide remains accessible from the existing assessment page', () => {
  const solar = source('app/solar/page.tsx');
  assert.match(solar, /href="\.\/guide\//);
  assert.match(solar, /href="\.\/assessment\//);
});

test('guide preserves official, reported and planned boundaries', () => {
  const guide = source('app/solar/guide/page.tsx');
  for (const phrase of [
    'Last researched: 24 November 2026',
    'not yet been independently reviewed',
    'reported regulatory figures awaiting direct final-gazette cross-check',
    'not a current licence',
    'planned or under source-level development',
    'not an official register',
    'https://solarprs.zera.co.zw/',
    'https://zimlii.org/',
  ]) assert.ok(guide.includes(phrase), 'Missing source/safety phrase: ' + phrase);
  assert.doesNotMatch(guide, /TALUNZA (?:is |are )?(?:ZERA[- ]licensed|ZERA[- ]certified)/i);
});

test('public integration manifest cannot represent official decisions', () => {
  const m = JSON.parse(source('public/solar-regulation-2026.v1.json'));
  assert.equal(m.documentType, 'PUBLIC_EDUCATIONAL_SOURCE_MANIFEST');
  assert.equal(m.status, 'DRAFT_NOT_LIVE');
  assert.equal(m.governmentAffiliation, false);
  assert.equal(m.notForAutomatedComplianceDecisions, true);
  const ids = new Set(m.sources.map((x) => x.id));
  assert.ok(m.claims.length >= 6);
  for (const claim of m.claims) {
    assert.ok(claim.sources.length > 0);
    for (const ref of claim.sources) assert.ok(ids.has(ref), 'Unresolved source: ' + ref);
  }
  assert.equal(m.integrationPolicy.mayGrantProfessionalAuthority, false);
  assert.equal(m.integrationPolicy.publishPersonalTrainedOperatorRecords, false);
  assert.equal(m.integrationPolicy.mayGuaranteeManufacturerWarranty, false);
});

test('guide is scoped and mobile CSS has narrow-breakpoint support', () => {
  const guide = source('app/solar/guide/page.tsx');
  const css = source('app/solar/guide/guide.module.css');
  assert.match(guide, /import styles from '\.\/guide\.module\.css'/);
  assert.match(css, /@media\(max-width:560px\)/);
  assert.match(css, /focus-visible/);
});
