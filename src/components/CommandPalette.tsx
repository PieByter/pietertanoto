"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMMANDS = [
  { label: "Home", href: "#home", icon: "🏠" },
  { label: "About", href: "#about", icon: "👤" },
  { label: "Toolbox", href: "#toolbox", icon: "🧰" },
  { label: "Projects", href: "#projects", icon: "💻" },
  { label: "Experience", href: "#experience", icon: "💼" },
  { label: "Certifications", href: "#certifications", icon: "📜" },
  { label: "Awards", href: "#awards", icon: "🏆" },
  { label: "Contact", href: "#contact", icon: "✉️" },
  { label: "Download Resume", href: "/resume.pdf", icon: "📄" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        setQuery("");
        setIndex(0);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = COMMANDS.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const go = (href: string) => {
    setOpen(false);
    setQuery("");
    if (href.startsWith("#")) {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="palette-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="palette"
            initial={{ opacity: 0, scale: 0.95, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -12 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="palette-input-row">
              <span className="palette-search-icon">⌕</span>
              <input
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIndex(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setIndex((i) => Math.min(i + 1, filtered.length - 1));
                  }
                  if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setIndex((i) => Math.max(i - 1, 0));
                  }
                  if (e.key === "Enter" && filtered[index]) {
                    go(filtered[index].href);
                  }
                }}
                placeholder="Type a command or search…"
                spellCheck={false}
              />
              <kbd className="palette-kbd">ESC</kbd>
            </div>
            <div className="palette-list">
              {filtered.map((c, i) => (
                <button
                  key={c.href}
                  className={`palette-item ${i === index ? "active" : ""}`}
                  onMouseEnter={() => setIndex(i)}
                  onClick={() => go(c.href)}
                >
                  <span className="palette-item-icon">{c.icon}</span>
                  <span>{c.label}</span>
                  <span className="palette-item-arrow">↵</span>
                </button>
              ))}
              {filtered.length === 0 && (
                <div className="palette-empty">No results found</div>
              )}
            </div>
            <div className="palette-footer">
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>esc close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
