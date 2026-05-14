import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://exinx.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'], // Placeholder for sensitive routes
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
