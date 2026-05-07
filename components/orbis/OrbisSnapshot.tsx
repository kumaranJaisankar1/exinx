"use client";

import { motion } from "framer-motion";

const features = [
  "Admissions and enquiry management",
  "Academic year configuration",
  "Flexible fee structures and collection",
  "Payment gateway integrations",
  "Notifications through SMS and email",
  "Timetable and attendance management",
  "Exam creation and result processing",
  "Transportation management with GPS tracking",
  "Parent portal and mobile application",
  "Reports and analytics",
  "Asset and inventory tracking",
  "Library and document management"
];

export default function OrbisSnapshot() {
  return (
    <section className="py-24 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0E76BD]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-[#0E76BD] mb-8 block">Feature Snapshot</span>
            <h2 className="mb-16 flex flex-col items-start gap-2">
              <span className="hero-title-thin text-3xl md:text-4xl text-white/60">Comprehensive</span>
              <span className="hero-title-bold text-4xl md:text-6xl text-white">Feature Set</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0E76BD] group-hover:scale-150 transition-transform" />
                  <span className="text-sm md:text-base text-white/70 group-hover:text-white transition-colors font-light">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
