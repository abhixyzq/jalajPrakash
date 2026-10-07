import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = ['All', 'Branding', 'Advertising', 'Social Media', 'UI Design', 'Print'];

export default function Portfolio({ projects, onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const safeProjects = Array.isArray(projects) ? projects : [];
  const filteredProjects = activeFilter === 'All'
    ? safeProjects
    : safeProjects.filter(p => p && p.category === activeFilter);

  return (
    <section id="work" className="min-h-screen flex flex-col justify-center py-24 relative overflow-hidden bg-surface border-t-2 border-zinc-900">
      
      {/* Background Number '04' */}
      <div className="absolute right-[-5%] top-[-5%] text-[300px] leading-none font-syne text-outline-gray opacity-30 select-none pointer-events-none z-0">
        04
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="relative">
            <h2 className="font-syne text-4xl sm:text-7xl font-black text-zinc-900 uppercase">
              SELECTED<br/>
              <span className="text-champagne">WORK.</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map(category => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-xs font-bold font-sans transition-all duration-200 border-2 border-zinc-900 uppercase tracking-widest ${
                    isActive
                      ? 'bg-zinc-900 text-champagne shadow-[4px_4px_0_0_#1a1a1a] translate-y-[-2px]'
                      : 'bg-white text-zinc-900 hover:bg-champagne hover:shadow-[4px_4px_0_0_#1a1a1a] hover:translate-y-[-2px]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          
          {/* Render Filtered Projects */}
          {filteredProjects.map(project => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-white border-2 border-zinc-900 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-300 relative flex flex-col shadow-[4px_4px_0_0_#1a1a1a] sm:shadow-[8px_8px_0_0_#1a1a1a] hover:shadow-[8px_8px_0_0_#1a1a1a] sm:hover:shadow-[12px_12px_0_0_#1a1a1a] hover:-translate-y-1"
            >
              {/* Image Preview Container */}
              <div className="relative w-full aspect-[4/3] bg-zinc-100 overflow-hidden border-b-2 border-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop';
                  }}
                />

                {/* Category Tag */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10">
                  <span className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[8px] sm:text-[10px] font-sans font-bold uppercase tracking-widest bg-champagne text-zinc-900 border-2 border-zinc-900 shadow-[2px_2px_0_0_#1a1a1a]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Meta & Text */}
              <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] sm:text-xs text-zinc-500 font-sans font-bold mb-1 sm:mb-2 uppercase">
                    <span className="truncate">{project.client || 'Advora Campaign'}</span>
                    <span className="hidden sm:inline">{project.year || '2026'}</span>
                  </div>
                  <h3 className="font-syne text-sm sm:text-2xl font-black text-zinc-900 group-hover:text-champagne-dark transition-colors line-clamp-1 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 text-[10px] sm:text-xs mt-1 sm:mt-2 line-clamp-2 leading-relaxed font-sans font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="mt-3 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-zinc-200 flex items-center justify-between">
                  <div className="flex items-center gap-1 sm:gap-1.5 hidden sm:flex">
                    {(project.colors || ['#e5c07b', '#0f0f13']).map((hex, idx) => (
                      <span
                        key={idx}
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-zinc-900 shrink-0 shadow-[1px_1px_0_0_#1a1a1a]"
                        style={{ backgroundColor: hex }}
                        title={hex}
                      />
                    ))}
                  </div>

                  <div className="w-6 h-6 sm:w-8 sm:h-8 ml-auto rounded-full bg-zinc-900 text-champagne flex items-center justify-center group-hover:bg-champagne group-hover:text-zinc-900 transition-colors border-2 border-zinc-900 shrink-0">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-zinc-500 font-sans font-bold text-sm bg-white rounded-3xl border-2 border-zinc-900 shadow-[4px_4px_0_0_#1a1a1a] mt-8">
            No projects in the "{activeFilter}" category yet.
          </div>
        )}

      </div>
    </section>
  );
}
