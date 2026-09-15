'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export function ContactModal({ isOpen, onClose, initialService }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService || 'Brand Strategy');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesList = [
    'Brand Strategy',
    'UI/UX & Web Design',
    'Custom Web & AI Development',
    'Growth & Performance Marketing',
    'End-to-End Transformation',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#4D357F', '#20542D', '#080B14', '#FFFFFF'],
        });
      } catch (err) {
        console.warn('Confetti animation skipped:', err);
      }
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#080B14]/70 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white rounded-3xl border border-[#E8E5EF] shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden"
          >
            {/* Top Accent Purple Bar */}
            <div className="absolute top-0 inset-x-0 h-2 bg-[#4D357F]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#5F636B] hover:text-[#080B14] hover:bg-[#F8F7F5] transition-colors focus:outline-none cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4D357F]/8 border border-[#4D357F]/20 text-[#4D357F] text-xs font-semibold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#4D357F]" />
                  Let’s Talk
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#080B14]">
                  Start Your Innovation Journey
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#5F636B]">
                  Tell us about your brand, challenges, and goals. We’ll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#080B14] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8F7F5] border border-[#E8E5EF] text-sm text-[#080B14] focus:outline-none focus:border-[#4D357F] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#080B14] mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8F7F5] border border-[#E8E5EF] text-sm text-[#080B14] focus:outline-none focus:border-[#4D357F] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Primary Service Interest */}
                  <div>
                    <label className="block text-xs font-semibold text-[#080B14] mb-1.5">
                      Interested In
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8F7F5] border border-[#E8E5EF] text-sm text-[#080B14] focus:outline-none focus:border-[#4D357F] focus:bg-white transition-all"
                    >
                      {servicesList.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold text-[#080B14] mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your vision, timeline, or key objectives..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8F7F5] border border-[#E8E5EF] text-sm text-[#080B14] focus:outline-none focus:border-[#4D357F] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 btn-primary !rounded-xl !py-3.5 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4 arrow" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#4D357F]/10 text-[#4D357F] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#4D357F]" />
                </div>
                <h3 className="text-2xl font-bold text-[#080B14]">
                  Message Received!
                </h3>
                <p className="mt-2 text-sm text-[#5F636B] max-w-sm">
                  Thank you for reaching out, {name || 'there'}. Our team will review your project brief and get in touch shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="btn-primary !px-6 !py-2.5 !text-xs cursor-pointer mt-6"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
