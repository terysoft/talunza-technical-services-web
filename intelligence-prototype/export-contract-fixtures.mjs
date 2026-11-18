/**
 * Machine-readable, no-network fixtures for Kernel v1 JSON Schema conformance.
 * Designed for Node 20+, independent of Next.js, provider APIs and CI.
 */
import { runCapability } from './capability-runner.mjs';

const base = {
  kind: 'request',
  schema_version: '1.0',
  request_id: '0c723ab3-3c5e-4c8f-a51f-2e408dbf7a91',
  app_id: 'talunza-technical-services-web',
  capability_id: 'technical.intake_triage',
  locale: 'en-ZW',
  input: { text: 'My solar inverter is not charging' },
};
const academy = {
  ...base,
  request_id: 'dbf2d083-c7e6-4109-9f53-9c7e1d8473b1',
  app_id: 'talunza-academy',
  capability_id: 'academy.lesson_explain',
  input: { text: 'How to convert centimetres to metres?' },
};
const good = await runCapability(base, { scope: 'PUBLIC_SYNTHETIC' });
const school = await runCapability(academy, { scope: 'PUBLIC_SYNTHETIC' });
const fake = await runCapability(base, { scope: 'PUBLIC_SYNTHETIC', simulateProvider: true });
const denied = await runCapability(base, { scope: 'DENIED' });
const unknown = await runCapability({ ...base, capability_id: 'payments.transfer' }, { scope: 'PUBLIC_SYNTHETIC' });

function fixture(name, expected_valid, document) { return { name, expected_valid, document }; }
const fixtures = [
  fixture('technical request v1', true, base),
  fixture('academy request v1', true, academy),
  fixture('technical result rules', true, good),
  fixture('academy result rules', true, school),
  fixture('technical result fake adapter', true, fake),
  fixture('scope denied result', true, denied),
  fixture('unknown capability denied result', true, unknown),
  fixture('forged top-level tenant', false, { ...base, tenant_id: 'arbitrary-tenant' }),
  fixture('forged nested role', false, { ...base, input: { text: base.input.text, role: 'owner' } }),
  fixture('missing request kind', false, { ...base, kind: undefined }),
  fixture('wrong schema version', false, { ...base, schema_version: '9.0' }),
  fixture('unknown model mode', false, { ...good, mode: 'MAGIC' }),
  fixture('executed provider action claim', false, { ...good, proposed_actions: good.proposed_actions.map(a => ({ ...a, state: 'committed' })) }),
  fixture('missing result receipt', false, { ...good, receipt_id: undefined }),
  fixture('fabricated evidence authority', false, { ...good, evidence: good.evidence.map(e => ({ ...e, authority: 'admin_override' })) }),
  fixture('bad request UUID', false, { ...base, request_id: 'not-a-uuid' }),
  fixture('invalid provider billing', false, { ...good, provider_receipt: { provider: 'FAKE', billed_usd: -1 } }),
];

process.stdout.write(JSON.stringify({
  schema_id: 'urn:talunza:intelligence:envelope:v1',
  source: 'talunza-technical-services-web/intelligence-prototype',
  nature: 'ALL SYNTHETIC, NO EXTERNAL CALLS',
  fixtures,
}));
