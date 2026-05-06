"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 left-0 right-0 z-[100] py-10 px-10 bg-transparent">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <Link href="/" className="scale-110">
          <Logo forceWhite />
        </Link>

        {/* Desktop Links - Matching Footer Font Style Exactly */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex gap-8 list-none">
            {siteConfig.nav.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-[14px] transition-colors",
                      isActive ? "text-white font-semibold" : "text-text-dim hover:text-accent"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('open-signal-form', { bubbles: true, detail: { from: 'navbar' } }));
              }
            }}
            className="px-6 py-2 border border-white/20 text-white text-[12px] hover:bg-white/10 transition-all rounded-[2px]"
          >
            Signal Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-[110]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={cn("w-6 h-0.5 bg-white transition-all", isMenuOpen && "rotate-45 translate-y-2")} />
          <span className={cn("w-6 h-0.5 bg-white transition-all", isMenuOpen && "opacity-0")} />
          <span className={cn("w-6 h-0.5 bg-white transition-all", isMenuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[105] bg-black/95 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col gap-8 text-center list-none">
              {siteConfig.nav.links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-lg transition-colors",
                        isActive ? "text-white font-semibold" : "text-text-dim hover:text-white"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <button 
                  className="px-10 py-4 bg-white text-black font-bold text-xs rounded-full"
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(new CustomEvent('open-signal-form', { bubbles: true }));
                    }
                  }}
                >
                  Signal Us
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
