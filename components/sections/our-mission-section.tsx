"use client";

import React from "react";
import { motion } from "motion/react";
import { Globe2, Lightbulb, Handshake } from "lucide-react";
import { GLSLHills } from "@/components/ui/glsl-hills";

const missionItems = [
  {
    title: "BEYOND BORDERS",
    text: "Global perspective. Local understanding.",
    icon: Globe2,
  },
  {
    title: "BEYOND ORDINARY",
    text: "Creative thinking. Strategic execution.",
    icon: Lightbulb,
  },
  {
    title: "BEYOND PROJECTS",
    text: "Partnerships built for the long run.",
    icon: Handshake,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.92,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: index * 0.16,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

interface OurMissionSectionProps {
  onGetStarted?: () => void;
}

export default function OurMissionSection({ onGetStarted }: OurMissionSectionProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onGetStarted) {
      e.preventDefault();
      onGetStarted();
    }
  };

  return (
    <section
      id="our-mission"
      className="relative overflow-hidden bg-[#F8F7F5] px-4 py-12 sm:py-16 md:py-[110px] text-[#080B14] sm:px-6 lg:px-8"
    >
      {/* Background Subtle GLSL Grey Mesh Wave */}
      <div className="glsl-wave-wrap pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[65%] opacity-[0.18] overflow-hidden">
        <GLSLHills width="100%" height="100%" speed={0.35} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="our-mission-heading display-text mx-auto max-w-4xl text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.05] tracking-[-0.04em] text-[#080B14]"
        >
          Think Beyond,{" "}
          <span className="text-[#4D357F]">Build Beyond</span>
        </motion.h2>

        {/* Section Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-[1.6] text-[#5F636B]"
        >
          Fresh thinking, bold execution and meaningful partnerships for brands ready to move forward.
        </motion.p>

        {/* 3 Circular Cards (Staggered one by one) */}
        <div className="mx-auto mt-[45px] md:mt-[70px] flex flex-wrap items-center justify-center gap-6 lg:gap-8 max-w-5xl">
          {missionItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="group relative flex h-[220px] w-[220px] lg:h-[240px] lg:w-[240px] flex-col items-center justify-center rounded-full border border-[#4D357F]/[0.18] bg-white/[0.78] p-5 text-center shadow-[0_18px_45px_rgba(8,11,20,0.06)] backdrop-blur-md transition-all duration-400 hover:-translate-y-2 hover:border-[#20542D] hover:shadow-[0_24px_60px_rgba(32,84,45,0.12)] cursor-default"
              >
                {/* Icon Circle */}
                <div className="mb-3.5 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#20542D] text-white shadow-[0_12px_30px_rgba(32,84,45,0.22)] transition-all duration-400 group-hover:bg-[#4D357F] group-hover:shadow-[0_12px_30px_rgba(77,53,127,0.25)]">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold tracking-[-0.02em] text-[#080B14]">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="mt-1.5 max-w-[170px] text-[13px] leading-[1.5] text-[#5F636B]">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.a
          id="our-mission-get-started-btn"
          href="#contact"
          onClick={handleClick}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="group mt-12 md:mt-14 inline-flex items-center justify-center rounded-full border border-[#20542D] bg-[#20542D] px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#4D357F] hover:bg-[#4D357F] hover:shadow-[0_18px_45px_rgba(77,53,127,0.24)] cursor-pointer"
        >
          Get Started
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </motion.a>
      </div>
    </section>
  );
}
