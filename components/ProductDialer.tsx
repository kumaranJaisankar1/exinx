'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export type Product = 'X' | 'Orbis' | 'Nova' | 'Iyota';

interface ProductDialerProps {
  onProductChange: (product: Product) => void;
  className?: string;
}

const products: Product[] = ['X', 'Nova', 'Orbis', 'Iyota'];

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

  const getProductClass = (product: Product) => {
    switch (product) {
      case 'X': return 'text-gradient-exinx';
      case 'Nova': return 'text-nova-orange';
      case 'Orbis': return 'text-orbis-blue';
      case 'Iyota': return 'text-red-600';
      default: return '';
    }
  };

  return (
    <div className={cn("inline-flex flex-col h-[1.3em] overflow-hidden align-top pb-1 min-w-[200px]", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentProduct}
          initial={{ x: "20%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-20%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn(
            "inline-block whitespace-nowrap",
            getProductClass(currentProduct)
          )}
        >
          {currentProduct}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
