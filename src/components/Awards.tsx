"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiTrophy } from "react-icons/hi2";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { awards } from "@/data/awards";

const AUTO_SLIDE_MS = 10_000;

// Fixed card widths per slot
const CARD_W = { center: 380, side1: 290, side2: 230 };
// Gap between cards (edge to edge)
const GAP = 24;

// Compute the X offset (in px) from the container center for a given slot offset.
// Cards are centered at 0, so we translate left/right by their half-widths + gaps.
function getXForOffset(offset: number): number {
  if (offset === 0) return 0;

  const sign = offset > 0 ? 1 : -1;
  const abs = Math.abs(offset);

  if (abs === 1) {
    // center edge → side1 center
    return sign * (CARD_W.center / 2 + GAP + CARD_W.side1 / 2);
  }
  // abs === 2
  return sign * (CARD_W.center / 2 + GAP + CARD_W.side1 + GAP + CARD_W.side2 / 2);
}

export default function Awards() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const blockImageActions = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const total = awards.length;

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % total) + total) % total);
    },
    [total],
  );

  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Auto-slide
  useEffect(() => {
    if (paused || total <= 1) return;
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, AUTO_SLIDE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, total, active]);

  // Keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  // Compute circular offset (-2..+2) for each card index
  const getOffset = (index: number) => {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  // Visible cards: offset -2 to +2
  const visibleCards = Array.from({ length: total }, (_, i) => i)
    .map((i) => ({ index: i, offset: getOffset(i) }))
    .filter(({ offset }) => Math.abs(offset) <= 2);

  return (
    <section id="awards" className="section">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem", textAlign: "center" }}
        >
          <h2 className="section-title">
            Awards <span className="gradient-text">& Achievements</span>
          </h2>
          <p className="section-subtitle">
            Recognitions and honors I&apos;ve received
          </p>
        </motion.div>

        {/* Carousel stage */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{
            position: "relative",
            width: "100%",
            height: "500px",
            overflow: "hidden",
            userSelect: "none",
          }}
        >
          {/* Center anchor — all cards are absolutely positioned relative to this */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 0,
              height: 0,
            }}
          >
            {visibleCards.map(({ index, offset }) => {
              const award = awards[index];
              const isCenter = offset === 0;
              const absOffset = Math.abs(offset);

              const cardWidth =
                absOffset === 0
                  ? CARD_W.center
                  : absOffset === 1
                    ? CARD_W.side1
                    : CARD_W.side2;

              const scale = isCenter ? 1 : absOffset === 1 ? 0.85 : 0.7;
              const opacity = isCenter ? 1 : absOffset === 1 ? 0.72 : 0.38;
              const zIndex = 10 - absOffset;
              const xPx = getXForOffset(offset);
              const imgHeight = isCenter ? 260 : absOffset === 1 ? 200 : 160;

              return (
                <motion.div
                  key={index}
                  animate={{
                    x: xPx - cardWidth / 2,
                    y: "-50%",
                    scale,
                    opacity,
                    zIndex,
                  }}
                  transition={{
                    x: {
                      type: "tween",
                      duration: 0.55,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                    scale: {
                      type: "tween",
                      duration: 0.55,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                    opacity: {
                      type: "tween",
                      duration: 0.4,
                    },
                  }}
                  onClick={() => {
                    if (!isCenter) goTo(index);
                  }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: cardWidth,
                    cursor: isCenter ? "default" : "pointer",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: isCenter
                      ? `2px solid ${award.color}88`
                      : "1px solid var(--border-color)",
                    background: "var(--bg-card)",
                    boxShadow: isCenter
                      ? `0 20px 60px ${award.color}30, 0 0 0 1px ${award.color}20`
                      : "var(--shadow-card)",
                    filter:
                      absOffset > 1 ? "blur(1.5px) brightness(0.85)" : "none",
                    willChange: "transform, opacity",
                  }}
                >
                  {/* Accent bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: isCenter ? "4px" : "2px",
                      background: `linear-gradient(90deg, ${award.color}, ${award.color}44)`,
                      zIndex: 2,
                    }}
                  />

                  {/* Image */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: imgHeight,
                      overflow: "hidden",
                      background: `linear-gradient(135deg, ${award.color}12 0%, ${award.color}05 100%)`,
                    }}
                    onContextMenu={blockImageActions}
                    onDragStart={blockImageActions}
                    onCopy={blockImageActions}
                    onCut={blockImageActions}
                    onPaste={blockImageActions}
                  >
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      sizes={`${cardWidth}px`}
                      draggable={false}
                      style={{ objectFit: "cover", userSelect: "none", pointerEvents: "none" }}
                      priority={isCenter}
                      onContextMenu={blockImageActions}
                      onDragStart={blockImageActions}
                      onCopy={blockImageActions}
                    />
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 2,
                        background: "transparent",
                        userSelect: "none",
                      }}
                      onContextMenu={blockImageActions}
                      onDragStart={blockImageActions}
                      onCopy={blockImageActions}
                      onCut={blockImageActions}
                      onPaste={blockImageActions}
                    />
                    {!isCenter && (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "rgba(0,0,0,0.18)",
                          zIndex: 3,
                        }}
                      />
                    )}
                  </div>

                  {/* Info */}
                  <div
                    style={{
                      padding: isCenter ? "1rem 1.25rem" : "0.65rem 1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      <HiTrophy
                        style={{
                          color: award.color,
                          fontSize: isCenter ? "1.05rem" : "0.85rem",
                          flexShrink: 0,
                        }}
                      />
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: isCenter ? "0.95rem" : "0.78rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          lineHeight: 1.35,
                          margin: 0,
                          whiteSpace: "normal",
                          overflowWrap: "anywhere",
                          wordBreak: "break-word",
                        }}
                      >
                        {award.title}
                      </h3>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "0.4rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <p
                        style={{
                          fontSize: isCenter ? "0.82rem" : "0.7rem",
                          color: award.color,
                          fontWeight: 600,
                          margin: 0,
                        }}
                      >
                        {award.event}
                      </p>
                      <span
                        style={{
                          fontSize: isCenter ? "0.72rem" : "0.65rem",
                          color: "var(--text-muted)",
                          background: "var(--bg-card-hover)",
                          border: "1px solid var(--border-color)",
                          padding: "2px 7px",
                          borderRadius: "5px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {award.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>



          {/* Prev Arrow */}
          {total > 1 && (
            <button
              onClick={goPrev}
              aria-label="Previous award"
              style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                background: "var(--icon-circle-bg)",
                border: "1px solid var(--border-color)",
                borderRadius: "50%",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--text-primary)",
                fontSize: "1.3rem",
                backdropFilter: "blur(8px)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(56,189,248,0.15)";
                el.style.borderColor = "rgba(56,189,248,0.4)";
                el.style.color = "#38bdf8";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--icon-circle-bg)";
                el.style.borderColor = "var(--border-color)";
                el.style.color = "var(--text-primary)";
              }}
            >
              <HiChevronLeft />
            </button>
          )}

          {/* Next Arrow */}
          {total > 1 && (
            <button
              onClick={goNext}
              aria-label="Next award"
              style={{
                position: "absolute",
                right: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                background: "var(--icon-circle-bg)",
                border: "1px solid var(--border-color)",
                borderRadius: "50%",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--text-primary)",
                fontSize: "1.3rem",
                backdropFilter: "blur(8px)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(56,189,248,0.15)";
                el.style.borderColor = "rgba(56,189,248,0.4)";
                el.style.color = "#38bdf8";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--icon-circle-bg)";
                el.style.borderColor = "var(--border-color)";
                el.style.color = "var(--text-primary)";
              }}
            >
              <HiChevronRight />
            </button>
          )}
        </div>

        {/* Dot indicators */}
        {total > 1 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.6rem",
              marginTop: "1.5rem",
            }}
          >
            {awards.map((award, i) => (
              <button
                key={award.id}
                onClick={() => goTo(i)}
                aria-label={`Go to award ${i + 1}`}
                style={{
                  position: "relative",
                  width: i === active ? 32 : 10,
                  height: 10,
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  background:
                    i === active ? award.color : "var(--border-color)",
                  transition: "all 0.4s ease",
                  overflow: "hidden",
                  padding: 0,
                }}
              >
                {i === active && !paused && (
                  <motion.div
                    key={`progress-${active}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: AUTO_SLIDE_MS / 1000, ease: "linear" }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(255,255,255,0.4)",
                      transformOrigin: "left",
                      borderRadius: "5px",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Counter */}
        <p
          style={{
            textAlign: "center",
            marginTop: "0.75rem",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            fontWeight: 500,
          }}
        >
          {active + 1} / {total}
        </p>
      </div>
    </section>
  );
}
