import React from 'react';
import { motion } from 'motion/react';
import { 
  Film, 
  Instagram, 
  Palette, 
  TrendingUp, 
  Sparkles, 
  CheckCircle,
  Award,
  PenTool
} from 'lucide-react';

export default function Overview() {
  const visualCards = [
    {
      id: 'overview_creative_design',
      title: 'Creative Content Design',
      tag: 'Creative Design',
      icon: Palette,
      description: 'Elegantly designed social media graphics, custom promotional templates, hair & service pricing menus, and custom cohesive feeds built specifically for your salon brand.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'overview_reels_editing',
      title: 'Instagram Reels & Video Editing',
      tag: 'Reels Editing',
      icon: Film,
      description: 'Converting your raw treatment clips into professional, high-engaging Instagram Reels with perfect cuts, custom subtitles, beauty filters, and viral soundtrack pairing.',
      image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'overview_social_management',
      title: 'Social Media Management',
      tag: 'Social SMM',
      icon: Instagram,
      description: 'A-to-Z profile growth strategy, continuous content calendars, engaging captions, and interactive community growth planning across Instagram and Facebook pages.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'overview_branding_workspace',
      title: 'Branding & Aesthetics Workspace',
      tag: 'Luxury Identity',
      icon: Award,
      description: 'Custom aesthetic logo design suites, signature typography guides, elegant salon color palettes, and luxurious assets defining modern luxury beauty.',
      image: '/agency_office.png',
    },
    {
      id: 'overview_ads_management',
      title: 'Lead Generation & Ads Management',
      tag: 'Ads Management',
      icon: TrendingUp,
      description: 'High-ROI local Meta advertising campaigns, Google Map citations, and custom digital booking funnels configured to bring highly profitable beauty customers.',
      image: '/agency_office.png',
    }
  ];

  return (
    <section id="overview" className="section-padding bg-[#121212] py-24 border-t border-zinc-900/85">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-width Section Header with single-line heading design */}
        <div className="mb-16 text-left" id="overview_section_header">
          <div className="inline-flex items-center gap-2 text-[#FFD000] text-xs font-semibold tracking-widest uppercase mb-4" id="overview_subtitle_badge">
            <span className="w-8 h-px bg-[#FFD000]" />
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#FFD000]" /> Salon Growth Partner
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display uppercase leading-none" id="overview_section_title">
            Why Salon Owners Choose <span className="text-[#FFD000] italic">SalonCapp</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Content panel - Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-center" id="overview_text_panel">
            <div className="space-y-6 text-zinc-350 font-normal leading-relaxed text-base">
              <p className="text-zinc-100 font-medium text-lg leading-relaxed border-l-2 border-[#FFD000] pl-4">
                SalonCapp is a Digital Marketing and Social Media Management company built exclusively for salons, beauty parlours, bridal studios, beauty academies, and wellness businesses.
              </p>
              
              <p>
                We help beauty brands attract more customers, build a stronger online presence, and grow their business through professional digital marketing, social media management, Instagram Reels editing, branding, and advertising.
              </p>
              
              <p>
                Our team understands the beauty industry inside out and designs highly targeted strategies explicitly designed to scale salon businesses in your local area.
              </p>
              
              <p>
                Whether your goal is to acquire consistent premium bookings, cultivate outstanding brand authority across social networks, elevate your visual aesthetics, or generate verified customer inquiries, SalonCapp details a complete execution blueprint.
              </p>
              
              <p className="text-zinc-450 font-light italic text-sm mt-4">
                We focus on helping salon owners grow their business while they focus on delivering exceptional services to their clients.
              </p>
            </div>

            {/* Simple highlights to ensure trustworthiness and focus */}
            <div className="mt-8 pt-8 border-t border-zinc-900/60 grid grid-cols-2 gap-4" id="overview_quick_value_pillars">
              <div className="flex gap-2 items-start">
                <CheckCircle className="w-4 h-4 text-[#FFD000] shrink-0 mt-0.5" />
                <span className="text-xs uppercase font-bold tracking-wider text-white">Digital Marketing</span>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle className="w-4 h-4 text-[#FFD000] shrink-0 mt-0.5" />
                <span className="text-xs uppercase font-bold tracking-wider text-white">Ads Management</span>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle className="w-4 h-4 text-[#FFD000] shrink-0 mt-0.5" />
                <span className="text-xs uppercase font-bold tracking-wider text-white">Instagram Reels Edits</span>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle className="w-4 h-4 text-[#FFD000] shrink-0 mt-0.5" />
                <span className="text-xs uppercase font-bold tracking-wider text-white">Lead Generation</span>
              </div>
            </div>
          </div>

          {/* Visual Presentation panel - Right Column */}
          <div className="lg:col-span-7 space-y-6" id="overview_visual_panel">
            <div className="text-left mb-6">
              <p className="text-[#FFD000] font-mono text-[10px] tracking-widest uppercase">Visual Strategy Portfolio</p>
              <h3 className="text-white font-extrabold uppercase text-lg sm:text-xl font-display mt-1">
                Helping salons grow through digital marketing, SMM, and professional creative content.
              </h3>
            </div>

            {/* Custom Grid showing the five SMM-aligned visual elements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" id="overview_bento_visual_grid">
              
              {/* Card 1: Creative Design */}
              <div 
                id="overview_item_creative_design"
                className="group relative rounded-xl h-48 overflow-hidden bg-[#1a1a1a] border border-zinc-900 hover:border-[#FFD000]/40 transition-all duration-300 shadow-xl"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.35] group-hover:grayscale-0 group-hover:brightness-[0.4] transition-all duration-500 scale-100 group-hover:scale-105"
                  style={{ backgroundImage: `url('${visualCards[0].image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-4 flex flex-col justify-between z-15">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-widest bg-black/60 text-[#FFD000] px-2 py-0.5 rounded uppercase">{visualCards[0].tag}</span>
                    <Palette className="w-4 h-4 text-[#FFD000]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide group-hover:text-[#FFD000] transition-colors">{visualCards[0].title}</h4>
                    <p className="text-[10px] text-zinc-450 mt-1 line-clamp-2 leading-relaxed font-light">{visualCards[0].description}</p>
                  </div>
                </div>
              </div>

              {/* Card 2: Video Editing (Reels) */}
              <div 
                id="overview_item_reels_editing"
                className="group relative rounded-xl h-48 overflow-hidden bg-[#1a1a1a] border border-zinc-900 hover:border-[#FFD000]/40 transition-all duration-300 shadow-xl"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.35] group-hover:grayscale-0 group-hover:brightness-[0.4] transition-all duration-500 scale-100 group-hover:scale-105"
                  style={{ backgroundImage: `url('${visualCards[1].image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-4 flex flex-col justify-between z-15">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-widest bg-black/60 text-[#FFD000] px-2 py-0.5 rounded uppercase">{visualCards[1].tag}</span>
                    <Film className="w-4 h-4 text-[#FFD000]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide group-hover:text-[#FFD000] transition-colors">{visualCards[1].title}</h4>
                    <p className="text-[10px] text-zinc-450 mt-1 line-clamp-2 leading-relaxed font-light">{visualCards[1].description}</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Social Media Reels Management */}
              <div 
                id="overview_item_reel_production"
                className="group relative rounded-xl h-48 overflow-hidden bg-[#1a1a1a] border border-zinc-900 hover:border-[#FFD000]/40 transition-all duration-300 shadow-xl sm:col-span-2"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.35] group-hover:grayscale-0 group-hover:brightness-[0.4] transition-all duration-500 scale-100 group-hover:scale-105"
                  style={{ backgroundImage: `url('${visualCards[2].image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                <div className="absolute inset-5 flex flex-col justify-between z-15">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-widest bg-black/60 text-[#FFD000] px-2 py-0.5 rounded uppercase">{visualCards[2].tag}</span>
                    <Instagram className="w-4 h-4 text-[#FFD000]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide group-hover:text-[#FFD000] transition-colors">{visualCards[2].title}</h4>
                    <p className="text-[11px] text-zinc-300 mt-1 leading-relaxed font-light max-w-lg">{visualCards[2].description}</p>
                  </div>
                </div>
              </div>

              {/* Card 4: Branding Workspace */}
              <div 
                id="overview_item_branding_workspace"
                className="group relative rounded-xl h-48 overflow-hidden bg-[#1a1a1a] border border-zinc-900 hover:border-[#FFD000]/40 transition-all duration-300 shadow-xl"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.35] group-hover:grayscale-0 group-hover:brightness-[0.4] transition-all duration-500 scale-100 group-hover:scale-105"
                  style={{ backgroundImage: `url('${visualCards[3].image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-4 flex flex-col justify-between z-15">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-widest bg-black/60 text-[#FFD000] px-2 py-0.5 rounded uppercase">{visualCards[3].tag}</span>
                    <Award className="w-4 h-4 text-[#FFD000]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide group-hover:text-[#FFD000] transition-colors">{visualCards[3].title}</h4>
                    <p className="text-[10px] text-zinc-450 mt-1 line-clamp-2 leading-relaxed font-light">{visualCards[3].description}</p>
                  </div>
                </div>
              </div>

              {/* Card 5: Lead Generation / Ads Optimization */}
              <div 
                id="overview_item_marketing_illustration"
                className="group relative rounded-xl h-48 overflow-hidden bg-[#1a1a1a] border border-zinc-900 hover:border-[#FFD000]/40 transition-all duration-300 shadow-xl"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.35] group-hover:grayscale-0 group-hover:brightness-[0.4] transition-all duration-500 scale-100 group-hover:scale-105"
                  style={{ backgroundImage: `url('${visualCards[4].image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-4 flex flex-col justify-between z-15">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-widest bg-black/60 text-[#FFD000] px-2 py-0.5 rounded uppercase">{visualCards[4].tag}</span>
                    <TrendingUp className="w-4 h-4 text-[#FFD000]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide group-hover:text-[#FFD000] transition-colors">{visualCards[4].title}</h4>
                    <p className="text-[10px] text-zinc-450 mt-1 line-clamp-2 leading-relaxed font-light">{visualCards[4].description}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Simple Footnote Branded Badge */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 text-left flex items-center justify-between text-xs font-mono" id="overview_branding_footnote">
              <span className="text-white tracking-widest font-bold uppercase">100% SALON CUSTOMISED</span>
              <span className="text-[#FFD000]">NO RAW STOCK CLUTTER</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
