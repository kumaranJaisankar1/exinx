"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe, Target } from "lucide-react";

export const ecosystem = [
  {
    name: "Nova",
    href: "/nova",
    color: "#D97706",
    tag: "Intelligence Engine",
    desc: "Personalized AI that adapts to your cognition.",
    icon: Sparkles
  },
  {
    name: "Orbis",
    href: "/orbis",
    color: "#0E76BD",
    tag: "Institutional System",
    desc: "Unified ecosystem for modern education.",
    icon: Globe
  },
  {
    name: "Iyota",
    href: "/iyota",
    color: "#FF0000",
    tag: "Precision Prep",
    desc: "Advanced assessment & performance analytics.",
    icon: Target
  }
];

interface EcosystemShowcaseProps {
  onLinkClick?: () => void;
}

export const EcosystemShowcase = ({ onLinkClick }: EcosystemShowcaseProps) => {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <Link href="/" className="flex justify-center" onClick={onLinkClick}>
          <button className="cursor-pointer text-[16px] uppercase tracking-[0.5em] text-muted-foreground font-bold mb-8 block hover:text-primary transition-colors">
            EXINX ECOSYSTEM
          </button>
        </Link>

        <div className="grid gap-3">
          {ecosystem.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Link
                href={product.href}
                onClick={onLinkClick}
                className="group relative block p-4 rounded-[2px] bg-secondary/30 dark:bg-white/[0.02] border border-border hover:border-primary/20 transition-all overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at top right, ${product.color}15, transparent)` }}
                />

                <div className="relative z-10 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono tracking-widest uppercase block mb-1 opacity-60" style={{ color: product.color }}>
                      {product.tag}
                    </span>
                    <h3 className="text-lg font-bold text-foreground tracking-tight flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      {product.name}
                      <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-all" />
                    </h3>
                  </div>
                  <div
                    className="p-2 rounded-[2px] bg-background border border-border text-foreground group-hover:scale-110 transition-all duration-500"
                    style={{ color: product.color }}
                  >
                    <product.icon size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Secondary Navigation */}
        <div className="mt-8 flex flex-col gap-4 px-2">
          <Link 
            href="/" 
            onClick={onLinkClick}
            className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors flex items-center justify-between group"
          >
            About
            <div className="h-[1px] flex-1 mx-4 bg-border group-hover:bg-primary/30 transition-colors" />
            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
          <Link 
            href="/" 
            onClick={onLinkClick}
            className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors flex items-center justify-between group"
          >
            Contact Us
            <div className="h-[1px] flex-1 mx-4 bg-border group-hover:bg-primary/30 transition-colors" />
            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
};
