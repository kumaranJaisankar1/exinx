"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface OrbisFeatureSectionProps {
  heading: string;
  description: string;
  features: string[];
  imageSide?: 'left' | 'right';
  visual?: React.ReactNode;
}

export default function OrbisFeatureSection({
  heading,
  description,
  features,
  imageSide = 'right',
  visual
}: OrbisFeatureSectionProps) {
  return (
    <section className="py-32 relative overflow-hidden bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className={cn(
          "grid lg:grid-cols-2 gap-24 items-center",
          imageSide === 'left' && "lg:flex-row-reverse"
        )}>
          <div className={cn(imageSide === 'left' && "lg:order-2")}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8 tracking-tighter leading-tight">
                {heading.split(' ').map((word, i, arr) => 
                  i === arr.length - 1 ? <span key={i} className="font-instrument-serif italic text-[#0E76BD]">{word}</span> : word + ' '
                )}
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed mb-10 font-light max-w-xl">
                {description}
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0E76BD]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="text-[#0E76BD]" size={12} />
                    </div>
                    <span className="text-sm text-foreground/80 font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className={cn(
            "relative",
            imageSide === 'left' && "lg:order-1"
          )}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-video lg:aspect-square bg-secondary/30 dark:bg-white/[0.02] border border-border dark:border-white/10 rounded-[2.5rem] p-8 flex items-center justify-center overflow-hidden"
            >
              {visual || (
                <div className="relative w-full h-full flex items-center justify-center">
                   <div className="w-full h-full bg-gradient-to-tr from-[#0E76BD]/10 via-transparent to-[#0E76BD]/5 absolute inset-0" />
                   <div className="w-3/4 h-3/4 border border-[#0E76BD]/10 rounded-2xl relative">
                      <div className="absolute top-4 left-4 w-1/2 h-2 bg-[#0E76BD]/20 rounded" />
                      <div className="absolute top-10 left-4 w-3/4 h-2 bg-[#0E76BD]/10 rounded" />
                      <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-[#0E76BD]/5 border border-[#0E76BD]/20" />
                   </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
