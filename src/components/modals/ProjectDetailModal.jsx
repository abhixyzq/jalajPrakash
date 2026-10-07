import React, { useEffect } from 'react';
import { X, ArrowUpRight, Calendar, User } from 'lucide-react';
import InstagramIcon from '../icons/InstagramIcon';
import { sanitizeUrl } from '../../utils/security';

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('overflow-hidden');
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
    };
  }, [onClose]);

  if (!project) return null;

  const instagramSafeUrl = sanitizeUrl(project.instagramUrl, 'https://www.instagram.com/advora_ad/');

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-surface border border-surface-border rounded-3xl overflow-hidden shadow-2xl my-8 max-h-[90vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition border border-white/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto flex-1">
          {/* Hero Image */}
          <div className="relative w-full aspect-[16/9] bg-obsidian flex items-center justify-center overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-10 -mt-8 relative z-10">
            {/* Metadata Tags */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-champagne text-black">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface-elevated text-zinc-300 border border-surface-border flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-champagne" />
                  {project.year || '2026'}
                </span>
              </div>

              {project.client && (
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-champagne" />
                  Client: {project.client}
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="font-syne text-2xl sm:text-4xl font-extrabold text-white">
              {project.title}
            </h2>

            {/* Narrative Description */}
            <div className="mt-6 space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed border-t border-surface-border pt-6">
              <h4 className="font-syne text-sm font-bold uppercase tracking-wider text-champagne">
                Case Narrative &amp; Art Direction
              </h4>
              <p>{project.description}</p>
            </div>

            {/* Color Palette Chips */}
            {project.colors && project.colors.length > 0 && (
              <div className="mt-8 pt-6 border-t border-surface-border">
                <h4 className="font-syne text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                  Brand Color Palette
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {project.colors.map((hex, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-card border border-surface-border"
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-white/20 shrink-0"
                        style={{ backgroundColor: hex }}
                      />
                      <span className="text-xs font-mono text-zinc-300">{hex}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* External Links */}
            <div className="mt-8 pt-6 border-t border-surface-border flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-zinc-500 font-mono">
                Project ID: {project.id} • Advora Creative Studio
              </span>

              <a
                href={instagramSafeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs transition flex items-center gap-2 shadow-lg active:scale-95"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>View on Instagram @advora_ad</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
