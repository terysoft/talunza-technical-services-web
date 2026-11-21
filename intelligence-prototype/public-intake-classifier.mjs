/** Free deterministic pre-intake classifier for public/synthetic examples.
 * No provider invocation, personal-data retrieval, final quote, diagnosis or actuation.
 */
const FAMILIES=Object.freeze([
  {id:'incubator',label:'Custom poultry incubators and temperature-control fabrication',
    pattern:/\b(incubator|hatchery|hatching|hatch|brooder)\b/i,
    question:'Is this a new build or repair? What egg capacity, power source and controls are required?'},
  {id:'pump',label:'Water pumps, boreholes and irrigation support',
    pattern:/\b(pump|borehole|irrigation|water pressure|pressure controller)\b/i,
    question:'What is the pump make and model, supply voltage, water source and observed problem?'},
  {id:'solar',label:'Solar, inverter and battery support',
    pattern:/\b(inverter|solar|battery|pv|charge|charger|panel|mppt)\b/i,
    question:'What are the equipment make, exact model and any displayed fault code?'},
  {id:'electrical',label:'Electrical installation and fault finding',
    pattern:/\b(socket|circuit|tripping|breaker|wiring|rccb|rcd|electricity|electrical|power cut)\b/i,
    question:'Which area or appliance is affected, and what did you observe?'},
  {id:'connectivity',label:'Starlink, Wi-Fi and networking',
    pattern:/\b(starlink|wifi|wi-fi|router|network|internet|signal|access point)\b/i,
    question:'What is the router or equipment model, and which devices are affected?'},
  {id:'security',label:'CCTV and security systems',
    pattern:/\b(cctv|camera|nvr|dvr|alarm)\b/i,
    question:'Which cameras or alarm devices are affected, and what is visible on the recorder?'},
  {id:'refrigeration',label:'Fridge, freezer and appliance support',
    pattern:/\b(fridge|freezer|cooling|refrigerator|compressor)\b/i,
    question:'What is the equipment make and model, and when did the cooling problem begin?'},
  {id:'fabrication',label:'Welding, fabrication and equipment repairs',
    pattern:/\b(welding|welder|steel|gate|bracket|fabrication|metal)\b/i,
    question:'Can you describe the material, approximate dimensions and required result?'},
]);
const HAZARD=/\b(smoke|sparks?|electric shock|electrocut|fire|burning smell|exposed live|hot cable|overheat|overheating|burnt wire|arcing|leaking battery)\b/i;

export function classifyPublicIntake(text){
  if(typeof text!=='string'||text.trim().length<3||text.length>2000)
    throw new TypeError('bounded public-synthetic description required');
  const family=FAMILIES.find(item=>item.pattern.test(text));
  return Object.freeze({category:family?.id??'other',
    label:family?.label??'General technical assessment',
    question:family?.question??'Which equipment is affected, and what symptoms have you observed?',
    hazard:HAZARD.test(text),authority:'CLASSIFICATION_ONLY'});
}
