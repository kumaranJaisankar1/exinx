"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Unified system replacing multiple disconnected tools",
  "Reduced manual work and improved operational efficiency",
  "Real time visibility across all institutional processes",
  "Flexible configuration based on institutional needs",
  "Improved communication and parent engagement",
  "Scalable cloud platform with zero maintenance"
];

export default function OrbisBenefits() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="section-label !text-[#0E76BD] !border-[#0E76BD]/20">Key Benefits</span>
          <h2 className="mt-6 flex flex-col items-center gap-2">
            <span className="hero-title-thin text-3xl md:text-4xl text-slate-900 dark:text-white">Why Choose</span>
            <span className="hero-title-bold text-5xl md:text-7xl text-[#0E76BD]">Orbis</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-6 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-[#0E76BD]/30 transition-colors"
            >
              <CheckCircle2 className="w-8 h-8 text-[#0E76BD] shrink-0" />
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
