"use client";
import React from 'react';
import { motion } from "framer-motion";
import { TrendingUp, BarChart3 } from "lucide-react";
import { useTheme } from "next-themes";

export default function AnalyticsVision() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-48 relative overflow-hidden font-barlow bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-[#0E76BD] tracking-[0.4em] uppercase text-xs mb-6 block font-bold"
            >
              Predictive Governance
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-light text-foreground mb-8 tracking-tighter leading-none">
              Analytics <br />
              <span className="font-instrument-serif italic" style={{ color: isDark ? 'rgba(var(--foreground-rgb), 0.2)' : 'rgba(0, 0, 0, 0.3)' }}>Vision.</span>
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-xl mb-12 font-light">
              Orbis doesn't just show you what happened; it predicts what will happen. 
              Our analytics engine identifies potential drop-outs, forecasts revenue trends, 
              and optimizes resource allocation using advanced neural models.
            </p>

            <div className="grid grid-cols-2 gap-8">
               {[
                 { label: "Prediction Accuracy", val: "94%" },
                 { label: "Data Nodes", val: "1.2M+" },
                 { label: "Daily Transact", val: "50K+" },
                 { label: "Growth Potential", val: "EXINX" }
               ].map((stat, i) => (
                 <div key={i} className="border-l-2 border-[#0E76BD]/20 pl-6">
                    <div className="text-3xl font-medium text-foreground mb-1 tracking-tight">{stat.val}</div>
                    <div className="text-[10px] font-mono text-[#0E76BD] uppercase tracking-[0.25em] font-bold">{stat.label}</div>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative">
             <div className="aspect-square bg-secondary/30 dark:bg-white/[0.01] border border-border dark:border-white/10 rounded-[3rem] p-12 relative overflow-hidden shadow-2xl backdrop-blur-3xl dark:shadow-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0E76BD]/5 via-transparent to-[#0E76BD]/10" />
                <div className="relative h-full flex flex-col justify-between">
                   <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-background dark:bg-white/5 rounded-2xl flex items-center justify-center border border-border dark:border-white/10 shadow-sm">
                         <TrendingUp className="text-[#0E76BD]" size={24} />
                      </div>
                      <div className="text-right">
                         <div className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest">Health</div>
                         <div className="text-xl font-medium text-emerald-500 uppercase tracking-tight">Optimal</div>
                      </div>
                   </div>

                   <div className="flex-grow flex items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="w-48 h-48 bg-background dark:bg-white/5 rounded-full border border-border dark:border-white/5 flex items-center justify-center relative shadow-xl dark:shadow-none"
                      >
                         <BarChart3 className="text-[#0E76BD]/40" size={64} />
                         <motion.div 
                           animate={{ rotate: 360 }}
                           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                           className="absolute inset-0 border-t-2 border-[#0E76BD]/50 rounded-full"
                         />
                      </motion.div>
                   </div>

                   <div className="h-2 w-full bg-background dark:bg-white/5 rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 2 }}
                        className="h-full bg-[#0E76BD]/60 shadow-[0_0_15px_rgba(14,118,189,0.3)]"
                      />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
