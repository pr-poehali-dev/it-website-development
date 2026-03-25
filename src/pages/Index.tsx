import useScrollAnimation from '@/hooks/useScrollAnimation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioClientsSection from '@/components/PortfolioClientsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const containerRef = useScrollAnimation();

  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <PortfolioClientsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
