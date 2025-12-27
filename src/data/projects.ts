export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Decode Student Well-Being : Menemukan Pola Kesejahteraan Mahasiswa Dengan Data Mining",
    description:
      "",
    image: "/projects/dev-union.png",
    tech: ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma"],
    github: "https://github.com/username/dev-union",
    demo: "https://dev-union.vercel.app",
  },
  {
    title: "Analisis Sentimen dan Aspek Opini Publik terhadap Aplikasi Digital Impor dan Lokal sebagai Upaya Mendukung Kemandirian Ekonomi Digital Indonesia",
    description:
      "",
    image: "/projects/newsnugget.png",
    tech: ["Next.js", "PostgreSQL", "Tailwind", "Prisma", "HuggingFace AI"],
    github: "https://github.com/username/newsnugget",
    demo: "https://newsnugget.vercel.app",
  },
  {
    title: "PlantVeillance",
    description:
      "IoT + AI system for plant monitoring using sensors and real-time dashboards.",
    image: "/projects/plantveillance.png",
    tech: ["Python", "IoT", "FastAPI", "ML"],
    github: "https://github.com/username/plantveillance",
  },
];
