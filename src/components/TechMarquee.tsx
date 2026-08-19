"use client";

const TECH = [
  "Java",
  "Spring Boot",
  "Laravel",
  "PHP",
  "TypeScript",
  "SvelteKit",
  "Next.js",
  "React",
  "Kotlin",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Git",
  "Jira",
  "Bitbucket",
  "DBeaver",
  "Postman",
  "Swagger",
];

export default function TechMarquee() {
  return (
    <div className="tech-marquee" aria-hidden>
      <div className="tech-marquee-track">
        {[...TECH, ...TECH].map((t, i) => (
          <span key={i} className="tech-marquee-item">
            {t}
            <span className="tech-marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
