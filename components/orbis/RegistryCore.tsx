"use client";

import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, CreditCard, ShieldCheck } from "lucide-react";
import { useTheme } from "next-themes";

const features = [
  {
    title: "Secure Onboarding",
    description: "Biometric and digital identity management for seamless, paperless institutional entry.",
    icon: ShieldCheck,
  },
  {
    title: "Fee Orchestration",
    description: "Dynamic payment forecasting and automated billing cycles that eliminate administrative friction entirely.",
    icon: CreditCard,
  }
];

export default function RegistryCore() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-48 relative overflow-hidden font-barlow bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-[#0E76BD] tracking-[0.4em] uppercase text-xs mb-6 block font-bold"
            >
              The Core Registry
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-light text-foreground mb-8 tracking-tighter leading-none">
              Institutional <br />
              <span className="font-instrument-serif italic" style={{ color: isDark ? 'rgba(var(--foreground-rgb), 0.2)' : 'rgba(0, 0, 0, 0.3)' }}>Gravity.</span>
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-xl mb-12 font-light">
              Orbis transforms static records into dynamic institutional intelligence.
              Manage every student journey from first inquiry to final graduation
              within a unified, AI-driven registry.
            </p>

            <div className="space-y-12">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-secondary/30 dark:bg-white/[0.02] border border-border flex-shrink-0 flex items-center justify-center group-hover:bg-[#0E76BD]/10 transition-all duration-300">
                    <f.icon className="text-foreground/60 group-hover:text-[#0E76BD] transition-colors" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-[#0E76BD] transition-colors tracking-wide">{f.title}</h3>
                    <p className="text-foreground/60 leading-relaxed font-light">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div style={{ y }} className="relative z-10">
              <div className="aspect-square bg-secondary/30 dark:bg-white/[0.02] rounded-[3rem] border border-border dark:border-white/5 backdrop-blur-3xl p-12 flex items-center justify-center group overflow-hidden shadow-2xl dark:shadow-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
                <div className="relative">
                  <div className="w-64 h-64 border-2 border-[#0E76BD]/30 rounded-full animate-spin-slow flex items-center justify-center">
                    <div className="w-48 h-48 border border-[#0E76BD]/10 rounded-full animate-reverse-spin flex items-center justify-center">
                      <Users className="text-[#0E76BD]" size={64} />
                    </div>
                  </div>
                  {/* Floating Data Points - Sharp UI */}
                  <div className="absolute top-0 -left-10 px-4 py-2 bg-background/80 backdrop-blur-md rounded-full border border-border text-[10px] font-mono text-[#0E76BD] tracking-widest shadow-lg">
                    ENROLL: 98%
                  </div>
                  <div className="absolute bottom-10 -right-10 px-4 py-2 bg-background/80 backdrop-blur-md rounded-full border border-border text-[10px] font-mono text-[#0E76BD] tracking-widest shadow-lg">
                    FEES: PAID
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0E76BD]/20 blur-[120px] rounded-full pointer-events-none opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
