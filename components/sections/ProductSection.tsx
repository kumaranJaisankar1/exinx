"use client";

import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Product3DCanvas } from "@/components/Product3DModels";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

const imageVariants = (index: number) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  },
});

export default function ProductSection() {
  return (
    <section id="products" className="relative overflow-hidden py-32 bg-background">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] dark:opacity-[0.07]">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-accent blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-500 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-24 space-y-4"
        >
          <motion.div className="flex justify-center items-center gap-4 text-[10px] uppercase tracking-[0.3em] mb-4">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-accent" />
            <span className="text-gradient-exinx font-black">{siteConfig.products.label}</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-accent" />
          </motion.div>
          <motion.h2 className="font-syne font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] tracking-tight">
            Meet the <span className="text-gradient-exinx">Ecosystem</span>
          </motion.h2>
          <motion.p className="text-text-muted text-lg max-w-2xl mx-auto font-medium">
            {siteConfig.products.subtitle}
          </motion.p>
        </motion.div>

        <div className="space-y-32 md:space-y-48">
          {siteConfig.products.items.map((product, i) => (
            <div
              key={product.id}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-12 lg:gap-24",
                i % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              {/* Product Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}

                className="flex-1 space-y-8"
              >
                <div className="space-y-4">
                  <span className="inline-block py-1.5 px-4 rounded-full border text-[11px] font-bold uppercase tracking-widest bg-surface/50 backdrop-blur-sm" style={{ color: product.color, borderColor: `${product.color}40` }}>
                    {product.tag}
                  </span>
                  <h3 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tighter text-text">
                    {product.name}
                  </h3>
                  <p className="font-serif italic text-xl md:text-2xl text-text-muted opacity-80">
                    {product.subtitle}
                  </p>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-text-muted max-w-xl">
                  {product.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {product.features.map((feat, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3 text-[14px] text-text-muted group"
                    >
                      <span className="mt-1 w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold transition-colors" style={{ background: `${product.color}15`, color: product.color }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </span>
                      <span className="group-hover:text-text transition-colors duration-300">{feat}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="pt-4">
                  <button
                    className="relative px-10 py-4 bg-surface border border-white/[0.08] hover:border-white/[0.2] transition-all duration-500 group/btn overflow-hidden rounded-xl"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(45deg, ${product.color}20, transparent)` }} />
                    <span className="relative z-10 font-bold tracking-wide flex items-center gap-3" style={{ color: product.color }}>
                      {product.cta}
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
                    </span>
                  </button>
                </div>
              </motion.div>

              {/* Product 3D Visual */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 w-full aspect-square max-w-[500px] relative"
              >
                <div className="absolute inset-0 bg-surface/30 dark:bg-surface/10 rounded-3xl backdrop-blur-[2px] border border-white/[0.03] overflow-hidden">
                  {/* Radial Glow behind 3D model */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${product.color}50, transparent 70%)` }} />

                  <Product3DCanvas id={product.id} />
                </div>

                {/* Floating Glass Element for depth */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hidden md:block animate-bounce-slow" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full hidden md:block animate-pulse-slow" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
