'use client';

import React from 'react';
import { motion, type Variants } from 'motion/react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { CharReveal } from '../CharReveal';

interface PackagesSectionProps {
  onSelectPackage?: (packageName: string) => void;
}

interface PackageItem {
  id: string;
  name: string;
  bestFor: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  accent: 'green' | 'purple';
}

const packages: PackageItem[] = [
  {
    id: 'starter',
    name: 'STARTER',
    bestFor: 'For new businesses and growing brands',
    description:
      'A focused package to build your digital foundation with clear branding, essential design and online visibility.',
    features: [
      'Brand Audit',
      'Basic Brand Strategy',
      'Social Media Creative Direction',
      'Website UI Review',
      'Basic SEO Setup',
      'Monthly Performance Summary',
    ],
    buttonText: 'Get Started',
    accent: 'purple',
  },
  {
    id: 'growth',
    name: 'GROWTH',
    bestFor: 'For brands ready to scale',
    description:
      'A complete growth package combining strategy, design, marketing and optimization to drive better engagement and leads.',
    features: [
      'Brand Strategy',
      'Creative Campaign Planning',
      'Social Media Marketing',
      'SEO & AI Search / GEO',
      'Paid Ads Support',
      'Analytics & CRO',
      'Monthly Growth Report',
    ],
    buttonText: 'Start Growth',
    isPopular: true,
    accent: 'green',
  },
  {
    id: 'beyond',
    name: 'BEYOND',
    bestFor: 'For ambitious brands and custom needs',
    description:
      'A custom full-service package for brands looking for advanced digital experiences, automation and long-term growth.',
    features: [
      'Complete Brand Direction',
      'UI/UX Design',
      'Web Development',
      'AI Integrations',
      'Marketing Automation',
      'Performance Campaigns',
      'Dedicated Growth Support',
    ],
    buttonText: 'Let’s Talk',
    accent: 'purple',
  },
];

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.94,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      delay: index * 0.16,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function PackagesSection({ onSelectPackage }: PackagesSectionProps) {
  return (
    <section
      id="packages"
      className="relative overflow-hidden bg-[#F8F7F5] py-24 sm:py-32 md:py-36 px-4 sm:px-6 md:px-12 text-[#080B14] select-none"
    >
      {/* Subtle Background Glow Elements (Very light green & purple ambient) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#4D357F]/5 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#20542D]/4 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="badge section-label inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4F0FA] border border-[#E8E5EF] text-[#4D357F] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#4D357F]" />
            Packages
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="display-text text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#080B14] max-w-3xl"
          >
            <CharReveal text="Choose the Right Growth Package" />
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-sm sm:text-base md:text-lg text-[#5F636B] max-w-2xl font-normal leading-relaxed"
          >
            Flexible digital growth packages designed to help your brand build stronger visibility, better experiences and measurable results.
          </motion.p>
        </div>

        {/* 3 Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => {
            const isPopular = pkg.isPopular;

            return (
              <motion.div
                key={pkg.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className={`package-card relative flex flex-col justify-between rounded-[32px] p-8 sm:p-9 ${
                  isPopular
                    ? 'popular lg:-translate-y-2'
                    : 'bg-white'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className="package-badge badge inline-flex items-center gap-1.5 shadow-sm">
                      <Sparkles className="w-3 h-3 text-white" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Top Header */}
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3
                      className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                        isPopular ? 'text-white' : 'text-[#080B14]'
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        isPopular
                          ? 'bg-[#20542D] shadow-[0_0_10px_#20542D]'
                          : 'bg-[#4D357F]'
                      }`}
                    />
                  </div>

                  {/* Best For Tagline */}
                  <p
                    className={`text-xs font-semibold tracking-wide uppercase mb-4 ${
                      isPopular ? 'text-white/72' : 'text-[#4D357F]'
                    }`}
                  >
                    {pkg.bestFor}
                  </p>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 pb-6 border-b ${
                      isPopular
                        ? 'text-white/72 border-white/10'
                        : 'text-[#5F636B] border-[#E8E5EF]'
                    }`}
                  >
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-8">
                    <span
                      className={`block text-xs font-bold uppercase tracking-wider mb-3.5 ${
                        isPopular ? 'text-white' : 'text-[#080B14]'
                      }`}
                    >
                      Included Capabilities
                    </span>
                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-center gap-3 text-sm font-medium ${
                            isPopular ? 'text-white/82' : 'text-[#080B14]'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                              isPopular
                                ? 'bg-[#20542D]/25 border border-[#20542D]/40'
                                : 'bg-[#20542D]/10'
                            }`}
                          >
                            <Check
                              className={`w-3.5 h-3.5 stroke-[2.5] ${
                                isPopular ? 'text-white' : 'text-[#20542D]'
                              }`}
                            />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div
                  className={`pt-6 border-t ${
                    isPopular ? 'border-white/10' : 'border-[#E8E5EF]'
                  }`}
                >
                  <button
                    onClick={() => onSelectPackage?.(pkg.name)}
                    className="package-button group w-full flex items-center justify-center gap-2.5 font-semibold text-sm cursor-pointer"
                  >
                    <span>{pkg.buttonText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PackagesSection;
