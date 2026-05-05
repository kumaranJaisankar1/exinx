"use client";

import { siteConfig } from "@/lib/config";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

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

export default function Testimonials() {
  return (
    <section id="stories" className="bg-surface border-y border-white/[0.04] py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div ref={useReveal()} className="reveal flex justify-center items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-accent">
            <span className="w-10 h-px bg-accent" />
            {siteConfig.testimonials.label}
            <span className="w-10 h-px bg-accent" />
          </div>
          <h2 ref={useReveal()} className="reveal font-syne font-extrabold text-[clamp(2rem,3.5vw,3rem)]">
            Lives Already <span className="font-serif italic font-normal text-accent">Changing</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {siteConfig.testimonials.items.map((item, i) => (
            <div 
              key={i} 
              ref={useReveal()}
              className="reveal p-10 bg-bg border border-white/[0.04] hover:border-accent/15 transition-all hover:-translate-y-1 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-serif text-5xl text-accent opacity-30 leading-none mb-2">"</div>
              <blockquote className="text-[14px] leading-[1.9] text-text-muted mb-8 italic font-light">
                {item.quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-11 h-11 rounded-full flex items-center justify-center font-syne font-bold text-[11px] transition-transform group-hover:scale-110",
                  item.color === 'nova' ? "bg-nova/15 text-nova" : 
                  item.color === 'orbis' ? "bg-orbis/15 text-orbis" : "bg-astra/15 text-astra"
                )}>
                  {item.initials}
                </div>
                <div>
                  <h5 className="font-syne font-semibold text-[13px]">{item.author}</h5>
                  <span className="text-[11px] text-text-dim uppercase tracking-wider">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
