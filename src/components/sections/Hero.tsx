'use client';

import { useScrollReveal, fadeIn } from '@/hooks/useScrollReveal';
import { motion } from 'framer-motion';
import HeroScene from '@/components/three/HeroScene';
import { SITE_CONFIG } from '@/lib/constants';

export default function Hero() {
  const { ref, controls } = useScrollReveal();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Pattern Background */}
      <div className="absolute inset-0 z-0 dot-pattern opacity-30"></div>
      
      {/* 3D Accent Element */}
      <HeroScene />

      {/* Main Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="relative inline-block"
        >
          {/* Floating/Elevated Container Effect */}
          <div className="relative z-10 px-8 py-12 rounded-3xl backdrop-blur-sm bg-[var(--color-bg-primary)]/40 border border-[var(--color-border)]/50 shadow-[var(--shadow-float)]">
            <h1 className="font-[family-name:var(--font-heading)] text-6xl md:text-8xl lg:text-[10rem] font-extrabold leading-none tracking-tighter mb-4 text-[var(--color-text-primary)]">
              {SITE_CONFIG.name}
            </h1>
            <p className="font-[family-name:var(--font-body)] text-xl md:text-2xl font-light tracking-widest uppercase text-[var(--color-text-body)]">
              Web Developer
            </p>
          </div>
          
          {/* Subtle glow behind the container (optional enhancement for float effect) */}
          <div className="absolute inset-0 -z-10 bg-[var(--color-bg-surface)]/20 blur-3xl rounded-full transform scale-110"></div>
        </motion.div>
      </div>
    </section>
  );
}
