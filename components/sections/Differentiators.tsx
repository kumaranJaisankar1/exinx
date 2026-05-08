"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const diffs = [
  "Intelligence first architecture, not content first delivery",
  "Continuous adaptation instead of static workflows",
  "Unified ecosystem instead of disconnected tools",
  "Outcome driven design focused on measurable results"
];

export default function Differentiators() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Differentiation</span>
            <h2 className="text-4xl md:text-6xl mb-8 flex flex-col items-start">
              <span className="hero-title-thin">What Makes</span>
              <span className="hero-title-bold text-gradient-exinx">ExInX Different</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md font-light">
              ExInX is not just another platform; it's a fundamental shift in how educational intelligence is built and deployed.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {diffs.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 p-8 rounded-[2rem] bg-secondary/30 dark:bg-white/[0.02] border border-border/50 group hover:border-primary/30 transition-all duration-500"
              >
                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
