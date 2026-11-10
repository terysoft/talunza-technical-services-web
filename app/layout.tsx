import './globals.css';
import './mobile-overrides.css';
import type { Metadata } from 'next';

const siteUrl = 'https://talunza.co.zw/technical';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Talunza Technical Services | Chiredzi & Lowveld',
    template: '%s | Talunza Technical Services',
  },
  description:
    'Electrical fault finding, solar and solar pumps, inverter and battery systems, CCTV, Starlink, networking, computer repair, software support and practical fabrication in Chiredzi and the Lowveld.',
  keywords: [
    'Talunza Technical Services', 'technical services Chiredzi', 'electrician Chiredzi',
    'solar installation Chiredzi', 'solar pump installation Chiredzi', 'inverter repair Chiredzi',
    'CCTV installation Chiredzi', 'Starlink installation Chiredzi', 'computer repair Chiredzi',
    'welding fabrication Chiredzi', 'Lowveld technical services Zimbabwe'
  ],
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: 'website', locale: 'en_ZW', siteName: 'Talunza Technical Services', url: `${siteUrl}/`,
    title: 'Talunza Technical Services | Chiredzi & Lowveld',
    description: 'Practical installation, fault finding, repair, connectivity, computer and fabrication support for homes, businesses, farms and institutions in Chiredzi and the Lowveld.',
  },
  twitter: {
    card: 'summary', title: 'Talunza Technical Services | Chiredzi & Lowveld',
    description: 'Electrical, solar, CCTV, Starlink, computers, software and fabrication in Chiredzi and the Lowveld.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

// A service-area business: customers receive field support, not an advertised walk-in shop.
// Preserve the canonical company identity and do not manufacture a street address or hours.
const mobileServiceAreas = ['Chiredzi', 'Triangle', 'Hippo Valley', 'Mkwasine', 'Boli', 'Chingele', 'Ngundu', 'Rutenga'];
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#business`,
      name: 'Talunza Technical Services',
      url: `${siteUrl}/`,
      telephone: '+263777323918',
      areaServed: mobileServiceAreas,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chiredzi',
        addressRegion: 'Masvingo',
        addressCountry: 'ZW',
      },
      description: 'Mobile technical installation, diagnostics and repair for homes, businesses, farms and institutions around Chiredzi and the Lowveld.',
      parentOrganization: { '@type': 'Organization', name: 'Talunza', url: 'https://talunza.co.zw/' },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#mobile-service`,
      name: 'Talunza Mobile Technical Services',
      serviceType: [
        'Electrical fault finding and wiring',
        'Solar systems, inverters and water pumps',
        'Starlink, networking and Wi-Fi',
        'CCTV installation and repair',
        'Computer repair and software support',
        'Practical welding and fabrication',
      ],
      providerMobility: 'dynamic',
      areaServed: mobileServiceAreas,
      provider: { '@id': `${siteUrl}/#business` },
      url: `${siteUrl}/`,
      description: 'Talunza primarily travels to customer sites for technical work and provides selected support remotely. Availability and job costs are confirmed before dispatch.',
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><script defer src="https://talunza.co.zw/analytics-loader.js"></script></head><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} /></body></html>;
}
