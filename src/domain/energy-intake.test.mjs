import test from 'node:test';
import assert from 'node:assert/strict';
import {validateIntake,assessDailyLoads,installationLabourUsd,quoteDraft} from './energy-intake.mjs';
const base={serviceType:'solar_new',locality:'Chiredzi',contactPhone:'0777323918',contactConsent:true,appliances:[{label:'Fridge',quantity:1,ratedWatts:100,hoursPerDay:8}]};
test('valid intake preserves input',()=>{const x=validateIntake(base);assert.equal(x.ok,true);assert.equal(x.data.locality,'Chiredzi');});
test('consent and callback required',()=>{const x=validateIntake({...base,contactConsent:false,contactPhone:''});assert.equal(x.ok,false);assert.ok(x.errors.includes('contact_consent_required'));assert.ok(x.errors.includes('callback_required'));});
test('reject invalid appliance input',()=>{assert.equal(validateIntake({...base,appliances:[{label:'Motor',quantity:1,ratedWatts:-1}]}).ok,false);assert.ok(validateIntake({...base,appliances:Array(51).fill(base.appliances[0])}).errors.includes('too_many_appliances'));});
test('partial load never invents watts',()=>{const x=assessDailyLoads([{label:'TV',quantity:1,ratedWatts:50,hoursPerDay:4},{label:'Pump',quantity:1,ratedWatts:null,hoursPerDay:2}]);assert.equal(x.status,'INFORMATION_REQUIRED');assert.equal(x.knownDailyWh,200);assert.equal(x.missing.length,1);});
test('complete load still needs review',()=>{const x=assessDailyLoads(base.appliances);assert.equal(x.knownDailyWh,800);assert.equal(x.status,'READY_FOR_TECHNICAL_REVIEW');});
test('rate keyed to verified battery voltage',()=>{assert.equal(installationLabourUsd({dcOnly:true}),40);for(const [v,p] of [[12,60],[24,70],[48,100]])assert.equal(installationLabourUsd({verifiedBatteryVoltage:v}),p);assert.equal(installationLabourUsd({verifiedBatteryVoltage:36}).status,'HOLD');});
test('approved quote keeps equipment, labour, materials and travel separate',()=>{const x=quoteDraft({approvedEquipmentRetailUsd:600,materialsUsd:20,siteTravelUsd:10,verifiedBatteryVoltage:24,priceApproved:true,siteReviewed:true});assert.equal(x.totalUsd,700);assert.equal(x.lines.siteTravel,10);});
test('missing travel or materials blocks quote',()=>{for(const travel of [undefined,-1,NaN])assert.equal(quoteDraft({approvedEquipmentRetailUsd:600,materialsUsd:0,siteTravelUsd:travel,verifiedBatteryVoltage:24,priceApproved:true,siteReviewed:true}).status,'HOLD');});
test('unauthorised quote blocked',()=>{assert.equal(quoteDraft({approvedEquipmentRetailUsd:600,materialsUsd:0,siteTravelUsd:0,verifiedBatteryVoltage:24,priceApproved:false,siteReviewed:true}).status,'HOLD');});
test('fractional cents blocked',()=>{assert.equal(quoteDraft({approvedEquipmentRetailUsd:600.001,materialsUsd:0,siteTravelUsd:0,verifiedBatteryVoltage:24,priceApproved:true,siteReviewed:true}).status,'HOLD');});

test('caller cannot override labour bracket with a submitted amount',()=>{const q=quoteDraft({approvedEquipmentRetailUsd:600,materialsUsd:0,siteTravelUsd:0,verifiedBatteryVoltage:24,labourUsd:1,priceApproved:true,siteReviewed:true});assert.equal(q.totalUsd,670);});
test('unknown voltage blocks quote',()=>{const q=quoteDraft({approvedEquipmentRetailUsd:600,materialsUsd:0,siteTravelUsd:0,verifiedBatteryVoltage:null,priceApproved:true,siteReviewed:true});assert.equal(q.status,'HOLD');});
