"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain, MessageSquare, Target, BarChart3, Clock, Award,
  Users, BookOpen, FileText, TrendingUp, Zap, Layers
} from "lucide-react";

const AUDIENCES = ["Student", "Institution"] as const;
type Audience = typeof AUDIENCES[number];

const studentFeatures = [
  {
    icon: Brain,
    title: "Learns How You Think",
    description: "A psychometric intake maps your cognitive style before Nova teaches you a single concept.",
    tag: "Personalization",
  },
  {
    icon: MessageSquare,
    title: "Ask Anything, Get It",
    description: "Pose any question and receive an explanation calibrated exactly to your comprehension level.",
    tag: "Adaptive AI",
  },
  {
    icon: Target,
    title: "Readiness Validation",
    description: "After each concept, Nova probes your understanding to confirm it — not just check if you answered.",
    tag: "Validation",
  },
  {
    icon: BarChart3,
    title: "Track Your Growth",
    description: "Live analytics on topic mastery, weak areas, and your improvement velocity over time.",
    tag: "Analytics",
  },
  {
    icon: Clock,
    title: "Study at Your Pace",
    description: "No rigid schedules. Nova adjusts delivery speed and depth to how fast you actually grasp concepts.",
    tag: "Self-Paced",
  },
  {
    icon: Award,
    title: "Structured Assessments",
    description: "Periodic tests built around your learning profile — not generic question banks.",
    tag: "Assessment",
  },
];

const institutionFeatures = [
  {
    icon: Users,
    title: "Cohort Management",
    description: "Deploy Nova across entire classrooms with individual learning profiles for every student.",
    tag: "Scale",
  },
  {
    icon: BarChart3,
    title: "Class-Level Analytics",
    description: "Aggregate insights on mastery distribution, concept gaps, and engagement across your cohort.",
    tag: "Insights",
  },
  {
    icon: BookOpen,
    title: "Curriculum Alignment",
    description: "Map Nova's content engine to your specific syllabus — JEE, NEET, CBSE, or custom curricula.",
    tag: "Curriculum",
  },
  {
    icon: FileText,
    title: "Custom Assessments",
    description: "Create and assign structured tests. Nova grades, analyses, and surfaces actionable patterns.",
    tag: "Assessment",
  },
  {
    icon: TrendingUp,
    title: "Student Progress Tracking",
    description: "Monitor each student's learning velocity, concept gaps, and readiness scores in real time.",
    tag: "Tracking",
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Onboard hundreds of students instantly with a single institutional access token.",
    tag: "Operations",
  },
];

const studentStat = [
  { value: "1-on-1", label: "AI tutoring session" },
  { value: "7-day", label: "Free trial" },
  { value: "∞", label: "Questions answered" },
];

const institutionStat = [
  { value: "Bulk", label: "Student onboarding" },
  { value: "Live", label: "Class analytics" },
  { value: "Any", label: "Curriculum supported" },
];

const featureData: Record<Audience, { features: typeof studentFeatures; stats: typeof studentStat; headline: string; sub: string; color: string }> = {
  Student: {
    features: studentFeatures,
    stats: studentStat,
    headline: "Your personal AI that grows with you.",
    sub: "Nova adapts to how your brain works — not the other way around.",
    color: "#D97706",
  },
  Institution: {
    features: institutionFeatures,
    stats: institutionStat,
    headline: "Intelligence at classroom scale.",
    sub: "Give every student a personalised learning engine while you stay in control.",
    color: "#D97706",
  },
};

export default function NovaUseCaseSection() {
  const [active, setActive] = useState<Audience>("Student");
  const data = featureData[active];

  return (
    <section id="use-case-section" className="relative bg-background py-24 md:py-32 border-t border-border overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-14 md:mb-16">
          <span className="section-label">Use Cases</span>
          <h2 className="text-3xl md:text-5xl flex flex-col items-start mb-4">
            <span className="hero-title-thin">Nova works for</span>
            <span className="hero-title-bold text-primary">Everyone Who Learns</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-light max-w-xl">
            Whether you're a student trying to master a concept or an institution scaling personalised education — Nova has a mode built for you.
          </p>
        </div>

        {/* Audience Toggle */}
        <div className="flex items-center gap-2 mb-12 p-1 rounded-full border border-border bg-secondary/30 w-fit backdrop-blur-sm">
          {AUDIENCES.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="relative px-7 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.25em] transition-colors duration-200 focus:outline-none"
            >
              {active === tab && (
                <motion.span
                  layoutId="audience-pill"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-200 ${active === tab ? "text-white" : "text-muted-foreground hover:text-foreground"}`}>
                {tab === "Student" ? "For Students" : "For Institutions"}
              </span>
            </button>
          ))}
        </div>

        {/* Content — animated on tab switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Headline + Stats Row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-xl md:text-2xl font-light text-foreground max-w-lg leading-snug">
                  {data.headline}
                </p>
                <p className="text-sm text-muted-foreground mt-2 font-light">{data.sub}</p>
              </div>

              <div className="flex gap-8 shrink-0">
                {data.stats.map((s, i) => (
                  <div key={i} className="flex flex-col items-start">
                    <span className="text-2xl font-black text-primary leading-none">{s.value}</span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1 font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {data.features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative bg-secondary/30 dark:bg-white/[0.02] border border-border rounded-2xl p-6 hover:border-primary/40 hover:bg-primary/[0.03] transition-all duration-300 cursor-default"
                >
                  {/* Tag */}
                  <span className="inline-block mb-4 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-bold uppercase tracking-widest">
                    {f.tag}
                  </span>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="mt-0.5 w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <f.icon size={17} />
                    </div>
                    <h3 className="text-[13px] font-extrabold text-foreground uppercase tracking-wide leading-tight pt-1">
                      {f.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] text-muted-foreground leading-relaxed font-light pl-12">
                    {f.description}
                  </p>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full" />
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA strip */}
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 rounded-2xl border border-border bg-secondary/20">
              <div>
                <p className="text-sm font-bold text-foreground">
                  {active === "Student" ? "Ready to learn the way you think?" : "Ready to deploy Nova for your institution?"}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 font-light">
                  {active === "Student" ? "Start your 7-day free trial. No credit card required." : "Book a walkthrough with our team."}
                </p>
              </div>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-signal-form"))}
                className="shrink-0 px-7 py-3 bg-primary text-white font-black text-[10px] uppercase tracking-[0.25em] rounded-full hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/20"
              >
                {active === "Student" ? "Start Free Trial" : "Contact Us"}
              </button>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
