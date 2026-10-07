import React, { useState } from 'react';
import { Mail, Copy, Send, Check } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { sanitizeUrl, sanitizeText } from '../utils/security';

export default function Contact({ profile, onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Advertising Campaign',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const instagramSafeUrl = sanitizeUrl(profile?.instagram, 'https://www.instagram.com/advora_ad/');
  const emailAddress = profile?.email || 'mr.jalajprakash@gmail.com';

  const handleCopyEmail = (e) => {
    e.preventDefault();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      if (onShowToast) onShowToast(`Copied ${emailAddress} to clipboard!`);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const sanitizedName = sanitizeText(formData.name, 100);
    const sanitizedEmail = sanitizeText(formData.email, 100);
    const sanitizedMessage = sanitizeText(formData.message, 1000);

    setTimeout(() => {
      setSubmitting(false);
      if (onShowToast) {
        onShowToast(`Thank you, ${sanitizedName || 'there'}! Your inquiry has been sent.`);
      }
      // Also trigger a prefilled mailto as backup
      const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${sanitizedName}`);
      const body = encodeURIComponent(`Hi Jalaj,\n\n${sanitizedMessage}\n\nFrom: ${sanitizedName} (${sanitizedEmail})`);
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
      
      setFormData({
        name: '',
        email: '',
        projectType: 'Advertising Campaign',
        message: ''
      });
    }, 600);
  };

  return (
    <section id="contact" className="min-h-[80vh] flex flex-col justify-center py-24 relative overflow-hidden bg-surface border-t-2 border-zinc-900">
      
      {/* Background Number '05' */}
      <div className="absolute right-[-5%] top-[10%] text-[300px] leading-none font-syne text-outline-gray opacity-30 select-none pointer-events-none z-0">
        05
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10 w-full">
        
        <div className="inline-block bg-champagne px-4 py-1 border-2 border-zinc-900 rounded-full font-sans font-bold text-xs uppercase tracking-widest text-zinc-900 shadow-[2px_2px_0_0_#1a1a1a] mb-6 transform -rotate-2">
          Start A Project
        </div>
        
        <h2 className="font-syne text-4xl sm:text-7xl font-black text-zinc-900 uppercase">
          Let’s Make It<br />
          <span className="text-champagne-dark">Happen.</span>
        </h2>
        
        <p className="text-zinc-600 font-sans font-medium text-sm sm:text-base mt-6 max-w-xl mx-auto leading-relaxed">
          Have an upcoming product launch, promotional campaign, or social media refresh? Let’s collaborate to elevate your brand’s visuals.
        </p>

        {/* Primary Contact CTAs */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
          <a
            href={`mailto:${emailAddress}`}
            className="px-8 py-4 rounded-full bg-champagne text-zinc-900 font-sans font-black text-sm uppercase tracking-wider hover:bg-champagne-glow transition shadow-[4px_4px_0_0_#1a1a1a] hover:shadow-[6px_6px_0_0_#1a1a1a] hover:-translate-y-1 border-2 border-zinc-900 flex items-center gap-2.5"
          >
            <Mail className="w-5 h-5" />
            <span>Email Me</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="px-5 py-4 rounded-full bg-white text-zinc-900 font-sans font-black text-sm uppercase tracking-wider transition shadow-[4px_4px_0_0_#1a1a1a] hover:shadow-[6px_6px_0_0_#1a1a1a] hover:-translate-y-1 border-2 border-zinc-900 flex items-center gap-2"
            title="Copy email to clipboard"
          >
            {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5 text-zinc-900" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>

          <a
            href={instagramSafeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-zinc-900 text-white font-sans font-black text-sm uppercase tracking-wider transition shadow-[4px_4px_0_0_#e5c07b] hover:shadow-[6px_6px_0_0_#e5c07b] hover:-translate-y-1 border-2 border-zinc-900 flex items-center gap-2.5"
          >
            <InstagramIcon className="w-5 h-5 text-champagne" />
            <span>DM on Instagram</span>
          </a>
        </div>

        {/* Direct Inquiry Form Card */}
        <div className="mt-16 max-w-2xl mx-auto bg-white p-6 sm:p-10 rounded-[2rem] text-left border-2 border-zinc-900 shadow-[8px_8px_0_0_#1a1a1a]">
          <div className="flex items-center justify-between pb-6 border-b-2 border-zinc-200 mb-8">
            <div>
              <h3 className="font-syne text-2xl font-black text-zinc-900 uppercase">Quick Inquiry</h3>
              <p className="text-sm text-zinc-500 mt-1 font-sans font-medium">Direct message directly to Jalaj Prakash</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 text-sm font-sans font-bold text-zinc-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border-2 border-zinc-300 text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block mb-2">Your Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@brand.com"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border-2 border-zinc-300 text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">Project Scope / Need</label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 border-2 border-zinc-300 text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors appearance-none"
              >
                <option value="Advertising Campaign">Advertising Campaign</option>
                <option value="Product Visuals & Mockups">Product Visuals &amp; Mockups</option>
                <option value="Social Media Graphics / Carousels">Social Media Graphics / Carousels</option>
                <option value="Brand Identity & Direction">Brand Identity &amp; Direction</option>
                <option value="Posters & Thumbnails">Posters &amp; Thumbnails</option>
                <option value="Other Creative Request">Other Creative Request</option>
              </select>
            </div>

            <div>
              <label className="block mb-2">Project Details / Vision *</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your product, timeline, aesthetic vision, or brand goals..."
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 border-2 border-zinc-300 text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 mt-4 rounded-xl bg-zinc-900 text-champagne font-sans font-black text-sm uppercase tracking-widest hover:bg-zinc-800 transition shadow-[4px_4px_0_0_#e5c07b] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#e5c07b] flex items-center justify-center gap-2 border-2 border-zinc-900 disabled:opacity-50 disabled:transform-none disabled:shadow-none"
            >
              <Send className="w-4 h-4" />
              <span>{submitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
