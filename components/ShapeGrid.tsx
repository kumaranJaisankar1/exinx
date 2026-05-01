'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function ShapeGrid({ 
  rows = 18, 
  cols = 32, 
  className 
}: { 
  rows?: number; 
  cols?: number; 
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn("mask-radial-gradient", className)}>
      <div 
        className="grid w-full h-full opacity-[0.15]"
        style={{ 
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
        }}
      >
        {Array.from({ length: rows * cols }).map((_, i) => (
          <div key={i} className="flex items-center justify-center border-[0.1px] border-white/[0.03] relative">
            {/* Small technical dots with breathing effect */}
            {i % 4 === 0 && (
              <motion.div 
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 4, delay: (i % 10) * 0.4, repeat: Infinity }}
                className="w-[1px] h-[1px] bg-white rounded-full" 
              />
            )}
            
            {/* Focal Point Accents (Sparse) */}
            {i % 89 === 0 && (
              <motion.div
                animate={{
                  opacity: [0.05, 0.2, 0.05],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-[1px] h-[1px] bg-teal-400 rounded-full blur-[0.5px]" />
              </motion.div>
            )}

            {/* Subtle lines or pulses */}
            {i % 100 === 0 && (
              <motion.div
                animate={{
                  opacity: [0, 0.1, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-white"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
