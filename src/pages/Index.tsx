import { LandingNav } from "../components/landing/LandingNav";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/landing/HeroSection";
import { FeaturesSection } from "../components/landing/FeaturesSection";
import { TestimonialsSection } from "../components/landing/TestimonialsSection";
import { CtaSection } from "../components/landing/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingNav />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
