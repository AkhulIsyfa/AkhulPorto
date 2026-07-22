import type { NavLink, Profile, Project, Experience, Skill, TechItem, Stat } from '@/types';

// ===========================
// SITE METADATA
// ===========================

export const SITE_CONFIG = {
  name: 'AkhulDev',
  title: 'AkhulDev — Web Developer',
  description: 'Portfolio website of Akhul Isyfa — Web Developer specializing in modern web technologies.',
  url: 'https://akhuldev.vercel.app',
} as const;

// ===========================
// NAVIGATION
// ===========================

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech', href: '#tech' },
  { label: 'Contact', href: '#contact' },
];

// ===========================
// PLACEHOLDER DATA — Profile
// ===========================

export const PROFILE_DATA: Profile = {
  id: '1',
  name: 'Akhul Isyfa',
  tagline: 'Web Developer',
  bio: 'Seorang Web Developer yang berfokus pada pengembangan aplikasi web modern dengan teknologi terkini. Berpengalaman dalam membangun solusi digital yang efisien, scalable, dan user-friendly. Memiliki passion dalam clean code, arsitektur yang solid, dan desain yang minimalis.',
  email: 'akhulisyfa@gmail.com',
  phone: '',
  location: 'Indonesia',
  avatar_url: '',
  resume_url: '',
  social_links: {
    github: 'https://github.com/akhulisyfa',
    linkedin: 'https://linkedin.com/in/akhulisyfa',
    email: 'akhulisyfa@gmail.com',
  },
  updated_at: new Date().toISOString(),
};

// ===========================
// PLACEHOLDER DATA — Stats
// ===========================

export const STATS_DATA: Stat[] = [
  { label: 'Projects', value: '10+' },
  { label: 'Tech Stack', value: '15+' },
  { label: 'Years Exp.', value: '2+' },
];

// ===========================
// PLACEHOLDER DATA — Projects
// ===========================

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    description: 'Full-stack e-commerce application dengan fitur payment gateway, inventory management, dan admin dashboard.',
    content: '',
    thumbnail: '/images/project-placeholder.jpg',
    tech_stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    live_url: '#',
    github_url: '#',
    category: 'Web App',
    featured: true,
    order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Task Management System',
    slug: 'task-management-system',
    description: 'Aplikasi manajemen tugas kolaboratif dengan real-time updates dan drag-and-drop interface.',
    content: '',
    thumbnail: '/images/project-placeholder.jpg',
    tech_stack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    live_url: '#',
    github_url: '#',
    category: 'Web App',
    featured: true,
    order: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Company Profile Website',
    slug: 'company-profile-website',
    description: 'Website profil perusahaan dengan CMS terintegrasi untuk manajemen konten yang mudah.',
    content: '',
    thumbnail: '/images/project-placeholder.jpg',
    tech_stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    live_url: '#',
    github_url: '#',
    category: 'Website',
    featured: true,
    order: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Data Analytics Dashboard',
    slug: 'data-analytics-dashboard',
    description: 'Dashboard analitik interaktif untuk visualisasi data penjualan dengan grafik dan laporan real-time.',
    content: '',
    thumbnail: '/images/project-placeholder.jpg',
    tech_stack: ['Python', 'React', 'D3.js', 'PostgreSQL'],
    live_url: '#',
    github_url: '#',
    category: 'Data',
    featured: true,
    order: 4,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// ===========================
// PLACEHOLDER DATA — Experience
// ===========================

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: '1',
    company: 'Tech Startup',
    role: 'Full-Stack Web Developer',
    description: 'Mengembangkan dan maintain aplikasi web menggunakan Next.js dan Laravel. Berkolaborasi dengan tim desain untuk mengimplementasikan UI/UX yang optimal.',
    start_date: '2023-01',
    end_date: undefined,
    is_current: true,
    order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    company: 'Digital Agency',
    role: 'Frontend Developer',
    description: 'Bertanggung jawab dalam pengembangan frontend untuk berbagai project client. Fokus pada performa, aksesibilitas, dan responsive design.',
    start_date: '2022-01',
    end_date: '2023-01',
    is_current: false,
    order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    company: 'Freelance',
    role: 'Web Developer',
    description: 'Mengerjakan berbagai project freelance mulai dari landing page, company profile, hingga web application. Mengelola project dari awal hingga deployment.',
    start_date: '2021-01',
    end_date: '2022-01',
    is_current: false,
    order: 3,
    created_at: new Date().toISOString(),
  },
];

// ===========================
// PLACEHOLDER DATA — Skills
// ===========================

