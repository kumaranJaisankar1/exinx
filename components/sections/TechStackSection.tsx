"use client";
import { motion } from "motion/react";

export function TechStackSection() {
  const techLogos = [
    { name: "Next.js", icon: "N" },
    { name: "React", icon: "R" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind", icon: "TW" },
    { name: "Framer", icon: "FM" },
    { name: "Three.js", icon: "3D" },
    { name: "Python", icon: "PY" },
    { name: "TensorFlow", icon: "TF" },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Modern Tech Ecosystem</h2>
          <p className="text-lg text-secondary">
            Built with the latest tools for maximum performance and scalability.
          </p>
        </div>

        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center max-w-4xl mx-auto">
          {/* Central Core */}
          <div className="absolute z-20 w-24 h-24 rounded-full bg-black border border-accent flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.6)]">
            <span className="font-bold text-xl text-white tracking-widest">EXINX</span>
          </div>

          {/* Orbits */}
          <div className="absolute z-10 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-white/10" />
          <div className="absolute z-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-white/5" />

          {/* Orbiting Tech Nodes */}
          {techLogos.map((tech, index) => {
            const isInner = index % 2 === 0;
            const radius = isInner ? (typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 150) : (typeof window !== 'undefined' && window.innerWidth < 768 ? 150 : 250);
            const duration = isInner ? 20 : 30;
            const delay = (index * duration) / techLogos.length;

            return (
              <motion.div
                key={index}
                className="absolute z-30"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration, ease: "linear", delay: -delay }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-xs font-bold text-secondary"
                  style={{ transform: `translateY(-${radius}px)` }}
                  animate={{ rotate: -360 }} // Counter-rotate so text stays upright
                  transition={{ repeat: Infinity, duration, ease: "linear", delay: -delay }}
                >
                  {tech.icon}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
