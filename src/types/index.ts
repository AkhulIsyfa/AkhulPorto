// ===========================
// TYPE DEFINITIONS — AkhulDev Portfolio
// ===========================

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  thumbnail: string;
  tech_stack: string[];
  live_url?: string;
  github_url?: string;
  category: string;
  featured: boolean;
  order: number;
  created_at: string;
  updated_at: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  start_date: string;
  end_date?: string;
  is_current: boolean;
  order: number;
  created_at: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Fullstack' | 'Data' | 'Tools';
  icon: string;
  order: number;
  created_at: string;
}

export interface TechItem {
  id: string;
  name: string;
  category: 'Language' | 'Framework' | 'Database' | 'Tool';
  icon_url: string;
  order: number;
  created_at: string;
}

export interface Profile {
  id: string;
  name: string;
  tagline: string;
  bio: string;
  email: string;
  phone?: string;
  location?: string;
  avatar_url?: string;
  resume_url?: string;
  social_links: SocialLinks;
  updated_at: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  email?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}
