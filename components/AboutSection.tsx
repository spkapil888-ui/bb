'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Sparkles,
  Palette,
  Code2,
  Cpu,
  TrendingUp,
  Megaphone,
  Compass,
  Layers,
  Zap,
} from 'lucide-react';
import { CharReveal } from './CharReveal';

interface AboutSectionProps {
  onGetStarted: () => void;
}

export function AboutSection({ onGetStarted }: AboutSectionProps) {
  const highlights = [
    { title: 'Brand Distinction', desc: 'Crafting unforgettable identities' },
    { title: 'AI Automation', desc: 'Accelerating next-gen workflows' },
    { title: 'Full Performance', desc: 'Conversion-driven digital growth' },
  ];

  const orbitNodesOuter = [
    { icon: Palette, label: 'Design', color: '#4D357F', x: 150, y: 0 },
    { icon: Code2, label: 'Tech', color: '#20542D', x: 46, y: 143 },
    { icon: Cpu, label: 'AI', color: '#4D357F', x: -121, y: 88 },
    { icon: TrendingUp, label: 'Growth', color: '#20542D', x: -121, y: -88 },
    { icon: Megaphone, label: 'Marketing', color: '#4D357F', x: 46, y: -143 },
  ];

  const orbitNodesInner = [
    { icon: Compass, label: 'Strategy', color: '#080B14', x: 87, y: 50 },
    { icon: Sparkles, label: 'Creative', color: '#4D357F', x: -87, y: 50 },
    { icon: Layers, label: 'Branding', color: '#20542D', x: 0, y: -100 },
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-white overflow-hidden border-y border-[#E8E5EF]/60"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4D357F]/8 border border-[#4D357F]/20 text-[#4D357F] text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#4D357F]" />
              About Us
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#080B14] leading-[1.15]">
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

          {/* Right Column: Abstract Brand Visual / Animated Gyro with Logo & Service Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <div className="relative w-80 sm:w-96 h-80 sm:h-96 flex items-center justify-center">
              
              {/* Glowing Background Blur */}
              <div className="absolute inset-0 rounded-full bg-[#4D357F]/12 blur-3xl pointer-events-none" />

              {/* Outer Orbit Ring with Service Icons (360deg spin) */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#4D357F]/25 animate-[spin_32s_linear_infinite] flex items-center justify-center">
                {orbitNodesOuter.map((node) => {
                  const Icon = node.icon;

                  return (
                    <div
                      key={node.label}
                      style={{
                        transform: `translate(${node.x}px, ${node.y}px)`,
                      }}
                      className="absolute group flex items-center justify-center"
                    >
                      {/* Counter-rotating icon so it stays upright */}
                      <div className="animate-[spin_32s_linear_infinite_reverse] flex flex-col items-center">
                        <div
                          style={{ backgroundColor: node.color }}
                          className="w-9 h-9 rounded-xl text-white flex items-center justify-center shadow-lg shadow-[#080B14]/15 border border-white/40 transition-transform duration-300 group-hover:scale-110"
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="mt-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold uppercase bg-white/90 text-[#080B14] shadow-xs border border-[#E8E5EF] whitespace-nowrap">
                          {node.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Middle Gyro Ring with Inner Service Icons (Reverse spin) */}
              <div className="absolute inset-10 rounded-full border border-[#4D357F]/30 animate-[spin_24s_linear_infinite_reverse] flex items-center justify-center">
                {orbitNodesInner.map((node) => {
                  const Icon = node.icon;

                  return (
                    <div
                      key={node.label}
                      style={{
                        transform: `translate(${node.x}px, ${node.y}px)`,
                      }}
                      className="absolute group flex items-center justify-center"
                    >
                      <div className="animate-[spin_24s_linear_infinite] flex flex-col items-center">
                        <div
                          style={{ backgroundColor: node.color }}
                          className="w-8 h-8 rounded-lg text-white flex items-center justify-center shadow-md border border-white/40 transition-transform duration-300 group-hover:scale-110"
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="mt-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold uppercase bg-white/90 text-[#080B14] shadow-xs border border-[#E8E5EF] whitespace-nowrap">
                          {node.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Inner Decorative Ring */}
              <div className="absolute inset-20 rounded-full border border-[#E8E5EF] bg-white/70 backdrop-blur-md shadow-inner" />

              {/* Center Official Logo Card */}
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-28 sm:w-32 h-28 sm:h-32 rounded-3xl bg-white border border-[#E8E5EF] shadow-xl shadow-[#4D357F]/15 p-3 flex flex-col items-center justify-center group"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="https://dev.buzznbeyond.com/wp-content/uploads/2025/03/Untitled-design-9-e1784613727472.png"
                    alt="Buzz N Beyond Innovations Logo"
                    fill
                    className="object-contain p-1.5"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 640px) 112px, 128px"
                  />
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
