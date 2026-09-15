'use client';

import React, { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console
    console.error('App-level error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F7F5] text-[#080B14] p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
      <p className="text-[#5F636B] mb-6 max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 rounded-full bg-[#4D357F] text-white font-semibold hover:bg-[#20542D] transition-colors cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
