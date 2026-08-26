import React, { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Leadership from './components/Leadership';
import CoreValues from './components/CoreValues';
import Methodology from './components/Methodology';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import VideoPortfolio from './components/VideoPortfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Terms from './components/Terms';

function isTermsPath(pathname: string) {
  return pathname.replace(/\/$/, '') === '/terms';
}

export default function App() {
  const [showTerms, setShowTerms] = useState(() => isTermsPath(window.location.pathname));

  const goHome = useCallback((sectionId?: string) => {
    const path = sectionId ? `/#${sectionId}` : '/';
    window.history.pushState({}, '', path);
    setShowTerms(false);
    if (!sectionId) {
      window.scrollTo(0, 0);
      return;
    }
    // Scroll after home sections mount
    requestAnimationFrame(() => {
      window.setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (!element) return;
        const headerOffset = 80;
        const offsetPosition =
          element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }, 50);
    });
  }, []);

  const goTerms = useCallback(() => {
    window.history.pushState({}, '', '/terms');
    setShowTerms(true);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onPopState = () => {
      const onTerms = isTermsPath(window.location.pathname);
      setShowTerms(onTerms);
      if (onTerms) {
        window.scrollTo(0, 0);
        return;
      }
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        requestAnimationFrame(() => {
          window.setTimeout(() => {
            const element = document.getElementById(hash);
            if (!element) return;
            const headerOffset = 80;
            const offsetPosition =
              element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }, 50);
        });
      } else {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col justify-between selection:bg-[#FFD000]/30 selection:text-white">
      <Header onNavigateHome={() => goHome()} hideSectionNav={showTerms} />

      <main className="flex-grow">
        {showTerms ? (
          <Terms onBackHome={() => goHome()} />
        ) : (
          <>
            <Hero />
            <Overview />
            <Leadership />
            <CoreValues />
            <Methodology />
            <VideoPortfolio />
            <Pricing />
            <Testimonials />
            <Contact />
          </>
        )}
      </main>

      <Footer onNavigateTerms={goTerms} onNavigateHomeSection={goHome} />

      <FloatingButtons />
    </div>
  );
}
