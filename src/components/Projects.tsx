"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { projects } from "@/data/projects";

const INITIAL_SHOW = 6;

// Get unique tag texts and create icon map
const allTagObjects = Array.from(
  new Map(
    projects
      .flatMap((p) => p.tags)
      .map((t) => [t.text, t])
  ).values()
);
const allTags = ["All", ...allTagObjects.map((t) => t.text)];

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = activeTag === "All"
    ? projects
    : projects.filter((p) => p.tags.some((tag) => tag.text === activeTag));

  const displayed = showAll ? filtered : filtered.slice(0, INITIAL_SHOW);

  // Reset showAll when filter changes
  const handleTagChange = (tag: string) => {
    setActiveTag(tag);
    setShowAll(false);
  };

  return (
    <section id="projects" className="section">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem" }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">Things I&apos;ve built and shipped</p>

          {/* Filter Tags */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            {allTags.slice(0, 10).map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagChange(tag)}
                style={{
                  padding: "6px 16px",
                  borderRadius: "100px",
                  border: "1px solid",
                  borderColor: activeTag === tag ? "#38bdf8" : "var(--border-color)",
                  background: activeTag === tag ? "rgba(56, 189, 248, 0.15)" : "transparent",
                  color: activeTag === tag ? "#38bdf8" : "var(--text-muted)",
                  fontSize: "0.85rem",
                  fontWeight: activeTag === tag ? 600 : 400,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <AnimatePresence>
            {displayed.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.06,
                  ease: "easeOut",
                }}
                className="card"
                style={{ overflow: "hidden" }}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    height: "180px",
                    background: "linear-gradient(135deg, #0a192f 0%, #1e3a5f 100%)",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "3rem",
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      opacity: 0.7,
                    }}
                  >
                    {project.title.charAt(0)}
                  </div>

                  {project.featured && (
                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                        color: "white",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        padding: "3px 10px",
                        borderRadius: "100px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Featured
                    </div>
                  )}

                  {/* Bottom gradient */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "60px",
                      background: "linear-gradient(to top, var(--bg-card), transparent)",
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "1.5rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "var(--text-primary)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      marginBottom: "1.2rem",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.2rem" }}>
                    {project.tags.map((tag) => {
                      // Get icon component from react-icons/si or use emoji fallback
                      const getIcon = (iconName: string) => {
                        // Check if it's an emoji (starts with emoji characters)
                        if (/^[\u{1F300}-\u{1F9FF}]|^[\u{2600}-\u{27BF}]/u.test(iconName)) {
                          return iconName;
                        }
                        // Try to get from SiIcons
                        const IconComponent = (SiIcons as Record<string, React.ComponentType>)[iconName];
                        return IconComponent ? (
                          <div style={{ fontSize: "0.85rem", display: "flex", alignItems: "center" }}>
                            <IconComponent />
                          </div>
                        ) : (
                          "◆"
                        );
                      };

                      return (
                        <span
                          key={tag.text}
                          style={{
                            fontSize: "0.75rem",
                            padding: "4px 10px",
                            borderRadius: "100px",
                            background: "rgba(56, 189, 248, 0.08)",
                            border: "1px solid rgba(56, 189, 248, 0.15)",
                            color: "#38bdf8",
                            fontWeight: 500,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <span style={{ display: "inline-flex", alignItems: "center" }}>
                            {getIcon(tag.icon)}
                          </span>
                          {tag.text}
                        </span>
                      );
                    })}
                  </div>

                  {/* Links */}
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#38bdf8")}
                        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "0.85rem",
                          color: "#38bdf8",
                          textDecoration: "none",
                          fontWeight: 500,
                        }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Less */}
        {filtered.length > INITIAL_SHOW && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginTop: "2.5rem" }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline"
              style={{ minWidth: "200px", justifyContent: "center" }}
            >
              {showAll
                ? `Show Less ↑`
                : `View All ${filtered.length} Projects ↓`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
