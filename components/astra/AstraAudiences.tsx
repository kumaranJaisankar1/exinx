"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, UserCircle2 } from "lucide-react";

export default function AstraAudiences() {
  return (
    <section className="py-48 relative bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-32"
        >
          <span className="text-[#f07050] font-mono text-xs tracking-[0.4em] uppercase mb-6 block">Unified Platform</span>
          <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
            Built for <br />
            <span className="font-instrument-serif italic font-normal text-white/30">Institutions & Students.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-px bg-white/[0.05] border border-white/[0.05]">
          {/* For Institutions */}
          <motion.div 
            whileHover={{ backgroundColor: "rgba(240, 112, 80, 0.03)" }}
            className="p-16 md:p-24 bg-black transition-all duration-500 group"
          >
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-12 group-hover:border-[#f07050]/40 transition-colors">
              <Building2 className="w-8 h-8 text-white/40 group-hover:text-[#f07050] transition-colors" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-8">For Institutions</h3>
            <p className="text-xl text-white/40 leading-relaxed mb-12 font-light">
              Automate end-to-end workflows with intelligent generation. Reduce manual effort and ensure quality at scale.
            </p>
            <button className="flex items-center gap-4 text-[#f07050] font-bold tracking-widest uppercase text-xs group-hover:gap-6 transition-all">
              Explore Platform <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* For Students */}
          <motion.div 
            whileHover={{ backgroundColor: "rgba(240, 112, 80, 0.03)" }}
            className="p-16 md:p-24 bg-black transition-all duration-500 group"
          >
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-12 group-hover:border-[#f07050]/40 transition-colors">
              <UserCircle2 className="w-8 h-8 text-white/40 group-hover:text-[#f07050] transition-colors" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-8">For Students</h3>
            <p className="text-xl text-white/40 leading-relaxed mb-12 font-light">
              Practice JEE & NEET with syllabus-aligned mocks. Strengthen concepts and track goal-driven progress.
            </p>
            <button className="flex items-center gap-4 text-[#f07050] font-bold tracking-widest uppercase text-xs group-hover:gap-6 transition-all">
              Start Practicing <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
