'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="absolute top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-12 py-8 bg-transparent w-full max-w-[1440px] mx-auto backdrop-blur-[2px]">
      <div className="w-auto lg:w-1/4">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {/* Centered Navigation Options */}
      <div className="hidden lg:flex items-center justify-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400 w-1/2">
        {['Nova', 'Orbis', 'Astra'].map((item) => (
          <Link key={item} href={`/${item.toLowerCase()}`} passHref legacyBehavior>
            <a className="relative group hover:text-slate-900 dark:hover:text-white transition-all duration-300 cursor-pointer">
              {item}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </Link>
        ))}
      </div>
      
      <div className="flex items-center justify-end gap-4 md:gap-6 w-auto lg:w-1/4">
        <ThemeToggle />
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(var(--accent-rgb), 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:block px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-accent dark:hover:bg-accent transition-all border border-slate-800 dark:border-white/10 rounded-full text-[9px] font-black uppercase tracking-[0.2em]"
        >
          Signal Us
        </motion.button>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-800 dark:text-white hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-full left-0 right-0 bg-slate-50/95 dark:bg-black/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 overflow-hidden lg:hidden shadow-2xl"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {['Nova', 'Orbis', 'Astra'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)} passHref legacyBehavior>
                    <a className="text-2xl font-display font-bold text-slate-800 dark:text-white uppercase tracking-widest block border-b border-slate-200 dark:border-white/5 pb-4">
                      {item}
                    </a>
                  </Link>
                </motion.div>
              ))}
              
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full py-4 mt-4 bg-accent text-white font-bold rounded-full uppercase tracking-widest text-xs shadow-lg shadow-accent/20"
                onClick={() => setIsOpen(false)}
              >
                Signal Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
