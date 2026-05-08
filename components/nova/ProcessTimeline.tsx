"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { UserSearch, Zap, CheckCircle2, TrendingUp, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Understand Your Learning Profile",
    description: "A short psychometric assessment determines your cognitive ability and learning persona.",
    icon: UserSearch,
    color: "text-blue-500"
  },
  {
    title: "Deliver Adaptive Learning",
    description: "Ask any question and receive explanations tailored to your level.",
    icon: Zap,
    color: "text-primary"
  },
  {
    title: "Validate Understanding",
    description: "Nova tests your readiness and identifies gaps.",
    icon: CheckCircle2,
    color: "text-green-500"
  },
  {
    title: "Assess and Measure",
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
    if (containerRef.current) {
      const width = containerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setScrollWidth(width - viewportWidth);
    }
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
    <section id="process-section" ref={targetRef} className="relative h-[400vh] bg-secondary/30 py-25">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Process</span>
            <h2 className="text-4xl md:text-6xl mb-8 flex flex-col items-start hero-title-thin">
              A Structured Approach to <br />
              <span className="hero-title-bold italic text-primary font-instrument-serif">Personalized Learning</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              Nova follows a structured learning cycle designed to maximize understanding and retention.
            </p>
          </motion.div>
        </div>

        {/* Desktop: Horizontal Scroll */}
        <div className="hidden lg:block">
          <motion.div
            ref={containerRef}
            style={{ x }}
            className="flex gap-12 px-12 items-center w-max"
          >
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[420px] aspect-[16/11] card-surface flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 ${step.color} group-hover:scale-110 transition-transform`}>
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

                <div className="relative h-1 w-full bg-border rounded-full overflow-hidden mt-8">
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-primary/40`}
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                    style={{ width: "50%" }}
                  />
                </div>
              </div>
            ))}

            {/* Final Call to Action Card */}
            <div className="flex-shrink-0 w-[450px] aspect-[16/11] relative group mr-12">
              <div className="relative h-full w-full bg-primary text-primary-foreground rounded-[40px] p-12 flex flex-col justify-center items-center text-center shadow-2xl">
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
                  className="px-8 py-3 bg-white text-primary rounded-full font-bold text-xs uppercase tracking-widest shadow-xl"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-signal-form'))}
                >
                  Start Free Trial
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile: Stacked Cards */}
        <div className="lg:hidden px-6 space-y-8 overflow-y-auto max-h-[60vh] pb-20">
          {steps.map((step, i) => (
            <div
              key={i}
              className="card-surface p-8"
            >
              <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 ${step.color}`}>
                <step.icon size={24} />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2 block">STEP 0{i + 1}</span>
              <h3 className="text-xl font-serif text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
