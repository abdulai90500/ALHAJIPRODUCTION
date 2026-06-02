export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'water' | 'animal-rearing' | 'charity' | 'community' | 'boat';
  image: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  date: string;
  details?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  location: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'charity' | 'water' | 'animal-rearing' | 'community' | 'all';
  type: 'image' | 'video';
  videoUrl?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: 'news' | 'event' | 'announcement';
  author: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface AnimalCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  details: string[];
  stats: { label: string; value: string }[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  phone: string[];
  email: string[];
  address: string;
  mapUrl: string;
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
  };
}
