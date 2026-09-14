'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import bannerImg from '@/assets/img/banner-img.png';
import {
  ArrowRight,
  Compass,
  Layers,
  Cpu,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  const connectedItems = [
    {
      title: 'STRATEGY',
      description: 'Insight-led strategies that create clarity and direction.',
      icon: Compass,
      accentColor: '#4D357F',
    },
    {
      title: 'DESIGN',
      description: 'Creative design that builds identity and connection.',
      icon: Layers,
      accentColor: '#4D357F',
    },
    {
      title: 'TECHNOLOGY',
      description: 'Powerful technology that builds scalable digital solutions.',
      icon: Cpu,
      accentColor: '#4D357F',
    },
    {
      title: 'GROWTH',
      description: 'Data-driven growth that delivers impact and results.',
      icon: TrendingUp,
      accentColor: '#4D357F',
    },
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 md:px-10 lg:px-12 bg-[#FFFFFF] overflow-hidden"
    >
      {/* Background Subtle Ambient Accents (Purple only #4D357F) */}
      <div className="absolute top-12 right-1/4 w-[500px] h-[500px] bg-[#4D357F]/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#4D357F]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Left Animated Vertical Guide Rail with Moving Dot */}
      <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-20 pointer-events-none">
        <div className="relative flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-[#4D357F]" />
          <div className="absolute w-6 h-6 rounded-full border border-[#4D357F] animate-ping opacity-40" />
        </div>

        <div className="relative w-[2px] h-40 bg-[#E8E5EF] overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-[#4D357F] to-[#080B14]"
            animate={{ y: [-40, 160] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="w-1.5 h-1.5 rounded-full bg-[#4D357F]/60" />
      </div>

      {/* Top Main Hero Banner Layout (2-Column Grid on Desktop) */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Center-Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left relative z-10">
            
            {/* Subtle Abstract Brand Symbol & Concentric Circles badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#F8F7F5] border border-[#E8E5EF] mb-6 shadow-sm"
            >
              {/* Circular Abstract Brand Symbol with subtle concentric rings */}
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#4D357F]/30 animate-ping opacity-30" />
                <div className="absolute inset-[-3px] rounded-full border border-[#4D357F]/20" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#4D357F]" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#080B14]">
                Buzz N Beyond Innovations
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4D357F]" />
            </motion.div>

            {/* Main Heading: Purple #4D357F top line (single line), Solid Dark Navy #080B14 bottom line, No Gradient */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="hero-heading text-left uppercase w-full"
            >
              <span className="block text-[#4D357F] text-3xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[80px] font-extrabold leading-[0.95] tracking-[-0.04em] whitespace-nowrap">
                IDEAS DESERVE TO
              </span>
              <span className="block text-[#080B14] text-3xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[80px] font-extrabold leading-[0.95] tracking-[-0.04em] mt-1 sm:mt-2 whitespace-nowrap">
                GO BEYOND
              </span>
            </motion.h1>

            {/* Paragraph Text: Clean, readable, elegant */}
            <motion.p
              id="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl text-[#5F636B] max-w-xl font-normal leading-relaxed text-balance"
            >
              We help ambitious businesses build distinctive brands, create meaningful digital experiences and grow through strategy, creativity, technology and AI.
            </motion.p>

            {/* Action Buttons: Solid Colors Only, Green default, Purple hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 sm:mt-9 flex flex-wrap items-center gap-4"
            >
              <button
                id="hero-cta-contact"
                onClick={onOpenContact}
                className="btn-primary group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 arrow" />
              </button>
            </motion.div>
          </div>

          {/* Right-Side Vector Image & Rotating Thin Circular Patterns */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            
            {/* Thin Concentric Circular Line Patterns (Rotating slowly) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              {/* Outer circle */}
              <motion.div
                className="w-[360px] sm:w-[460px] lg:w-[500px] h-[360px] sm:h-[460px] lg:h-[500px] rounded-full border border-dashed border-[#4D357F]/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              />
              {/* Middle circle with purple accent points */}
              <motion.div
                className="absolute w-[280px] sm:w-[360px] lg:w-[390px] h-[280px] sm:h-[360px] lg:h-[390px] rounded-full border border-[#4D357F]/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#4D357F]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#080B14]" />
              </motion.div>
              {/* Inner subtle circle */}
              <div className="absolute w-[200px] sm:w-[260px] lg:w-[280px] h-[200px] sm:h-[260px] lg:h-[280px] rounded-full border border-[#E8E5EF]" />
            </div>

            {/* Provided Right-Side Vector Image with Subtle Floating Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] aspect-square flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-full"
              >
                <Image
                  src={bannerImg}
                  alt="Buzz N Beyond Banner Image"
                  fill
                  priority
                  referrerPolicy="no-referrer"
                  className="object-contain drop-shadow-xl"
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 460px"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* Bottom Connected Section: Clean Minimal Rounded Container with Green #20542D Hover Glow */}
        <motion.div
          id="hero-connected-section"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hero-bottom-box mt-14 sm:mt-20 p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-[#E8E5EF] shadow-sm shadow-[#080B14]/4"
        >
          {/* 4 Connected Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
            {connectedItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 * index,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative p-5 sm:p-6 rounded-2xl bg-[#F8F7F5] border border-[#E8E5EF] hover:border-[#4D357F]/50 hover:bg-white transition-all duration-300 hover:shadow-md hover:shadow-[#4D357F]/8 hover:-translate-y-1"
                >
                  {/* Icon & Indicator */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E5EF] flex items-center justify-center text-[#080B14] group-hover:bg-[#080B14] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4 text-[#4D357F] group-hover:text-white" />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#4D357F]/30 group-hover:bg-[#20542D] group-hover:scale-125 transition-all" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-[#080B14] tracking-wide uppercase mb-1.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#5F636B] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Dotted indicator line on bottom */}
                  <div className="mt-3.5 w-8 h-[2px] bg-[#E8E5EF] group-hover:bg-[#4D357F] transition-all duration-300" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
