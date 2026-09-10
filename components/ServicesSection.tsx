'use client';

import React, { useEffect, useRef } from 'react';
import { Sparkles, Layers, Cpu, TrendingUp, Palette } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const track = trackRef.current;

    if (!section || !wrapper || !track) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 992px)', () => {
      const getScrollAmount = () => {
        return track.scrollWidth - wrapper.clientWidth;
      };

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollAmount() + window.innerHeight * 0.8}`,
          scrub: 0.8,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="what-we-do-section select-none py-20 lg:py-0"
    >
      {/* Background static ambient purple glow (lightweight, zero scroll animation) */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#4D357F]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#4D357F]/12 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Area */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-10 lg:mb-14 relative z-10">
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
            Four specialized disciplines engineered to elevate your brand presence, interface, scalable architecture, and digital growth.
          </p>
        </div>
      </div>

      {/* Horizontal Carousel Track on Desktop / Vertical Stack on Mobile */}
      <div
        ref={wrapperRef}
        className="what-we-do-wrapper relative z-10"
      >
        <div
          ref={trackRef}
          className="what-we-do-track"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.category}
                onClick={() => onSelectService?.(service.category)}
                className="what-card group cursor-pointer"
              >
                {/* Top Ambient Highlight */}
                <div className="relative z-10">
                  {/* Icon & Status Dot */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-white/10 border border-[#4D357F]/40 flex items-center justify-center group-hover:scale-105 group-hover:bg-[#4D357F] group-hover:border-[#4D357F] transition-all duration-300">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
