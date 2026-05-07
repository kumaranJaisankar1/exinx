"use client";

import { siteConfig } from "@/lib/config";
import Link from "next/link";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-20 px-6 md:px-12 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-20">
          <div className="space-y-6">
            <Link href="/" className="font-syne font-extrabold text-2xl tracking-[0.15em] pb-10">
              {/* EXI<span className="text-accent">NX</span> */}
              <Logo />
            </Link>
            <p className="text-[13px] leading-relaxed text-text-dim max-w-xs mt-5">
              {siteConfig.footer.description}
            </p>
          </div>

          {siteConfig.footer.columns.map((col, i) => (
            <div key={i} className="space-y-6">
              <h5 className="font-extrabold text-[13px] uppercase tracking-widest text-foreground">{col.title}</h5>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="text-[12px] text-text-dim hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-text-dim tracking-wider">
            {siteConfig.footer.copyright}
          </p>
          <div className="flex gap-4">
            {["𝕏", "in", "◆"].map((icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-[13px] text-text-dim hover:border-accent hover:text-accent transition-all"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
