import React from 'react';
import Logo from './Logo';
import { Instagram, MessageSquare, Phone, MapPin, Clock } from 'lucide-react';

const QUICK_LINKS = [
  { id: 'overview', label: 'Overview' },
  { id: 'values', label: 'Core Values' },
  { id: 'methodology', label: 'Methodology' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'portfolio', label: 'Video Portfolio' },
  { id: 'contact', label: 'Contact Us' }
];

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#121212] border-t border-zinc-900/90 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-900/60">
          
          {/* Logo Column */}
          <div className="lg:col-span-5 space-y-6">
            <Logo />
            <p className="text-zinc-400 font-light text-sm leading-relaxed max-w-sm">
              Helping salons, bridal studios, makeup academies, and spas grow through premium cinematic content, corporate branding, professional video production, high-impact social campaigns, and high-performance digital marketing solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/saloncapp_technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 hover:border-[#FFD000] hover:text-[#FFD000] flex items-center justify-center text-zinc-400 transition-colors cursor-pointer"
                title="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919789753804"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 hover:border-[#FFD000] hover:text-[#FFD000] flex items-center justify-center text-zinc-400 transition-colors cursor-pointer"
                title="WhatsApp Support"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="tel:8700497004"
                className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 hover:border-[#FFD000] hover:text-[#FFD000] flex items-center justify-center text-zinc-400 transition-colors cursor-pointer"
                title="Hotline Call"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display border-l-2 border-[#FFD000] pl-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="text-zinc-400 hover:text-[#FFD000] text-sm font-light transition-colors cursor-pointer"
                  >
                    • {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours Column */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display border-l-2 border-[#FFD000] pl-3">
              Business Hours
            </h4>
            <div className="space-y-4 text-sm text-zinc-400 font-light">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#FFD000] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium uppercase text-xs tracking-wider">General Shift Shifts</p>
                  <p className="mt-1">Monday – Saturday: 9:30 AM – 5:30 PM</p>
                  <p className="text-red-400 font-medium mt-1">Sunday: Closed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 pt-2">
                <MapPin className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-zinc-500 font-medium uppercase text-[10px] tracking-wider">Kumbakonam, Tamil Nadu</p>
                  <p className="text-[11px] leading-relaxed mt-0.5">Sethuraman Nagar, Melacavery, Kumbakonam - Chennai Rd</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright declaration */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} SalonCapp Agency. All Rights Reserved.</p>
          <p>
            Exclusively Serving Great Beauty Brands & Salon Proprietors. Built with Pride.
          </p>
        </div>

      </div>
    </footer>
  );
}
