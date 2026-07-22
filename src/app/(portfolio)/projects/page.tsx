import { PROJECTS_DATA } from '@/lib/constants';
import Link from 'next/link';
import { FiArrowLeft, FiArrowUpRight, FiGithub } from 'react-icons/fi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore all projects and works by AkhulDev.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-[var(--color-bg-primary)]">
      <div className="container max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors mb-6"
          >
            <FiArrowLeft /> Back to Home
          </Link>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl font-extrabold text-[var(--color-text-primary)] mb-4">
            All Projects
          </h1>
          <p className="text-xl text-[var(--color-text-body)] max-w-2xl font-light">
            A complete collection of my web development work, side projects, and experiments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.id} className="group relative block h-full">
              <div className="h-full border border-[var(--color-border)] bg-[var(--color-bg-surface)] rounded-2xl overflow-hidden transition-all duration-200 hover:border-[var(--color-text-primary)] hover:scale-[1.02] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]">
                
                {/* Thumbnail Placeholder */}
                <div className="aspect-video bg-[var(--color-border-light)] relative border-b border-[var(--color-border)] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text-muted)] bg-[var(--color-bg-primary)] group-hover:bg-[var(--color-bg-surface)] transition-colors">
                    <span className="font-[family-name:var(--font-heading)] tracking-widest text-sm uppercase opacity-50">{project.category}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col h-[calc(100%-56.25%)]">
                  <div className="flex-grow">
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-text-primary)] mb-2 group-hover:underline decoration-2 underline-offset-4">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-body)] mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech_stack.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-[10px] font-medium px-2 py-0.5 rounded-sm bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                          {tech}
                        </span>
                      ))}
                      {project.tech_stack.length > 3 && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-sm bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                          +{project.tech_stack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
