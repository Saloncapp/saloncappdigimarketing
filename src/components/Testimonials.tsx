import React from 'react';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    clientName: 'Waves Womens Salon',
    review: 'Professional reels and creative marketing helped us improve our salon visibility and customer engagement dramatically.',
    avatarInitials: 'WW',
    stars: 5,
    tag: 'Salon Visibility'
  },
  {
    clientName: 'Lavanya Bridal Studio',
    review: 'Creative content and premium designs gave our bridal studio a highly professional, trustworthy, and luxury online presence.',
    avatarInitials: 'LB',
    stars: 5,
    tag: 'Premium Design'
  },
  {
    clientName: 'Atchayaa Makeup Academy',
    review: 'SalonCapp helped us showcase our academy professionally through highly converting reels, academy posters, and premium branding.',
    avatarInitials: 'AM',
    stars: 5,
    tag: 'Academy Branding'
  },
  {
    clientName: 'Freshface Unisex Salon',
    review: 'Consistent social media management and regular, trend-based video content improved our local audience reach and daily engagement.',
    avatarInitials: 'FU',
    stars: 5,
    tag: 'Social Growth'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#1a1a1a] py-24 border-t border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#FFD000] text-xs font-semibold tracking-widest uppercase mb-4 justify-center">
            <span className="w-8 h-px bg-[#FFD000]" />
            <span>CASE STUDIES</span>
            <span className="w-8 h-px bg-[#FFD000]" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 font-display">
            Client <span className="text-[#FFD000] italic">Success Stories.</span>
          </h2>
          
          <p className="text-zinc-400 font-light text-base sm:text-lg">
            Actual local beauty academy and luxury salon proprietors who scaled their booking predictability using our content solutions.
          </p>
        </div>

        {/* Testimonials Grid board */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#121212]/60 border border-zinc-800/80 hover:border-[#FFD000]/30 rounded-xl p-8 hover:bg-[#121212] transition-all duration-300 shadow-xl"
            >
              {/* Giant abstract quotation icon */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-zinc-900/40 group-hover:text-[#FFD000]/5 transition-colors pointer-events-none" />

              {/* Star Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(item.stars)].map((_, sidx) => (
                  <Star key={sidx} className="w-4 h-4 text-[#FFD000] fill-current" />
                ))}
              </div>

              {/* Review block */}
              <p className="text-zinc-300 font-light text-sm sm:text-base leading-relaxed mb-6 italic select-all">
                "{item.review}"
              </p>

              {/* Reviewer Meta info */}
              <div className="flex items-center gap-4 mt-auto border-t border-zinc-800/80 pt-5">
                {/* Gold Initials Avatar */}
                <div className="w-10 h-10 rounded bg-[#FFD000]/10 border border-[#FFD000]/30 flex items-center justify-center text-[#FFD000] font-bold font-display text-xs tracking-wider">
                  {item.avatarInitials}
                </div>
                <div>
                  <h4 className="text-white font-bold font-display text-sm uppercase tracking-wide">
                    {item.clientName}
                  </h4>
                  <span className="text-[10px] text-[#FFD000] font-mono tracking-widest uppercase mt-0.5 inline-block">
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
