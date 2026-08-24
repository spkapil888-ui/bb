'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, Lightbulb, BarChart3, Repeat, Users2, TrendingUp } from 'lucide-react';
import { CharReveal } from './CharReveal';

export function WhyChooseUsSection() {
  const cards = [
    {
      title: 'STRATEGY FIRST',
      desc: 'Start with clarity. Build with purpose.',
      icon: Compass,
      num: '01',
    },
    {
      title: 'CREATIVE THINKING',
      desc: 'Ideas that make brands memorable.',
      icon: Lightbulb,
      num: '02',
    },
    {
      title: 'DATA-LED',
      desc: 'Real insights. Smarter decisions.',
      icon: BarChart3,
      num: '03',
    },
    {
      title: 'END-TO-END',
      desc: 'From first idea to ongoing growth.',
      icon: Repeat,
      num: '04',
    },
    {
      title: 'COLLABORATIVE',
      desc: 'We build with you, not just for you.',
      icon: Users2,
      num: '05',
    },
    {
      title: 'BUILT TO GROW',
      desc: 'Launch today. Improve tomorrow.',
      icon: TrendingUp,
      num: '06',
    },
  ];

  return (
    <section
      id="why-us"
      className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-[#F8F7F5] overflow-hidden border-b border-[#E8E5EF]"
    >
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E5EF] text-[#4D357F] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#4D357F]" />
            The Beyond Advantage
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#080B14]">
            <CharReveal text="Why choose us" />
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#5F636B] max-w-2xl font-normal leading-relaxed">
            A creative growth partner for brands that want more than just an online presence. We combine strategy, creativity, technology, AI and performance to build brands and experiences designed for what&apos;s next.
          </p>
        </div>

        {/* 6 Cards Grid: 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                className="group relative p-8 rounded-3xl bg-white border border-[#E8E5EF] shadow-sm shadow-[#080B14]/3 hover:shadow-xl hover:shadow-[#4D357F]/10 hover:border-[#4D357F]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Num */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8F7F5] border border-[#E8E5EF] flex items-center justify-center group-hover:bg-[#4D357F] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#4D357F] group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#5F636B]/60 group-hover:text-[#4D357F] transition-colors">
                      {card.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#080B14] tracking-tight group-hover:text-[#4D357F] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-[#5F636B] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Subtle Accent Bottom Line */}
                <div className="mt-6 pt-4 border-t border-[#E8E5EF]/60 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#4D357F] uppercase tracking-wider">
                    Proven Standard
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4D357F] opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
