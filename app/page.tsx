"use client";

import BackgroundCanvas from "@/components/BackgroundCanvas";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import React, { useRef, useEffect } from 'react';
import HeroSection from "@/components/sections/HeroSection";
import Marquee from "@/components/sections/Marquee";
import AboutSection from "@/components/sections/AboutSection";
import ProductSection from "@/components/sections/ProductSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Metrics from "@/components/sections/Metrics";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <BackgroundCanvas />
      <div className="noise-overlay" />
      
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <HeroSection />
          <Marquee />
          <AboutSection />
          <ProductSection />
          <HowItWorks />
          <Testimonials />
          <Metrics />
          <CTA />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
