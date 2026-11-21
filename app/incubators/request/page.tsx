import type { Metadata } from 'next';
import QuoteBuilder from './QuoteBuilder';

export const metadata: Metadata = {
  title: 'Request a Custom Incubator Quote',
  description: 'Tell TALUNZA your egg type, desired batch size, turning and power requirements. Send a made-to-order incubator enquiry directly through WhatsApp. No fixed prices or stock claims.',
  alternates: { canonical: 'https://talunza.co.zw/technical/incubators/request/' },
  robots: { index: true, follow: true },
};

export default function IncubatorQuoteRequestPage() {
  return <QuoteBuilder />;
}
