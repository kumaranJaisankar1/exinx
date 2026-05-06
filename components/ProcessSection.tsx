"use client";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const processes = [
  { step: "01", title: "Discovery & Strategy", desc: "We analyze your business needs and identify high-impact AI opportunities." },
  { step: "02", title: "Architecture Design", desc: "Designing scalable, cloud-native infrastructure tailored to your workflow." },
  { step: "03", title: "Intelligent Development", desc: "Iterative building with embedded machine learning capabilities." },
  { step: "04", title: "Testing & Optimization", desc: "Rigorous quality assurance and performance tuning." },
  { step: "05", title: "Deployment & Scaling", desc: "Seamless rollout with continuous monitoring and scaling support." },
];

export default function ProcessSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Build</h2>
          <p className="text-lg text-secondary">
            A battle-tested methodology for delivering intelligent systems.
          </p>
        </div>

        <div className="space-y-8">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 group"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent font-bold group-hover:bg-accent group-hover:text-white transition-colors">
                  {process.step}
                </div>
                {index !== processes.length - 1 && (
                  <div className="w-px h-full bg-white/10 mt-4 group-hover:bg-accent/50 transition-colors" />
                )}
              </div>
              <div className="pb-12 pt-2">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  {process.title}
                  <CheckCircle2 className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-secondary">{process.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
