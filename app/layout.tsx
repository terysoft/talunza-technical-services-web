import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Talunza Technical Services | Chiredzi & Lowveld',
  description:
    'Electrical, solar, CCTV, Starlink, networking, refrigeration, fabrication, mechanical and technical services across Chiredzi and the Lowveld.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
