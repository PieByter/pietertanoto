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

  useEffect(() => {
    let skip = false;
    try {
      if (sessionStorage.getItem("pt-booted")) skip = true;
    } catch {
      /* ignore */
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      skip = true;
    }

    if (skip) {
      const t = setTimeout(() => setDone(true), 0);
      return () => clearTimeout(t);
    }
  }, []);

  // Reveal boot lines one by one
  useEffect(() => {
    if (count >= BOOT_LINES.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), 240);
    return () => clearTimeout(t);
  }, [count]);

  // Start fade-out once the boot sequence finishes
  useEffect(() => {
    if (count < BOOT_LINES.length) return;
    const t = setTimeout(() => setLeaving(true), 500);
    return () => clearTimeout(t);
  }, [count]);

  // Unmount after the fade completes
  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(() => {
      setDone(true);
      try {
        sessionStorage.setItem("pt-booted", "1");
      } catch {
        /* ignore */
      }
    }, 700);
    return () => clearTimeout(t);
  }, [leaving]);

  if (done) return null;

  return (
    <div
      className={`boot-screen ${leaving ? "boot-screen-leave" : ""}`}
      aria-hidden
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
    </div>
  );
}