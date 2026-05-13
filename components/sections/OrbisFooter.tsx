"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "../Logo";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function OrbisFooter() {
  return (
    <footer className="border-t border-border py-20 px-6 md:px-12 bg-background relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="flex flex-col gap-2">
              <Link href="/" className="flex flex-col group relative">
                <Logo className="w-auto h-8 md:h-10" />
                <div className="flex w-full mt-[-4px]">
                  <span
                    className="text-[10px] md:text-[11px] font-medium tracking-[0.8em] text-[#0E76BD] uppercase whitespace-nowrap ml-14"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    Orbis
                  </span>
                </div>
              </Link>
              <p className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase leading-tight max-w-[200px]">
                Unified Institutional Intelligence
              </p>
            </div>

            <p className="text-[13px] leading-relaxed text-muted-foreground max-w-xs font-light">
              A comprehensive School Management Solution designed to automate, optimize, and scale modern educational institutions with precision.
            </p>

            <div className="flex gap-4 pt-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-[#0E76BD] hover:text-[#0E76BD] transition-all duration-300"
                >
                  <social.icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-8">
            <h5 className="font-black text-[11px] uppercase tracking-[0.3em] text-foreground">Navigation</h5>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/orbis" },
                { label: "Features", href: "/orbis#orbis-modules" },
                { label: "About", href: "/orbis/about" },
              ].map((link, j) => (
                <li key={j}>
                  <Link href={link.href} className="text-[13px] text-muted-foreground hover:text-[#0E76BD] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-8">
            <h5 className="font-black text-[11px] uppercase tracking-[0.3em] text-foreground">Solutions</h5>
            <ul className="space-y-4">
              {[
                { label: "Student Registry", href: "#" },
                { label: "Fee Management", href: "#" },
                { label: "Knowledge Archives", size: 13 },
                { label: "Satellite Network", href: "#" },
              ].map((link, j) => (
                <li key={j}>
                  <Link href={link.href || "#"} className="text-[13px] text-muted-foreground hover:text-[#0E76BD] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-8">
            <h5 className="font-black text-[11px] uppercase tracking-[0.3em] text-foreground">Institutional Support</h5>
            <ul className="space-y-4">
              {[
                { label: "Documentation", href: "#" },
                { label: "System Status", href: "#" },
                { label: "Help Center", href: "#" },
                { label: "Contact Sales", href: "#" },
              ].map((link, j) => (
                <li key={j}>
                  <Link href={link.href} className="text-[13px] text-muted-foreground hover:text-[#0E76BD] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-bold text-center md:text-left">
            © 2026 ORBIS INSTITUTIONAL SYSTEM. POWERED BY EXINX.
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
