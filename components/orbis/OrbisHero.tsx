"use client";

import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "next-themes";

const ORBIS_BLUE = '#0E76BD';

export default function OrbisHero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-background flex flex-col justify-center items-center transition-colors duration-500 pt-20"
    >
      <style jsx global>{`
        .orbis-btn-primary {
          background: ${ORBIS_BLUE};
          box-shadow: 0 0 30px rgba(14, 118, 189, 0.2);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .orbis-btn-primary:hover {
          box-shadow: 0 0 50px rgba(14, 118, 189, 0.4);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Dynamic Satellite Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-50">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? 'rgba(14, 118, 189, 0.15)' : 'rgba(14, 118, 189, 0.08)'} 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 85%)',
          }}
        />
        {/* Orbital Paths - Smaller to reduce noise */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 40 + i * 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#0E76BD]/5 rounded-full"
            style={{ width: `${(i + 1) * 25}vw`, height: `${(i + 1) * 25}vw` }}
          />
        ))}
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center"
      >
        {/* Eyebrow - More compact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E76BD]/5 border border-[#0E76BD]/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E76BD] animate-pulse" />
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0E76BD] font-bold">
              Institutional Intelligence
            </span>
          </span>
        </motion.div>

        {/* Headline - Refined & Minimal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(1.8rem,5.5vw,3.5rem)] font-light leading-[1.1] tracking-tight mb-6 text-foreground"
        >
          Intelligent Operations. <br />
          <span className="font-instrument-serif italic text-[#0E76BD]">
            Integrated Education.
          </span>
        </motion.h1>

        {/* Subheading - Smaller font size */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base text-foreground/50 max-w-xl leading-relaxed mb-10 font-light"
        >
          Orbis unifies admissions, academics, finance, and institutional workflows into one seamless digital ecosystem designed for the modern era.
        </motion.p>

        {/* CTA Buttons - More compact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <button className="orbis-btn-primary px-8 py-3.5 text-white rounded-full font-bold text-[9px] uppercase tracking-[0.2em] shadow-xl active:scale-95">
            Explore Platform
          </button>
          <button className="px-8 py-3.5 border border-border dark:border-white/10 text-foreground rounded-full font-bold text-[9px] uppercase tracking-[0.2em] backdrop-blur-md hover:bg-foreground/5 transition-all active:scale-95">
            Request Demo
          </button>
        </motion.div>
      </motion.div>

      {/* Simplified Decorative Indicators */}
      <div className="absolute bottom-8 left-8 hidden lg:flex flex-col gap-2 opacity-20">
        <div className="flex items-center gap-3">
          <div className="w-1 h-1 rounded-full bg-[#0E76BD]" />
          <span className="font-mono text-[8px] tracking-widest uppercase text-foreground">Core Sync Active</span>
        </div>
      </div>

      {/* Minimal Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-10">
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-foreground to-transparent"
        />
      </div>

      {/* Tighter Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#0E76BD]/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}
