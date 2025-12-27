export type ExperienceItem = {
  type: "work" | "education" | "organization" | "award";
  org: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  logoText?: string;
  logo?: string; // <-- tambah ini
};

export const experience: ExperienceItem[] = [
  {
    type: "work",
    org: "Laboratory Teaching Assistant",
    role: "System Database I, Object Oriented Programming, and Website Developer",
    period: "February 2025 — December 2025",
    bullets: [
      "Completed role as Data Structure Lab Assistant (Feb — May 2025).",
      "Currently serving as Lab Assistant for Object-Oriented Programming (OOP) and Numerical Methods.",
      "Taught and guided 40+ students in each class session.",
    ],
    logoText: "UNPAD",
  },
  {
    type: "work",
    org: "Informatics Festival 2025",
    role: "Staff of Creative & Documentation",
    period: "August 2025 — Present",
    bullets: [
      "Contributed to visual content creation: Instagram feeds, posters, and promotional materials.",
      "Supported documentation workflow for event publications and deliverables.",
    ],
    logoText: "IF",
  },
  {
    type: "work",
    org: "Samsung Innovation Campus",
    role: "AI & IoT Engineer (Program Participant)",
    period: "February 2025 — May 2025",
    bullets: [
      "Participated in Samsung Innovation Campus program focusing on AI and IoT technologies.",
      "Developed skills in generative AI and IoT device integration.",
    ],
    logoText: "SIC",
  },

  // EDUCATION
  {
    type: "education",
    org: "Informatics Engineering",
    role: "Universitas Padjadjaran",
    period: "Aug 2023 — Aug 2027 (Expected)",
    bullets: ["Current GPA: 3.72/4.00"],
    logo: "/experience/unpad.png",
    logoText: "UNP",
  },
];
