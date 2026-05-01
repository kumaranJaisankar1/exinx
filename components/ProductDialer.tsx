'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export type Product = 'Orbis' | 'Nova' | 'Astra';

interface ProductDialerProps {
  onProductChange: (product: Product) => void;
  className?: string;
}

const products: Product[] = ['Orbis', 'Nova', 'Astra'];

export default function ProductDialer({ onProductChange, className }: ProductDialerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % products.length;
      setIndex(nextIndex);
      onProductChange(products[nextIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, [index, onProductChange]);

  const currentProduct = products[index];

  return (
    <div className={cn("inline-flex flex-col h-[1.1em] overflow-hidden align-top", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentProduct}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className={cn(
            "inline-block whitespace-nowrap",
            currentProduct === 'Nova' && "text-teal-400",
            currentProduct === 'Astra' && "text-amber-400",
            currentProduct === 'Orbis' && "text-slate-300"
          )}
        >
          {currentProduct}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
