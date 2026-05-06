"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Access Structured Question Database",
    desc: "Use a database of 1 Million+ competitive exam questions mapped to syllabus, topic, sub-topic and difficulty."
  },
  {
    number: "02",
    title: "Generate Exams or Attempt Mocks",
    desc: "Institutions generate question papers and worksheets while students attempt mock exams and topic practice."
  },
  {
    number: "03",
    title: "Analyze and Improve Preparation",
    desc: "Track preparation progress using structured analytics that highlight performance patterns."
  }
];

export default function AstraProcess() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-48 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-32">
          <span className="text-[#f07050] font-mono text-xs tracking-[0.4em] uppercase mb-6 block">The Workflow</span>
          <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
            How <span className="font-instrument-serif italic font-normal text-white/30">Astra Works.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2">
            <motion.div 
              style={{ height }}
              className="w-full bg-[#f07050] shadow-[0_0_15px_#f07050]" 
            />
          </div>

          <div className="space-y-32">
            {steps.map((step, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Number Point */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-black border-2 border-[#f07050] rounded-full -translate-x-1/2 z-10 shadow-[0_0_10px_#f07050]" />
                
                <div className="w-full md:w-1/2 p-12 md:p-24 text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="text-4xl font-bold text-[#f07050]/20 mb-6 block font-mono tracking-tighter">{step.number}</span>
                    <h3 className="text-3xl font-bold text-white mb-6 leading-tight">{step.title}</h3>
                    <p className="text-lg text-white/40 leading-relaxed font-light">{step.desc}</p>
                  </motion.div>
                </div>
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
