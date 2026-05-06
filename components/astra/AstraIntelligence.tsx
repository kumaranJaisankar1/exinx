"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "1M+", label: "Questions", sub: "Structured Data" },
  { value: "JEE & NEET", label: "Focused", sub: "Competitive Exams" },
  { value: "6th-12th", label: "Class-wise", sub: "Foundation to Advanced" },
  { value: "100%", label: "Syllabus-Aligned", sub: "Exam Precision" },
];

export default function AstraIntelligence() {
  return (
    <section className="py-32 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#f07050] font-mono text-xs tracking-[0.4em] uppercase mb-6 block"
            >
              The Question Bank
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              India's Largest <br />
              <span className="font-instrument-serif italic font-normal text-white/30">Structured Intelligence.</span>
            </h2>
            <p className="text-xl text-white/50 leading-relaxed max-w-xl font-light">
              Every single question is mapped across subject, topic, sub-topic, and difficulty level.
              This structured intelligence enables precise exam creation and targeted student practice.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#f07050]/5 blur-[100px] rounded-full" />
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-white/[0.05] bg-white/[0.02] backdrop-blur-sm rounded-[2px] group hover:border-[#f07050]/30 transition-colors"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-[#f07050] transition-colors">
                    {metric.value}
                  </h3>
                  <p className="text-sm font-bold text-white/60 mb-1">{metric.label}</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#f07050]/50">{metric.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Grid Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
