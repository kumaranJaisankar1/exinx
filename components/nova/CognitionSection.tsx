"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Target, Activity, Cpu } from "lucide-react";

const cognitionCards = [
  {
    title: "IQ Estimation",
    description: "Continuously monitoring problem-solving velocity and depth.",
    icon: Brain,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/20"
  },
  {
    title: "Persona Detection",
    description: "Identifying unique learning styles—visual, auditory, or analytical.",
    icon: Target,
    color: "from-purple-500/20 to-indigo-500/20",
    borderColor: "border-purple-500/20"
  },
  {
    title: "Pace Calibration",
    description: "Adjusting delivery speed based on real-time comprehension signals.",
    icon: Activity,
    color: "from-orange-500/20 to-yellow-500/20",
    borderColor: "border-orange-500/20"
  },
  {
    title: "Adaptive Engine",
    description: "Reformulating complex concepts into simpler, relatable analogies.",
    icon: Cpu,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/20"
  }
];

const CognitionSection = () => {
  return (
    <section className="py-32 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-syne mb-6"
          >
            Built on <span className="text-blue-400">Cognitive Intelligence.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Nova continuously refines how it teaches based on how you learn. 
            It doesn't just deliver content; it builds an evolving model of your mind.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: AI Visual Flow */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
              <div className="flex flex-col gap-12">
                {[
                  { label: "INPUT", sub: "Real-time interactions", color: "text-blue-400" },
                  { label: "ANALYSIS", sub: "Neural pattern matching", color: "text-purple-400" },
                  { label: "PERSONALIZED TEACHING", sub: "Optimized delivery", color: "text-orange-400" }
                ].map((item, i) => (
                  <div key={i} className="relative flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className={`text-xs font-mono tracking-widest ${item.color} mb-1`}>{item.label}</span>
                      <span className="text-lg font-semibold text-white">{item.sub}</span>
                    </div>
                    {i < 2 && (
                      <div className="absolute -bottom-10 left-4 w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
                    )}
                  </div>
                ))}
              </div>

              {/* Decorative Brain/Node SVG */}
              <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
                 <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" className="text-blue-500" />
                    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-white" />
                    {[...Array(6)].map((_, i) => (
                      <motion.circle
                        key={i}
                        cx={100 + Math.cos(i * 60 * Math.PI / 180) * 80}
                        cy={100 + Math.sin(i * 60 * Math.PI / 180) * 80}
                        r="3"
                        fill="currentColor"
                        className="text-blue-400"
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                    ))}
                 </svg>
              </div>
            </div>
          </div>

          {/* Right: Cognitive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cognitionCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${card.borderColor} bg-gradient-to-br ${card.color} backdrop-blur-sm hover:scale-[1.02] transition-transform cursor-default group`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/20 transition-colors">
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{card.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CognitionSection;
