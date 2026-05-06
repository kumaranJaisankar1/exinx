"use client";
import { useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const stats = [
  { value: 50, suffix: "+", label: "AI Solutions Delivered" },
  { value: 99, suffix: "%", label: "Automation Efficiency" },
  { value: 200, suffix: "+", label: "Product Deployments" },
  { value: 10, suffix: "M+", label: "User Reach" },
];

function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2s
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-secondary">{label}</div>
    </div>
  );
}

export function TrustedBySection() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-secondary uppercase">
            Trusted by Innovative Teams Worldwide
          </p>
        </div>

        {/* Marquee Placeholder (Since we don't have real logos, we use styled text) */}
        <div className="flex overflow-hidden relative mb-20 w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            className="flex flex-none gap-16 md:gap-24 pr-16 md:pr-24"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 md:gap-24 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
                <span className="text-2xl font-bold text-white">Acme Corp</span>
                <span className="text-2xl font-bold text-white">Quantum</span>
                <span className="text-2xl font-bold text-white">NexGen</span>
                <span className="text-2xl font-bold text-white">Horizon</span>
                <span className="text-2xl font-bold text-white">Stellar</span>
                <span className="text-2xl font-bold text-white">Aether</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <AnimatedCounter key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
