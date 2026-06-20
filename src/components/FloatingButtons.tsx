import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Instagram, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Floating Scroll to Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-zinc-900 border border-[#FFD000]/30 text-[#FFD000] flex items-center justify-center hover:bg-[#FFD000] hover:text-[#121212] hover:border-transparent transition-all shadow-xl cursor-pointer"
            id="floating_scroll_top"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919789753804"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xl relative group cursor-pointer"
        id="floating_wa_chat"
        title="Chat on WhatsApp"
        aria-label="WhatsApp Chat"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        
        {/* Tooltip */}
        <span className="absolute right-16 scale-0 bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 rounded-md py-1.5 px-3 whitespace-nowrap group-hover:scale-100 transition-all origin-right">
          WhatsApp Direct Chat
        </span>
      </a>

      {/* Calling Button */}
      <a
        href="tel:8700497004"
        className="w-14 h-14 rounded-full bg-[#FFD000] text-[#121212] flex items-center justify-center hover:scale-110 transition-transform shadow-2xl relative group cursor-pointer"
        id="floating_call_hotline"
        title="Call Hotline"
        aria-label="Call Direct"
      >
        <Phone className="w-6 h-6" />
        
        {/* Tooltip */}
        <span className="absolute right-16 scale-0 bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 rounded-md py-1.5 px-3 whitespace-nowrap group-hover:scale-100 transition-all origin-right">
          Call Now: 87004 97004
        </span>
      </a>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/saloncapp_technologies/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xl relative group cursor-pointer"
        id="floating_ig_profile"
        title="Follow on Instagram"
        aria-label="Instagram Profile"
      >
        <Instagram className="w-6 h-6" />
        
        {/* Tooltip */}
        <span className="absolute right-16 scale-0 bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 rounded-md py-1.5 px-3 whitespace-nowrap group-hover:scale-100 transition-all origin-right">
          Instagram Feed
        </span>
      </a>
    </div>
  );
}
