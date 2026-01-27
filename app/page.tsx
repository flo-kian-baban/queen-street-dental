import HeroSlider from "@/components/sections/home/HeroSlider";
import WelcomeSection from "@/components/sections/home/WelcomeSection";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import TestimonialsSlider from "@/components/sections/home/TestimonialsSlider";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      <WelcomeSection />
      <ServicesGrid />
      <TestimonialsSlider />
    </div>
  );
}
