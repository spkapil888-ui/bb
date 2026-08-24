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
    <footer
      id="main-footer"
      style={{
        background: 'linear-gradient(135deg, #232323 0%, #141414 45%, #050505 100%)',
      }}
      className="relative text-[#FFFFFF] pt-16 sm:pt-20 pb-12 px-4 sm:px-6 md:px-12 border-t border-[rgba(255,255,255,0.28)] overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* Main Grid: Brand Bio, Navigation, Social */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[rgba(255,255,255,0.28)]">
          
          {/* Brand & Bio */}
          <div className="md:col-span-6 lg:col-span-6 flex flex-col items-start">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="relative h-11 sm:h-12 w-56 sm:w-64 mb-5 block focus:outline-none"
            >
              <Image
                src="https://dev.buzznbeyond.com/wp-content/uploads/2025/03/Untitled-design-9-e1784613727472.png"
                alt="Buzz N Beyond Innovations"
                fill
                className="object-contain object-left brightness-0 invert"
                referrerPolicy="no-referrer"
                sizes="(max-width: 640px) 220px, 260px"
              />
            </a>

            <p className="text-[15px] sm:text-base text-[#F2F2F2] leading-relaxed max-w-md">
              We help ambitious businesses build stronger brands, create meaningful digital experiences, and grow through strategy-led design, development, and digital marketing.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FFFFFF] mb-4 font-bold">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="footer-link text-[15px] sm:text-base font-medium inline-block hover:opacity-80 transition-opacity"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FFFFFF] mb-4 font-bold">
              Connect
            </h4>
            <ul className="space-y-3">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link group inline-flex items-center gap-1.5 text-[15px] sm:text-base font-medium hover:opacity-80 transition-opacity"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FFFFFF] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Clean Text Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-sm text-[#F2F2F2]">
          <p>© 2026 Buzz N Beyond Innovations. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <button
              onClick={() => onOpenContact()}
              className="footer-link text-sm sm:text-[15px] font-medium"
            >
              Contact Us
            </button>
            <button
              onClick={() => onOpenLegal('Privacy Policy')}
              className="footer-link text-sm sm:text-[15px] font-medium"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('Terms of Service')}
              className="footer-link text-sm sm:text-[15px] font-medium"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 border border-white/30 hover:bg-white/20 text-white transition-all ml-1 cursor-pointer shadow-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
