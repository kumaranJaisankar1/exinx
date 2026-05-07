"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "next-themes";

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

const marqueeText = "PREPARATION FLOW • STRUCTURED INTELLIGENCE • JEE & NEET • ";

export default function IyotaPrepProcess() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">

      {/* Scrolling marquee background typography */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(4rem,12vw,10rem)] font-black tracking-[0.1em] uppercase opacity-[0.025]"
          style={{ color: '#FF0000' }}
        >
          {Array(6).fill(marqueeText).join("")}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.5em] uppercase mb-6 block font-bold"
            style={{ color: '#FF0000' }}
          >
            Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold text-foreground tracking-tighter leading-tight"
          >
            How{' '}
            <span
              className="font-instrument-serif italic font-normal"
              style={{ color: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.4)' }}
            >
              IyotaPrep Works
            </span>
          </motion.h2>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Timeline vertical line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2"
            style={{ background: 'rgba(var(--foreground-rgb, 255, 255, 255), 0.08)' }}
          >
            <motion.div
              style={{ height }}
              className="w-full"
              style={{
                height,
                background: '#FF0000',
                boxShadow: '0 0 20px #FF0000, 0 0 40px rgba(255,0,0,0.4)',
              } as any}
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Glowing dot node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-0 md:left-1/2 top-6 w-5 h-5 -translate-x-1/2 z-10 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgb(var(--background))',
                    border: '2px solid #FF0000',
                    boxShadow: '0 0 16px #FF0000, 0 0 32px rgba(255,0,0,0.3)',
                  }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: '#FF0000' }} />
                </motion.div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${i % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="group"
                  >
                    {/* Step number */}
                    <span
                      className="text-5xl font-bold font-mono tracking-tighter mb-4 block"
                      style={{ color: 'rgba(255,0,0,0.15)' }}
                    >
                      {step.number}
                    </span>

                    {/* Connecting line to node */}
                    <div
                      className={`hidden md:block absolute top-8 w-16 h-px ${i % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'}`}
                      style={{ background: 'linear-gradient(to right, transparent, rgba(255,0,0,0.3))' }}
                    />

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-foreground mb-5 leading-tight group-hover:text-[#FF0000] transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-lg text-foreground/70 leading-relaxed font-light">
                      {step.desc}
                    </p>
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
