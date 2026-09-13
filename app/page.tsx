'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Loader } from '@/components/Loader';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { MarqueeSection } from '@/components/MarqueeSection';
import { ServicesSection } from '@/components/ServicesSection';
import { DropCapsuleSection } from '@/components/DropCapsuleSection';
import { LetsWorkAnimationSection } from '@/components/LetsWorkAnimationSection';
import { ProcessSection } from '@/components/ProcessSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import OurMissionSection from '@/components/sections/our-mission-section';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { LegalModal } from '@/components/LegalModal';

export default function Home() {
  const [loaderComplete, setLoaderComplete] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<string | null>(null);

  const handleOpenContact = (service?: string) => {
    setSelectedService(service);
    setContactModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#F8F7F5] text-[#080B14] overflow-x-hidden selection:bg-[#4D357F] selection:text-white">
      {/* 1. Full-screen Loader Animation with Shutter Reveal */}
      {!loaderComplete && (
        <Loader onComplete={() => setLoaderComplete(true)} />
      )}

      {/* Main Website Content (Fades up cleanly once loader finishes) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={loaderComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col min-h-screen"
      >
        {/* 2. Header / Sticky Glass Navbar */}
        <Navbar onOpenContact={() => handleOpenContact()} />

        {/* 3. Hero Section */}
        <HeroSection
          onOpenContact={() => handleOpenContact()}
        />

        {/* 4. About Us Section */}
        <AboutSection onGetStarted={() => handleOpenContact()} />

        {/* 5. Infinite Marquee Keywords Section */}
        <MarqueeSection />

        {/* 6. Services Section (Continuous Infinite Carousel with Pause on Hover) */}
        <ServicesSection onSelectService={(service) => handleOpenContact(service)} />

        {/* 7. Drop Capsule Tech Ecosystem Section */}
        <DropCapsuleSection />

        {/* 8. Let’s Work Scale ScrollTrigger Section */}
        <LetsWorkAnimationSection />

        {/* 9. Process Roadmap Timeline Section */}
        <ProcessSection />

        {/* 10. Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* 11. Our Mission: Think Beyond, Build Beyond Section */}
        <OurMissionSection onGetStarted={() => handleOpenContact()} />

        {/* 12. Footer */}
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
