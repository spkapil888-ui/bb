'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import bannerImg from '@/assets/img/banner-img.png';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CharReveal } from './CharReveal';

interface AboutSectionProps {
  onGetStarted: () => void;
}

export function AboutSection({ onGetStarted }: AboutSectionProps) {
  const highlights = [
    { title: 'Brand Distinction', desc: 'Crafting unforgettable identities' },
    { title: 'AI Automation', desc: 'Accelerating next-gen workflows' },
    { title: 'Performance Growth', desc: 'Conversion-driven digital growth' },
  ];

  return (
    <section
      id="about"
      className="relative py-12 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-white overflow-hidden border-y border-[#E8E5EF]/60"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (Desktop): Text & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Section Tag */}
            <div className="section-label badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4D357F]/8 border border-[#4D357F]/20 text-[#4D357F] text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#4D357F]" />
              About Us
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#080B14] leading-[1.15] font-['Sora']">
              <CharReveal text="Buzz N Beyond Innovations" className="text-[#4D357F]" />
            </h2>

            {/* Content */}
            <p className="mt-6 text-base sm:text-lg text-[#5F636B] leading-relaxed max-w-xl">
              From brand building and creative campaigns to digital experiences, AI-powered solutions and growth marketing, we help businesses attract, engage and convert the right audience.
            </p>

            {/* Micro Highlights Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-2xl bg-[#F8F7F5] border border-[#E8E5EF] flex flex-col gap-1 transition-all duration-300 hover:border-[#4D357F]/40 hover:-translate-y-0.5"
                >
                  <span className="text-xs font-bold text-[#080B14]">{item.title}</span>
                  <span className="text-[11px] text-[#5F636B] leading-tight">{item.desc}</span>
                </div>
              ))}
            </div>

            {/* Premium Pill CTA Button */}
            <div className="mt-10">
              <button
                id="about-get-started-btn"
                onClick={onGetStarted}
                className="btn-primary group"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-4 h-4 arrow" />
              </button>
            </div>
          </motion.div>

          {/* Right Column (Desktop): Vector Banner Image with Rotating Thin Circular Patterns */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            
            {/* Thin Concentric Circular Line Patterns (Rotating slowly) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              {/* Outer circle */}
              <motion.div
                className="w-[260px] sm:w-[420px] lg:w-[480px] h-[260px] sm:h-[420px] lg:h-[480px] rounded-full border border-dashed border-[#4D357F]/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              />
              {/* Middle circle with purple accent points */}
              <motion.div
                className="absolute w-[210px] sm:w-[330px] lg:w-[380px] h-[210px] sm:h-[330px] lg:h-[380px] rounded-full border border-[#4D357F]/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#4D357F]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#080B14]" />
              </motion.div>
              {/* Inner subtle circle */}
              <div className="absolute w-[160px] sm:w-[240px] lg:w-[270px] h-[160px] sm:h-[240px] lg:h-[270px] rounded-full border border-[#E8E5EF]" />
            </div>

            {/* Provided Vector Image with Subtle Floating Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[260px] sm:max-w-[380px] lg:max-w-[440px] aspect-[4/3] sm:aspect-square flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-full"
              >
                <Image
                  src={bannerImg}
                  alt="Buzz N Beyond Innovations Visual"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-contain drop-shadow-xl"
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 380px, 440px"
                />
              </motion.div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
