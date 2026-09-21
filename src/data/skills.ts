export interface Skill {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Tools";
}

// TODO: edit — add, remove, or rename skills to match your stack.
export const skills: Skill[] = [
  { id: "typescript", name: "TypeScript", category: "Frontend" },
  { id: "react", name: "React", category: "Frontend" },
  { id: "nextjs", name: "Next.js", category: "Frontend" },
  { id: "tailwind", name: "Tailwind CSS", category: "Frontend" },
  { id: "node", name: "Node.js", category: "Backend" },
  { id: "postgres", name: "PostgreSQL", category: "Backend" },
  { id: "figma", name: "Figma", category: "Tools" },
  { id: "git", name: "Git", category: "Tools" },
];
