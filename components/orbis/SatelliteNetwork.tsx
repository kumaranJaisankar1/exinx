"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Smartphone, Bell, MessageSquare, PieChart } from "lucide-react";
import { useTheme } from "next-themes";

export default function SatelliteNetwork() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-48 relative overflow-hidden font-barlow bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 rounded-[2rem] bg-secondary/30 dark:bg-white/5 border border-border dark:border-white/10 mb-12 flex items-center justify-center shadow-sm dark:shadow-none"
          >
             <Smartphone className="text-[#0E76BD]" size={32} />
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-light text-foreground mb-8 tracking-tighter leading-none">
            Satellite <br />
            <span className="font-instrument-serif italic" style={{ color: isDark ? 'rgba(var(--foreground-rgb), 0.2)' : 'rgba(0, 0, 0, 0.3)' }}>Connectivity.</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl leading-relaxed font-light">
            Orbis doesn't stop at the classroom door. Our suite of native mobile 
            satellites keeps parents, teachers, and administrators synchronized 
            through real-time notifications, messaging, and performance dashboards.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {[
            { icon: Bell, title: "Smart Alerts", desc: "Automated fee reminders, event notifications, and safety alerts." },
            { icon: MessageSquare, title: "Direct Mesh", desc: "Encrypted communication between parents and institutional staff." },
            { icon: PieChart, title: "Real-time Pulse", desc: "Live tracking of student performance and campus health metrics." }
          ].map((node, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-12 bg-secondary/30 dark:bg-white/[0.02] border border-border dark:border-white/5 rounded-[3rem] text-center hover:border-[#0E76BD]/50 transition-all shadow-sm dark:shadow-none group"
            >
              <div className="w-16 h-16 rounded-2xl bg-background dark:bg-white/5 flex items-center justify-center mb-8 border border-border dark:border-white/10 mx-auto group-hover:bg-[#0E76BD] group-hover:text-white transition-all duration-500">
                <node.icon size={32} />
              </div>
              <h3 className="text-2xl font-medium text-foreground mb-4 tracking-wide group-hover:text-[#0E76BD] transition-colors">{node.title}</h3>
              <p className="text-foreground/60 leading-relaxed font-light">{node.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Orbital Paths Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-[#0E76BD]/[0.05] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-[#0E76BD]/[0.05] rounded-full pointer-events-none" />
    </section>
  );
}
