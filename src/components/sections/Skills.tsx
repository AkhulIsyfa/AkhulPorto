'use client';

import { useScrollReveal, fadeInUp, staggerContainer } from '@/hooks/useScrollReveal';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '@/lib/constants';

export default function Skills() {
  const { ref, controls } = useScrollReveal();

  // Group skills by category
  const groupedSkills = SKILLS_DATA.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILLS_DATA>);

  // Define category order
  const categoryOrder = ['Frontend', 'Backend', 'Fullstack', 'Data', 'Tools'];

  return (
    <section id="skills" className="section bg-[var(--color-bg-surface)] border-y border-[var(--color-border)]">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <span className="section-label">02. Expertise</span>
            <h2 className="section-title">Skills & Technologies</h2>
          </motion.div>

          <div className="flex flex-col gap-12">
            {categoryOrder.map((category) => {
              const skills = groupedSkills[category];
              if (!skills || skills.length === 0) return null;

              return (
                <motion.div key={category} variants={fadeInUp} className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 items-start border-b border-[var(--color-border-light)] pb-12 last:border-0 last:pb-0">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-text-primary)]">
                    {category}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill.id}
                        className="px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-primary)] 
                          text-sm font-medium text-[var(--color-text-body)] hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]
                          transition-colors duration-200 cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
