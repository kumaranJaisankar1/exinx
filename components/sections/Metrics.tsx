"use client";

import { siteConfig } from "@/lib/config";
import { useEffect, useRef, useState } from "react";
import { useInView, motion, useSpring, useTransform, useMotionValue } from "framer-motion";

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const isFloat = value % 1 !== 0;
    return (isFloat ? latest.toFixed(1) : Math.floor(latest)) + suffix;
  });

  useEffect(() => {
    if (isInView) {
      const animation = setTimeout(() => {
        const startTime = Date.now();
        const duration = 2000;

        const tick = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / duration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 4); // easeOutQuart
          count.set(easeProgress * value);

          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }, 500);
      return () => clearTimeout(animation);
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Metrics() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {siteConfig.hero.stats.map((stat, i) => (
          <div
            key={i}
            className="p-12 text-center border border-white/[0.04] bg-surface hover:border-accent/15 transition-all group"
          >
            <div className="font-syne font-extrabold text-5xl bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent mb-4">
              <Counter value={stat.target} suffix={stat.value.replace(/[0-9.]/g, '')} />
            </div>
            <div className="text-[10px] uppercase tracking-[0.1em] text-text-dim">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
