export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: Array<{
    name: string;
    level: number;
  }>;
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
}

export interface CV {
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  achievements: Achievement[];
}