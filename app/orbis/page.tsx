"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import OrbisHero from "@/components/orbis/OrbisHero";
import OrbisBackgroundCanvas from "@/components/orbis/OrbisBackgroundCanvas";
import RegistryCore from "@/components/orbis/RegistryCore";
import FlowState from "@/components/orbis/FlowState";
import KnowledgeArchives from "@/components/orbis/KnowledgeArchives";
import SatelliteNetwork from "@/components/orbis/SatelliteNetwork";
import AnalyticsVision from "@/components/orbis/AnalyticsVision";
import Orbis3DElements from "@/components/orbis/Orbis3DElements";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";

export default function OrbisPage() {
  const openForm = () => window.dispatchEvent(new CustomEvent('open-signal-form'));

  return (
    <main className="relative bg-black overflow-x-hidden min-h-screen">
      {/* Dynamic 3D Layer */}
      <CustomCursor />
      <OrbisBackgroundCanvas />
      {/* <Orbis3DElements /> */}

      <div className="relative z-10">
        <Navbar />
        <OrbisHero />

        <div className="space-y-0 relative">
          <RegistryCore />
          <FlowState />
          <KnowledgeArchives />
          <SatelliteNetwork />
          <AnalyticsVision />
        </div>

        {/* Final Orbis CTA - Matching Hero Style */}
        <section className="py-48 relative overflow-hidden text-center font-barlow">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-20 bg-white/[0.02] border border-white/10 rounded-[2px] backdrop-blur-3xl relative overflow-hidden"
            >
              <h2 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tighter">
                Command the <br />
                <span className="font-instrument-serif italic text-purple-400/50">Future.</span>
              </h2>
              <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto font-light leading-relaxed">
                Deploy the world's most advanced institutional intelligence engine
                and transform your organization into a next-generation ecosystem.
              </p>
              <button
                onClick={openForm}
                className="px-12 py-6 bg-[#f8f8f8] text-[#171717] rounded-[2px] font-medium text-xl hover:bg-white transition-all tracking-wide"
              >
                Signal Us
              </button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
