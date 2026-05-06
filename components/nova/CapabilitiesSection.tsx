"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BookOpen, ShieldCheck, Microscope, BarChart3, LineChart, MessageSquare } from "lucide-react";
import React from "react";

const capabilities = [
  {
    title: "Learn",
    description: "Adaptive content delivery that mirrors your curiosity and depth.",
    icon: BookOpen,
    color: "group-hover:text-blue-400"
  },
  {
    title: "Validate",
    description: "Instant concept verification through interactive Socratic probing.",
    icon: ShieldCheck,
    color: "group-hover:text-green-400"
  },
  {
    title: "Assess",
    description: "Multi-dimensional performance tracking across cognitive domains.",
    icon: Microscope,
    color: "group-hover:text-purple-400"
  },
  {
    title: "Analyze",
    description: "Deep-dive metrics into retention strength and knowledge gaps.",
    icon: BarChart3,
    color: "group-hover:text-orange-400"
  },
  {
    title: "Track Growth",
    description: "Visual roadmap of your journey from novice to master.",
    icon: LineChart,
    color: "group-hover:text-cyan-400"
  },
  {
    title: "AI Companion",
    description: "A 24/7 intellectual partner that grows alongside you.",
    icon: MessageSquare,
    color: "group-hover:text-yellow-400"
  }
];

const CapabilityCard = ({ capability, index }: { capability: typeof capabilities[0], index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500 blur-xl opacity-0 group-hover:opacity-100" />
      
      <div className="h-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-10 flex flex-col justify-between transition-colors duration-500 group-hover:bg-white/[0.05] group-hover:border-white/20">
        <div>
          <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:border-white/30 ${capability.color}`}>
            <capability.icon size={28} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-z-10 transition-transform">
            {capability.title}
          </h3>
          <p className="text-gray-400 leading-relaxed transition-colors group-hover:text-gray-300">
            {capability.description}
          </p>
        </div>

        {/* Animated border line */}
        <div className="mt-8 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700" />
      </div>
    </motion.div>
  );
};

const CapabilitiesSection = () => {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold font-syne mb-6">
              Core <span className="text-orange-400">Capabilities.</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Nova is an end-to-end cognitive architecture. From initial discovery to 
              deep mastery, every capability is powered by adaptive intelligence.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="px-6 py-3 border border-white/10 rounded-full font-mono text-xs text-gray-500 tracking-widest uppercase">
               Adaptive Intelligence Engine v1.0
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, i) => (
            <CapabilityCard key={i} capability={capability} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
