import React from 'react';
import { MARQUEE_ITEMS } from '../data/defaultData';

export default function Marquee() {
  const repeatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="py-4 border-y-2 border-zinc-900 bg-champagne overflow-hidden relative select-none transform rotate-1 my-8 scale-105 shadow-[0_8px_0_0_#1a1a1a]">
      <div className="flex whitespace-nowrap animate-marquee gap-8 items-center text-sm sm:text-lg font-sans font-black uppercase tracking-widest text-zinc-900">
        {repeatedItems.map((item, index) => (
          <span key={index} className="flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
