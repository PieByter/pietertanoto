"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Backend Developer",
  "Chill IT Guy",
  "API Architect",
  "Bug Hunter",
  "Lifelong Learner",
];

export default function TypeWriter() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex % ROLES.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      // Pause at the full word before deleting
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text === "") {
      // Move to the next role
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }, 300);
    } else {
      timeout = setTimeout(() => {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        );
      }, deleting ? 45 : 90);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span>
      {text}
      <span className="typewriter-cursor" aria-hidden>
        ▍
      </span>
    </span>
  );
}
