"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Link as LinkIcon, Scissors, Clock, FileWarning, Search, TrendingDown } from "lucide-react";

const problems = [
  { text: "Manual question paper preparation", icon: <Scissors className="w-5 h-5" /> },
  { text: "Time-consuming worksheet creation", icon: <Clock className="w-5 h-5" /> },
  { text: "Lack of structured question sources", icon: <Search className="w-5 h-5" /> },
  { text: "Difficulty maintaining exam standards", icon: <FileWarning className="w-5 h-5" /> },
  { text: "Practicing beyond the current syllabus", icon: <AlertCircle className="w-5 h-5" /> },
  { text: "Lack of structured mock progression", icon: <TrendingDown className="w-5 h-5" /> }
];

const solutions = [
  { title: "Structured", desc: "Mapped data for every node" },
  { title: "Relevant", desc: "Aligned strictly to exam patterns" },
  { title: "Scalable", desc: "Automated end-to-end workflows" },
  { title: "Outcome-driven", desc: "Built for measurable growth" },
];

export default function AstraDichotomy() {
  return (
    <section className="py-48 relative bg-black overflow-hidden">
      {/* Background Chaos Elements - Increased Brightness */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-900/20 blur-[150px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* The Problem: Disconnected Fragments */}
        <div className="mb-80">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-32"
          >
            <span className="text-red-500 font-mono text-[10px] tracking-[0.8em] uppercase mb-6 block font-bold">The Problem</span>
            <h2 className="text-6xl md:text-9xl font-bold text-white mb-8 tracking-tighter leading-tight">
              Why Current <br />
              <span className="text-red-600 italic drop-shadow-[0_0_30px_rgba(220,38,38,0.3)]">Methods Fail.</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto font-light italic text-xl">
              "Competitive preparation suffers because of <span className="text-red-500 font-semibold underline decoration-red-500/30 underline-offset-8">disconnected tools</span> and manual workflows."
            </p>
          </motion.div>

          <div className="relative h-[700px] md:h-[600px]">
            {/* Broken Connection Lines (SVG) - Increased Visibility */}
            <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 1000 600">
              <motion.path
                d="M 100 100 L 400 350 M 400 350 L 700 150 M 700 150 L 900 450 M 200 450 L 400 350"
                stroke="#ff0000"
                strokeWidth="1.5"
                strokeDasharray="8,8"
                fill="none"
              />
              <motion.path
                d="M 100 100 L 400 350 M 400 350 L 700 150 M 700 150 L 900 450 M 200 450 L 400 350"
                stroke="#ff0000"
                strokeWidth="4"
                className="blur-md opacity-30"
                fill="none"
              />
            </svg>

            {problems.map((problem, i) => {
              const positions = [
                "top-[5%] left-[5%] md:left-[10%]",
                "top-[35%] left-[2%] md:left-[5%]",
                "top-[70%] left-[10%] md:left-[15%]",
                "top-[10%] right-[5%] md:right-[15%]",
                "top-[45%] right-[10%] md:right-[5%]",
                "top-[75%] right-[5%] md:right-[10%]",
              ];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(239, 68, 68, 0.6)", backgroundColor: "rgba(239, 68, 68, 0.15)" }}
                  className={`absolute ${positions[i]} p-8 border border-red-500/20 bg-black/60 backdrop-blur-xl rounded-[2px] flex items-center gap-5 group cursor-help max-w-[320px] shadow-[0_20px_50px_rgba(220,38,38,0.1)] transition-all duration-500`}
                >
                  <div className="text-red-500 group-hover:scale-110 transition-transform duration-300">
                    {problem.icon}
                  </div>
                  <p className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors font-medium leading-tight">
                    {problem.text}
                  </p>

                  {/* Fragment Decorative Corners - Brighter */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-red-500/50" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-red-500/50" />
                  <div className="absolute top-2 right-2 w-1 h-1 bg-red-500/40 rounded-full animate-pulse" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Transition Line: The "Fusion" Point */}
        <div className="flex flex-col items-center mb-80">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 180 }}
            className="w-px bg-gradient-to-b from-red-500 via-[#f07050] to-[#f07050]"
          />

        </div>

        {/* The Solution: Structured Synergy */}
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#f07050]/10 blur-[180px] -z-1" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-32"
          >
            <span className="text-[#f07050] font-mono text-xs tracking-[0.6em] uppercase mb-6 block font-bold">The Solution</span>
            <h2 className="text-6xl md:text-[11rem] font-bold text-white mb-8 tracking-tighter leading-none">
              Unified <br />
              <span className="font-instrument-serif italic font-normal text-[#f07050] drop-shadow-[0_0_50px_rgba(240,112,80,0.3)]">Infrastructure.</span>
            </h2>
            <p className="text-white/70 text-2xl font-light max-w-2xl mx-auto leading-relaxed">
              A structured approach through advanced preparation infrastructure for modern education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center group p-12 border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.08] hover:border-[#f07050]/40 transition-all rounded-[2px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f07050]/5 blur-3xl group-hover:bg-[#f07050]/10 transition-all rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="mb-10 flex justify-center">
                  <div className="w-20 h-20 rounded-full border border-[#f07050]/30 flex items-center justify-center group-hover:bg-[#f07050]/10 transition-all group-hover:scale-110 duration-500 shadow-[0_0_30px_rgba(240,112,80,0.1)]">
                    <CheckCircle2 className="w-10 h-10 text-[#f07050]" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#f07050] transition-colors">{sol.title}</h3>
                <p className="text-base text-white/50 leading-relaxed font-light">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
