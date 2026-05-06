"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function FlowState() {
  return (
    <section className="py-48 relative bg-white/[0.01] font-barlow overflow-hidden">
      {/* Background Prism Leak */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-orange-500/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-orange-400 tracking-[0.4em] uppercase text-xs mb-6 block font-medium"
          >
            Operational Synchronicity
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tighter">
            Flow <span className="font-instrument-serif italic opacity-30">State.</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
            Orbis eliminates the chaos of scheduling. Our AI-driven timetable engine 
            optimizes room allocation, teacher availability, and student attendance 
            in real-time, creating a friction-less campus experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Clock, title: "Smart Scheduling", desc: "AI-optimized timetables that prevent conflicts before they happen." },
            { icon: CheckCircle, title: "Auto-Attendance", desc: "Biometric and Geofenced check-ins for real-time presence data." },
            { icon: Calendar, title: "Event Sync", desc: "Institutional calendars that stay synchronized across every device." },
            { icon: MapPin, title: "Asset Tracking", desc: "Real-time location intelligence for every institutional resource." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/[0.02] border border-white/5 rounded-[2px] hover:bg-white/[0.05] transition-all group"
            >
              <div className="w-12 h-12 rounded-[2px] bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-purple-500/50 transition-all">
                <item.icon className="text-white/60 group-hover:text-purple-400 transition-colors" size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-4 tracking-wide">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Dynamic Timeline Visual - Sharp Style */}
        <div className="mt-32 relative h-[400px] border border-white/5 rounded-[2px] overflow-hidden bg-black/40 backdrop-blur-md p-12">
           <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5" />
           <div className="relative z-10 grid grid-cols-12 gap-4 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-full flex flex-col justify-end gap-2">
                   <motion.div 
                     initial={{ height: 0 }}
                     whileInView={{ height: `${Math.random() * 80 + 20}%` }}
                     transition={{ duration: 2, delay: i * 0.1 }}
                     className="w-full bg-white/10 rounded-t-[1px]"
                   />
                   <div className="text-[10px] font-mono text-white/20 text-center uppercase tracking-widest">{i+8}AM</div>
                </div>
              ))}
           </div>
           <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5" />
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="px-6 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-[2px] shadow-2xl">
                 FLOW: OPTIMIZED
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
