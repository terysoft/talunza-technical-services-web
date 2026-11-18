import test from 'node:test';
import assert from 'node:assert/strict';
import { runCapability, MANIFESTS } from './capability-runner.mjs';
import { evaluateAttention } from './attention-engine.mjs';

const id = 'e6b9c8ff-2d14-4cde-8ed7-1d6710a82f44';
const ctx = { scope: 'PUBLIC_SYNTHETIC' };
function request(text, capability = 'technical.intake_triage', app = 'talunza-technical-services-web') {
  return { kind: 'request', schema_version: '1.0', request_id: id,
    app_id: app, capability_id: capability, locale: 'en-ZW', input: { text } };
}
const now = '2026-11-18T12:00:00+02:00';
function stock(overrides = {}) {
  return {
    kind: 'stock.threshold', ref: 'synthetic:stock-a', revision: 'r1',
    observed_at: '2026-11-18T11:00:00+02:00',
    quantity: 2, reorder_level: 5, ...overrides,
  };
}
function job(overrides = {}) {
  return {
    kind: 'technical.awaiting_information', ref: 'synthetic:job-a', revision: 'r1',
    observed_at: '2026-11-18T11:00:00+02:00',
    status: 'AWAITING_INFO', waiting_hours: 25, agreed_followup_hours: 24, ...overrides,
  };
}

