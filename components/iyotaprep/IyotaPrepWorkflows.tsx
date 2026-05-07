"use client";

import { motion } from "framer-motion";
import { Zap, Target, TrendingUp } from "lucide-react";

const workflows = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Automate Exams & Workflows",
    desc: "Streamline exam creation with intelligent automation. Manage question banks, scheduling, and reporting in one unified platform.",
    tag: "01"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Syllabus Practice",
    desc: "Enable students to prepare effectively with targeted practice aligned to their ongoing syllabus.",
    tag: "02"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Progressive Path",
    desc: "Build strong foundations and advance step-by-step toward full exam readiness.",
    tag: "03"
  }
];

const keywords = ["Structured", "Relevant", "Scalable", "Outcome-driven"];

export default function IyotaPrepWorkflows() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(255,0,0,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span
            className="font-mono text-[10px] tracking-[0.6em] uppercase mb-6 block font-bold"
            style={{ color: '#FF0000' }}
          >
            The Solution
          </span>
          <h2 className="text-5xl md:text-8xl font-bold text-foreground tracking-tighter mb-8 leading-tight">
            One Platform to <br />
            <span
              className="font-instrument-serif italic font-normal"
              style={{ color: '#FF0000', textShadow: '0 0 50px rgba(255,0,0,0.2)' }}
            >
              Standardize Preparation.
            </span>
          </h2>
          <p className="text-foreground/70 text-lg font-light max-w-2xl mx-auto leading-relaxed mb-10">
            A structured approach through advanced preparation infrastructure for modern education.
          </p>

          {/* Keyword pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {keywords.map((kw, i) => (
              <motion.span
                key={kw}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="px-5 py-2 text-xs font-bold tracking-[0.25em] uppercase rounded-full"
                style={{
                  background: 'rgba(255,0,0,0.08)',
                  border: '1px solid rgba(255,0,0,0.25)',
                  color: '#FF0000',
                }}
              >
                {kw}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {workflows.map((flow, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group p-10 rounded-[2px] relative overflow-hidden transition-all duration-500 cursor-default"
              style={{
                background: 'rgba(var(--foreground-rgb, 255, 255, 255), 0.02)',
                border: '1px solid rgba(var(--foreground-rgb, 255, 255, 255), 0.06)',
                backdropFilter: 'blur(16px)',
              }}
            >
              {/* Hover Glow */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'rgba(255,0,0,0.08)',
                  filter: 'blur(40px)',
                  transform: 'translate(30%, -30%)',
                }}
              />

              {/* Red spotlight on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(to right, transparent, #FF0000, transparent)' }}
              />

              {/* Tag */}
              <span
                className="text-xs font-mono tracking-[0.3em] mb-8 block"
                style={{ color: 'rgba(255,0,0,0.4)' }}
              >
                FEATURE {flow.tag}
              </span>

              {/* Icon */}
              <div
                className="mb-8 group-hover:scale-110 transition-transform duration-500 origin-left"
                style={{ color: '#FF0000' }}
              >
                {flow.icon}
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-bold text-foreground mb-5 leading-tight group-hover:text-[#FF0000] transition-colors"
              >
                {flow.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 leading-relaxed font-light text-sm">
                {flow.desc}
              </p>

              {/* Bottom line */}
              <div className="mt-10 pt-8 flex items-center gap-4 group-hover:gap-6 transition-all"
                style={{ borderTop: '1px solid rgba(var(--foreground-rgb, 255, 255, 255), 0.05)' }}
              >
                <div className="w-6 h-px" style={{ background: 'rgba(255,0,0,0.5)' }} />
                <span
                  className="text-[10px] font-mono uppercase tracking-[0.3em]"
                  style={{ color: 'rgba(255,0,0,0.5)' }}
                >
                  Core Layer
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
