"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { UserSearch, Zap, CheckCircle2, TrendingUp, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Learning Profile",
    description: "Nova analyzes your initial response patterns and baseline knowledge.",
    icon: UserSearch,
    color: "text-blue-400"
  },
  {
    title: "Adaptive Learning",
    description: "Personalized content generation tailored to your cognitive strengths.",
    icon: Zap,
    color: "text-orange-400"
  },
  {
    title: "Validate Understanding",
    description: "Real-time verification through concept probing and analogies.",
    icon: CheckCircle2,
    color: "text-green-400"
  },
  {
    title: "Assess & Measure",
    description: "Continuous tracking of growth and identification of mastery levels.",
    icon: TrendingUp,
    color: "text-purple-400"
  }
];

const ProcessTimeline = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  // Measure the total scrollable width of the cards
  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setScrollWidth(width - viewportWidth);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"] // Ensure full height usage
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform using a percentage that stops exactly at the last card
  // We use -scrollWidth (pixels) for precision, converted to a string for CSS
  const x = useTransform(smoothProgress, [0, 1], [0, -scrollWidth]);

  return (
    <section ref={targetRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold font-syne mb-6">
              Adaptive <span className="text-orange-400">Learning Process.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
              A continuous loop of understanding, adapting, and validating designed to ensure mastery.
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
                className="flex-shrink-0 w-[480px] aspect-[16/10] bg-white/[0.03] border border-white/10 rounded-[32px] p-12 flex flex-col justify-between group hover:border-white/20 transition-all hover:bg-white/[0.05]"
              >
                <div>
                  <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 ${step.color} group-hover:scale-110 transition-transform`}>
                    <step.icon size={32} />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-xs text-gray-500 uppercase tracking-[0.3em]">STEP 0{i + 1}</span>
                    <div className="h-px flex-grow bg-white/10" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-400 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
                
                <div className="relative h-1 w-full bg-white/5 rounded-full overflow-hidden mt-8">
                  <motion.div 
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r from-transparent to-white/40`}
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                    style={{ width: "50%" }}
                  />
                </div>
              </div>
            ))}

            {/* FINAL CONCLUSION CARD: "Mastery Unlocked" */}
            <div className="flex-shrink-0 w-[550px] aspect-[16/10] relative group mr-12">
              <div className="absolute inset-0 bg-orange-500/10 blur-[100px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative h-full w-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 border-2 border-orange-500/40 rounded-[40px] p-16 flex flex-col justify-center items-center text-center backdrop-blur-xl">
                 <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(249,115,22,0.5)]">
                    <Trophy size={40} className="text-black" />
                 </div>
                 <h3 className="text-4xl font-bold text-white mb-4 font-syne">Mastery Unlocked.</h3>
                 <p className="text-lg text-orange-100/70 font-light mb-8 max-w-xs leading-tight">
                   The cycle completes as Nova validates your absolute conceptual clarity.
                 </p>
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-3 group/btn shadow-xl"
                 >
                   Start Your Journey
                   <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                 </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile: Stacked Cards */}
        <div className="lg:hidden px-6 space-y-8 overflow-y-auto max-h-[65vh] pb-20">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-8"
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 ${step.color}`}>
                <step.icon size={24} />
              </div>
              <span className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-2 block">STEP 0{i + 1}</span>
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 font-light">
                {step.description}
              </p>
            </div>
          ))}
          {/* Mobile Conclusion */}
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border-2 border-orange-500/30 rounded-3xl p-10 text-center">
             <Trophy size={40} className="text-orange-400 mx-auto mb-6" />
             <h3 className="text-2xl font-bold text-white mb-4">Mastery Unlocked.</h3>
             <button className="w-full py-4 bg-orange-500 text-black rounded-full font-bold">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
