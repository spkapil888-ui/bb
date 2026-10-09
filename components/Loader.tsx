'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Fast, optimized counter (~480ms total) for lightning-quick website access
    const duration = 480;
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Fluid ease-out curve
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.min(100, Math.round(ease * 100));
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        // Instant micro-pause before clean glass fade-out
        setTimeout(() => {
          setIsVisible(false);
        }, 90);
      }
    };

    const animId = requestAnimationFrame(updateCounter);

    // Fail-safe quick exit (750ms max)
    const fallbackTimer = setTimeout(() => {
      setIsVisible(false);
    }, 750);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        onComplete();
      }}
    >
      {isVisible && (
        <motion.div
          id="site-loader"
          key="glass-loader"
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-6 sm:p-10 md:p-14 text-white select-none bg-[#080B14]/80 backdrop-blur-2xl border border-white/[0.06] cursor-pointer"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.99,
            transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          }}
          onClick={() => setIsVisible(false)}
          title="Click to enter immediately"
        >
          {/* Subtle Ambient Glow Elements Behind Glass */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] bg-[#4D357F]/25 rounded-full blur-[110px]" />
            <div className="absolute bottom-1/4 right-1/3 w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] bg-[#20542D]/20 rounded-full blur-[90px]" />
          </div>

          {/* Top Brand Header */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[#4D357F] shadow-[0_0_8px_#7B59C9]" />
              <span className="text-xs tracking-[0.22em] text-white/90 uppercase font-semibold">
                Buzz N Beyond Innovations
              </span>
            </div>
            <div className="text-[11px] text-white/50 tracking-widest hidden sm:block font-medium">
              INNOVATE · ELEVATE · GO BEYOND
            </div>
          </div>

          {/* Centered Frosted Glass Card with Snappy Counter */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
            <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.05] border border-white/[0.12] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] flex flex-col items-center max-w-sm w-full mx-auto">
              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white font-mono tabular-nums">
                  {String(count).padStart(2, '0')}
                </span>
                <span className="text-base text-[#7B59C9] font-semibold">%</span>
              </div>

              {/* Glowing Progress Track */}
              <div className="relative w-full h-[3px] bg-white/[0.08] rounded-full overflow-hidden mb-3">
                <div
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#4D357F] via-[#7B59C9] to-[#20542D] rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_#7B59C9]"
                  style={{ width: `${count}%` }}
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#20542D] animate-ping" />
                <span className="text-[11px] tracking-wider uppercase text-white/70 font-medium">
                  {count < 100 ? 'Entering Experience...' : 'Ready'}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-white/40 tracking-wider">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 inline-block" />
              Quick Access
            </span>
            <span className="text-white/35 hidden sm:inline">Tap to skip</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
