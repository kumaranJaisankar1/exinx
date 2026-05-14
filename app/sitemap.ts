import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://exinx.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/nova',
    '/orbis',
    '/iyota',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
