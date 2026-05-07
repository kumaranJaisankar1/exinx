"use client";

import { motion } from "framer-motion";

export default function OrbisCoreValue() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="section-label !text-[#0E76BD] !border-[#0E76BD]/20 mb-8 inline-block">Core Value</span>
          <h2 className="mb-10 flex flex-col items-center gap-2">
            <span className="hero-title-thin text-3xl md:text-4xl">Designed to Simplify</span>
            <span className="hero-title-bold text-5xl md:text-7xl text-[#0E76BD]">Complex Systems</span>
          </h2>
          <p className="text-xl md:text-2xl  leading-relaxed font-light">
            Institutions manage multiple workflows every day, from admissions and fee collection to academics and communication. Orbis brings all of these into one connected system, reducing manual effort and enabling seamless operations across the academic year.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
