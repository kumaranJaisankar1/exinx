"use client";

import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { useTheme } from "next-themes";

const ORBIS_BLUE = '#0E76BD';

export default function OrbisHero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Video play failed:", err));
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] w-full overflow-hidden bg-background flex flex-col items-start transition-colors duration-500 pt-20"
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

      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-40 pointer-events-none"
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            willChange: 'opacity, transform'
          }}
        >
          <source src="/videos/orbis_hero.mp4" type="video/mp4" />
        </video>

        {/* Cinematic White Gradient Overlay */}
        <div className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-background via-background/90 to-transparent z-[1]" />

        {/* Dynamic Satellite Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${ORBIS_BLUE} 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 85%)',
          }}
        />
      </div>

      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex flex-col justify-center items-start text-left"
      >
        {/* Eyebrow */}
        <div

        >
          <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0E76BD]/5 border border-[#0E76BD]/10 backdrop-blur-md">
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-[#0E76BD] font-black">
              Institutional ERP Intelligence
            </span>
          </span>
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 text-foreground max-w-4xl flex flex-col items-start gap-2"
        >
          <span className="hero-title-thin text-[clamp(1.5rem,4vw,3rem)] tracking-[0.05em]">Run Institutions with</span>
          <span className="hero-title-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tighter text-[#0E76BD]">
            Clarity & Control
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12 font-light"
        >
          Orbis is a unified school and college management platform that simplifies admissions, operations, academics, and communication through a powerful cloud based system.
        </motion.p>



        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center gap-6"
        >
          <button className="orbis-btn-primary px-12 py-4 text-white rounded-full font-black text-[12px] uppercase tracking-[0.3em] shadow-2xl active:scale-95">
            Explore Orbis
          </button>
          <button className=" px-12 py-4 text-slate-900 rounded-full font-black dark:text-white bg-transparent dark:bg-slate-900/40 text-[12px]  uppercase tracking-[0.3em] shadow-2xl active:scale-95">
            Request Demo
          </button>
        </motion.div>

      </motion.div>

      {/* Simplified Decorative Indicators */}
      <div className="absolute bottom-8 left-8 hidden lg:flex flex-col gap-2 opacity-20">
        <div className="flex items-center gap-3">
          <div className="w-1 h-1 rounded-full bg-[#0E76BD]" />
          <span className="font-mono text-[8px] tracking-widest uppercase text-slate-900">Core Sync Active</span>
        </div>
      </div>

      {/* Minimal Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-slate-900 to-transparent"
        />
      </div>

      {/* Tighter Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#0E76BD]/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}
