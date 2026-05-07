"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TransformativeSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function TransformativeSection({ children, className }: TransformativeSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [10, 0, 0, -10]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        scale,
        y,
        rotateX,
        perspective: "1000px",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
