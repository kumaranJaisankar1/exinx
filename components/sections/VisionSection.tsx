"use client";

import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section className="relative py-32 md:py-48 bg-[#0a0a0f] text-white overflow-hidden flex items-center justify-center text-center">
      {/* Background Neural Particles / Glow */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/20 rounded-full blur-[200px]"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center mb-12">
            <span className="hero-title-thin text-primary text-[10px] tracking-[1em] mb-2">Our</span>
            <span className="hero-title-bold text-primary text-[10px] tracking-[1em]">Vision</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-light leading-relaxed tracking-tight italic font-serif">
            "To redefine education through extended intelligence by creating systems that think, adapt, and evolve alongside the people who use them."
          </h2>
          
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-white/20" />
            <span className="text-white/40 font-mono text-[10px] tracking-widest uppercase">The ExInX Foundation</span>
            <div className="w-12 h-px bg-white/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
