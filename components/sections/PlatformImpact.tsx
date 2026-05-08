"use client";

import { motion } from "framer-motion";
import { User, Users, Landmark } from "lucide-react";

const impacts = [
  {
    icon: <User className="w-8 h-8" />,
    target: "For Learners",
    content: "Personalized learning journeys that adapt in real time, improving comprehension, engagement, and outcomes.",
    color: "#46e0ff"
  },
  {
    icon: <Users className="w-8 h-8" />,
    target: "For Educators",
    content: "Tools and insights that simplify teaching, enhance decision making, and improve student performance.",
    color: "#b670ff"
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    target: "For Institutions",
    content: "End to end systems that streamline operations, unify processes, and enable scalable growth.",
    color: "#ff8a00"
  }
];

export default function PlatformImpact() {
  return (
    <section className="py-24 md:py-32 bg-[#07080a] text-white overflow-hidden relative">
      {/* Dynamic Background Noise/Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase mb-6 block">Platform Impact</span>
            <h2 className="text-4xl md:text-6xl mb-8 flex flex-col items-start">
              <span className="hero-title-thin">The Impact of</span>
              <span className="hero-title-bold text-gradient-exinx text-white">Extended Intelligence</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:mb-4"
          >
            <p className="text-white/40 font-mono text-sm tracking-widest uppercase">
              Transforming the Lifecycle
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-0 border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02] backdrop-blur-2xl">
          {impacts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 hover:bg-white/[0.03] transition-colors group"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-2xl"
                style={{ backgroundColor: `${item.color}20`, color: item.color }}
              >
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-6 tracking-tight group-hover:translate-x-2 transition-transform">
                {item.target}
              </h3>
              
              <p className="text-white/50 leading-relaxed font-light text-lg">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
