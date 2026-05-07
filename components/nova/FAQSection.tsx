"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does Nova personalize learning?",
    answer: "Nova uses a proprietary Cognitive Intelligence Engine that monitors your interaction patterns including response speed, mistake patterns, and conceptual confidence to build a unique model of how you think."
  },
  {
    question: "Does Nova align with my syllabus?",
    answer: "Yes. Nova is syllabus-agnostic. It maps core pedagogical concepts to specific board requirements like CBSE, ICSE, NCERT, and Undergraduate programs, ensuring you're always on track."
  },
  {
    question: "Is there a free trial?",
    answer: "Absolutely. We offer a full-access 7-day free trial. You can experience the entire Nova core, including the AI study companion and deep analytics, without any upfront payment required."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq-section" className="py-24 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-8">
        <div className="mb-16 text-center">
          <span className="section-label">FAQ</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-foreground mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-sm md:text-base font-medium transition-colors ${openIndex === i ? 'text-primary' : 'text-foreground group-hover:text-primary/70'}`}>
                  {faq.question}
                </span>
                <span className={`text-2xl leading-none transition-transform duration-300 ${openIndex === i ? 'rotate-45 text-primary' : 'text-muted-foreground group-hover:text-foreground'}`}>
                  +
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
