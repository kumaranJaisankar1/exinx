"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { useRef, useState } from "react";
import ProductDialer, { Product } from '../ProductDialer';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
};

export default function HeroSection() {
  const [activeProduct, setActiveProduct] = useState<Product>('X');
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const orbY = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center px-6 md:px-12 pt-24 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            {...fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 border border-accent/20 rounded-full text-[10px] uppercase tracking-[0.2em] text-accent mb-6"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            {siteConfig.hero.badge}
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="font-syne font-extrabold text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.05] tracking-[-0.03em] mb-6 flex flex-col items-start"
          >
            <span className="block text-white mb-2">EXtended</span>
            <div className="flex items-center gap-x-3 w-full">
              <span className="block font-serif italic font-normal text-white">INtelligence</span>
            </div>
            <ProductDialer onProductChange={setActiveProduct} />
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="text-text-muted text-base md:text-[17px] leading-[1.6] max-w-lg mb-8"
          >
            {siteConfig.hero.description}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <button className="btn-primary !px-10">{siteConfig.hero.actions.primary}</button>
            <button className="btn-ghost !px-10">{siteConfig.hero.actions.secondary}</button>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.8 }}
            className="flex gap-12 pt-8 border-t border-white/[0.04]"
          >
            {siteConfig.hero.stats.map((stat, i) => (
              <div key={i} className="group">
                <h3 className="font-syne font-extrabold text-3xl text-accent group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.15em] text-text-dim mt-2 font-mono">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div> */}
        </div>

        {/* Visual - The CSS Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{ y: orbY }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <div className="relative w-[400px] h-[400px]">
            {/* Animated Rings */}
            {[20, 15, 25, 18].map((duration, i) => (
              <div
                key={i}
                className="absolute border border-white/10 rounded-full"
                style={{
                  inset: `${i * 30}px`,
                  animation: `spin ${duration}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
                  borderColor: i === 0 ? 'rgba(240, 160, 48, 0.15)' :
                    i === 1 ? 'rgba(96, 208, 240, 0.12)' :
                      i === 2 ? 'rgba(160, 112, 240, 0.1)' : 'rgba(240, 112, 80, 0.08)'
                }}
              />
            ))}
            {/* The Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-accent to-accent-secondary shadow-[0_0_80px_rgba(240,160,48,0.25)] animate-float" />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -55%) scale(1.05); }
        }
      `}</style>
    </section>
  );
}
