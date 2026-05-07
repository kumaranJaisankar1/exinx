"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { useRef, useState } from "react";
import ProductDialer, { Product } from '../ProductDialer';
import Image from "next/image";



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
    <section ref={containerRef} className="relative h-[100svh] flex items-center px-6 md:px-12 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center h-full py-12 lg:py-0">

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            {...fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 border border-accent/20 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6"
          >
            <span className="w-1.5 h-1.5 bg-[#46e0ff] rounded-full animate-pulse" />
            <span className="text-gradient-exinx font-bold">{siteConfig.hero.badge}</span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="text-[clamp(1.8rem,5vw,4.2rem)] leading-[1.05] mb-6 flex flex-col items-start"
          >
            <span className="block text-foreground font-light tracking-[0.15em] mb-1">
              <span className="font-semibold">Ex</span>tended <span className="font-semibold">In</span>telligence
            </span>
            <div className="flex flex-wrap items-center gap-x-4 w-full font-extrabold tracking-[0.05em] text-foreground">

              <ProductDialer onProductChange={setActiveProduct} />
            </div>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="text-text-muted text-sm md:text-base leading-[1.6] max-w-lg mb-6"
          >
            {siteConfig.hero.description}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-0"
          >
            <button className="btn-primary  !px-10">{siteConfig.hero.actions.primary}</button>
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

        {/* Visual - Premium Three.js Neural Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{ y: orbY }}
          className="relative flex justify-center items-center h-[30vh] sm:h-[40vh] lg:h-[70vh] w-full order-first lg:order-last"
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative w-full h-full flex justify-center items-center"
          >
            <Image 
              src="/hero-visual.png" 
              alt="EXINX Visual" 
              fill
              className="object-contain drop-shadow-[0_0_60px_rgba(249,115,22,0.3)] scale-110 lg:scale-125"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
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
