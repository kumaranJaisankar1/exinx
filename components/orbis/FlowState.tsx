"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Clock, Calendar, MapPin, CheckCircle } from "lucide-react";
import { useTheme } from "next-themes";

export default function FlowState() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-48 relative bg-background font-barlow overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0E76BD]/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#0E76BD]/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-[#0E76BD] tracking-[0.4em] uppercase text-xs mb-6 block font-bold"
          >
            Operational Synchronicity
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-light text-foreground mb-8 tracking-tighter">
            Flow <span className="font-instrument-serif italic" style={{ color: isDark ? 'rgba(var(--foreground-rgb), 0.2)' : 'rgba(0, 0, 0, 0.3)' }}>State.</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light">
            Orbis eliminates the chaos of scheduling. Our AI-driven timetable engine 
            optimizes room allocation, teacher availability, and student attendance 
            in real-time, creating a friction-less campus experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Clock, title: "Smart Scheduling", desc: "AI-optimized timetables that prevent conflicts before they happen." },
            { icon: CheckCircle, title: "Auto-Attendance", desc: "Biometric and Geofenced check-ins for real-time presence data." },
            { icon: Calendar, title: "Event Sync", desc: "Institutional calendars that stay synchronized across every device." },
            { icon: MapPin, title: "Asset Tracking", desc: "Real-time location intelligence for every institutional resource." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-secondary/30 dark:bg-white/[0.02] border border-border dark:border-white/5 rounded-3xl hover:border-[#0E76BD]/50 transition-all group shadow-sm dark:shadow-none"
            >
              <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center mb-8 border border-border group-hover:border-[#0E76BD]/50 transition-all">
                <item.icon className="text-foreground/60 group-hover:text-[#0E76BD] transition-colors" size={24} />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-4 tracking-wide group-hover:text-[#0E76BD] transition-colors">{item.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Dynamic Timeline Visual */}
        <div className="mt-32 relative h-[400px] border border-border dark:border-white/5 rounded-[2rem] overflow-hidden bg-secondary/20 dark:bg-white/[0.02] backdrop-blur-md p-12 shadow-inner">
           <div className="absolute inset-0 bg-gradient-to-r from-[#0E76BD]/5 to-transparent" />
           <div className="relative z-10 grid grid-cols-12 gap-4 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-full flex flex-col justify-end gap-2">
                   <motion.div 
                     initial={{ height: 0 }}
                     whileInView={{ height: `${Math.random() * 80 + 20}%` }}
                     transition={{ duration: 2, delay: i * 0.1 }}
                     className="w-full bg-[#0E76BD]/20 rounded-t-lg shadow-[0_0_15px_rgba(14,118,189,0.1)]"
                   />
                   <div className="text-[10px] font-mono text-foreground/30 text-center uppercase tracking-widest">{i+8}AM</div>
                </div>
              ))}
           </div>
           <div className="absolute top-1/2 left-0 right-0 h-px bg-border dark:bg-white/5" />
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="px-8 py-3 bg-[#0E76BD] text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-full shadow-2xl">
                 FLOW: OPTIMIZED
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
