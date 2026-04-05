export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  featured: boolean;
  status?: string;
}

export const projects: Project[] = [
  {
    title: "QuickKart",
    description: "Hyperlocal eCommerce platform managing thousands of daily orders.",
    status: "Under Production",
    tech: ["Django", "React", "PostgreSQL"],
    link: "https://fyproject-ta67.onrender.com",
    featured: true,
  },
  {
    title: "MedCare",
    description: "Healthcare web app for managing patient appointments and records.",
    status: "Under Production",
    tech: ["Next.js", "Tailwind", "Supabase"],
    link: "#",
    featured: true,
  },
  {
    title: "ToolWeb",
    description: "Multi-tool platform offering daily developer utilities out of the box.",
    status: "Under Development",
    tech: ["React", "Express", "Node.js"],
    link: "#",
    featured: true,
  },
  {
    title: "AI CodeAssist",
    description: "An AI concept generator for developer portfolios.",
    status: "Under Development",
    tech: ["OpenAI", "Next.js", "Framer Motion"],
    link: "#",
    featured: false,
  },
];