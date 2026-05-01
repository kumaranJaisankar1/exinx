import Loader from '@/components/Loader';
import Hero from '@/components/Hero';
import ProcessSection from '@/components/ProcessSection';
import BentoGrid from '@/components/BentoGrid';
import ScrollToTop from '@/components/ScrollToTop';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EXINX | Exponential Intelligence X-Factor',
  description: 'EXINX is the future of external intelligence, providing powerful AI-driven academic and management tools including Orbis, Nova, and Astra.',
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EXINX",
    "operatingSystem": "Web",
    "applicationCategory": "EducationalApplication, AIApplication",
    "description": "Exponential Intelligence X-factor (EXINX) - Advanced educational ecosystem management and AI cognitive layers.",
    "softwareAddOn": [
      {
        "@type": "SoftwareApplication",
        "name": "Orbis",
        "description": "Educational Ecosystem Management"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Nova (MindIQX)",
        "description": "The Intelligent AI Layer"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Astra",
        "description": "The Academic Precision Tool"
      }
    ]
  };

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Loader />
      <Hero />
      <ProcessSection />
      <BentoGrid />
      <ScrollToTop />

      {/* Footer */}
      <footer className="relative bg-background pt-24 overflow-hidden">
         <div className="px-12 py-4 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-slate-700 gap-4">
          <div>STRUCTURED_DATA: SoftwareApplication / JSON-LD ACTIVE</div>
          <div className="flex gap-6 uppercase tracking-widest">
            <span>Latency: 14ms</span>
            <span>Crawl Status: Indexable</span>
            <span className="text-slate-800">© 2026 EXINX Technologies</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

