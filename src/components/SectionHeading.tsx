"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="section-heading"
      style={{ textAlign: align }}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      <p className="section-subtitle">{subtitle}</p>
    </motion.div>
  );
}
