"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

export default function AboutSection() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      {/* Header Area */}
      <div className="w-full mb-16 flex items-center justify-between">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] mb-6">
            <span className="w-8 h-px bg-accent" />
            <span className="text-gradient-exinx font-bold">{siteConfig.about.label}</span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(2.2rem,4vw,3.8rem)] leading-[1.3] tracking-tight">
            {siteConfig.about.title.split("one-size-fits-all").map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && <span className="font-serif italic font-normal text-gradient-exinx inline-flex px-3 py-1 items-center">one-size-fits-all</span>}
              </span>
            ))}
          </h2>
        </div>
        {/* Decorative Animated Bars in the empty space below cards */}
        <div className="hidden sm:flex gap-3 h-20 items-end mt-8 px-4 border-l-2 border-accent/20">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((bar) => (
            <motion.div
              key={bar}
              animate={{
                height: ["30%", "100%", "30%"],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1 + bar * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 rounded-full bg-gradient-to-t from-accent/20 via-accent/60 to-accent shadow-[0_0_10px_rgba(249,115,22,0.3)]"
            />
          ))}
          <div className="ml-4 mb-1">
            <span className="block text-[10px] uppercase tracking-[0.4em] text-accent font-black">Neural Flux</span>
            <span className="block text-[8px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Core Intelligence Flow</span>
          </div>
        </div>

      </div>

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
        {/* Philosophy Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {siteConfig.about.philosophy.map((card, i) => (
            <div
              key={i}
              className="
    group
    relative
    overflow-hidden
    rounded-[2rem]
    border
    border-slate-200/70
    bg-white
    p-8
    shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)]
    transition-all
    duration-500

    hover:border-accent/40
    hover:shadow-2xl

    dark:border-white/[0.06]
    dark:bg-[#0F1117]/80
    dark:hover:border-accent/30
    dark:shadow-black/20
  "
            >
              {/* Hover Background */}
              <div
                className="
      absolute inset-0
      bg-gradient-to-br
      from-accent/10
      to-transparent
      opacity-0
      transition-opacity
      duration-500
      group-hover:opacity-100
    "
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className="
        mb-4
        font-syne
        text-2xl
        font-black
        text-gradient-exinx
        opacity-40
      "
                >
                  {card.num}
                </div>

                <h4
                  className="
        mb-2
        font-syne
        text-lg
        font-bold
        text-slate-900
        dark:text-white
      "
                >
                  {card.title}
                </h4>

                <p
                  className="
        text-[13px]
        leading-relaxed
        text-slate-600
        dark:text-slate-400
      "
                >
                  {card.text}
                </p>
              </div>

              {/* Corner Glow */}
              <div
                className="
      absolute
      top-0
      right-0
      h-16
      w-16
      translate-x-8
      -translate-y-8
      rounded-full
      bg-accent/10
      blur-2xl
      transition-all
      duration-500
      group-hover:bg-accent/20
    "
              />
            </div>
          ))}


        </div>

        {/* Narrative Description Area */}
        <div

          className="space-y-6 lg:pt-2"
        >
          <div className="p-8 rounded-3xl bg-secondary/10 dark:bg-white/[0.02] border border-border/30 dark:border-white/[0.03] backdrop-blur-sm relative">
            {/* Large quotation mark decoration */}
            <span className="absolute -top-4 -left-4 text-7xl font-serif text-accent/10 pointer-events-none select-none">“</span>

            <p className="text-[17px] leading-[1.8] text-muted-foreground mb-6">
              <strong className="text-foreground font-semibold">EXINX was born from a frustration:</strong> despite billions spent on edtech, most platforms still deliver static content wrapped in gamification. We asked a different question — what if the AI didn't just deliver content, but truly understood how you learn?
            </p>
            <p className="text-[17px] leading-[1.8] text-muted-foreground mb-6">
              Our founding team of AI researchers, cognitive scientists, and educators spent two years building the neural architecture that powers Nova, Orbis, and IyotaPrep. Not chatbots with education prompts — purpose-built intelligence designed from the ground up for learning.
            </p>
            <p className="text-[17px] leading-[1.8] text-muted-foreground">
              Three products that work independently yet amplify each other. A learning companion that knows you. A knowledge platform that connects minds. An assessment engine that measures what matters. <strong className="text-foreground font-medium underline decoration-accent/30 underline-offset-4">This is education democratized by intelligence.</strong>
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}
