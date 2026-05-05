"use client";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-10 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-bg.svg')] bg-cover bg-center opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white tracking-widest mb-4">EXINX</h3>
            <p className="text-secondary max-w-sm mb-6">
              Exponential Intelligence X-Factor. Engineering intelligent digital futures and scalable AI-driven ecosystems.
            </p>
            <div className="flex gap-4">
              {/* Social Links Placeholders */}
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a key={social} href="#" className="text-sm text-secondary hover:text-white transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              {['Orbis', 'Nova', 'Astra', 'Nexus'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-secondary hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-secondary hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary/60">
            © {new Date().getFullYear()} EXINX Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-secondary/60 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            System Status: Operational
          </div>
        </div>
      </div>
    </footer>
  );
}
