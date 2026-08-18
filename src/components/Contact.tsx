"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from "react-icons/hi";
import { email, phone } from "@/data/socials";
import SectionHeading from "./SectionHeading";

const socialLinks = [
  { icon: FaWhatsapp, href: "https://wa.me/6287748215683", label: "WhatsApp", iconColor: "#25D366", hoverColor: "#25D366" },
  { icon: HiMail, href: "mailto:pietertanoto01@email.com", label: "Email", iconColor: "var(--accent)", hoverColor: "var(--accent)" },
  { icon: FaGithub, href: "https://github.com/Piebyter", label: "GitHub", iconColor: "var(--text-primary)", hoverColor: "var(--accent)" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/pieter-tanoto", label: "LinkedIn", iconColor: "#0A66C2", hoverColor: "#0A66C2" },
  { icon: FaYoutube, href: "https://youtube.com/@piebyter", label: "YouTube", iconColor: "#FF0000", hoverColor: "#FF0000" },
  { icon: FaInstagram, href: "https://instagram.com/pietertno", label: "Instagram", iconColor: "#E1306C", hoverColor: "#E1306C" },
];

const contactItems = [
  {
    icon: HiMail,
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    color: "var(--accent)",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: phone,
    href: `tel:${phone}`,
    color: "var(--accent-2)",
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
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="section">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeading
          eyebrow="Contact"
          title="Get In"
          highlight="Touch"
          subtitle="Open to new opportunities, collaborations, and interesting projects"
        />

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
                border: "1px solid var(--accent-border)",
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
                href="https://wa.me/6287748215683"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <FaWhatsapp /> Reach Me Here
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card"
            style={{ padding: "2rem" }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.3rem",
                fontWeight: 700,
                marginBottom: "0.4rem",
                color: "var(--text-primary)",
              }}
            >
              Send me a message
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                marginBottom: "1.5rem",
              }}
            >
              Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
                className="form-row"
              >
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="form-field"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="form-field"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="form-field"
                style={{ resize: "vertical", minHeight: "120px" }}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{ justifyContent: "center", width: "100%" }}
              >
                <HiPaperAirplane />
                {sent ? "Opening your email app..." : "Send Message"}
              </button>
            </form>

            {/* Social links compact */}
            <div
              style={{
                marginTop: "1.5rem",
                paddingTop: "1.25rem",
                borderTop: "1px solid var(--border-color)",
              }}
            >
              <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginBottom: "0.75rem" }}>
                Or find me on:
              </p>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      background: "var(--icon-circle-bg)",
                      border: "1px solid var(--icon-circle-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: social.iconColor,
                      fontSize: "1.05rem",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
