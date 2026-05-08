"use client";

import { motion } from "framer-motion";
import { UserPlus, Wallet, Settings, Users, ClipboardList, Truck } from "lucide-react";

const modules = [
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: "Admissions Management",
    content: "Manage the entire admission lifecycle with a structured and efficient process. Orbis handles both online and offline enquiries, captures complete student and parent information, and tracks every interaction until admission closure."
  },
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "Flexible Fee Setup and Collection",
    content: "Define and manage customized fee structures based on academic year requirements. Orbis allows institutions to configure fee types, discounts, and rules while supporting multiple payment methods."
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Operational Activities Simplified",
    content: "Orbis streamlines day to day institutional activities including timetable management, attendance tracking, examinations, events, and administrative workflows."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Parents Informed and Connected",
    content: "Orbis enables continuous communication between institutions and parents through a dedicated portal and mobile application. Parents can access student information, academic updates, and track transportation."
  },
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: "Examinations and Performance Tracking",
    content: "Plan, conduct, and manage examinations with ease. Create flexible exam schedules, assign subjects, and generate hall tickets. Shared results instantly with multiple grading formats."
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Transportation Management",
    content: "Manage transportation operations with precision. Maintain vehicle details, routes, and staff information. GPS integration allows real time monitoring for safety and transparency."
  }
];

export default function OrbisModules() {
  return (
    <section className="py-24 bg-background relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="section-label !text-[#0E76BD] !border-[#0E76BD]/20">Core Modules</span>
          <h2 className="mt-6 flex flex-col items-start gap-2">
            <span className="hero-title-thin text-3xl md:text-4xl text-foreground">Everything You Need to</span>
            <span className="hero-title-bold text-5xl md:text-7xl text-[#0E76BD]">Run an Institution</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2rem] bg-secondary/40 dark:bg-white/[0.03] border border-border transition-all duration-500 group hover:border-[#0E76BD]/40"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0E76BD]/10 flex items-center justify-center text-[#0E76BD] mb-8 group-hover:scale-110 transition-transform">
                {mod.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground leading-tight">
                {mod.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                {mod.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
