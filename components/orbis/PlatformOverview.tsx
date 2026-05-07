"use client";
import React from 'react';
import { motion } from "framer-motion";

export default function PlatformOverview() {
  return (
    <section className="py-48 relative overflow-hidden bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[#0E76BD] tracking-[0.4em] uppercase text-xs mb-6 block font-bold">
              Platform Overview
            </span>
            <h2 className="text-5xl md:text-7xl font-light text-foreground mb-8 tracking-tighter leading-tight">
              One Unified Ecosystem for <br />
              <span className="font-instrument-serif italic text-[#0E76BD]">Complete Institution Management</span>
            </h2>
            <p className="text-xl text-foreground/60 leading-relaxed max-w-xl font-light">
              Orbis centralizes institutional operations into one intelligent platform designed to simplify administration, automate workflows, enhance communication, and improve academic management across schools and colleges.
            </p>
          </motion.div>

          <div className="relative">
            <div className="aspect-square bg-[#0E76BD]/5 border border-[#0E76BD]/10 rounded-[3rem] p-12 relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
               {/* Abstract Ecosystem Visual */}
               <div className="relative h-full flex items-center justify-center">
                  <div className="w-64 h-64 border border-[#0E76BD]/20 rounded-full animate-spin-slow flex items-center justify-center">
                    <div className="w-48 h-48 border border-[#0E76BD]/40 rounded-full animate-reverse-spin flex items-center justify-center">
                      <div className="w-32 h-32 bg-[#0E76BD]/10 rounded-full blur-2xl" />
                    </div>
                  </div>
                  {/* Floating labels */}
                  <div className="absolute top-1/4 left-0 px-4 py-2 bg-background border border-border rounded-full text-[9px] font-mono tracking-widest text-[#0E76BD]">ADMISSIONS</div>
                  <div className="absolute bottom-1/4 right-0 px-4 py-2 bg-background border border-border rounded-full text-[9px] font-mono tracking-widest text-[#0E76BD]">ACADEMICS</div>
                  <div className="absolute top-1/2 right-0 translate-x-1/2 px-4 py-2 bg-background border border-border rounded-full text-[9px] font-mono tracking-widest text-[#0E76BD]">FINANCE</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
