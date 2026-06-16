"use client";

import NovaHero from "@/components/sections/NovaHero";
import ProblemSection from "@/components/nova/ProblemSection";
import ProcessTimeline from "@/components/nova/ProcessTimeline";
import NovaUseCaseSection from "@/components/nova/NovaUseCaseSection";
import CapabilitiesSection from "@/components/nova/CapabilitiesSection";
import IntelligenceEngine from "@/components/nova/IntelligenceEngine";
import ComparisonSection from "@/components/nova/ComparisonSection";
import CurriculumSection from "@/components/nova/CurriculumSection";
import PricingSection from "@/components/nova/PricingSection";
import FAQSection from "@/components/nova/FAQSection";
import FinalCTA from "@/components/nova/FinalCTA";
import CustomCursor from "@/components/CustomCursor";
import NovaFooter from "@/components/sections/NovaFooter";

export default function NovaPageClient() {
  return (
    <main className="relative overflow-x-clip [--primary:#D97706] [--accent:#D97706]">
      <CustomCursor />

      <div className="relative z-10">
        <NovaHero
          trustBadge={{
            text: "Nova Intelligence",
            icons: [""],
          }}
          headline={{
            line1: "PERSONALIZED AI",
            line2: "That Teaches You",
          }}
          subtitle="Nova is an adaptive AI-powered learning system that understands your learning patterns and delivers personalized content aligned with your cognitive ability."
          description="Built for students who want more than just answers, Nova ensures every concept is understood the right way, at the right level, with the right depth."
          buttons={{
            primary: {
              text: "Start Learning Free",
              onClick: () =>
                window.dispatchEvent(new CustomEvent("open-signal-form")),
            },
            secondary: {
              text: "Explore How It Works",
              onClick: () =>
                document
                  .getElementById("problem-section")
                  ?.scrollIntoView({ behavior: "smooth" }),
            },
          }}
        />

        <div className="bg-background">
          <div id="problem-section">
            <ProblemSection />
          </div>
          <div id="process">
            <ProcessTimeline />
          </div>
          <NovaUseCaseSection />
          <CapabilitiesSection />
          <IntelligenceEngine />
          <ComparisonSection />
          <div id="curriculum">
            <CurriculumSection />
          </div>
          <div id="pricing">
            <PricingSection />
          </div>
          <FAQSection />
          <FinalCTA />
          <NovaFooter />
        </div>
      </div>
    </main>
  );
}
