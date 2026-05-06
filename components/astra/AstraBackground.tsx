"use client";

import { motion } from "framer-motion";

export default function AstraBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-black overflow-hidden pointer-events-none">
      {/* Base Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(240, 112, 80, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(240, 112, 80, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)',
        }}
      />

      {/* Floating Data Nodes (Light Orbs) */}
      <motion.div
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 50, 100, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#f07050]/5 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{
          x: [0, -150, 0, 150, 0],
          y: [0, 100, 50, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-[#f07050]/5 blur-[150px] rounded-full"
      />

      {/* Vertical Data Streams (Scanning Lines) */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-[20%] w-[1px] h-[50vh] bg-gradient-to-b from-transparent via-[#f07050] to-transparent"
        />
        <motion.div 
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute left-[50%] w-[1px] h-[70vh] bg-gradient-to-b from-transparent via-[#f07050] to-transparent"
        />
        <motion.div 
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute left-[80%] w-[1px] h-[40vh] bg-gradient-to-b from-transparent via-[#f07050] to-transparent"
        />
      </div>
      
      {/* Subtle Noise Overlay for Texture */}
      <div className="noise-overlay opacity-[0.03]" />
    </div>
  );
}
