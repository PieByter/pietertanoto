"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChatAlt2, HiX, HiPaperAirplane, HiMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa6";
import { getBotReply, SUGGESTIONS } from "@/lib/chat";

interface Message {
  from: "bot" | "user";
  text: string;
}

const WELCOME =
  "Halo! 👋 Saya asisten virtual Pieter. Tanya apa saja soal pengalaman, skill, project, atau cara kontak!";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showAllChips, setShowAllChips] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [messages, typing, open]);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTyping(true);
    const reply = getBotReply(text);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    }, 800);
  };

  return (
    <>
      {/* Floating button — hanya untuk membuka chat */}
      {!open && (
        <motion.button
          className="chat-fab"
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Buka chat"
        >
          <HiChatAlt2 />
        </motion.button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <div className="chat-header">
              <div className="chat-avatar">PT</div>
              <div className="chat-header-info">
                <div className="chat-title">Pieter&apos;s Assistant</div>
                <div className="chat-status">
                  <span className="chat-online-dot" /> Online
                </div>
              </div>
              <div className="chat-header-actions">
                <a
                  href="https://wa.me/6287748215683"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chat-header-icon"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="mailto:pietertanoto01@email.com"
                  className="chat-header-icon"
                  aria-label="Email"
                >
                  <HiMail />
                </a>
                <button
                  className="chat-close"
                  onClick={() => setOpen(false)}
                  aria-label="Tutup chat"
                >
                  <HiX />
                </button>
              </div>
            </div>

            <div className="chat-body" ref={bodyRef}>
              {messages.map((msg, i) => (
                <div key={i} className={`chat-msg ${msg.from}`}>
                  {msg.text}
                </div>
              ))}
              {typing && (
                <div className="chat-msg bot chat-typing" aria-hidden>
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>

            <div className="chat-suggestions">
              {(showAllChips ? SUGGESTIONS : SUGGESTIONS.slice(0, 2)).map((s) => (
                <button key={s} className="chat-chip" onClick={() => send(s)}>
                  {s}
                </button>
              ))}
              {SUGGESTIONS.length > 3 && (
                <button
                  className="chat-chip chat-chip-more"
                  onClick={() => setShowAllChips((v) => !v)}
                >
                  {showAllChips ? "Sembunyikan ▴" : "Lainnya ▾"}
                </button>
              )}
            </div>

            <div className="chat-input-row">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Tulis pertanyaan..."
                aria-label="Pertanyaan chat"
              />
              <button
                className="chat-send"
                onClick={() => send(input)}
                aria-label="Kirim"
              >
                <HiPaperAirplane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}