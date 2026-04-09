export interface Award {
  id: number;
  title: string;
  event: string;
  date: string;
  image: string; // path to the JPG in /public/images/awards/
  color: string;
}

// Add your award certificate images to /public/images/awards/
// Then update this array with the correct filenames.
// Example:
//   { id: 1, title: "Best Project Award", event: "Hackathon 2025", date: "Nov 2025", image: "/images/awards/hackathon-2025.jpg", color: "#F59E0B" },

export const awards: Award[] = [
  {
    id: 1,
    title: "Favorite Winner (4th Place)",
    event: "Fordigi BUMN Hackaton",
    date: "2023",
    image: "/images/awards/techy_trashker.jpeg",
    color: " #8B5CF6",
  },
  {
    id: 2,
    title: "Best Product Track Capstone Project (Top 50 Teams)",
    event: "Bangkit Academy 2024",
    date: "2024",
    image: "/images/awards/top_team.jpeg",
    color: "#91BCF4",
  },
  {
    id: 3,
    title: "Distinction Graduate Bangkit Academy 2024 Batch 1 (Top 10% of Mobile Development Learning Path)",
    event: "Bangkit Academy 2024 Capstone",
    date: "2024",
    image: "/images/awards/bangkit_distinction.jpeg",
    color: "#10B981",
  },
    {
    id: 4,
    title: "English for Business Communication Certificate",
    event: "The British Institute (TBI)",
    date: "2024",
    image: "/images/awards/tbi.jpeg",
    color: "#8B9199",
  },
    {
    id: 5,
    title: "IT Support Internship (AI Developer)",
    event: "BPJS Ketenagakerjaan",
    date: "2024",
    image: "/images/awards/internship.jpeg",
    color: "#F59E0B",
  },
  {
    id: 6,
    title: "TOEFL ITP",
    event: "Educational Testing Service (ETS)",
    date: "2026",
    image: "/images/awards/toefl_itp.jpg",
    color: "#06B6D4",
  },
];
