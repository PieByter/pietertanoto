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
    title: "Award Certificate 1",
    event: "Event Name",
    date: "2024",
    image: "/images/awards/award-1.jpg",
    color: "#F59E0B",
  },
  {
    id: 2,
    title: "Award Certificate 2",
    event: "Event Name",
    date: "2024",
    image: "/images/awards/award-2.jpg",
    color: "#8B5CF6",
  },
  {
    id: 3,
    title: "Award Certificate 3",
    event: "Event Name",
    date: "2025",
    image: "/images/awards/award-3.jpg",
    color: "#10B981",
  },
    {
    id: 4,
    title: "Award Certificate 1",
    event: "Event Name",
    date: "2024",
    image: "/images/awards/award-1.jpg",
    color: "#F59E0B",
  },
  {
    id: 5,
    title: "Award Certificate 2",
    event: "Event Name",
    date: "2024",
    image: "/images/awards/award-2.jpg",
    color: "#8B5CF6",
  },
  {
    id: 6,
    title: "Award Certificate 3",
    event: "Event Name",
    date: "2025",
    image: "/images/awards/award-3.jpg",
    color: "#10B981",
  },
];
