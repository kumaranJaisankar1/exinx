"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NovaHeroProps {
  trustBadge?: {
    text: string;
    icons?: string[];
  };
  headline: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      onClick?: () => void;
    };
    secondary?: {
      text: string;
      onClick?: () => void;
    };
  };
  className?: string;
}

const NovaHero: React.FC<NovaHeroProps> = ({
  trustBadge,
  headline,
  subtitle,
  description,
  buttons,
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((err) => console.log("Video play failed:", err));
    }
  }, []);

  return (
    <section
      className={cn(
        "relative w-full min-h-[100svh] overflow-hidden flex items-center justify-center pt-28 md:pt-24 pb-6",
        "bg-[#07080a] dark:bg-[#07080a]",
        className,
      )}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-20 pointer-events-none"
          style={{
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            willChange: "opacity, transform",
          }}
        >
          <source src="/videos/nova_hero.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Gradient Overlays to blend with page layout */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080a]/60 via-transparent to-[#07080a] z-[1]" />

        {/* Amber Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#D97706]/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="w-full max-w-6xl relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        {/* Trust Badge */}
        {trustBadge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#D97706]/20 bg-[#D97706]/5 backdrop-blur-md mb-4"
          >
            <span className="flex -space-x-1">
              {trustBadge.icons?.map((icon, i) => (
                <span key={i} className="text-xs">
                  {icon}
                </span>
              ))}
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-[#D97706]">
              {trustBadge.text}
            </span>
          </motion.div>
        )}

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl px-2"
        >
          <h1 className="text-[clamp(1.6rem,5vw,3.2rem)] leading-[1.1] mb-4 text-white dark:text-white tracking-[0.08em] font-light uppercase break-words">
            Personalized AI
            <br />
            <span className="font-extrabold block mt-1 tracking-[0.04em] text-[#D97706]">
              That Adapts to the
            </span>
            Way You Learn
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl"
        >
          <p className="text-sm md:text-base text-slate-400 dark:text-slate-400 font-light leading-normal">
            {subtitle}
          </p>
        </motion.div>

        {/* Syllabus / Curriculum Panel (Crisp, Sharper Edges) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="w-full max-w-2xl mt-5 p-4 border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-none relative overflow-hidden group shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)]"
        >
          {/* Top-right decorative sharp tech corner indicator */}
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D97706] opacity-60" />
          {/* Bottom-left decorative sharp tech corner indicator */}
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#D97706] opacity-60" />

          {/* Glow effect */}
          <div className="absolute -inset-px bg-gradient-to-r from-transparent via-[#D97706]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#D97706] mb-3 text-center flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#D97706] inline-block animate-pulse rounded-none" />
            Curriculum Support
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {[
              { name: "CBSE", desc: "Central Board" },
              { name: "ICSE", desc: "Indian Certificate" },
              { name: "SSC", desc: "State Board" },
              // { name: "NCERT", desc: "National Standards" },
              { name: "Undergrad", desc: "College Programs" },
            ].map((cur, i) => (
              <div
                key={i}
                className="py-2 px-3 border border-white/5 bg-black/40 rounded-none text-center hover:border-[#D97706]/40 hover:bg-[#D97706]/5 transition-all duration-300 group/item cursor-default"
              >
                <div className="text-xs font-extrabold tracking-wider text-white group-hover/item:text-[#D97706] transition-colors">
                  {cur.name}
                </div>
                <div className="text-[8px] uppercase tracking-widest text-slate-500 mt-0.5">
                  {cur.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6"
        >
          {buttons?.primary && (
            <button
              onClick={buttons.primary.onClick}
              className="px-8 py-3 bg-[#D97706] hover:bg-gradient-to-r hover:from-[#D97706] hover:to-[#FFD700] hover:text-black text-white rounded-none font-bold text-[11px] uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(217,119,6,0.15)] hover:shadow-[0_0_30px_rgba(217,119,6,0.4)]"
            >
              {buttons.primary.text}
            </button>
          )}
          {buttons?.secondary && (
            <button
              onClick={buttons.secondary.onClick}
              className="px-8 py-3 border border-white/10 hover:border-[#D97706]/40 text-white rounded-none font-bold text-[11px] uppercase tracking-widest transition-all hover:bg-white/[0.02] active:scale-95"
            >
              {buttons.secondary.text}
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NovaHero;
