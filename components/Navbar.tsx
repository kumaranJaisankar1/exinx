"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-[100] py-6 bg-transparent px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="group relative">
          <Logo /> </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-10 list-none">
            {siteConfig.nav.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted hover:text-accent transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform" />
                </Link>
              </li>
            ))}
          </ul>
          <Link href="#cta" className="btn-ghost !py-2.5 !px-6 !text-[11px] font-syne font-semibold border-accent text-accent hover:bg-accent hover:text-bg">
            {siteConfig.nav.cta}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={cn("w-6 h-0.5 bg-text transition-all", isMenuOpen && "rotate-45 translate-y-2")} />
          <span className={cn("w-6 h-0.5 bg-text transition-all", isMenuOpen && "opacity-0")} />
          <span className={cn("w-6 h-0.5 bg-text transition-all", isMenuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-[var(--bg)]/95 backdrop-blur-2xl"
      >
        <ul className="flex flex-col gap-6 p-8 list-none">
          {siteConfig.nav.links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-mono text-sm uppercase tracking-widest text-text-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#cta" className="btn-primary block text-center" onClick={() => setIsMenuOpen(false)}>
              {siteConfig.nav.cta}
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}
