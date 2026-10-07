import React from 'react';
import { ArrowUp } from 'lucide-react';
import { sanitizeUrl } from '../utils/security';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ profile }) {
  const instagramSafeUrl = sanitizeUrl(profile?.instagram, 'https://www.instagram.com/advora_ad/');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-zinc-900 py-12 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-sm text-zinc-400 gap-6 font-sans font-bold uppercase tracking-widest">
        <div>
          <span className="text-white">© {CURRENT_YEAR} {profile?.name || 'Jalaj Prakash'} • Advora Creative.</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="#work" className="hover:text-champagne transition-colors">Portfolio</a>
          <a href="#services" className="hover:text-champagne transition-colors">Services</a>
          <a href="#about" className="hover:text-champagne transition-colors">About</a>
          <a
            href={instagramSafeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-champagne transition-colors"
          >
            Instagram
          </a>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-champagne border-2 border-zinc-900 text-zinc-900 hover:bg-white hover:-translate-y-1 transition-all shadow-[2px_2px_0_0_#e5c07b] hover:shadow-[4px_4px_0_0_#e5c07b]"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" strokeWidth={3} />
          </button>
        </div>
      </div>
    </footer>
  );
}
