"use client";

import { motion } from "framer-motion";
import { Network, Search, Layers, Gauge, RefreshCcw } from "lucide-react";

const adjustmentItems = [
  { label: "Cognitive Adaptation", icon: Layers, color: "text-blue-500" },
  { label: "IQ Estimation", icon: Search, color: "text-primary" },
  { label: "Persona Detection", icon: Network, color: "text-orange-500" },
  { label: "Pace Calibration", icon: Gauge, color: "text-green-500" },
  { label: "Depth Adjustment", icon: RefreshCcw, color: "text-cyan-500" }
];

const IntelligenceEngine = () => {
  return (
    <section id="engine-section" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-5xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">Engine</span>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-light leading-[1.1] text-foreground uppercase tracking-[0.15em] mb-8">
                Built on Cognitive Intelligence,<br />
                <span className="font-extrabold text-primary block mt-2">Not Just Content</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl font-light">
                Nova uses psychometric inputs and interaction data to continuously refine how it teaches. 
                It adapts explanation depth, pace, and structure based on how the student learns.
              </p>
            </motion.div>

            <div className="space-y-3">
              {adjustmentItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/20 transition-all group"
                >
                  <div className={`p-2 rounded-lg bg-background border border-border ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon size={18} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                  <div className="ml-auto flex gap-1">
                    {[...Array(4)].map((_, j) => (
                      <div 
                        key={j}
                        className={`h-1 w-6 rounded-full ${j <= i ? 'bg-primary/60' : 'bg-border'}`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Neural System Animation */}
          <div className="relative h-[400px] flex items-center justify-center">
            <motion.div 
              className="absolute w-[300px] h-[300px] border border-primary/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute w-[220px] h-[220px] border border-primary/5 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 w-40 h-40 bg-background border border-border rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl group">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />
               <motion.div 
                 className="relative z-10 flex flex-col items-center"
                 animate={{ y: [0, -5, 0] }}
                 transition={{ duration: 4, repeat: Infinity }}
               >
                 <span className="font-mono text-[9px] text-primary mb-2 tracking-[0.3em] uppercase">Processing</span>
                 <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-3" />
                 <span className="text-xl font-bold text-foreground tracking-widest uppercase">NOVA-X</span>
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceEngine;
