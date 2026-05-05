'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export type Product = 'X' | 'Orbis' | 'Nova' | 'Astra';

interface ProductDialerProps {
  onProductChange: (product: Product) => void;
  className?: string;
}

const products: Product[] = ['X', 'Orbis', 'Nova', 'Astra'];

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
    <div className={cn("inline-flex flex-col h-[1.3em] overflow-hidden align-top pb-1", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentProduct}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className={cn(
            "inline-block whitespace-nowrap bg-clip-text text-transparent drop-shadow-sm",
            currentProduct === 'X' && "bg-gradient-to-r from-accent via-accent-secondary to-nova",
            currentProduct === 'Nova' && "bg-gradient-to-r from-accent via-accent-secondary to-nova",
            currentProduct === 'Astra' && "bg-gradient-to-br from-accent via-accent-secondary to-nova",
            currentProduct === 'Orbis' && "bg-gradient-to-tr from-accent via-accent-secondary to-nova"
          )}
        >
          {currentProduct}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
