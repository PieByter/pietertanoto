"use client";

import { motion } from "framer-motion";
import { getExperienceDuration } from "@/data/experience";
import { useMounted } from "@/lib/useMounted";

const STACK = [
  "Java",
  "Spring Boot",
  "SvelteKit",
  "TypeScript",
  "PostgreSQL",
  "Jira",
  "Bitbucket",
  "DBeaver",
  "Postman",
  "Swagger",
];

export default function Currently() {
  const mounted = useMounted();
  const currentRole = getExperienceDuration("2026-05", null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="currently-card"
    >
      <div className="currently-header">
        <span className="currently-pulse" />
        Currently
      </div>
      <div className="currently-role">
        Backend Developer <span className="currently-at">@</span> Murni Teguh
      </div>
      <div className="currently-location">
        Medan Head Office · {currentRole.period}
        {mounted ? ` · ${currentRole.monthsLabel}` : ""}
      </div>
      <div className="currently-stack">
        {STACK.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
