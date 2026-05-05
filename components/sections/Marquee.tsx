"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div className="py-8 border-y border-white/[0.04] overflow-hidden whitespace-nowrap bg-[var(--bg)]">
      <motion.div 
        animate={{ x: "-50%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex w-fit"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex">
            {siteConfig.marquee.map((item, index) => (
              <div key={index} className="flex items-center gap-8 px-8 group">
                <span className="font-syne font-bold text-xl uppercase tracking-[0.15em] text-text-dim group-hover:text-accent transition-colors">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-60" />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
