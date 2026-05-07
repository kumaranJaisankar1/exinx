"use client";

import { motion } from "framer-motion";

export default function IyotaPrepCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-white transition-colors duration-500">
      {/* Central red glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,0,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Red grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FF0000 1px, transparent 1px),
            linear-gradient(to bottom, #FF0000 1px, transparent 1px)
          `,
          backgroundSize: '6rem 6rem',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 10%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 10%, transparent 80%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div
          className="p-16 md:p-24 relative overflow-hidden rounded-[2px] text-center"
          style={{
            background: 'rgba(var(--foreground-rgb, 255, 255, 255), 0.02)',
            border: '1px solid rgba(255,0,0,0.2)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20"
            style={{ background: 'linear-gradient(135deg, rgba(255,0,0,0.15), transparent)' }} />
          <div className="absolute bottom-0 right-0 w-20 h-20"
            style={{ background: 'linear-gradient(315deg, rgba(255,0,0,0.15), transparent)' }} />

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold text-foreground mb-10 tracking-tighter leading-tight"
          >
            Start Preparing <br />
            <span
              className="font-instrument-serif italic font-normal"
              style={{
                color: '#FF0000',
                textShadow: 'none',
              }}
            >
              the Right Way.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto mb-14 font-light leading-relaxed"
          >
            Whether you're an institution managing preparation or a student aiming high,
            IyotaPrep provides the infrastructure to win.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <button
              className="px-12 py-5 text-white font-bold text-sm rounded-[2px] tracking-widest uppercase transition-all hover:-translate-y-1 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #FF0000 0%, #cc0000 100%)',
                boxShadow: '0 0 40px rgba(255,0,0,0.3), 0 0 80px rgba(255,0,0,0.1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 60px rgba(255,0,0,0.5), 0 0 120px rgba(255,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 40px rgba(255,0,0,0.3), 0 0 80px rgba(255,0,0,0.1)';
              }}
            >
              Explore Institutions
            </button>
            <button
              className="px-12 py-5 text-black dark:text-white font-bold text-sm rounded-[2px] tracking-widest uppercase transition-all hover:-translate-y-1 hover:bg-foreground/[0.06]"
              style={{
                border: '1px solid rgba(var(--foreground-rgb, 255, 255, 255), 0.2)',
                background: 'rgba(var(--foreground-rgb, 255, 255, 255), 0.02)',
                backdropFilter: 'blur(12px)',
              }}
            >
              Get Started Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
