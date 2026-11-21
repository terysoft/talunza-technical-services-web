export type IncubatorQuoteDetails = {
  species: string;
  capacity: string;
  turning: string;
  power: string;
  backup: string;
  controls: string;
  customerMaterials: string;
  location: string;
  delivery: string;
  notes: string;
};

const whatsAppNumber = '263777323918';

function cleanField(value: string): string {
  return value.replace(/[\r\n\t]+/g, ' ').trim();
}

export function validateIncubatorQuote(data: IncubatorQuoteDetails): string {
  if (!/^\d{1,9}$/.test(data.capacity.trim()) || !Number.isSafeInteger(Number(data.capacity)) || Number(data.capacity) < 1 || Number(data.capacity) > 100000) {
    return 'Enter a whole number of eggs per batch (1 to 100,000). Larger industrial requests can be discussed directly.';
  }
  for (const field of ['species', 'turning', 'power', 'customerMaterials', 'location'] as const) {
    if (!cleanField(data[field])) return 'Please complete egg type, turning, power, location and material arrangement.';
  }
  if (data.location.length > 100 || data.notes.length > 600) {
    return 'Please shorten the location or additional requirements.';
  }
  return '';
}

export function buildIncubatorQuoteMessage(data: IncubatorQuoteDetails): string {
  const error = validateIncubatorQuote(data);
  if (error) throw new Error(error);
  const lines = [
    'Hello TALUNZA. I would like a quotation for a made-to-order poultry egg incubator.',
    'Egg type: ' + cleanField(data.species),
    'Target egg capacity per batch: ' + Number(data.capacity),
    'Egg turning: ' + cleanField(data.turning),
    'Available power: ' + cleanField(data.power),
    'Backup power: ' + cleanField(data.backup),
    'Requested controls: ' + cleanField(data.controls),
    'Materials arrangement: ' + cleanField(data.customerMaterials),
    'Location: ' + cleanField(data.location),
    'Collection/delivery: ' + cleanField(data.delivery),
  ];
  if (data.notes.trim()) lines.push('Additional requirements: ' + cleanField(data.notes));
  lines.push('Please confirm the design, approved materials list, labour and other separately agreed costs before purchases.');
  return lines.join('\n');
}

export function buildIncubatorWhatsAppUrl(data: IncubatorQuoteDetails): string {
  return 'https://wa.me/' + whatsAppNumber + '?text=' + encodeURIComponent(buildIncubatorQuoteMessage(data));
}
