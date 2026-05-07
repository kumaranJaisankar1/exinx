"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "1M+", label: "Questions", sub: "Structured Data" },
  { value: "JEE & NEET", label: "Focused", sub: "Competitive Exams" },
  { value: "6th-12th", label: "Class-wise", sub: "Foundation to Advanced" },
  { value: "100%", label: "Syllabus-Aligned", sub: "Exam Precision" },
];

export default function IyotaPrepIntelligence() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Section background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 70% 50%, rgba(255,0,0,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">

          {/* Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[10px] tracking-[0.5em] uppercase mb-6 block font-bold"
              style={{ color: '#FF0000' }}
            >
              Question Bank
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tighter leading-tight"
            >
              India's Largest <br />
              <span
                className="font-instrument-serif italic font-normal"
                style={{ color: '#FF0000' }}
              >
                Structured Intelligence.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-foreground/70 leading-relaxed max-w-xl font-light"
            >
              Every single question is mapped across subject, topic, sub-topic, and difficulty level.
              This structured intelligence enables precise exam creation and targeted student practice.
            </motion.p>
          </div>

          {/* Floating Stat Cards */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,0,0,0.06) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4, borderColor: 'rgba(255,0,0,0.4)' }}
                  className="p-8 backdrop-blur-sm rounded-[2px] group transition-all duration-500 relative overflow-hidden"
                  style={{
                    background: 'rgba(var(--foreground-rgb, 255, 255, 255), 0.02)',
                    border: '1px solid rgba(var(--foreground-rgb, 255, 255, 255), 0.06)',
                    boxShadow: '0 0 0 0 rgba(255,0,0,0)',
                  }}
                >
                  {/* Hover glow corner */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'rgba(255,0,0,0.08)',
                      filter: 'blur(20px)',
                      transform: 'translate(30%, -30%)',
                    }}
                  />

                  <h3
                    className="text-3xl md:text-4xl font-bold text-foreground mb-2 transition-colors group-hover:text-[#FF0000]"
                  >
                    {metric.value}
                  </h3>
                  <p className="text-sm font-bold text-foreground/70 mb-1">{metric.label}</p>
                  <p
                    className="text-[10px] uppercase tracking-widest font-mono"
                    style={{ color: 'rgba(255,0,0,0.5)' }}
                  >
                    {metric.sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(var(--foreground-rgb, 255, 255, 255), 0.08), transparent)' }}
        />
      </div>
    </section>
  );
}
