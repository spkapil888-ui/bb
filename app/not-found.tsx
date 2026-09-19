'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F7F5] text-[#080B14] p-6 text-center">
      <h1 className="text-6xl font-extrabold text-[#080B14] mb-4">404</h1>
      <p className="text-lg text-[#5F636B] mb-8">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#20542D] text-white font-semibold hover:bg-[#4D357F] transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
