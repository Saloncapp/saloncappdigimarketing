import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-[#1a1a1a] py-24 border-t border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Executive Portrait Side */}
          <div className="lg:col-span-5 relative" id="md_portrait_container">
            {/* Ambient luxury halo backdrop */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[340px] w-full bg-[#FFD000]/5 blur-[80px] rounded-full z-0" />

            <div className="relative z-10">
              {/* Premium geometric layout wrapper */}
              <div className="relative mx-auto max-w-[340px] lg:max-w-none">
                
                {/* Secondary Offset Frame (Luxury Accent) */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#FFD000] to-transparent rounded-2xl opacity-20 blur-sm z-0" />

                {/* Primary Framed Container */}
                <div className="relative rounded-2xl overflow-hidden bg-[#121212] p-2 border border-zinc-800 shadow-2xl">
                  <img
                    src="/founder.png"
                    alt="Jawahar - Founder & CEO of SalonCapp"
                    className="w-full aspect-[9/16] object-cover rounded-xl filter contrast-[1.02]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Absolute Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Frame caption signature */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-zinc-800/80">
                    <p className="text-white font-bold font-display text-base">Jawahar</p>
                    <p className="text-[#FFD000] text-xs uppercase tracking-wider mt-0.5">Founder & CEO</p>
                    <p className="text-zinc-500 text-[9px] uppercase tracking-widest mt-1 font-mono">SalonCapp</p>
                  </div>
                </div>

                {/* Premium corner gold geometric brackets */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#FFD000] rounded-tl-lg" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#FFD000] rounded-br-lg" />
              </div>
            </div>
          </div>

          {/* Letter / Copy Side */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-[#FFD000] text-xs font-semibold tracking-widest uppercase mb-4" id="md_caption">
              <span className="w-8 h-px bg-[#FFD000]" />
              <span>FOUNDER MESSAGE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-8 font-display">
              A Personal Commitment <span className="text-[#FFD000] italic">to Your Growth.</span>
            </h2>

            <div className="relative">
              {/* Massive background Quote Icon */}
              <Quote className="absolute -top-6 -left-10 w-20 h-20 text-[#FFD000]/5 rotate-180 pointer-events-none" />

              {/* Exact user content block */}
              <div className="space-y-6 text-zinc-300 font-light leading-relaxed text-base sm:text-lg relative z-10">
                <p className="border-l-2 border-[#FFD000] pl-4 italic">
                  "At SalonCapp, we don't believe in being just another agency. We believe in becoming a growth partner for every salon we work with."
                </p>
                <p>
                  "Our commitment is simple — to help salon owners build a stronger brand, attract high-paying clients, and create a powerful digital presence that drives real business growth."
                </p>
                <p>
                  "Every strategy, video, advertisement, and branding solution we create is designed specifically for the beauty industry. We focus on delivering measurable results through creativity, high-end filmmaking, and industry expertise."
                </p>
                <p>
                  "As the founder of SalonCapp, my vision is to help salon businesses adapt to the modern digital world while preserving the unique identity and values that make each salon special."
                </p>
              </div>
              
              {/* Signoff */}
              <div className="mt-8 border-t border-zinc-800/80 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-white font-extrabold font-display leading-tight text-lg">Jawahar</p>
                  <p className="text-[#FFD000] text-xs uppercase tracking-widest">Founder & CEO, SalonCapp</p>
                </div>
                
                <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs">
                  <Sparkles className="w-4 h-4 text-[#FFD000]" />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
