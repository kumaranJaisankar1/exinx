"use client";

import { useEffect } from "react";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import Marquee from "@/components/sections/Marquee";
import BrandIntro from "@/components/sections/BrandIntro";
import ExInXProcess from "@/components/sections/ExInXProcess";
import CorePillars from "@/components/sections/CorePillars";
import WhyExInX from "@/components/sections/WhyExInX";
import PlatformImpact from "@/components/sections/PlatformImpact";
import ProductSection from "@/components/sections/ProductSection";
import Differentiators from "@/components/sections/Differentiators";
import VisionSection from "@/components/sections/VisionSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("home-theme");
    return () => document.body.classList.remove("home-theme");
  }, []);

  return (
    <>
      <CustomCursor />
      <BackgroundCanvas />
      <div className="noise-overlay" />

      <div className="relative z-10">

        <main>
          <HeroSection />
          <Marquee />
          
          <BrandIntro />
          <ExInXProcess />
          <CorePillars />
          <WhyExInX />
          <PlatformImpact />
          <ProductSection />
          <Differentiators />
          <VisionSection />
          <FinalCTA />
        </main>

        <Footer />
      </div>
    </>
  );
}
