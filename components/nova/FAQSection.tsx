"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does Nova personalize learning?",
    answer: "Nova uses a proprietary Cognitive Intelligence Engine that monitors over 50 data points per interaction—including response speed, mistake patterns, and conceptual confidence—to build a unique model of how you think."
  },
  {
    question: "Does Nova align with my syllabus?",
    answer: "Yes. Nova is syllabus-agnostic. It maps core pedagogical concepts to specific board requirements like CBSE, ICSE, NCERT, and international standards, ensuring you're always on track with your exams."
  },
  {
    question: "Is there a free trial?",
    answer: "Absolutely. We offer a full-access 7-day free trial. You can experience the entire Nova core, including the AI study companion and deep analytics, without any upfront commitment."
  },
  {
    question: "Can Nova adapt for different students?",
    answer: "Every Nova instance is entirely unique. Two students studying the same topic will receive different explanations, analogies, and assessments based on their individual cognitive profiles."
  }
];

const FAQItem = ({ faq, isOpen, toggle }: { faq: typeof faqs[0], isOpen: boolean, toggle: () => void }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={toggle}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <h3 className={`text-xl md:text-2xl font-bold transition-colors ${isOpen ? 'text-orange-400' : 'text-white group-hover:text-orange-300'}`}>
          {faq.question}
        </h3>
        <div className={`p-2 rounded-full border ${isOpen ? 'border-orange-500/50 bg-orange-500/10' : 'border-white/10 group-hover:border-white/30'}`}>
          {isOpen ? <Minus size={20} className="text-orange-400" /> : <Plus size={20} className="text-white" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-lg text-gray-400 max-w-4xl leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-syne mb-6"
          >
            Common <span className="text-orange-400">Questions.</span>
          </motion.h2>
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-[40px] px-8 md:px-12">
          {faqs.map((faq, i) => (
            <FAQItem 
              key={i} 
              faq={faq} 
              isOpen={openIndex === i} 
              toggle={() => setOpenIndex(openIndex === i ? null : i)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
