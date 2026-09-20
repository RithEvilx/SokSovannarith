import type { personalData } from "@/shared/types/ResumeDataType";

export const personal_curriculumn_vitae: personalData = {
  first_name: "Sok",
  last_name: "Sovannarith",
  address: "Kouk Khleang, Sen Sok, Phnom Penh, Cambodia.",
  telephone: "016 302 954",
  email: "soksovannarithx@gmail.com",
  about_me:
    "Frontend Developer | Computer Science Graduate (Royal University of Phnom Penh) Frontend developer with 1+ year experience in building responsive web apps using modern JavaScript frameworks.",
  public_link: [
    { name: "GitHub", url: "https://github.com/RithEvilx" },
    { name: "Linkedin", url: "https://linkedin.com/in/sok-sovannarith" },
    { name: "Telegram", url: "https://t.me/rithevil" },
  ],
  work_experience: [
    {
      company: "UDAYA Technology",
      position: "Frontend Developer",
      duration: "Mar 2025 - Present",
      responsibility: [
        "Led frontend development of a scalable hotel booking platform using React.js, TypeScript, and Chakra UI (v3)",
        "Integrated secure, real-time payment processing via the ABA Bank API",
        "Engineered internal management interfaces and dashboards for resource monitoring and role-based control",
        "Optimized application performance and caching using TanStack React Query",
      ],
    },
  ],
  education: [
    {
      school: "ROYAL UNIVERSITY OF PHNOM PENH",
      degree: "Bachelor's Degree in Computer Science",
      duration: "2020 - 2024",
    },
    {
      school: "BELTEI INTERNATIONAL SCHOOL",
      degree: "High School Diploma",
      duration: "2019 - 2020",
    },
  ],
  training: [
    // { school: "", degree: "", duration: "" }
  ],
  technical_skills: [
    { name: "React", value: 85 },
    { name: "Javascript", value: 85 },
    { name: "Typescript", value: 75 },
    { name: "GitHub", value: 75 },
    { name: "Java", value: 50 },
    { name: "SQL", value: 50 },
  ],
  soft_skils: [
    { name: "Problem solving", value: 80 },
    { name: "Critical thinking", value: 80 },
    { name: "Adaptability", value: 80 },
    { name: "Communication", value: 55 },
  ],
  languages: [
    { name: "Khmer", value: 100 },
    { name: "English", value: 60 },
  ],
  references: [],
  hobbies: [
    "Exploring emerging technologies",
    "Continuous learning and skill development",
    "Listening to music",
  ],
};