export const SKILLS_DATA: Skill[] = [
  { id: '1', name: 'HTML & CSS', category: 'Frontend', icon: 'html', order: 1, created_at: '' },
  { id: '2', name: 'JavaScript', category: 'Frontend', icon: 'js', order: 2, created_at: '' },
  { id: '3', name: 'TypeScript', category: 'Frontend', icon: 'ts', order: 3, created_at: '' },
  { id: '4', name: 'React', category: 'Frontend', icon: 'react', order: 4, created_at: '' },
  { id: '5', name: 'Next.js', category: 'Frontend', icon: 'nextjs', order: 5, created_at: '' },
  { id: '6', name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwind', order: 6, created_at: '' },

  { id: '7', name: 'Node.js', category: 'Backend', icon: 'node', order: 1, created_at: '' },
  { id: '8', name: 'PHP', category: 'Backend', icon: 'php', order: 2, created_at: '' },
  { id: '9', name: 'Laravel', category: 'Backend', icon: 'laravel', order: 3, created_at: '' },
  { id: '10', name: 'CodeIgniter', category: 'Backend', icon: 'ci', order: 4, created_at: '' },
  { id: '11', name: 'Express.js', category: 'Backend', icon: 'express', order: 5, created_at: '' },

  { id: '12', name: 'Next.js Full-Stack', category: 'Fullstack', icon: 'nextjs', order: 1, created_at: '' },
  { id: '13', name: 'Laravel Full-Stack', category: 'Fullstack', icon: 'laravel', order: 2, created_at: '' },
  { id: '14', name: 'MERN Stack', category: 'Fullstack', icon: 'mern', order: 3, created_at: '' },

  { id: '15', name: 'MySQL', category: 'Data', icon: 'mysql', order: 1, created_at: '' },
  { id: '16', name: 'PostgreSQL', category: 'Data', icon: 'postgres', order: 2, created_at: '' },
  { id: '17', name: 'MongoDB', category: 'Data', icon: 'mongo', order: 3, created_at: '' },
  { id: '18', name: 'Prisma', category: 'Data', icon: 'prisma', order: 4, created_at: '' },

  { id: '19', name: 'Git & GitHub', category: 'Tools', icon: 'git', order: 1, created_at: '' },
  { id: '20', name: 'VS Code', category: 'Tools', icon: 'vscode', order: 2, created_at: '' },
  { id: '21', name: 'Figma', category: 'Tools', icon: 'figma', order: 3, created_at: '' },
  { id: '22', name: 'Vercel', category: 'Tools', icon: 'vercel', order: 4, created_at: '' },
];

// ===========================
// PLACEHOLDER DATA — Tech (Marquee)
// ===========================

export const TECH_DATA: TechItem[] = [
  { id: '1', name: 'JavaScript', category: 'Language', icon_url: '', order: 1, created_at: '' },
  { id: '2', name: 'TypeScript', category: 'Language', icon_url: '', order: 2, created_at: '' },
  { id: '3', name: 'PHP', category: 'Language', icon_url: '', order: 3, created_at: '' },
  { id: '4', name: 'Python', category: 'Language', icon_url: '', order: 4, created_at: '' },
  { id: '5', name: 'React', category: 'Framework', icon_url: '', order: 5, created_at: '' },
  { id: '6', name: 'Next.js', category: 'Framework', icon_url: '', order: 6, created_at: '' },
  { id: '7', name: 'Node.js', category: 'Framework', icon_url: '', order: 7, created_at: '' },
  { id: '8', name: 'Laravel', category: 'Framework', icon_url: '', order: 8, created_at: '' },
  { id: '9', name: 'CodeIgniter', category: 'Framework', icon_url: '', order: 9, created_at: '' },
  { id: '10', name: 'Prisma', category: 'Tool', icon_url: '', order: 10, created_at: '' },
  { id: '11', name: 'Tailwind CSS', category: 'Framework', icon_url: '', order: 11, created_at: '' },
  { id: '12', name: 'MySQL', category: 'Database', icon_url: '', order: 12, created_at: '' },
  { id: '13', name: 'PostgreSQL', category: 'Database', icon_url: '', order: 13, created_at: '' },
  { id: '14', name: 'MongoDB', category: 'Database', icon_url: '', order: 14, created_at: '' },
  { id: '15', name: 'Git', category: 'Tool', icon_url: '', order: 15, created_at: '' },
  { id: '16', name: 'Docker', category: 'Tool', icon_url: '', order: 16, created_at: '' },
];
