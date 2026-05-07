"use client";
import React from 'react';
import { motion } from "framer-motion";

const stats = [
  { label: "Institutions Connected", value: "500+" },
  { label: "Students Managed", value: "1.2M+" },
  { label: "Teachers Empowered", value: "45K+" },
  { label: "Notifications Delivered", value: "100M+" }
];

const labels = [
  "Cloud-Based Platform",
  "Mobile-First Experience",
  "Real-Time Communication",
  "Secure & Scalable Infrastructure"
];

export default function OrbisTrust() {
  return (
    <section className="py-24 bg-secondary/30 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-[#0E76BD] font-bold mb-4">
            Trust & Infrastructure
          </h2>
          <p className="text-3xl md:text-5xl font-light text-foreground tracking-tighter">
            Trusted Digital Infrastructure for <br />
            <span className="font-instrument-serif italic text-[#0E76BD]">Modern Institutions</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-foreground mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/40 font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {labels.map((label, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-1 h-1 rounded-full bg-[#0E76BD]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-foreground font-bold whitespace-nowrap">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
