import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const scrollToApproach = () => {
    const nextSection = document.getElementById('overview');
    if (nextSection) {
      const headerOffset = 80;
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#121212] overflow-hidden pt-24 pb-16 lg:py-0 animate-fade-in">
      {/* Decorative Luxury Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#FFD000]/5 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FFD000]/3 blur-[160px]" />
        
        {/* Subtle Luxury Mesh Grid Accent */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(#FFD000 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFD000]/10 border border-[#FFD000]/20 text-[#FFD000] text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXCLUSIVELY FOR MULTI-SPECIALTY SALONS & wellness BRANDS</span>
          </motion.div>

          <div className="flex flex-col gap-2 mb-6 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight font-sans leading-none uppercase"
            >
              <span className="text-white block mb-2 font-display">SALONCAPP</span>
              <span className="text-[#FFD000] block italic font-display font-light">DIGITAL AGENCY</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg sm:text-xl lg:text-3xl font-medium text-white tracking-wide font-sans mt-2"
            >
              Growing Your Salon Through Reels, Ads & Luxury Branding
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl mb-10"
          >
            We build outstanding digital authority through high-end cinematography, creative Instagram Reels, premium local ad management, and corporate-class branding strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={scrollToApproach}
              className="px-8 py-4 rounded bg-[#FFD000] text-[#121212] font-extrabold tracking-wider text-sm uppercase shadow-lg shadow-[#FFD000]/10 hover:shadow-[0_0_30px_rgba(255,208,0,0.4)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              id="hero_explore_btn"
            >
              Explore Our Approach
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => {
                const port = document.getElementById('portfolio');
                if (port) port.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded border border-[#FFD000]/30 hover:border-[#FFD000] text-white hover:text-[#FFD000] font-extrabold tracking-wider text-sm uppercase bg-transparent transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              id="hero_reel_btn"
            >
              <Play className="w-4 h-4 fill-current text-[#FFD000]" />
              Watch Reel Work
            </button>
          </motion.div>
        </div>

        {/* Visual Showcase Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto max-w-[450px] lg:max-w-none">
            {/* Ambient luxury halo backdrop */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[340px] w-full bg-gradient-to-r from-[#FFD000]/10 to-transparent blur-[60px] rounded-full z-0" />

            {/* Premium Gold Frame Enclosing workspace image */}
            <div className="relative rounded-2xl overflow-hidden border border-[#FFD000]/30 bg-[#1a1a1a]/80 backdrop-blur-sm p-3 shadow-[0_0_50px_rgba(255,208,0,0.15)] z-10 transition-all duration-500 hover:scale-[1.01] hover:border-[#FFD000]/60">
              {/* Premium Header Control Dots bar */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-4 px-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/85" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/85" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/85" />
                </div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  SALONCAPP STUDIO v1.1
                </div>
              </div>

              {/* Big Media Visual Section representing dynamic agency office */}
              <div className="relative rounded-lg overflow-hidden border border-zinc-800/80 aspect-video shadow-inner flex items-center justify-center bg-zinc-950">
                <img 
                  src="/agency_office.png"
                  alt="SalonCapp Digital Marketing Agency Office Environment" 
                  className="w-full h-full object-cover brightness-[95%] transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle golden overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute inset-0 flex flex-col justify-between p-4 z-10 pointer-events-none">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#FFD000] text-[#121212] text-[9px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wide">
                      SALONCAPP STUDIO
                    </span>
                    <span className="text-[10px] font-mono text-zinc-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur">
                      CAMPAIGNS LIVE
                    </span>
                  </div>
                  
                  <div>
                    <p className="text-white text-sm font-bold font-sans tracking-wide leading-tight drop-shadow-md">
                      Digital Marketing & Media Production
                    </p>
                    <p className="text-[#FFD000] text-[10px] uppercase tracking-wider font-semibold mt-1">
                      Exclusive Premium Salon Growth & Aesthetics
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elegant luxury minimalist status badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-zinc-950 to-zinc-900 border border-[#FFD000]/30 py-3 px-4 rounded-lg shadow-2xl z-20 flex items-center gap-2.5 animate-bounce-slow">
              <span className="w-2 h-2 rounded-full bg-[#FFD000] animate-pulse" />
              <div>
                <p className="text-[9px] uppercase text-zinc-400 tracking-wider">Salon Business Scale</p>
                <p className="text-xs text-white font-bold tracking-wide">Brand Growth Strategy</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
