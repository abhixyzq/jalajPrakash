import React from 'react';
import { Camera, PenTool, ArrowRight } from 'lucide-react';

export default function Hero({ profile }) {
  const portraitSrc = profile?.portrait || '/images/portrait.jpg';

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 md:py-20 overflow-hidden bg-obsidian">
      
      {/* Background Number '01' */}
      <div className="absolute left-[-5%] top-[5%] text-[300px] sm:text-[400px] leading-none font-syne text-outline-gray opacity-30 select-none pointer-events-none z-0">
        01
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Typography */}
          <div className="lg:col-span-7 relative z-20">
            
            {/* Doodles with floating animation */}
            <PenTool className="absolute -top-4 sm:-top-10 left-[60%] sm:left-1/3 w-10 h-10 sm:w-12 sm:h-12 text-zinc-800 rotate-12 animate-[bounce_4s_infinite]" strokeWidth={1.5} />
            <Camera className="absolute -bottom-8 right-4 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 text-zinc-800 -rotate-12 animate-[pulse_4s_infinite]" strokeWidth={1.5} />

            <div className="relative inline-block mt-8 ml-4 sm:ml-12">
              
              {/* Yellow Quote marks */}
              <span className="absolute -top-10 -left-6 sm:-top-16 sm:-left-12 text-champagne text-[80px] sm:text-[120px] font-syne font-black leading-none opacity-80">"</span>
              
              {/* Yellow Pill */}
              <div className="absolute -top-4 left-6 sm:-top-6 sm:left-24 bg-champagne text-zinc-900 text-[10px] sm:text-sm px-4 py-1.5 sm:px-6 sm:py-2 rounded-full transform -rotate-6 font-sans font-black uppercase tracking-widest whitespace-nowrap border-2 border-zinc-900 shadow-[4px_4px_0_0_#1a1a1a] z-30">
                Creative Visual
              </div>

              <h1 className="relative z-20 font-syne text-[55px] sm:text-[90px] md:text-[100px] xl:text-[120px] font-black tracking-tighter text-zinc-900 leading-[0.85] uppercase drop-shadow-md">
                JALAJ
                <br />
                PRAKASH.
              </h1>
            </div>

            <div className="mt-12 sm:mt-16 ml-4 sm:ml-12 flex items-center gap-4">
              <a href="#about" className="group flex items-center gap-4 cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-zinc-900 flex items-center justify-center bg-white group-hover:bg-champagne group-hover:shadow-[4px_4px_0_0_#1a1a1a] group-hover:-translate-y-1 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-900 group-hover:rotate-45 transition-transform" strokeWidth={2.5} />
                </div>
                <span className="font-sans font-black text-zinc-900 tracking-widest uppercase text-xs sm:text-sm border-b-2 border-transparent group-hover:border-zinc-900 transition-colors">
                  {profile?.name || 'Jalaj Prakash'}
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Designer Portrait (Polaroid Style) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center lg:justify-end z-10 px-4 sm:px-0">
            
            {/* Background Accent Element */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[120%] h-[120%] border-4 border-champagne rounded-full opacity-50 z-0 hidden lg:block animate-[spin_20s_linear_infinite]"></div>

            {/* Polaroid Container */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-sm bg-white p-3 sm:p-4 pb-5 sm:pb-6 border-2 border-zinc-900 shadow-[8px_8px_0_0_#1a1a1a] sm:shadow-[12px_12px_0_0_#1a1a1a] transform lg:rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
              
              {/* Yellow Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-6 sm:h-8 bg-champagne/80 backdrop-blur-sm transform -rotate-2 border-2 border-zinc-900 z-20"></div>

              <div className="relative overflow-hidden border-2 border-zinc-900 aspect-[4/5] bg-zinc-100">
                <img
                  src={portraitSrc}
                  alt={profile?.name}
                  className="w-full h-full object-cover grayscale contrast-125 filter group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop';
                  }}
                />
              </div>

              {/* Bottom text inside polaroid */}
              <div className="mt-4 sm:mt-5 flex flex-col items-center">
                <span className="block text-center text-sm sm:text-lg font-black font-syne text-zinc-900 uppercase">Selected Best</span>
                <div className="h-0.5 w-8 sm:w-12 bg-champagne my-1"></div>
                <span className="block text-center text-[8px] sm:text-[10px] font-sans font-bold text-zinc-500 uppercase tracking-widest">Graphic Design Until 2026</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
