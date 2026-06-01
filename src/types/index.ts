export interface Project {
  title: string;
  description: string;
  tech: string[];
  demoLink: string;
  githubLink: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  downloadLink?: string;
}

export interface Developer {
  name: string;
  title: string;
  tagline: string;
  profileImage: string;
  bio: string;
  skills: {
    frontend: string[];
    backend: string[];
    databases: string[];
    devops: string[];
  };
  projects: Project[];
  experience: Experience[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
    twitter: string;
    telegram: string;
    instagram: string;
  };
  education: Education[];
  certificates: Certificate[];
}
