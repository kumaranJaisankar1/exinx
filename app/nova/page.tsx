import NovaPageClient from "@/components/nova/NovaPageClient";
import { SchemaMarkup, getProductSchema } from "@/components/seo/SchemaMarkup";
import { constructMetadata } from "@/lib/seo";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://exinx.com';

export const metadata = constructMetadata({
  title: 'Nova AI Learning Companion',
  description: 'Nova is an adaptive AI-powered learning system that understands how you think, processes how you learn, and delivers explanations aligned to your cognitive ability.',
  image: '/nova-og.png', // Assume there's a specific OG image for Nova
});

export default function NovaPage() {
  const productData = getProductSchema(SITE_URL, {
    name: 'Nova AI Learning Companion',
    description: 'An adaptive AI-powered learning system that understands your cognitive patterns.',
    image: '/nova-og.png',
  });

  return (
    <>
      <SchemaMarkup data={productData} />
      <NovaPageClient />
    </>
  );
}
