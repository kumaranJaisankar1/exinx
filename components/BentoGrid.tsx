'use client';

import { motion } from 'motion/react';
import { BookOpen, Brain, Zap, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface BentoBoxProps {
    title: string;
    subtitle?: string;
    description: string;
    features: string[];
    icon: React.ReactNode;
    className?: string;
    accentColor?: 'brand' | 'gold' | 'slate';
    delay?: number;
    visual?: React.ReactNode;
}

const BentoBox = ({ title, subtitle, description, features, icon, className, accentColor = 'slate', delay = 0, visual }: BentoBoxProps) => {
    const moduleIds = {
        brand: 'NX-01',
        gold: 'AS-07',
        slate: 'OR-04'
    };

    const accentClasses = {
        brand: 'bg-accent/5 dark:bg-accent/5 border-accent/20 dark:border-accent/20 hover:border-accent/40 ring-1 ring-accent/10',
        gold: 'bg-amber-500/5 dark:bg-amber-950/10 border-amber-500/20 hover:border-amber-400 shadow-none',
        slate: 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 shadow-none'
    };

    const titleClasses = {
        brand: 'text-accent',
        gold: 'text-amber-600 dark:text-amber-500',
        slate: 'text-slate-800 dark:text-slate-200'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className={cn(
                "group relative overflow-hidden rounded-[32px] border p-8 md:p-10 backdrop-blur-md transition-all duration-500",
                accentClasses[accentColor as keyof typeof accentClasses],
                className
            )}
        >
            {/* Module ID Tag */}
            <div className="absolute top-0 right-12 px-4 py-1.5 bg-slate-100 dark:bg-white/5 border-x border-b border-slate-200 dark:border-white/10 rounded-b-xl text-[9px] font-mono text-slate-500 tracking-widest z-20">
                MODULE_ID: {moduleIds[accentColor as keyof typeof moduleIds]}
            </div>

            <div className="relative z-10 h-full flex flex-col md:flex-row gap-8 lg:gap-12">
                <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-6 lg:mb-8">
                        <div className={cn("p-3 lg:p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform duration-500", titleClasses[accentColor as keyof typeof titleClasses])}>
                            {icon}
                        </div>
                        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/5">
                            System {accentColor === 'brand' ? 'Active' : accentColor === 'gold' ? 'Optimized' : 'Ready'}
                        </div>
                    </div>

                    <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                        <h3 className={cn("text-2xl lg:text-3xl font-display font-bold leading-tight", titleClasses[accentColor as keyof typeof titleClasses])}>
                            {title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light line-clamp-3 italic">
                            &quot;{description}&quot;
                        </p>
                    </div>

                    <div className="space-y-4 lg:space-y-6">
                        <div className="grid grid-cols-1 gap-2 lg:gap-3">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                    <div className={cn("w-1.5 h-1.5 rounded-full", i === 0 ? (accentColor === 'brand' ? "bg-accent" : accentColor === 'gold' ? "bg-amber-500" : "bg-slate-400 dark:bg-slate-300") : "bg-slate-300 dark:bg-slate-700")} />
                                    {feature}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 border-t border-slate-200 dark:border-white/5 pt-6">
                            <div>
                                <div className="text-[8px] font-mono text-slate-500 mb-1">LATENCY</div>
                                <div className={cn("text-xs font-mono", titleClasses[accentColor as keyof typeof titleClasses])}>14ms</div>
                            </div>
                            <div>
                                <div className="text-[8px] font-mono text-slate-500 mb-1">SYNC_RATE</div>
                                <div className={cn("text-xs font-mono", titleClasses[accentColor as keyof typeof titleClasses])}>99.4%</div>
                            </div>
                            <div className="hidden sm:block lg:hidden xl:block">
                                <div className="text-[8px] font-mono text-slate-500 mb-1">THROUGHPUT</div>
                                <div className={cn("text-xs font-mono", titleClasses[accentColor as keyof typeof titleClasses])}>4.2GB/s</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest">
                            {subtitle}
                        </span>
                        <motion.div
                            whileHover={{ x: 5, y: -5 }}
                            className={cn("cursor-pointer", titleClasses[accentColor as keyof typeof titleClasses])}
                        >
                            <ArrowUpRight size={20} />
                        </motion.div>
                    </div>
                </div>

                {visual && (
                    <div className="hidden lg:block flex-1 relative min-h-[300px]">
                        {visual}
                    </div>
                )}
            </div>

            {/* Subtle Gradient Glow */}
            <div className={cn(
                "absolute -bottom-20 -right-20 w-64 h-64 blur-[100px] opacity-10 dark:opacity-20 transition-opacity duration-700 group-hover:opacity-30 dark:group-hover:opacity-40",
                accentColor === 'brand' ? "bg-accent" : accentColor === 'gold' ? "bg-amber-500" : "bg-slate-500"
            )} />
        </motion.div>
    );
};

const CognitiveVisual = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    if (!isMounted) return <div className="absolute inset-0" />;

    return (
        <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full h-full max-w-[400px] max-h-[400px]">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1]"
                    style={{ backgroundImage: 'radial-gradient(circle, var(--accent) 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }} />

                {/* Central Core with Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.15, 0.35, 0.15]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="w-64 h-64 bg-accent/20 rounded-full blur-[100px]"
                    />
                    <div className="relative z-10 w-40 h-40 border border-slate-200 dark:border-accent/10 rounded-full flex items-center justify-center backdrop-blur-md bg-white/50 dark:bg-white/5 shadow-sm dark:shadow-none">
                        <Brain size={56} className="text-accent opacity-80" />

                        {/* Inner scanning ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-2 border-t border-l border-accent/30 dark:border-accent/20 rounded-full"
                        />
                    </div>
                </div>

                {/* Orbiting Nodes with connecting lines */}
                {[1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20 + i * 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border border-accent/10 dark:border-accent/5 rounded-full"
                        style={{ margin: `${i * 35}px` }}
                    >
                        <motion.div
                            animate={{
                                opacity: [0.3, 1, 0.3],
                                scale: [0.8, 1.2, 0.8]
                            }}
                            transition={{ duration: 4, delay: i, repeat: Infinity }}
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_15px_var(--accent)]"
                        />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[50%] w-[1px] bg-gradient-to-t from-accent/0 to-accent/20 origin-bottom" />
                    </motion.div>
                ))}

                {/* Scanning Line Effect */}
                <motion.div
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent z-20 pointer-events-none"
                />

                {/* Data Infographics Overlay */}
                <div className="absolute inset-0 pointer-events-none p-4">
                    <div className="absolute top-[15%] left-[5%] bg-white/80 dark:bg-accent/10 border border-slate-200 dark:border-accent/20 rounded-md p-1.5 backdrop-blur-xl shadow-sm dark:shadow-none">
                        <div className="text-[7px] font-mono text-accent uppercase">Input_Stream</div>
                        <div className="text-[9px] font-mono text-slate-800 dark:text-white">4.8 GB/s</div>
                    </div>

                    <div className="absolute bottom-[25%] right-[5%] bg-white/80 dark:bg-accent/10 border border-slate-200 dark:border-accent/20 rounded-md p-1.5 backdrop-blur-xl text-right shadow-sm dark:shadow-none">
                        <div className="text-[7px] font-mono text-accent uppercase">Logic_Auth</div>
                        <div className="text-[9px] font-mono text-accent">VERIFIED</div>
                    </div>

                    <div className="absolute bottom-[10%] left-[30%] flex gap-1">
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ height: [4, 12, 4] }}
                                transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
                                className="w-1 bg-accent/40 dark:bg-accent/30 rounded-full"
                            />
                        ))}
                    </div>

                    <motion.div
                        animate={{ x: [0, 20, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-[45%] right-[15%] text-[6px] font-mono text-slate-500"
                    >
                        REF_X78_SYNC...
                    </motion.div>
                </div>

                {/* System Logs */}
                <div className="absolute bottom-6 left-6 font-mono text-[7px] text-accent/60 dark:text-accent/30 leading-loose">
                    <div className="animate-pulse">&gt; NEURAL_MAP_COMPLETE</div>
                    <div>&gt; COGNITIVE_THREAD_STABLE</div>
                    <div>&gt; NO_ANOMALIES_DETECTED</div>
                </div>
            </div>
        </div>
    );
};

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);
    if (!isMounted) return null;
    return <>{children}</>;
};

