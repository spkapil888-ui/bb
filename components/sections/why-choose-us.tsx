'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Compass,
  Lightbulb,
  TrendingUp,
  Layers,
  BarChart3,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { CharReveal } from '../CharReveal';

interface WhyChooseUsCard {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accent: 'purple' | 'green';
}

const cardsData: WhyChooseUsCard[] = [
  {
    number: '01',
    title: 'Strategy First',
    description: 'Start with clarity. Build with purpose.',
    icon: Compass,
    accent: 'purple',
  },
  {
    number: '02',
    title: 'Creative Thinking',
    description: 'Ideas that make brands memorable.',
    icon: Lightbulb,
    accent: 'purple',
  },
  {
    number: '03',
    title: 'Performance Driven',
    description: 'Creative backed by measurable results.',
    icon: TrendingUp,
    accent: 'green',
  },
  {
    number: '04',
    title: 'Complete Support',
    description: 'Everything digital. One connected strategy.',
    icon: Layers,
    accent: 'purple',
  },
  {
    number: '05',
    title: 'Data Led',
    description: 'Less guessing. More informed decisions.',
    icon: BarChart3,
    accent: 'purple',
  },
  {
    number: '06',
    title: 'Long-Term Growth',
    description: 'Build today. Grow for tomorrow.',
    icon: ArrowUpRight,
    accent: 'green',
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#080B14] py-24 sm:py-32 md:py-36 px-4 sm:px-6 md:px-12 text-[#FFFFFF] border-t border-b border-white/[0.06] select-none"
    >
      {/* 1. Subtle Dotted Matrix Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(rgba(77, 53, 127, 0.4) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* 2. Cinematic Moving Radial Gradient Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
        {/* Purple Glow Blob (Left to Center) */}
        <motion.div
          animate={{
            x: ['-10%', '15%', '-5%', '-10%'],
            y: ['-15%', '10%', '20%', '-15%'],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-[#4D357F]/30 blur-[130px]"
        />

        {/* Green Glow Blob (Right to Bottom) */}
        <motion.div
          animate={{
            x: ['10%', '-15%', '5%', '10%'],
            y: ['15%', '-10%', '-20%', '15%'],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-24 -right-24 w-[540px] h-[540px] rounded-full bg-[#20542D]/28 blur-[140px]"
        />

        {/* Deep Center Ambient Atmosphere */}
        <motion.div
          animate={{
            opacity: [0.15, 0.28, 0.15],
            scale: [0.95, 1.1, 0.95],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] rounded-full bg-[#4D357F]/20 blur-[150px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-[#4D357F]/40 text-[#FFFFFF] text-xs font-semibold uppercase tracking-wider mb-5 backdrop-blur-md shadow-xs shadow-[#4D357F]/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#4D357F]" />
            Why Choose Us
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#FFFFFF] max-w-3xl"
          >
            <CharReveal text="Why choose us" />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-sm sm:text-base md:text-lg text-white/72 max-w-2xl font-normal leading-relaxed"
          >
            A creative growth partner for brands that want more than just an online presence. We combine strategy, creativity, technology, AI and performance to build brands and experiences designed for what&apos;s next.
          </motion.p>
        </div>

        {/* 6 Cards Grid (3 cols Desktop, 2 cols Tablet, 1 col Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {cardsData.map((card, index) => {
            const Icon = card.icon;
            const isGreen = card.accent === 'green';

            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                  transition: { duration: 0.25, ease: 'easeOut' },
                }}
                className={`group relative p-7 sm:p-8 rounded-[28px] bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] flex flex-col justify-between transition-all duration-300 ${
                  isGreen
                    ? 'hover:border-[#20542D] hover:bg-white/[0.07] hover:shadow-[0_20px_50px_rgba(32,84,45,0.22)]'
                    : 'hover:border-[#4D357F] hover:bg-white/[0.07] hover:shadow-[0_20px_50px_rgba(77,53,127,0.22)]'
                }`}
              >
                <div>
                  {/* Top Bar: Icon Box + Number & Glowing Dot */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
                        isGreen
                          ? 'group-hover:bg-[#20542D] group-hover:border-[#20542D]'
                          : 'group-hover:bg-[#4D357F] group-hover:border-[#4D357F]'
                      }`}
                    >
                      <Icon className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-white/40 group-hover:text-white/80 transition-colors">
                        {card.number}
                      </span>
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          isGreen
                            ? 'bg-[#20542D] group-hover:shadow-[0_0_10px_#20542D] group-hover:scale-125'
                            : 'bg-[#4D357F] group-hover:shadow-[0_0_10px_#4D357F] group-hover:scale-125'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3
                    className={`text-xl font-bold tracking-tight text-white transition-colors duration-300 ${
                      isGreen
                        ? 'group-hover:text-white'
                        : 'group-hover:text-white'
                    }`}
                  >
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mt-2.5 text-sm sm:text-[15px] text-white/72 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Caption & Line */}
                <div className="mt-8 pt-4 border-t border-white/[0.08] group-hover:border-white/20 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-white/60 group-hover:text-white/90 transition-colors">
                    <ShieldCheck
                      className={`w-3.5 h-3.5 ${
                        isGreen ? 'text-[#20542D]' : 'text-[#4D357F]'
                      }`}
                    />
                    <span>Guaranteed Agency Standard</span>
                  </div>

                  <div
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      isGreen
                        ? 'bg-[#20542D] group-hover:scale-125'
                        : 'bg-[#4D357F] group-hover:scale-125'
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
