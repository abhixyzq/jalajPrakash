import React from 'react';
import { QrCode, Mail, MoveRight } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import FigmaIcon from './icons/FigmaIcon';
export default function About({ profile }) {
  const portraitSrc = profile?.portrait || '/images/portrait.jpg';

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 relative overflow-hidden bg-surface border-t-2 border-zinc-900">
      
      {/* Background Number '02' */}
      <div className="absolute right-[-5%] top-1/4 text-[300px] leading-none font-syne text-outline-gray opacity-30 select-none pointer-events-none z-0">
        02
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        
        {/* Top Header */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-syne text-2xl font-black text-zinc-900 uppercase">About</h2>
          <div className="flex-1 h-0.5 bg-zinc-900"></div>
          <div className="w-8 h-8 rounded-full border-2 border-zinc-900 flex items-center justify-center">
            <MoveRight className="w-4 h-4 text-zinc-900" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Contact Block */}
          <div className="lg:col-span-4 flex flex-col items-center">
            
            {/* Portrait with Yellow Blob */}
            <div className="relative w-full max-w-sm mb-12">
              <div className="absolute inset-0 bg-champagne rounded-[60px] rounded-tl-none rounded-br-[100px] transform -translate-x-4 translate-y-4 shadow-[8px_8px_0_0_#1a1a1a] border-2 border-zinc-900 z-0"></div>
              <img
                src={portraitSrc}
                alt={profile?.name}
                className="relative z-10 w-full grayscale contrast-125 filter drop-shadow-xl border-2 border-zinc-900 bg-white"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop';
                }}
              />
            </div>

            {/* Let's Work Together Card */}
            <div className="w-full bg-surface-elevated border-2 border-zinc-900 p-6 flex items-center gap-6 shadow-[4px_4px_0_0_#1a1a1a]">
              <div className="w-20 h-20 bg-zinc-100 border-2 border-zinc-900 flex items-center justify-center p-2 shrink-0 hidden sm:flex">
                <QrCode className="w-full h-full text-zinc-900" />
              </div>
              <div>
                <h3 className="font-syne text-lg font-black text-champagne-dark mb-3 underline decoration-2 underline-offset-4">Let's Work Together :</h3>
                <ul className="space-y-2 text-xs font-sans font-bold text-zinc-800">
                  <li className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" /> : {profile?.email}
                  </li>
                  <li className="flex items-center gap-2">
                    <InstagramIcon className="w-3.5 h-3.5" /> : @advora_ad
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Right Column: Text & Experience */}
          <div className="lg:col-span-8">
            
            {/* HELLO Text */}
            <div className="relative inline-block mb-8 ml-4 sm:ml-0">
              <span className="absolute -top-4 -left-6 text-champagne text-5xl font-syne font-black">"</span>
              <h3 className="font-syne text-5xl sm:text-6xl font-black text-zinc-900 uppercase">
                HELLO<span className="text-champagne">.</span>
              </h3>
            </div>

            <div className="text-zinc-700 space-y-4 text-sm font-sans font-medium leading-relaxed max-w-2xl">
              <p>
                I'm <strong className="text-zinc-900">{profile?.name}</strong>, {profile?.bio || "a self-taught graphic designer with over 5 years of experience. I love creating visuals that don't just look good - they tell a story. From social media content to branding, I enjoy bringing ideas to life."}
              </p>
              <p>
                I also explore art direction to add more depth to my work. For me, design is all about connecting ideas with people in a creative way.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              
              {/* Working Experience */}
              <div>
                <h4 className="font-syne text-xl font-black text-zinc-900 mb-6 border-b-2 border-champagne inline-block pb-1">Working Experience</h4>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-300 before:to-transparent">
                  {/* Experience Item 1 */}
                  <div className="relative flex items-center group is-active">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-zinc-900 bg-champagne shrink-0 absolute left-0 ml-0.5 -translate-x-1/2"></div>
                    <div className="ml-8 text-xs font-sans">
                      <div className="font-black text-zinc-900 text-sm">Graphic Design</div>
                      <div className="text-zinc-600 font-medium">Advora Studio</div>
                      <div className="text-zinc-400 italic text-[10px]">Oct 2020 - Aug 2023</div>
                    </div>
                  </div>
                  {/* Experience Item 2 */}
                  <div className="relative flex items-center group is-active">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-zinc-900 bg-white shrink-0 absolute left-0 ml-0.5 -translate-x-1/2"></div>
                    <div className="ml-8 text-xs font-sans">
                      <div className="font-black text-zinc-900 text-sm">Art Director</div>
                      <div className="text-zinc-600 font-medium">Creative Agency</div>
                      <div className="text-zinc-400 italic text-[10px]">Aug 2023 - June 2025</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Software Skills */}
              <div>
                <h4 className="font-syne text-xl font-black text-zinc-900 mb-6 border-b-2 border-champagne inline-block pb-1">Software Skill</h4>
                <div className="flex flex-wrap gap-3">
                  {['Ps', 'Ai', 'Id', 'Pr', 'Figma'].map((skill, i) => (
                    <div key={i} className="w-12 h-12 rounded-xl border-2 border-zinc-900 flex items-center justify-center font-black text-lg text-white shadow-[2px_2px_0_0_#1a1a1a]"
                      style={{ backgroundColor: skill === 'Ps' ? '#001e36' : skill === 'Ai' ? '#330000' : skill === 'Id' ? '#49021f' : skill === 'Pr' ? '#00005c' : '#1e1e1e' }}>
                      {skill === 'Figma' ? (
                        <FigmaIcon className="w-6 h-6" />
                      ) : (
                        <span className={skill === 'Ps' ? 'text-[#31a8ff]' : skill === 'Ai' ? 'text-[#ff9a00]' : skill === 'Id' ? 'text-[#ff3366]' : skill === 'Pr' ? 'text-[#9999ff]' : 'text-white'}>
                          {skill}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
