'use client';

import { useScrollReveal, fadeInUp, staggerContainer } from '@/hooks/useScrollReveal';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '@/lib/constants';
import Link from 'next/link';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

export default function Projects() {
  const { ref, controls } = useScrollReveal();
  
  // Get only featured projects for the homepage
  const featuredProjects = PROJECTS_DATA.filter(p => p.featured).slice(0, 4);

  return (
    <section id="projects" className="section bg-[var(--color-bg-surface)] border-y border-[var(--color-border)]">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div variants={fadeInUp}>
              <span className="section-label">04. Work</span>
              <h2 className="section-title mb-0">Featured Projects</h2>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Link 
                href="/projects"
                className="group flex items-center gap-2 font-[family-name:var(--font-heading)] font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-text-muted)] transition-colors duration-200"
              >
                View All Projects
                <FiArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp} className="group relative">
                <div className="block h-full border border-[var(--color-border)] bg-[var(--color-bg-primary)] rounded-2xl overflow-hidden transition-all duration-200 hover:border-[var(--color-text-primary)] hover:scale-[1.02] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]">
                  {/* Thumbnail Placeholder */}
                  <div className="aspect-video bg-[var(--color-border-light)] relative border-b border-[var(--color-border)] overflow-hidden">
                    {/* Placeholder image representation - will use actual next/image when data is ready */}
                    <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text-muted)] bg-[var(--color-bg-surface)]">
                      <span className="font-[family-name:var(--font-heading)] tracking-widest text-sm uppercase opacity-50">{project.category}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col h-[calc(100%-56.25%)]">
                    <div className="flex-grow">
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:underline decoration-2 underline-offset-4">
                        {project.title}
                      </h3>
                      <p className="text-[var(--color-text-body)] mb-6 line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech_stack.slice(0, 4).map((tech, idx) => (
                          <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-sm bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                            {tech}
                          </span>
                        ))}
                        {project.tech_stack.length > 4 && (
                          <span className="text-xs font-medium px-2.5 py-1 rounded-sm bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                            +{project.tech_stack.length - 4}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-4 pt-4 border-t border-[var(--color-border-light)]">
                        {project.live_url && (
                          <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-text-muted)] transition-colors">
                            <span>Live Demo</span>
                            <FiArrowUpRight />
                          </a>
                        )}
                        {project.github_url && (
                          <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-text-muted)] transition-colors">
                            <span>Source</span>
                            <FiGithub />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
