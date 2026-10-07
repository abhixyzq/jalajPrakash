import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function Toast({ toast }) {
  if (!toast || !toast.visible) return null;

  const isError = toast.type === 'error';

  return (
    <div
      className="fixed bottom-6 right-6 z-50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
      role="status"
      aria-live="polite"
    >
      <div
        className={`px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-xl border flex items-center gap-3 text-xs font-semibold ${
          isError
            ? 'bg-rose-950/90 border-rose-500/40 text-rose-200 shadow-rose-950/50'
            : 'bg-surface-elevated/95 border-champagne/40 text-white shadow-black/80'
        }`}
      >
        {isError ? (
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
        ) : (
          <CheckCircle2 className="w-4 h-4 text-champagne shrink-0" />
        )}
        <span>{toast.message}</span>
      </div>
    </div>
  );
}
