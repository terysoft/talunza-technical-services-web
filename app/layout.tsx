import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://technical.talunza.co.zw'),
  title: {
    default: 'Talunza Technical Services | Chiredzi & Lowveld',
    template: '%s | Talunza Technical Services',
  },
  description:
    'Electrical fault finding, solar and solar pumps, inverter and battery systems, CCTV, Starlink, networking, computer repair, software support and practical fabrication in Chiredzi and the Lowveld.',
  keywords: [
    'Talunza Technical Services',
    'technical services Chiredzi',
    'electrician Chiredzi',
    'solar installation Chiredzi',
    'solar pump installation Chiredzi',
    'inverter repair Chiredzi',
    'CCTV installation Chiredzi',
    'Starlink installation Chiredzi',
    'computer repair Chiredzi',
    'welding fabrication Chiredzi',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_ZW',
    siteName: 'Talunza Technical Services',
    url: '/',
    title: 'Talunza Technical Services | Chiredzi & Lowveld',
    description:
      'Practical installation, fault finding, repair, connectivity, computer and fabrication support for homes, businesses, farms and institutions.',
  },
  twitter: {
    card: 'summary',
    title: 'Talunza Technical Services | Chiredzi & Lowveld',
    description: 'Install. Repair. Connect. Protect. Make.',
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Talunza Technical Services',
  url: 'https://technical.talunza.co.zw',
  telephone: '+263777323918',
  areaServed: ['Chiredzi', 'Triangle', 'Hippo Valley', 'Mkwasine', 'Boli', 'Chingele', 'Ngundu', 'Rutenga'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chiredzi',
    addressCountry: 'ZW',
  },
  description:
    'Technical installation, fault finding, repair, connectivity, computer support and practical fabrication for Chiredzi and the Lowveld.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
