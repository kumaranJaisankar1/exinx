import BackgroundCanvas from "@/components/BackgroundCanvas";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/sections/HeroSection";
import Marquee from "@/components/sections/Marquee";
import BrandIntro from "@/components/sections/BrandIntro";
import ExInXProcess from "@/components/sections/ExInXProcess";
import WhyExInX from "@/components/sections/WhyExInX";
import PlatformImpact from "@/components/sections/PlatformImpact";
import ProductSection from "@/components/sections/ProductSection";
import Differentiators from "@/components/sections/Differentiators";
import VisionSection from "@/components/sections/VisionSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import HomeThemeWrapper from "@/components/HomeThemeWrapper";
import { SchemaMarkup, getWebSiteSchema } from "@/components/seo/SchemaMarkup";
import { constructMetadata } from "@/lib/seo";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://exinx.com';

export const metadata = constructMetadata({
  title: 'Home',
  description: 'The future of education is intelligent. EXINX builds AI-native educational products that adapt to how your mind actually works.',
});

export default function Home() {
  return (
    <HomeThemeWrapper>
      <SchemaMarkup data={getWebSiteSchema(SITE_URL)} />
      <CustomCursor />
      <BackgroundCanvas />
      <div className="noise-overlay" />

      <div className="relative z-10">
        <main>
          <HeroSection />
          <Marquee />

          <BrandIntro />
          <ExInXProcess />
          {/* <CorePillars /> */}
          <WhyExInX />
          <PlatformImpact />
          <ProductSection />
          <Differentiators />
          <VisionSection />
          <FinalCTA />
        </main>

        <Footer />
      </div>
    </HomeThemeWrapper>
  );
}
