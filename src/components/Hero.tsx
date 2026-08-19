"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { HiArrowDown } from "react-icons/hi2";
import TypeWriter from "./TypeWriter";
import CountUp from "./CountUp";
import TechMarquee from "./TechMarquee";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Piebyter", label: "GitHub", color: "var(--accent)" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/pieter-tanoto", label: "LinkedIn", color: "#0A66C2" },
  { icon: FaWhatsapp, href: "https://wa.me/6287748215683", label: "WhatsApp", color: "#25D366" },
  { icon: FaYoutube, href: "https://youtube.com/@piebyter", label: "YouTube", color: "#FF0000" },
  { icon: FaInstagram, href: "https://instagram.com/pietertno", label: "Instagram", color: "#E1306C" },
  { icon: HiMail, href: "mailto:pietertanoto01@email.com", label: "Email", color: "var(--accent)" },
];

const heroStats = [
  { value: "2+", label: "Years Experience" },
  { value: "9+", label: "Projects" },
  { value: "24+", label: "Certifications" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const blockImageActions = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "transparent",
        padding: "120px 2rem 80px",
      }}
    >
      {/* Animated background blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(129, 140, 248, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          gap: "4rem",
        }}
        className="hero-grid"
      >
        {/* Left: Text Content */}
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--accent-soft)",
              border: "1px solid var(--accent-border)",
              borderRadius: "100px",
              padding: "6px 16px",
              fontSize: "0.85rem",
              color: "var(--accent)",
              marginBottom: "1.5rem",
              fontWeight: 500,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", display: "inline-block", animation: "pulse 2s infinite" }} />
            Available for opportunities
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "1rem",
              color: "var(--text-primary)",
            }}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Pieter Tanoto</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
              color: "var(--accent)",
              fontWeight: 600,
              marginBottom: "1.2rem",
              fontFamily: "var(--font-display)",
              minHeight: "1.6em",
            }}
          >
            <TypeWriter />
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              maxWidth: "560px",
              marginBottom: "2.5rem",
            }}
          >
            Computer Science graduate from Universitas Sumatera Utara focused
            on backend and mobile development. I design scalable systems with
            Kotlin and Java, build reliable Android apps, and embed testing
            early to deliver robust, high-performance software.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="hero-cta-row"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}
          >
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
              <HiArrowDown style={{ fontSize: "0.9rem" }} />
            </a>
            <a href="/resume.pdf" className="btn-outline" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={4.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="stat-card" style={{ padding: "0.8rem 1.2rem" }}>
                <div className="stat-value" style={{ fontSize: "1.4rem" }}>
                  <CountUp text={stat.value} />
                </div>
                <div className="stat-label" style={{ fontSize: "0.7rem" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="hero-social-row"
            style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
          >
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "10px",
                  background: "var(--icon-circle-bg)",
                  border: "1px solid var(--icon-circle-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: color,
                  fontSize: "1.2rem",
                  textDecoration: "none",
                  transition: "background 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--accent-soft)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--icon-circle-bg)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--icon-circle-border)";
                }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          style={{ flexShrink: 0 }}
          className="hero-img-wrap"
        >
          <div
            style={{
              position: "relative",
              width: 300,
              height: 300,
            }}
          >
            {/* Glow ring */}
            <div
              style={{
                position: "absolute",
                inset: -4,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                padding: 3,
                zIndex: 0,
              }}
            >
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "var(--bg-primary)" }} />
            </div>

            {/* Rotating accent ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: -12,
                borderRadius: "50%",
                border: "2px dashed rgba(56, 189, 248, 0.25)",
                zIndex: 0,
              }}
            />

            {/* Profile Image */}
            <div
              style={{
                position: "absolute",
                inset: 3,
                borderRadius: "50%",
                overflow: "hidden",
                zIndex: 1,
                background: "var(--profile-bg)",
              }}
              onContextMenu={blockImageActions}
              onDragStart={blockImageActions}
              onCopy={blockImageActions}
              onCut={blockImageActions}
              onPaste={blockImageActions}
            >
              <Image
                src="/images/profile.png"
                alt="Pieter Tanoto"
                fill
                sizes="(max-width: 768px) 220px, 300px"
                draggable={false}
                style={{ objectFit: "cover", userSelect: "none" }}
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
                onContextMenu={blockImageActions}
                onDragStart={blockImageActions}
                onCopy={blockImageActions}
              />
              {/* Fallback initials */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontSize: "3.5rem",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  zIndex: -1,
                  userSelect: "none",
                }}
              >
                PT
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: -16,
                right: -16,
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-border)",
                backdropFilter: "blur(10px)",
                borderRadius: "12px",
                padding: "10px 16px",
                zIndex: 2,
                whiteSpace: "nowrap",
              }}
            >
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Open to work</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--accent)" }}>💼 Hire Me</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "4.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          color: "var(--text-muted)",
          fontSize: "0.8rem",
        }}
      >
        <span>Scroll down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ color: "var(--accent)" }}
        >
          <HiArrowDown />
        </motion.div>
      </motion.div>

      {/* Tech marquee strip */}
      <TechMarquee />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-img-wrap {
            order: -1;
            display: flex;
            justify-content: center;
          }
          .hero-img-wrap > div {
            width: 220px !important;
            height: 220px !important;
          }
          .hero-grid > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-grid > div p {
            max-width: 100% !important;
          }
          .hero-cta-row {
            justify-content: center !important;
          }
          .hero-social-row {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
