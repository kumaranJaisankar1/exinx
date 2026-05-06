"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function SignalFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("open-signal-form", handleOpen);
    window.addEventListener("keydown", handleEsc);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setTimeout(() => {
        setIsSuccess(false);
        setIsSubmitting(false);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      }, 500);
    }

    return () => {
      window.removeEventListener("open-signal-form", handleOpen);
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsOpen(false), 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-6"
        >
          <motion.div
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(40px)" }}
            className="absolute inset-0 bg-black/80"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[4px] shadow-[0_0_100px_rgba(240,112,80,0.1)] max-h-[90vh] flex flex-col overflow-hidden"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#f07050] via-[#ff9d00] to-[#f07050] opacity-50 flex-shrink-0" />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
              {!isSuccess ? (
                <>
                  <div className="mb-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 text-[#f07050] font-mono text-[9px] tracking-[0.4em] uppercase mb-3"
                    >
                      <span className="w-6 h-px bg-[#f07050]" />
                      Direct Frequency
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-3">
                      Signal <span className="font-instrument-serif italic font-normal text-white/40">the Future.</span>
                    </h2>
                    <p className="text-sm text-white/50 font-light">
                      Initialize a structured institutional partnership.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[9px] uppercase tracking-widest text-white/30 font-medium ml-1">First Name</label>
                        <input
                          required
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-[2px] px-4 py-3 text-white focus:outline-none focus:border-[#f07050]/50 transition-all font-light text-sm"
                          placeholder="Alan"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[9px] uppercase tracking-widest text-white/30 font-medium ml-1">Last Name</label>
                        <input
                          required
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-[2px] px-4 py-3 text-white focus:outline-none focus:border-[#f07050]/50 transition-all font-light text-sm"
                          placeholder="Turing"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-widest text-white/30 font-medium ml-1">Email</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-[2px] px-4 py-3 text-white focus:outline-none focus:border-[#f07050]/50 transition-all font-light text-sm"
                        placeholder="contact@institution.edu"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-widest text-white/30 font-medium ml-1">Message (Optional)</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-[2px] px-4 py-3 text-white focus:outline-none focus:border-[#f07050]/50 transition-all font-light resize-none text-sm"
                        placeholder="Project requirements..."
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full overflow-hidden bg-white text-black font-bold py-4 rounded-[2px] transition-all hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <div className="relative z-10 flex items-center justify-center gap-3 tracking-widest uppercase text-[10px]">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full"
                              />
                              Broadcasting...
                            </>
                          ) : (
                            <>
                              Transmit Signal
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </div>
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-3 text-white/20 pt-2">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span className="text-[9px] uppercase tracking-widest">Secure Institutional Channel</span>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-[#f07050]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#f07050]/30"
                  >
                    <CheckCircle2 className="w-10 h-10 text-[#f07050]" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-white mb-3"
                  >
                    Signal Received.
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-sm text-white/40 max-w-sm mx-auto font-light"
                  >
                    We have intercepted your coordinates. A deployment strategist will respond shortly via secure channels.
                  </motion.p>
                </div>
              )}
            </div>

            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[#f07050]/5 blur-[80px] rounded-full pointer-events-none" />
          </motion.div>
        </motion.div>
      )}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </AnimatePresence>
  );
}
