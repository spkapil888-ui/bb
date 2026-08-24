'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [count, setCount] = useState(1);
  const [isClosing, setIsClosing] = useState(false);
  const [shutterDone, setShutterDone] = useState(false);

  useEffect(() => {
    // Fast but smooth counter animation from 001 to 100
    const duration = 1600; // 1.6s
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * 99) + 1;
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        setTimeout(() => {
          setIsClosing(true);
        }, 250);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, []);

  const formattedCount = count.toString().padStart(3, '0');

  return (
    <AnimatePresence
      onExitComplete={() => {
        setShutterDone(true);
        onComplete();
      }}
    >
      {!shutterDone && !isClosing && (
        <motion.div
          id="site-loader"
          key="loader-container"
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#080B14] p-8 md:p-14 text-white overflow-hidden select-none"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
            transition: { duration: 0.85, ease: [0.77, 0, 0.175, 1] },
          }}
        >
          {/* Top brand header mark */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#4D357F] animate-pulse" />
              <span className="text-xs tracking-[0.25em] text-[#E8E5EF]/60 uppercase font-medium">
                Buzz N Beyond Innovations
              </span>
            </div>
            <div className="text-xs text-[#E8E5EF]/40 tracking-wider hidden sm:block font-mono">
              INNOVATE · ELEVATE · GO BEYOND
            </div>
          </div>

          {/* Bottom-left corner counter & brand accent line */}
          <div className="flex flex-col gap-3">
            <div className="flex items-end gap-4">
              <div className="font-mono text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white tabular-nums">
                {formattedCount}
              </div>
              <div className="pb-3 text-xs tracking-widest text-[#4D357F] font-semibold uppercase">
                / 100%
              </div>
            </div>

            {/* Small brand accent progress line */}
            <div className="relative w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-[#4D357F]"
                style={{ width: `${count}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <p className="text-[11px] text-[#E8E5EF]/50 tracking-wider uppercase font-mono">
              Loading Digital Architecture...
            </p>
          </div>
        </motion.div>
      )}

      {/* Shutter Reveal curtain effect */}
      {isClosing && (
        <motion.div
          id="loader-shutter"
          key="loader-shutter"
          className="fixed inset-0 z-[9999] pointer-events-none"
          initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          animate={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          onAnimationComplete={() => {
            setShutterDone(true);
            onComplete();
          }}
        >
          <div className="w-full h-full bg-[#080B14] flex flex-col justify-end p-8 md:p-14">
            <div className="font-mono text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white/40">
              100
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
