"use client";

import NovaHero from "@/components/sections/NovaHero";
import ProblemSection from "@/components/nova/ProblemSection";
import CognitionSection from "@/components/nova/CognitionSection";
import ProcessTimeline from "@/components/nova/ProcessTimeline";
import CapabilitiesSection from "@/components/nova/CapabilitiesSection";
import IntelligenceEngine from "@/components/nova/IntelligenceEngine";
import ComparisonSection from "@/components/nova/ComparisonSection";
import CurriculumSection from "@/components/nova/CurriculumSection";
import StudentExperience from "@/components/nova/StudentExperience";
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
    <main className="relative">
      <CustomCursor />
      <BackgroundCanvas />

      <div className="relative z-10">
        <Navbar />
        <NovaHero
          trustBadge={{
            text: "Nova Core",
            icons: ["⚡"]
          }}
          headline={{
            line1: "PERSONALIZED AI",
            line2: "FOR YOUR IQ."
          }}
          subtitle="Nova is a revolutionary AI that identifies your cognitive fingerprint and rewrites its teaching engine in real-time to match your unique intelligence."
          buttons={{
            primary: {
              text: "Experience Nova",
              onClick: () => console.log("Explore Nova")
            }
          }}
        />

        <ProblemSection />
        <CognitionSection />
        <ProcessTimeline />
        <CapabilitiesSection />
        <IntelligenceEngine />
        <ComparisonSection />
        <CurriculumSection />
        <StudentExperience />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
