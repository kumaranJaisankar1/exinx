"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function IyotaPrepBackground() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <div className="fixed inset-0 z-[-1] bg-white overflow-hidden pointer-events-none transition-colors duration-500">
      {/* Base Grid Layer */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: isDark ? 0.12 : 0.05,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 0, 0, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 0, 0, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)',
        }}
      />

      {/* Deep Red Atmospheric Orbs */}
      <motion.div
        animate={{
          x: [0, 120, 0, -120, 0],
          y: [0, 60, 120, 60, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,0,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <motion.div
        animate={{
          x: [0, -180, 0, 180, 0],
          y: [0, 120, 60, -60, 0],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[900px] h-[900px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,0,0.04) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Crimson center glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,0,0,0.03) 0%, transparent 70%)',
        }}
      />

      {/* Vertical Data Streams */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-[20%] w-[1px] h-[50vh]"
          style={{
            background: 'linear-gradient(to bottom, transparent, #FF0000, transparent)',
          }}
        />
        <motion.div
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute left-[50%] w-[1px] h-[70vh]"
          style={{
            background: 'linear-gradient(to bottom, transparent, #FF0000, transparent)',
          }}
        />
        <motion.div
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute left-[80%] w-[1px] h-[40vh]"
          style={{
            background: 'linear-gradient(to bottom, transparent, #FF0000, transparent)',
          }}
        />
      </div>

      {/* Noise Overlay */}
      <div className="noise-overlay opacity-[0.03]" />
    </div>
  );
}
