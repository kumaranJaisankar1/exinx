"use client";

import { motion } from "framer-motion";
import { Book, FileText, Database, Search } from "lucide-react";

export default function KnowledgeArchives() {
  return (
    <section className="py-48 relative font-barlow">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Book, label: "Digital Library", val: "400K+ Titles" },
                  { icon: FileText, label: "Smart Docs", val: "Cloud Security" },
                  { icon: Database, label: "Neural Archives", val: "AI-Indexed" },
                  { icon: Search, label: "Semantic Search", val: "0ms Latency" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 bg-white/[0.02] border border-white/5 rounded-[2px] text-center hover:border-white/20 transition-all"
                  >
                    <item.icon className="text-white/40 mx-auto mb-6" size={32} />
                    <div className="text-2xl font-medium text-white mb-2 tracking-tight">{item.val}</div>
                    <div className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.3em] font-medium">{item.label}</div>
                  </motion.div>
                ))}
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-orange-400 tracking-[0.4em] uppercase text-xs mb-6 block font-medium"
            >
              The Knowledge Base
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tighter leading-none">
              Collective <br />
              <span className="font-instrument-serif italic opacity-30">Memory.</span>
            </h2>
            <p className="text-xl text-white/60 leading-relaxed max-w-xl mb-12 font-light">
              Every book, document, and research paper in your institution is 
              ingested into the Orbis Knowledge Graph. Our semantic search allows 
              students and staff to find exactly what they need across millions of 
              records in milliseconds.
            </p>
            <button className="px-8 py-4 bg-white/5 border border-white/20 rounded-[2px] text-white/80 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Explore the Archive
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
