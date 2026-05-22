"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { UserSearch, Zap, CheckCircle2, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Understands Your Learning Profile",
    description: "A short psychometric assessment determines your cognitive ability and learning persona.",
    icon: UserSearch,
    color: "text-blue-500"
  },
  {
    title: "Delivers Adaptive Learning",
    description: "Ask any question and receive explanations tailored to your level.",
    icon: Zap,
    color: "text-primary"
  },
  {
    title: "Validates Understanding",
    description: "Nova tests your readiness and identifies gaps.",
    icon: CheckCircle2,
    color: "text-green-500"
  },
  {
    title: "Assessments and Measures",
    description: "Structured assessments provide detailed performance insights.",
    icon: TrendingUp,
    color: "text-purple-500"
  }
];

const ProcessTimeline = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setScrollWidth(containerRef.current.scrollWidth - window.innerWidth);
      }
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], [0, -scrollWidth]);

  return (
    <section id="process-section" ref={targetRef} className="relative bg-secondary/30 h-auto lg:h-[400vh]">
      {/* Sticky panel — top-aligned so header is never cropped, overflow-hidden only on the card strip */}
      <div className="relative lg:sticky lg:top-0 h-auto lg:h-screen flex flex-col">

        {/* Header */}
        <div className="px-6 md:px-12 max-w-7xl mx-auto w-full pt-12 md:pt-16 pb-6 md:pb-8 shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Process</span>
            <h2 className="text-3xl md:text-6xl mb-6 flex flex-col items-start hero-title-thin">
              A Structured Approach to <br className="hidden lg:block" />
              <span className="hero-title-bold italic text-primary font-instrument-serif">Personalized Learning</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              Nova follows a structured learning cycle designed to maximize understanding and retention.
            </p>
          </motion.div>
        </div>

        {/* Desktop: Horizontal scroll strip — overflow-hidden scoped only here */}
        <div className="hidden lg:flex flex-1 min-h-0 overflow-hidden items-center">
          <motion.div
            ref={containerRef}
            style={{ x }}
            className="flex gap-12 px-12 items-center w-max"
          >
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[420px] aspect-[16/11] card-surface rounded-none border border-white/10 bg-white/[0.02] flex flex-col justify-between group hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <div>
                  <div className={`w-14 h-14 rounded-none bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 ${step.color} group-hover:scale-110 transition-transform`}>
                    <step.icon size={28} />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">STEP 0{i + 1}</span>
                    <div className="h-px flex-grow bg-border" />
                  </div>
                  <h3 className="text-2xl font-serif text-foreground mb-4">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="relative h-1 w-full bg-border rounded-none overflow-hidden mt-8">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-primary/40"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                    style={{ width: "50%" }}
                  />
                </div>
              </div>
            ))}

            {/* Final Call to Action Card */}
            <div className="flex-shrink-0 w-[450px] aspect-[16/11] relative group mr-12">
              <div className="relative h-full w-full bg-primary text-primary-foreground rounded-none p-12 flex flex-col justify-center items-center text-center shadow-2xl border border-primary/40">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-8">
                  <ArrowRight size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-serif mb-4">Ready to Begin?</h3>
                <p className="text-sm text-white/80 font-light mb-8 max-w-xs leading-tight">
                  Start your personalized learning journey with Nova today.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-primary rounded-none font-bold text-xs uppercase tracking-widest shadow-xl"
                  onClick={() => window.dispatchEvent(new CustomEvent("open-signal-form"))}
                >
                  Start Free Trial
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile: Stacked Cards */}
        <div className="lg:hidden px-6 space-y-6 pb-12 w-full max-w-xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="card-surface p-8 rounded-none border border-white/10 bg-white/[0.02] hover:border-primary/40 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-none bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 ${step.color}`}>
                <step.icon size={24} />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2 block">STEP 0{i + 1}</span>
              <h3 className="text-xl font-serif text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}

          {/* Mobile Final Call to Action Card */}
          <div className="relative group w-full mt-4">
            <div className="relative w-full bg-primary text-primary-foreground rounded-none p-8 flex flex-col justify-center items-center text-center shadow-xl border border-primary/40">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <ArrowRight size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-serif mb-2">Ready to Begin?</h3>
              <p className="text-xs text-white/80 font-light mb-6 max-w-xs leading-tight">
                Start your personalized learning journey with Nova today.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-white text-primary rounded-none font-bold text-[10px] uppercase tracking-widest shadow-md"
                onClick={() => window.dispatchEvent(new CustomEvent("open-signal-form"))}
              >
                Start Free Trial
              </motion.button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessTimeline;
