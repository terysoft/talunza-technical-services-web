/** TALUNZA Technical Services: side-effect-free application domain core.
 * No persistence, auth, HTTP handlers, electrical certification or automatic customer quote issuance.
 */
export const REQUEST_TYPES = Object.freeze(['solar_new','solar_existing','electrical_first_fix','product_enquiry']);
export const LABOUR_BY_VOLTAGE_USD = Object.freeze({12:60,24:70,48:100});
export const DC_ONLY_LABOUR_USD = 40;
const text = (s,max)=>typeof s==='string' ? s.trim().slice(0,max) : '';
const watts = v=>typeof v==='number'&&Number.isFinite(v)&&v>0&&v<=100000;
const hours = v=>typeof v==='number'&&Number.isFinite(v)&&v>=0&&v<=24;

export function validateIntake(raw) {
  if(!raw||typeof raw!=='object'||Array.isArray(raw))return {ok:false,errors:['body_invalid']};
  const errors=[], serviceType=text(raw.serviceType,32), locality=text(raw.locality,120);
  const contactPhone=text(raw.contactPhone,40);
  if(!REQUEST_TYPES.includes(serviceType))errors.push('service_type_invalid');
  if(locality.length<2)errors.push('locality_required');
  if(contactPhone.length<5&&!raw.alternativeCallback)errors.push('callback_required');
  if(raw.contactConsent!==true)errors.push('contact_consent_required');
  if(raw.marketingConsent===true&&raw.contactConsent!==true)errors.push('invalid_marketing_consent');
  const appliances=Array.isArray(raw.appliances)?raw.appliances:[];
  if(appliances.length>50)errors.push('too_many_appliances');
  const mapped=appliances.slice(0,50).map((item,index)=>{
    const label=text(item?.label,120), quantity=item?.quantity;
    if(!label)errors.push(`appliance_${index}_label_required`);
    if(!Number.isInteger(quantity)||quantity<1||quantity>100)errors.push(`appliance_${index}_quantity_invalid`);
    if(item?.ratedWatts!=null&&!watts(item.ratedWatts))errors.push(`appliance_${index}_watts_invalid`);
    if(item?.hoursPerDay!=null&&!hours(item.hoursPerDay))errors.push(`appliance_${index}_hours_invalid`);
    return {label,quantity,ratedWatts:item?.ratedWatts??null,hoursPerDay:item?.hoursPerDay??null};
  });
  if(serviceType==='solar_new'&&mapped.length===0)errors.push('appliances_required');
  return {ok:errors.length===0,errors,data:{serviceType,locality,contactPhone,
    notes:text(raw.notes,1800),appliances:mapped,contactConsent:true,marketingConsent:raw.marketingConsent===true}};
}

export function assessDailyLoads(appliances) {
  if(!Array.isArray(appliances))throw new TypeError('appliances must be array');
  let knownWh=0; const missing=[];
  for(const [index,item] of appliances.entries()){
    if(!Number.isInteger(item.quantity)||item.quantity<1||item.quantity>100)throw new RangeError('invalid quantity');
    if(!watts(item.ratedWatts)||!hours(item.hoursPerDay)){
      missing.push({index,label:text(item.label,120),reason:!watts(item.ratedWatts)?'rated_watts_missing':'hours_missing'});continue;
    }
    knownWh+=item.quantity*item.ratedWatts*item.hoursPerDay;
  }
  return {status:missing.length?'INFORMATION_REQUIRED':'READY_FOR_TECHNICAL_REVIEW',
    knownDailyWh:Number(knownWh.toFixed(2)),missing,notASystemRecommendation:true};
}

export function installationLabourUsd({dcOnly=false,verifiedBatteryVoltage=null}={}) {
  if(dcOnly===true)return DC_ONLY_LABOUR_USD;
  if(!Number.isInteger(verifiedBatteryVoltage)||!Object.hasOwn(LABOUR_BY_VOLTAGE_USD,verifiedBatteryVoltage))
    return {status:'HOLD',reason:'verified_battery_voltage_required'};
  return LABOUR_BY_VOLTAGE_USD[verifiedBatteryVoltage];
}

export function quoteDraft({approvedEquipmentRetailUsd,materialsUsd,siteTravelUsd,labourUsd,priceApproved,siteReviewed}) {
  if(priceApproved!==true||siteReviewed!==true)return {status:'HOLD',reason:'approval_or_site_review_missing'};
  const vals=[approvedEquipmentRetailUsd,materialsUsd,siteTravelUsd,labourUsd];
  if(vals.some(v=>typeof v!=='number'||!Number.isFinite(v)||v<0||
    Math.abs(v*100-Math.round(v*100))>1e-7))return {status:'HOLD',reason:'invalid_or_unassessed_money'};
  const cents=vals.map(v=>Math.round(v*100));
  return {status:'DRAFT_REQUIRES_HUMAN_APPROVAL',currency:'USD',
    lines:{equipment:cents[0]/100,materials:cents[1]/100,siteTravel:cents[2]/100,labour:cents[3]/100},
    totalUsd:cents.reduce((a,b)=>a+b,0)/100};
}
