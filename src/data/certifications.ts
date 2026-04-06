export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  logo?: string;
  color: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "March 2024",
    credentialUrl: "https://aws.amazon.com/certification",
    color: "#FF9900",
  },
  {
    id: 2,
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    date: "January 2024",
    credentialUrl: "https://coursera.org",
    color: "#0866FF",
  },
  {
    id: 3,
    title: "Google IT Automation with Python",
    issuer: "Google (Coursera)",
    date: "November 2023",
    credentialUrl: "https://coursera.org",
    color: "#4285F4",
  },
  {
    id: 4,
    title: "HackerRank Problem Solving (Advanced)",
    issuer: "HackerRank",
    date: "September 2023",
    credentialUrl: "https://www.hackerrank.com",
    color: "#00EA64",
  },
  {
    id: 5,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "August 2023",
    credentialUrl: "https://freecodecamp.org",
    color: "#0A0A23",
  },
  {
    id: 6,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "July 2023",
    credentialUrl: "https://freecodecamp.org",
    color: "#F7DF1E",
  },
];
