import test from 'node:test';
import assert from 'node:assert/strict';
import { runCapability } from './capability-runner.mjs';
import { evaluateAttention } from './attention-engine.mjs';
import { createFakeProvider } from './fake-provider.mjs';

// Strictly synthetic no-network safety regression cases.
// These English keyword tests are NOT a clinical/electrical safety classifier.
const ID = 'e6b9c8ff-2d14-4cde-8ed7-1d6710a82f44';
const makeRequest = text => ({
  kind:'request', schema_version:'1.0', request_id:ID,
  app_id:'talunza-technical-services-web',
  capability_id:'technical.intake_triage', locale:'en-ZW', input:{text}
});
const intake = text => runCapability(makeRequest(text), {scope:'PUBLIC_SYNTHETIC'});

for (const phrase of ['smoke coming from inverter','electric shock from cable','burning smell near breaker']) {
  test('existing explicit English hazard: ' + phrase, async () => {
    const r=await intake(phrase);
    assert.match(r.answer,/^Potential hazard mentioned/);
    assert.equal(r.proposed_actions[0].state,'proposal_only');
  });
}
for (const phrase of ['inverter smoking','inverter sparking','battery overheating','cable getting hot','wires arcing']) {
  test('needs safety escalation: ' + phrase, async () => {
    const r=await intake(phrase);
    assert.match(r.answer,/^Potential hazard mentioned/);
  });
}
test('normal service intake remains a proposal', async () => {
  const r=await intake('Router cannot connect to Starlink');
  assert.equal(r.draft_category,'connectivity');
  assert.match(r.answer,/not a confirmed diagnosis/);
  assert.equal(r.proposed_actions[0].state,'proposal_only');
});
test('untrusted tenant metadata denied', async () => {
  const r=await runCapability({...makeRequest('My router is offline'), tenant_id:'other-customer'}, {scope:'PUBLIC_SYNTHETIC'});
  assert.equal(r.status,'denied');
  assert.equal(r.proposed_actions.length,0);
});
test('fake provider executes no payment tool', async () => {
  const r=await runCapability(makeRequest('My router is offline'), {scope:'PUBLIC_SYNTHETIC', simulateProvider:true, fakeInjectForbiddenAction:true});
  assert.deepEqual(r.proposed_actions.map(x=>x.action_id), ['technical.review_intake_draft']);
});
test('alert stale snapshot suppressed',() => {
  const r=evaluateAttention({
    scope:'PUBLIC_SYNTHETIC',now:'2026-11-18T12:00:00+02:00',
    snapshot:{kind:'stock.threshold',ref:'synthetic:product-a',revision:'r1',
      observed_at:'2026-11-08T12:00:00+02:00',quantity:1,reorder_level:5}
  });
  assert.deepEqual(r,[]);
});
test('no fake provider billing', async () => {
  const p=createFakeProvider();
  const r=await p.generate({capability_id:'technical.intake_triage',
    input:'router not working',max_output_chars:240,tools:[]});
  assert.equal(r.receipt.billed_usd,0);
});
