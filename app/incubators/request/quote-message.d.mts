export interface IncubatorQuoteFields {
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
}
export function validateIncubatorQuote(fields: IncubatorQuoteFields): string | null;
export function createIncubatorQuoteMessage(fields: IncubatorQuoteFields): string;
export function createIncubatorWhatsAppUrl(fields: IncubatorQuoteFields): string;
