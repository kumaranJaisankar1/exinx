"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Nova didn't just teach me math; it taught me how I learn math. The adaptive pacing is something I've never experienced before.",
    author: "Arjun Mehta",
    role: "Grade 12 Student",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun"
  },
  {
    text: "I used to depend entirely on my tutor for Physics. With Nova, I can master complex theories independently because it explains them exactly how I think.",
    author: "Sarah Khan",
    role: "Undergraduate Engineering",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    text: "The conceptual clarity Nova provides is unmatched. It probes my understanding before moving to the next level, ensuring I never leave a gap.",
    author: "Rohan Das",
    role: "NEET Aspirant",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan"
  }
];

const StudentExperience = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-8 border border-orange-500/20"
          >
            <Quote className="text-orange-400" size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold font-syne mb-6">
            Student <span className="text-orange-400">Voices.</span>
          </h2>
        </div>

        <div className="relative h-[400px] md:h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "anticipate" }}
              className="text-center"
            >
              <p className="text-2xl md:text-4xl font-medium text-white italic leading-tight mb-12 max-w-4xl mx-auto">
                "{testimonials[index].text}"
              </p>
              
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 rounded-full border-2 border-orange-500/30 p-1 mb-4">
                    <img 
                      src={testimonials[index].avatar} 
                      alt={testimonials[index].author} 
                      className="w-full h-full rounded-full bg-white/10"
                    />
                 </div>
                 <h4 className="text-xl font-bold text-white">{testimonials[index].author}</h4>
                 <p className="text-gray-500">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-4 lg:-px-20">
            <button 
              onClick={prev}
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-orange-500/20 hover:border-orange-500/30 transition-all pointer-events-auto"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-orange-500/20 hover:border-orange-500/30 transition-all pointer-events-auto"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-orange-400' : 'w-4 bg-white/10'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentExperience;
