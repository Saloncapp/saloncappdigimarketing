import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Sparkles, ExternalLink, Film, Award, Check } from 'lucide-react';

const SALON_REELS = [
  {
    title: 'Hair Transformation',
    tagline: 'Transforming Hair. Elevating Confidence.',
    url: 'https://www.instagram.com/reel/DS7VQYqD8db/',
    thumbnail: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    tag: 'Transformation'
  },
  {
    title: 'Client Transformation',
    tagline: 'Real Clients. Real Results.',
    url: 'https://www.instagram.com/reel/DWTrlrSD-Rh/',
    thumbnail: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    tag: 'Makeover Result'
  },
  {
    title: 'Hair Treatment Transformation',
    tagline: 'Healthy Hair Starts Here.',
    url: 'https://www.instagram.com/reel/DVdk5mMD7TB/',
    thumbnail: 'https://images.unsplash.com/photo-1560869713-7d0a29430f3a?auto=format&fit=crop&w=600&q=80',
    tag: 'Treatment Process'
  },
  {
    title: 'Informative Clip',
    tagline: 'Educate. Engage. Convert.',
    url: 'https://www.instagram.com/reel/DWlo02NgaTW/',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    tag: 'Expert Insights'
  },
  {
    title: 'Models Transformation',
    tagline: 'Creative Styling In Motion.',
    url: 'https://www.instagram.com/reel/DVTRo6yAdNi/',
    thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    tag: 'Model Shoot'
  },
  {
    title: 'Trending Style',
    tagline: 'Trending Looks That Attract Attention.',
    url: 'https://www.instagram.com/reel/DVdmkfbjAKp/',
    thumbnail: 'https://images.unsplash.com/photo-1605497746444-ac9dbd324087?auto=format&fit=crop&w=600&q=80',
    tag: 'Trending Hair'
  },
  {
    title: 'Bridal Transformation',
    tagline: 'Bridal Beauty Perfected.',
    url: 'https://www.instagram.com/reel/DUp7jgKE_VG/',
    thumbnail: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&w=600&q=80',
    tag: 'Bridal Makeover'
  },
  {
    title: 'Creative Content',
    tagline: 'Content That Builds Brands.',
    url: 'https://www.instagram.com/reel/DUVdEzkE1GT/',
    thumbnail: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80',
    tag: 'Content Production'
  },
  {
    title: 'Service Showcase',
    tagline: 'Showcasing Premium Salon Experiences.',
    url: 'https://www.instagram.com/reel/DXy54LeM2O0/',
    thumbnail: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80',
    tag: 'Luxury Experience'
  },
  {
    title: 'Customer Attention Video',
    tagline: 'Content Designed To Stop The Scroll.',
    url: 'https://www.instagram.com/reel/DYE7XVJymWh/',
    thumbnail: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80',
    tag: 'High Engagement'
  },
  {
    title: 'High-End Service Promotion',
    tagline: 'Premium Services For Premium Clients.',
    url: 'https://www.instagram.com/reel/DYeq0zIPU4H/',
    thumbnail: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80',
    tag: 'Exclusive Promo'
  },
  {
    title: 'Service Showcase',
    tagline: 'Experience Professional Beauty Services.',
    url: 'https://www.instagram.com/reel/DY4cEjfJKRu/',
    thumbnail: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80',
    tag: 'Service Highlights'
  },
  {
    title: 'Service Details To Attract Clients',
    tagline: 'Turn Viewers Into Customers.',
    url: 'https://www.instagram.com/reel/DZCuJ2fS9Pz/',
    thumbnail: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80',
    tag: 'Brand Conversion'
  },
  {
    title: 'Attractive Transformation',
    tagline: 'Transformations That Capture Attention & Build Trust.',
    url: 'https://www.instagram.com/reel/DZKf14QsiIj/',
    thumbnail: '/transformation_cover.png',
    tag: 'Transformation',
    description: 'A professional transformation reel designed to showcase beauty services in an engaging and visually appealing way. This style of content helps salons attract new clients, increase engagement, and create a stronger brand presence on social media.',
    buttonText: 'Watch Reel 14'
  }
];

