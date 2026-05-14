"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Layers,
  GraduationCap,
  FileText,
  Clock,
  Target,
  Zap,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Trophy
} from "lucide-react";
import IyotaNavbar from "@/components/navbars/IyotaNavbar";
import IyotaFooter from "@/components/sections/IyotaFooter";
import CustomCursor from "@/components/CustomCursor";
// import ThemeToggle from "@/components/ThemeToggle";
import ScrollToTop from "@/components/ScrollToTop";
import TabletMockup from "@/components/sections/TabletMockup";

// --- Placeholder Components for missing dependencies ---

const DemoRequestModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="relative bg-background border border-border p-12 rounded-[2px] max-w-md w-full text-center z-10">
          <h2 className="text-2xl font-bold uppercase mb-4 tracking-tighter">Request a Demo</h2>
          <p className="text-muted-foreground mb-8 font-light">This feature is coming soon to the EXINX platform.</p>
          <button onClick={onClose} className="w-full py-4 bg-primary text-white font-bold uppercase tracking-widest text-[10px] rounded-[2px]">Close</button>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const AuthModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="relative bg-background border border-border p-12 rounded-[2px] max-w-md w-full text-center z-10">
          <h2 className="text-2xl font-bold uppercase mb-4 tracking-tighter">Get Started</h2>
          <p className="text-muted-foreground mb-8 font-light">Authentication is being integrated with the EXINX Core system.</p>
          <button onClick={onClose} className="w-full py-4 bg-primary text-white font-bold uppercase tracking-widest text-[10px] rounded-[2px]">Close</button>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const PricingSection = ({ setIsAuthModalOpen }: { setIsAuthModalOpen: (open: boolean) => void }) => (
  <section id="pricing" className="py-32 bg-secondary/10 border-t border-border">
    <div className="container px-6 text-center">
      <SectionHeader badge="Pricing" title="Flexible Plans" highlight="For Every Student" description="Choose the plan that fits your preparation stage." />
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {['Foundation', 'Pro', 'Elite'].map((plan, i) => (
          <div key={plan} className={`p-12 rounded-[2px] border transition-all duration-500 hover:translate-y-[-5px] ${i === 1 ? 'bg-background border-[#FF0000] text-foreground shadow-2xl shadow-[#FF0000]/10 relative overflow-hidden' : 'bg-background border-border text-foreground hover:border-[#FF0000]/30 shadow-sm'}`}>
            {i === 1 && <div className="absolute top-0 right-0 bg-[#FF0000] text-white text-[8px] font-black px-3 py-1 uppercase tracking-widest">Most Popular</div>}
            <h3 className="text-xl font-bold uppercase mb-2 tracking-tighter text-foreground">{plan}</h3>
            <div className="text-5xl font-bold mb-8 tracking-tighter">₹{i === 0 ? '499' : i === 1 ? '999' : '1999'}<span className="text-xs font-light text-muted-foreground"> / MONTH</span></div>
            <ul className="space-y-4 mb-12 text-left text-sm font-light text-muted-foreground">
              <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[#FF0000]" /> Adaptive Mock Tests</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[#FF0000]" /> Performance Analytics</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[#FF0000]" /> Subject-wise Practice</li>
            </ul>
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className={`w-full py-5 rounded-[2px] font-bold uppercase tracking-[0.2em] text-[10px] transition-all ${i === 1 ? 'bg-[#FF0000] text-white hover:bg-[#FF0000]/90 shadow-xl shadow-[#FF0000]/20' : 'bg-[#FF0000] text-white hover:scale-[1.02]'}`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);


// --- Local Styled Components ---

const SectionHeader = ({ badge, title, highlight, description, align = "center", dark = false }: { badge: string, title: string, highlight?: string, description: string, align?: "left" | "center", dark?: boolean }) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"} mb-16`}>
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="font-mono text-[10px] tracking-[0.5em] uppercase mb-6 block font-bold text-[#FF0000]"
    >
      {badge}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`text-4xl md:text-6xl font-bold tracking-tighter mb-8 ${dark ? 'text-white' : 'text-foreground'} leading-[1.1]`}
    >
      {title} {highlight && (
        <span className="font-instrument-serif italic font-normal text-[#FF0000]">
          {highlight}.
        </span>
      )}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`text-base md:text-lg font-light leading-relaxed ${dark ? 'text-white/60' : 'text-muted-foreground'}`}
    >
      {description}
    </motion.p>
  </div>
);

const JourneyStep = ({ icon: Icon, title, description, step, isLast }: { icon: any, title: string, description: string, step: number, isLast?: boolean }) => (
  <div className="relative flex flex-col items-center group w-full max-w-[300px]">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#FF0000] to-[#FF0000]/60 p-[2px] shadow-2xl group-hover:scale-110 transition-transform duration-500"
    >
      <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-[#FF0000] overflow-hidden">
        <Icon size={36} className="relative z-10" />
        <div className="absolute inset-0 bg-[#FF0000]/10 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full" />
      </div>
      <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center font-black text-sm border-4 border-background shadow-xl">
        0{step}
      </div>
    </motion.div>

    {!isLast && (
      <div className="hidden lg:block absolute left-[calc(50%+3rem)] top-12 w-[calc(100%-6rem)] h-[2px] bg-border overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-gradient-to-r from-transparent via-[#FF0000] to-transparent opacity-50"
        />
      </div>
    )}

    <div className="mt-8 text-center px-4">
      <h3 className="text-xl font-black text-foreground mb-3 tracking-tight group-hover:text-[#FF0000] transition-colors uppercase">{title}</h3>
      <p className="text-muted-foreground font-medium leading-relaxed text-sm">
        {description}
      </p>
    </div>
  </div>
);

const BentoCard = ({ title, desc, icon: Icon, stats, className, dark }: { title: string, desc: string, icon: any, stats: string, className?: string, dark?: boolean }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`relative overflow-hidden rounded-[2px] p-10 group transition-all duration-500 ${className} 
            ${dark
        ? 'bg-[#FF0000] text-white shadow-2xl shadow-[#FF0000]/20'
        : 'bg-secondary/30 border-border shadow-sm hover:border-[#FF0000]/30'} border`}
  >
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-10">
          <div className={`w-12 h-12 rounded-full ${dark ? 'bg-white/20' : 'bg-[#FF0000]/10'} flex items-center justify-center ${dark ? 'text-white' : 'text-[#FF0000]'}`}>
            <Icon size={22} />
          </div>
          <div className={`px-3 py-1 rounded-[2px] ${dark ? 'bg-white/10 border-white/20' : 'bg-muted border-border'} border`}>
            <span className={`text-[9px] font-bold uppercase tracking-widest ${dark ? 'text-white/70' : 'text-muted-foreground'}`}>{stats}</span>
          </div>
        </div>

        <h4 className={`text-xl lg:text-2xl font-bold tracking-tight mb-4 leading-tight ${dark ? 'text-white' : 'text-foreground'}`}>
          {title}
        </h4>
        <p className={`text-sm font-light leading-relaxed ${dark ? 'text-white/80' : 'text-muted-foreground'}`}>
          {desc}
        </p>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <button className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] ${dark ? 'text-white' : 'text-[#FF0000]'} group-hover:gap-3 transition-all`}>
          Explore Feature <ArrowRight size={14} />
        </button>
      </div>
    </div>
  </motion.div>
);

const StatBadge = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex items-center gap-5 text-left p-6 rounded-[2px] bg-background border border-border hover:border-[#FF0000]/30 transition-all group relative overflow-hidden h-32 w-full shadow-sm"
  >
    <div className={`w-12 h-12 rounded-full bg-[#FF0000]/10 flex items-center justify-center text-[#FF0000] shrink-0 group-hover:scale-110 transition-all duration-500`}>
      <Icon size={24} />
    </div>

    <div className="flex flex-col min-w-0">
      <h4 className="text-lg font-bold text-foreground truncate mb-1 group-hover:text-[#FF0000] transition-colors">
        {title}
      </h4>
      <p className="text-sm font-light text-muted-foreground leading-snug">
        {description}
      </p>
    </div>
  </motion.div>
);

const CockpitSelector = ({ label, value, active }: { label: string, value: string, active?: boolean }) => (
  <div className={`flex items-center justify-between px-6 py-4 rounded-[2px] border transition-all duration-300 group cursor-pointer h-20
        ${active
      ? 'bg-[#FF0000] border-[#FF0000] text-white shadow-xl shadow-[#FF0000]/20 scale-[1.02]'
      : 'bg-background border-border text-foreground hover:border-[#FF0000]/30'}`}>
    <div className="flex flex-col min-w-0">
      <span className={`text-[9px] uppercase font-bold tracking-[0.3em] mb-1 ${active ? 'text-white/60' : 'text-muted-foreground'}`}>{label}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 5 }}
          className="font-bold text-[14px] whitespace-nowrap overflow-hidden text-ellipsis block uppercase tracking-tight"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
    <div className={`p-2 rounded-full shrink-0 ${active ? 'bg-white/20' : 'bg-muted'} group-hover:translate-x-1 transition-transform ml-2`}>
      {active ? <CheckCircle2 size={16} /> : <ChevronRight size={16} />}
    </div>
  </div>
);

