"use client";
import React from 'react';
import { motion } from "framer-motion";

export default function MobileAppShowcase() {
  const apps = [
    { title: "Parent App", desc: "Real-time tracking & payments" },
    { title: "Student App", desc: "Academics & assignments" },
    { title: "Teacher App", desc: "Classroom & coordination" },
    { title: "Admin Access", desc: "Institutional control" }
  ];

  return (
    <section className="py-48 bg-secondary/30 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8 tracking-tighter">
            Built for Every User <br />
            <span className="font-instrument-serif italic text-[#0E76BD]">Across the Institution</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-light">
            A seamless mobile-first experience for students, teachers, parents, and administrators designed to keep the institution connected from anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {apps.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-[9/16] bg-background border border-border rounded-[2.5rem] p-6 mb-6 relative overflow-hidden transition-all duration-500 group-hover:border-[#0E76BD]/40 group-hover:shadow-2xl group-hover:shadow-[#0E76BD]/10">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0E76BD]/5 to-transparent" />
                <div className="relative h-full flex flex-col">
                  {/* Phone UI Mock */}
                  <div className="w-full h-4 bg-foreground/5 rounded-full mb-8" />
                  <div className="flex-grow flex flex-col gap-4">
                    <div className="w-full h-24 bg-[#0E76BD]/10 rounded-2xl" />
                    <div className="w-2/3 h-4 bg-foreground/10 rounded-full" />
                    <div className="w-full h-4 bg-foreground/5 rounded-full" />
                    <div className="w-3/4 h-4 bg-foreground/5 rounded-full" />
                  </div>
                  <div className="mt-auto flex justify-center">
                    <div className="w-12 h-1 bg-[#0E76BD]/20 rounded-full" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-1">{app.title}</h3>
              <p className="text-sm text-foreground/40 font-light">{app.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
