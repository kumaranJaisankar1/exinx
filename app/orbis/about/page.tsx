"use client";

import { motion } from "framer-motion";
import OrbisNavbar from "@/components/navbars/OrbisNavbar";
import OrbisFooter from "@/components/sections/OrbisFooter";
import { Globe, Target, Cpu, Shield, ArrowRight, Zap, Layers, CreditCard } from "lucide-react";

export default function OrbisAboutPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background selection:bg-[#0E76BD]/30 selection:text-[#0E76BD]">
            <OrbisNavbar />

            <div className="flex-1 flex flex-col justify-center px-6 md:px-20 mt-10 pt-20 mb-10">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Header */}
                    <div className="mb-12">
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-6xl font-black text-foreground mb-4 tracking-tighter"
                            style={{ fontFamily: 'Syne, sans-serif' }}
                        >
                            About <span className="text-[#0E76BD] ">Orbis.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed"
                        >
                            A comprehensive School Management Solution crafted with absolute passion to make everyday academic life effortless.
                            As a flagship initiative from Vanna IT, we specialize in high-precision institutional intelligence.
                        </motion.p>
                    </div>

                    {/* Compact Grid */}
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        {/* Column 1: Mission & Vision */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="p-6 bg-secondary/30 border border-border rounded-2xl relative overflow-hidden group"
                            >
                                <h3 className="text-[10px] font-mono tracking-[0.4em] uppercase text-[#0E76BD] mb-3 font-bold">Mission</h3>
                                <p className="text-sm font-bold text-foreground leading-snug">
                                    Affordable, reachable edutech innovations that enhance administrative and learning capabilities.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="p-6 bg-[#0E76BD] text-white rounded-2xl relative overflow-hidden group"
                            >
                                <h3 className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/60 mb-3 font-bold">Vision</h3>
                                <p className="text-sm font-bold leading-snug">
                                    To become a sustainable edutech unicorn through continuous, human-centric innovation.
                                </p>
                            </motion.div>
                        </div>

                        {/* Column 2: Highlights */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Cpu, title: "Cloud-Native", desc: "Zero maintenance apps." },
                                { icon: Layers, title: "Clean UI", desc: "Distraction-free flow." },
                                { icon: Zap, title: "Dynamic", desc: "Configurable dashboards." },
                                { icon: CreditCard, title: "Payments", desc: "Integrated gateways." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="p-4 bg-background border border-border rounded-xl group hover:border-[#0E76BD]/30 transition-all"
                                >
                                    <item.icon size={16} className="text-[#0E76BD] mb-2" />
                                    <h4 className="text-xs font-bold text-foreground mb-1">{item.title}</h4>
                                    <p className="text-[10px] text-muted-foreground leading-tight">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Column 3: Leadership & Precision */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="p-6 border border-border rounded-xl bg-secondary/20"
                            >
                                <h4 className="text-sm font-bold text-foreground mb-1">Ravi Babu Gunti</h4>
                                <p className="text-[#0E76BD] font-mono text-[9px] tracking-widest uppercase mb-3 font-bold">Governing Board</p>
                                <p className="text-[11px] text-muted-foreground font-light leading-relaxed">
                                    Leading with a vision to transform institutional management through digital excellence.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9 }}
                                className="p-6 bg-[#0E76BD]/5 rounded-xl border border-[#0E76BD]/10"
                            >
                                <h4 className="text-xs font-bold text-foreground mb-2 flex items-center gap-2">
                                    <Shield className="text-[#0E76BD]" size={14} />
                                    Messaging
                                </h4>
                                <p className="text-[11px] text-muted-foreground font-light leading-tight italic">
                                    "Automated fee notifications with manual flexibility. Precision communication at scale."
                                </p>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>

            <OrbisFooter />
        </main>
    );
}
