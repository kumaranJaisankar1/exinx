"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const products = [
  {
    name: "Nova",
    tag: "Intelligence Engine",
    description: "An AI driven intelligence engine that personalizes learning based on user behavior, cognition, and performance.",
    color: "#f97316"
  },
  {
    name: "Orbis",
    tag: "Institutional System",
    description: "A comprehensive institutional system that connects administration, academics, and operations into a unified ecosystem.",
    color: "#3b82f6"
  },
  {
    name: "Iyota",
    tag: "Precision Prep",
    description: "A precision focused preparation system designed to optimize performance for competitive examinations.",
    color: "#ef4444"
  }
];

export default function ProductSection() {
  return (
    <section className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="section-label">Product Ecosystem</span>
            <h2 className="text-4xl md:text-6xl mb-8 flex flex-col items-start">
              <span className="hero-title-thin">Powered by</span>
              <span className="hero-title-bold text-gradient-exinx">Intelligent Systems</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              ExInX is built on a set of specialized systems designed to address every layer of education.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-secondary/30 dark:bg-white/[0.02] border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl"
            >
              <div
                className="w-12 h-px mb-10 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: product.color }}
              />

              <div className="mb-6">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: product.color }}>
                  {product.tag}
                </span>
                <h3 className="text-3xl font-bold mt-2 tracking-tight group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed font-light text-base mb-10 min-h-[80px]">
                {product.description}
              </p>

              <div className="pt-6 border-t border-border/30">
                <Link
                  href={`/${product.name.toLowerCase()}`}
                  className="text-xs font-bold tracking-widest uppercase flex items-center gap-2 group/btn"
                  style={{ color: product.color }}
                >
                  Explore {product.name}
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground italic text-lg font-light max-w-3xl mx-auto">
            "Each system is powerful on its own. Together, they create a complete intelligence driven education platform."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
