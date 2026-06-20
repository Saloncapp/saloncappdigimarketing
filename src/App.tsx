import React from 'react';
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

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col justify-between selection:bg-[#FFD000]/30 selection:text-white">
      {/* Floating Headers */}
      <Header />

      {/* Main Core Elements */}
      <main className="flex-grow">
        {/* Hero Banner Grid block */}
        <Hero />

        {/* Overview App simulator block */}
        <Overview />

        {/* Visionary Leadership Block (Jawahar Executive Panel) */}
        <Leadership />

        {/* Core Values Pillars */}
        <CoreValues />

        {/* Refined Partnership Methodology */}
        <Methodology />

        {/* Video Portfolio grid (transformations & AI editing tab decks) */}
        <VideoPortfolio />

        {/* Pricing models & Add-on list decks */}
        <Pricing />

        {/* Case Studies Review boards */}
        <Testimonials />

        {/* Contacts Forms & Maps guides */}
        <Contact />
      </main>

      {/* Footers */}
      <Footer />

      {/* Persistent floating triggers (WA/Call/IG/ScaleTop) */}
      <FloatingButtons />
    </div>
  );
}
