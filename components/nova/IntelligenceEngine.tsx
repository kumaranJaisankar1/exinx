"use client";

import { motion } from "framer-motion";
import { Network, Search, Layers, Gauge, RefreshCcw } from "lucide-react";

const adjustmentItems = [
  { label: "Complexity", icon: Layers, color: "text-blue-400" },
  { label: "Examples", icon: Search, color: "text-purple-400" },
  { label: "Explaining Style", icon: Network, color: "text-orange-400" },
  { label: "Learning Speed", icon: Gauge, color: "text-green-400" },
  { label: "Revision Frequency", icon: RefreshCcw, color: "text-cyan-400" }
];

const IntelligenceEngine = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Sci-Fi Grid Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold font-syne mb-8 leading-tight">
                The More You Learn, <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  The Smarter Nova Becomes.
                </span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-xl">
                Nova adjusts its entire teaching architecture in real-time. 
                It's not just a database; it's a living intelligence that adapts to your growth.
              </p>
            </motion.div>

            <div className="space-y-4">
              {adjustmentItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all group"
                >
                  <div className={`p-3 rounded-xl bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon size={20} />
                  </div>
                  <span className="text-lg font-medium text-white">{item.label}</span>
                  <div className="ml-auto flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <motion.div 
                        key={j}
                        className={`h-1 w-8 rounded-full ${j <= i + 1 ? 'bg-current opacity-60' : 'bg-white/10'}`}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: j * 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Neural System Animation */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Rotating Layers */}
            <motion.div 
              className="absolute w-[400px] h-[400px] border border-blue-500/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute w-[300px] h-[300px] border border-purple-500/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute w-[200px] h-[200px] border border-orange-500/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Central Intelligence Visualization */}
            <div className="relative z-10 w-48 h-48 bg-black border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-orange-500/10" />
               <motion.div 
                 className="relative z-10 flex flex-col items-center"
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity }}
               >
                 <span className="font-mono text-xs text-blue-400 mb-2 tracking-[0.3em]">PROCESSING</span>
                 <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-4" />
                 <span className="text-3xl font-bold font-syne text-white">NOVA-9</span>
               </motion.div>

               {/* Data stream lines */}
               {[...Array(8)].map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                   style={{ 
                     top: `${10 + i * 12}%`,
                     left: i % 2 === 0 ? '-100%' : '100%'
                   }}
                   animate={{ 
                     left: i % 2 === 0 ? ['-100%', '200%'] : ['200%', '-100%']
                   }}
                   transition={{ 
                     duration: 3 + i, 
                     repeat: Infinity, 
                     ease: "linear",
                     delay: i * 0.5 
                   }}
                 />
               ))}
            </div>

            {/* Glowing indicators around */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-blue-400 blur-sm"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 90}deg) translateY(-250px)`
                }}
                animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceEngine;
