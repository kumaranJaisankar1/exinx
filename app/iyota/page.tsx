"use client";

import React from "react";
import IyotaPrepBackground from "@/components/iyotaprep/IyotaPrepBackground";
import IyotaPrepHero from "@/components/iyotaprep/IyotaPrepHero";
import IyotaPrepIntelligence from "@/components/iyotaprep/IyotaPrepIntelligence";
import IyotaPrepDichotomy from "@/components/iyotaprep/IyotaPrepDichotomy";
import IyotaPrepWorkflows from "@/components/iyotaprep/IyotaPrepWorkflows";
import IyotaPrepAudiences from "@/components/iyotaprep/IyotaPrepAudiences";
import IyotaPrepProcess from "@/components/iyotaprep/IyotaPrepProcess";
import IyotaPrepCTA from "@/components/iyotaprep/IyotaPrepCTA";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/CustomCursor";
import IyotaPrepDataCore from "@/components/iyotaprep/IyotaPrepDataCore";
import TransformativeSection from "@/components/iyotaprep/TransformativeSection";

export default function IyotaPrepPage() {
    return (
        <main
            className="relative bg-background overflow-x-hidden transition-colors duration-500"
            style={{
                '--primary': '#FF0000',
                '--accent': '#FF0000',
                '--ring': '#FF0000',
            } as React.CSSProperties}
        >
            <CustomCursor />

            {/* Background Layers */}
            <IyotaPrepBackground />
            <IyotaPrepDataCore />

            <div className="relative z-10">
                {/* Hero includes Navbar */}
                <IyotaPrepHero />

                <TransformativeSection>
                    <IyotaPrepIntelligence />
                </TransformativeSection>

                <TransformativeSection>
                    <IyotaPrepDichotomy />
                </TransformativeSection>

                {/* <TransformativeSection>
                    <IyotaPrepWorkflows />
                </TransformativeSection> */}

                <TransformativeSection>
                    <IyotaPrepAudiences />
                </TransformativeSection>

                <TransformativeSection>
                    <IyotaPrepProcess />
                </TransformativeSection>

                <TransformativeSection>
                    <IyotaPrepCTA />
                </TransformativeSection>

                <Footer />
            </div>
        </main>
    );
}
