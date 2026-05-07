"use client";

import { motion } from "framer-motion";

const curriculums = [
  "CBSE", "ICSE", "SSC", "NCERT", "Undergraduate Programs"
];

const CurriculumSection = () => {
  return (
    <section id="curriculum-section" className="py-24 bg-secondary/30 border-t border-border overflow-hidden">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
          <div className="max-w-md">
            <span className="section-label">Curriculum Support</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif mb-6 text-foreground"
            >
              Mapping Concepts to <br />
              <span className="italic text-primary font-instrument-serif">Any Syllabus</span>
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-3 max-w-xl">
            {curriculums.map((cur, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="badge-metric px-6 py-3 text-sm bg-background/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all cursor-default"
              >
                {cur}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subtle Horizontal Scroll Text */}
        <div className="mt-20 relative opacity-5 select-none">
          <div className="flex gap-12 animate-marquee-slow whitespace-nowrap">
             {[...Array(10)].map((_, i) => (
               <span key={i} className="text-4xl font-syne font-black tracking-widest text-foreground uppercase">
                 SYLLABUS SYNC • CONCEPT MAPPING • ADAPTIVE NODES • 
               </span>
             ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee 60s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default CurriculumSection;
