"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';
import Navbar from '../Navbar';

interface AstraHeroProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  description?: string;
}

export default function AstraHero({
  title = "PREPARATION INFRASTRUCTURE",
  highlight = "The Most Powerful",
  subtitle = "Transforming competitive exam preparation with a massive structured database of 1M+ questions mapped for extreme academic precision.",
  description = "Transforming competitive exam preparation with a massive structured database of 1M+ questions mapped for extreme academic precision."
}: AstraHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(0);
  const fadeRequestId = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  const animateOpacity = (target: number, duration: number, callback?: () => void) => {
    if (fadeRequestId.current) cancelAnimationFrame(fadeRequestId.current);

    const startTime = performance.now();
    const startOpacity = videoOpacity;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const nextOpacity = startOpacity + (target - startOpacity) * progress;

      setVideoOpacity(nextOpacity);

      if (progress < 1) {
        fadeRequestId.current = requestAnimationFrame(step);
      } else {
        fadeRequestId.current = null;
        if (callback) callback();
      }
    };

    fadeRequestId.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force play and handle potential autoplay blocks
    video.play().catch(err => {
      console.log("Autoplay blocked, waiting for interaction", err);
    });

    const handleLoadedData = () => {
      animateOpacity(1, 400); // Faster fade-in
    };

    // Safety timeout: if loadeddata doesn't fire in 1s, fade in anyway
    const safetyTimeout = setTimeout(() => {
      if (videoOpacity === 0) animateOpacity(1, 400);
    }, 1000);

    const handleTimeUpdate = () => {
      const timeLeft = video.duration - video.currentTime;
      // Loop fade logic
      if (timeLeft <= 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true;
        animateOpacity(0, 500);
      }
    };

    const handleEnded = () => {
      setVideoOpacity(0);
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(() => { });
          fadingOutRef.current = false;
          animateOpacity(1, 400);
        }
      }, 50); // Faster reset
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      clearTimeout(safetyTimeout);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      if (fadeRequestId.current) cancelAnimationFrame(fadeRequestId.current);
    };
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-black text-white selection:bg-[#f07050]/30">
      <Navbar />

      <style jsx global>{`
        .glass-btn {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .glass-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }
        .text-glow {
          text-shadow: 0 0 30px rgba(240, 112, 80, 0.2), 0 0 60px rgba(240, 112, 80, 0.1);
        }
        .text-shadow-sm {
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>

      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster="/videos/astra-bg-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover translate-y-[17%]"
          style={{ opacity: videoOpacity }}
        >
          <source src="/videos/astra-bg.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Vignette & Lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/70 opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      <div className="text-center z-10 relative px-6 flex flex-col items-center max-h-screen py-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-[10px] md:text-[11px] font-mono tracking-[0.5em] uppercase text-white bg-[#f07050]/20 px-5 py-1.5 rounded-full border border-[#f07050]/40 backdrop-blur-md">
            {title}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-6 text-glow"
        >
          {highlight.split(" ").map((word, i) => (
            <span key={i} className={cn(
              "block",
              (word === "Most" || word === "Powerful") && "font-instrument-serif italic font-normal text-white"
            )}>
              {word}
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center max-w-2xl"
        >
          <p className="text-lg md:text-xl font-medium text-white/90 tracking-tight mb-8 leading-snug text-shadow-sm px-4">
            {subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-10">
            <button className="px-10 py-4 bg-[#f07050] text-black font-extrabold text-[10px] uppercase tracking-[0.2em] rounded-[2px] hover:scale-105 transition-all shadow-[0_0_40px_rgba(240,112,80,0.3)]">
              For Institutions
            </button>
            <button className="px-10 py-4 glass-btn text-white font-extrabold text-[10px] uppercase tracking-[0.2em] rounded-[2px]">
              For Students
            </button>
          </div>
        </motion.div>

        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="max-w-[32em] text-center text-xs md:text-sm text-white/60 leading-relaxed font-medium px-4 bg-black/10 backdrop-blur-sm py-3 rounded-lg"
        >
          {description}
        </motion.p> */}
      </div>

      {/* Decorative side lines */}
      <div className="absolute left-12 bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
      <div className="absolute right-12 bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
    </section>
  );
}
