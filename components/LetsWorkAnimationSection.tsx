'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function LetsWorkAnimationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const section = sectionRef.current;
    const container = containerRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    const ctx = gsap.context(() => {
      const getScales = () => {
        // Measure header container width so zoomed text never exceeds the header width
        const navbar = document.getElementById('navbar-container');
        const header = document.getElementById('main-header');

        let headerWidth = 1152;
        if (navbar && navbar.getBoundingClientRect().width > 0) {
          headerWidth = navbar.getBoundingClientRect().width;
        } else if (container && container.getBoundingClientRect().width > 0) {
          headerWidth = container.getBoundingClientRect().width;
        } else if (header && header.getBoundingClientRect().width > 0) {
          headerWidth = Math.min(header.getBoundingClientRect().width - 32, 1152);
        } else {
          headerWidth = Math.min(window.innerWidth - 32, 1152);
        }

        // Keep maximum text width strictly and safely within the header width
        const maxAllowedWidth = Math.min(headerWidth * 0.88, headerWidth - 48);

        // Get unscaled text layout width
        const currentTransform = text.style.transform;
        text.style.transform = 'none';
        const naturalWidth = text.offsetWidth || text.getBoundingClientRect().width;
        text.style.transform = currentTransform;

        const finalScale = naturalWidth > 0 ? Math.min(maxAllowedWidth / naturalWidth, 2.2) : 1.4;
        const startScale = Math.min(0.42, finalScale * 0.38);

        return { startScale, finalScale };
      };

      gsap.fromTo(
        text,
        {
          scale: () => getScales().startScale,
          opacity: 1,
        },
        {
          scale: () => getScales().finalScale,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=420',
            scrub: 0.6,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    }, section);

    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="lets-work"
      ref={sectionRef}
      className="lets-work-section select-none overflow-hidden"
    >
      <div
        ref={containerRef}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-center pointer-events-none"
      >
        <h2
          ref={textRef}
          className="lets-work-text pointer-events-auto"
        >
          LET’S WORK
        </h2>
      </div>
    </section>
  );
}

