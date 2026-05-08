"use client";

import NovaHero from "@/components/sections/NovaHero";
import ProblemSection from "@/components/nova/ProblemSection";
import ProcessTimeline from "@/components/nova/ProcessTimeline";
import CapabilitiesSection from "@/components/nova/CapabilitiesSection";
import IntelligenceEngine from "@/components/nova/IntelligenceEngine";
import ComparisonSection from "@/components/nova/ComparisonSection";
import CurriculumSection from "@/components/nova/CurriculumSection";
import PricingSection from "@/components/nova/PricingSection";
import FAQSection from "@/components/nova/FAQSection";
import FinalCTA from "@/components/nova/FinalCTA";
import NovaBackgroundCanvas from "@/components/nova/NovaBackgroundCanvas";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/sections/Footer";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import Navbar from "@/components/Navbar";

export default function NovaPage() {
  return (
    <main className="relative [--primary:#D97706] [--accent:#D97706]">
      <CustomCursor />

      <div className="relative z-10">
        <NovaHero
          trustBadge={{
            text: "Nova Intelligence",
            icons: [""]
          }}
          headline={{
            line1: "PERSONALIZED AI",
            line2: "That Teaches You"
          }}
          subtitle="Nova is an adaptive AI-powered learning system that understands how you think, processes how you learn, and delivers explanations aligned to your cognitive ability."
          description="Built for students who want more than just answers, Nova ensures every concept is understood the right way, at the right level, with the right depth."
          buttons={{
            primary: {
              text: "Start Learning Free",
              onClick: () => window.dispatchEvent(new CustomEvent('open-signal-form'))
            },
            secondary: {
              text: "Explore How It Works",
              onClick: () => document.getElementById('problem-section')?.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        />

        <div className="bg-background">
          <ProblemSection />
          <ProcessTimeline />
          <CapabilitiesSection />
          <IntelligenceEngine />
          <ComparisonSection />
          <CurriculumSection />
          <PricingSection />
          <FAQSection />
          <FinalCTA />
          <Footer />
        </div>
      </div>
    </main>
  );
}
