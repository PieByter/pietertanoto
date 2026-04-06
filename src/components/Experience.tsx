"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem", textAlign: "center" }}
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">My professional journey so far</p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }} className="timeline-wrapper">
          {/* Center line */}
          <div className="timeline-line" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  marginBottom: "3rem",
                  position: "relative",
                }}
                className="timeline-item"
              >
                {/* Card */}
                <div
                  className="card"
                  style={{
                    width: "calc(50% - 2.5rem)",
                    padding: "1.75rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = exp.color + "66";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${exp.color}22`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 1,
                      right: 1,
                      height: "3px",
                      borderRadius: "14px 14px 0 0",
                      background: `linear-gradient(90deg, ${exp.color}, transparent)`,
                    }}
                  />

                  {/* Type badge */}
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: "100px",
                      background: `${exp.color}1a`,
                      border: `1px solid ${exp.color}44`,
                      color: exp.color,
                      marginBottom: "0.75rem",
                      display: "inline-block",
                    }}
                  >
                    {exp.type}
                  </span>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {exp.role}
                  </h3>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontWeight: 600, color: exp.color, fontSize: "0.95rem" }}>
                      {exp.company}
                    </span>
                  </div>

                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
                    {exp.duration}
                  </p>

                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {exp.responsibilities.map((resp, j) => (
                      <li
                        key={j}
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.6,
                          display: "flex",
                          gap: "0.5rem",
                        }}
                      >
                        <span style={{ color: exp.color, flexShrink: 0, marginTop: "2px" }}>▸</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Center dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "1.75rem",
                    transform: "translateX(-50%)",
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: exp.color,
                    border: "3px solid var(--bg-primary)",
                    boxShadow: `0 0 12px ${exp.color}88`,
                    zIndex: 1,
                  }}
                  className="timeline-dot"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-wrapper .timeline-item {
            justify-content: flex-end !important;
          }
          .timeline-wrapper .timeline-item > div.card {
            width: calc(100% - 3rem) !important;
          }
          .timeline-dot {
            left: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
