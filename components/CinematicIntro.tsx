"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Step 0: Initial EXINX (1.5s)
    const t1 = setTimeout(() => setStep(1), 1500);
    // Step 1: Extended Intelligence (2s)
    const t2 = setTimeout(() => setStep(2), 3500);
    // Step 2: X = Nova, Orbis, Astra (2s)
    const t3 = setTimeout(() => setStep(3), 5500);
    // Step 3: Fade out entire loader (1s)
    const t4 = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000);
    }, 7500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative text-center px-6">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, scale: 0.8, letterSpacing: "0.2em" }}
                  animate={{ opacity: 1, scale: 1, letterSpacing: "0.5em" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="text-6xl md:text-8xl font-bold text-white tracking-widest"
                >
                  EXINX
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                    EXTENDED INTELLIGENCE
                  </div>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    className="h-px bg-gradient-to-r from-transparent via-accent to-transparent w-full"
                  />
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col items-center space-y-8"
                >
                  <div className="text-xl md:text-2xl text-secondary font-light tracking-[0.3em]">
                    THE X-FACTOR
                  </div>
                  <div className="flex flex-wrap justify-center gap-4 md:gap-12">
                    {["NOVA", "ORBIS", "ASTRA"].map((product, i) => (
                      <motion.div
                        key={product}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 + 0.3 }}
                        className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"
                      >
                        {product}
                      </motion.div>
                    ))}
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 1.2 }}
                    className="text-accent font-mono text-sm tracking-widest"
                  >
                    PURE EDUTECH ENGINEERING
                  </motion.p>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-white text-xl md:text-2xl font-light tracking-[0.2em]"
                >
                  PREPARING YOUR EXPERIENCE...
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
