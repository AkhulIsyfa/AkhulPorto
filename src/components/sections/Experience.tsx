'use client';

import { useScrollReveal, fadeInUp, staggerContainer } from '@/hooks/useScrollReveal';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '@/lib/constants';

export default function Experience() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="experience" className="section bg-[var(--color-bg-primary)]">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-16 text-center">
            <span className="section-label">03. Journey</span>
            <h2 className="section-title">Experience</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line (Desktop only) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-[var(--color-border)]"></div>

            <div className="space-y-12 md:space-y-0">
              {EXPERIENCE_DATA.map((exp, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div 
                    key={exp.id} 
                    variants={fadeInUp}
                    className={`relative md:flex md:items-center ${isEven ? 'md:justify-start' : 'md:justify-end'} group`}
                  >
                    {/* Center Dot (Desktop only) */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-border)] group-hover:bg-[var(--color-text-primary)] transition-colors duration-300 z-10"></div>
                    
                    {/* Content Card */}
                    <div className={`md:w-[45%] ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                      <div className="p-6 md:p-8 rounded-2xl bg-[var(--color-bg-surface)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-300">
                        <div className={`flex flex-col gap-2 mb-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                            {exp.start_date} — {exp.is_current ? 'Present' : exp.end_date}
                          </span>
                          <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-text-primary)] mt-2">
                            {exp.role}
                          </h3>
                          <span className="text-lg font-medium text-[var(--color-text-body)]">
                            {exp.company}
                          </span>
                        </div>
                        <p className="text-[var(--color-text-muted)] leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
