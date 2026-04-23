import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { PlatformCapabilitiesSection } from '@/components/sections/PlatformCapabilitiesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ClientStoriesSection } from '@/components/sections/ClientStoriesSection';
import { AcademicPartnersSection } from '@/components/sections/AcademicPartnersSection';
import { ContactFormSection } from '@/components/sections/ContactFormSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PlatformCapabilitiesSection />
      <HowItWorksSection />
      <ClientStoriesSection />
      <AcademicPartnersSection />
      <ContactFormSection />
    </>
  );
}
