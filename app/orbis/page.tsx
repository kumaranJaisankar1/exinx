"use client";

import React from 'react';
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/sections/Footer";
import OrbisBackgroundCanvas from "@/components/orbis/OrbisBackgroundCanvas";
import OrbisHero from "@/components/orbis/OrbisHero";
import RegistryCore from "@/components/orbis/RegistryCore";
import FlowState from "@/components/orbis/FlowState";
import KnowledgeArchives from "@/components/orbis/KnowledgeArchives";
import SatelliteNetwork from "@/components/orbis/SatelliteNetwork";
import AnalyticsVision from "@/components/orbis/AnalyticsVision";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function OrbisPage() {
  return (
    <main className="relative bg-[#050508] text-white selection:bg-purple-500/30 selection:text-purple-200">
      <CustomCursor />
      <OrbisBackgroundCanvas />

      <div className="relative z-10">
        <Navbar />
        <OrbisHero />
        
        <div className="space-y-0">
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
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
               <h2 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tighter">
                 Command the <br />
                 <span className="font-instrument-serif italic text-purple-400/50">Future.</span>
               </h2>
               <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto font-light leading-relaxed">
                 Deploy the world's most advanced institutional intelligence engine 
                 and transform your organization into a next-generation ecosystem.
               </p>
               <button className="px-12 py-6 bg-[#f8f8f8] text-[#171717] rounded-[2px] font-medium text-xl hover:bg-white transition-all tracking-wide">
                 Join the Private Beta
               </button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Page-wide noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-[999] opacity-[0.02] mix-blend-overlay">
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>
    </main>
  );
}
