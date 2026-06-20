import React from 'react';
import { LineChart, Camera, Target, Star } from 'lucide-react';

const VALUES_DATA = [
  {
    icon: LineChart,
    title: 'Analytical Brand Growth',
    description: 'Utilizing market-tested local search analytics, audience feedback, and hyper-targeted ads to scale booking volume predictably.'
  },
  {
    icon: Camera,
    title: 'Cinematic Rigor',
    description: 'Filming every hair balayage, bridal makeover, and wellness treatment on cinematic cameras with professional on-premise directors.'
  },
  {
    icon: Target,
    title: 'High-Value Lead Intake',
    description: 'Connecting your high-tier services with affluent, premium local clients through customized ad funnels that ignore low-margin budget traffic.'
  },
  {
    icon: Star,
    title: 'Elite Aesthetic Authority',
    description: 'Bespoke Instagram grid curation, customized typography rules, and luxury brand guides designed to command absolute local prestige.'
  },
];

export default function CoreValues() {
  return (
    <section id="values" className="bg-[#121212] py-24 border-t border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#FFD000] text-xs font-semibold tracking-widest uppercase mb-4 justify-center">
            <span className="w-8 h-px bg-[#FFD000]" />
            <span>OUR AGENCY FRAMEWORK</span>
            <span className="w-8 h-px bg-[#FFD000]" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 font-display">
            The Pillars of <span className="text-[#FFD000] italic">Salon Authority.</span>
          </h2>
          
          <p className="text-zinc-400 font-light text-base sm:text-lg">
            We operate under selective agreements with top-tier salon proprietors dedicated to standing out as the absolute premium choice in their city.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES_DATA.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#1a1a1a]/40 border border-zinc-800/80 hover:border-[#FFD000]/30 rounded-xl p-8 hover:bg-[#1a1a1a]/80 transition-all duration-300 shadow-xl"
              >
                {/* Gold glow top hover accent line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFD000]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />

                <div className="w-12 h-12 rounded bg-[#FFD000]/10 border border-[#FFD000]/20 flex items-center justify-center text-[#FFD000] mb-6 group-hover:bg-[#FFD000] group-hover:text-[#121212] transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-3 uppercase tracking-wider group-hover:text-[#FFD000] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
