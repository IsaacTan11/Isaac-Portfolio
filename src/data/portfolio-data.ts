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
  { label: 'Projects', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#projects' },
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'Biotechnology Performance Task Project',
    company: 'School of Science and Technology',
    period: '2024',
    description: [
      '"Investigation of the Protein Content in Chicken Breast and Thigh" Lab Report.',
      'Performed experiments such as Bradford Assay, Spectrophotometer, etc.',
    ],
    logoUrl: 'https://schlah.com/logo/school-of-science-and-technology-singapore.jpg',
  },
  {
    id: 'exp2',
    role: 'SST NCCS Capstone Project',
    company: 'National Cancer Centre Singapore',
    period: '2024 - 2025',
    description: [
      'Visited NCCS and toured around clinics, Wet Labs and offices.',
      'Development of mobile application to predict NPC survival.',
      'Research on Radioresistance and locally recurrent NPC.',
      'Shadowed Dr Melvin Chua.',
    ],
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6GV0SI2hWhziJH5axpprpUrRER-aHWBangQ&s',
  },
];

export const education: Education[] = [
  {
    id: 'edu1',
    degree: 'Pei Tong Primary School',
    major: '',
    institution: '2016 - 2021',
    period: '',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHh390Gq2IWwECa3DpJ_YGdZTCsvF-QmBvQ&s',
  },
  {
    id: 'edu2',
    degree: 'School of Science and Technology',
    major: '',
    institution: '2022 - 2025',
    period: '',
    logoUrl: 'https://schlah.com/logo/school-of-science-and-technology-singapore.jpg',
  },
];

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Next.js and Tailwind CSS. Coded using TypeScript.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'website design',
    tags: [],
    links: [
    ],
  },
  {
    id: 'proj2',
    title: 'Task Management App',
    description: 'A full-stack task management application allowing users to create, organize, and track their tasks. Includes user authentication and real-time updates.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'application interface',
    tags: [],
    links: [
    ],
  },
  {
    id: 'proj3',
    title: 'E-commerce Platform API',
    description: 'A RESTful API for an e-commerce platform, supporting product management, user accounts, orders, and payments. Built with Python and Django Rest Framework.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'code abstract',
    tags: [],
    links: [
    ],
  },
];

export const studentInfo = {
  name: "Isaac Tan Yi Kai",
  title: "Aspiring Biomedical Scientist",
  bio: "A passionate and driven student with a strong foundation in Sciences, eager to contribute to innovative projects and continuously learn new skills. Currently seeking challenging opportunities to apply my skills in a professional setting."
};
