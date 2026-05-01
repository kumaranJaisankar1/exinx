'use client';

import { useState } from 'react';
import { motion, Variants } from 'motion/react';
import ProductDialer, { Product } from './ProductDialer';
import { GLSLHills } from './GLSLHills';
import { cn } from '@/lib/utils';

export default function Hero() {
  const [activeProduct, setActiveProduct] = useState<Product>('Orbis');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* GLSL Hills Background - Absolute Full Width/Height */}
      <div className="absolute inset-0 -bottom-64 z-0 pointer-events-none overflow-hidden">
        <GLSLHills speed={0.4} cameraZ={180} planeSize={1024} />
      </div>

      {/* Gradient Overlays for depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black pointer-events-none opacity-80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent to-black pointer-events-none opacity-40" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full text-center relative z-20 space-y-10 pt-20"
      >
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl transition-all hover:bg-white/10">
            <div className={cn(
              "w-1.5 h-1.5 rounded-full animate-pulse transition-colors duration-1000 shadow-[0_0_10px_currentColor]",
              activeProduct === 'Nova' ? "bg-accent text-accent" :
                activeProduct === 'Astra' ? "bg-amber-400 text-amber-400" : "bg-slate-300 text-slate-300"
            )} />

            <span className="text-[9px] font-mono text-slate-500 tracking-[0.4em] uppercase">
              Intelligence Protocol v6.0
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-white">
            <motion.span
              className="block italic font-thin text-2xl md:text-4xl lg:text-5xl text-slate-500/80 mb-4 tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Architecture for
            </motion.span>
            <div className="flex flex-col md:flex-row items-center justify-center gap-x-4">
              <ProductDialer onProductChange={setActiveProduct} className="text-accent" />
              <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">
                Intelligence
              </span>
            </div>
          </h1>

          <p className="text-xs md:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-light tracking-wide px-4 opacity-80">
            Empower your organization with autonomous precision and high-order cognitive orchestration through the EXINX ecosystem.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
        >
          <button className="group relative px-10 py-5 bg-white text-black font-black rounded-full text-[10px] md:text-xs uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Initiate Ecosystem</span>
            <div className={cn(
              "absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500",
              activeProduct === 'Nova' ? "bg-accent" : activeProduct === 'Astra' ? "bg-amber-500" : "bg-accent"
            )} />

          </button>

          <button className="px-10 py-5 border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-3xl text-white font-black rounded-full text-[10px] md:text-xs uppercase tracking-[0.3em] transition-all duration-500 hover:border-white/20">
            Technical Paper
          </button>
        </motion.div>
      </motion.div>

      {/* Global Ambient Glow */}
      <motion.div
        animate={{
          backgroundColor: activeProduct === 'Nova' ? "rgba(0, 213, 190, 0.04)" :
            activeProduct === 'Astra' ? "rgba(245, 158, 11, 0.04)" : "rgba(0, 213, 190, 0.04)"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full blur-[240px] pointer-events-none -z-10"
      />

    </section>
  );
}
