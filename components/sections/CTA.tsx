"use client";

import { siteConfig } from "@/lib/config";
import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function CTA() {
  return (
    <section id="cta" className="relative py-48 px-6 text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(240,160,48,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <div ref={useReveal()} className="reveal flex justify-center items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-accent mb-4">
          <span className="w-10 h-px bg-accent" />
          THE WAIT IS ALMOST OVER
          <span className="w-10 h-px bg-accent" />
        </div>

        <h2 ref={useReveal()} className="reveal font-syne font-extrabold text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] tracking-tight">
          Ready to learn the way<br />
          <span className="font-serif italic font-normal text-accent">your mind was built to?</span>
        </h2>

        <p ref={useReveal()} className="reveal text-text-muted text-base max-w-lg mx-auto leading-relaxed pt-2">
          {siteConfig.cta.description}
        </p>

        <div ref={useReveal()} className="reveal flex flex-wrap justify-center gap-4 pt-6">
          <button className="btn-primary">{siteConfig.cta.primary}</button>
          <button className="btn-ghost" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
            {siteConfig.cta.secondary}
          </button>
        </div>

        <div ref={useReveal()} className="reveal space-y-1 pt-8">
          <p className="text-[11px] text-text-dim uppercase tracking-wider">
            No credit card required · Early access pricing locked forever
          </p>
          <p className="text-[11px] text-text-dim uppercase tracking-wider">
            Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
