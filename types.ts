
export interface Experience {
  role: string;
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
}

export interface Certification {
  name: string;
  validity: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Availability {
  day: string;
  time: string;
}

export interface ResumeData {
  name: string;
  phone: string;
  email: string;
  location: string;
  summary: string;
  certifications: Certification[];
  skills: SkillCategory[];
  availability: Availability[];
  experience: Experience[];
  education: Education[];
}

export interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
}