export default function BentoGrid() {
    return (
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <div className="mb-20 space-y-6">
                <div className="flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-accent" />
                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent">Ecosystem Overview</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-slate-900 dark:text-white">
                    Unified Intelligence. <br className="hidden md:block" />
                    Seamless Integration.
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
                    The EXINX suite connects management, cognition, and practice into a single, autonomous architecture designed for elite performance.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Nova - Main Card (Full Width on Top) */}
                <BentoBox
                    title="Nova (MindIQX)"
                    subtitle="Logic & Cognition"
                    description="The high-order cognitive layer for complex logical orchestration. Nova handles the heavy lifting of decision-making and pattern recognition."
                    features={[
                        "Autonomous Decision-Making Engines",
                        "Advanced Cognitive Logic Flows",
                        "Predictive Behavioral Modeling",
                        "Real-time Knowledge Synthesis"
                    ]}
                    icon={<Brain size={32} />}
                    accentColor="brand"
                    className="lg:col-span-12"
                    delay={0.1}
                    visual={<CognitiveVisual />}
                />

                {/* Orbis (Bottom Left) */}
                <BentoBox
                    title="Orbis"
                    subtitle="Institutional Control"
                    description="The command center for complex educational lifecycle management. Orbis bridges the gap between infrastructure and experience."
                    features={[
                        "Student Lifecycle Automation",
                        "Ecosystem Resource Tracking",
                        "Administrative Logic Layer"
                    ]}
                    icon={<BookOpen size={32} />}
                    accentColor="slate"
                    className="lg:col-span-6"
                    delay={0.2}
                    visual={
                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                            <div className="grid grid-cols-2 gap-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                                        transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                                        className="w-8 h-8 rounded-lg bg-slate-300 dark:bg-slate-500/20 border border-slate-300 dark:border-slate-500/20"
                                    />
                                ))}
                            </div>
                        </div>
                    }
                />

                {/* Astra (Bottom Right) */}
                <BentoBox
                    title="Astra"
                    subtitle="Academic Precision"
                    description="Precision engineering for examination and academic practice. Astra transforms evaluation through data-driven synthesis."
                    features={[
                        "Dynamic Question Synthesis",
                        "Adaptive Difficulty Scaling",
                        "Performance Prediction"
                    ]}
                    icon={<Zap size={32} />}
                    accentColor="gold"
                    className="lg:col-span-6"
                    delay={0.3}
                    visual={
                        <div className="absolute inset-0 flex items-center justify-center opacity-40">
                            <ClientOnly>
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: [0, 90, 180, 270, 360] }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="w-32 h-32 border border-amber-500/30 dark:border-amber-500/20 rounded-full flex items-center justify-center"
                                    >
                                        <div className="w-16 h-[1px] bg-amber-500/40 dark:bg-amber-500/30" />
                                    </motion.div>
                                </div>
                            </ClientOnly>
                        </div>
                    }
                />

                {/* Call to Action Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-12 mt-12 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 backdrop-blur-3xl overflow-hidden relative"
                >
                    <div className="space-y-4 relative z-10 text-center md:text-left">
                        <h4 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">Ready to integrate <br className="hidden md:block" /> the future?</h4>
                        <p className="text-slate-600 dark:text-slate-400 max-w-md font-light text-sm md:text-base">Join the private network of institutions already operating on the EXINX architecture.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 relative z-10 w-full sm:w-auto">
                        <button className="px-8 md:px-12 py-4 md:py-5 bg-accent text-white font-bold rounded-full hover:bg-accent/80 transition-all hover:scale-105 shadow-[0_0_40px_rgba(var(--accent-rgb),0.2)] dark:shadow-[0_0_40px_rgba(0,213,190,0.2)] uppercase text-[10px] md:text-xs tracking-widest whitespace-nowrap">
                            Request Deployment
                        </button>
                        <button className="px-8 md:px-12 py-4 md:py-5 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white font-bold rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-[10px] md:text-xs tracking-widest uppercase whitespace-nowrap">
                            Technical Audit
                        </button>
                    </div>

                    {/* Abstract BG Decor */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 dark:from-accent/5 to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
