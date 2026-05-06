"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] group flex h-14 w-14 items-center justify-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden"
          aria-label="Scroll to top"
        >
          {/* Subtle glow effect behind the icon */}
          <div className="absolute inset-0 rounded-full bg-[var(--accent)]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <svg
            className="w-5 h-5 text-white/80 group-hover:text-[var(--accent)] group-hover:-translate-y-1 transition-all duration-300 relative z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
