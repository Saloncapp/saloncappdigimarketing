import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'values', label: 'Core Values' },
  { id: 'methodology', label: 'Methodology' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'portfolio', label: 'Video Portfolio' },
  { id: 'contact', label: 'Contact Us' },
];

type HeaderProps = {
  onNavigateHome?: () => void;
  hideSectionNav?: boolean;
};

export default function Header({ onNavigateHome, hideSectionNav = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (hideSectionNav) return;

      const scrollPosition = window.scrollY + 120;
      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideSectionNav]);

  const handleLogoClick = () => {
    if (onNavigateHome) {
      onNavigateHome();
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetValue = 80; // height of Header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offsetValue;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#121212]/95 backdrop-blur-md border-b border-[#FFD000]/10 shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="cursor-pointer" onClick={handleLogoClick}>
              <Logo />
            </div>

            {!hideSectionNav && (
              <>
                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                  {NAV_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 cursor-pointer ${
                        activeSection === item.id 
                          ? 'text-[#FFD000]' 
                          : 'text-zinc-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.span
                          layoutId="activeUnderline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD000]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </nav>

                <div className="hidden lg:flex items-center gap-4">
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="bg-[#FFD000] text-[#121212] px-5 py-2.5 rounded text-sm font-bold tracking-wide hover:bg-[#e6be00] hover:shadow-[0_0_20px_rgba(255,208,0,0.35)] transition-all duration-300 cursor-pointer flex items-center gap-1.5"
                    id="header_cta_btn"
                  >
                    Let's Talk
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden p-2 text-zinc-300 hover:text-[#FFD000] cursor-pointer"
                  aria-label="Toggle menu"
                  id="mobile_menu_trigger"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Navigation Drawer */}
      <AnimatePresence>
        {isOpen && !hideSectionNav && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#121212]/98 backdrop-blur-lg border-b border-[#FFD000]/10 shadow-2xl py-6 px-4 lg:hidden max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2.5 px-4 rounded text-base font-medium tracking-wide transition-colors ${
                    activeSection === item.id 
                      ? 'bg-[#FFD000]/10 text-[#FFD000] font-semibold border-l-4 border-[#FFD000]' 
                      : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="h-px bg-zinc-800 my-2" />

              <div className="flex flex-col gap-3 px-4">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full bg-[#FFD000] text-[#121212] py-3 rounded font-black tracking-wide text-center uppercase text-sm hover:bg-[#e6be00] transition-colors shadow-md shadow-[#FFD000]/10 cursor-pointer"
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
