"use client";

import React from 'react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
  className = ""
}) => {
  return (
    <section className={cn(
      "relative w-full h-[100svh] overflow-hidden flex items-center justify-center pt-20",
      "bg-white dark:bg-[#07080a]",
      className
    )}>
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/nova_hero_bg.png"
          alt="Nova Background"
          fill
          className="object-cover opacity-40 dark:opacity-30 blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/80 to-white dark:from-black/20 dark:via-[#07080a]/80 dark:to-[#07080a]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        {/* Trust Badge */}
        {trustBadge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full border border-[#D97706]/20 bg-[#D97706]/5 backdrop-blur-md mb-8"
          >
            <span className="flex -space-x-1">
              {trustBadge.icons?.map((icon, i) => (
                <span key={i} className="text-sm">{icon}</span>
              ))}
            </span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#D97706]">{trustBadge.text}</span>
          </motion.div>
        )}

        {/* Headline - Restoring Previous Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-5xl"
        >
          <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.1] mb-8 text-slate-900 dark:text-white tracking-[0.1em] font-light uppercase">
            {headline.line1}<br />
            <span className="font-extrabold block mt-2 tracking-[0.05em] text-[#D97706]">
              {headline.line2}
            </span>
          </h1>
        </motion.div>

        {/* Subtitle & Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl space-y-6"
        >
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            {subtitle}
          </p>
          {/* {description && (
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-500/60 leading-relaxed max-w-xl mx-auto">
              {description}
            </p>
          )} */}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-6 mt-12"
        >
          {buttons?.primary && (
            <button
              onClick={buttons.primary.onClick}
              className="px-12 py-4 bg-[#D97706] text-white rounded-full font-bold text-[12px] uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(217,119,6,0.3)] active:scale-95"
            >
              {buttons.primary.text}
            </button>
          )}
          {buttons?.secondary && (
            <button
              onClick={buttons.secondary.onClick}
              className="px-12 py-4 border border-slate-200 dark:border-white/10 hover:border-[#D97706]/40 text-slate-900 dark:text-white rounded-full font-bold text-[12px] uppercase tracking-widest transition-all active:scale-95"
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
