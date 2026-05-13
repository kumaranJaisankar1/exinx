"use client";

import React from "react";
import IyotaNavbar from "@/components/navbars/IyotaNavbar";
import IyotaFooter from "@/components/sections/IyotaFooter";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/CustomCursor";
import { motion } from "framer-motion";

export default function IyotaStudentsPage() {
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
      <IyotaNavbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#FF0000] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              For Students
            </span>
            <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-black leading-[1.1] tracking-tighter mb-8">
              Precision <span className="text-[#FF0000]">Practice</span> for JEE & NEET.
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12 max-w-2xl">
              Master your preparation with adaptive testing, deep performance analytics, and a database of 1M+ precise questions.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="px-10 py-4 bg-[#FF0000] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-[2px] shadow-2xl hover:scale-105 transition-all">
                Start Practicing
              </button>
              <button className="px-10 py-4 border border-border text-foreground font-bold text-xs uppercase tracking-[0.2em] rounded-[2px] hover:bg-foreground/5 transition-all">
                View Sample Tests
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dummy Content Section */}
      <section className="py-32 px-6 md:px-12 bg-secondary/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Under Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="p-16 rounded-3xl bg-background border border-border text-left">
                <div className="w-16 h-16 bg-[#FF0000]/10 rounded-2xl mb-8" />
                <div className="h-6 w-48 bg-muted rounded-full mb-6" />
                <div className="space-y-3">
                  <div className="h-2 w-full bg-muted/50 rounded-full" />
                  <div className="h-2 w-full bg-muted/50 rounded-full" />
                  <div className="h-2 w-3/4 bg-muted/50 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IyotaFooter />
    </main>
  );
}
