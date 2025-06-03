import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  logoUrl?: string; 
}

export interface Education {
  id: string;
  degree: string;
  major?: string;
  institution: string;
  period: string;
  logoUrl?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuingOrganization: string;
  date: string;
  logoUrl?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  Icon?: LucideIcon;
}
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  tags: string[];
  links: ProjectLink[];
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'Software Engineering Intern',
    company: 'Tech Solutions Inc.',
    period: 'Summer 2023',
    description: [
      'Developed and maintained features for a web application using React and Node.js.',
      'Collaborated with a team of 5 engineers in an agile environment.',
      'Contributed to UI/UX design improvements, resulting in a 10% increase in user engagement.',
    ],
    logoUrl: 'https://placehold.co/40x40.png',
  },
  {
    id: 'exp2',
    role: 'Teaching Assistant - Intro to Programming',
    company: 'University of Advanced Studies',
    period: '2022 - 2023',
    description: [
      'Assisted professor in teaching Python programming concepts to over 100 students.',
      'Graded assignments and provided constructive feedback.',
      'Hosted weekly lab sessions and office hours.',
    ],
    logoUrl: 'https://placehold.co/40x40.png',
  },
];

export const education: Education[] = [
  {
    id: 'edu1',
    degree: 'Master of Science',
    major: 'Computer Science',
    institution: 'University of Advanced Studies',
    period: '2022 - 2024',
    logoUrl: 'https://placehold.co/40x40.png',
  },
  {
    id: 'edu2',
    degree: 'Bachelor of Science',
    major: 'Software Engineering',
    institution: 'Tech State University',
    period: '2018 - 2022',
    logoUrl: 'https://placehold.co/40x40.png',
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert1',
    name: 'Certified Cloud Practitioner',
    issuingOrganization: 'Cloud Services Corp.',
    date: 'Issued May 2023',
    logoUrl: 'https://placehold.co/40x40.png',
  },
  {
    id: 'cert2',
    name: 'Agile Foundations Professional',
    issuingOrganization: 'Agile Institute',
    date: 'Issued Jan 2022',
    logoUrl: 'https://placehold.co/40x40.png',
  },
];

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Next.js and Tailwind CSS to showcase my skills and projects. Features a responsive design and smooth animations.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'website design',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Live Demo', href: '#' },
    ],
  },
  {
    id: 'proj2',
    title: 'Task Management App',
    description: 'A full-stack task management application allowing users to create, organize, and track their tasks. Includes user authentication and real-time updates.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'application interface',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase Auth'],
    links: [
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    id: 'proj3',
    title: 'E-commerce Platform API',
    description: 'A RESTful API for an e-commerce platform, supporting product management, user accounts, orders, and payments. Built with Python and Django Rest Framework.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'code abstract',
    tags: ['Python', 'Django', 'REST API', 'PostgreSQL'],
    links: [
      { label: 'GitHub', href: '#' },
    ],
  },
];

export const studentInfo = {
  name: "Isaac Tan Yu Kai",
  title: "Aspiring Software Developer",
  bio: "A passionate and driven student with a strong foundation in software development, eager to contribute to innovative projects and continuously learn new technologies. Currently seeking challenging opportunities to apply my skills in a professional setting."
};
