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
    title: 'Structured Work Attachment and Research Programme',
    description: 'Visited NCCS, where I observed wet lab work, learned about proton therapy through computer imaging, and attended an analytical sciences meeting about the local recurrence of patients cancer, helping me learn more about cancer treatment and research, connect with clinicians and researchers and gain a deeper understanding of the interdisciplinary nature of science research. ',
    imageUrl: "/SWRAP.jpeg",
    imageHint: 'website design',
    tags: [],
    links: [
    ],
  },
  {
    id: 'proj2',
    title: 'Secondary 4 Vice Chairperson',
    description: 'I played a key role in supporting class management by helping to lead and facilitate discussions, coordinating group activities, and ensuring tasks were carried out efficiently. I also served as a bridge between teachers and classmates, promoting clear communication and contributing to a positive, collaborative classroom environment.',
    imageUrl: "/Screenshot 2025-06-22 at 10.10.36 PM.png",
    imageHint: 'application interface',
    tags: [],
    links: [
    ],
  },
  {
    id: 'proj3',
    title: 'Advanced Ethics talk by Dr Tan Yann Hong',
    description: 'I attended an advanced bioethics talk that provided deeper insights into the complex ethical issues surrounding biotechnology research and industry. The session explored a range of topics, including the ethical implications of genetic modification, the conduct and regulation of clinical trials, data privacy, and the responsible use of emerging technologies. It also highlighted real-world dilemmas faced by researchers and industry professionals, encouraging critical thinking and reflection on how ethical principles are applied in practice. ',
    imageUrl: "/360_F_557945208_ee1VFo8QxNFOJzZEjbR1gq52lOr1bUwZ.jpg",
    imageHint: 'code abstract',
    tags: [],
    links: [
    ],
  },
  {
    id: 'proj4',
    title: 'ARTCxSST Camp',
    description: 'I designed a prototype for a sustainable transportation solution aimed at reducing reliance on individual cars. My design promoted alternative modes of transport like walking, cycling, and public transit while ensuring accessibility for all community members, including the elderly and disabled. The project focused on addressing traffic congestion and air pollution to support environmental sustainability and improve urban mobility. ',
    imageUrl: "/WhatsApp Image 2025-06-22 at 21.15.04.jpeg",
    imageHint: 'code abstract',
    tags: [],
    links: [
    ],
  },
  {
    id: 'proj5',
    title: 'SUTDxSST Big D Camp',
    description: 'In response to the significant challenges caused by torrential storms, we were tasked to design and build a small robot capable of sweeping up debris of various shapes and sizes. The robot was programmed to collect and transport the debris back to a designated home base, aiming to assist in the cleanup and recovery efforts. ',
    imageUrl: "/photo_2025-02-12_15-42-20.jpg",
    imageHint: 'code abstract',
    tags: [],
    links: [
    ],
  },
  {
    id: 'proj6',
    title: 'Hao Ren Hao Shi Volunteer Work',
    description: 'By packing vegetables, placing groceries into the elderly’s bags, and personally assisting them to their homes, I gained firsthand experience of the quiet struggles many seniors face in their daily lives and witnessed their gratitude for these small acts of help. ',
    imageUrl: "/IMG_0767.jpeg",
    imageHint: 'code abstract',
    tags: [],
    links: [
    ],
  },
  {
    id: 'proj7',
    title: 'Relay For Life 2025 Volunteer Work',
    description: 'I was tasked with encouraging people to write heartfelt words of encouragement for individuals battling cancer, helping to create a supportive community spirit. I also had meaningful conversations with cancer patients, learning about their personal experiences, challenges, and resilience throughout their journeys. ',
    imageUrl: "/Singapore-Cancer-Society-TalkMed-Relay-for-Life-2025-Singapore.jpg",
    imageHint: 'code abstract',
    tags: [],
    links: [
    ],
  },
  {
    id: 'proj8',
    title: 'Jakarta OLE',
    description: 'As part of a cross-cultural exchange project, I worked with Indonesian students to test and compare air quality between similar locations in Singapore’s SST and Jakarta’s BBS. This experience deepened my passion for science and technology, enhanced my personal and interpersonal skills, and promoted cross-cultural understanding and global citizenship through collaboration and knowledge sharing. ',
    imageUrl: "/WhatsApp Image 2025-06-22 at 21.37.20.jpeg",
    imageHint: 'code abstract',
    tags: [],
    links: [
    ],
  },
  {
    id: 'proj9',
    title: 'Basketball CCA',
    description: 'I participated in the Basketball C Division and later advanced to the B Division in the National Schools Games (NSG), where I honed my basketball skills and developed strong teamwork and leadership abilities. Competing at this level challenged me to improve my physical fitness, strategic thinking, and resilience, while fostering a sense of camaraderie and sportsmanship with my teammates. ',
    imageUrl: "/IMG_0842.JPG",
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
