"use client";

import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import Logo from '../Logo';

const CornerAccent = ({ className }: { className: string }) => (
  <div className={`absolute w-[7px] h-[7px] bg-white ${className}`} />
);

const OrbisHero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden font-barlow">
      {/* 1. Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4" type="video/mp4" />
      </video>

      {/* Navbar is now global, so we don't need the local nav block here */}

      {/* 3. Main Content Container */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-6 pt-[140px] pb-[250px]">

        {/* Central Content Box with Corner Accents */}
        <div className="relative max-w-5xl">
          {/* Corner Accents */}
          <CornerAccent className="top-0 left-0" />
          <CornerAccent className="top-0 right-0" />
          <CornerAccent className="bottom-0 left-0" />
          <CornerAccent className="bottom-0 right-0" />

          {/* Featured Badge */}
          <div className="flex justify-center mb-12 pt-8">
            <div className="relative p-[1px] rounded-full bg-white/10 backdrop-blur-sm overflow-hidden group transition-all duration-500">
              <div className="relative px-6 py-2 rounded-full bg-white/90 backdrop-blur-md flex items-center gap-3">
                <span className="text-[10px] font-bold text-black uppercase tracking-widest">Featured in</span>
                <span className="text-[12px] font-black text-black tracking-tight">FORTUNE</span>
              </div>
            </div>
          </div>

          {/* Dynamic Headline */}
          <div className="space-y-4 mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white font-light text-[64px] leading-tight"
            >
              Intelligence that makes your
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white font-instrument-serif italic text-[64px] leading-tight"
            >
              educational vision viral
            </motion.h1>
          </div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white/75 text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Orbis is the AI-native institutional operating system that orchestrates
            administrative, academic, and operational nodes into a unified,
            high-performance management ecosystem.
          </motion.p>

          {/* Button Styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ backgroundColor: "#FFFFFF" }}
              className="px-10 py-4 bg-[#f8f8f8] text-[#171717] font-medium rounded-[2px] transition-colors duration-300 tracking-wide"
            >
              Command Center
            </motion.button>
            <motion.button
              className="px-10 py-4 border border-white text-white font-medium rounded-[2px] hover:bg-white/10 transition-colors duration-300 tracking-wide"
            >
              Watch Orbis
            </motion.button>
          </div>
        </div>
      </div>

      {/* CSS for custom fonts if needed (fallback) */}
      <style jsx global>{`
        .font-barlow { font-family: var(--font-barlow), sans-serif; }
        .font-instrument-serif { font-family: var(--font-instrument-serif), serif; }
      `}</style>
    </section>
  );
};

export default OrbisHero;
