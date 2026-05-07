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

export default function HowItWorks() {
  const reveal1 = useReveal();
  const reveal2 = useReveal();
  const reveal3 = useReveal();
  const revealSteps = [useReveal(), useReveal(), useReveal(), useReveal()];

  return (
    <section id="how" className="max-w-7xl mx-auto px-6 md:px-12 py-32">
      <div className="text-center mb-20 space-y-4">
        <div ref={reveal1} className="reveal flex justify-center items-center gap-4 text-[10px] uppercase tracking-[0.2em] mb-4">
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#46e0ff]" />
          <span className="text-gradient-exinx font-bold">{siteConfig.how.label}</span>
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#ff8a00]" />
        </div>
        <h2 ref={reveal2} className="reveal font-syne font-extrabold text-[clamp(2.5rem,4vw,3.5rem)]">
          From Curious to <span className="text-gradient-exinx">Capable</span> in Four Steps
        </h2>
        <p ref={reveal3} className="reveal text-text-muted text-base max-w-lg mx-auto">
          {siteConfig.how.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connection Line (Desktop) */}
        <div className="absolute top-[120px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent hidden lg:block" />
        
        {siteConfig.how.steps.map((step, i) => (
          <div 
            key={i} 
            ref={revealSteps[i]}
            className="reveal step-card text-center p-10 group"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="font-syne font-extrabold text-5xl text-gradient-exinx opacity-10 mb-6">{step.num}</div>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-accent/20 bg-secondary flex items-center justify-center text-2xl relative z-10 group-hover:border-accent/40 transition-colors">
              {step.icon}
            </div>
            <h4 className="font-syne font-semibold text-lg mb-3">{step.title}</h4>
            <p className="text-[12px] leading-relaxed text-text-dim">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
