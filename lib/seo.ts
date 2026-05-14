import { Metadata } from 'next';
import { siteConfig } from './config';

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  icons?: Metadata['icons'];
  noIndex?: boolean;
  canonical?: string;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://exinx.com';

export function constructMetadata({
  title,
  description = siteConfig.branding.tagline,
  image = '/og-image.png', // Default OG image
  icons = {
    icon: '/icon.svg',
  },
  noIndex = false,
  canonical,
}: SeoProps = {}): Metadata {
  const pageTitle = title 
    ? `${title} | ${siteConfig.branding.name}` 
    : `${siteConfig.branding.name} | ${siteConfig.branding.fullName}`;

  return {
    title: pageTitle,
    description,
    keywords: [
      'EdTech',
      'AI Learning',
      'Adaptive Learning',
      'Nova AI',
      'Orbis Knowledge',
      'IyotaPrep',
      'Educational Technology',
      'AI Tutoring',
      'Future of Education',
    ],
    authors: [{ name: 'EXINX Technologies' }],
    creator: 'EXINX Technologies',
    openGraph: {
      title: pageTitle,
      description,
      url: SITE_URL,
      siteName: siteConfig.branding.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'EXINX - Extended Intelligence',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [image],
      creator: '@exinx_tech', // Placeholder handle
    },
    icons,
    metadataBase: new URL(SITE_URL),
    ...(canonical && {
      alternates: {
        canonical: canonical,
      },
    }),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
