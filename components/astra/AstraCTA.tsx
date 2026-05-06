"use client";

import { motion } from "framer-motion";

export default function AstraCTA() {
  return (
    <section className="py-48 relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f07050]/10 blur-[180px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-bold text-white mb-12 tracking-tighter"
          >
            Start Preparing <br />
            <span className="font-instrument-serif italic font-normal text-[#f07050]">the Right Way.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 max-w-2xl mx-auto mb-16 font-light leading-relaxed"
          >
            Whether you're an institution managing preparation or a student aiming high, 
            Astra provides the infrastructure to win.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <button className="px-12 py-5 bg-[#f07050] text-black font-bold text-sm rounded-[2px] hover:scale-105 transition-all shadow-[0_0_30px_rgba(240,112,80,0.2)]">
              Explore Institutions
            </button>
            <button className="px-12 py-5 border border-white/20 text-white font-bold text-sm rounded-[2px] hover:bg-white/5 transition-all">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
