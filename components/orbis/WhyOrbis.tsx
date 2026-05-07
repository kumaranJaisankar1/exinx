"use client";
import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Unified Digital Ecosystem",
  "Mobile-First Experience",
  "Real-Time Operations",
  "Secure Cloud Infrastructure",
  "Scalable Architecture",
  "Intelligent Workflow Automation",
  "Seamless Communication",
  "Centralized Administration"
];

export default function WhyOrbis() {
  return (
    <section className="py-48 relative overflow-hidden bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8 tracking-tighter">
            Why Institutions <br />
            <span className="font-instrument-serif italic text-[#0E76BD]">Choose Orbis</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 bg-secondary/30 dark:bg-white/[0.02] border border-border dark:border-white/10 rounded-3xl flex flex-col items-center text-center group hover:border-[#0E76BD]/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0E76BD]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="text-[#0E76BD]" size={24} />
              </div>
              <h3 className="text-lg font-medium text-foreground tracking-tight">{point}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-[#0E76BD]/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
