"use client";
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";

const FinalCTA = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-32 relative overflow-hidden bg-background transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-light mb-8 leading-tight tracking-tight text-foreground"
        >
          Start Your Personalized <br />
          <span className="hero-title-bold text-primary font-instrument-serif">Learning Journey Today</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-foreground/60 max-w-2xl mx-auto mb-12 font-light"
        >
          Join thousands of students learning smarter with AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-signal-form'))}
            className="px-12 py-5 text-white font-bold text-[10px] uppercase tracking-[0.25em] flex items-center gap-3 group rounded-full transition-all hover:scale-[1.05] hover:shadow-[0_20px_40px_-10px_rgba(var(--primary-rgb),0.3)] active:scale-95"
            style={{
              background: 'var(--primary)',
              boxShadow: '0 10px 30px -5px rgba(var(--primary-rgb), 0.3)'
            }}
          >
            Start Learning Free
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById('problem-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-5 bg-secondary/50 dark:bg-white/[0.05] text-foreground font-bold text-[10px] uppercase tracking-[0.25em] rounded-full transition-all border border-border hover:bg-secondary active:scale-95"
          >
            Explore How It Works
          </button>
        </motion.div>
      </div>

      <div className="mt-32 text-center border-t border-border pt-12">
        <p className="text-foreground/30 font-mono text-[10px] tracking-[0.4em] uppercase">
          Nova Adaptive Learning Engine • Built by EXINX
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
