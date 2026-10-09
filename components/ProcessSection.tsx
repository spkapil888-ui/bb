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
];

const centerPercents = [19.2, 32.5, 45.8, 59.2, 72.5, 85.8];

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const desktopPinWrapperRef = useRef<HTMLDivElement>(null);
  const desktopStageRef = useRef<HTMLDivElement>(null);
  const desktopPathRef = useRef<SVGPathElement>(null);
  const desktopArrowRef = useRef<SVGPolygonElement>(null);
  const mobileProgressRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        // Desktop Animation: Sticky Pin on the Roadmap Animation Wrapper ONLY
        const pinWrapper = desktopPinWrapperRef.current;
        const path = desktopPathRef.current;
        const arrow = desktopArrowRef.current;
        const cards = gsap.utils.toArray<HTMLElement>('.roadmap-card-desktop');
        const dots = gsap.utils.toArray<HTMLElement>('.roadmap-dot-desktop');

        if (pinWrapper && path && cards.length > 0) {
          let pathLength = 2600;
          try {
            if (typeof path.getTotalLength === 'function') {
              pathLength = path.getTotalLength() || 2600;
            }
          } catch {
            pathLength = 2600;
          }

          gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });

          gsap.set(cards, {
            opacity: 0,
            y: 36,
            scale: 0.94,
            xPercent: -50,
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
              trigger: pinWrapper,
              start: 'center center',
              end: '+=2500',
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

          // Animate each of the 6 process cards and connector dots sequentially
          cards.forEach((card, index) => {
            const stepPos = 0.06 + index * 0.16;

            tl.to(
              card,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.16,
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
                duration: 0.12,
              },
              0.94
            );
          }
        }
      } else {
        // Mobile Animation: Centered Natural Scroll with Progress Tracker (No Screen Pinning)
        const progress = mobileProgressRef.current;
        const container = mobileContainerRef.current;
        const cards = gsap.utils.toArray<HTMLElement>('.roadmap-card-mobile');
        const dots = gsap.utils.toArray<HTMLElement>('.roadmap-dot-mobile');

        if (progress && container) {
          gsap.fromTo(
            progress,
            { scaleY: 0 },
            {
              scaleY: 1,
              transformOrigin: 'top center',
              ease: 'none',
              scrollTrigger: {
                trigger: container,
                start: 'top 75%',
                end: 'bottom 80%',
                scrub: 0.5,
              },
            }
          );
        }

        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 35,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.55,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                onEnter: () => {
                  card.classList.add('is-active');
                  if (dots[index]) dots[index].classList.add('is-active');
                },
                onLeaveBack: () => {
                  card.classList.remove('is-active');
                  if (dots[index]) dots[index].classList.remove('is-active');
                },
              },
            }
          );
        });
      }
    }, section);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="roadmap-journey-section relative w-full border-b border-[#E8E5EF]"
    >
      {/* Centered Ambient Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4D357F]/5 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#20542D]/4 rounded-full blur-[120px] pointer-events-none -z-0" />

      {/* ========================================================================= */}
      {/* 1. HEADING & DESCRIPTION — NORMAL SCROLL (Moves upward as user scrolls) */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24 pb-8 lg:pb-12 text-center">
        <div className="flex flex-col items-center text-center">
          <div className="badge section-label inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4D357F]/8 border border-[#4D357F]/20 text-[#4D357F] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#4D357F]" />
            Roadmap &amp; Journey
          </div>

          <h2 className="display-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#080B14] max-w-3xl">
            <CharReveal text="A Clear Process from Idea to Growth" />
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-[#5F636B] max-w-2xl">
            A connected journey that moves from discovery to strategy, design, validation, build, launch and measurable growth.
          </p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. ROADMAP ANIMATION — STICKY PINNED SCROLL ONLY (>= 1024px) */}
      {/* Centered in the viewport, pins until full animation finishes */}
      {/* ========================================================================= */}
      <div
        ref={desktopPinWrapperRef}
        className="hidden lg:flex relative w-full items-center justify-center min-h-[500px] xl:min-h-[530px] py-4 z-10 overflow-visible"
      >
        <div
          ref={desktopStageRef}
          className="roadmap-stage-desktop relative w-full max-w-7xl mx-auto h-[480px] px-2 sm:px-4"
        >
          {/* SVG Road Path & Marker System */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            viewBox="0 0 1200 480"
            preserveAspectRatio="none"
          >
            {/* Soft Ambient Shadow Path */}
            <path
              d="M 60,240 C 130,240 170,150 230,150 C 290,150 330,330 390,330 C 450,330 490,150 550,150 C 610,150 650,330 710,330 C 770,330 810,150 870,150 C 930,150 970,330 1030,330 C 1090,330 1120,240 1150,240"
              fill="none"
              stroke="rgba(77, 53, 127, 0.05)"
              strokeWidth="12"
              strokeLinecap="round"
            />

            {/* Base Background Road Path */}
            <path
              d="M 60,240 C 130,240 170,150 230,150 C 290,150 330,330 390,330 C 450,330 490,150 550,150 C 610,150 650,330 710,330 C 770,330 810,150 870,150 C 930,150 970,330 1030,330 C 1090,330 1120,240 1150,240"
              fill="none"
              stroke="#E8E5EF"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Active Animated Road Progress Path */}
            <path
              ref={desktopPathRef}
              d="M 60,240 C 130,240 170,150 230,150 C 290,150 330,330 390,330 C 450,330 490,150 550,150 C 610,150 650,330 710,330 C 770,330 810,150 870,150 C 930,150 970,330 1030,330 C 1090,330 1120,240 1150,240"
              fill="none"
              stroke="#20542D"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Final Arrowhead at End of Road */}
            <polygon
              ref={desktopArrowRef}
              points="1145,233 1165,240 1145,247"
              fill="#E8E5EF"
              className="transition-colors duration-300"
            />
          </svg>

          {/* 6 Connected Process Step Cards on Desktop */}
          <div className="relative z-10 w-full h-full">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isTop = index % 2 === 0;
              const leftPos = `${centerPercents[index]}%`;
              const topPos = isTop ? '12px' : '334px';

              return (
                <div
                  key={step.id}
                  style={{
                    position: 'absolute',
                    left: leftPos,
                    top: topPos,
                  }}
                  className="roadmap-card-desktop roadmap-card group cursor-default w-[172px] lg:w-[178px] xl:w-[194px]"
                >
                  {/* Step Road Connector Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      [isTop ? 'bottom' : 'top']: '-16px',
                    }}
                    className="roadmap-dot-desktop roadmap-dot z-20 shadow-xs"
                  />

                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-1.5 mb-1.5">
                    <span className="text-[10px] xl:text-[11px] font-bold text-[#4D357F] tracking-wider uppercase">
                      {step.label}
                    </span>
                    <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-lg bg-[#F8F7F5] border border-[#E8E5EF] flex items-center justify-center group-hover:bg-[#20542D] group-hover:text-white transition-colors duration-300 shrink-0">
                      <Icon className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-[#4D357F] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xs xl:text-sm font-bold text-[#080B14] leading-snug tracking-tight group-hover:text-[#4D357F] transition-colors mb-1">
                    {step.title}
                  </h3>

                  {/* Tagline / Chip */}
                  <div className="mt-1.5 pt-1.5 border-t border-[#E8E5EF] flex items-center justify-between text-[9.5px] xl:text-[10.5px] font-semibold text-[#20542D]">
                    <span className="truncate">{step.chip}</span>
                    <ArrowRight className="w-2.5 h-2.5 xl:w-3 xl:h-3 opacity-60 group-hover:translate-x-0.5 group-hover:opacity-100 transition-all shrink-0 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. MOBILE / TABLET TIMELINE STAGE (< 1024px) — NATURAL SCROLL */}
      {/* ========================================================================= */}
      <div
        ref={mobileContainerRef}
        className="block lg:hidden relative w-full pb-16 max-w-md mx-auto px-4"
      >
        {/* Centered Vertical Road Track */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-8 w-1 pointer-events-none z-0">
          {/* Base Road Track */}
          <div className="w-full h-full bg-[#E8E5EF] rounded-full" />
          {/* Progress Road Track */}
          <div
            ref={mobileProgressRef}
            className="absolute top-0 left-0 w-full h-full bg-[#20542D] rounded-full origin-top"
            style={{ transform: 'scaleY(0)' }}
          />
        </div>

        {/* Vertical Stacked Step Cards - Centered */}
        <div className="flex flex-col gap-6 relative z-10">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="roadmap-card-mobile roadmap-card relative group w-full text-center bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#E8E5EF] shadow-md hover:border-[#20542D] transition-all"
              >
                {/* Step Road Connector Badge */}
                <div className="roadmap-dot-mobile mx-auto w-10 h-10 rounded-xl bg-white border-2 border-[#4D357F] text-[#4D357F] font-bold text-xs flex items-center justify-center shadow-md mb-3 group-hover:bg-[#20542D] group-hover:border-[#20542D] group-hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Step Label */}
                <span className="text-xs font-bold text-[#4D357F] tracking-wider uppercase block mb-1">
                  {step.label}
                </span>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#080B14] leading-snug tracking-tight group-hover:text-[#4D357F] transition-colors mb-1.5">
                  {step.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-xs sm:text-sm text-[#5F636B] leading-relaxed max-w-xs mx-auto mb-3">
                  {step.desc}
                </p>

                {/* Chip / Tagline */}
                <div className="pt-2 border-t border-[#E8E5EF] flex items-center justify-center gap-1.5 text-xs font-semibold text-[#20542D]">
                  <span>{step.chip}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
