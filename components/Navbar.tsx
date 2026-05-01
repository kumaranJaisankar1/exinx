'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Logo } from './Logo';

import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-12 py-8 bg-transparent w-full max-w-[1440px] mx-auto backdrop-blur-[2px]">
      <div className="w-1/4">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {/* Centered Navigation Options */}
      <div className="hidden lg:flex items-center justify-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 w-1/2">
        {['Nova', 'Orbis', 'Astra'].map((item, i) => (
          <Link key={item} href={`/${item.toLowerCase()}`} passHref legacyBehavior>
            <a className="relative group hover:text-white transition-all duration-300 cursor-pointer">
              {item}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </Link>
        ))}
      </div>
      
      <div className="flex items-center justify-end gap-6 w-1/4">
        <ThemeToggle />
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:block px-8 py-3 bg-white text-black hover:bg-accent hover:text-white transition-all border border-white/10 rounded-full text-[9px] font-black uppercase tracking-[0.2em]"
        >
          Signal Us
        </motion.button>
      </div>
    </nav>
  );
}
