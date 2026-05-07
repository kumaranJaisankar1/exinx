"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Book, FileText, Database, Search } from "lucide-react";
import { useTheme } from "next-themes";

export default function KnowledgeArchives() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-48 relative font-barlow bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Book, label: "Digital Library", val: "400K+ Titles" },
                  { icon: FileText, label: "Smart Docs", val: "Cloud Security" },
                  { icon: Database, label: "Neural Archives", val: "AI-Indexed" },
                  { icon: Search, label: "Semantic Search", val: "0ms Latency" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 bg-secondary/30 dark:bg-white/[0.02] border border-border dark:border-white/5 rounded-3xl text-center hover:border-[#0E76BD]/50 transition-all shadow-sm dark:shadow-none group"
                  >
                    <item.icon className="text-foreground/40 mx-auto mb-6 group-hover:text-[#0E76BD] transition-colors" size={32} />
                    <div className="text-2xl font-medium text-foreground mb-2 tracking-tight group-hover:text-[#0E76BD] transition-colors">{item.val}</div>
                    <div className="text-[10px] font-mono text-[#0E76BD] uppercase tracking-[0.3em] font-bold">{item.label}</div>
                  </motion.div>
                ))}
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-[#0E76BD] tracking-[0.4em] uppercase text-xs mb-6 block font-bold"
            >
              The Knowledge Base
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-light text-foreground mb-8 tracking-tighter leading-none">
              Collective <br />
              <span className="font-instrument-serif italic" style={{ color: isDark ? 'rgba(var(--foreground-rgb), 0.2)' : 'rgba(0, 0, 0, 0.3)' }}>Memory.</span>
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-xl mb-12 font-light">
              Every book, document, and research paper in your institution is 
              ingested into the Orbis Knowledge Graph. Our semantic search allows 
              students and staff to find exactly what they need across millions of 
              records in milliseconds.
            </p>
            <button className="px-10 py-4 bg-secondary dark:bg-white/5 border border-border dark:border-white/20 rounded-full text-foreground text-[10px] font-bold uppercase tracking-widest hover:bg-[#0E76BD] hover:text-white hover:border-[#0E76BD] transition-all">
              Explore the Archive
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
