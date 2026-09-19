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
  // Exactly 4 cards duplicated once for seamless infinite loop on desktop
  const duplicatedServices = [...services, ...services];

  return (
    <section
      id="services"
      className="what-we-do-section footer-theme-bg select-none relative overflow-hidden py-14 sm:py-24 md:py-32"
    >
      {/* Header Area */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="badge section-label inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#4D357F]/40 text-[#FFFFFF] text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#4D357F]" />
              Core Capabilities
            </div>
            <h2 className="display-text text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#FFFFFF]">
              What<span className="text-[#4D357F]">—</span>We Do
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/70 max-w-md font-normal leading-relaxed">
            Four specialized disciplines engineered to elevate your brand presence, interface, scalable architecture, and digital growth.
          </p>
        </div>
      </div>

      {/* MOBILE ONLY (< md): Remove slider, show all in 4 rows with top scroll entrance */}
      <div className="block md:hidden relative z-10 w-full px-4 sm:px-6 max-w-lg mx-auto">
        <div className="flex flex-col gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={`mobile-${service.category}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectService?.(service.category)}
                className="group cursor-pointer w-full rounded-2xl bg-[#090C18]/80 border border-[#4D357F]/35 p-5 backdrop-blur-md transition-all duration-300 hover:border-[#20542D] hover:bg-white/[0.06] shadow-lg shadow-black/20"
              >
                {/* Row Header with Service Number, Title and Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-[#4D357F]/40 text-[#FFFFFF] border border-[#4D357F]/60">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {service.category}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-[#4D357F]/40 flex items-center justify-center group-hover:bg-[#4D357F] transition-colors">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-xs text-white/70 leading-relaxed mb-3.5">
                  {service.tagline}
                </p>

                {/* Capabilities pills */}
                <div className="flex flex-wrap gap-1.5 mb-3.5 pt-3 border-t border-white/10">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.05] text-white/80 border border-white/[0.08] flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#20542D]" />
                      {item}
                    </span>
                  ))}
                </div>

                {/* Bottom Action Hint */}
                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white/50 group-hover:text-white transition-colors">
                  <span>Explore Discipline</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#4D357F] group-hover:text-[#20542D]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* DESKTOP ONLY (>= md): Infinite Smooth Carousel Track */}
      <div
        className="hidden md:block what-we-do-wrapper relative z-10 w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 32px, black calc(100% - 32px), transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 32px, black calc(100% - 32px), transparent)',
        }}
      >
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
