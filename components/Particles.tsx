'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Particles({ quantity = 100, className }: { quantity?: number, className?: string }) {
  const [particles, setParticles] = useState<{ id: number, x: number, y: number, size: number, duration: number, delay: number }[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newParticles = Array.from({ length: quantity }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 15 + 15,
        delay: Math.random() * 10,
      }));
      setParticles(newParticles);
    }, 0);
    return () => clearTimeout(timer);
  }, [quantity]);

  return (
    <div className={className}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -100],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}
    </div>
  );
}
