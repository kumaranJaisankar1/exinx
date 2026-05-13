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
import { ArrowRight, Sparkles, Globe, Target } from "lucide-react";

const ecosystem = [
  {
    name: "Nova",
    href: "/nova",
    color: "#D97706",
    tag: "Intelligence Engine",
    desc: "Personalized AI that adapts to your cognition.",
    icon: Sparkles
  },
  {
    name: "Orbis",
    href: "/orbis",
    color: "#0E76BD",
    tag: "Institutional System",
    desc: "Unified ecosystem for modern education.",
    icon: Globe
  },
  {
    name: "Iyota",
    href: "/iyota",
    color: "#FF0000",
    tag: "Precision Prep",
    desc: "Advanced assessment & performance analytics.",
    icon: Target
  }
];

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
                          : "text-muted-foreground hover:text-foreground"
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
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('open-orbis-signal-form', { bubbles: true, detail: { from: 'navbar' } }));
              }
            }}
            className="hidden sm:block px-6 py-2 border border-[#0E76BD]/30 text-foreground hover:bg-[#0E76BD]/5 text-[12px] transition-all rounded-[2px] font-medium tracking-widest uppercase"
          >
            Signal Us
          </button>

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
                <div className="flex justify-between items-center mb-16">
                  <Logo className="w-auto h-8" />
                  <div className="flex items-center gap-8">
                    <ThemeToggle />
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="text-muted-foreground hover:text-foreground transition-colors uppercase text-[10px] tracking-[0.2em] font-bold"
                    >
                      Close X
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
                <div className="flex flex-col gap-12">
                  <div>
                    <div className="flex justify-center">                    <button className="cursor-pointer text-[16px] uppercase tracking-[0.5em] text-muted-foreground font-bold mb-8 block hover:text-primary">EXINX</button>
                    </div>                    <div className="grid gap-4">
                      {ecosystem.map((product, i) => (
                        <motion.div
                          key={product.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <Link
                            href={product.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="group relative block p-8 rounded-3xl bg-secondary/30 dark:bg-white/[0.02] border border-border hover:border-primary/20 transition-all overflow-hidden"
                          >
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                              style={{ background: `radial-gradient(circle at top right, ${product.color}15, transparent)` }}
                            />

                            <div className="relative z-10 flex justify-between items-start">
                              <div>
                                <span className="text-[10px] font-mono tracking-widest uppercase mb-2 block" style={{ color: product.color }}>
                                  {product.tag}
                                </span>
                                <h3 className="text-3xl font-bold text-foreground mb-2 tracking-tight group-hover:translate-x-1 transition-transform">
                                  {product.name}
                                </h3>
                                <p className="text-sm text-muted-foreground font-light max-w-[240px] leading-relaxed">
                                  {product.desc}
                                </p>
                              </div>
                              <div
                                className="p-4 rounded-2xl bg-background border border-border text-foreground group-hover:scale-110 transition-all duration-500"
                                style={{ color: product.color }}
                              >
                                <product.icon size={24} />
                              </div>
                            </div>

                            <div className="mt-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                              Explore {product.name} <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

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
