"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl p-12 md:p-20 text-center shadow-2xl shadow-accent/10"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Build Your Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Intelligent Product</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10">
            Let's engineer the future together. Partner with EXINX to transform your ideas into scalable, AI-driven reality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
