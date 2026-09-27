'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenLegal: (type: string) => void;
}

export function Footer({ onOpenContact, onOpenLegal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { name: 'Facebook', href: 'https://facebook.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
  ];

  return (
    <div className="w-full bg-[#F8F7F5]">
      <footer
        id="main-footer"
        className="footer relative text-[#FFFFFF] pt-16 sm:pt-20 pb-12 px-6 sm:px-8 md:px-12 select-none overflow-hidden w-full !rounded-none !border-x-0 !border-b-0"
      >
        <div className="w-full max-w-6xl mx-auto relative z-10">
          {/* Main Footer Content */}
          {/* Mobile: Logo & bio full width on top, Navigation & Connect in 2 columns below */}
          {/* Desktop: 3 clean columns (Col 1: Logo & description, Col 2: Navigation menu, Col 3: Connect link) */}
          <div className="w-full pb-10 sm:pb-12 md:pb-14 border-b border-white/[0.08]">
            <div className="grid grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
              
              {/* Column 1: Logo and description */}
              <div className="col-span-2 md:col-span-6 lg:col-span-6 flex flex-col items-start pr-0 md:pr-6 lg:pr-12">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                  className="relative h-12 sm:h-14 w-56 sm:w-64 mb-4 block focus:outline-none hover:opacity-90 transition-opacity"
                  aria-label="Buzz N Beyond Innovations Home"
                >
                  <Image
                    src="https://dev.buzznbeyond.com/wp-content/uploads/2025/03/Untitled-design-9-e1784613727472.png"
                    alt="Buzz N Beyond Innovations"
                    fill
                    className="object-contain object-left brightness-0 invert"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 640px) 230px, 270px"
                  />
                </a>

                <p className="text-[14px] sm:text-[15px] text-white/70 leading-relaxed max-w-md sm:max-w-lg">
                  We help ambitious businesses build stronger brands, create meaningful digital experiences, and grow through strategy-led design, development, and digital marketing.
                </p>
              </div>

              {/* Column 2: Navigation menu */}
              <div className="col-span-1 md:col-span-3 lg:col-span-3 flex flex-col md:pl-4">
                <h4 className="text-xs uppercase tracking-widest text-[#FFFFFF] mb-4 font-bold">
                  Navigation
                </h4>
                <ul className="space-y-2.5 sm:space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-[14px] sm:text-[15px] font-medium inline-block text-white/72 hover:text-[#4D357F] hover:translate-x-0.5 transition-all"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Connect link */}
              <div className="col-span-1 md:col-span-3 lg:col-span-3 flex flex-col md:pl-4">
                <h4 className="text-xs uppercase tracking-widest text-[#FFFFFF] mb-4 font-bold">
                  Connect
                </h4>
                <ul className="space-y-2.5 sm:space-y-3">
                  {socials.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-[14px] sm:text-[15px] font-medium text-white/72 hover:text-[#4D357F] transition-colors"
                      >
                        <span>{social.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#4D357F] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Footer Bar: Everything centered, with Scroll-To-Top button in the bottom right corner */}
          <div className="relative pt-8 sm:pt-10 flex flex-col items-center justify-center text-center gap-4">
            {/* Centered Navigation & Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              <button
                type="button"
                onClick={() => onOpenContact()}
                className="footer-link text-sm sm:text-[15px] font-medium text-white/72 hover:text-[#4D357F] transition-colors cursor-pointer bg-transparent border-0 p-0"
              >
                Contact Us
              </button>
              <button
                type="button"
                onClick={() => onOpenLegal('Privacy Policy')}
                className="footer-link text-sm sm:text-[15px] font-medium text-white/72 hover:text-[#4D357F] transition-colors cursor-pointer bg-transparent border-0 p-0"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => onOpenLegal('Terms of Service')}
                className="footer-link text-sm sm:text-[15px] font-medium text-white/72 hover:text-[#4D357F] transition-colors cursor-pointer bg-transparent border-0 p-0"
              >
                Terms of Service
              </button>
            </div>

            {/* Centered Copyright text */}
            <p className="text-xs sm:text-sm text-white/50 text-center px-10 sm:px-0">
              © 2026 Buzz N Beyond Innovations. All rights reserved.
            </p>

            {/* Top to Bottom (Scroll to Top) Button - Positioned in the bottom right corner */}
            <div className="absolute right-0 bottom-0">
              <button
                type="button"
                onClick={scrollToTop}
                className="p-2 sm:p-2.5 rounded-full bg-white/[0.08] border border-white/15 hover:bg-[#4D357F] hover:border-[#4D357F] text-white transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 group flex items-center justify-center"
                aria-label="Scroll to top"
                title="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
    </footer>
  </div>
);
}
