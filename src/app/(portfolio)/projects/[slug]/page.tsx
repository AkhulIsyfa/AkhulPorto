import { PROJECTS_DATA } from '@/lib/constants';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FiArrowLeft, FiArrowUpRight, FiGithub, FiCalendar } from 'react-icons/fi';
import { formatDate } from '@/lib/utils';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === resolvedParams.slug);
  
  if (!project) return { title: 'Project Not Found' };
  
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: Props) {
  const resolvedParams = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-24 pb-16 min-h-screen bg-[var(--color-bg-primary)]">
      <div className="container max-w-4xl mx-auto">
        
        {/* Navigation */}
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors mb-8"
        >
          <FiArrowLeft /> Back to Projects
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-[var(--color-border)] pb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)]">
              {project.category}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
              <FiCalendar className="w-4 h-4" />
              {formatDate(project.created_at)}
            </span>
          </div>
          
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-text-primary)] mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl text-[var(--color-text-body)] font-light leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-6">
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.map((tech, idx) => (
                <span key={idx} className="text-sm font-medium px-3 py-1 rounded-md bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)]">
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              {project.live_url && (
                <a 
                  href={project.live_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  Live Demo <FiArrowUpRight />
                </a>
              )}
              {project.github_url && (
                <a 
                  href={project.github_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] rounded-full font-medium hover:border-[var(--color-text-primary)] transition-colors"
                >
                  Source <FiGithub />
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Thumbnail Hero */}
        <div className="aspect-video bg-[var(--color-bg-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12 flex items-center justify-center">
           <span className="font-[family-name:var(--font-heading)] tracking-widest text-xl uppercase opacity-30 text-[var(--color-text-muted)]">Image Placeholder</span>
        </div>

        {/* Markdown Content (Placeholder) */}
        <div className="prose prose-lg max-w-none text-[var(--color-text-body)]
          prose-headings:font-[family-name:var(--font-heading)] prose-headings:text-[var(--color-text-primary)]
          prose-a:text-[var(--color-text-primary)] prose-a:underline-offset-4
          prose-strong:text-[var(--color-text-primary)]
          prose-blockquote:border-[var(--color-text-primary)] prose-blockquote:text-[var(--color-text-muted)]
        ">
          <h2>About The Project</h2>
          <p>
            This is a placeholder for the full project case study. In Phase 2, this section will render markdown content directly from the Supabase database.
          </p>
          <h3>Key Features</h3>
          <ul>
            <li>Feature one description</li>
            <li>Feature two description</li>
            <li>Feature three description</li>
          </ul>
          <h3>Challenges & Solutions</h3>
          <p>
            Detailed explanation of technical challenges faced during development and how they were resolved using the selected tech stack.
          </p>
        </div>

      </div>
    </article>
  );
}
