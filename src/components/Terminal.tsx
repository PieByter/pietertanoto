"use client";

import { useEffect, useRef, useState } from "react";

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  about      - who I am",
    "  skills     - my tech stack",
    "  experience - my work history",
    "  contact    - how to reach me",
    "  whoami     - guess what",
    "  clear      - clear the terminal",
  ],
  about: [
    "Pieter Tanoto — Computer Science graduate from Universitas Sumatera Utara.",
    "Backend Developer currently at Murni Teguh (Medan Head Office).",
    "I build reliable APIs and scalable systems, and I love clean, testable code.",
  ],
  skills: [
    "Backend : Java, Spring Boot, Laravel (PHP), Node.js",
    "Frontend: TypeScript, SvelteKit, Next.js, React",
    "Mobile  : Kotlin, Android",
    "Data    : PostgreSQL, MySQL, DBeaver",
    "Tools   : Docker, Git, Jira, Bitbucket, Postman, Swagger",
  ],
  experience: [
    "May 2026 - Present : Backend Developer @ Murni Teguh (Medan Head Office)",
    "Jul 2025 - Dec 2025 : Web Developer @ Sumatra Tobacco Trading Company (STTC)",
    "Sep 2024 - Dec 2024 : IT Support Internship (AI Developer) @ BPJS Ketenagakerjaan",
    "Jan 2024 - Jun 2024 : Android Mobile Developer @ Bangkit Academy (Auxilium)",
  ],
  contact: [
    "Email   : pietertanoto01@email.com",
    "GitHub  : github.com/Piebyter",
    "LinkedIn: linkedin.com/in/pieter-tanoto",
    "WhatsApp: wa.me/6287748215683",
  ],
  whoami: ["pieter@tanoto:~$ whoami", "Pieter Tanoto — Backend Developer 🚀"],
};

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([
    "Welcome to Pieter's terminal! Type 'help' to get started.",
  ]);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }
    const output =
      COMMANDS[cmd] ??
      [`Command not found: '${cmd}'. Type 'help' for a list of commands.`];
    setHistory((h) => [...h, `$ ${raw}`, ...output]);
    setInput("");
  };

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [history]);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <span className="terminal-dot terminal-dot-red" />
        <span className="terminal-dot terminal-dot-yellow" />
        <span className="terminal-dot terminal-dot-green" />
        <span className="terminal-title">pieter@tanoto: ~</span>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {history.map((line, i) => (
          <div
            key={i}
            className={line.startsWith("$") ? "terminal-cmd" : "terminal-out"}
          >
            {line}
          </div>
        ))}
        <div className="terminal-input-row">
          <span className="terminal-prompt">pieter@tanoto:~$</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") run(input);
            }}
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal command input"
          />
        </div>
      </div>
    </div>
  );
}
