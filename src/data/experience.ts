export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  type: string;
  responsibilities: string[];
  color: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Tech Startup (Remote)",
    role: "Full Stack Developer",
    duration: "Jan 2025 — Present",
    type: "Full-time",
    responsibilities: [
      "Architected and built a full-featured POS system using Next.js 14 and Supabase serving 500+ daily active users",
      "Improved page load performance by 60% through lazy loading and code splitting",
      "Implemented real-time inventory tracking with Supabase Realtime subscriptions",
      "Led code reviews and mentored 2 junior developers",
    ],
    color: "#38bdf8",
  },
  {
    id: 2,
    company: "Freelance / Independent",
    role: "Software Engineer",
    duration: "Jun 2024 — Dec 2024",
    type: "Freelance",
    responsibilities: [
      "Developed 5+ client web applications with React and Node.js",
      "Built RESTful APIs and deployed them on Vercel with zero-downtime CI/CD",
      "Designed and maintained PostgreSQL and MongoDB databases",
      "Delivered projects on time with an average client satisfaction score of 4.9/5",
    ],
    color: "#818cf8",
  },
  {
    id: 3,
    company: "University Project Lab",
    role: "Backend Developer Intern",
    duration: "Feb 2024 — May 2024",
    type: "Internship",
    responsibilities: [
      "Contributed to a research data pipeline processing 100K+ fashion product records",
      "Built Python ETL scripts with Pandas for data transformation and loading",
      "Integrated Google Sheets API for real-time data reporting dashboards",
      "Wrote comprehensive unit tests achieving 85% code coverage",
    ],
    color: "#06b6d4",
  },
];
