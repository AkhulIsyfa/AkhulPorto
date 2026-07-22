'use client';

import { useScrollReveal, fadeInUp, staggerContainer } from '@/hooks/useScrollReveal';
import { motion } from 'framer-motion';
import { PROFILE_DATA, STATS_DATA } from '@/lib/constants';

export default function About() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="about" className="section bg-[var(--color-bg-primary)]">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <span className="section-label">01. About</span>
            <h2 className="section-title">Who I Am</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Avatar Column */}
            <motion.div variants={fadeInUp} className="lg:col-span-4">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-[var(--color-bg-surface)] border border-[var(--color-border)] grayscale hover:grayscale-0 transition-all duration-500">
                {PROFILE_DATA.avatar_url ? (
                  <img
                    src={PROFILE_DATA.avatar_url}
                    alt={PROFILE_DATA.name}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-[var(--color-text-muted)] p-8 text-center">
                    <svg className="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-[family-name:var(--font-heading)] text-sm tracking-widest uppercase">Photo Placeholder</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Bio & Stats Column */}
            <motion.div variants={fadeInUp} className="lg:col-span-8 flex flex-col justify-center h-full">
              <div className="prose prose-lg max-w-none mb-12 text-[var(--color-text-body)]">
                <p className="text-xl leading-relaxed font-light">
                  {PROFILE_DATA.bio}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-[var(--color-border)]">
                {STATS_DATA.map((stat, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <span className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[var(--color-text-primary)]">
                      {stat.value}
                    </span>
                    <span className="text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
