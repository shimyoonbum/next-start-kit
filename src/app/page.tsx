import { HeroSection } from "./_sections/hero-section";
import { FeaturesSection } from "./_sections/features-section";
import { TechStackSection } from "./_sections/tech-stack-section";
import { ComponentsPreviewSection } from "./_sections/components-preview-section";
import { CtaSection } from "./_sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TechStackSection />
      <ComponentsPreviewSection />
      <CtaSection />
    </>
  );
}
