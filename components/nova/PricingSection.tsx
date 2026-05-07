"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";

const PricingSection = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="pricing-section" className="py-32 relative bg-background transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-8 relative z-10 text-center">
        <div className="mb-16">
          <span className="section-label">Pricing</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-light text-foreground uppercase tracking-[0.15em] mb-6"
          >
            Accessible Learning, <br />
            <span className="font-extrabold block mt-2 text-primary tracking-[0.05em]">Designed for Every Student</span>
          </motion.h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-light">
            Start with a 7-day free trial. No payment required.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-secondary/30 dark:bg-white/[0.02] border border-border dark:border-white/10 rounded-[2rem] shadow-2xl backdrop-blur-xl relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />

            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="text-left">
                 <h3 className="text-sm font-extrabold text-foreground uppercase tracking-widest mb-1">Nova Access</h3>
                 <span className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-[9px] font-bold uppercase tracking-widest">
                   7-Day Free Trial
                 </span>
              </div>
              <Sparkles className="text-primary" size={20} />
            </div>

            <div className="flex items-baseline gap-1 mb-8 justify-start relative z-10">
              <span className="text-5xl font-bold text-foreground">₹999</span>
              <span className="text-foreground/40 text-sm">/month</span>
            </div>

            <ul className="space-y-4 mb-10 text-left relative z-10">
              {[
                "Personalized Intelligence Core",
                "All Curriculum Support",
                "24/7 AI Study Companion",
                "Deep Cognitive Analytics",
                "Unlimited Growth Tracking"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground/60">
                  <Check size={14} className="text-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-signal-form'))}
              className="w-full py-5 bg-primary text-white font-bold text-xs tracking-widest uppercase rounded-full transition-all hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(217,119,6,0.3)] active:scale-95 relative z-10"
              style={{
                background: 'var(--primary)',
                boxShadow: '0 10px 30px -5px rgba(217, 119, 6, 0.3)'
              }}
            >
              Start Learning Free
            </button>
            
            <p className="mt-6 text-center text-[10px] text-foreground/30 uppercase tracking-widest relative z-10">
              No credit card required. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
