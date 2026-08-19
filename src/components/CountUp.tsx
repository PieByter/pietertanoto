"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  /** e.g. "2+", "9+", "24" */
  text: string;
  duration?: number;
}

/** Parses "2+" into { value: 2, suffix: "+" } */
function parseStat(text: string) {
  const match = text.match(/^(\d+)(.*)$/);
  if (!match) return { value: 0, suffix: text };
  return { value: parseInt(match[1], 10), suffix: match[2] };
}

export default function CountUp({ text, duration = 1.4 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);
  const { value, suffix } = parseStat(text);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf = 0;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      // easeOutCubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
