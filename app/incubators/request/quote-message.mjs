// Pure, dependency-free, browser-safe quote contract.
// Customer input is never sent until the person submits the form.
const DESTINATION = 'https://wa.me/263777323918';

const required = ['species', 'capacity', 'turning', 'power', 'customerMaterials', 'location'];

function clean(value, max = 180) {
  return String(value ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}

export function validateIncubatorQuote(fields) {
  if (!fields || typeof fields !== 'object') return 'Complete the request before continuing.';
  if (required.some((key) => !clean(fields[key]))) {
    return 'Please complete egg type, capacity, turning, power, location and materials arrangement.';
  }
  const rawCapacity = String(fields.capacity).trim();
  if (!/^[0-9]+$/.test(rawCapacity)) {
    return 'Enter a whole number of eggs per batch.';
  }
  const capacity = Number(rawCapacity);
  if (!Number.isSafeInteger(capacity) || capacity < 1 || capacity > 100000) {
    return 'Enter 1 to 100,000 eggs per batch. We still need to assess technical feasibility.';
  }
  if (clean(fields.location).length > 100 || clean(fields.species).length > 100) {
    return 'Use a shorter egg type or location description.';
  }
  return null;
}

export function createIncubatorQuoteMessage(fields) {
  const error = validateIncubatorQuote(fields);
  if (error) throw new RangeError(error);
  const lines = [
    'Hello TALUNZA. I would like a quotation for a made-to-order poultry egg incubator.',
    'Egg type: ' + clean(fields.species),
    'Target eggs per batch: ' + Number(fields.capacity),
    'Egg turning: ' + clean(fields.turning),
    'Available power: ' + clean(fields.power),
    'Backup power: ' + clean(fields.backup),
    'Requested controls: ' + clean(fields.controls),
    'Materials arrangement: ' + clean(fields.customerMaterials),
    'Location: ' + clean(fields.location, 100),
    'Collection/delivery: ' + clean(fields.delivery),
  ];
  const notes = clean(fields.notes, 600);
  if (notes) lines.push('Additional requirements: ' + notes);
  lines.push('Please confirm the design, approved materials list, fabrication labour and any separately agreed costs before purchases.');
  return lines.join('\n');
}

export function createIncubatorWhatsAppUrl(fields) {
  return DESTINATION + '?text=' + encodeURIComponent(createIncubatorQuoteMessage(fields));
}
