'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Layers, Cpu, TrendingUp, Palette, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

const services = [
  {
    category: 'BRAND',
    tagline: 'Distinctive identity, clear narrative, lasting resonance.',
    icon: Palette,
    items: [
      'Brand Strategy',
      'Visual Identity',
      'Creative Direction',
      'Campaign Strategy',
      'Campaign Design',
      'Graphic Design',
      'Content Creation',
    ],
  },
  {
    category: 'EXPERIENCE',
    tagline: 'Intuitive interface, seamless interaction, memorable journeys.',
    icon: Layers,
    items: [
      'UI/UX Design',
      'Web Design',
      'Digital Experiences',
      'Product Design',
      'Prototyping',
    ],
  },
  {
    category: 'BUILD',
    tagline: 'Modern engineering, scalable code, seamless integrations.',
    icon: Cpu,
    items: [
      'Web Development',
      'Webflow / WordPress',
      'Custom Development',
      'AI Integrations',
      'Marketing Automation',
    ],
  },
  {
    category: 'GROWTH',
    tagline: 'Performance marketing, search visibility, and measurable growth.',
    icon: TrendingUp,
    items: [
      'SEO',
      'AI Search / GEO',
      'Paid Advertising',
      'Social Media Marketing',
      'Content Marketing',
      'Analytics & CRO',
    ],
  },
];

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  // Exactly 4 cards duplicated once for seamless infinite loop
  const duplicatedServices = [...services, ...services];

  return (
    <section
      id="services"
      className="what-we-do-section select-none relative overflow-hidden py-24 sm:py-32"
    >
      {/* 1. Night Sky Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #050814 0%, #080B14 50%, #050814 100%)',
        }}
      />

      {/* 2. Night Sky Subtle Starry Dot Matrix */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* 3. Subtle Purple & Green Ambient Cosmic Glow Motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
        <motion.div
          animate={{
            x: ['-5%', '10%', '-5%'],
            y: ['-10%', '8%', '-10%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -left-20 w-[550px] h-[550px] rounded-full bg-[#4D357F]/24 blur-[130px]"
        />
        <motion.div
          animate={{
            x: ['5%', '-10%', '5%'],
            y: ['10%', '-8%', '10%'],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-10 -right-20 w-[550px] h-[550px] rounded-full bg-[#20542D]/22 blur-[140px]"
        />
      </div>

      {/* Header Area */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-12 sm:mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#4D357F]/40 text-[#FFFFFF] text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#4D357F]" />
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#FFFFFF]">
              What<span className="text-[#4D357F]">—</span>We Do
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/70 max-w-md font-normal leading-relaxed">
            Four specialized disciplines engineered to elevate your brand presence, interface, scalable architecture, and digital growth.
          </p>
        </div>
      </div>

      {/* Infinite Smooth Carousel Track */}
      <div className="what-we-do-wrapper relative z-10 w-full overflow-hidden">
        {/* Subtle Edge Fade Masks for Smooth In/Out */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#050814] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#050814] to-transparent z-20 pointer-events-none" />

        <div className="what-we-do-loop flex">
          {duplicatedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={`${service.category}-${index}`}
                onClick={() => onSelectService?.(service.category)}
                className="what-card group cursor-pointer shrink-0"
              >
                {/* Top Ambient Highlight */}
                <div className="relative z-10">
                  {/* Icon & Status Dot */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#4D357F]/40 flex items-center justify-center group-hover:scale-105 group-hover:bg-[#4D357F] group-hover:border-[#4D357F] transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#FFFFFF]" />
                    </div>

                    <div className="w-2.5 h-2.5 rounded-full bg-[#4D357F] group-hover:bg-[#20542D] group-hover:shadow-[0_0_10px_#20542D] transition-all duration-300" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight mb-2 group-hover:text-white transition-colors">
                    {service.category}
                  </h3>

                  {/* Subtitle / Tagline */}
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed min-h-[38px]">
                    {service.tagline}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-[1px] w-full bg-white/10 group-hover:bg-[#20542D]/50 transition-colors duration-300" />

                  {/* List of Capabilities */}
                  <ul className="what-card-list">
                    {service.items.map((item) => (
                      <li key={item}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4D357F] group-hover:bg-[#20542D] transition-colors shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Hint */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white/50 group-hover:text-white transition-colors">
                  <span>Explore Discipline</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#4D357F] group-hover:text-[#20542D]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
