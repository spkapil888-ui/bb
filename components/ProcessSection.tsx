'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  Search,
  Compass,
  Layout,
  CheckCircle2,
  Code,
  Rocket,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { CharReveal } from './CharReveal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    id: 'discover',
    label: 'DISCOVER',
    title: 'Find the Opportunity',
    chip: 'Research → Insights',
    icon: Search,
    desc: 'Uncovering audience needs, market gaps, and clear value proposition.',
  },
  {
    id: 'strategize',
    label: 'STRATEGIZE',
    title: 'Map the Direction',
    chip: 'Strategy → Clarity',
    icon: Compass,
    desc: 'Defining brand positioning, architectural roadmap, and KPI milestones.',
  },
  {
    id: 'design',
    label: 'DESIGN',
    title: 'Create the Experience',
    chip: 'Experience → Identity',
    icon: Layout,
    desc: 'Crafting user flows, intuitive interfaces, and aesthetic identity systems.',
  },
  {
    id: 'validate',
    label: 'VALIDATE',
    title: 'Make It Better',
    chip: 'Test → Refine',
    icon: CheckCircle2,
    desc: 'Iterative prototyping, user feedback, and experience optimization.',
  },
  {
    id: 'build',
    label: 'BUILD',
    title: 'Bring It to Life',
    chip: 'Create → Develop',
    icon: Code,
    desc: 'Engineering scalable, secure, and high-performance applications.',
  },
  {
    id: 'launch',
    label: 'LAUNCH',
    title: 'Make Your Mark',
    chip: 'Deploy → Deliver',
    icon: Rocket,
    desc: 'Zero-downtime deployment, infrastructure audit, and public launch.',
  },
  {
    id: 'grow',
    label: 'GROW',
    title: 'Turn Momentum Into Growth',
    chip: 'Measure → Scale',
    icon: TrendingUp,
    desc: 'Performance analytics, continuous optimization, and business scale.',
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const desktopPathRef = useRef<SVGPathElement>(null);
  const desktopArrowRef = useRef<SVGPolygonElement>(null);
  const mobilePathRef = useRef<SVGPathElement>(null);
  const mobileArrowRef = useRef<SVGPolygonElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        // Desktop Animation
        const path = desktopPathRef.current;
        const arrow = desktopArrowRef.current;
        const cards = gsap.utils.toArray<HTMLElement>('.roadmap-card-desktop');
        const dots = gsap.utils.toArray<HTMLElement>('.roadmap-dot-desktop');

        if (path && cards.length > 0) {
          const pathLength = path.getTotalLength();

          gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });

          gsap.set(cards, {
            opacity: 0,
            y: 42,
            scale: 0.94,
          });

          gsap.set(dots, {
            scale: 0.8,
            backgroundColor: '#E8E5EF',
            borderColor: '#FFFFFF',
          });

          if (arrow) {
            gsap.set(arrow, { fill: '#E8E5EF' });
          }

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: '+=3000',
              scrub: 1,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // Animate road progress path smoothly across full scroll
          tl.to(
            path,
            {
              strokeDashoffset: 0,
              ease: 'none',
              duration: 1,
            },
            0
          );

          // Animate each card and dot one by one in sync with the road
          cards.forEach((card, index) => {
            const stepPos = index / (cards.length - 0.7);

            tl.to(
              card,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.18,
                ease: 'power2.out',
                onStart: () => {
                  card.classList.add('is-active');
                },
                onReverseComplete: () => {
                  card.classList.remove('is-active');
                },
              },
              stepPos
            );

            if (dots[index]) {
              tl.to(
                dots[index],
                {
                  backgroundColor: '#20542D',
                  borderColor: '#4D357F',
                  scale: 1.25,
                  duration: 0.14,
                },
                stepPos
              );
            }
          });

          // Turn arrow green at the final step
          if (arrow) {
            tl.to(
              arrow,
              {
                fill: '#20542D',
                duration: 0.15,
              },
              0.88
            );
          }
        }
      } else {
        // Mobile Animation
        const path = mobilePathRef.current;
        const arrow = mobileArrowRef.current;
        const cards = gsap.utils.toArray<HTMLElement>('.roadmap-card-mobile');
        const dots = gsap.utils.toArray<HTMLElement>('.roadmap-dot-mobile');

        if (path && cards.length > 0) {
          const pathLength = path.getTotalLength();

          gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });

          gsap.set(cards, {
            opacity: 0,
            y: 35,
            scale: 0.95,
          });

          if (arrow) {
            gsap.set(arrow, { fill: '#E8E5EF' });
          }

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: '+=2400',
              scrub: 1,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          tl.to(
            path,
            {
              strokeDashoffset: 0,
              ease: 'none',
              duration: 1,
            },
            0
          );

          cards.forEach((card, index) => {
            const stepPos = index / (cards.length - 0.7);

            tl.to(
              card,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.18,
                ease: 'power2.out',
                onStart: () => {
                  card.classList.add('is-active');
                },
                onReverseComplete: () => {
                  card.classList.remove('is-active');
                },
              },
              stepPos
            );

            if (dots[index]) {
              tl.to(
                dots[index],
                {
                  backgroundColor: '#20542D',
                  borderColor: '#4D357F',
                  scale: 1.25,
                  duration: 0.14,
                },
                stepPos
              );
            }
          });

          if (arrow) {
            tl.to(
              arrow,
              {
                fill: '#20542D',
                duration: 0.15,
              },
              0.88
            );
          }
        }
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="roadmap-journey-section w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-b border-[#E8E5EF]"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col h-full justify-between">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4D357F]/8 border border-[#4D357F]/20 text-[#4D357F] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#4D357F]" />
            Roadmap &amp; Journey
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#080B14] max-w-3xl">
            <CharReveal text="A Clear Process from Idea to Growth" />
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-[#5F636B] max-w-2xl">
            A connected journey that moves from discovery to strategy, design, validation, build, launch and measurable growth.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP ROADMAP STAGE (>= 1024px) */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative w-full h-[520px] my-auto">
          
          {/* SVG Road Path & Marker System */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            viewBox="0 0 1200 520"
            preserveAspectRatio="none"
          >
            {/* Soft Ambient Shadow Path */}
            <path
              d="M 60,250 C 130,250 170,160 230,160 C 290,160 330,340 390,340 C 450,340 490,160 550,160 C 610,160 650,340 710,340 C 770,340 810,160 870,160 C 930,160 970,340 1030,340 C 1090,340 1120,250 1160,250"
              fill="none"
              stroke="rgba(77, 53, 127, 0.05)"
              strokeWidth="12"
              strokeLinecap="round"
            />

            {/* Base Background Road Path */}
            <path
              d="M 60,250 C 130,250 170,160 230,160 C 290,160 330,340 390,340 C 450,340 490,160 550,160 C 610,160 650,340 710,340 C 770,340 810,160 870,160 C 930,160 970,340 1030,340 C 1090,340 1120,250 1160,250"
              fill="none"
              stroke="#E8E5EF"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Active Animated Road Progress Path */}
            <path
              ref={desktopPathRef}
              d="M 60,250 C 130,250 170,160 230,160 C 290,160 330,340 390,340 C 450,340 490,160 550,160 C 610,160 650,340 710,340 C 770,340 810,160 870,160 C 930,160 970,340 1030,340 C 1090,340 1120,250 1160,250"
              fill="none"
              stroke="#20542D"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Final Arrowhead at End of Road */}
            <polygon
              ref={desktopArrowRef}
              points="1155,243 1175,250 1155,257"
              fill="#E8E5EF"
              className="transition-colors duration-300"
            />
          </svg>

          {/* 7 Connected Step Cards on Desktop */}
          <div className="relative z-10 w-full h-full">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              // Coordinates matched to SVG peaks & valleys
              // Index 0: x=2%, y=top
              // Index 1: x=16%, y=bottom
              // Index 2: x=30%, y=top
              // Index 3: x=45%, y=bottom
              // Index 4: x=60%, y=top
              // Index 5: x=74%, y=bottom
              // Index 6: x=86%, y=center/top
              const isTop = index % 2 === 0;
              const leftPercents = [2, 16.5, 31, 46, 61, 75.5, 87];
              const leftPos = `${leftPercents[index]}%`;
              const topPos = index === 6 ? '70px' : isTop ? '15px' : '265px';

              return (
                <div
                  key={step.id}
                  style={{
                    position: 'absolute',
                    left: leftPos,
                    top: topPos,
                    width: '200px',
                  }}
                  className="roadmap-card-desktop roadmap-card group cursor-default"
                >
                  {/* Step Road Connector Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      [isTop && index !== 6 ? 'bottom' : 'top']: '-22px',
                    }}
                    className="roadmap-dot-desktop roadmap-dot z-20 shadow-xs"
                  />

                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[11px] font-bold text-[#4D357F] tracking-wider uppercase">
                      {step.label}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-[#F8F7F5] border border-[#E8E5EF] flex items-center justify-center group-hover:bg-[#20542D] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-3.5 h-3.5 text-[#4D357F] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-[#080B14] leading-snug tracking-tight group-hover:text-[#4D357F] transition-colors mb-1.5">
                    {step.title}
                  </h3>

                  {/* Tagline / Chip */}
                  <div className="mt-2 pt-2 border-t border-[#E8E5EF] flex items-center justify-between text-[10.5px] font-mono font-semibold text-[#20542D]">
                    <span>{step.chip}</span>
                    <ArrowRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:opacity-100 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE / TABLET TIMELINE STAGE (< 1024px) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden relative w-full mt-4 max-w-lg mx-auto">
          
          {/* Vertical SVG Road Track */}
          <div className="absolute left-6 top-6 bottom-6 w-8 pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 32 1000"
              preserveAspectRatio="none"
            >
              {/* Base Road */}
              <line
                x1="16"
                y1="10"
                x2="16"
                y2="970"
                stroke="#E8E5EF"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Progress Road */}
              <path
                ref={mobilePathRef}
                d="M 16,10 L 16,970"
                fill="none"
                stroke="#20542D"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Arrowhead */}
              <polygon
                ref={mobileArrowRef}
                points="8,970 16,990 24,970"
                fill="#E8E5EF"
                className="transition-colors duration-300"
              />
            </svg>
          </div>

          {/* Vertical Stacked Step Cards */}
          <div className="flex flex-col gap-6 relative z-10 pl-14">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="roadmap-card-mobile roadmap-card relative group"
                >
                  {/* Step Road Connector Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-39px',
                      top: '26px',
                    }}
                    className="roadmap-dot-mobile roadmap-dot z-20 shadow-xs"
                  />

                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-[#4D357F] tracking-wider uppercase">
                      {step.label}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-[#F8F7F5] border border-[#E8E5EF] flex items-center justify-center group-hover:bg-[#20542D] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-4 h-4 text-[#4D357F] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#080B14] leading-snug tracking-tight group-hover:text-[#4D357F] transition-colors mb-1">
                    {step.title}
                  </h3>

                  {/* Subtitle / Description */}
                  <p className="text-xs text-[#5F636B] leading-relaxed mb-3">
                    {step.desc}
                  </p>

                  {/* Chip / Tagline */}
                  <div className="pt-2 border-t border-[#E8E5EF] flex items-center justify-between text-xs font-mono font-semibold text-[#20542D]">
                    <span>{step.chip}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
