import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: 'https://talunza.co.zw/technical/',
    lastModified: new Date('2026-09-10T00:00:00Z'),
    changeFrequency: 'weekly',
    priority: 0.9,
  }];
}
