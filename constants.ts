
import type { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Lovejeet Singh",
  phone: "+1 (742) 247-0123",
  email: "lovejeetsingh@trentu.ca",
  location: "Peterborough, ON",
  summary: "Reliable and enthusiastic Trent University student with valid Smart Serve and Food Safety certifications. Eager to support The Céilie team as Bartender, Floor Staff, Cashier, or Food Prep. A punctual and dependable team player committed to maintaining the highest standards of hygiene, safety, and customer service in a fast-paced pub environment.",
  certifications: [
    { name: "Smart Serve Certificate", validity: "2025-2030" },
    { name: "Food Safety Certification", validity: "2025-2030" },
  ],
  skills: [
    { 
      title: "Food & Bev Service", 
      skills: ["Smart Serve Certified", "Food Safety & Handling", "POS & Cash Handling", "Food Preparation"]
    },
    { 
      title: "Sanitation", 
      skills: ["Sanitization Procedures", "Kitchen Equipment Cleaning", "General Cleaning"]
    },
    { 
      title: "Personal Suitability", 
      skills: ["Dependable & Flexible", "Punctual", "Organized", "Team Player", "Strong Time Management"]
    }
  ],
  availability: [
    { day: "Mon & Tue", time: "Full Day" },
    { day: "Wed", time: "Until 5 PM" },
    { day: "Thu & Fri", time: "3 PM - 9 PM" },
  ],
  experience: [
    {
      role: "Cashier",
      company: "Singh Sons",
      location: "Nabha, Punjab",
      period: "2023 – 2024",
      description: [
        "Operated Point-of-Sale (POS) system to accurately process customer orders.",
        "Handled all cash, credit, and debit transactions efficiently and securely.",
        "Maintained a clean and organized front-counter and customer service area.",
        "Addressed customer inquiries and resolved any issues with orders promptly."
      ]
    },
    {
      role: "Janitor",
      company: "LIC Agent Office",
      location: "Nabha, Punjab",
      period: "2022 – 2023",
      description: [
        "Maintained a high standard of cleanliness and sanitation for a professional office.",
        "Ensured kitchen/breakroom areas were thoroughly cleaned, sanitized, and restocked.",
        "Responsible for washing food prep surfaces, worktables, and appliances.",
        "Managed all trash and recycling removal and sanitation of receptacles."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Business Administration",
      institution: "Trent University",
      location: "Peterborough, ON",
      period: "2025 – Present"
    },
    {
      degree: "Secondary (High) School Graduation Certificate",
      institution: "Dayanand Public School",
      location: "Nabha, Punjab",
      period: "Graduated March 2023"
    }
  ]
};
