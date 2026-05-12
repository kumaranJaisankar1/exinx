"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Scissors, Clock, FileWarning, Search, TrendingDown, BookX, TrendingUp, Target, Zap } from "lucide-react";

const institutionProblems = [
  { text: "Manual question paper preparation", icon: <Scissors className="w-4 h-4" /> },
  { text: "Time-consuming worksheet creation", icon: <Clock className="w-4 h-4" /> },
  { text: "Lack of structured question sources", icon: <Search className="w-4 h-4" /> },
  { text: "Difficulty maintaining exam standards", icon: <FileWarning className="w-4 h-4" /> },
];

const studentProblems = [
  { text: "Practicing beyond their syllabus", icon: <BookX className="w-4 h-4" /> },
  { text: "Lack of structured mock progression", icon: <TrendingDown className="w-4 h-4" /> },
  { text: "No clarity on weak areas", icon: <AlertCircle className="w-4 h-4" /> },
  { text: "Random and unorganized preparation", icon: <AlertCircle className="w-4 h-4" /> },
];

const solutions = [
  { title: "Structured", desc: "Mapped data for every node" },
  { title: "Relevant", desc: "Aligned strictly to exam patterns" },
  { title: "Scalable", desc: "Automated end-to-end workflows" },
  { title: "Outcome-driven", desc: "Built for measurable growth" },
];
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


export default function IyotaPrepDichotomy() {
  return (
    <section className="py-32 relative bg-background overflow-hidden transition-colors duration-500">
      {/* Background ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-pulse"
          style={{ background: 'rgba(255,0,0,0.06)', filter: 'blur(120px)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'rgba(255,0,0,0.04)', filter: 'blur(150px)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── THE PROBLEM ── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span
              className="font-mono text-[10px] tracking-[0.8em] uppercase mb-6 block font-bold"
              style={{ color: '#FF0000' }}
            >
              THE PROBLEM
            </span>
            <h2 className="text-5xl md:text-8xl font-bold text-foreground mb-10 tracking-tighter leading-tight">
              Why Current Exam <br />
              <span
                className="italic font-instrument-serif font-normal"
                style={{
                  color: '#FF0000',
                  textShadow: 'none',
                }}
              >
                Preparation Methods Fail
              </span>
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto font-light italic text-lg md:text-xl leading-relaxed">
              "Competitive preparation suffers because of{' '}
              <span
                className="font-semibold not-italic underline underline-offset-8"
                style={{ color: '#FF0000', textDecorationColor: 'rgba(255,0,0,0.3)' }}
              >
                disconnected tools
              </span>{' '}
              and manual workflows."
            </p>
          </motion.div>

          {/* Split Problem Cards */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Institutions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-10 rounded-[2px] backdrop-blur-xl relative overflow-hidden bg-secondary/50 dark:bg-white/[0.02] border border-red-500/15"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,0,0,0.1), transparent)',
                }} />

              <h3 className="text-xl font-bold text-foreground mb-8 tracking-wide">
                Institutions struggle with:
              </h3>
              <div className="space-y-4">
                {institutionProblems.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-[2px] group border border-foreground/5 dark:border-white/5"
                    whileHover={{
                      backgroundColor: 'rgba(255,0,0,0.06)',
                      borderColor: 'rgba(255,0,0,0.25)',
                    }}
                  >
                    <div style={{ color: '#FF0000' }} className="flex-shrink-0 group-hover:scale-110 transition-transform">
                      {p.icon}
                    </div>
                    <p className="text-sm text-foreground/70 group-hover:text-foreground transition-colors font-medium">
                      {p.text}
                    </p>
                    {/* Fragment corners */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l" style={{ borderColor: 'rgba(255,0,0,0.3)' }} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Students */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-10 rounded-[2px] backdrop-blur-xl relative overflow-hidden bg-secondary/50 dark:bg-white/[0.02] border border-red-500/15"
            >
              <div className="absolute top-0 right-0 w-16 h-16"
                style={{
                  background: 'linear-gradient(225deg, rgba(255,0,0,0.1), transparent)',
                }} />

              <h3 className="text-xl font-bold text-foreground mb-8 tracking-wide">
                Students struggle with:
              </h3>
              <div className="space-y-4">
                {studentProblems.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-[2px] group border border-foreground/5 dark:border-white/5"
                    whileHover={{
                      backgroundColor: 'rgba(255,0,0,0.06)',
                      borderColor: 'rgba(255,0,0,0.25)',
                    }}
                  >
                    <div style={{ color: '#FF0000' }} className="flex-shrink-0 group-hover:scale-110 transition-transform">
                      {p.icon}
                    </div>
                    <p className="text-sm text-foreground/70 group-hover:text-foreground transition-colors font-medium">
                      {p.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── TRANSITION LINE ── */}
        <div className="flex flex-col items-center mb-24">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 120 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-px"
            style={{ background: 'linear-gradient(to bottom, #FF0000, rgba(255,0,0,0.2))' }}
          />
          <div
            className="w-2 h-2 rounded-full mt-2"
            style={{ background: '#FF0000', boxShadow: '0 0 12px #FF0000' }}
          />
        </div>

        {/* ── THE SOLUTION ── */}
        <div className="relative">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,0,0,0.06) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span
              className="font-mono text-[10px] tracking-[0.6em] uppercase mb-6 block font-bold"
              style={{ color: '#FF0000' }}
            >
              The Solution
            </span>
            <h2 className="text-5xl md:text-[9rem] font-bold text-foreground mb-8 tracking-tighter leading-none">
              One Platform to <br />
              <span
                className="font-instrument-serif italic font-normal"
                style={{
                  color: '#FF0000',
                  textShadow: 'none',
                }}
              >
                Standardize Preparation.
              </span>
            </h2>
            <p className="text-foreground/70 text-xl font-light max-w-2xl mx-auto leading-relaxed">
              A structured approach through advanced preparation infrastructure for modern education.
            </p>
          </motion.div>

          {/* Solution keyword strip */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase"
                style={{
                  background: 'rgba(255,0,0,0.08)',
                  border: '1px solid rgba(255,0,0,0.25)',
                  color: '#FF0000',
                }}
              >
                {sol.title}
              </motion.div>
            ))}
          </div>
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
                className="group p-10 rounded-[2px] relative overflow-hidden transition-all duration-500 cursor-default bg-secondary/50 dark:bg-white/[0.02] border border-foreground/5 dark:border-white/10 backdrop-blur-xl"
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
                <div className="mt-10 pt-8 flex items-center gap-4 group-hover:gap-6 transition-all border-t border-foreground/5 dark:border-white/5"
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
      </div>
    </section>
  );
}
