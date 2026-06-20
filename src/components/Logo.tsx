import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <h1 className="font-display tracking-[0.15em] font-black text-xl sm:text-2xl leading-none">
        <span className="text-white">SALON</span>
        <span className="text-[#FFD000]">CAPP</span>
      </h1>
    </div>
  );
}
