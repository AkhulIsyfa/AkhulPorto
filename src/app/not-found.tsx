import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-bg-primary)] px-6 text-center">
      <h1 className="font-[family-name:var(--font-heading)] text-8xl md:text-9xl font-extrabold text-[var(--color-text-primary)] mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-6">
        Page Not Found
      </h2>
      <p className="text-[var(--color-text-body)] mb-8 max-w-md mx-auto">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] rounded-full font-[family-name:var(--font-heading)] font-bold hover:opacity-90 transition-opacity"
      >
        <FiArrowLeft /> Back to Home
      </Link>
    </div>
  );
}
