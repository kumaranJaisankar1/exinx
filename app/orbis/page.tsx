"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import OrbisHero from "@/components/orbis/OrbisHero";
import OrbisIntro from "@/components/orbis/OrbisIntro";
import OrbisCoreValue from "@/components/orbis/OrbisCoreValue";
import OrbisModules from "@/components/orbis/OrbisModules";
import OrbisExtended from "@/components/orbis/OrbisExtended";
import OrbisFlexibility from "@/components/orbis/OrbisFlexibility";
import OrbisBenefits from "@/components/orbis/OrbisBenefits";
import OrbisSnapshot from "@/components/orbis/OrbisSnapshot";
import OrbisClosing from "@/components/orbis/OrbisClosing";
import OrbisMobileEcosystem from "@/components/orbis/OrbisMobileEcosystem";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/CustomCursor";
import OrbisFooter from "@/components/sections/OrbisFooter";
import OrbisBackgroundCanvas from "@/components/orbis/OrbisBackgroundCanvas";

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
        {/* <Navbar /> */}
        <OrbisHero />

        <div className="bg-background relative z-20">
          <div id="orbis-intro">
            <OrbisIntro />
          </div>
          <OrbisCoreValue />
          <div id="orbis-modules">
            <OrbisModules />
          </div>
          <div id="orbis-mobile">
            <OrbisMobileEcosystem />
          </div>
          <OrbisExtended />
          <OrbisFlexibility />
          <OrbisBenefits />
          <OrbisSnapshot />
          <OrbisClosing />
        </div>

        <OrbisFooter />
      </div>
    </main>
  );
}
