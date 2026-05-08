"use client";

import { motion } from "framer-motion";

export default function WhyExInX() {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <span className="section-label">Why ExInX</span>
            <h2 className="text-4xl md:text-6xl mb-8 flex flex-col items-start">
              <span className="hero-title-thin">The Dynamic</span>
              <span className="hero-title-bold text-gradient-exinx">Shift</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <p className="text-2xl md:text-3xl text-foreground font-light leading-snug">
              Education systems today are fragmented, reactive, and limited by static design. ExInX replaces this with a dynamic, intelligence first approach.
            </p>

            <div className="grid gap-8">
              {[
                { title: "Institutional Clarity", content: "It enables institutions to operate with clarity and efficiency" },
                { title: "Learner Empowerment", content: "It empowers learners with personalized and evolving learning experiences" },
                { title: "Measurable Growth", content: "It delivers measurable outcomes through continuous optimization" }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-px h-full bg-border group-hover:bg-primary transition-colors duration-700" />
                  <div className="py-4">
                    <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-10 rounded-3xl bg-primary/5 border border-primary/10 mt-12">
              <p className="text-xl md:text-2xl text-foreground font-medium tracking-tight">
                "ExInX is not an upgrade to existing systems. It is a shift toward intelligent education."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
