"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaStackOverflow,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { email, phone } from "@/data/socials";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Piebyter", label: "GitHub", iconColor: "var(--text-primary)", hoverColor: "#38bdf8" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/pieter-tanoto", label: "LinkedIn", iconColor: "#0A66C2", hoverColor: "#0A66C2" },
  { icon: FaYoutube, href: "https://youtube.com/@piebyter", label: "YouTube", iconColor: "#FF0000", hoverColor: "#FF0000" },
  { icon: FaInstagram, href: "https://instagram.com/pietertno", label: "Instagram", iconColor: "#E1306C", hoverColor: "#E1306C" },
  { icon: FaStackOverflow, href: "https://stackoverflow.com/users/12345678/pieter-tanoto", label: "Stack Overflow", iconColor: "#f48024", hoverColor: "#f48024" },
  { icon: HiMail, href: "mailto:pietertanoto01@email.com", label: "Email", iconColor: "#38bdf8", hoverColor: "#38bdf8" },
];

const contactItems = [
  {
    icon: HiMail,
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    color: "#38bdf8",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: phone,
    href: `tel:${phone}`,
    color: "#818cf8",
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: "Medan, North Sumatra, Indonesia 🇮🇩",
    href: undefined,
    color: "#06b6d4",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Open to new opportunities, collaborations, and interesting projects
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="card"
              style={{
                padding: "2rem",
                background: "linear-gradient(135deg, rgba(14, 165, 233, 0.07) 0%, rgba(129, 140, 248, 0.07) 100%)",
                border: "1px solid rgba(56, 189, 248, 0.15)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  color: "var(--text-primary)",
                }}
              >
                Let&apos;s work together
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                Whether you have a project in mind, a job opportunity, or just want to chat about tech — my inbox is always open.
              </p>

              {/* Contact Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                {contactItems.map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "10px",
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}33`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: item.color,
                        fontSize: "1.2rem",
                        flexShrink: 0,
                      }}
                    >
                      <item.icon />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "2px" }}>{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          style={{ color: "var(--text-primary)", fontSize: "0.95rem", fontWeight: 500, textDecoration: "none" }}
                          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = item.color)}
                          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span style={{ color: "var(--text-primary)", fontSize: "0.95rem", fontWeight: 500 }}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Primary CTA */}
              <a
                href={`mailto:${email}`}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <HiMail /> Say Hello
              </a>
            </div>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
              You can also find me on these platforms:
            </p>

            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ x: 6 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  color: "var(--text-primary)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = social.hoverColor + "66";
                  el.style.background = social.hoverColor + "0d";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border-color)";
                  el.style.background = "var(--bg-card)";
                }}
              >
                <social.icon
                  style={{
                    fontSize: "1.35rem",
                    color: social.iconColor,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontWeight: 500, fontSize: "0.95rem" }}>{social.label}</span>
                <span style={{ marginLeft: "auto", color: "var(--text-muted)", fontSize: "0.85rem" }}>→</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
