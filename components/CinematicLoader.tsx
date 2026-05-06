"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function CinematicLoader() {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Reset state on path change if we want it to run every time
    setStep(0);
    setIsVisible(true);
    
    // Phase 1: AI Initialization (0s - 1.2s)
    const t1 = setTimeout(() => setStep(1), 1200);
    
    // Phase 2: EXINX Formation (1.2s - 2.5s)
    const t2 = setTimeout(() => setStep(2), 2500);
    
    // Phase 3 & 4: Stabilization and Morph (2.5s - 3.2s -> 4.0s)
    // At 3.2s, the background starts fading out and logo moves.
    const t3 = setTimeout(() => setStep(3), 3200);
    
    // End of 4 seconds: unmount completely
    const t4 = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader-container"
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
        >
          {/* Phase 4: Fade out the dark background at step 3 */}
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: step >= 3 ? 0 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#050508] flex items-center justify-center overflow-hidden pointer-events-auto"
          >
            {/* Background Particles/Fog - Only visible until step 3 */}
            <motion.div 
               initial={{ opacity: 0, scale: 1.1 }}
               animate={{ opacity: step >= 1 ? 0.6 : 0, scale: 1 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(240,160,48,0.15)_0%,transparent_60%)]"
            />
            
            {/* Subtle neural lines / grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 1 ? 0.3 : 0 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]"
            />
          </motion.div>

          {/* Central EXINX Text Formation & Morph */}
          <motion.div
            className="absolute z-10 flex items-center justify-center"
            initial={{ 
              top: "50%", 
              left: "50%", 
              x: "-50%", 
              y: "-50%",
              scale: 0.8,
              opacity: 0,
              filter: "blur(10px)",
              letterSpacing: "0.1em"
            }}
            animate={
              step === 1 ? {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                letterSpacing: "0.3em",
                transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] }
              } : step === 2 ? {
                scale: 1.05, // stabilization pulse
                opacity: 1,
                filter: "blur(0px)",
                letterSpacing: "0.3em",
                transition: { duration: 0.7, ease: "easeInOut" }
              } : step >= 3 ? {
                // Morph to navbar position (top left)
                top: "40px",
                left: "40px",
                x: "0%",
                y: "0%",
                scale: 0.3,
                opacity: 0, // fade out completely as real logo takes over
                filter: "blur(4px)",
                letterSpacing: "0em",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } // swift cinematic ease
              } : {}
            }
          >
            <div className="font-syne font-extrabold text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] flex">
              E X I N X
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
