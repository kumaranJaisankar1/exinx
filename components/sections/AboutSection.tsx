"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
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

export default function AboutSection() {
  const labelRef = useReveal();
  const titleRef = useReveal();
  const descRef = useReveal();

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-12 py-32">
      <div ref={labelRef} className="reveal flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-accent mb-8">
        <span className="w-10 h-px bg-accent" />
        {siteConfig.about.label}
      </div>

      <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
        <div className="space-y-12">
          <h2 ref={titleRef} className="reveal font-syne font-bold text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.15]">
            {siteConfig.about.title.split("one-size-fits-all").map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && <span className="font-serif italic font-normal text-accent">one-size-fits-all</span>}
              </span>
            ))}
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {siteConfig.about.philosophy.map((card, i) => (
              <div 
                key={i}
                className="reveal p-8 bg-surface border border-white/[0.04] group hover:border-accent/15 transition-all hover:-translate-y-1 relative overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
                ref={useReveal()}
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <div className="font-syne font-extrabold text-3xl text-accent/15 mb-4">{card.num}</div>
                <h4 className="font-syne font-semibold text-base mb-2">{card.title}</h4>
                <p className="text-[12px] leading-relaxed text-text-dim">{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={descRef} className="reveal space-y-8 pt-4">
          <p className="text-base leading-[2] text-text-muted">
            <strong className="text-text font-medium">EXINX was born from a frustration:</strong> despite billions spent on edtech, most platforms still deliver static content wrapped in gamification. We asked a different question — what if the AI didn't just deliver content, but truly understood how you learn?
          </p>
          <p className="text-base leading-[2] text-text-muted">
            Our founding team of AI researchers, cognitive scientists, and educators spent two years building the neural architecture that powers Nova, Orbis, and Astra. Not chatbots with education prompts — purpose-built intelligence designed from the ground up for learning.
          </p>
          <p className="text-base leading-[2] text-text-muted">
            <strong className="text-text font-medium">The result?</strong> Three products that work independently yet amplify each other. A learning companion that knows you. A knowledge platform that connects minds. An assessment engine that measures what matters. Together, they form the most intelligent education ecosystem ever built.
          </p>
          <p className="text-base leading-[2] text-text-muted">
            We're not replacing teachers. We're giving every learner on the planet access to the kind of personalized, responsive education that was once reserved for the privileged few. <strong className="text-text">This is education democratized by intelligence.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
