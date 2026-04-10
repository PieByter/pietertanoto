"use client";

import { motion } from "framer-motion";
import {  
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaStackOverflow,
  FaXTwitter,
  FaYoutube, } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { HiArrowUp } from "react-icons/hi2";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Toolbox", href: "#toolbox" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/Piebyter", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/pieter-tanoto", label: "LinkedIn"},
  { icon: FaYoutube, href: "https://youtube.com/@piebyter", label: "YouTube" },
  { icon: FaInstagram, href: "https://instagram.com/pietertno", label: "Instagram"},
  { icon: FaXTwitter, href: "https://twitter.com/piers_tno", label: "Twitter"},
  { icon: FaTiktok, href: "https://tiktok.com/@pietertno", label: "TikTok"},
  { icon: FaStackOverflow, href: "https://stackoverflow.com/users/12345678/pieter-tanoto", label: "Stack Overflow"},
  // { icon: FaHackerrank, href: "https://hackerrank.com/pietertanoto", label: "HackerRank", color: "#00a651" },
  { icon: HiMail, href: "mailto:pietertanoto01@email.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        background: "var(--bg-footer)",
        borderTop: "1px solid rgba(56, 189, 248, 0.08)",
        padding: "3rem 2rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            alignItems: "start",
            gap: "3rem",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.8rem",
                fontWeight: 800,
                background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "0.5rem",
              }}
            >
              PT.
            </div>
            <p style={{ fontSize: "0.88rem", color: "#64748b", maxWidth: "220px", lineHeight: 1.65 }}>
              Software Developer building modern web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Navigation
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const id = link.href.replace("#", "");
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#64748b",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                    padding: "2px 0",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#38bdf8")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748b")}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials + Back to top */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94a3b8",
                    fontSize: "1rem",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(56,189,248,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "#38bdf8";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(56,189,248,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.82rem",
                color: "#38bdf8",
                background: "rgba(56, 189, 248, 0.08)",
                border: "1px solid rgba(56, 189, 248, 0.2)",
                borderRadius: "8px",
                padding: "8px 14px",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              <HiArrowUp /> Back to top
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.04)", marginBottom: "1.5rem" }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: "0.82rem", color: "#475569" }}>
            © {new Date().getFullYear()} Pieter Tanoto. All rights reserved.
          </p>
          <p style={{ fontSize: "0.82rem", color: "#475569" }}>
            Built with Next.js & Tailwind 
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-grid > div:last-child {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}
