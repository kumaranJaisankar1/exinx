"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Building2, UserCircle2 } from "lucide-react";
import { useTheme } from "next-themes";

export default function IyotaPrepAudiences() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <section className="py-32 relative bg-background overflow-hidden transition-colors duration-500">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(255,0,0,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-8xl font-bold text-foreground tracking-tighter leading-tight">
            Built for <br />
            <span
              className="font-instrument-serif italic font-normal"
              style={{ color: isDark ? 'rgba(var(--foreground-rgb), 0.3)' : 'rgba(0, 0, 0, 0.4)' }}
            >
              Institutions and Students.
            </span>
          </h2>
        </motion.div>

        {/* Audience Cards */}
        <div
          className="grid lg:grid-cols-2 gap-px bg-foreground/5"
        >

          {/* For Institutions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-16 md:p-20 bg-background transition-all duration-500 group relative overflow-hidden"
          >
            {/* Corner glow on hover */}
            <div
              className="absolute top-0 left-0 w-60 h-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: 'rgba(255,0,0,0.06)',
                filter: 'blur(60px)',
                transform: 'translate(-30%, -30%)',
              }}
            />

            {/* Icon */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-12 transition-all duration-300 border border-foreground/10 group-hover:border-[#FF0000]/50"
            >
              <Building2
                className="w-8 h-8 transition-colors duration-300 text-foreground/40 group-hover:text-[#FF0000]"
              />
            </div>

            <h3 className="text-4xl font-bold text-foreground mb-8">For Institutions</h3>
            <p className="text-xl leading-relaxed mb-12 font-light text-foreground/70">
              Automate end-to-end workflows with intelligent generation. Reduce manual effort and ensure quality at scale.
            </p>
            <button
              className="flex items-center gap-4 font-bold tracking-widest uppercase text-xs group-hover:gap-6 transition-all"
              style={{ color: '#FF0000' }}
            >
              Explore Platform <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* For Students */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-16 md:p-20 bg-background transition-all duration-500 group relative overflow-hidden"
          >
            {/* Corner glow on hover */}
            <div
              className="absolute top-0 right-0 w-60 h-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: 'rgba(255,0,0,0.06)',
                filter: 'blur(60px)',
                transform: 'translate(30%, -30%)',
              }}
            />

            {/* Icon */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-12 transition-all duration-300 border border-foreground/10 group-hover:border-[#FF0000]/50"
            >
              <UserCircle2
                className="w-8 h-8 transition-colors duration-300 text-foreground/40 group-hover:text-[#FF0000]"
              />
            </div>

            <h3 className="text-4xl font-bold text-foreground mb-8">For Students</h3>
            <p className="text-xl leading-relaxed mb-12 font-light text-foreground/70">
              Practice JEE &amp; NEET with syllabus-aligned mocks. Strengthen concepts and track goal-driven progress.
            </p>
            <button
              className="flex items-center gap-4 font-bold tracking-widest uppercase text-xs group-hover:gap-6 transition-all"
              style={{ color: '#FF0000' }}
            >
              Start Practicing <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
