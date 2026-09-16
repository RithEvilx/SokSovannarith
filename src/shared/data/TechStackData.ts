import type { TechStackDataType } from "@/shared/types/TechStackDataType";

export const TechStackData: TechStackDataType[] = [
  {
    category: "Frontend",
    // Prioritizing the React/TS ecosystem for a Frontend-focused role
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "TanStack Query",
      "HTML",
      "CSS",
      "Vite",
      "Chakra UI",
    ],
  },
  {
    category: "Backend & Database",
    // Showing you can handle the full data lifecycle
    skills: ["Java (familiar)", "SQL (familiar)"],
  },
  {
    category: "Tools",
    // Essential workflow tools
    skills: ["Git", "GitHub", "Postman", "VS Code", "Android Studio"],
  },
  {
    category: "Design & UX", // Or your chosen 4th category
    skills: [
      "Figma (familiar)",
      "Responsive Design",
      "Framer Motion (familiar)",
      "Accessibility",
    ],
  },
  {
    category: "Mobile & Cross-Platform",
    skills: ["Flutter (familiar)", "Kotlin (familiar)"],
  },
];
