"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "../ui/ThemeToggle";
import { Logo } from "../Logo";
import { OrbisLogo } from "../OrbisLogo";
import { ArrowRight, Sparkles, Globe, Target, X } from "lucide-react";
import { EcosystemShowcase } from "./EcosystemShowcase";
import { siteConfigUrl } from "@/lib/siteConfigUrl";

// Ecosystem data moved to EcosystemShowcase.tsx

const orbisLinks = [
  { label: "Home", href: "/orbis" },
  { label: "Features", href: "#orbis-modules" },
  { label: "About", href: "/orbis/about" },
];

export default function OrbisNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesHovered, setIsFeaturesHovered] = useState(false);
  const pathname = usePathname();

  // Scroll locking
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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 0; // Navbar height offset
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      setIsMenuOpen(false);
      setIsFeaturesHovered(false);
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-[100] py-6 px-6 md:py-10 md:px-10 bg-transparent w-full">
      <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center">
        <Link href="/orbis" className="flex flex-col group relative">
          <OrbisLogo className="w-auto h-8 md:h-10 group-hover:scale-[1.02] transition-transform" />
        </Link>

        {/* Right Side Actions: Signal Us, Hamburger */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop Links - Visible only on large screens */}
          <div className="hidden xl:flex items-center gap-12">
            <ul className="flex gap-8 list-none">
              {orbisLinks.map((link) => {
                const isActive = pathname === link.href;
                const isFeatures = link.label === "Features";

                return (
                  <div
                    key={link.label}
                    className="relative group/nav"
                    onMouseEnter={() => isFeatures && setIsFeaturesHovered(true)}
                    onMouseLeave={() => isFeatures && setIsFeaturesHovered(false)}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className={cn(
                        "text-[14px] transition-colors py-2 block",
                        isActive
                          ? "text-[#0E76BD] font-semibold"
                          : "text-foreground hover:text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>

                    {isFeatures && (
                      <AnimatePresence>
                        {isFeaturesHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 z-50 pointer-events-auto"
                          >
                            <div className="bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-2 shadow-2xl overflow-hidden">
                              <button
                                onClick={(e) => handleScroll(e, "#orbis-modules")}
                                className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-foreground/5 transition-all text-left group"
                              >
                                <div className="p-2.5 rounded-lg bg-[#0E76BD]/10 text-[#0E76BD] group-hover:scale-110 transition-transform">
                                  <Globe size={18} />
                                </div>
                                <div>
                                  <p className="text-[13px] font-bold text-foreground leading-none mb-1">Orbis on Web</p>
                                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Core Modules</p>
                                </div>
                              </button>

                              <button
                                onClick={(e) => handleScroll(e, "#orbis-mobile")}
                                className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-foreground/5 transition-all text-left group"
                              >
                                <div className="p-2.5 rounded-lg bg-[#0E76BD]/10 text-[#0E76BD] group-hover:scale-110 transition-transform">
                                  <Sparkles size={18} />
                                </div>
                                <div>
                                  <p className="text-[13px] font-bold text-foreground leading-none mb-1">Orbis on Mobile</p>
                                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Ecosystem</p>
                                </div>
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-orbis-signal-form', { bubbles: true, detail: { from: 'navbar' } }));
                }
              }}
              className="text-foreground/60 hover:text-[#0E76BD] text-[12px] transition-all font-bold tracking-widest uppercase"
            >
              Signal Us
            </button>
            <Link
              href={siteConfigUrl.orbis.baseUrl}
              className="px-6 py-2 bg-[#0E76BD] text-white hover:bg-[#0A5A91] text-[12px] transition-all rounded-[2px] font-bold tracking-widest uppercase shadow-lg shadow-[#0E76BD]/20"
            >
              Login
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
                "w-6 h-[0.2rem] rounded-full transition-all duration-300 animate-gradient-shimmer",
                isMenuOpen ? "rotate-45 translate-y-2 bg-foreground" : "bg-gradient-to-r from-[#0E76BD] via-[#A8D8F0] to-[#0E76BD] shadow-[0_0_8px_rgba(14,118,189,0.4)] group-hover:w-8"
              )}
            />
            <span
              className={cn(
                "w-8 h-[0.2rem] rounded-full transition-all duration-300 animate-gradient-shimmer",
                isMenuOpen ? "opacity-0" : "bg-gradient-to-r from-[#0E76BD] via-[#A8D8F0] to-[#0E76BD] shadow-[0_0_8px_rgba(14,118,189,0.4)]"
              )}
            />
            <span
              className={cn(
                "w-6 h-[0.2rem] rounded-full self-end transition-all duration-300 animate-gradient-shimmer",
                isMenuOpen ? "-rotate-45 -translate-y-2 w-6 bg-foreground" : "bg-gradient-to-r from-[#0E76BD] via-[#A8D8F0] to-[#0E76BD] shadow-[0_0_8px_rgba(14,118,189,0.4)] group-hover:w-8"
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
                    {orbisLinks.map((link, i) => (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={(e) => handleScroll(e, link.href)}
                          className={cn(
                            "text-base transition-colors font-medium",
                            pathname === link.href ? "text-[#0E76BD]" : "text-muted-foreground hover:text-[#0E76BD]"
                          )}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Ecosystem Showcase */}
                <EcosystemShowcase onLinkClick={() => setIsMenuOpen(false)} />

                <div className="mt-auto pt-16 flex flex-col gap-8">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.dispatchEvent(new CustomEvent('open-orbis-signal-form'));
                    }}
                    className="w-full py-5 bg-[#0E76BD] text-white font-bold text-xs rounded-full uppercase tracking-[0.2em] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    Signal Us
                  </button>
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
