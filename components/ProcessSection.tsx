'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Network, Database, Cpu, ShieldCheck } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Data Ingestion',
    description: 'Autonomous protocol syncs with institutional infrastructure.',
    icon: <Database className="w-5 h-5" />,
    color: 'blue'
  },
  {
    id: '02',
    title: 'Neural Synthesis',
    description: 'Nova processes raw data through cognitive logic layers.',
    icon: <Cpu className="w-5 h-5" />,
    color: 'teal'
  },
  {
    id: '03',
    title: 'Adaptive Routing',
    description: 'Information is dynamically routed to Orbis or Astra engines.',
    icon: <Network className="w-5 h-5" />,
    color: 'indigo'
  },
  {
    id: '04',
    title: 'Secure Delivery',
    description: 'Verified outputs are deployed to the ecosystem edge.',
    icon: <ShieldCheck className="w-5 h-5" />,
    color: 'slate'
  }
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center space-y-4 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[10px] font-black uppercase tracking-[0.4em] text-accent"
        >
          Operational_Workflow
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-black tracking-tight text-foreground uppercase italic"
        >
          High-Order <span className="text-accent">Execution</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-[2rem] border border-slate-200 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl hover:border-accent/20 transition-all duration-500 shadow-lg shadow-slate-200/40 dark:shadow-none"
          >
            <div className="absolute top-6 right-8 text-4xl font-black text-slate-100 dark:text-white/5 italic">
              {step.id}
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-accent/5 flex items-center justify-center text-accent border border-accent/10 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-inner">
                {step.icon}
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-bold tracking-tight text-foreground">{step.title}</h3>
                <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 font-light">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Decorative line */}
            <div className="absolute bottom-8 left-8 right-8 h-[1px] bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
