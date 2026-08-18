"use client";

import { motion } from "framer-motion";
import { HiAcademicCap, HiSparkles, HiUser } from "react-icons/hi2";
import { education, stats, interests } from "@/data/about";
import SectionHeading from "./SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="section">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeading
          eyebrow="About Me"
          title="Who I"
          highlight="Am"
          subtitle="A quick look at my background, education, and what drives me"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "2rem",
            alignItems: "stretch",
          }}
          className="about-grid"
        >
          {/* Left: Bio */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="about-card"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  background: "var(--accent-soft)",
                  border: "1px solid var(--accent-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                  fontSize: "1.3rem",
                }}
              >
                <HiUser />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                A bit about me
              </h3>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                color: "var(--text-secondary)",
                fontSize: "0.98rem",
                lineHeight: 1.8,
              }}
            >
              <p>
                I&apos;m a Computer Science graduate from{" "}
                <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                  Universitas Sumatera Utara
                </span>{" "}
                with a passion for building software that is both reliable and
                delightful to use. My journey spans mobile development,
                backend engineering, and quality assurance.
              </p>
              <p>
                I&apos;ve had the opportunity to work on real-world projects —
                from an{" "}
                <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                  AI-powered chatbot at BPJS Ketenagakerjaan
                </span>{" "}
                to a{" "}
                <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                  recommendation app at Bangkit Academy
                </span>{" "}
                where I graduated with Distinction (Top 10%).
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open source, or designing
                side projects that solve everyday problems.
              </p>
            </div>

            {/* Interests */}
            <div style={{ marginTop: "1.5rem" }}>
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "0.75rem",
                }}
              >
                What I&apos;m into
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {interests.map((interest) => (
                  <span key={interest} className="about-tag">
                    <HiSparkles style={{ color: "var(--accent)", flexShrink: 0 }} />
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Education */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="about-card"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  background: "var(--accent-soft)",
                  border: "1px solid var(--accent-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-2)",
                  fontSize: "1.3rem",
                }}
              >
                <HiAcademicCap />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                Education
              </h3>
            </div>

            {education.map((edu) => (
              <div
                key={edu.id}
                style={{
                  position: "relative",
                  padding: "1.25rem",
                  borderRadius: "14px",
                  background: "rgba(56, 189, 248, 0.05)",
                  border: "1px solid var(--border-color)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${edu.color}, transparent)`,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                    marginBottom: "0.5rem",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                    }}
                  >
                    {edu.school}
                  </h4>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: edu.color,
                      background: `${edu.color}1a`,
                      border: `1px solid ${edu.color}44`,
                      padding: "3px 10px",
                      borderRadius: "100px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {edu.duration}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: edu.color,
                    marginBottom: "0.25rem",
                  }}
                >
                  {edu.degree}
                </p>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {edu.field}
                </p>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {edu.description}
                </p>
              </div>
            ))}

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "0.75rem",
                marginTop: "auto",
                paddingTop: "1.5rem",
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
