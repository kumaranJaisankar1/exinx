"use client";

import { motion } from "framer-motion";

export default function OrbisIntro() {
  return (
    <section className="py-24 bg-background overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="section-label !text-[#0E76BD] !border-[#0E76BD]/20">Introduction</span>
              <h2 className="mt-6 flex flex-col items-start gap-1">
                <span className="hero-title-thin text-2xl md:text-3xl text-foreground">What is</span>
                <span className="hero-title-bold text-4xl md:text-6xl text-[#0E76BD]">Orbis?</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Orbis is a comprehensive institutional management platform designed to streamline every aspect of school and college operations. It replaces fragmented processes with a single, structured system that improves efficiency, transparency, and control.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Built on a scalable cloud architecture, Orbis eliminates maintenance overhead while delivering a clean and intuitive experience for administrators, educators, and parents.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] bg-[#0E76BD]/5 border border-[#0E76BD]/10 flex items-center justify-center p-12 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0E76BD]/10 via-transparent to-transparent rounded-[3rem]" />
              
              {/* Orbis Visual Image with Floating Effect */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <img 
                  src="/orbis-intro.png" 
                  alt="Orbis Management" 
                  className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(14,118,189,0.3)] scale-[1.3]"
                />
              </motion.div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-6 py-3 bg-white dark:bg-slate-900 shadow-xl rounded-2xl border border-[#0E76BD]/20"
            >
              <span className="text-[10px] font-mono tracking-widest text-[#0E76BD] font-bold uppercase">Cloud Architecture</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
