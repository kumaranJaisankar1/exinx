"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ui/ThemeToggle";
import { Logo } from "./Logo";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const isNova = pathname === "/nova";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="absolute top-0 left-0 right-0 z-[100] py-10 px-10 bg-transparent">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <Link href="/" className="scale-110">
          <Logo
            className={cn("w-auto h-8 md:h-10", isNova && "brightness-0 invert")}
          />
        </Link>

        {/* Desktop Links - Matching Footer Font Style Exactly */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex gap-8 list-none">
            {siteConfig.nav.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.label}
                  href={link.href}
                  className={cn(
                    "text-[14px] transition-colors",
                    isNova
                      ? (isActive
                        ? (pathname === "/nova" ? "text-[#D97706] font-semibold" : "text-[#0E76BD] font-semibold")
                        : "text-white/60 hover:text-white")
                      : (isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground")
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
              className={cn(
                "px-6 py-2 border text-[12px] transition-all rounded-[2px]",
                isNova
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-border text-foreground hover:bg-foreground/5"
              )}
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
            <span className={cn(
              "w-6 h-0.5 transition-all",
              isNova && !isMenuOpen ? "bg-white" : "bg-foreground",
              isMenuOpen && "rotate-45 translate-y-2"
            )} />
            <span className={cn(
              "w-6 h-0.5 transition-all",
              isNova && !isMenuOpen ? "bg-white" : "bg-foreground",
              isMenuOpen && "opacity-0"
            )} />
            <span className={cn(
              "w-6 h-0.5 transition-all",
              isNova && !isMenuOpen ? "bg-white" : "bg-foreground",
              isMenuOpen && "-rotate-45 -translate-y-2"
            )} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[105] bg-background/95 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col gap-8 text-center list-none">
              {siteConfig.nav.links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-lg transition-colors font-bold uppercase tracking-widest",
                        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
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
                  className="px-10 py-4 bg-primary text-primary-foreground font-bold text-xs rounded-full uppercase tracking-widest"
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
