"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-48 relative overflow-hidden">
      {/* Background Cinematic Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 inline-block"
        >
          {/* Glowing AI Orb Visualization */}
          <div className="relative w-32 h-32 mx-auto">
            <motion.div 
              className="absolute inset-0 bg-orange-500/40 rounded-full blur-2xl"
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="relative w-32 h-32 bg-black border border-orange-500/30 rounded-full flex items-center justify-center overflow-hidden">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-tr from-orange-400 to-yellow-400 rounded-full blur-sm"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity }
                }}
              />
            </div>
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold font-syne mb-10 leading-tight"
        >
          Start Learning <br />
          <span className="text-orange-400">Smarter With Nova.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Experience adaptive AI learning designed around how you think. 
          Join the future of education today.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="px-12 py-5 bg-orange-500 hover:bg-orange-600 text-black font-bold text-xl rounded-2xl transition-all shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.5)] hover:scale-105 flex items-center gap-3 group">
            Start Learning Free
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
          <button className="px-12 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xl rounded-2xl transition-all backdrop-blur-md">
            Explore Nova
          </button>
        </motion.div>
      </div>

      {/* Footer-like Branding */}
      <div className="mt-48 text-center border-t border-white/5 pt-12">
         <p className="text-gray-600 font-mono text-sm tracking-[0.4em] uppercase">
           Nova Adaptive Learning Engine • Built by EXINX
         </p>
      </div>
    </section>
  );
};

export default FinalCTA;
