'use client';

import React from 'react';

export function MarqueeSection() {
  const keywords = [
    'Brand Strategy',
    'Creative Direction',
    'Campaign Design',
    'Content Creation',
    'Video & Motion',
    'AI-Assisted Creative',
    'AI Integrations',
    'UI/UX Design',
    'Web Development',
    'AI Search / GEO',
  ];

  // Duplicate for seamless infinite loop
  const duplicatedKeywords = [...keywords, ...keywords, ...keywords];

  return (
    <section
      id="keywords-marquee"
      className="py-8 sm:py-10 bg-[#F8F7F5] overflow-hidden border-b border-[#E8E5EF]/60 relative select-none"
    >
      {/* Side fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8F7F5] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8F7F5] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-3 sm:gap-4">
        {duplicatedKeywords.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-[#E8E5EF] shadow-sm shadow-[#080B14]/3 text-[#080B14] hover:border-[#4D357F]/40 hover:bg-[#4D357F]/5 transition-all duration-200 cursor-default shrink-0 group"
          >
            <span className="w-2 h-2 rounded-full bg-[#4D357F] shrink-0 group-hover:scale-125 transition-transform" />
            <span className="text-xs sm:text-sm font-semibold tracking-tight text-[#080B14] whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
