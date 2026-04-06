"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Toolbox", href: "#toolbox" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const THEME_EVENT = "theme-change";

function getThemeSnapshot() {
  if (typeof window === "undefined") return "dark";
  return localStorage.getItem("theme") === "light" ? "light" : "dark";
}

function subscribeTheme(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};

  const handleChange = () => onStoreChange();
  window.addEventListener("storage", handleChange);
  window.addEventListener(THEME_EVENT, handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(THEME_EVENT, handleChange);
  };
}

function setTheme(nextTheme: "dark" | "light") {
  localStorage.setItem("theme", nextTheme);
  window.dispatchEvent(new Event(THEME_EVENT));
}

export default function Navbar() {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, () => "dark");
  const isDark = theme === "dark";
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((i) => i.href.replace("#", ""));
      for (const s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0 2rem",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.3s ease",
          background: isScrolled ? "var(--nav-scrolled-bg)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: isScrolled
            ? "1px solid var(--nav-scrolled-border)"
            : "none",
        }}
      >
        {/* Logo */}
        <motion.button
          onClick={() => scrollTo("#home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-display)",
            fontSize: "1.4rem",
            fontWeight: 800,
            backgroundImage: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          PT.
        </motion.button>
        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hide-mobile">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "0.9rem",
                fontWeight: activeSection === item.href.replace("#", "") ? 600 : 400,
                color:
                  activeSection === item.href.replace("#", "")
                    ? "#38bdf8"
                    : "var(--text-secondary)",
                transition: "color 0.2s ease",
                position: "relative",
                padding: "4px 0",
              }}
            >
              {item.label}
              {activeSection === item.href.replace("#", "") && (
                <motion.div
                  layoutId="activeNav"
                  style={{
                    position: "absolute",
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 2,
                    borderRadius: 2,
                    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: "rgba(56, 189, 248, 0.1)",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              borderRadius: "8px",
              width: 38,
              height: 38,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#38bdf8",
              fontSize: "1.1rem",
            }}
          >
            {isDark ? <HiSun /> : <HiMoon />}
          </motion.button>

          {/* Hamburger */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            className="show-mobile"
            style={{
              background: "rgba(56, 189, 248, 0.1)",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              borderRadius: "8px",
              width: 38,
              height: 38,
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#38bdf8",
              fontSize: "1.2rem",
            }}
          >
            {mobileOpen ? <HiX /> : <HiMenu />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "280px",
              zIndex: 999,
              background: "var(--nav-scrolled-bg)",
              backdropFilter: "blur(24px) saturate(180%)",
              borderLeft: "1px solid var(--nav-scrolled-border)",
              display: "flex",
              flexDirection: "column",
              padding: "90px 2rem 2rem",
              gap: "0.5rem",
            }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(item.href)}
                style={{
                  background: activeSection === item.href.replace("#", "")
                    ? "rgba(56, 189, 248, 0.1)"
                    : "none",
                  border: "1px solid",
                  borderColor: activeSection === item.href.replace("#", "")
                    ? "rgba(56, 189, 248, 0.3)"
                    : "transparent",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: activeSection === item.href.replace("#", "")
                    ? "#38bdf8"
                    : "var(--text-secondary)",
                  transition: "all 0.2s ease",
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
