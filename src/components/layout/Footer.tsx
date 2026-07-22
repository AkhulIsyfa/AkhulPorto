import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { PROFILE_DATA } from '@/lib/constants';

export default function Footer() {
  const { social_links } = PROFILE_DATA;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)]">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-[var(--color-text-muted)] order-2 md:order-1">
            © {currentYear} AkhulDev. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 order-1 md:order-2">
            {social_links.github && (
              <a
                href={social_links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full
                  border border-[var(--color-border)] text-[var(--color-text-body)]
                  hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]
                  transition-all duration-200"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
            )}
            {social_links.linkedin && (
              <a
                href={social_links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full
                  border border-[var(--color-border)] text-[var(--color-text-body)]
                  hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]
                  transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
            )}
            {social_links.email && (
              <a
                href={`mailto:${social_links.email}`}
                className="w-9 h-9 flex items-center justify-center rounded-full
                  border border-[var(--color-border)] text-[var(--color-text-body)]
                  hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]
                  transition-all duration-200"
                aria-label="Email"
              >
                <FiMail className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
