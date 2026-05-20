"use client";

import React from "react";
import Link from "next/link";
import { NovaLogo } from "../NovaLogo";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function NovaFooter() {
  return (
    <footer className="border-t border-border dark:border-white/5 py-20 px-6 md:px-12 bg-background dark:bg-[#07080a] relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="flex flex-col gap-3">
              <Link href="/nova" className="inline-block">
                <NovaLogo className="w-auto h-8 md:h-10" forceWhite={false} />
              </Link>
              <p className="text-[10px] font-bold tracking-[0.2em] max-w-xs text-muted-foreground uppercase leading-tight">
                Cognitive-Adaptive AI Companion
              </p>
            </div>

            <p className="text-[13px] leading-relaxed text-muted-foreground dark:text-white/50 max-w-xs font-light">
              An intelligent, adaptive learning ecosystem that understands your comprehension style and responds at your pace.
            </p>

            <div className="flex gap-4 pt-2">
              {[
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-border dark:border-white/10 flex items-center justify-center text-muted-foreground hover:border-[#D97706] hover:text-[#D97706] dark:hover:border-[#D97706] dark:hover:text-[#D97706] transition-all duration-300"
                >
                  <social.icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-8">
            <h5 className="font-extrabold text-[11px] uppercase tracking-[0.3em] text-foreground">Product</h5>
            <ul className="space-y-4">
              {[
                { label: "How it Works", href: "#process" },
                { label: "Curriculum", href: "#curriculum" },
                { label: "Pricing", href: "#pricing" },
              ].map((link, j) => (
                <li key={j}>
                  <Link href={link.href} className="text-[13px] text-muted-foreground hover:text-[#D97706] dark:hover:text-[#D97706] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem Links */}
          <div className="space-y-8">
            <h5 className="font-extrabold text-[11px] uppercase tracking-[0.3em] text-foreground">Ecosystem</h5>
            <ul className="space-y-4">
              {[
                { label: "EXINX Home", href: "/" },
                { label: "Orbis Platform", href: "/orbis" },
                { label: "IyotaPrep", href: "/iyotaprep" },
              ].map((link, j) => (
                <li key={j}>
                  <Link href={link.href} className="text-[13px] text-muted-foreground hover:text-[#D97706] dark:hover:text-[#D97706] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Info */}
          <div className="space-y-8">
            <h5 className="font-extrabold text-[11px] uppercase tracking-[0.3em] text-foreground">Company</h5>
            <ul className="space-y-4">
              {[
                { label: "About Us", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#" },
              ].map((link, j) => (
                <li key={j}>
                  <Link href={link.href} className="text-[13px] text-muted-foreground hover:text-[#D97706] dark:hover:text-[#D97706] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-bold text-center md:text-left">
            © 2026 EXINX TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            <Link href="#" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors font-black uppercase tracking-widest">
              Terms
            </Link>
            <Link href="#" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors font-black uppercase tracking-widest">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
