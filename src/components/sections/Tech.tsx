'use client';

import { TECH_DATA } from '@/lib/constants';

export default function Tech() {
  // Duplicate data to create a seamless infinite loop
  const duplicatedTech = [...TECH_DATA, ...TECH_DATA];

  return (
    <section id="tech" className="py-16 md:py-24 bg-[var(--color-bg-primary)] overflow-hidden">
      <div className="container mx-auto mb-10 text-center">
        <span className="section-label">05. Tech</span>
      </div>
      
      <div className="relative w-full overflow-hidden flex bg-[var(--color-bg-surface)] border-y border-[var(--color-border)] py-8 md:py-12">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-[var(--color-bg-surface)] to-transparent pointer-events-none"></div>
        
        {/* Marquee Track */}
        <div className="flex w-[max-content] animate-marquee items-center gap-16 md:gap-24 px-8 md:px-12">
          {duplicatedTech.map((tech, index) => (
            <div 
              key={`${tech.id}-${index}`} 
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              {/* If we had actual logo SVGs, we'd use them here. Since we only want text/placeholder logos for now, we render the name stylized */}
              <span className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold whitespace-nowrap text-[var(--color-text-primary)]">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-[var(--color-bg-surface)] to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
