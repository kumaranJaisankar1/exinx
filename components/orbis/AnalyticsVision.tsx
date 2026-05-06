"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart3 } from "lucide-react";

export default function AnalyticsVision() {
  return (
    <section className="py-48 relative overflow-hidden font-barlow">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-purple-400 tracking-[0.4em] uppercase text-xs mb-6 block font-medium"
            >
              Predictive Governance
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tighter leading-none">
              Analytics <br />
              <span className="font-instrument-serif italic opacity-30">Vision.</span>
            </h2>
            <p className="text-xl text-white/60 leading-relaxed max-w-xl mb-12 font-light">
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
                 <div key={i} className="border-l border-white/20 pl-6">
                    <div className="text-3xl font-medium text-white mb-1 tracking-tight">{stat.val}</div>
                    <div className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.25em] font-medium">{stat.label}</div>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative">
             <div className="aspect-square bg-white/[0.01] border border-white/10 rounded-[2px] p-12 relative overflow-hidden shadow-2xl backdrop-blur-3xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5" />
                <div className="relative h-full flex flex-col justify-between">
                   <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-white/5 rounded-[2px] flex items-center justify-center border border-white/10">
                         <TrendingUp className="text-white/60" size={24} />
                      </div>
                      <div className="text-right">
                         <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Health</div>
                         <div className="text-xl font-medium text-emerald-400 uppercase tracking-tight">Optimal</div>
                      </div>
                   </div>

                   <div className="flex-grow flex items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="w-48 h-48 bg-white/5 rounded-full border border-white/5 flex items-center justify-center relative"
                      >
                         <BarChart3 className="text-white/40" size={64} />
                         <motion.div 
                           animate={{ rotate: 360 }}
                           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                           className="absolute inset-0 border-t border-purple-500/50 rounded-full"
                         />
                      </motion.div>
                   </div>

                   <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 2 }}
                        className="h-full bg-white/40"
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
