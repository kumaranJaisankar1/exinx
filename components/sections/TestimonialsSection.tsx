"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "EXINX transformed our legacy systems into an intelligent, automated pipeline. The ROI was immediate.",
    author: "Sarah Jenkins",
    role: "CTO, QuantumTech",
  },
  {
    quote: "The level of engineering excellence is unmatched. They don't just write code; they solve business problems.",
    author: "Michael Chang",
    role: "VP Engineering, NexGen",
  },
  {
    quote: "Their AI-first approach allowed us to scale our operations 10x without increasing headcount.",
    author: "Elena Rodriguez",
    role: "Operations Director, Aether Solutions",
  },
  {
    quote: "A truly premium experience from discovery to deployment. Highly recommended for complex AI integrations.",
    author: "David Kim",
    role: "CEO, Stellar Data",
  },
];

export function TestimonialsSection() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-32 bg-white/[0.02] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Experience</h2>
        <p className="text-lg text-secondary max-w-2xl">
          Don't just take our word for it. See what industry leaders say about our engineering.
        </p>
      </div>

      <motion.div ref={carouselRef} className="cursor-grab active:cursor-grabbing overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6 px-6 md:px-[10vw]"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} className="min-w-[300px] md:min-w-[400px] flex-shrink-0">
              <PremiumCard className="p-8 h-full flex flex-col pointer-events-none select-none">
                <Quote className="w-10 h-10 text-accent/20 mb-6" />
                <p className="text-lg text-white mb-8 flex-grow">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-secondary">{testimonial.role}</p>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
