import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://technical.talunza.co.zw'),
  title: {
    default: 'Talunza Technical Services | Chiredzi & Lowveld',
    template: '%s | Talunza Technical Services',
  },
  description:
    'Electrical fault finding, solar and solar pumps, inverter and battery systems, CCTV, Starlink, networking, computer repair, software services and practical fabrication in Chiredzi and the Lowveld.',
  keywords: [
    'Talunza',
    'Chiredzi technical services',
    'solar installation Chiredzi',
    'solar pump installation Chiredzi',
    'inverter repair Chiredzi',
    'electrical services Chiredzi',
    'CCTV Chiredzi',
    'Starlink installation Chiredzi',
    'computer repair Chiredzi',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_ZW',
    siteName: 'Talunza Technical Services',
    title: 'Talunza Technical Services | Chiredzi & Lowveld',
    description:
      'Practical installation, fault finding, repair, connectivity and fabrication support for homes, businesses, farms and institutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
