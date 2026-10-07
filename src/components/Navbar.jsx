import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { sanitizeUrl } from '../utils/security';

export default function Navbar({ profile }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const instagramSafeUrl = sanitizeUrl(profile?.instagram, 'https://www.instagram.com/advora_ad/');

  return (
    <nav className="sticky top-0 z-50 bg-obsidian border-b-2 border-zinc-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo / Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div>
            <span className="font-syne font-black text-xl tracking-wider text-zinc-900 group-hover:text-champagne-dark transition-colors flex items-center gap-1.5 uppercase">
              ADVORA
            </span>
            <span className="text-[10px] tracking-widest text-zinc-600 font-sans font-bold uppercase block -mt-1">
              {profile?.name || 'Jalaj Prakash'}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-sans font-bold uppercase tracking-widest text-zinc-800">
          <a href="#work" className="hover:text-champagne-dark transition-colors">
            Portfolio
          </a>
          <a href="#services" className="hover:text-champagne-dark transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-champagne-dark transition-colors">
            About
          </a>
          <a
            href={instagramSafeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-800 hover:text-pink-600 transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>@advora_ad</span>
          </a>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-xs font-sans font-black uppercase tracking-widest bg-champagne text-zinc-900 border-2 border-zinc-900 shadow-[2px_2px_0_0_#1a1a1a] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_0_#1a1a1a] transition-all duration-200"
          >
            Let’s Talk
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white border-2 border-zinc-900 text-zinc-900 shadow-[2px_2px_0_0_#1a1a1a] hover:bg-champagne"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 border-t-2 border-zinc-900 bg-surface shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3 text-sm font-sans font-bold uppercase tracking-widest">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-zinc-900 hover:bg-champagne border-2 border-transparent hover:border-zinc-900 hover:shadow-[4px_4px_0_0_#1a1a1a] transition-all"
            >
              Portfolio
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-zinc-900 hover:bg-champagne border-2 border-transparent hover:border-zinc-900 hover:shadow-[4px_4px_0_0_#1a1a1a] transition-all"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-zinc-900 hover:bg-champagne border-2 border-transparent hover:border-zinc-900 hover:shadow-[4px_4px_0_0_#1a1a1a] transition-all"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-zinc-900 hover:bg-champagne border-2 border-transparent hover:border-zinc-900 hover:shadow-[4px_4px_0_0_#1a1a1a] transition-all"
            >
              Contact
            </a>
            <a
              href={instagramSafeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-pink-600 hover:bg-champagne hover:text-pink-700 border-2 border-transparent hover:border-zinc-900 hover:shadow-[4px_4px_0_0_#1a1a1a] flex items-center justify-between transition-all"
            >
              <span className="flex items-center gap-2">
                <InstagramIcon className="w-5 h-5" />
                @advora_ad
              </span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
