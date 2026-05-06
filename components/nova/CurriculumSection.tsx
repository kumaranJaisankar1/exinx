"use client";

import { motion } from "framer-motion";

const curriculums = [
  "CBSE", "ICSE", "SSC", "NCERT", "Cambridge IGCSE", 
  "IB Diploma", "Undergraduate Programs", "JEE / NEET Prep",
  "O-Levels", "A-Levels", "Skill Modules"
];

const CurriculumSection = () => {
  return (
    <section className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-syne mb-8"
            >
              Curriculum <br />
              <span className="text-orange-400">Neutral.</span>
            </motion.h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              Nova is designed to adapt to any structured syllabus. 
              Whether you're following national boards or global standards, 
              Nova maps concepts to your specific curriculum requirements.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {curriculums.map((cur, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(249,115,22,0.4)" }}
                className="px-8 py-4 bg-white/[0.02] border border-white/10 rounded-2xl text-lg font-medium text-white transition-all cursor-default relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {cur}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marquee Effect for Boards (Optional) */}
        <div className="mt-24 relative">
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
          
          <div className="flex gap-12 animate-marquee-slow whitespace-nowrap opacity-20 hover:opacity-40 transition-opacity duration-1000">
             {[...Array(20)].map((_, i) => (
               <span key={i} className="text-5xl font-syne font-black tracking-widest text-white uppercase">
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
