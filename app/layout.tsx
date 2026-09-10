import './globals.css';
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

const localBusinessSchema = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness',
  name: 'Talunza Technical Services', url: `${siteUrl}/`, telephone: '+263777323918',
  areaServed: ['Chiredzi', 'Triangle', 'Hippo Valley', 'Mkwasine', 'Boli', 'Chingele', 'Ngundu', 'Rutenga'],
  address: { '@type': 'PostalAddress', addressLocality: 'Chiredzi', addressRegion: 'Masvingo', addressCountry: 'ZW' },
  description: 'Technical installation, fault finding, repair, solar, electrical, connectivity, computer support and practical fabrication for Chiredzi and the Lowveld.',
  parentOrganization: { '@type': 'Organization', name: 'Talunza', url: 'https://talunza.co.zw/' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} /></body></html>;
}
