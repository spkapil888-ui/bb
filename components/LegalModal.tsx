'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: string | null;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080B14]/70 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#E8E5EF] shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden"
        >
          <div className="flex items-center justify-between pb-4 border-b border-[#E8E5EF]">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#4D357F]" />
              <h3 className="text-xl font-bold text-[#080B14]">{type}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#5F636B] hover:text-[#080B14] hover:bg-[#F8F7F5] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4 max-h-[60vh] overflow-y-auto space-y-4 text-xs sm:text-sm text-[#5F636B] leading-relaxed pr-2">
            <p>
              <strong>Buzz N Beyond Innovations</strong> is dedicated to maintaining the utmost integrity, transparency, and data protection across all our digital partnerships and client deliverables.
            </p>
            <p>
              1. <strong>Intellectual Property:</strong> All client deliverables, custom code architectures, brand assets, and creative design systems remain the exclusive property of the respective client upon project finalization and settlement.
            </p>
            <p>
              2. <strong>Confidentiality:</strong> We adhere to strict non-disclosure protocols regarding your business strategy, AI integrations, customer data, and technical infrastructure.
            </p>
            <p>
              3. <strong>Service Standards:</strong> Our solutions are designed to comply with global security, performance, and accessibility benchmarks.
            </p>
            <p>
              Last updated: 2026. For inquiries, please reach out directly through our contact portal.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E8E5EF] flex justify-end">
            <button
              onClick={onClose}
              className="btn-primary !px-6 !py-2 !text-xs cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
