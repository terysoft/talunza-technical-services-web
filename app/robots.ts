import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    // Public pages are discoverable by search crawlers, including ChatGPT Search.
    // GPTBot (model training) is a separate policy decision and is not changed here.
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
    ],
    sitemap: 'https://talunza.co.zw/technical/sitemap.xml',
  };
}