test('two distinct consumer manifests share one request-result interface', async () => {
  assert.equal(Object.keys(MANIFESTS).length, 2);
  const technical = await runCapability(request('My solar inverter is not charging'), ctx);
  const academy = await runCapability(request('Explain measurement', 'academy.lesson_explain', 'talunza-academy'), ctx);
  for (const result of [technical, academy]) {
    assert.equal(result.kind, 'result');
    assert.equal(result.schema_version, '1.0');
    assert.equal(result.request_id, id);
    assert.equal(result.mode, 'RULES');
    assert.equal(result.status, 'drafted');
    assert.equal(result.provider_receipt, null);
    assert.equal(result.proposed_actions[0].state, 'proposal_only');
  }
});
test('solar intake routes to solar service family', async () => {
  const r = await runCapability(request('The inverter solar charger has a fault code'), ctx);
  assert.equal(r.draft_category, 'solar');
  assert.match(r.answer, /not a confirmed diagnosis/);
});
test('electrical intake routes to electrical family', async () => {
  const r = await runCapability(request('The house circuit breaker keeps tripping'), ctx);
  assert.equal(r.draft_category, 'electrical');
});
test('networking intake routes to connectivity', async () => {
  const r = await runCapability(request('The Starlink router cannot connect'), ctx);
  assert.equal(r.draft_category, 'connectivity');
});
test('CCTV intake routes to security', async () => {
  const r = await runCapability(request('The CCTV camera is blank'), ctx);
  assert.equal(r.draft_category, 'security');
});
test('refrigeration intake routes to refrigeration', async () => {
  const r = await runCapability(request('The fridge compressor has stopped'), ctx);
  assert.equal(r.draft_category, 'refrigeration');
});
test('welding intake routes to fabrication', async () => {
  const r = await runCapability(request('Need steel gate welding'), ctx);
  assert.equal(r.draft_category, 'fabrication');
});
test('unknown fault prompts classification question, not invented diagnosis', async () => {
  const r = await runCapability(request('Strange problem with my gadget'), ctx);
  assert.equal(r.draft_category, 'other');
  assert.match(r.answer, /Which equipment/);
});
test('smoke triggers hazard boundary and human review', async () => {
  const r = await runCapability(request('There is smoke coming from the inverter'), ctx);
  assert.equal(r.requires_human_review, true);
  assert.match(r.answer, /Do not open or touch/);
});
test('hazard skips injected simulated provider', async () => {
  let calls = 0;
  await runCapability(request('Sparks are flying from my solar charger'), {
    ...ctx, simulateProvider: true, provider: { async generate() { calls++; return { text: 'test' }; } },
  });
  assert.equal(calls, 0);
});
test('nonpublic scope denied: prototype cannot serve customer data', async () => {
  const r = await runCapability(request('My private record'), { scope: 'CUSTOMER_PRIVATE' });
  assert.equal(r.status, 'denied');
  assert.equal(r.error_code, 'scope_denied');
});
test('app mismatch denied', async () => {
  const r = await runCapability(request('Solar panel issue', 'technical.intake_triage', 'talunza-business'), ctx);
  assert.equal(r.status, 'denied');
});
test('unapproved locale denied rather than pretending Shona works', async () => {
  const r = await runCapability({ ...request('Solar issue'), locale: 'sn-ZW' }, ctx);
  assert.equal(r.status, 'denied');
});
test('unknown capability denied with no tool grants', async () => {
  const r = await runCapability(request('Do something', 'payments.transfer'), ctx);
  assert.equal(r.status, 'denied');
  assert.equal(r.proposed_actions.length, 0);
});
test('client-injected fake tenant and role do not grant authority', async () => {
  const r = await runCapability({ ...request('My router is down'), input: {
    text: 'My router is down', tenant_id: 'another-tenant', role: 'owner',
  } }, ctx);
  assert.equal(r.status, 'denied');
  assert.equal(r.error_code, 'malformed_envelope');
  assert.equal(r.proposed_actions.length, 0);
});
test('forged top-level tenant authorization field rejected', async () => {
  const r = await runCapability({ ...request('Router offline'), tenant_id: 'another-tenant' }, ctx);
  assert.equal(r.status, 'denied');
  assert.equal(r.error_code, 'malformed_envelope');
});
test('input shorter than three characters denied', async () => {
  const r = await runCapability(request('A'), ctx);
  assert.equal(r.error_code, 'invalid_input');
});
test('input longer than 2000 characters denied', async () => {
  const r = await runCapability(request('x'.repeat(2001)), ctx);
  assert.equal(r.error_code, 'invalid_input');
});
test('unsupported schema throws without executing an action', async () => {
  await assert.rejects(runCapability({ ...request('Solar'), schema_version: '99.0' }, ctx), TypeError);
});
test('invalid non-UUID request ID throws', async () => {
  await assert.rejects(runCapability({ ...request('Solar'), request_id: 'admin' }, ctx), TypeError);
});
test('missing request kind throws', async () => {
  await assert.rejects(runCapability({ ...request('Solar'), kind: 'result' }, ctx), TypeError);
});
test('fake adapter is opt-in and its proposed tool actions are ignored', async () => {
  let calls = 0;
  const r = await runCapability(request('My router is offline'), {
    ...ctx, simulateProvider: true, provider: { async generate(input) {
      calls++; assert.deepEqual(input.tools, []);
      return { text: 'Mock-only additional question.', proposed_actions: [
        { action_id: 'payments.transfer', state: 'committed' },
      ] };
    } },
  });
  assert.equal(calls, 1);
  assert.match(r.answer, /SIMULATED MODEL ONLY/);
  assert.deepEqual(r.proposed_actions.map(a => a.action_id), ['technical.review_intake_draft']);
  assert.equal(r.mode, 'RULES');
  assert.equal(r.provider_receipt, null);
});
test('fake adapter failure returns safe rules fallback', async () => {
  const r = await runCapability(request('Fridge cooling stopped'), {
    ...ctx, simulateProvider: true, provider: { async generate() { throw Error('provider down'); } },
  });
  assert.equal(r.status, 'drafted');
  assert.equal(r.mock_info.mode, 'failed-fallback-rules');
  assert.match(r.answer, /Suggested service category/);
});
test('oversized fake response is not inserted into answer', async () => {
  const r = await runCapability(request('Router cannot connect'), {
    ...ctx, simulateProvider: true, provider: { async generate() { return { text: 'x'.repeat(500) }; } },
  });
  assert.doesNotMatch(r.answer, /SIMULATED MODEL ONLY/);
});
test('Academy example does not imply real progress or reviewed curriculum', async () => {
  const r = await runCapability(request('Convert centimetres', 'academy.lesson_explain', 'talunza-academy'), ctx);
  assert.match(r.answer, /Synthetic measurement practice/);
  assert.match(r.uncertainty, /not an educator-reviewed/);
});
test('one locally sourced stock attention card', () => {
  const r = evaluateAttention({ snapshot: stock(), scope: 'PUBLIC_SYNTHETIC', now });
  assert.equal(r.length, 1);
  assert.equal(r[0].priority, 'normal');
  assert.equal(r[0].model_receipt_id, null);
});
test('stock recovered above threshold suppresses card', () => {
  assert.equal(evaluateAttention({ snapshot: stock({ quantity: 7 }), scope: 'PUBLIC_SYNTHETIC', now }).length, 0);
});
test('negative/invalid stock excluded rather than redefining ledger', () => {
  assert.equal(evaluateAttention({ snapshot: stock({ quantity: -2 }), scope: 'PUBLIC_SYNTHETIC', now }).length, 0);
});
test('old/stale data does not trigger attention', () => {
  assert.equal(evaluateAttention({ snapshot: stock({ observed_at: '2026-11-10T11:00:00+02:00' }), scope: 'PUBLIC_SYNTHETIC', now }).length, 0);
});
test('future timestamps do not trigger attention', () => {
  assert.equal(evaluateAttention({ snapshot: stock({ observed_at: '2026-11-20T11:00:00+02:00' }), scope: 'PUBLIC_SYNTHETIC', now }).length, 0);
});
test('private data never produces a preview card', () => {
  assert.equal(evaluateAttention({ snapshot: stock(), scope: 'CUSTOMER_PRIVATE', now }).length, 0);
});
test('same source revision gets same stable card identity', () => {
  const options = { snapshot: stock(), scope: 'PUBLIC_SYNTHETIC', now };
  assert.equal(evaluateAttention(options)[0].card_id, evaluateAttention(options)[0].card_id);
});
test('dismissed card suppressed on repeated evaluation', () => {
  const cardId = evaluateAttention({ snapshot: stock(), scope: 'PUBLIC_SYNTHETIC', now })[0].card_id;
  assert.equal(evaluateAttention({ snapshot: stock(), scope: 'PUBLIC_SYNTHETIC', now, dismissed: [cardId] }).length, 0);
});
test('job beyond agreed follow-up creates draft-only card', () => {
  const r = evaluateAttention({ snapshot: job(), scope: 'PUBLIC_SYNTHETIC', now });
  assert.equal(r.length, 1);
  assert.match(r[0].suggested_action, /do not send automatically/);
});
test('job without actual agreed follow-up does not invent one', () => {
  assert.equal(evaluateAttention({ snapshot: job({ agreed_followup_hours: undefined }), scope: 'PUBLIC_SYNTHETIC', now }).length, 0);
});
test('job still inside agreed interval suppresses card', () => {
  assert.equal(evaluateAttention({ snapshot: job({ waiting_hours: 1 }), scope: 'PUBLIC_SYNTHETIC', now }).length, 0);
});
test('missing event reference prevents attention', () => {
  assert.equal(evaluateAttention({ snapshot: stock({ ref: 'private:stock-a' }), scope: 'PUBLIC_SYNTHETIC', now }).length, 0);
});
test('unknown event kind never triggers action', () => {
  assert.equal(evaluateAttention({ snapshot: stock({ kind: 'payments.execute' }), scope: 'PUBLIC_SYNTHETIC', now }).length, 0);
});
