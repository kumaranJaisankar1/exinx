"use client";

import { useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import { TrustedBySection } from '@/components/sections/TrustedBySection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AIShowcaseSection } from '@/components/sections/AIShowcaseSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ProductShowcaseSection } from '@/components/sections/ProductShowcaseSection';
import ProcessSection from '@/components/ProcessSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { CinematicIntro } from '@/components/CinematicIntro';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EXINX",
    "operatingSystem": "Web",
    "applicationCategory": "EducationalApplication, AIApplication",
    "description": "Exponential Intelligence X-factor (EXINX) - Advanced educational ecosystem management and AI cognitive layers.",
  };

  return (
    <>
      <CinematicIntro onComplete={() => setIntroComplete(true)} />
      
      <main className={`relative min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-white transition-opacity duration-1000 ${introComplete ? 'opacity-100' : 'opacity-0'}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <AIShowcaseSection />
        <WhyChooseUsSection />
        <ProductShowcaseSection />
        <ProcessSection />
        <TestimonialsSection />
        <TechStackSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
