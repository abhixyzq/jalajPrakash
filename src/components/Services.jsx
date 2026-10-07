import React from 'react';
import { Camera, Image as ImageIcon, Video, MonitorPlay } from 'lucide-react';

export default function Services() {
  const services = [
    { title: "Graphic Design", icon: ImageIcon },
    { title: "Photographer", icon: Camera },
    { title: "Videographer", icon: Video },
    { title: "Video Editor", icon: MonitorPlay }
  ];

  return (
    <section id="services" className="min-h-[70vh] flex flex-col justify-center py-24 relative overflow-hidden bg-obsidian border-t-2 border-zinc-900">
      
      {/* Background Number '03' */}
      <div className="absolute left-[-5%] bottom-[-10%] text-[300px] leading-none font-syne text-outline-gray opacity-30 select-none pointer-events-none z-0">
        03
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full text-center">
        
        {/* TABLE OF CONTENT Heading */}
        <div className="relative inline-block mb-16 mx-auto ml-4 sm:ml-0">
          <span className="absolute -top-4 -left-6 sm:-top-6 sm:-left-10 text-zinc-300 text-5xl sm:text-6xl font-syne font-black">"</span>
          
          {/* Outlined background text effect */}
          <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-full h-full text-4xl sm:text-7xl font-syne font-black text-outline-gray select-none" aria-hidden="true">
            TABLE OF CONTENT.
          </div>
          
          <h2 className="relative font-syne text-4xl sm:text-7xl font-black text-zinc-900 uppercase z-10">
            TABLE <span className="bg-champagne px-1 sm:px-2 border-2 border-zinc-900 shadow-[2px_2px_0_0_#1a1a1a]">OF</span> CONTENT.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="w-40 sm:w-56 aspect-square bg-champagne rounded-[40px] border-2 border-zinc-900 shadow-[8px_8px_0_0_#1a1a1a] flex flex-col items-center justify-center p-4 hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#1a1a1a] transition-all cursor-pointer group"
              >
                <div className="flex-1 flex items-center justify-center">
                  <IconComponent className="w-16 h-16 sm:w-24 sm:h-24 text-zinc-900 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
                <div className="w-full bg-zinc-900 text-champagne text-xs sm:text-sm font-sans font-bold py-2 rounded-full border-2 border-zinc-900 uppercase">
                  {service.title}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
