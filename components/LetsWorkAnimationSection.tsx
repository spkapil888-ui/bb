'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function LetsWorkAnimationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    const isMobile = window.innerWidth < 768;
    const targetScale = isMobile ? 5.5 : 8;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        text,
        {
          scale: 0.25,
          opacity: 1,
        },
        {
          scale: targetScale,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=1200',
            scrub: true,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="lets-work"
      ref={sectionRef}
      className="lets-work-section select-none"
    >
      <h2
        ref={textRef}
        className="lets-work-text"
      >
        LET’S WORK
      </h2>
    </section>
  );
}

