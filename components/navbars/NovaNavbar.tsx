"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { siteConfigUrl } from "@/lib/siteConfigUrl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "../ui/ThemeToggle";
import { Logo } from "../Logo";
import { NovaLogo } from "../NovaLogo";
import { ArrowRight, Sparkles, Globe, Target, X } from "lucide-react";
import { EcosystemShowcase } from "./EcosystemShowcase";

// Ecosystem data moved to EcosystemShowcase.tsx

const novaLinks = [
  { label: "How it Works", href: "#process" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Pricing", href: "#pricing" },
  { label: "Signal Us", href: "#signal", isAction: true },
];

export default function NovaNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    if (href.startsWith("#") && pathname === "/nova") {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    }
  };

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
    <nav className="absolute top-0 left-0 right-0 z-[100] py-6 px-6 md:py-10 md:px-10 bg-transparent w-full">
      <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center">
        <Link href="/nova" className="flex flex-col group relative">
          <NovaLogo className="w-auto h-8 md:h-10 group-hover:scale-[1.02] transition-transform" />
        </Link>



        {/* Right Side Actions: Signal Us, Hamburger */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop Links - Visible only on large screens */}
          <div className="hidden xl:flex items-center gap-12">
            <ul className="flex gap-8 list-none">
              {novaLinks.map((link) => {
                if (link.isAction) {
                  return (
                    <button
                      key={link.label}
                      onClick={() => {
                        if (typeof window !== 'undefined') {
                          window.dispatchEvent(new CustomEvent('open-signal-form', { bubbles: true, detail: { from: 'navbar' } }));
                        }
                      }}
                      className="text-[14px] transition-colors text-white/60 hover:text-[#D97706] font-normal bg-transparent border-none p-0 cursor-pointer"
                    >
                      {link.label}
                    </button>
                  );
                }
                return (
                  <Link key={link.label}
                    href={pathname === "/nova" ? link.href : `/nova${link.href}`}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-[14px] transition-colors text-white/60 hover:text-[#D97706]"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </ul>
          </div>
          <Link
            href={siteConfigUrl.nova.baseUrl}
            className="hidden sm:block px-6 py-2 bg-gradient-to-r from-[#D97706] to-[#FFD700] text-black hover:opacity-90 text-[12px] transition-all rounded-[2px] font-bold tracking-widest uppercase shadow-md shadow-[#D97706]/20"
          >
            Login
          </Link>

          <button
            className="flex flex-col gap-1.5 p-3 group relative transition-all duration-300 hover:scale-110 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={cn(
                "w-6 h-[0.2rem] rounded-full transition-all duration-300 animate-gradient-shimmer",
                isMenuOpen ? "rotate-45 translate-y-2 bg-white" : "bg-gradient-to-r from-[#D97706] via-[#FFD700] to-[#D97706] shadow-[0_0_8px_rgba(217,119,6,0.4)] group-hover:w-8"
              )}
            />
            <span
              className={cn(
                "w-8 h-[0.2rem] rounded-full transition-all duration-300 animate-gradient-shimmer",
                isMenuOpen ? "opacity-0" : "bg-gradient-to-r from-[#D97706] via-[#FFD700] to-[#D97706] shadow-[0_0_8px_rgba(217,119,6,0.4)]"
              )}
            />
            <span
              className={cn(
                "w-6 h-[0.2rem] rounded-full self-end transition-all duration-300 animate-gradient-shimmer",
                isMenuOpen ? "-rotate-45 -translate-y-2 w-6 bg-white" : "bg-gradient-to-r from-[#D97706] via-[#FFD700] to-[#D97706] shadow-[0_0_8px_rgba(217,119,6,0.4)] group-hover:w-8"
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
                    {novaLinks.map((link, i) => (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                      >
                        {link.isAction ? (
                          <button
                            onClick={() => {
                              setIsMenuOpen(false);
                              if (typeof window !== 'undefined') {
                                window.dispatchEvent(new CustomEvent('open-signal-form', { bubbles: true }));
                              }
                            }}
                            className="text-base text-muted-foreground hover:text-[#D97706] transition-colors font-medium bg-transparent border-none p-0 cursor-pointer"
                          >
                            {link.label}
                          </button>
                        ) : (
                          <Link
                            href={pathname === "/nova" ? link.href : `/nova${link.href}`}
                            onClick={(e) => handleScroll(e, link.href)}
                            className="text-base text-muted-foreground hover:text-[#D97706] transition-colors font-medium"
                          >
                            {link.label}
                          </Link>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Ecosystem Showcase */}
                <EcosystemShowcase onLinkClick={() => setIsMenuOpen(false)} />

                {/* Footer */}
                <div className="mt-auto pt-16 flex flex-col gap-4">
                  <Link
                    href={siteConfigUrl.nova.baseUrl}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full py-5 border border-white/20 hover:bg-white/10 text-white text-center font-bold text-xs rounded-full uppercase tracking-[0.2em] transition-all block"
                  >
                    Login
                  </Link>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center mt-4">
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
