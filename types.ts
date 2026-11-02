export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  role: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  projects?: {
    name: string;
    details: string;
  }[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface Profile {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  summary: string;
  socials: SocialLink[];
}