"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, CreditCard, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "AI Admissions",
    description: "Automated enrollment forecasting and demographic intelligence that identifies future talent with 98% accuracy.",
    icon: Users,
    color: "from-purple-500 to-blue-500"
  },
  {
    title: "Fee Orchestration",
    description: "Dynamic payment forecasting and automated billing cycles that eliminate administrative friction entirely.",
    icon: CreditCard,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Secure Onboarding",
    description: "Biometric and digital identity management for seamless, paperless institutional entry.",
    icon: ShieldCheck,
    color: "from-cyan-500 to-purple-500"
  }
];

export default function RegistryCore() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-48 relative overflow-hidden font-barlow">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-purple-400 tracking-[0.4em] uppercase text-xs mb-6 block font-medium"
            >
              The Core Registry
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tighter leading-none">
              Institutional <br />
              <span className="font-instrument-serif italic text-purple-500/50">Gravity.</span>
            </h2>
            <p className="text-xl text-white/60 leading-relaxed max-w-xl mb-12 font-light">
              Orbis transforms static records into dynamic institutional intelligence. 
              Manage every student journey from first inquiry to final graduation 
              within a unified, AI-driven registry.
            </p>

            <div className="space-y-12">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 group"
                >
                  <div className={`w-14 h-14 rounded-[2px] bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors`}>
                       <f.icon className="text-white/80 group-hover:text-purple-400 transition-colors" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2 group-hover:text-purple-400 transition-colors tracking-wide">{f.title}</h3>
                    <p className="text-white/40 leading-relaxed font-light">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div style={{ y }} className="relative z-10">
              <div className="aspect-square bg-white/[0.02] rounded-[2px] border border-white/5 backdrop-blur-3xl p-12 flex items-center justify-center group overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
                 <div className="relative">
                    <div className="w-64 h-64 border-2 border-purple-500/30 rounded-full animate-spin-slow flex items-center justify-center">
                       <div className="w-48 h-48 border border-blue-500/20 rounded-full animate-reverse-spin flex items-center justify-center">
                          <Users className="text-purple-500" size={64} />
                       </div>
                    </div>
                    {/* Floating Data Points - Sharp UI */}
                    <div className="absolute top-0 -left-10 px-4 py-2 bg-white/5 backdrop-blur-md rounded-[2px] border border-white/10 text-[10px] font-mono text-purple-300 tracking-widest">
                       ENROLL: 98%
                    </div>
                    <div className="absolute bottom-10 -right-10 px-4 py-2 bg-white/5 backdrop-blur-md rounded-[2px] border border-white/10 text-[10px] font-mono text-blue-300 tracking-widest">
                       FEES: PAID
                    </div>
                 </div>
              </div>
            </motion.div>
            
            {/* Background Prism Glow - Matching Hero Video */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-500/10 via-rose-500/5 to-blue-500/10 blur-[120px] rounded-full pointer-events-none opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
