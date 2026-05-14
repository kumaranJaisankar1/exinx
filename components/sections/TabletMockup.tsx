"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Activity, Atom, Calculator, ChevronRight, Clock, FlaskConical, Layers, Microscope, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function TabletMockup({ subject }: { subject: string }) {
    const [seconds, setSeconds] = useState(45);

    const subjectContent: Record<string, any> = {
        "Mathematics": { icon: Calculator, color: "text-[#FF0000]", bg: "bg-[#FF0000]/10", topic: "Calculus", subTopic: "Derivatives", question: "If y = x² sin(x), find the derivative dy/dx at x = π.", options: ["-2π", "π", "0", "2π"] },
        "Physics": { icon: Atom, color: "text-[#FF0000]", bg: "bg-[#FF0000]/10", topic: "Mechanics", subTopic: "Kinematics", question: "A particle moves in a circle of radius R with constant speed V. Acceleration is:", options: ["V²/R", "V/R", "V/R²", "Zero"] },
        "Chemistry": { icon: FlaskConical, color: "text-[#FF0000]", bg: "bg-[#FF0000]/10", topic: "Organic", subTopic: "Chemical Bonding", question: "Which molecule has a linear shape?", options: ["BeCl₂", "H₂O", "SO₂", "NH₃"] },
        "Zoology": { icon: Microscope, color: "text-[#FF0000]", bg: "bg-[#FF0000]/10", topic: "Cell Bio", subTopic: "Mitochondria", question: "The powerhouse of the cell is known as:", options: ["Mitochondria", "Nucleus", "Ribosome", "Golgi Body"] },
        "Botany": { icon: Layers, color: "text-[#FF0000]", bg: "bg-[#FF0000]/10", topic: "Plant Physio", subTopic: "Photosynthesis", question: "Which pigment is directly involved in light reaction?", options: ["Chlorophyll-a", "Carotene", "Xanthophyll", "Chlorophyll-b"] }
    };

    const current = subjectContent[subject] || subjectContent["Chemistry"];

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(s => s > 0 ? s - 1 : 45);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative w-full aspect-[4/3] rounded-[3rem] bg-[#0A0C14] border-[8px] border-[#1a1c22] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden group"
        >
            <div className="h-full w-full bg-slate-50 flex flex-col">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={subject}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full w-full flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-white">
                            <div className="flex items-center gap-3">
                                <div className={`w-7 h-7 rounded-lg ${current.bg} flex items-center justify-center ${current.color}`}>
                                    <current.icon size={16} />
                                </div>
                                <div>
                                    <p className={`text-[9px] font-black uppercase ${current.color} leading-none`}>{subject}</p>
                                    <p className="text-[11px] font-bold text-slate-900 leading-tight">{current.topic} / {current.subTopic}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-50 text-[#FF0000] border border-red-100">
                                    <Clock size={12} className="animate-pulse" />
                                    <span className="text-[10px] font-black">00:{seconds < 10 ? `0${seconds}` : seconds}</span>
                                </div>
                            </div>
                        </div>

                        {/* Main Session Frame - Viewport Locked */}
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div className="space-y-3">
                                <p className={`text-[9px] font-black ${current.color} uppercase tracking-widest`}>Question 14 of 25</p>
                                <h4 className="text-[15px] font-bold text-slate-800 leading-relaxed max-w-[95%]">
                                    {current.question}
                                </h4>
                            </div>

                            <div className="grid grid-cols-2 gap-3 pb-2">
                                {current.options.map((option: string, i: number) => (
                                    <div key={i} className={`px-4 py-3 rounded-xl border-2 transition-all font-bold text-[13px]
                                        ${i === 0 ? `bg-[#FF0000]/5 border-[#FF0000]/20 text-[#FF0000] shadow-sm` : 'bg-white border-slate-100 text-slate-600 hover:border-slate-200'}`}>
                                        <span className="opacity-40 mr-2">{String.fromCharCode(65 + i)}.</span>
                                        {option}
                                    </div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                                <div className="flex gap-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-[#FF0000]' : 'bg-slate-200'}`} />
                                    ))}
                                </div>
                                <button className="bg-[#FF0000] text-white px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#FF0000]/90 shadow-lg shadow-[#FF0000]/20 transition-all flex items-center gap-2">
                                    Submit <ChevronRight size={12} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Sidebar Controls Overlay */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 pointer-events-none">
                <motion.div
                    animate={{ x: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="p-3 rounded-2xl bg-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl">
                    <Activity size={18} className="text-[#FF0000]" />
                </motion.div>
                <motion.div
                    animate={{ x: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="p-3 rounded-2xl bg-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl">
                    <TrendingUp size={18} className="text-green-400" />
                </motion.div>
            </div>
        </motion.div>
    );
}
