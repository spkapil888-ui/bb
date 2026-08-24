"use client";

import { motion } from "framer-motion";
import { Globe2, Lightbulb, Handshake } from "lucide-react";
import GlowHorizonFM from "@/components/ui/glow-horizon";

const circleItems = [
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

interface ThinkBeyondSectionProps {
  onGetStarted?: () => void;
}

export default function ThinkBeyondSection({ onGetStarted }: ThinkBeyondSectionProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onGetStarted) {
      e.preventDefault();
      onGetStarted();
    }
  };

  return (
    <section
      id="think-beyond"
      className="relative overflow-hidden bg-[#080B14] px-4 py-28 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 opacity-90 pointer-events-none">
        <GlowHorizonFM variant="bottom" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,53,127,0.18),transparent_45%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#E8E5EF]/80"
        >
          Our Mission
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl"
        >
          Think Beyond, Build Beyond
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl"
        >
          Fresh thinking, bold execution and meaningful partnerships for brands ready to move forward.
        </motion.p>

        <div className="mx-auto mt-20 grid max-w-6xl gap-8 md:grid-cols-3">
          {circleItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative mx-auto flex aspect-square w-full max-w-[310px] flex-col items-center justify-center rounded-full border border-white/14 bg-white/[0.06] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#20542D] hover:bg-white/[0.09]"
              >
                <span className="absolute inset-[-10px] rounded-full border border-[#4D357F]/30 opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:border-[#20542D]/70" />
                <span className="absolute inset-[14px] rounded-full border border-white/10" />

                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#20542D] text-white shadow-[0_20px_50px_rgba(32,84,45,0.28)] transition-all duration-500 group-hover:bg-[#4D357F]">
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[220px] text-sm leading-6 text-white/70">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.a
          id="think-beyond-get-started-btn"
          href="#contact"
          onClick={handleClick}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="group mt-16 inline-flex items-center justify-center rounded-full border border-[#20542D] bg-[#20542D] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#4D357F] hover:bg-[#4D357F] hover:shadow-[0_18px_45px_rgba(77,53,127,0.26)] cursor-pointer"
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
