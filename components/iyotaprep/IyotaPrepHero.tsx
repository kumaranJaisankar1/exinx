"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from '../Navbar';
import { useTheme } from "next-themes";

const RED = '#FF0000';

export default function IyotaPrepHero() {
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
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] w-full overflow-hidden bg-background flex flex-col items-start transition-colors duration-500 pt-20"
    >
      <style jsx global>{`
        .iyota-btn-primary {
          background: linear-gradient(135deg, #FF0000 0%, #cc0000 100%);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .iyota-btn-primary:hover {
          box-shadow: 0 0 50px rgba(255, 0, 0, 0.4);
          transform: translateY(-2px);
        }
        .iyota-btn-ghost {
          background: rgba(var(--foreground-rgb, 255, 255, 255), 0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(var(--foreground-rgb, 255, 255, 255), 0.15);
          transition: all 0.3s ease;
        }
        .iyota-btn-ghost:hover {
          background: rgba(var(--foreground-rgb, 255, 255, 255), 0.08);
          border-color: rgba(255, 0, 0, 0.3);
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
          className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-50 pointer-events-none"
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            willChange: 'opacity, transform'
          }}
        >
          <source src="/videos/iyota_hero.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Gradient Overlay - Left side focus like Orbis */}
        <div className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-background via-background/90 to-transparent z-[1]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

        {/* Dynamic Pattern Overlay - adapted from Orbis but with Iyota Red */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${RED} 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 85%)',
          }}
        />
      </div>

      {/* Navbar */}
      {/* <div className="relative z-30 w-full">
        <Navbar />
      </div> */}

      <motion.div
        style={{ y: y1, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex flex-col justify-center items-start text-left"
      >
        {/* Badge / Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-500/5 border border-red-500/10 backdrop-blur-md">
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-foreground/80 font-black">
              Preparation Infrastructure
            </span>
          </span>
        </motion.div>

        {/* Main Heading - Preserving fonts and colors */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 text-foreground max-w-4xl flex flex-col items-start gap-2"
        >
          <span className="text-[clamp(1.5rem,4vw,3rem)] font-light tracking-[0.05em] leading-tight">
            India's Most Powerful
          </span>
          <span
            className="font-instrument-serif  text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tighter"
            style={{ color: RED }}
          >
            Preparation Infrastructure
          </span>
          <span className="text-muted-foreground text-[clamp(1.2rem,3vw,2.5rem)] font-light mt-2 tracking-normal">
            for JEE Mains &amp; NEET
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12 font-light"
        >
          Transforming competitive exam preparation with a structured database of 1M+ questions mapped for extreme precision.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center gap-6"
        >
          <button className="iyota-btn-primary px-12 py-4 text-white rounded-[3px] font-black text-[12px] uppercase tracking-[0.3em] shadow-2xl active:scale-95">
            For Institutions
          </button>
          <button className="iyota-btn-ghost px-12 py-4 text-foreground rounded-[3px] font-black text-[12px] uppercase tracking-[0.3em] shadow-2xl active:scale-95">
            For Students
          </button>
        </motion.div>
      </motion.div>

      {/* Decorative Indicators (from Orbis style) */}
      <div className="absolute bottom-8 left-12 hidden lg:flex flex-col gap-2 opacity-30">
        <div className="flex items-center gap-3">
          <div className="w-1 h-1 rounded-full bg-[#FF0000]" />
          <span className="font-mono text-[8px] tracking-widest uppercase text-foreground/50">Core Sync Active</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-red-500 to-transparent"
        />
      </div>

      {/* Side decorative lines */}
      <div className="absolute left-12 bottom-0 top-0 w-px hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,0,0,0.08), transparent)' }} />
      <div className="absolute right-12 bottom-0 top-0 w-px hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,0,0,0.08), transparent)' }} />
    </section>
  );
}
