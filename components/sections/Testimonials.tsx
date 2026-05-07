"use client";

import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  return (
    <section id="stories" className="bg-transparent dark:bg-background border-y border-border dark:border-white/5 py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] dark:opacity-20">
        <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="flex justify-center items-center gap-4 text-[10px] uppercase tracking-[0.3em] mb-4">
            <span className="w-10 h-px bg-border dark:bg-white/20" />
            <span className="text-gradient-exinx font-black tracking-widest">{siteConfig.testimonials.label}</span>
            <span className="w-10 h-px bg-border dark:bg-white/20" />
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(2.2rem,4vw,3.5rem)] leading-tight tracking-tight text-foreground">
            Lives Already <span className="italic font-normal text-gradient-exinx">Changing</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {siteConfig.testimonials.items.map((item, i) => (
            <div
              key={i}
              className="p-10 bg-white dark:bg-secondary/20 border border-border dark:border-white/5 hover:border-accent/30 transition-all duration-300 rounded-[2.5rem] shadow-sm hover:shadow-xl dark:shadow-none group"
            >
              <div className="text-6xl text-accent opacity-20 group-hover:opacity-40 transition-opacity leading-none mb-4 font-serif">“</div>
              <blockquote className="text-[15px] leading-[1.8] text-muted-foreground mb-8 italic font-medium">
                {item.quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center font-bold text-[12px] transition-transform group-hover:scale-110",
                  item.color === 'nova' ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400" :
                    item.color === 'orbis' ? "bg-purple-500/10 text-purple-600 dark:text-purple-400" : "bg-accent/10 text-accent"
                )}>
                  {item.initials}
                </div>
                <div>
                  <h5 className="font-bold text-[14px] text-foreground">{item.author}</h5>
                  <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-bold">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
