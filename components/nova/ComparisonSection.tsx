"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-syne mb-6 leading-tight"
          >
            Learning Should Adapt To The Student <br />
            <span className="text-gray-500">— Not The Other Way Around.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Traditional Learning */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-[40px] bg-white/[0.02] border border-white/5 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <X size={120} strokeWidth={1} />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-500 mb-10 font-syne uppercase tracking-tighter">TRADITIONAL</h3>
            
            <div className="space-y-8 relative z-10">
              {[
                { title: "Generic Explanations", desc: "One-size-fits-all content regardless of background." },
                { title: "Passive Learning", desc: "Watching videos without active concept validation." },
                { title: "No Adaptation", desc: "The pace stays the same even if you're struggling." },
                { title: "Teacher Dependency", desc: "Constant need for human intervention to clarify basic concepts." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start opacity-60">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <X size={12} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Nova Learning */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-[40px] bg-gradient-to-br from-orange-500/10 to-yellow-500/5 border border-orange-500/20 overflow-hidden group shadow-[0_0_80px_rgba(249,115,22,0.05)]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
               <Check size={120} strokeWidth={1} className="text-orange-400" />
            </div>
            
            <h3 className="text-3xl font-bold text-orange-400 mb-10 font-syne uppercase tracking-tighter">NOVA</h3>
            
            <div className="space-y-8 relative z-10">
              {[
                { title: "Adaptive Learning", desc: "Content that morphs based on your cognitive profile." },
                { title: "Independent Mastery", desc: "Master complex subjects without external help." },
                { title: "Personalized Explanations", desc: "Concept-first teaching using relatable analogies." },
                { title: "Continuous Improvement", desc: "System grows smarter the more you interact." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={12} className="text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.button 
              className="mt-12 flex items-center gap-3 text-orange-400 font-bold group/btn"
              whileHover={{ x: 10 }}
            >
              Experience the difference <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
