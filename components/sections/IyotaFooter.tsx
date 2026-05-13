"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "../Logo";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function IyotaFooter() {
  return (
    <footer className="border-t border-border py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col group">
                <Link href="/" className="flex flex-col group relative">
                  <Logo className="w-auto h-8 md:h-10" />
                  <div className="flex w-full mt-[-4px]">
                    {/* <div className="w-[28%] md:w-[31%]" /> */}
                    {/* <div className="flex-1 flex justify-left"> */}
                    <span
                      className="text-[10px] md:text-[11px] font-medium tracking-[0.8em] text-[#FF0000] uppercase whitespace-nowrap ml-14"
                      style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                      Iyota
                    </span>
                    {/* </div> */}
                  </div>
                </Link>
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] max-w-xs text-muted-foreground uppercase leading-tight max-w-[200px]">
                Competitive Exam Preparation Infrastructure
              </p>
            </div>

            <p className="text-[13px] leading-relaxed text-muted-foreground max-w-xs font-light">
              India's most powerful competitive exam preparation infrastructure for JEE Mains & NEET.
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
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-[#FF0000] hover:text-[#FF0000] transition-all duration-300"
                >
                  <social.icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-8">
            <h5 className="font-black text-[11px] uppercase tracking-[0.3em] text-foreground">Platform</h5>
            <ul className="space-y-4">
              {[
                { label: "Institutions", href: "/iyota/institutions" },
                { label: "Students", href: "/iyota/students" },
                { label: "Pricing", href: "#" },
              ].map((link, j) => (
                <li key={j}>
                  <Link href={link.href} className="text-[13px] text-muted-foreground hover:text-[#FF0000] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-8">
            <h5 className="font-black text-[11px] uppercase tracking-[0.3em] text-foreground">Company</h5>
            <ul className="space-y-4">
              {[
                { label: "About", href: "/iyota/about" },
                { label: "Contact", href: "#" },
              ].map((link, j) => (
                <li key={j}>
                  <Link href={link.href} className="text-[13px] text-muted-foreground hover:text-[#FF0000] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Exams Links */}
          <div className="space-y-8">
            <h5 className="font-black text-[11px] uppercase tracking-[0.3em] text-foreground">Exams</h5>
            <ul className="space-y-4">
              {[
                { label: "JEE Mains", href: "#" },
                { label: "NEET", href: "#" },
              ].map((link, j) => (
                <li key={j}>
                  <Link href={link.href} className="text-[13px] text-muted-foreground hover:text-[#FF0000] transition-colors font-medium">
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
            © 2026 IYOTAPREP INFRASTRUCTURE. ALL RIGHTS RESERVED.
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
      </div >
    </footer >
  );
}
