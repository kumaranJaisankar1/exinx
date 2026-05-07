"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section id="comparison-section" className="py-24 relative bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-8">
        <div className="mb-16">
          <span className="section-label">Comparison</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-light text-foreground uppercase tracking-[0.15em] mb-6"
          >
            The <span className="font-extrabold block mt-2 text-primary tracking-[0.05em]">Difference</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Learning */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-surface p-10 bg-secondary/30"
          >
            <h3 className="text-[10px] uppercase tracking-widest text-destructive mb-8 font-bold">Without Nova</h3>
            
            <div className="space-y-6">
              {[
                "Generic explanations",
                "Dependency on teachers",
                "No feedback loop"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X size={12} className="text-destructive" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Nova Learning */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-surface p-10 border-primary/20 bg-primary/5 shadow-xl shadow-primary/5"
          >
            <h3 className="text-[10px] uppercase tracking-widest text-primary mb-8 font-bold">With Nova</h3>
            
            <div className="space-y-6">
              {[
                "Personalized learning",
                "Independent study",
                "Continuous improvement"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <motion.button 
              className="mt-10 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group/btn"
              whileHover={{ x: 5 }}
              onClick={() => window.dispatchEvent(new CustomEvent('open-signal-form'))}
            >
              Experience the difference <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
