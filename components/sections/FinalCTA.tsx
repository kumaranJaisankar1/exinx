"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 p-12 md:p-24 rounded-[3rem] glass border-white/10 overflow-hidden shadow-2xl"
        >
          {/* Animated background pulse */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50" />

          <h2 className="text-4xl md:text-7xl mb-8 leading-tight flex flex-col items-center">
            <span className="hero-title-thin">The Future of Education is</span>
            <span className="hero-title-bold text-gradient-exinx"> Extended Intelligence</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Discover how ExInX transforms learning, teaching, and institutional growth through AI powered systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-primary !px-12 !py-5 text-base shadow-xl hover:shadow-primary/20">
              Get Started with ExInX
            </button>
          </div>

          {/* Tagline for the bottom of CTA area */}
          {/* <div className="mt-16 pt-12 border-t border-white/5">
            <p className="font-serif italic text-2xl text-foreground/40 tracking-tight">
              Extending Intelligence Across Education
            </p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
