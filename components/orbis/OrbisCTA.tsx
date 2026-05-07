"use client";
import React from 'react';
import { motion } from "framer-motion";

export default function OrbisCTA() {
  return (
    <section className="py-48 relative overflow-hidden bg-background transition-colors duration-500">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0E76BD]/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0E76BD]/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-8xl font-light text-foreground mb-10 tracking-tighter leading-tight">
            Empower the Future of <br />
            <span className="font-instrument-serif italic text-[#0E76BD]">Education with Orbis</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
            Digitize operations, streamline administration, enhance communication, and deliver smarter academic experiences through one intelligent institution management ecosystem.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-12 py-5 bg-[#0E76BD] text-white rounded-full font-bold text-[11px] uppercase tracking-[0.3em] shadow-2xl shadow-[#0E76BD]/30 hover:scale-105 transition-all active:scale-95">
              Schedule Demo
            </button>
            <button className="px-12 py-5 border border-border dark:border-white/10 text-foreground rounded-full font-bold text-[11px] uppercase tracking-[0.3em] backdrop-blur-md hover:bg-foreground/5 transition-all active:scale-95">
              Explore Platform
            </button>
          </div>
        </motion.div>
      </div>

      {/* Subtle Bottom Pattern */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0E76BD]/30 to-transparent" />
    </section>
  );
}
