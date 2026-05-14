import React from 'react';

interface SchemaMarkupProps {
  data: Record<string, any>;
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

/**
 * Generates Organization Schema
 */
export const getOrganizationSchema = (baseUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EXINX',
  url: baseUrl,
  logo: `${baseUrl}/icon.svg`,
  sameAs: [
    'https://twitter.com/exinx_tech',
    'https://linkedin.com/company/exinx',
  ],
  description: 'Extended Intelligence X-Factor (EXINX) - Pure EduTech Engineering featuring Nova, Orbis, and IyotaPrep ecosystems.',
});

/**
 * Generates WebSite Schema
 */
export const getWebSiteSchema = (baseUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'EXINX',
  url: baseUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${baseUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

/**
 * Generates Product Schema
 */
export const getProductSchema = (
  baseUrl: string,
  { name, description, image }: { name: string; description: string; image: string }
) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  description,
  image: `${baseUrl}${image}`,
  brand: {
    '@type': 'Brand',
    name: 'EXINX',
  },
  offers: {
    '@type': 'Offer',
    url: `${baseUrl}/${name.toLowerCase()}`,
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    price: '0.00', // Placeholder
  },
});
