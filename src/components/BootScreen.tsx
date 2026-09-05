"use client";

import { useEffect, useState } from "react";

const BOOT_LINES: Array<{ type: "cmd" | "out"; text: string }> = [
  { type: "cmd", text: "> pieter@tanoto: ~" },
  { type: "out", text: "[ OK ] Loading modules ............ done" },
  { type: "out", text: "[ OK ] Mounting hero .............. done" },
  { type: "out", text: "[ OK ] Compiling projects ......... done" },
  { type: "out", text: "[ OK ] Establishing connection .... done" },
  { type: "cmd", text: "> Welcome, Pieter Tanoto." },
  { type: "cmd", text: "> Type 'help' for commands." },
];

export default function BootScreen() {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  // Selalu tampil tiap halaman dimuat; hanya dilewati jika prefers-reduced-motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = setTimeout(() => setDone(true), 0);
      return () => clearTimeout(t);
    }
  }, []);

  const skip = () => setDone(true);

  // Reveal baris satu per satu (timer JS — baris selalu tampil di semua kondisi)
  useEffect(() => {
    if (count >= BOOT_LINES.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), 170);
    return () => clearTimeout(t);
  }, [count]);

  // Fade-out setelah semua baris tampil
  useEffect(() => {
    if (count < BOOT_LINES.length) return;
    const t = setTimeout(() => setLeaving(true), 400);
    return () => clearTimeout(t);
  }, [count]);

  // Unmount setelah fade selesai
  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(() => setDone(true), 500);
    return () => clearTimeout(t);
  }, [leaving]);

  if (done) return null;

  return (
    <div
      className={`boot-screen ${leaving ? "boot-screen-leave" : ""}`}
      onClick={skip}
    >
      <div className="boot-window">
        <div className="boot-header">
          <span className="terminal-dot terminal-dot-red" />
          <span className="terminal-dot terminal-dot-yellow" />
          <span className="terminal-dot terminal-dot-green" />
          <span className="boot-title">pieter@tanoto: ~ — booting</span>
        </div>
        <div className="boot-body">
          {BOOT_LINES.slice(0, count).map((line, i) => (
            <div
              key={i}
              className={line.type === "cmd" ? "boot-cmd" : "boot-out"}
            >
              {line.text}
            </div>
          ))}
          {count < BOOT_LINES.length && <span className="boot-cursor" />}
        </div>
      </div>
      <span className="boot-skip-hint">klik di mana saja untuk melewati</span>
    </div>
  );
}