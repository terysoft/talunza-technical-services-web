import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TALUNZA Intelligence Lab — Synthetic Preview',
  description: 'A synthetic, rules-only, no-key engineering demonstration. No live AI provider or customer service is connected.',
  robots: { index: false, follow: false },
};

export default function IntelligencePreviewLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
