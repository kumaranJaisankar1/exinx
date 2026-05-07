"use client";

import { motion } from "framer-motion";

export default function OrbisClosing() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-white/[0.01]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white dark:bg-slate-900 p-16 md:p-24 rounded-[4rem] border border-[#0E76BD]/10 shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E76BD]/5 via-transparent to-transparent" />

          <h2 className="mb-8 flex flex-col items-center gap-2">
            <span className="hero-title-thin text-slate-900 dark:text-white text-3xl md:text-5xl">Simplify Operations.</span>
            <span className="hero-title-bold text-5xl md:text-8xl text-[#0E76BD]">Strengthen Outcomes.</span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Orbis empowers institutions to operate efficiently, communicate effectively, and scale with confidence through a unified and intelligent management system.
          </p>

          <button className="orbis-btn-primary px-16 py-6 text-white rounded-full font-black text-[14px] uppercase tracking-[0.4em] shadow-2xl active:scale-95 transition-transform">
            Get Started with Orbis
          </button>
        </motion.div>
      </div>
    </section>
  );
}
