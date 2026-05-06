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

export default function ProductSection() {
  return (
    <section id="products" className="max-w-7xl mx-auto px-6 md:px-12 py-32">
      <div className="text-center mb-20 space-y-4">
        <div ref={useReveal()} className="reveal flex justify-center items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-accent">
          <span className="w-10 h-px bg-accent" />
          {siteConfig.products.label}
          <span className="w-10 h-px bg-accent" />
        </div>
        <h2 ref={useReveal()} className="reveal font-syne font-extrabold text-[clamp(2.5rem,4vw,4rem)] leading-[1.1]">
          Meet the <span className="bg-gradient-to-r from-nova via-orbis to-astra bg-clip-text text-transparent">EXINX Ecosystem</span>
        </h2>
        <p ref={useReveal()} className="reveal text-text-muted text-base max-w-xl mx-auto">
          {siteConfig.products.subtitle}
        </p>
      </div>

      <div className="space-y-12">
        {siteConfig.products.items.map((product, i) => (
          <div 
            key={product.id}
            ref={useReveal()}
            className={cn(
              "reveal product-card flex flex-col lg:grid lg:grid-cols-2 gap-16 p-8 md:p-16 bg-surface border border-white/[0.04] relative overflow-hidden group transition-all hover:border-white/[0.08]",
              i % 2 === 1 && "lg:direction-rtl"
            )}
          >
            {/* Glow Overlay */}
            <div 
              className="absolute top-0 right-0 w-[40%] h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at right, ${product.color}0D, transparent 70%)` }}
            />

            <div className={cn("product-visual relative h-[350px] flex items-center justify-center", i % 2 === 1 && "lg:order-last")}>
              <div className="relative w-48 h-48 flex items-center justify-center">
                <div 
                  className="absolute inset-[-20px] rounded-full blur-[40px] opacity-30"
                  style={{ background: product.color }}
                />
                <div 
                  className="absolute inset-[-20px] border border-dashed rounded-full animate-[spin_15s_linear_infinite]"
                  style={{ borderColor: `${product.color}26` }}
                />
                
                {/* Product Shapes */}
                {product.id === "nova" && (
                  <div 
                    className="w-32 h-32 animate-[spin_12s_linear_infinite]"
                    style={{ 
                      background: `linear-gradient(135deg, ${product.color}, #3090c0)`,
                      clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
                    }}
                  />
                )}
                {product.id === "orbis" && (
                  <div className="w-32 h-32 border-[3px] rounded-full relative" style={{ borderColor: product.color }}>
                    <div className="absolute inset-4 border-2 rounded-full opacity-50" style={{ borderColor: product.color }} />
                    <div className="absolute inset-8 rounded-full opacity-60" style={{ background: product.color }} />
                  </div>
                )}
                {product.id === "astra" && (
                  <div 
                    className="w-32 h-32 animate-[spin_20s_linear_infinite_reverse]"
                    style={{ 
                      background: `linear-gradient(135deg, ${product.color}, #c04030)`,
                      clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                    }}
                  />
                )}
              </div>
            </div>

            <div className={cn("product-info space-y-6", i % 2 === 1 && "lg:text-left lg:direction-ltr")}>
              <span className="inline-block py-1 px-3 border text-[10px] uppercase tracking-widest" style={{ color: product.color, borderColor: `${product.color}4D` }}>
                {product.tag}
              </span>
              <h3 className="font-syne font-extrabold text-5xl tracking-tight">{product.name}</h3>
              <p className="font-serif italic text-lg text-text-muted">{product.subtitle}</p>
              <p className="text-[14px] leading-relaxed text-text-muted">{product.description}</p>
              
              <ul className="space-y-3">
                {product.features.map((feat, index) => (
                  <li key={index} className="flex items-center gap-3 text-[13px] text-text-muted py-2 border-b border-white/[0.04]">
                    <span className="w-4.5 h-4.5 rounded-full flex items-center justify-center text-[9px] font-bold" style={{ background: `${product.color}26`, color: product.color }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <button 
                className="btn-primary !px-8 !py-3 flex items-center gap-3 group/btn mt-4"
                style={{ background: product.color, color: i === 0 ? '#0a1520' : i === 1 ? '#0a0820' : '#1a0808' }}
              >
                {product.cta}
                <span className="transition-transform group-hover/btn:translate-x-1">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
