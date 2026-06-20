import React from 'react';
import { Target, Video, HeartHandshake, Eye } from 'lucide-react';

const STEPS = [
  {
    icon: Target,
    step: '01',
    title: 'Brand Archetype Alignment',
    desc: 'Determining your salon\'s specific aesthetic positioning, identifying high-paying local audiences, and setting up competitors analysis.'
  },
  {
    icon: Video,
    step: '02',
    title: 'High-End Cinematic Production',
    desc: 'Writing hooks, lighting transformations, and editing premium reels and ad creatives on professional video workstations.'
  },
  {
    icon: Eye,
    step: '03',
    title: 'Precision Brand Campaigns',
    desc: 'Deploying high-converting Meta and Google campaigns targeting local prospects to capture qualified bridal, color, and spa leads.'
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="bg-[#1a1a1a] py-24 border-t border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Methodology Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-[#FFD000] text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-[#FFD000]" />
              <span>METHODOLOGY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-8 font-display">
              Refined <span className="text-[#FFD000] italic">Collaboration.</span>
            </h2>

            <div className="space-y-6 text-zinc-300 font-light leading-relaxed text-base sm:text-lg">
              <p>
                We believe in building <strong className="text-white font-semibold">partnerships</strong>, not client lists. Our agency workspace brings together professional cinematographers, graphic designers, copywriters, and ad strategists to establish your salon’s absolute digital dominance.
              </p>
              <p>
                From capturing hair painting processes to setting up local ad campaign target ranges, every action we perform is calibrated specifically for the dynamics of luxury beauty, wellness, and cosmetic training schools.
              </p>
              <p>
                By taking care of all video edits, caption copywriting, branding guidelines, and digital ad funnels, we empower salon proprietors to focus on delivering unmatched luxury services.
              </p>
            </div>
            
            {/* Why Choose SalonCapp Mini Bullet board */}
            <div className="mt-12 p-6 rounded-lg bg-[#121212] border border-zinc-800">
              <h4 className="text-white font-bold font-display uppercase tracking-widest text-xs mb-4 text-[#FFD000]">
                WHY CHOOSE SALONCAPP:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300 font-light">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FFD000] rounded-full inline-block" />
                  <span>Salon Industry Focused</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full inline-block" />
                  <span>Targeted Local Ads</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FFD000] rounded-full inline-block" />
                  <span>Creative Video Reels</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full inline-block" />
                  <span>Qualified Lead Generation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FFD000] rounded-full inline-block" />
                  <span>Premium Visual Branding</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full inline-block" />
                  <span>Corporate-grade Output</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Process Timeline Steps list */}
          <div className="lg:col-span-6 space-y-8">
            {STEPS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex gap-6 items-start p-6 rounded-xl bg-[#121212]/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                >
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded bg-[#FFD000]/5 border border-[#FFD000]/15 flex items-center justify-center text-[#FFD000]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="absolute -bottom-3 -right-3 text-xs font-extrabold font-mono text-zinc-600">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display uppercase tracking-widest mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 font-light text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
