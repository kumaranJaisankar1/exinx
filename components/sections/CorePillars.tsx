"use client";

import { motion } from "framer-motion";
import { Zap, Share2, Activity } from "lucide-react";

const pillars = [
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Adaptive Intelligence",
    content: "AI driven systems that understand each learner and dynamically adjust content, pace, and pathways to maximize understanding and retention.",
    tag: "Intelligence"
  },
  {
    icon: <Share2 className="w-10 h-10" />,
    title: "Connected Ecosystems",
    content: "A unified structure that brings together institutions, educators, and learners into a seamless and collaborative environment.",
    tag: "Ecosystem"
  },
  {
    icon: <Activity className="w-10 h-10" />,
    title: "Performance Precision",
    content: "Advanced analytics and feedback systems that continuously refine performance, identify gaps, and drive measurable improvement.",
    tag: "Precision"
  }
];

export default function CorePillars() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="section-label">Core Pillars</span>
          <h2 className="text-4xl md:text-7xl mb-8 flex flex-col items-start">
            <span className="hero-title-thin">Built on</span>
            <span className="hero-title-bold text-gradient-exinx">Intelligence</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-1px bg-border/50 border border-border overflow-hidden rounded-[2.5rem]">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-background p-12 hover:bg-secondary/50 transition-colors duration-500 group relative"
            >
              {/* Corner Tag */}
              <div className="absolute top-8 right-8 text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
                {pillar.tag}
              </div>

              <div className="text-primary mb-12 group-hover:scale-110 transition-transform duration-500 origin-left">
                {pillar.icon}
              </div>

              <h3 className="text-2xl font-bold mb-6 group-hover:translate-x-2 transition-transform duration-500">
                {pillar.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed font-light text-lg">
                {pillar.content}
              </p>

              {/* Hover highlight line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
