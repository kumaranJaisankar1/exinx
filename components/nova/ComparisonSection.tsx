"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

const COMPARISON_ITEMS = [
  {
    aspect: "Instructional Fit",
    withoutNova: {
      title: "Generic Explanations",
      desc: "One-size-fits-all lectures delivered to the class average, leaving individual comprehension gaps.",
    },
    withNova: {
      title: "Cognitive-Adaptive",
      desc: "Explanations tailored to your specific cognitive load, pace, and response patterns.",
    }
  },
  {
    aspect: "Learning Autonomy",
    withoutNova: {
      title: "Teacher Dependency",
      desc: "Study halts outside the classroom; progress is restricted by instructor availability.",
    },
    withNova: {
      title: "Self-Directed Mastery",
      desc: "Empowers 24/7 independent study with an intelligent, on-demand cognitive tutor.",
    }
  },
  {
    aspect: "Feedback Cycle",
    withoutNova: {
      title: "No Feedback Loop",
      desc: "Delayed grades and periodic exams leave conceptual blind spots unaddressed.",
    },
    withNova: {
      title: "Real-Time Reinforcement",
      desc: "Instant feedback loops that identify errors and adapt instruction immediately.",
    }
  }
];

const ComparisonSection = () => {
  return (
    <section id="comparison-section" className="py-28 relative bg-background dark:bg-[#07080a] border-t border-border dark:border-white/5 overflow-hidden">
      {/* Background Grids and Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-destructive/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        <div className="mb-20 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#D97706] mb-3 block font-bold">Comparison</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-foreground dark:text-white uppercase tracking-[0.1em] mb-4"
          >
            The <span className="font-sans font-extrabold italic text-[#D97706]">Difference</span>
          </motion.h2>
          <p className="text-sm text-muted-foreground dark:text-white/50 leading-relaxed font-light">
            Discover how Nova transforms traditional, passive teaching structures into an active, cognitive-adaptive learning environment.
          </p>
        </div>

        <div className="space-y-6">
          {COMPARISON_ITEMS.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-9 gap-4 items-stretch"
            >
              {/* Without Nova Card */}
              <div className="lg:col-span-4 p-8 border border-border dark:border-white/5 bg-slate-500/[0.02] dark:bg-white/[0.01] rounded-none relative flex flex-col justify-between group hover:bg-slate-500/[0.04] dark:hover:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/10 transition-all">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-destructive/80 font-bold border border-destructive/20 px-2 py-0.5 bg-destructive/5">
                      Without Nova
                    </span>
                    <span className="font-mono text-xs text-muted-foreground/30 dark:text-white/20">0{index + 1}A</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground dark:text-white flex items-center mb-3">
                    <X size={16} className="text-destructive mr-2 flex-shrink-0" />
                    {item.withoutNova.title}
                  </h4>
                  <p className="text-sm text-muted-foreground dark:text-white/40 leading-relaxed font-light">{item.withoutNova.desc}</p>
                </div>
              </div>

              {/* Aspect Label */}
              <div className="hidden lg:flex lg:col-span-1 justify-center items-center relative">
                <div className="absolute top-0 bottom-0 w-[1px] bg-border dark:bg-white/10" />
                <div className="z-10 bg-background dark:bg-[#07080a] py-2 px-3 border border-border dark:border-white/10 rounded-none shadow-md">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground dark:text-white/40 whitespace-nowrap">{item.aspect}</span>
                </div>
              </div>

              {/* With Nova Card */}
              <div className="lg:col-span-4 p-8 border border-[#D97706]/20 bg-[#D97706]/[0.02] dark:bg-[#D97706]/[0.01] rounded-none relative flex flex-col justify-between group hover:bg-[#D97706]/[0.04] dark:hover:bg-[#D97706]/[0.03] hover:border-[#D97706]/40 transition-all shadow-[0_0_30px_rgba(217,119,6,0.02)] dark:shadow-[0_0_30px_rgba(217,119,6,0.02)]">
                {/* Subtle top glow line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D97706]/40 to-transparent" />
                
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#D97706] font-bold border border-[#D97706]/20 px-2 py-0.5 bg-[#D97706]/5">
                      With Nova
                    </span>
                    <span className="font-mono text-xs text-[#D97706]/50 dark:text-[#D97706]/30">0{index + 1}B</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground dark:text-white flex items-center mb-3">
                    <Check size={16} className="text-[#D97706] mr-2 flex-shrink-0" />
                    {item.withNova.title}
                  </h4>
                  <p className="text-sm text-muted-foreground dark:text-white/70 leading-relaxed font-light">{item.withNova.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <motion.button 
            className="flex items-center gap-3 px-8 py-4 border border-[#D97706]/30 bg-[#D97706]/5 text-[#D97706] dark:text-white hover:text-white hover:bg-[#D97706] dark:hover:bg-[#D97706]/10 hover:border-[#D97706]/50 transition-all rounded-none group/btn shadow-[0_0_20px_rgba(217,119,6,0.05)] dark:shadow-[0_0_20px_rgba(217,119,6,0.05)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.dispatchEvent(new CustomEvent('open-signal-form'))}
          >
            Experience the difference 
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform text-[#D97706]" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
