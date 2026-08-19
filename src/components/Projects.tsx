"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";

const INITIAL_SHOW = 6;

// Deterministic gradient pairs per project (based on id) for a rich thumbnail
const THUMB_GRADIENTS = [
  ["#0ea5e9", "#6366f1"],
  ["#06b6d4", "#3b82f6"],
  ["#8b5cf6", "#ec4899"],
  ["#10b981", "#0ea5e9"],
  ["#f59e0b", "#ef4444"],
  ["#6366f1", "#06b6d4"],
];

function getThumbGradient(id: number) {
  return THUMB_GRADIENTS[id % THUMB_GRADIENTS.length];
}

// Resolve a tag icon to a component (or emoji string)
function resolveTagIcon(iconName: string) {
  if (/^[\u{1F300}-\u{1F9FF}]|^[\u{2600}-\u{27BF}]/u.test(iconName)) {
    return iconName;
  }
  const IconComponent = (SiIcons as Record<string, React.ComponentType>)[iconName];
  return IconComponent || null;
}

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

  // Spotlight follows the cursor inside each card
  const handleSpotlight = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="projects" className="section">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured"
          highlight="Projects"
          subtitle="Things I've built and shipped"
        />

        {/* Filter Tags */}
        <div
          className="projects-filter-row"
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "2.5rem",
          }}
        >
          {allTags.slice(0, 10).map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className="chip"
              style={{
                borderColor: activeTag === tag ? "var(--accent)" : "var(--border-color)",
                background: activeTag === tag ? "var(--accent-soft)" : "transparent",
                color: activeTag === tag ? "var(--accent)" : "var(--text-muted)",
                fontWeight: activeTag === tag ? 600 : 400,
              }}
            >
              {tag}
            </button>
          ))}
        </div>

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
                style={{ overflow: "hidden", position: "relative" }}
                onMouseMove={handleSpotlight}
              >
                {/* Spotlight glow that follows the cursor */}
                <div className="card-spotlight" />

                {/* Thumbnail */}
                <div
                  style={{
                    height: "190px",
                    position: "relative",
                    zIndex: 1,
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `linear-gradient(135deg, ${getThumbGradient(project.id)[0]}22 0%, ${getThumbGradient(project.id)[1]}22 100%)`,
                  }}
                >
                  {/* Decorative blobs */}
                  <div
                    style={{
                      position: "absolute",
                      top: -40,
                      right: -30,
                      width: 180,
                      height: 180,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${getThumbGradient(project.id)[0]}40 0%, transparent 70%)`,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: -50,
                      left: -30,
                      width: 200,
                      height: 200,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${getThumbGradient(project.id)[1]}35 0%, transparent 70%)`,
                    }}
                  />

                  {/* Primary tag icon */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      width: 72,
                      height: 72,
                      borderRadius: "20px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      backdropFilter: "blur(8px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2.2rem",
                      color: "#fff",
                      boxShadow: `0 8px 30px ${getThumbGradient(project.id)[0]}55`,
                    }}
                  >
                    {(() => {
                      const firstTag = project.tags[0];
                      const icon = firstTag ? resolveTagIcon(firstTag.icon) : null;
                      if (typeof icon === "string") return icon;
                      if (icon) {
                        const IconComp = icon;
                        return <IconComp />;
                      }
                      return project.title.charAt(0);
                    })()}
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
                        zIndex: 2,
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
                <div style={{ padding: "1.5rem", position: "relative", zIndex: 1 }}>
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
                      const icon = resolveTagIcon(tag.icon);
                      return (
                        <span key={tag.text} className="chip" style={{ fontSize: "0.72rem", padding: "4px 10px" }}>
                          {typeof icon === "string" ? (
                            <span style={{ fontSize: "0.8rem" }}>{icon}</span>
                          ) : icon ? (
                            <span style={{ fontSize: "0.8rem", display: "inline-flex" }}>
                              {(() => {
                                const IconComp = icon;
                                return <IconComp />;
                              })()}
                            </span>
                          ) : (
                            <span style={{ fontSize: "0.8rem" }}>◆</span>
                          )}
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
                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
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
                          color: "var(--accent)",
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
