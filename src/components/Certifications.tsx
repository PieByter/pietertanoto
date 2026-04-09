"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { HiBadgeCheck } from "react-icons/hi";
import { certifications } from "@/data/certifications";

const INITIAL_SHOW = 6;

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? certifications : certifications.slice(0, INITIAL_SHOW);

  return (
    <section id="certifications" className="section">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem", textAlign: "center" }}
        >
          <h2 className="section-title">
            Certifications <span className="gradient-text">& Skills</span>
          </h2>
          <p className="section-subtitle">Credentials that validate my expertise</p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <AnimatePresence>
            {displayed.map((cert, i) => (
              <motion.a
                key={cert.id}
                layout
                href={cert.credentialUrl || "#"}
                target={cert.credentialUrl ? "_blank" : undefined}
                rel={cert.credentialUrl ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i < INITIAL_SHOW ? i * 0.07 : 0 }}
                className="card"
                style={{
                  overflow: "hidden",
                  position: "relative",
                  display: "block",
                  textDecoration: "none",
                  cursor: cert.credentialUrl ? "pointer" : "default",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (!cert.credentialUrl) return;
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-4px)";
                  el.style.borderColor = cert.color + "88";
                }}
                onMouseLeave={(e) => {
                  if (!cert.credentialUrl) return;
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "var(--border-color)";
                }}
              >
                {/* Color accent top bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${cert.color}, transparent)`,
                  }}
                />

                {/* Image / Badge area */}
                <div
                  style={{
                    height: "130px",
                    background: `linear-gradient(135deg, ${cert.color}12 0%, ${cert.color}05 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "1px solid var(--border-color)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Decorative background glow */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `radial-gradient(circle at center, ${cert.color}20 0%, transparent 70%)`,
                    }}
                  />

                  {/* Badge image or icon fallback */}
                  {cert.logo ? (
                    <Image
                      src={cert.logo}
                      alt={cert.issuer}
                      width={64}
                      height={64}
                      style={{ objectFit: "contain", position: "relative", zIndex: 1 }}
                    />
                  ) : (
                    <div
                      style={{
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          background: `${cert.color}22`,
                          border: `2px solid ${cert.color}55`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.9rem",
                          color: cert.color,
                        }}
                      >
                        <HiBadgeCheck />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: "1.25rem 1.5rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      lineHeight: 1.4,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {cert.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: cert.color, fontWeight: 600, marginBottom: "0.75rem" }}>
                    {cert.issuer}
                  </p>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--border-color)",
                      padding: "3px 10px",
                      borderRadius: "6px",
                    }}
                  >
                    {cert.date}
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Less */}
        {certifications.length > INITIAL_SHOW && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginTop: "2.5rem" }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline"
              style={{ minWidth: "180px", justifyContent: "center" }}
            >
              {showAll
                ? `Show Less ↑`
                : `View All ${certifications.length} Certifications ↓`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
