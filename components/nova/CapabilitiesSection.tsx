"use client";
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, Microscope } from "lucide-react";

const capabilities = [
  {
    title: "Learn",
    description: "AI-powered personalized teaching with adaptive explanations, step-by-step solutions, and contextual understanding.",
    icon: BookOpen,
  },
  {
    title: "Validate",
    description: "Adaptive questioning system that evaluates readiness, strengths, and weak areas.",
    icon: ShieldCheck,
  },
  {
    title: "Assess",
    description: "Structured testing with analytics, accuracy tracking, and topic-level insights.",
    icon: Microscope,
  }
];

const CapabilityCard = ({ capability, index }: { capability: typeof capabilities[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group h-full"
    >
      <div className="h-full bg-secondary/30 dark:bg-white/[0.02] border border-border dark:border-white/10 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 backdrop-blur-sm">
        <div>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 text-primary transition-all duration-300 group-hover:scale-110">
            <capability.icon size={24} />
          </div>
          <h3 className="text-sm font-extrabold text-foreground uppercase tracking-widest mb-4">
            {capability.title}
          </h3>
          <p className="text-sm text-foreground/60 leading-relaxed font-light">
            {capability.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const CapabilitiesSection = () => {
  return (
    <section id="features-section" className="border-t border-border bg-background py-32 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-8">
        <div className="mb-16">
          <span className="section-label">Features</span>
          <h2 className="text-3xl md:text-5xl mb-8 flex flex-col items-start">
            <span className="hero-title-thin">Core</span>
            <span className="hero-title-bold text-gradient-exinx">Capabilities</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl font-light">
            Nova provides a comprehensive set of capabilities designed to empower every learner
            through AI-powered personalized intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((capability, i) => (
            <CapabilityCard key={i} capability={capability} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