// --- Student Hero Component (Preserving layout but updating theme) ---
const StudentHero = ({ badge, title, highlightTitle, description, primaryButtonText, onPrimaryClick, imageSrc }: any) => (
  <section className="relative h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-[#05060A] dark text-white">
    {/* Background Banner Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src="/images/hero/student-hero-banner.png" 
        alt="Hero Banner" 
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060A] via-transparent to-[#05060A]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#05060A] via-transparent to-[#05060A] opacity-80" />
    </div>

    <div className="container relative z-10 px-6 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="font-mono text-[9px] tracking-[0.5em] uppercase mb-6 block font-bold text-[#FF0000]"
      >
        {badge}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-[clamp(1.8rem,5.5vw,4.2rem)] font-bold text-white mb-6 leading-[1.05] max-w-5xl mx-auto tracking-tighter"
      >
        {title} <br />
        <span className="font-instrument-serif italic font-normal text-[#FF0000]">
          {highlightTitle}.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl text-sm md:text-base text-white/60 font-light mb-10 leading-relaxed"
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-6"
      >
        <button
          onClick={onPrimaryClick}
          className="px-10 py-4 bg-[#FF0000] text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-[2px] shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            {primaryButtonText}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </motion.div>
    </div>
  </section>
);

export default function IyotaStudentsPage() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Subject Looping Logic
  const subjects = ["Mathematics", "Physics", "Chemistry", "Zoology", "Botany"];
  const [activeIndex, setActiveIndex] = useState(0);

  const subjectMeta: Record<string, any> = {
    "Mathematics": { topic: "Calculus", sub: "Derivatives" },
    "Physics": { topic: "Mechanics", sub: "Kinematics" },
    "Chemistry": { topic: "Organic", sub: "Bonding" },
    "Zoology": { topic: "Cell Bio", sub: "Mitochondria" },
    "Botany": { topic: "Plant Physio", sub: "Photosynthesis" }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % subjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [subjects.length]);

  return (
    <main
      className="relative bg-background overflow-x-hidden transition-colors duration-500"
      style={{
        '--primary': '#FF0000',
        '--accent': '#FF0000',
        '--ring': '#FF0000',
      } as React.CSSProperties}
    >
      <div className="dark text-foreground">
        <CustomCursor />
        <IyotaNavbar />
        <ScrollToTop />

        <div className="relative z-10">
          <StudentHero
            badge="Personalized Learning Infrastructure"
            title="Master JEE Mains & NEET"
            highlightTitle="Within Your Syllabus"
            description="IyotaPrep enables students from Class 6 to 12 to practice JEE and NEET–level questions in alignment with their current learning stage. By focusing only on what they have already studied, the platform ensures clear understanding, reduces overwhelm, and builds strong conceptual foundations."
            primaryButtonText="Get Started"
            onPrimaryClick={() => setIsAuthModalOpen(true)}
            imageSrc="/images/hero/student-hero-banner.png"
          />

          <div className="overflow-hidden">
            {/* Section 2: Mock Test Types */}
            <section className="min-h-screen py-35 flex items-center bg-background relative border-y border-border">

              <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
                <SectionHeader
                  badge="Unique Value"
                  title="Experience Structured"
                  highlight="Mock Progression"
                  description="Experience the structured mock progression designed to match each stage of learning. Practice strictly within your current syllabus, ensuring clarity without unnecessary overwhelm."
                />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-5">
                  <BentoCard
                    title="Full Mock Exams"
                    desc="Comprehensive full-length practice tests to evaluate your overall exam readiness."
                    icon={FileText}
                    stats="Full Duration"
                    className="md:col-span-7"
                  />
                  <BentoCard
                    title="Half Mock Exams"
                    desc="Focused practice sessions covering specific subject blocks or units."
                    icon={Clock}
                    stats="Half Duration"
                    className="md:col-span-5"
                  />
                  <BentoCard
                    title="Class-Wise Mocks"
                    desc="Standardized practice tailored for Class 6th to 12th curriculum."
                    icon={BookOpen}
                    stats="Foundation"
                    className="md:col-span-4"
                  />
                  <BentoCard
                    title="Syllabus-Wise Mocks"
                    desc="Practice questions aligned with your current syllabus progress."
                    icon={Layers}
                    stats="Customized"
                    className="md:col-span-4"
                  />
                  <BentoCard
                    title="Grand Tests"
                    desc="Simulate the actual NEET/JEE Mains experience with real-time pressure."
                    icon={Trophy}
                    stats="Pro-Level"
                    className="md:col-span-4 !bg-[#FF0000] !text-white"
                    dark
                  />
                </div>
              </div>
            </section>

            {/* Section 3: Targeted Practice Mode -> Cockpit UI */}
            <section className="relative py-32 lg:py-40 flex min-h-screen items-center overflow-hidden border-t border-border bg-background">
              <div className="absolute inset-0 z-0">
                <motion.div style={{ y: parallaxY }} className="absolute inset-0">
                  <img
                    src="/images/home/parallax-study-bg.png"
                    alt="Parallax Background"
                    className="w-full h-[140%] object-cover opacity-30 dark:opacity-20 scale-110 blur-[2px]"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
              </div>

              <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                  <div className="space-y-12 text-left">
                    <SectionHeader
                      badge="Practice Mode"
                      title="Targeted"
                      highlight="Practice Mode"
                      description="Design your Practice sessions, that focus on specific areas through structured, customizable sessions. Select a subject, narrow it down to topic/sub-topic, and set your own timer."
                      align="left"
                    />

                    <div className="grid grid-cols-2 gap-3">
                      <CockpitSelector label="Subject" value={subjects[activeIndex]} active />
                      <CockpitSelector
                        label="Topic & Sub-Topic"
                        value={`${subjectMeta[subjects[activeIndex]].topic} > ${subjectMeta[subjects[activeIndex]].sub}`}
                      />
                      <CockpitSelector label="Questions" value="25 MCQs" />
                      <CockpitSelector label="Timer" value="45 Minutes" active />
                    </div>
                  </div>

                  <div className="relative pt-12 lg:pt-0">
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#FF0000]/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#FF0000]/10 blur-[100px] rounded-full pointer-events-none" />

                    <TabletMockup subject={subjects[activeIndex]} />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Performance Analytics -> Analytics Cockpit */}
            <section className="min-h-screen py-32 bg-[#05060A] dark text-white relative overflow-hidden flex items-center border-y border-border">
              <img
                src="/images/home/analytics-waves-bg.png"
                className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
                alt="Analytics Backdrop"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#05060A] via-transparent to-[#05060A] opacity-95" />

              <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:max-w-[650px] order-2 lg:order-1">
                    <StatBadge icon={Target} title="Accuracy" description="Precision in every attempt." />
                    <StatBadge icon={Zap} title="Speed" description="Time per subject metrics." />
                    <StatBadge icon={BookOpen} title="Weak Areas" description="Targeted logic gaps." />
                    <StatBadge icon={TrendingUp} title="Progress" description="Growth across timelines." />
                  </div>

                  <div className="w-full lg:max-w-[450px] order-1 lg:order-2 flex flex-col justify-center text-left">
                    <SectionHeader
                      badge="Insights"
                      title="Performance"
                      highlight="Analytics"
                      description="Students gain a clear understanding through detailed metrics designed to guide improvement."
                      align="left"
                      dark={true}
                    />
                    <div className="mt-8 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-[#FF0000]"
                      />
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF0000]">Optimization Active</p>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF0000] animate-ping" />
                        <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Live Syncing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Section 5: Pricing */}
          <PricingSection setIsAuthModalOpen={setIsAuthModalOpen} />

          {/* Section 6: Final CTA */}
          <section className="py-40 px-6 md:px-12 relative bg-background">
            <div className="max-w-7xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-[#FF0000] rounded-[2px] p-20 md:p-32 relative overflow-hidden shadow-2xl shadow-[#FF0000]/20"
              >
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                  <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                    Your Journey <br />
                    <span className="font-instrument-serif italic font-normal text-white/90">Starts Here.</span>
                  </h2>
                  <p className="text-white/80 max-w-2xl mx-auto mb-16 text-lg md:text-2xl font-light leading-relaxed">
                    Join thousands of students preparing smarter for JEE Mains and NEET with structured practice and real-time analytics.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsAuthModalOpen(true)}
                    className="inline-flex items-center justify-center gap-4 bg-white text-[#FF0000] hover:bg-white/90 font-black h-20 px-16 text-xl rounded-[2px] shadow-2xl transition-all uppercase tracking-[0.2em] text-[12px]"
                  >
                    Get Started Now
                    <ChevronRight size={24} />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>

          <IyotaFooter />
        </div>
      </div>

      <DemoRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </main>
  );
}
