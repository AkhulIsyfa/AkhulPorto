'use client';

import { useScrollReveal, fadeInUp, staggerContainer } from '@/hooks/useScrollReveal';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '@/lib/constants';
import { FiMail, FiArrowRight } from 'react-icons/fi';

export default function Contact() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="contact" className="section bg-[var(--color-bg-primary)]">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <span className="section-label">06. Next Steps</span>
            <h2 className="section-title">Get In Touch</h2>
            <p className="text-xl text-[var(--color-text-body)] max-w-2xl mx-auto mt-6 font-light">
              Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-md mx-auto">
            <form className="flex flex-col gap-6 text-left">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-[var(--color-text-primary)]">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)] focus:border-[var(--color-text-primary)] focus:ring-1 focus:ring-[var(--color-text-primary)] outline-none transition-all text-[var(--color-text-primary)]"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-[var(--color-text-primary)]">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)] focus:border-[var(--color-text-primary)] focus:ring-1 focus:ring-[var(--color-text-primary)] outline-none transition-all text-[var(--color-text-primary)]"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-[var(--color-text-primary)]">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  placeholder="Hello Akhul..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)] focus:border-[var(--color-text-primary)] focus:ring-1 focus:ring-[var(--color-text-primary)] outline-none transition-all text-[var(--color-text-primary)] resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="group flex items-center justify-center gap-2 w-full py-4 mt-4 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] rounded-xl font-[family-name:var(--font-heading)] font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Send Message
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-12 flex items-center justify-center gap-2 text-[var(--color-text-muted)]">
              <span>Or email me directly at</span>
              <a href={`mailto:${PROFILE_DATA.email}`} className="flex items-center gap-1.5 font-medium text-[var(--color-text-primary)] hover:underline underline-offset-4">
                <FiMail />
                {PROFILE_DATA.email}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
