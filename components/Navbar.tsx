'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Packages', href: '#packages' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['about', 'services', 'process', 'why-us', 'packages'];
      const scrollPosition = window.scrollY + 180;

      if (window.scrollY < 200) {
        setActiveSection('');
        return;
      }

      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }

      // If between pinned sections or near end of a section
      if (!current && window.scrollY >= 200) {
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i]);
          if (el && scrollPosition >= el.offsetTop) {
            current = sectionIds[i];
            break;
          }
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-3 sm:pt-4 transition-all duration-300 pointer-events-none"
    >
      <motion.nav
        id="navbar-container"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-6xl mx-auto flex items-center justify-between transition-all duration-300 rounded-full border border-[#E8E5EF] ${
          scrolled
            ? 'py-2.5 px-4 sm:px-6 bg-white/95 backdrop-blur-md shadow-sm shadow-[#080B14]/5 scale-[0.98]'
            : 'py-3.5 px-5 sm:px-7 bg-white/90 backdrop-blur-md shadow-sm shadow-[#080B14]/5'
        }`}
      >
        {/* Logo on Left */}
        <a
          id="nav-logo"
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="relative h-8 sm:h-9 w-32 sm:w-40 flex items-center">
            <Image
              src="https://dev.buzznbeyond.com/wp-content/uploads/2025/03/Untitled-design-9-e1784613727472.png"
              alt="Buzz N Beyond Innovations"
              fill
              className="object-contain object-left group-hover:opacity-90 transition-opacity"
              priority
              referrerPolicy="no-referrer"
              sizes="(max-width: 640px) 130px, 160px"
            />
          </div>
        </a>

        {/* Center Desktop Menu with Active Indicator */}
        <div className="hidden md:flex items-center gap-1 bg-[#F8F7F5] p-1.5 rounded-full border border-[#E8E5EF]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-4 py-1.5 text-sm rounded-full transition-all duration-200 z-10 ${
                  isActive
                    ? 'text-[#4D357F] font-semibold'
                    : 'text-[#5F636B] hover:text-[#080B14] font-medium'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-xs border border-[#E8E5EF]"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Button on Right: Let’s Talk */}
        <div className="flex items-center gap-2">
          <button
            id="nav-cta-btn"
            onClick={onOpenContact}
            className="btn-primary group !py-2.5 !px-5 !text-xs sm:!text-sm"
          >
            <span>Let’s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 arrow" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#080B14] hover:bg-[#F8F7F5] focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl border border-[#E8E5EF] p-6 shadow-xl shadow-[#080B14]/10 md:hidden flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-4 py-3 text-base rounded-2xl transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#4D357F]/10 text-[#4D357F] font-bold border border-[#4D357F]/20'
                        : 'text-[#080B14] hover:text-[#4D357F] hover:bg-[#F8F7F5] font-medium'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#4D357F]" />
                    )}
                  </a>
                );
              })}
            </div>
            <div className="pt-2 border-t border-[#E8E5EF]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full btn-primary !py-3.5 !rounded-2xl cursor-pointer"
              >
                <span>Let’s Talk</span>
                <ArrowUpRight className="w-4 h-4 arrow" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
