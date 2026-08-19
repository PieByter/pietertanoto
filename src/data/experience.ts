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
    company: "Murni Teguh (Medan Head Office)",
    role: "Backend Developer",
    duration: "May 2026 - Present",
    type: "Full-time",
    responsibilities: [
      "Develop and maintain backend services using Java (Spring Boot) as the primary stack.",
      "Work as a full-stack developer, building frontend features with SvelteKit.",
      "Manage code and collaboration workflows using Jira and Bitbucket.",
      "Query and manage databases with DBeaver.",
      "Test and document APIs using Postman and Swagger.",
    ],
    color: "#10b981",
  },
  {
    id: 2,
    company: "Sumatra Tobacco Trading Company (STTC)",
    role: "Web Developer",
    duration: "Jul 2025 - Dec 2025",
    type: "Full-time",
    responsibilities: [
      "Developed and maintained web applications using Laravel (PHP) as the primary backend framework.",
      "Built interactive frontend features using TypeScript.",
      "Designed and managed relational databases and wrote efficient queries.",
      "Collaborated with the team using version control and agile workflows.",
    ],
    color: "#f59e0b",
  },
  {
    id: 3,
    company: "BPJS Ketenagakerjaan",
    role: "IT Support Internship (AI Developer)",
    duration: "Sep 2024 - Dec 2024",
    type: "Internship",
    responsibilities: [
      "Built and integrated an AI-powered chatbot to automate customer service workflows.",
      "Applied NLP techniques to improve intent detection and user query understanding.",
      "Connected chatbot features with internal systems and APIs for seamless operations.",
      "Performed testing, debugging, and iterative optimization based on user interaction data.",
      "Collaborated in Agile Scrum ceremonies and delivered technical documentation for internal adoption.",
    ],
    color: "#38bdf8",
  },
  {
    id: 4,
    company: "Bangkit Academy 2024 Batch 1",
    role: "Android Mobile Developer (Capstone: Auxilium)",
    duration: "Jan 2024 — Jun 2024",
    type: "Remote",
    responsibilities: [
      "Worked as an Android Developer using Kotlin and Android Studio.",
      "Graduated with Distinction (Top 10% of the Mobile Development learning path).",
      "Built the Auxilium Android application and prepared releases for review and internal distribution.",
      "Integrated Room for local data storage and Retrofit for API communication.",
      "Designed and prototyped mobile UI/UX in Figma to improve user experience.",
      "Collaborated with 3 Machine Learning engineers and 2 Cloud Computing specialists in a cross-functional capstone team.",
      "Achieved Top 50 Teams in the Best Product Track during the capstone project.",
    ],
    color: "#818cf8",
  },
  // {
  //   id: 3,
  //   company: "University Project Lab",
  //   role: "Backend Developer Intern",
  //   duration: "Feb 2024 — May 2024",
  //   type: "Internship",
  //   responsibilities: [
  //     "Contributed to a research data pipeline processing 100K+ fashion product records",
  //     "Built Python ETL scripts with Pandas for data transformation and loading",
  //     "Integrated Google Sheets API for real-time data reporting dashboards",
  //     "Wrote comprehensive unit tests achieving 85% code coverage",
  //   ],
  //   color: "#06b6d4",
  // },
  //   {
  //   id: 4,
  //   company: "University Project Lab",
  //   role: "Backend Developer Intern",
  //   duration: "Feb 2024 — May 2024",
  //   type: "Internship",
  //   responsibilities: [
  //     "Contributed to a research data pipeline processing 100K+ fashion product records",
  //     "Built Python ETL scripts with Pandas for data transformation and loading",
  //     "Integrated Google Sheets API for real-time data reporting dashboards",
  //     "Wrote comprehensive unit tests achieving 85% code coverage",
  //   ],
  //   color: "#06b6d4",
  // },
];