const AI_REELS = [
  {
    title: 'AI Generated Informative Video',
    tagline: 'AI-Powered Salon Marketing.',
    url: 'https://www.instagram.com/reel/DYjPZw3v7fK/',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    tag: 'AI Infographics'
  },
  {
    title: 'AI Transformation Video',
    tagline: 'The Future Of Creative Content.',
    url: 'https://www.instagram.com/reel/DWq6Xp5j_mU/',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    tag: 'AI Content'
  },
  {
    title: 'AI Visual Effects Video',
    tagline: 'Creative Technology Meets Beauty Marketing.',
    url: 'https://www.instagram.com/reel/DVgQ-zqCpH7/',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
    tag: 'VFX / Synthesis'
  }
];

export default function VideoPortfolio() {
  const [activeTab, setActiveTab] = useState<'all' | 'salon' | 'ai'>('all');

  const filteredReels = () => {
    if (activeTab === 'salon') return SALON_REELS;
    if (activeTab === 'ai') return AI_REELS;
    return [...SALON_REELS, ...AI_REELS];
  };

  return (
    <section id="portfolio" className="bg-[#121212] py-24 border-t border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#FFD000] text-xs font-semibold tracking-widest uppercase mb-4 justify-center">
            <span className="w-8 h-px bg-[#FFD000]" />
            <span>PORTFOLIO SHOWCASE</span>
            <span className="w-8 h-px bg-[#FFD000]" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 font-display">
            Our Video <span className="text-[#FFD000] italic">Portfolio.</span>
          </h2>
          
          <p className="text-zinc-400 font-light text-base sm:text-lg mb-4">
            Explore our professional reel creations, visual storytelling, salon transformations, branding content, customer attraction videos, and promotional videos crafted exclusively for the beauty industry.
          </p>

          <p className="text-zinc-500 font-mono text-xs max-w-lg mx-auto">
            We have created <span className="text-[#FFD000] font-bold">150+ professional videos</span> for beauty salons, cosmetic academies, bridal studios, spas, and wellness brands.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#FFD000] text-[#121212] font-black'
                : 'bg-[#1a1a1a] border border-zinc-800 text-zinc-300 hover:text-white'
            }`}
          >
            Show All ({SALON_REELS.length + AI_REELS.length})
          </button>
          <button
            onClick={() => setActiveTab('salon')}
            className={`px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === 'salon'
                ? 'bg-[#FFD000] text-[#121212] font-black'
                : 'bg-[#1a1a1a] border border-zinc-800 text-zinc-300 hover:text-white'
            }`}
          >
            Salon Transformations ({SALON_REELS.length})
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'ai'
                ? 'bg-[#FFD000] text-[#121212] font-black'
                : 'bg-[#1a1a1a] border border-zinc-800 text-zinc-300 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            AI Video Editing ({AI_REELS.length})
          </button>
        </div>

        {/* AI Video Header (Only shown when filter is AI, or if we want to explain it) */}
        {activeTab === 'ai' && (
          <div className="bg-[#1a1a1a]/40 border border-[#FFD000]/20 rounded-xl p-6 mb-10 text-left max-w-4xl mx-auto">
            <h4 className="text-white font-bold font-display text-base uppercase tracking-wider flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#FFD000]" />
              <span>Informative Creative Video Editing Using AI</span>
            </h4>
            <p className="text-zinc-450 font-light text-sm leading-relaxed">
              AI-powered video editing solutions designed to educate, engage, and attract customers through innovative storytelling, visual creativity, and custom algorithmic soundboards.
            </p>
          </div>
        )}

        {/* Video Reel Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredReels().map((reel, index) => (
              <motion.a
                key={reel.url}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-[#121212] border border-zinc-900 shadow-2xl block transition-transform duration-500 hover:-translate-y-2 hover:border-[#FFD000]/60 hover:shadow-[0_0_40px_rgba(255,208,0,0.15)]"
              >
                {/* Background Salon Image - Premium curated */}
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 brightness-[0.4] group-hover:brightness-[0.45] transition-all duration-750 scale-100 group-hover:scale-105" 
                  style={{ backgroundImage: `url('${reel.thumbnail}')` }} 
                />

                {/* Luxury Vignette and Gradients to ensure text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/85 z-10 pointer-events-none" />

                {/* Aesthetic Thin Gold Corner Bracket Styling Frame */}
                <div className="absolute inset-3 border border-[#FFD000]/10 rounded-lg z-20 pointer-events-none group-hover:border-[#FFD000]/30 transition-colors duration-500" />

                {/* Premium Header Bar (Branded Template Header) */}
                <div className="absolute top-5 inset-x-5 z-20 flex items-center justify-between text-[8px] font-mono tracking-widest text-[#FFD000] uppercase opacity-85">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD000] animate-pulse" />
                    <span>SALONCAPP STUDIO</span>
                  </div>
                  <span>REEL {index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                </div>

                {/* Premium Instagram Reel Cover Presentation Layout */}
                <div className="absolute inset-5 z-20 flex flex-col justify-between h-[calc(100%-2.5rem)] text-left pointer-events-none">
                  
                  {/* Empty space at the top to let portrait shine */}
                  <div />

                  {/* Editorial Styled Middle Section */}
                  <div className="space-y-2 sm:space-y-3">
                    
                    {/* Category Label */}
                    <div className="inline-flex items-center gap-1">
                      <span className="w-3 h-[1px] bg-[#FFD000]" />
                      <span className="text-[10px] tracking-widest text-[#FFD000] uppercase font-black font-sans">
                        {reel.tag}
                      </span>
                    </div>

                    {/* Bold Stylized Video Title */}
                    <h3 className="text-white font-extrabold uppercase text-sm sm:text-base md:text-lg leading-tight tracking-tight drop-shadow-md group-hover:text-[#FFD000] transition-colors duration-300">
                      {reel.title}
                    </h3>

                    {/* Elegant Short Tagline */}
                    <p className="text-zinc-350 text-[10px] sm:text-xs font-light italic leading-relaxed tracking-wide font-sans max-w-[95%]">
                      {reel.tagline}
                    </p>

                    {/* Dynamic Detailed Description */}
                    {'description' in reel && reel.description && (
                      <p className="text-zinc-405 text-[9px] sm:text-[10px] font-light leading-relaxed tracking-wide font-sans max-w-[95%] line-clamp-3 sm:line-clamp-4 pt-1 text-zinc-400">
                        {reel.description}
                      </p>
                    )}
                  </div>

                  {/* Bottom brand presentation */}
                  <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[8px] sm:text-[9px] text-zinc-400 font-mono">
                    <span className="flex items-center gap-1 uppercase tracking-wider text-white">
                      <Film className="w-3 h-3 text-[#FFD000]" /> {'buttonText' in reel && reel.buttonText ? reel.buttonText : 'PRESS TO WATCH'}
                    </span>
                    <span className="text-[#FFD000] font-black tracking-wide">60 FPS CREATIVE</span>
                  </div>
                </div>

                {/* Overlay Premium Play Ring Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                  <div className="w-14 h-14 rounded-full bg-[#FFD000] text-[#121212] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-[#FFD000]/30 border-4 border-black/40">
                    <Play className="w-6 h-6 fill-current ml-0.5 text-zinc-950" />
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Instagram Link Block */}
        <div id="ig_bottom_banner" className="mt-20 text-center max-w-2xl mx-auto bg-[#1a1a1a]/50 p-8 sm:p-10 rounded-xl border border-zinc-800/80 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD000]/6 rounded-full blur-[65px] pointer-events-none" />
          
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white uppercase tracking-tight mb-3">
            Watch More Videos On Our Page
          </h3>
          <p className="text-zinc-500 font-light text-sm mb-6 max-w-lg mx-auto">
            Explore our latest salon marketing reels, branding videos, customer attraction content, AI-generated creatives, and professional editing portfolio directly from our live feed.
          </p>
          <a
            href="https://www.instagram.com/saloncapp_technologies/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FFD000] hover:bg-[#e6be00] text-[#121212] font-black text-xs uppercase tracking-widest px-8 py-4 rounded transition-all duration-300 shadow-md shadow-[#FFD000]/10 shrink-0"
            id="ig_profile_redirect_btn"
          >
            <span>View Instagram Portfolio</span>
            <span className="text-[#121212]/80">@saloncapp_technologies</span>
          </a>
        </div>

      </div>
    </section>
  );
}
