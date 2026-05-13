"use client";

import React, { useState, useEffect, useRef } from "react";
import IyotaNavbar from "@/components/navbars/IyotaNavbar";
import IyotaFooter from "@/components/sections/IyotaFooter";
import CustomCursor from "@/components/CustomCursor";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  Search, 
  Target, 
  TriangleAlert, 
  FileText, 
  Clock, 
  RefreshCw, 
  Zap, 
  BarChart3, 
  TrendingUp, 
  ChevronRight 
} from "lucide-react";
import Link from "next/link";

const heroImages = [
  "/images/institution/hero_1.png",
  "/images/institution/hero_2.png",
  "/images/institution/hero_3.png"
];

// --- Helper Components ---
const ParallaxSection = ({ children, offset = 50 }: { children: React.ReactNode, offset?: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default function IyotaInstitutionsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main
      className="relative bg-background overflow-x-hidden transition-colors duration-500"
      style={{
        '--primary': '#FF0000',
        '--accent': '#FF0000',
        '--ring': '#FF0000',
      } as React.CSSProperties}
    >
      <CustomCursor />
      <div className="dark text-foreground">
        <IyotaNavbar />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
          {/* Background Image Slider */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={currentImageIndex}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }}
                className="absolute inset-0 overflow-hidden"
              >
                <motion.div
                  initial={{ x: "-35%", scale: 1.2 }}
                  animate={{ x: 0, scale: 1.1 }}
                  exit={{ x: "35%", scale: 1.15 }}
                  transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }}
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
                />
                <div className="absolute inset-0 bg-black/80" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicator Dots */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {heroImages.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImageIndex ? 'w-8 bg-[#FF0000]' : 'w-2 bg-[#FF0000]/20'}`}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-mono text-[10px] tracking-[0.5em] uppercase mb-8 block font-bold text-[#FF0000]"
            >
              For Educational Institutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(1.8rem,5vw,3.8rem)] font-bold text-white mb-8 leading-[1.1] max-w-4xl mx-auto tracking-tighter"
            >
              Stop Spending Hours <br className="hidden md:block" />
              <span className="font-instrument-serif italic font-normal text-[#FF0000]">
                Creating Question Papers.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
            >
              Empower your faculty with an intelligent database of 1M+ questions for JEE & NEET. Generate balanced assessments in minutes, not hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('open-signal-form', { bubbles: true }));
                  }
                }}
                className="w-full sm:w-auto px-10 py-4 bg-[#FF0000] text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-[2px] shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request Demo
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <Link
                href="#problem"
                className="w-full sm:w-auto px-10 py-4 border border-white/20 bg-white/5 backdrop-blur-md text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-[2px] hover:bg-white/10 transition-all text-center"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Section 1: The Problem Institutions Face */}
      <section id="problem" className="min-h-screen flex items-center bg-background py-32 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-left">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-mono text-[10px] tracking-[0.5em] uppercase mb-6 block font-bold text-[#FF0000]"
              >
                THE PROBLEM
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tighter leading-tight">
                The Problem <br />
                <span className="font-instrument-serif italic font-normal text-[#FF0000]">Institutions Face.</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed max-w-xl">
                <p>
                  Institutions often struggle with fragmented academic processes that impact efficiency. Faculty spend hours searching across multiple sources to manually compile question papers.
                </p>
                <p className="text-sm opacity-60">
                  Maintaining consistent patterns, balanced difficulty, and proper topic coverage becomes a constant challenge without a structured system in place.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="col-span-2 p-10 rounded-[2px] bg-secondary/30 border border-border flex flex-col justify-between h-56 group hover:border-[#FF0000]/30 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#FF0000]/10 flex items-center justify-center text-[#FF0000]">
                  <Search size={22} />
                </div>
                <span className="text-xl font-bold text-foreground tracking-tight leading-tight">
                  Hours spent searching for <br /> relevant questions
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-[2px] bg-secondary/30 border border-border flex flex-col justify-between h-72 group hover:border-[#FF0000]/30 transition-all shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-[#FF0000]/10 flex items-center justify-center text-[#FF0000]">
                  <Target size={20} />
                </div>
                <span className="text-sm font-bold text-foreground tracking-tight">
                  Manual compilation of question papers
                </span>
              </motion.div>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-6 rounded-[2px] bg-secondary/50 border border-border flex items-center gap-4 group hover:border-[#FF0000]/30 transition-all"
                >
                  <TriangleAlert size={18} className="text-[#FF0000]" />
                  <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Scattered Sources</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-8 rounded-[2px] bg-[#FF0000] text-white flex flex-col justify-between h-48 shadow-xl shadow-[#FF0000]/20"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <FileText size={20} className="text-white" />
                  </div>
                  <span className="text-sm font-black uppercase tracking-widest">
                    Consistency Challenge
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Faculty Time is Wasted */}
      <section className="min-h-screen flex items-center bg-secondary/20 py-32 relative overflow-hidden border-y border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,0,0,0.05),transparent)]" />

        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-[2px] bg-background border border-border shadow-2xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF0000]" />
                    <div className="h-2.5 w-12 bg-muted rounded-full" />
                  </div>
                  <div className="text-[10px] font-black text-[#FF0000] uppercase tracking-widest">Wasted Effort: 85%</div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Paper Creation", time: "4 Hours", color: "bg-[#FF0000]" },
                    { label: "Question Search", time: "3 Hours", color: "bg-[#FF0000]/70" },
                    { label: "Pattern Check", time: "2 Hours", color: "bg-[#FF0000]/40" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      className="relative h-12 bg-secondary/50 rounded-[2px] border border-border/50 p-4 flex items-center justify-between"
                    >
                      <span className="text-[11px] font-bold text-muted-foreground">{stat.label}</span>
                      <div className="flex items-center gap-3">
                        <div className={`h-1.5 w-24 ${stat.color} rounded-full`} />
                        <span className="text-[10px] font-black text-foreground uppercase">{stat.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border flex justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-black text-foreground tracking-tighter" style={{ fontFamily: 'Syne, sans-serif' }}>9+ Hours</div>
                    <div className="text-[10px] text-[#FF0000] font-bold uppercase tracking-widest mt-1">Lost per faculty weekly</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-10 -right-8 p-6 bg-background rounded-full border border-border shadow-2xl z-20 text-[#FF0000]"
              >
                <Clock size={28} />
              </motion.div>
            </div>

            <div className="text-left order-1 lg:order-2">
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-mono text-[10px] tracking-[0.5em] uppercase mb-6 block font-bold text-[#FF0000]"
              >
                THE IMPACT
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tighter leading-tight">
                Faculty Time is <br />
                <span className="font-instrument-serif italic font-normal text-[#FF0000]">Wasted on Manuals.</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
                <p>
                  Repetitive tasks like searching papers and managing manual workflows drain educators' energy.
                </p>
                <p className="text-sm opacity-60">
                  IyotaPrep eliminates this burden using intelligent automation, enabling institutions to generate assessments in minutes, not hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <motion.span
              className="font-mono text-[10px] tracking-[0.5em] uppercase mb-6 block font-bold text-[#FF0000]"
            >
              The Solution
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tighter">
              Everything to <span className="font-instrument-serif italic font-normal text-[#FF0000]">Scale</span> Your Institution.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Instant Generation",
                desc: "Generate exam-ready papers in minutes with intelligent automation.",
                icon: FileText,
                color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20"
              },
              {
                title: "Question Replacement",
                desc: "Replace individual questions effortlessly while maintaining balance.",
                icon: RefreshCw,
                color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20"
              },
              {
                title: "Worksheet Automation",
                desc: "Create worksheets instantly aligned with classroom teaching goals.",
                icon: Zap,
                color: "text-amber-600 bg-amber-50 dark:bg-amber-900/20"
              },
              {
                title: "Activity Analytics",
                desc: "Track exams, worksheets, and patterns with deep visibility.",
                icon: BarChart3,
                color: "text-rose-600 bg-rose-50 dark:bg-rose-900/20"
              }
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2px] bg-secondary/30 border border-border text-left hover:border-[#FF0000]/30 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-full ${f.color} flex items-center justify-center mb-8 border border-current/10`}>
                  <f.icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 tracking-tight leading-tight">{f.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Quality Section */}
      <section className="min-h-screen flex items-center bg-background py-32 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="text-left">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-mono text-[10px] tracking-[0.5em] uppercase mb-6 block font-bold text-[#FF0000]"
              >
                QUALITY
              </motion.span>

              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-12 tracking-tighter leading-tight">
                Maintain Standardized <br />
                <span className="font-instrument-serif italic font-normal text-[#FF0000]">Exam Quality.</span>
              </h2>

              <div className="space-y-10 text-muted-foreground text-lg font-light leading-relaxed max-w-xl opacity-80">
                <p>
                  All questions are meticulously mapped and structured to ensure accuracy, relevance, and curriculum alignment. Each question is tagged by topic, sub-topic, difficulty level, and exam type, enabling precise control over paper composition.
                </p>
                <p>
                  Every question paper is automatically balanced to maintain consistent difficulty, comprehensive topic coverage, and strict alignment with the intended exam pattern.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="relative group"
            >
              <div className="absolute -inset-8 bg-[#FF0000]/5 rounded-full blur-3xl group-hover:bg-[#FF0000]/10 transition-colors" />
              <img
                src="/images/institution/instution-quality-image.jpg"
                alt="Academic Quality Control"
                className="relative w-full rounded-[2px] shadow-2xl border border-border object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Analytics Parallax */}
      <section className="py-40 relative overflow-hidden bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 text-left">
              <motion.span
                className="font-mono text-[10px] tracking-[0.5em] uppercase mb-6 block font-bold text-[#FF0000]"
              >
                Activity Monitor
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tighter leading-tight">
                Real-time <span className="font-instrument-serif italic font-normal text-[#FF0000]">Visibility</span> of Your Academic Operations.
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
                Track your institution’s assessment activity comprehensively. Monitor exams, worksheets, and exam patterns across all standards with complete control.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Exams Conducted",
                  "Worksheets Created",
                  "Exam Types / Standard",
                  "Professor Performance"
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3 p-5 bg-background rounded-[2px] border border-border">
                    <div className="w-2 h-2 rounded-full bg-[#FF0000]" />
                    <span className="font-bold text-sm text-foreground uppercase tracking-widest text-[10px]">{stat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <ParallaxSection offset={-60}>
                <div className="bg-background rounded-[2px] p-10 border border-border shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between mb-10">
                    <div className="h-4 w-32 bg-muted rounded-full" />
                    <div className="h-10 w-10 rounded-full bg-[#FF0000]/10 flex items-center justify-center text-[#FF0000]">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="space-y-8">
                    {[80, 45, 90, 60].map((w, i) => (
                      <div key={i} className="space-y-3">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                          <span>Standard {12 - i}</span>
                          <span className="text-[#FF0000]">{w}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${w}%` }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-[#FF0000]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ParallaxSection>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[#FF0000] rounded-[2px] p-20 md:p-32 relative overflow-hidden shadow-2xl shadow-[#FF0000]/20"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                Upgrade Your <br />
                <span className="font-instrument-serif italic font-normal text-white/90">Institution Today.</span>
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-16 text-lg md:text-2xl font-light leading-relaxed">
                Join the elite circle of institutions that handle preparation with industrial-grade intelligence.
              </p>
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('open-signal-form', { bubbles: true }));
                  }
                }}
                className="inline-flex items-center justify-center gap-4 bg-white text-[#FF0000] hover:bg-white/90 font-black h-20 px-16 text-xl rounded-[2px] shadow-2xl transition-all uppercase tracking-[0.2em] text-[12px]"
              >
                See It in Action
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <IyotaFooter />
    </main>
  );
}
