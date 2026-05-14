"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Database, Zap, FileText, BarChart3, ArrowRight } from "lucide-react";
import IyotaNavbar from "@/components/navbars/IyotaNavbar";
import IyotaFooter from "@/components/sections/IyotaFooter";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";

// --- Local Components ---

const SectionHeader = ({ badge, title, highlight, description = "", align = "center", dark = false }: { badge: string, title: string, highlight?: string, description: string, align?: "left" | "center", dark?: boolean }) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"} mb-16`}>
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="font-mono text-[10px] tracking-[0.5em] uppercase mb-6 block font-bold text-[#FF0000]"
    >
      {badge}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`text-4xl md:text-6xl font-bold tracking-tighter mb-8 ${dark ? 'text-white' : 'text-foreground'} leading-[1.1]`}
    >
      {title} {highlight && (
        <span className="font-instrument-serif italic font-normal text-[#FF0000]">
          {highlight}.
        </span>
      )}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`text-base md:text-lg font-light leading-relaxed ${dark ? 'text-white/60' : 'text-muted-foreground'}`}
    >
      {description}
    </motion.p>
  </div>
);

export default function IyotaAboutPage() {
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
      </div>

      <div className="relative z-10">
        <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 bg-background transition-colors overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF0000]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF0000]/3 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 w-full">
            {/* Header */}
            <SectionHeader
              badge="Our Identity"
              title="Transforming the"
              highlight="Future of Prep"
              description=""
            // description="IyotaPrep is the infrastructure layer for the next generation of competitive exam preparation and institutional assessment."
            />

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center mt-20">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="space-y-6 text-muted-foreground font-light text-lg leading-relaxed">
                  <p>
                    IyotaPrep is a{" "}
                    <span className="font-bold text-foreground border-b border-[#FF0000]/20">
                      Competitive Exam Preparation Infrastructure
                    </span>{" "}
                    designed to transform how institutions conduct assessments and how students
                    prepare for competitive exams like JEE Mains and NEET.
                  </p>

                  <p>
                    The platform is powered by a structured database of{" "}
                    <span className="font-bold text-[#FF0000]">
                      more than 1 Million
                    </span>{" "}
                    competitive exam questions enabling automated paper generation, worksheets,
                    high-fidelity mock exams, and deep performance analytics.
                  </p>
                </div>

                <div className="p-10 rounded-[2px] bg-secondary/30 border-l-4 border-[#FF0000]">
                  <p className="text-foreground font-medium text-lg leading-relaxed italic">
                    "Our core mission is to enable students from
                    <span className="font-bold text-[#FF0000]"> Class 6 to 12 </span>
                    to practice JEE and NEET-level questions within their current syllabus, gradually building exam readiness through structured mock progression."
                  </p>
                </div>

                <div className="pt-4">
                  <button className="px-10 py-4 bg-[#FF0000] text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-[2px] shadow-2xl hover:scale-[1.02] transition-all flex items-center gap-3 group">
                    Explore Ecosystem <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Right Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "1M+", desc: "Curated Questions", icon: Database, stagger: true },
                  { title: "Auto", desc: "Paper Generation", icon: Zap, stagger: false },
                  { title: "Pro", desc: "Mock Exams", icon: FileText, stagger: false },
                  { title: "Live", desc: "Performance Analytics", icon: BarChart3, stagger: true }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`group p-8 rounded-[2px] bg-background border border-border hover:border-[#FF0000]/30 shadow-sm hover:shadow-2xl hover:shadow-[#FF0000]/5 transition-all duration-500 ${item.stagger ? 'md:mt-8' : ''}`}
                  >
                    <div className="w-12 h-12 rounded-[2px] bg-[#FF0000]/10 text-[#FF0000] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground tracking-tighter mb-2 group-hover:text-[#FF0000] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <IyotaFooter />
      <ScrollToTop />
    </main>
  );
}
