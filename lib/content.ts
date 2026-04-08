import type { Project, Service, Skill } from "@/lib/queries";

export const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "Spider+ (Data Pipeline System)",
    description: "A structured pipeline for collecting and cleaning data.",
    tech_stack: "Python, BeautifulSoup, SQL",
    image_url: null,
    github_url: null,
    live_url: null,
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    title: "Jarvis (AI Assistant Prototype)",
    description: "An assistant prototype focused on task support and natural interactions.",
    tech_stack: "Python, APIs, Automation",
    image_url: null,
    github_url: null,
    live_url: null,
    created_at: new Date().toISOString()
  },
  {
    id: 3,
    title: "EduCore SMS (School Management System)",
    description: "Student records, communication, and operations in one management platform.",
    tech_stack: "Django, PostgreSQL",
    image_url: null,
    github_url: null,
    live_url: null,
    created_at: new Date().toISOString()
  },
  {
    id: 4,
    title: "SwiftShop (E-commerce Platform)",
    description: "A practical e-commerce experience with catalog, cart, and order flow.",
    tech_stack: "JavaScript, REST APIs, SQL",
    image_url: null,
    github_url: null,
    live_url: null,
    created_at: new Date().toISOString()
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    description: "A clean personal portfolio to showcase projects, skills, and services.",
    tech_stack: "Next.js, Tailwind CSS, Supabase",
    image_url: null,
    github_url: null,
    live_url: null,
    created_at: new Date().toISOString()
  },
  {
    id: 6,
    title: "Mini Project (Optional)",
    description: "A flexible sandbox for experimenting with new ideas and learning goals.",
    tech_stack: "Varies by iteration",
    image_url: null,
    github_url: null,
    live_url: null,
    created_at: new Date().toISOString()
  }
];

export const fallbackSkills: Skill[] = [
  { id: 1, name: "Python", category: "language", level: 4 },
  { id: 2, name: "JavaScript", category: "language", level: 3 },
  { id: 3, name: "SQL", category: "language", level: 3 },
  { id: 4, name: "Django", category: "tool", level: 4 },
  { id: 5, name: "Git & GitHub", category: "tool", level: 3 },
  { id: 6, name: "REST APIs", category: "tool", level: 3 },
  { id: 7, name: "Problem Solving", category: "concept", level: 4 },
  { id: 8, name: "Backend Logic", category: "concept", level: 4 },
  { id: 9, name: "Database Design", category: "concept", level: 3 },
  { id: 10, name: "System Design (Basic)", category: "concept", level: 3 }
];

export const fallbackServices: Service[] = [
  {
    id: 1,
    title: "Web Application Development",
    description:
      "Building responsive, functional web apps with clean structure and scalable backends.",
    icon: "Code"
  },
  {
    id: 2,
    title: "Data Extraction & Structuring",
    description:
      "Collecting and structuring data from websites for research, business, or learning purposes.",
    icon: "Database"
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "Designing APIs, managing databases, and implementing server-side logic.",
    icon: "Server"
  },
  {
    id: 4,
    title: "Automation Tools",
    description:
      "Creating scripts and systems that automate repetitive tasks and improve efficiency.",
    icon: "Zap"
  }
];
