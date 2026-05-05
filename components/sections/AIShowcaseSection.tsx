"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Database, Cpu, Zap, Activity } from "lucide-react";

export function AIShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { icon: Database, title: "Data Ingestion", desc: "Raw data streams processed in real-time." },
    { icon: Cpu, title: "AI Processing", desc: "Neural networks analyze patterns and extract insights." },
    { icon: Zap, title: "Automated Action", desc: "Intelligent triggers execute complex workflows." },
    { icon: Activity, title: "Business Impact", desc: "Measurable growth and optimization achieved." },
  ];

  return (
    <section className="py-32 bg-black" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Intelligence Pipeline</h2>
          <p className="text-lg text-secondary">
            Watch how our AI architecture transforms raw inputs into automated business value.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line Background */}
          <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 hidden md:block" />
          
          {/* Animated Connecting Line */}
          <motion.div 
            className="absolute left-[50%] top-0 w-1 bg-gradient-to-b from-accent to-purple-500 -translate-x-1/2 hidden md:block glow-line"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:text-left' : 'md:text-right'} mb-8 md:mb-0`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-secondary">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative z-10 w-16 h-16 rounded-full bg-black border-2 border-accent flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                  >
                    <Icon className="w-8 h-8 text-accent" />
                  </motion.div>

                  <div className="w-full md:w-[45%] hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
