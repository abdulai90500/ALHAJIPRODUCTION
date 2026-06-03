import HeroSection from '@/components/sections/HeroSection';
import AboutPreview from '@/components/sections/AboutPreview';
import ImpactStats from '@/components/sections/ImpactStats';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import TestimonialsSlider from '@/components/sections/TestimonialsSlider';
import DonationCTA from '@/components/sections/DonationCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ImpactStats />
      <FeaturedProjects />
      <TestimonialsSlider />
      <DonationCTA />
    </>
  );
}
