"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function BrandIntro() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-3xl glass border-white/10 p-1">
              {/* <div className="absolute inset-0 bg-transparent from-primary/10 via-transparent to-accent/10" /> */}
              <div className="w-full h-full relative flex items-center justify-center">
                {/* Neural-like pulsing center */}
                {/* <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-48 h-48 rounded-full bg-primary/20 blur-3xl"
                /> */}
                {/* <div className="absolute inset-20 border border-white/5 rounded-full animate-spin-slow" />
                <div className="absolute inset-20 border border-white/10 rounded-full animate-reverse-spin-slow" /> */}

                {/* Brand Visual Image with Floating Effect */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative w-full h-full"
                >
                  <img
                    src="/brand-visual.png"
                    alt="ExInX Intelligence"
                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(70,224,255,0.3)] scale-[1.4]"
                  />
                </motion.div>
              </div>
            </div>

            {/* Floating floating data chips */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 px-6 py-3 glass rounded-2xl shadow-xl border-primary/20"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">Adaptive Node</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 px-6 py-3 glass rounded-2xl shadow-xl border-accent/20"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">Extended IQ</span>
            </motion.div>
          </motion.div>

          {/* Text Content Side */}
          <div className="order-1 lg:order-2">
            <motion.div {...fadeUp} transition={undefined}>
              <span className="section-label">About</span>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] mb-8 text-foreground flex flex-col items-start">
                <span className="hero-title-thin">What is</span>
                <span className="hero-title-bold text-gradient-exinx">ExInX?</span>
              </h2>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={undefined}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                ExInX is an Extended Intelligence platform designed to move education beyond static systems and linear learning. It combines artificial intelligence, structured knowledge systems, and performance driven frameworks to create a unified ecosystem for modern education.
              </p>
              <div className="h-px w-24 bg-gradient-to-right from-primary to-transparent my-8" />
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                Unlike traditional platforms that deliver content, ExInX builds intelligence. It continuously adapts, evolves, and responds to users, enabling personalized growth, institutional efficiency, and measurable outcomes at scale.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
