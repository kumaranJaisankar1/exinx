"use client";

import { motion } from "framer-motion";
import { Brain, Network, Target } from "lucide-react";

const capabilities = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Adaptive Intelligence",
    desc: "Personalizes learning based on individual learning behaviors and cognitive patterns",
    color: "primary"
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Structured Ecosystems",
    desc: "Connects knowledge, users, and institutions into a unified system",
    color: "accent"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Precision Systems",
    desc: "Optimises performance through continuous analysis and feedback",
    color: "nova"
  }
];

export default function ExInXProcess() {
  return (
    <section className="py-24 md:py-32 bg-secondary/5 dark:bg-white/[0.01] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Process</span>
            <h2 className="text-4xl md:text-6xl mb-8 flex flex-col items-center">
              <span className="hero-title-thin">How ExInX</span>
              <span className="hero-title-bold text-gradient-exinx">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ExInX operates as a connected intelligence layer across the education lifecycle. It captures data, understands behavior, and transforms it into actionable intelligence.
            </p>
          </motion.div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px border-t border-dashed border-primary/20 -z-10" />

          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group p-8 rounded-3xl glass border-white/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-${cap.color}/10 flex items-center justify-center text-${cap.color} mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {cap.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {cap.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <p className="text-foreground font-medium italic">
              "This integrated approach ensures that every interaction contributes to a smarter, more efficient learning environment."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
