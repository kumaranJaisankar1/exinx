"use client";
import React from 'react';
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Calendar,
  ClipboardCheck,
  BookOpen,
  FileText,
  Video,
  MonitorPlay,
  GraduationCap,
  Bell,
  UserPlus,
  MapPin,
  Bus,
  ShieldCheck,
  Search,
  Download
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Dashboard Management",
    icon: LayoutDashboard,
    desc: "Personalized views for students, parents, and teachers.",
    color: "bg-blue-500"
  },
  {
    title: "Attendance Entry",
    icon: ClipboardCheck,
    desc: "Real-time attendance tracking with automated alerts.",
    color: "bg-emerald-500"
  },
  {
    title: "Homework & Notes",
    icon: BookOpen,
    desc: "Digitize assignments and access academic notes on the go.",
    color: "bg-amber-500"
  },
  {
    title: "Fee Management",
    icon: ShieldCheck,
    desc: "Secure online payments and automated fee collection.",
    color: "bg-rose-500"
  },
  {
    title: "Vehicle Tracking",
    icon: Bus,
    desc: "Live GPS tracking for peace of mind during transit.",
    color: "bg-indigo-500"
  },
  {
    title: "Circular & Alerts",
    icon: Bell,
    desc: "Instant institutional updates and urgent notifications.",
    color: "bg-purple-500"
  }
];

const mockIcons = [
  { icon: LayoutDashboard, label: "DASHBOARD" },
  { icon: Calendar, label: "CALENDAR" },
  { icon: ClipboardCheck, label: "ATTENDANCE" },
  { icon: FileText, label: "HOMEWORK" },
  { icon: BookOpen, label: "ACADEMIC NOTES" },
  { icon: Video, label: "ACADEMIC VIDEO" },
  { icon: MonitorPlay, label: "LIVE CLASS" },
  { icon: Search, label: "ONLINE EXAM" },
  { icon: GraduationCap, label: "SYLLABUS" },
  { icon: Bell, label: "CIRCULAR" },
  { icon: UserPlus, label: "APPLY LEAVE" },
  { icon: Calendar, label: "DAILY TIMETABLE" },
  { icon: ShieldCheck, label: "CERTIFICATE" },
  { icon: MapPin, label: "DAILY ACTIVITY" },
  { icon: Download, label: "DOWNLOAD" },
];

export default function OrbisMobileEcosystem() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[#0E76BD]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-mono tracking-[0.5em] uppercase text-[#0E76BD] mb-4 block"
          >
            Omnichannel Connectivity
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-light text-foreground tracking-tighter mb-8"
          >
            Institutional Power, <br />
            <span className="font-instrument-serif italic text-[#0E76BD]">In Your Pocket</span>
          </motion.h2>
          <p className="text-lg text-foreground/50 max-w-2xl mx-auto font-light leading-relaxed">
            The Orbis mobile ecosystem bridges the gap between administrators, teachers, students, and parents with an integrated, high-performance experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Side Features */}
          <div className="lg:col-span-4 space-y-12">
            {features.slice(0, 3).map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-left"
              >
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-xl group-hover:scale-110 transition-transform duration-500", f.color)}>
                  <f.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-foreground/40 font-light leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Mobile Mockup */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-[300px] h-[600px] bg-slate-950 rounded-[3rem] border-[8px] border-slate-900 shadow-[0_40px_80px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              {/* Phone Notch/Dynamic Island */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20" />

              {/* App Content */}
              <div className="absolute inset-0 bg-slate-50 flex flex-col pt-10 px-4">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#0E76BD] to-[#25aae1] rounded-2xl p-4 text-white mb-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-bold">K</div>
                    <div>
                      <p className="text-[10px] opacity-80 uppercase tracking-wider">Dashboard</p>
                      <p className="text-sm font-bold">KUMKUM</p>
                    </div>
                  </div>
                </div>

                {/* Sub Header / Quick Actions */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {['Switch Sibling', 'Session', 'Due Fee'].map((item, i) => (
                    <div key={i} className="bg-white rounded-xl p-2 flex flex-col items-center justify-center shadow-sm border border-slate-100">
                      <div className="w-6 h-6 rounded-lg bg-[#0E76BD]/10 mb-1 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#0E76BD]" />
                      </div>
                      <span className="text-[8px] text-slate-400 font-bold uppercase text-center">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-3 gap-3 overflow-y-hidden pb-10 scrollbar-hide">
                  {mockIcons.map((m, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 group">
                      <div className="w-full aspect-square bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-[#0E76BD]/5 transition-colors">
                        <m.icon size={20} className="text-[#0E76BD]" />
                      </div>
                      <span className="text-[7px] text-slate-500 font-bold uppercase text-center tracking-tighter leading-tight">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reflection Shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Side Features */}
          <div className="lg:col-span-4 space-y-12">
            {features.slice(3, 6).map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-right lg:text-left lg:pl-12"
              >
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ml-auto lg:ml-0 border border-white/10 shadow-xl group-hover:scale-110 transition-transform duration-500", f.color)}>
                  <f.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-foreground/40 font-light leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
