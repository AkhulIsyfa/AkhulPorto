'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-[var(--color-bg-primary)]/90 backdrop-blur-md border-b border-[var(--color-border)]'
          : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto max-w-[1200px] px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-text-primary)]
            tracking-tight hover:opacity-70 transition-opacity duration-200"
        >
          AkhulDev
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[var(--color-text-body)] hover:text-[var(--color-text-primary)]
                    transition-colors duration-200 relative
                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px]
                    after:bg-[var(--color-accent)] after:transition-all after:duration-200
                    hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full
              border border-[var(--color-border)] hover:border-[var(--color-accent)]
              transition-all duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <FiX className="w-4 h-4 text-[var(--color-text-primary)]" />
            ) : (
              <FiMenu className="w-4 h-4 text-[var(--color-text-primary)]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-[var(--color-bg-primary)] z-40
          transition-all duration-300
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8 -mt-16">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--color-text-primary)]
                  hover:opacity-60 transition-opacity duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
