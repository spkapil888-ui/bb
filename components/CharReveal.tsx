'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface CharRevealProps {
  text: string;
  className?: string;
  charClassName?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' | 'span';
  id?: string;
  delay?: number;
}

export function CharReveal({
  text,
  className = '',
  charClassName = '',
  tag = 'span',
  id,
  delay = 0,
}: CharRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10% 0px -10% 0px' });

  // Split into words and chars so words wrap properly
  const words = (text || '').split(' ');

  const Tag = tag as any;

  return (
    <Tag id={id} ref={containerRef} className={`char-reveal inline-block ${className}`}>
      {words.map((word, wordIndex) => {
        let globalCharOffset = 0;
        for (let i = 0; i < wordIndex; i++) {
          globalCharOffset += words[i].length + 1;
        }

        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.28em]">
            {word.split('').map((char, charIndex) => {
              const charTotalIndex = globalCharOffset + charIndex;
              return (
                <motion.span
                  key={charIndex}
                  initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                      : { opacity: 0, y: 16, filter: 'blur(4px)' }
                  }
                  transition={{
                    duration: 0.45,
                    delay: delay + charTotalIndex * 0.015,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className={`inline-block ${charClassName}`}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </Tag>
  );
}
