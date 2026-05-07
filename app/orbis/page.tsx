"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import OrbisHero from "@/components/orbis/OrbisHero";
import OrbisTrust from "@/components/orbis/OrbisTrust";
import PlatformOverview from "@/components/orbis/PlatformOverview";
import OrbisFeatureSection from "@/components/orbis/OrbisFeatureSection";
import OrbisMobileEcosystem from "@/components/orbis/OrbisMobileEcosystem";
import WhyOrbis from "@/components/orbis/WhyOrbis";
import OrbisCTA from "@/components/orbis/OrbisCTA";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/CustomCursor";
import OrbisBackgroundCanvas from "@/components/orbis/OrbisBackgroundCanvas";
import { TrendingUp, BarChart3, Database, Workflow, ShieldCheck, Globe } from "lucide-react";

export default function OrbisPage() {
  return (
    <main
      className="relative bg-background overflow-x-hidden transition-colors duration-500"
      style={{
        '--primary': '#0E76BD',
        '--accent': '#0E76BD'
      } as React.CSSProperties}
    >
      <CustomCursor />
      <OrbisBackgroundCanvas />

      <div className="relative z-10">
        <Navbar />
        <OrbisHero />

        <OrbisTrust />
        <PlatformOverview />

        <div className="space-y-0 relative">
          {/* Smart Admissions */}
          <OrbisMobileEcosystem />
          <OrbisFeatureSection
            heading="Smart Admissions Management"
            description="Digitize and streamline the complete admission lifecycle with intelligent onboarding workflows, application management, document handling, and centralized student records."
            features={[
              "Digital application workflows", "Student onboarding", "Parent communication",
              "Academic selections", "Activity preferences", "Admission tracking",
              "Centralized records", "Smart analytics"
            ]}
            imageSide="right"
            visual={<Database className="text-[#0E76BD]/40" size={120} />}
          />

          {/* Fee & Finance */}
          <OrbisFeatureSection
            heading="Intelligent Fee & Finance Management"
            description="Simplify institutional finance operations with flexible fee structures, automated collections, payment tracking, and secure online payment integrations."
            features={[
              "Dynamic fee configuration", "Online payment gateway", "Automated receipts",
              "Due management", "Financial reporting", "Collection tracking",
              "Multi-category fee setup"
            ]}
            imageSide="left"
            visual={<BarChart3 className="text-[#0E76BD]/40" size={120} />}
          />

          {/* Operations Automation */}
          <OrbisFeatureSection
            heading="Institution Operations Automation"
            description="Automate daily administrative and academic workflows through an integrated operational intelligence system designed to improve institutional efficiency."
            features={[
              "Smart timetable scheduling", "Attendance automation", "Examination workflows",
              "Academic calendar", "Notification management", "Asset tracking",
              "Employee management", "Operational reporting"
            ]}
            imageSide="right"
            visual={<Workflow className="text-[#0E76BD]/40" size={120} />}
          />

          {/* Parent Experience */}
          <OrbisFeatureSection
            heading="Connected Parent Experience"
            description="Keep parents informed and engaged through a real-time communication platform with instant academic updates, attendance tracking, and transport visibility."
            features={[
              "Attendance insights", "Exam performance updates", "Timetable access",
              "Online fee payment", "Leave management", "Real-time notifications",
              "GPS transport tracking", "Event & holiday updates"
            ]}
            imageSide="left"
            visual={<Globe className="text-[#0E76BD]/40" size={120} />}
          />

          {/* Student Experience */}
          <OrbisFeatureSection
            heading="Digital Student Experience"
            description="A connected student platform designed to simplify academic engagement, assignment tracking, schedules, announcements, and performance visibility."
            features={[
              "Assignment submissions", "Timetable management", "Announcements",
              "Holiday updates", "Leave history", "Exam results", "Academic progress insights"
            ]}
            imageSide="right"
          />

          {/* Teacher Productivity */}
          <OrbisFeatureSection
            heading="Teacher Productivity Platform"
            description="Empower educators with tools that simplify classroom management, assignment coordination, attendance workflows, and academic communication."
            features={[
              "Assignment management", "Attendance workflows", "Timetable organization",
              "Student communication", "Event scheduling", "Academic coordination"
            ]}
            imageSide="left"
          />

          {/* Academic Management */}
          <OrbisFeatureSection
            heading="Academic Management Suite"
            description="Streamline curriculum delivery, examination management, grading workflows, and academic monitoring through one connected academic system."
            features={[
              "Examination management", "Assignment workflows", "Homework tracking",
              "Lesson planning", "Academic calendar", "Digital report cards"
            ]}
            imageSide="right"
            visual={<ShieldCheck className="text-[#0E76BD]/40" size={120} />}
          />

          {/* Administrative Management */}
          <OrbisFeatureSection
            heading="Administrative Management System"
            description="Centralize operational management with scalable tools for employee administration, documentation, institutional coordination, and asset monitoring."
            features={[
              "Employee management", "HR administration", "Document management",
              "Asset tracking", "Multi-branch support"
            ]}
            imageSide="left"
          />

          {/* Communication Hub */}
          <OrbisFeatureSection
            heading="Real-Time Communication Hub"
            description="Deliver instant institutional communication through a unified engagement platform built for collaboration and transparency."
            features={[
              "SMS notifications", "Push notifications", "Parent-teacher messaging",
              "Announcements", "Circular management", "Real-time alerts"
            ]}
            imageSide="right"
          />

          {/* Smart Transportation */}
          <OrbisFeatureSection
            heading="Smart Transportation Management"
            description="Enhance transportation operations through live GPS tracking, intelligent route management, and automated parent notifications."
            features={[
              "GPS vehicle tracking", "Route management", "Pickup/drop alerts",
              "Transportation monitoring"
            ]}
            imageSide="left"
          />

          {/* Analytics & Insights */}
          <OrbisFeatureSection
            heading="Analytics & Institutional Insights"
            description="Enable data-driven decision-making through real-time analytics, performance monitoring, and operational reporting dashboards."
            features={[
              "Financial analytics", "Attendance reports", "Student performance insights",
              "Operational analytics", "Institutional dashboards"
            ]}
            imageSide="right"
            visual={<TrendingUp className="text-[#0E76BD]/40" size={120} />}
          />
        </div>


        <WhyOrbis />
        <OrbisCTA />

        <Footer />
      </div>
    </main>
  );
}
