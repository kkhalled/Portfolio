export interface Experience {
  period: string;
  title: string;
  company: string;
  url: string;
  description: string;
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  /** Live demo URL */
  url: string;
  /** GitHub repo URL */
  github?: string;
}

export type NavSection = "about" | "experience" | "projects" | "contact";
