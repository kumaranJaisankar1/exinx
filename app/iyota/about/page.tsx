"use client";

import React from "react";
import IyotaNavbar from "@/components/navbars/IyotaNavbar";
import IyotaFooter from "@/components/sections/IyotaFooter";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/CustomCursor";
import { motion } from "framer-motion";

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
              About IyotaPrep
            </span>
            <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-black leading-[1.1] tracking-tighter mb-8">
              The Mission for <span className="text-[#FF0000]">Precision</span>.
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12 max-w-2xl">
              We are building the world's most detailed preparation infrastructure, dedicated to making high-stakes education measurable, predictable, and precise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#FF0000] uppercase tracking-widest">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                To eliminate the ambiguity in competitive exam preparation by providing every institution and student with the data they need to succeed.
              </p>
            </div>
            <div className="h-px w-full bg-border" />
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#FF0000] uppercase tracking-widest">The Technology</h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Leveraging the EXINX Intelligence Engine (Nova) to map 1,000,000+ data points across the JEE and NEET curricula.
              </p>
            </div>
          </div>
        </div>
      </section>

      <IyotaFooter />
    </main>
  );
}
