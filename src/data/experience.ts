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
    id: 2,
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
