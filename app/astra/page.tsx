"use client";

import AstraBackground from "@/components/astra/AstraBackground";
import AstraHero from "@/components/astra/AstraHero";
import AstraIntelligence from "@/components/astra/AstraIntelligence";
import AstraDichotomy from "@/components/astra/AstraDichotomy";
import AstraWorkflows from "@/components/astra/AstraWorkflows";
import AstraAudiences from "@/components/astra/AstraAudiences";
import AstraProcess from "@/components/astra/AstraProcess";
import AstraCTA from "@/components/astra/AstraCTA";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/CustomCursor";
import AstraDataCore from "@/components/astra/AstraDataCore";
import TransformativeSection from "@/components/astra/TransformativeSection";

export default function AstraPage() {
  return (
    <main className="relative bg-black overflow-x-hidden">
      <CustomCursor />
      
      {/* Background Layers */}
      <AstraBackground />
      <AstraDataCore />
      
      <div className="relative z-10">
        <AstraHero />
        
        <TransformativeSection>
          <AstraIntelligence />
        </TransformativeSection>
        
        <TransformativeSection>
          <AstraDichotomy />
        </TransformativeSection>
        
        <TransformativeSection>
          <AstraWorkflows />
        </TransformativeSection>
        
        <TransformativeSection>
          <AstraAudiences />
        </TransformativeSection>
        
        <TransformativeSection>
          <AstraProcess />
        </TransformativeSection>
        
        <TransformativeSection>
          <AstraCTA />
        </TransformativeSection>
        
        <Footer />
      </div>
    </main>
  );
}
