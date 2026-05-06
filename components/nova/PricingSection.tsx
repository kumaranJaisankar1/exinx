"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-syne mb-6"
          >
            Simple <span className="text-orange-400">Premium Pricing.</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience Nova with a risk-free trial. Full access to the adaptive 
            intelligence core and all cognitive modules.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-[40px] bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden group"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/20 blur-[80px] rounded-full group-hover:bg-orange-500/30 transition-colors" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-10">
                <div>
                   <h3 className="text-2xl font-bold text-white mb-2">Nova Access</h3>
                   <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-mono tracking-widest uppercase">7-Day Free Trial</span>
                </div>
                <Sparkles className="text-orange-400" />
              </div>

              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-6xl font-bold text-white font-syne">₹999</span>
                <span className="text-gray-500 text-xl">/month</span>
              </div>

              <ul className="space-y-6 mb-12">
                {[
                  "Personalized Intelligence Core",
                  "All Curriculum Support",
                  "24/7 AI Study Companion",
                  "Deep Cognitive Analytics",
                  "Unlimited Growth Tracking",
                  "Cross-Device Synchronization"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                       <Check size={12} className="text-orange-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-5 bg-orange-500 hover:bg-orange-600 text-black font-bold text-lg rounded-2xl transition-all shadow-[0_0_40px_rgba(249,115,22,0.2)] hover:shadow-[0_0_60px_rgba(249,115,22,0.4)] hover:scale-[1.02]">
                Start Learning Free
              </button>
              
              <p className="mt-6 text-center text-sm text-gray-500 font-medium">
                No credit card required for trial. Cancel anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
