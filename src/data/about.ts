export interface Education {
    id: number;
    school: string;
    degree: string;
    field: string;
    duration: string;
    description: string;
    color: string;
}

export interface Stat {
    value: string;
    label: string;
}

export const education: Education[] = [
    {
        id: 1,
        school: "Universitas Sumatera Utara",
        degree: "Bachelor of Computer Science (S.Kom)",
        field: "Computer Science / Informatics",
        duration: "2020 — 2024",
        description:
            "Graduated with a focus on software engineering, data structures, and system design. Built a strong foundation in algorithms, databases, and full-stack development through coursework and hands-on projects.",
        color: "#38bdf8",
    },
];

export const stats: Stat[] = [
    { value: "2+", label: "Years Experience" },
    { value: "9+", label: "Projects Built" },
    { value: "24+", label: "Certifications" },
    { value: "3", label: "Awards Won" },
];

export const interests = [
    "Mobile Development",
    "Backend Engineering",
    "AI & Machine Learning",
    "UI/UX Design",
    "Open Source",
    "Automation",
];
