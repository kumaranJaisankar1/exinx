"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "../ui/ThemeToggle";
import { Logo } from "../Logo";

export default function NovaNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 left-0 right-0 z-[100] py-6 px-6 md:py-10 md:px-10 bg-transparent w-full">
      <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center">
        <Link href="/" className="flex flex-col group relative">
          <Logo className="w-auto h-8 md:h-10 brightness-0 invert group-hover:scale-105 transition-transform" />
          <div className="flex w-full mt-[-4px]">
            <div className="w-[28%] md:w-[31%]" /> {/* Spacer to align with text part of logo */}
            <div className="flex-1 flex justify-center">
              <span
                className="text-[10px] md:text-[11px] font-medium tracking-[0.8em] text-[#D97706] uppercase whitespace-nowrap -mr-[0.8em]"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Nova
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex gap-8 list-none">
            {siteConfig.nav.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.label}
                  href={link.href}
                  className={cn(
                    "text-[14px] transition-colors",
                    isActive
                      ? (pathname === "/nova" ? "text-[#D97706] font-semibold" : "text-[#0E76BD] font-semibold")
                      : "text-white/60 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </ul>

          <div className="flex items-center gap-6">
            <ThemeToggle />
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-signal-form', { bubbles: true, detail: { from: 'navbar' } }));
                }
              }}
              className="px-6 py-2 border border-white/20 text-white hover:bg-white/10 text-[12px] transition-all rounded-[2px]"
            >
              Signal Us
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5 p-2 z-[110]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={cn("w-6 h-0.5 transition-all bg-white", isMenuOpen && "rotate-45 translate-y-2")} />
            <span className={cn("w-6 h-0.5 transition-all bg-white", isMenuOpen && "opacity-0")} />
            <span className={cn("w-6 h-0.5 transition-all bg-white", isMenuOpen && "-rotate-45 -translate-y-2")} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[104] bg-black/40 backdrop-blur-sm md:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] z-[105] bg-background/95 backdrop-blur-3xl md:hidden flex flex-col p-6 pt-32 overflow-hidden border-l border-white/10"
            >
              <ul className="flex flex-col gap-8 text-right list-none px-4">
                {siteConfig.nav.links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-xl transition-colors font-bold uppercase tracking-[0.1em]",
                          isActive ? "text-[#D97706]" : "text-muted-foreground hover:text-foreground"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-4">
                  <button
                    className="w-full px-6 py-4 bg-[#D97706] text-white font-bold text-xs rounded-full uppercase tracking-widest whitespace-nowrap"
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
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
