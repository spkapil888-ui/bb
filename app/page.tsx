'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { MarqueeSection } from '@/components/MarqueeSection';
import { ServicesSection } from '@/components/ServicesSection';
import { DropCapsuleSection } from '@/components/DropCapsuleSection';
import { LetsWorkAnimationSection } from '@/components/LetsWorkAnimationSection';
import { ProcessSection } from '@/components/ProcessSection';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us';
import OurMissionSection from '@/components/sections/our-mission-section';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { LegalModal } from '@/components/LegalModal';

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<string | null>(null);

  const handleOpenContact = (service?: string) => {
    setSelectedService(service);
    setContactModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#F8F7F5] text-[#080B14] overflow-x-hidden selection:bg-[#4D357F] selection:text-white">
      {/* Main Website Content with smooth, fast fade-in animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="flex flex-col min-h-screen"
      >
        {/* 1. Header / Sticky Glass Navbar */}
        <Navbar onOpenContact={() => handleOpenContact()} />

        {/* 2. Hero Section */}
        <HeroSection
          onOpenContact={() => handleOpenContact()}
        />

        {/* 3. About Us Section */}
        <AboutSection onGetStarted={() => handleOpenContact()} />

        {/* 4. Infinite Marquee Keywords Section */}
        <MarqueeSection />

        {/* 5. Services Section (Continuous Infinite Carousel with Pause on Hover) */}
        <ServicesSection onSelectService={(service) => handleOpenContact(service)} />

        {/* 6. Drop Capsule Tech Ecosystem Section */}
        <DropCapsuleSection />

        {/* 7. Let’s Work Scale ScrollTrigger Section */}
        <LetsWorkAnimationSection />

        {/* 8. Process Roadmap Timeline Section */}
        <ProcessSection />

        {/* 9. Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* 10. Our Mission: Think Beyond, Build Beyond Section */}
        <OurMissionSection onGetStarted={() => handleOpenContact()} />

        {/* 11. Footer */}
        <Footer
          onOpenContact={() => handleOpenContact()}
          onOpenLegal={(type) => setLegalModalType(type)}
        />
      </motion.div>

      {/* Interactive Contact / Consultation Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialService={selectedService}
      />

      {/* Legal Information Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </main>
  );
}
