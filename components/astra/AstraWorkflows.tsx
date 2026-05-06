"use client";

import { motion } from "framer-motion";
import { Zap, Target, TrendingUp } from "lucide-react";

const workflows = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Automate Exams & Workflows",
    desc: "Streamline exam creation with intelligent automation. Manage question banks, scheduling, and reporting in one unified platform."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Syllabus Practice",
    desc: "Enable students to prepare effectively with targeted practice aligned to their ongoing syllabus."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Progressive Path",
    desc: "Build strong foundations and advance step-by-step toward full exam readiness."
  }
];

export default function AstraWorkflows() {
  return (
    <section className="py-48 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {workflows.map((flow, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group p-12 border border-white/[0.05] bg-white/[0.02] backdrop-blur-xl rounded-[2px] relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f07050]/5 blur-3xl group-hover:bg-[#f07050]/15 transition-all duration-500 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="text-[#f07050] mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                {flow.icon}
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-[#f07050] transition-colors">
                {flow.title}
              </h3>
              
              <p className="text-white/50 leading-relaxed font-light">
                {flow.desc}
              </p>
              
              <div className="mt-10 pt-10 border-t border-white/[0.05] flex items-center gap-4 group-hover:gap-6 transition-all">
                <div className="w-8 h-[1px] bg-[#f07050]/40" />
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#f07050]/60">Optimization Layer 0{i + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
