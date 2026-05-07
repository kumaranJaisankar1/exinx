"use client";

import { motion } from "framer-motion";
import { Book, Package, BarChart3, FileText, Puzzle } from "lucide-react";

const capabilities = [
  { icon: <Book className="w-5 h-5" />, label: "Library Management" },
  { icon: <Package className="w-5 h-5" />, label: "Inventory Management" },
  { icon: <BarChart3 className="w-5 h-5" />, label: "Expense Management" },
  { icon: <FileText className="w-5 h-5" />, label: "Document Management" },
];

export default function OrbisExtended() {
  return (
    <section className="py-24 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label !text-[#0E76BD] !border-[#0E76BD]/20">Extended Capabilities</span>
            <h2 className="mt-6 flex flex-col items-start gap-2 mb-8">
              <span className="hero-title-thin text-3xl md:text-4xl text-foreground">Additional Modules and</span>
              <span className="hero-title-bold text-4xl md:text-6xl text-[#0E76BD]">Integrations</span>
            </h2>
            <p className="text-xl text-foreground/70 dark:text-white/60 leading-relaxed font-light mb-10">
              Orbis extends beyond core operations with additional modules that enhance institutional management and supports integration with third party systems such as payroll, accounting, and external tools.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 dark:bg-white/[0.03] border border-border shadow-sm transition-colors">
                  <div className="text-[#0E76BD]">{item.icon}</div>
                  <span className="text-sm font-bold text-foreground/80">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-1 rounded-[1.5rem] bg-[#3d2b1f] shadow-2xl relative"
          >
            {/* Wooden Frame Wrapper */}
            <div className="relative p-4 rounded-[1.2rem] bg-[#1a2e21] border-[12px] border-[#4a3526] shadow-inner min-h-[400px] flex flex-col justify-center overflow-hidden">
              {/* Chalk Dust Texture Overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, white 1%, transparent 10%)', backgroundSize: '100px 100px' }} />
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-repeat"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />

              <div className="relative z-10 p-8">
                <div className="w-12 h-1 h-px bg-white/20 mb-8" />
                <h3 className="text-3xl md:text-4xl font-serif text-white/90 mb-6 tracking-tight drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)]">
                  Seamless Integration
                </h3>
                <p className="text-white/80 leading-relaxed font-serif text-lg italic opacity-90">
                  "The platform ensures flexibility for institutions with existing workflows by connecting with your favorite payroll, accounting, and communication tools."
                </p>
                <div className="mt-12 flex justify-end">
                  <div className="w-12 h-4 bg-white/10 rounded-sm rotate-12 blur-[1px] transform translate-x-4 translate-y-4" title="Chalk piece" />
                </div>
              </div>

              {/* Erase streaks */}
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/[0.02] blur-3xl rounded-full pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
