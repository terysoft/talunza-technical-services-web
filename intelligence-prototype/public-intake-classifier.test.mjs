import test from 'node:test';import assert from 'node:assert/strict';
import {classifyPublicIntake} from './public-intake-classifier.mjs';
const scenarios=[
 ['Need 500 egg incubator built','incubator'],['My hatchery incubator temperature controller broke','incubator'],
 ['Building a poultry brooder','incubator'],['Solar irrigation pump stopped','pump'],
 ['Borehole pump not starting','pump'],['Water pressure controller failed','pump'],
 ['MUST inverter error 63','solar'],['Solar battery not charging','solar'],
 ['Circuit breaker keeps tripping','electrical'],['My socket has no electricity','electrical'],
 ['Starlink router connection is down','connectivity'],['WiFi network failed','connectivity'],
 ['CCTV camera not recording','security'],['Alarm DVR needs repair','security'],
 ['DC fridge compressor stopped','refrigeration'],['Freezer cooling poorly','refrigeration'],
 ['Steel gate welding quote needed','fabrication'],['Metal bracket fabrication','fabrication'],
 ['My unusual gadget has a problem','other'],['Please assist with this issue','other'],
];
test('20 synthetic Zimbabwe-oriented requests route to explicit service or other',()=>{
  assert.equal(scenarios.length,20);
  for(const [description,expected] of scenarios){
    const r=classifyPublicIntake(description);
    assert.equal(r.category,expected,description);
    assert.equal(r.authority,'CLASSIFICATION_ONLY');
    assert.ok(r.question.length>15);
  }
});
test('specific incubator and pump intents outrank generic solar/electrical tokens',()=>{
  assert.equal(classifyPublicIntake('Solar irrigation pump wiring question').category,'pump');
  assert.equal(classifyPublicIntake('Incubator electrical wiring repair').category,'incubator');
});
test('critical hazards require review in all domains',()=>{
  for(const x of ['Smoke from inverter','Hot cable in solar controller','Electric shock near pump',
    'Incubator wire arcing','Leaking battery near charger']){
    assert.equal(classifyPublicIntake(x).hazard,true,x);
  }
});
test('normal question makes no safety certification claim',()=>{
  const r=classifyPublicIntake('MUST inverter error 63');
  assert.equal(r.hazard,false);
  assert.doesNotMatch(r.question,/safe to touch|reset now|approved installation/);
});
test('rejects invalid and unbounded input',()=>{
  for(const text of [null,3,'a','x'.repeat(2001)])assert.throws(()=>classifyPublicIntake(text),TypeError);
});
test('classifier never creates a quote, payment or job ID',()=>{
  const r=classifyPublicIntake('Incubator 500 eggs');
  for(const key of ['price','jobId','transactionRef','paymentVerified'])assert.equal(key in r,false);
});
