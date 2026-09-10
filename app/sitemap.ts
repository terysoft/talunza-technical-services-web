import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://talunza.co.zw/technical';
  const paths = ['', '/electrical', '/solar', '/connectivity', '/computers-software'];
  return paths.map((path, index) => ({
    url: `${base}${path}/`,
    lastModified: new Date('2026-09-11T00:00:00Z'),
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 0.9 : 0.8,
  }));
}
