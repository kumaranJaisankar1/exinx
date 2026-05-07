"use client";

import { motion } from "framer-motion";
import { ToggleRight } from "lucide-react";

export default function OrbisFlexibility() {
  return (
    <section className="py-24 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#0E76BD]/5 dark:bg-[#0E76BD]/10 rounded-[4rem] p-12 md:p-24 border border-[#0E76BD]/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,_#0E76BD0a_0%,_transparent_70%)]" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <span className="section-label !text-[#0E76BD] !border-[#0E76BD]/20 mb-8 inline-block">Platform Flexibility</span>
              <h2 className="mb-8 flex flex-col items-start gap-2">
                <span className="hero-title-thin text-3xl md:text-4xl text-foreground">Flexible and</span>
                <span className="hero-title-bold text-4xl md:text-6xl text-[#0E76BD]">Configurable</span>
              </h2>
              <p className="text-xl text-foreground/70 dark:text-white/60 leading-relaxed font-light">
                Orbis allows institutions to enable or disable modules based on their needs. The platform can be configured at school or branch level, ensuring a clean and relevant interface for every user.
              </p>
              <p className="text-xl text-foreground/70 dark:text-white/60 leading-relaxed font-light mt-6">
                This flexibility ensures that institutions can scale and adapt the system as they grow.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-48 h-48 rounded-full bg-white dark:bg-slate-900 shadow-2xl flex items-center justify-center border border-[#0E76BD]/20"
              >
                <ToggleRight className="w-24 h-24 text-[#0E76BD] opacity-80" strokeWidth={1} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
