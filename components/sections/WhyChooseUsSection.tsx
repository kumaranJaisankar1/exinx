"use client";
import { motion } from "motion/react";
import { PremiumCard } from "@/components/ui/PremiumCard";

export function WhyChooseUsSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why EXINX</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            We don't just write code. We architect scalable, secure, and highly optimized AI-driven ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Large Span Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <PremiumCard className="h-[400px] p-10 flex flex-col justify-end bg-[url('/grid-bg.svg')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">AI-First Architecture</h3>
                <p className="text-secondary max-w-md">
                  Every product we build is designed with AI at its core, enabling seamless integration of machine learning models and intelligent workflows from day one.
                </p>
              </div>
            </PremiumCard>
          </motion.div>

          {/* Regular Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <PremiumCard className="h-[400px] p-8 flex flex-col justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-6 text-purple-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-secondary text-sm">
                Bank-grade security protocols and compliant infrastructure to protect your data and intellectual property.
              </p>
            </PremiumCard>
          </motion.div>

          {/* Regular Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
             <PremiumCard className="h-[300px] p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-4">Performance Optimized</h3>
              <p className="text-secondary text-sm">
                Lighthouse-optimized applications that load instantly and perform smoothly even under heavy loads.
              </p>
            </PremiumCard>
          </motion.div>

          {/* Large Span Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2"
          >
            <PremiumCard className="h-[300px] p-10 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute right-[-10%] top-[-20%] w-96 h-96 bg-accent/20 blur-[100px] rounded-full group-hover:bg-accent/30 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">Business-Oriented Development</h3>
                <p className="text-secondary max-w-md">
                  We focus on metrics that matter. Conversion rates, user retention, and automation efficiency drive our engineering decisions.
                </p>
              </div>
            </PremiumCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
