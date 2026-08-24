'use client';

import React, { useEffect, useRef } from 'react';
import { Sparkles, Layers, Cpu, TrendingUp, Palette, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

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
      tagline: 'Data-driven acquisition, search dominance, continuous conversion.',
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

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Responsive setup: horizontal pinned scroll on desktop (min-width: 1024px)
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      const getScrollAmount = () => {
        return track.scrollWidth - window.innerWidth + 180;
      };

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${getScrollAmount() + 650}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="services-section relative py-20 lg:py-28 bg-[#080B14] text-white overflow-hidden transition-colors duration-700"
    >
      {/* Background ambient purple glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#4D357F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#4D357F]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-12 lg:mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#4D357F]/40 text-[#FFFFFF] text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#4D357F]" />
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FFFFFF]">
              What<span className="text-[#4D357F]">—</span>We Do
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/70 max-w-md font-normal leading-relaxed">
            Four specialized disciplines engineered to elevate your brand presence, interface, and digital growth.
          </p>
        </div>
      </div>

      {/* Horizontal Track for Desktop / Stack for Mobile */}
      <div className="w-full px-4 sm:px-6 md:px-12 relative z-10">
        <div
          ref={trackRef}
          className="services-track flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-7xl lg:max-w-none mx-auto lg:mx-0 lg:pr-32 will-change-transform"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.category}
                className="group relative w-full lg:w-[440px] shrink-0 bg-white/[0.06] backdrop-blur-xl rounded-[28px] border border-[#4D357F]/35 p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-2 hover:border-[#4D357F] hover:shadow-2xl hover:shadow-[#4D357F]/25"
              >
                {/* Top Subtle Ambient Spotlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4D357F]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#4D357F]/35 transition-colors" />

                {/* Top Card Bar */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-white/10 border border-[#4D357F]/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#4D357F] transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#FFFFFF]" />
                    </div>

                    <div className="w-2.5 h-2.5 rounded-full bg-[#4D357F] group-hover:animate-ping" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight mb-2">
                    {service.category}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed min-h-[40px]">
                    {service.tagline}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-[1px] w-full bg-white/10 group-hover:bg-[#4D357F] transition-colors duration-300" />

                  {/* Service List */}
                  <ul className="space-y-3.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-white/75 font-medium group-hover:text-white transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4D357F] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
