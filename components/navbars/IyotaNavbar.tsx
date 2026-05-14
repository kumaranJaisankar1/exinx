"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfigUrl } from "@/lib/siteConfigUrl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "../ui/ThemeToggle";
import { Logo } from "../Logo";
import { IyotaLogo } from "../IyotaLogo";
import { ArrowRight, Sparkles, Globe, Target, X } from "lucide-react";
import { EcosystemShowcase } from "./EcosystemShowcase";

// Ecosystem data moved to EcosystemShowcase.tsx

const iyotaLinks = [
  { label: "Home", href: "/iyota" },
  { label: "Institutions", href: "/iyota/institutions" },
  { label: "Students", href: "/iyota/students" },
  { label: "About", href: "/iyota/about" },
];

export default function IyotaNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isInstitutionsPage = pathname === "/iyota/institutions" || pathname === "/iyota/students";

  // Scroll Locking
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className={cn(
      "absolute top-0 left-0 right-0 z-[100] py-6 px-6 md:py-10 md:px-10 bg-transparent w-full",
      isInstitutionsPage && "dark"
    )}>
      <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center">
        <Link href="/iyota" className="flex flex-col group relative">
          <IyotaLogo className="w-auto h-8 md:h-10" forceWhite={isInstitutionsPage} />
        </Link>

        {/* Right Side Actions: Signal Us, Hamburger */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop Links - Visible only on large screens */}
          <div className="hidden xl:flex items-center gap-12">
            <ul className="flex gap-8 list-none">
              {iyotaLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.label}
                    href={link.href}
                    className={cn(
                      "text-[14px] transition-colors",
                      isActive
                        ? "text-[#FF0000] font-semibold"
                        : cn(
                          isInstitutionsPage
                            ? "text-white/70 hover:text-white"
                            : "text-foreground hover:text-muted-foreground"
                        )
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {isInstitutionsPage && (
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(new CustomEvent('open-signal-form', { bubbles: true, detail: { from: 'navbar' } }));
                    }
                  }}
                  className="text-[14px] transition-colors text-white/70 hover:text-white"
                >
                  Signal Us
                </button>
              )}
            </ul>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href={`${siteConfigUrl.iyota.baseUrl}`}
              className={cn(
                "px-5 py-2 text-[12px] transition-all  font-bold tracking-widest uppercase",
                isInstitutionsPage
                  ? "text-white hover:bg-white/10 border border-white/20"
                  : "text-foreground hover:bg-foreground/5 border border-black dark:border-white"
              )}
            >
              Login
            </Link>
            <Link
              href={`${siteConfigUrl.iyota.baseUrl}`}
              className="px-5 py-2 bg-[#FF0000] text-white hover:bg-[#D90000] text-[12px] transition-all  font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(255,0,0,0.2)]"
            >
              Sign Up
            </Link>
          </div>

          <button
            className="flex flex-col gap-1.5 p-3 group relative transition-all duration-300 hover:scale-110 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={cn(
                "w-6 h-[0.2rem]  transition-all duration-300 animate-gradient-shimmer",
                isMenuOpen ? "rotate-45 translate-y-2 bg-foreground" : cn(isInstitutionsPage ? "bg-white" : "bg-gradient-to-r from-[#FF0000] via-[#FFB3B3] to-[#FF0000] shadow-[0_0_8px_rgba(255,0,0,0.4)]", "group-hover:w-8")
              )}
            />
            <span
              className={cn(
                "w-8 h-[0.2rem]  transition-all duration-300 animate-gradient-shimmer",
                isMenuOpen ? "opacity-0" : cn(isInstitutionsPage ? "bg-white" : "bg-gradient-to-r from-[#FF0000] via-[#FFB3B3] to-[#FF0000] shadow-[0_0_8px_rgba(255,0,0,0.4)]")
              )}
            />
            <span
              className={cn(
                "w-6 h-[0.2rem]  self-end transition-all duration-300 animate-gradient-shimmer",
                isMenuOpen ? "-rotate-45 -translate-y-2 w-6 bg-foreground" : cn(isInstitutionsPage ? "bg-white" : "bg-gradient-to-r from-[#FF0000] via-[#FFB3B3] to-[#FF0000] shadow-[0_0_8px_rgba(255,0,0,0.4)]", "group-hover:w-8")
              )}
            />
          </button>
        </div>
      </div>

      {/* Side Drawer Menu */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[104] bg-black/60 backdrop-blur-md"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] md:w-[550px] z-[105] bg-background/95 backdrop-blur-3xl flex flex-col border-l border-border shadow-2xl"
            >
              <div
                className="p-8 md:p-12 flex flex-col h-full overflow-y-auto custom-scrollbar"
                data-lenis-prevent
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <Link href="/">
                    <Logo className="w-auto h-8" />
                  </Link>
                  <div className="flex items-center gap-8">
                    <ThemeToggle />
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="text-muted-foreground hover:text-foreground transition-colors uppercase text-[10px] tracking-[0.2em] font-bold"
                    >
                      <X />
                    </button>
                  </div>
                </div>

                {/* Navigation Links - Visible only on mobile/tablet drawer */}
                <div className="mb-12 xl:hidden">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-bold mb-8 block">Navigation</span>
                  <ul className="grid grid-cols-2 gap-y-6">
                    {iyotaLinks.map((link, i) => (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={cn(
                            "text-base transition-colors font-medium",
                            pathname === link.href ? "text-[#FF0000]" : "text-muted-foreground hover:text-primary"
                          )}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                    {isInstitutionsPage && (
                      <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + iyotaLinks.length * 0.05 }}
                      >
                        <button
                          onClick={() => {
                            setIsMenuOpen(false);
                            if (typeof window !== 'undefined') {
                              window.dispatchEvent(new CustomEvent('open-signal-form', { bubbles: true, detail: { from: 'navbar' } }));
                            }
                          }}
                          className="text-base transition-colors font-medium text-muted-foreground hover:text-primary"
                        >
                          Signal Us
                        </button>
                      </motion.li>
                    )}
                  </ul>
                </div>

                {/* Ecosystem Showcase */}
                <EcosystemShowcase onLinkClick={() => setIsMenuOpen(false)} />

                {/* Footer */}
                <div className="mt-auto pt-16 flex flex-col gap-8">
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        window.location.href = `${siteConfigUrl.iyota.baseUrl}`;
                      }}
                      className={cn(
                        "w-full py-4 font-bold text-xs uppercase tracking-[0.2em] transition-all border",

                      )}
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        window.location.href = `${siteConfigUrl.iyota.baseUrl}`;
                      }}
                      className="w-full py-4 font-bold text-xs  uppercase tracking-[0.2em] bg-[#FF0000] text-white shadow-xl"
                    >
                      Sign Up
                    </button>
                  </div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
                    © 2025 EXINX Technologies
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
