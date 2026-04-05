export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "TypeScript"],
  },
  {
    title: "Backend",
    skills: ["Django", "Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "Supabase", "MongoDB", "Redis"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "Vercel", "Render", "Linux", "Stripe"],
  },
];
