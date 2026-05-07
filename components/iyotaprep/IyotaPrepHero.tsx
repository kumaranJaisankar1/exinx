"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from '../Navbar';
import { useTheme } from "next-themes";

const RED = '#FF0000';
const RED_GLOW = 'rgba(255, 0, 0, 0.25)';

export default function IyotaPrepHero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(0);
  const fadeRequestId = useRef<number | null>(null);
  const fadingOutRef = useRef(false);
  const containerRef = useRef(null);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 80]);

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
    video.play().catch(err => console.log("Autoplay blocked", err));
    const handleLoadedData = () => animateOpacity(1, 400);
    const safetyTimeout = setTimeout(() => {
      if (videoOpacity === 0) animateOpacity(1, 400);
    }, 1000);
    const handleTimeUpdate = () => {
      const timeLeft = video.duration - video.currentTime;
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
      }, 50);
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
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col overflow-hidden bg-background text-foreground transition-colors duration-500"
    >
      <style jsx global>{`
        .iyota-btn-primary {
          background: linear-gradient(135deg, #FF0000 0%, #cc0000 100%);
          box-shadow: 0 0 40px rgba(255,0,0,0.3), 0 0 80px rgba(255,0,0,0.1);
          transition: all 0.3s ease;
        }
        .iyota-btn-primary:hover {
          box-shadow: 0 0 60px rgba(255,0,0,0.5), 0 0 120px rgba(255,0,0,0.2);
          transform: translateY(-2px);
        }
        .iyota-btn-ghost {
          background: rgba(var(--foreground-rgb, 255, 255, 255), 0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(var(--foreground-rgb, 255, 255, 255), 0.15);
          box-shadow: inset 0 1px 1px rgba(var(--foreground-rgb, 255, 255, 255), 0.08);
          transition: all 0.3s ease;
        }
        .iyota-btn-ghost:hover {
          background: rgba(var(--foreground-rgb, 255, 255, 255), 0.08);
          border-color: rgba(255, 0, 0, 0.3);
          transform: translateY(-2px);
        }
        .hero-red-glow {
          text-shadow: 0 0 40px rgba(255,0,0,0.15), 0 0 80px rgba(255,0,0,0.08);
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
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          style={{
            opacity: videoOpacity,
            filter: isDark ? 'blur(4px) brightness(0.9)' : 'blur(10px) brightness(1.1)'
          }}
        >
          <source src="/videos/iyotaprep-hero.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/40 opacity-80 transition-colors duration-500" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,0,0,0.06) 0%, transparent 60%)'
        }} />
      </div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-8 md:py-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 text-[10px] md:text-[11px] font-mono tracking-[0.5em] uppercase text-foreground px-5 py-1.5 rounded-full border backdrop-blur-md"
            style={{
              background: 'rgba(255,0,0,0.12)',
              borderColor: 'rgba(255,0,0,0.35)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] animate-pulse" />
            Preparation Infrastructure
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hero-red-glow text-[clamp(2.2rem,6vw,5rem)] font-bold leading-[1.0] tracking-tight mb-6 max-w-4xl"
        >
          India's Most Powerful{' '}
          <span
            className="font-instrument-serif italic font-normal block mt-1"
            style={{ color: RED }}
          >
            Preparation Infrastructure
          </span>
          <span className="block text-foreground/80 text-[clamp(1.6rem,4vw,3.5rem)] font-light mt-2 tracking-normal">
            for JEE Mains &amp; NEET
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-base md:text-lg  max-w-xl leading-relaxed mb-8 font-light"
        >
          Transforming competitive exam preparation with a structured database of 1M+ questions mapped for extreme precision.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <button
            className="iyota-btn-primary px-10 py-4 text-white font-extrabold text-[10px] uppercase tracking-[0.25em] rounded-[3px]"
          >
            For Institutions
          </button>
          <button
            className="iyota-btn-ghost px-10 py-4 text-black dark:text-white font-extrabold text-[10px] uppercase tracking-[0.25em] rounded-[3px]"
          >
            For Students
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground/30 font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10"
            style={{ background: 'linear-gradient(to bottom, rgba(255,0,0,0.6), transparent)' }}
          />
        </motion.div>
      </div>

      {/* Side decorative lines */}
      <div className="absolute left-12 bottom-0 top-0 w-px hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,0,0,0.08), transparent)' }} />
      <div className="absolute right-12 bottom-0 top-0 w-px hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,0,0,0.08), transparent)' }} />
    </section>
  );
}
