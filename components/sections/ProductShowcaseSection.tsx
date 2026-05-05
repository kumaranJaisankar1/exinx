"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PremiumCard } from "@/components/ui/PremiumCard";

const products = [
  {
    title: "Orbis Ecosystem",
    category: "Educational Management",
    desc: "Comprehensive platform orchestrating operations seamlessly.",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Nova MindIQX",
    category: "Intelligent AI Layer",
    desc: "Cognitive AI processing that predicts and adapts to user needs.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Astra Engine",
    category: "Academic Precision",
    desc: "High-accuracy assessment and analytics tool for institutions.",
    color: "from-pink-500/20 to-red-500/20",
  },
  {
    title: "Nexus Analytics",
    category: "Data Intelligence",
    desc: "Real-time dashboards transforming raw data into business strategy.",
    color: "from-accent/20 to-emerald-500/20",
  },
];

export function ProductShowcaseSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]); // 4 items = -75% to show last item

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Explore Our Products</h2>
          <p className="text-lg text-secondary">
            Next-generation solutions built for scale and intelligence.
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto px-6">
          <motion.div style={{ x }} className="flex w-[400%] gap-8">
            {products.map((product, index) => (
              <div key={index} className="w-full flex-shrink-0 flex items-center justify-center">
                <PremiumCard className="w-full max-w-2xl aspect-video p-1 flex flex-col glow-color-[#3b82f6]">
                  <div className={`w-full flex-grow rounded-xl bg-gradient-to-br ${product.color} border border-white/10 flex items-center justify-center relative overflow-hidden`}>
                     {/* Mockup Placeholder */}
                     <div className="absolute inset-x-8 top-8 bottom-0 rounded-t-xl bg-black/60 border border-white/20 shadow-2xl backdrop-blur-md flex flex-col">
                        <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-500/50" />
                           <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                           <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="p-6 flex-grow flex items-center justify-center">
                          <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                            <p className="text-accent text-sm mb-4">{product.category}</p>
                            <p className="text-secondary max-w-sm">{product.desc}</p>
                          </div>
                        </div>
                     </div>
                  </div>
                </PremiumCard>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
