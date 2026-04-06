"use client";

import { motion } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiPython, SiFlutter, SiDart, SiTailwindcss, SiPostgresql,
  SiMongodb, SiSupabase, SiDocker, SiGit, SiVercel, SiFirebase,
  SiExpress, SiPandas, SiFigma, SiLinux,
} from "react-icons/si";
import { tools } from "@/data/toolbox";

const iconMap: Record<string, React.ComponentType<{ style?: React.CSSProperties }>> = {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiPython, SiFlutter, SiDart, SiTailwindcss, SiPostgresql,
  SiMongodb, SiSupabase, SiDocker, SiGit, SiVercel, SiFirebase,
  SiExpress, SiPandas, SiFigma, SiLinux,
};

const row1 = tools.slice(0, 10);
const row2 = tools.slice(10);

function ToolItem({ tool }: { tool: (typeof tools)[0] }) {
  const Icon = iconMap[tool.icon];
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        borderRadius: "12px",
        padding: "12px 20px",
        margin: "0 10px",
        whiteSpace: "nowrap",
        transition: "all 0.3s ease",
      }}
    >
      {Icon && <Icon style={{ fontSize: "1.4rem", color: tool.color, flexShrink: 0 }} />}
      <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--text-secondary)" }}>
        {tool.name}
      </span>
    </div>
  );
}

export default function Toolbox() {
  return (
    <section id="toolbox" className="section" style={{ overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", textAlign: "center", marginBottom: "3rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Toolbox</span>
          </h2>
          <p className="section-subtitle">Technologies & tools I work with every day</p>
        </motion.div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="marquee-container" style={{ marginBottom: "1rem" }}>
        <div className="marquee-left" style={{ display: "inline-flex", width: "max-content" }}>
          {[...row1, ...row1].map((tool, i) => (
            <ToolItem key={i} tool={tool} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-container">
        <div className="marquee-right" style={{ display: "inline-flex", width: "max-content" }}>
          {[...row2, ...row2].map((tool, i) => (
            <ToolItem key={i} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
