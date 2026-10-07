"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Message = {
  role: "customer" | "ai";
  origin?: string;
  text: string;
  time: string;
};

const MESSAGES: Message[] = [
  {
    role: "customer",
    origin: "from an Instagram ad",
    text: "Hi! How much is the Premium package?",
    time: "9:12",
  },
  {
    role: "ai",
    text: "Hi! That's the Premium package — ₦85,000, in stock. You can pay in two instalments of ₦42,500. Want me to reserve one?",
    time: "9:12",
  },
  {
    role: "customer",
    text: "Do you deliver to Abuja?",
    time: "9:14",
  },
  {
    role: "ai",
    text: "Yes — 2–3 days, ₦2,500. Shall I place the order?",
    time: "9:14",
  },
];

const REVEAL_DELAYS = [200, 1100, 2200, 3100];
const FOOTER_DELAY = 4200;

export function HeroChat() {
  const [revealed, setRevealed] = useState(0);
  const [footerIn, setFooterIn] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setRevealed(MESSAGES.length);
      setFooterIn(true);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    REVEAL_DELAYS.forEach((delay, i) => {
      timers.push(setTimeout(() => setRevealed(i + 1), delay));
    });
    timers.push(setTimeout(() => setFooterIn(true), FOOTER_DELAY));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative">
      {/* Soft glow behind the panel */}
      <div
        className="absolute -inset-6 rounded-[32px] bg-accent-soft blur-2xl opacity-70"
        aria-hidden="true"
      />

      <div className="relative rounded-2xl border border-[#E5E5E5] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#EEEEEE]">
          <div className="flex items-center gap-3">
            <span className="relative flex w-9 h-9 rounded-full bg-black items-center justify-center">
              <svg
                className="w-4 h-4 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9L12 2z" />
              </svg>
            </span>
            <div>
              <p className="text-[15px] font-semibold text-text leading-tight">Revenue OS</p>
              <p className="flex items-center gap-1.5 text-[12px] text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                online
              </p>
            </div>
          </div>
          <span className="text-[13px] tabular-nums text-text-muted">9:14</span>
        </div>

        {/* Thread */}
        <div className="px-5 py-5 space-y-3">
          {MESSAGES.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={revealed > i ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={m.role === "customer" ? "flex justify-start" : "flex justify-end"}
            >
              <div
                className={
                  "max-w-[85%] rounded-2xl px-4 py-3 " +
                  (m.role === "customer"
                    ? "bg-[#F4F4F5] rounded-tl-md"
                    : "bg-[#141418] text-white rounded-tr-md")
                }
              >
                {m.origin ? (
                  <p
                    className={
                      "text-[11px] tracking-[0.06em] mb-1.5 " +
                      (m.role === "customer" ? "text-text-muted" : "text-white/50")
                    }
                  >
                    ↳ {m.origin}
                  </p>
                ) : null}
                <p
                  className={
                    "text-[14px] sm:text-[15px] leading-[1.5] " +
                    (m.role === "customer" ? "text-text" : "text-white")
                  }
                >
                  {m.text}
                </p>
                <p
                  className={
                    "text-[11px] tabular-nums mt-1.5 " +
                    (m.role === "customer" ? "text-text-muted" : "text-white/45 text-right")
                  }
                >
                  {m.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CRM strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={footerIn ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.4 }}
          className="px-5 pb-5"
        >
          <div className="rounded-xl border border-dashed border-[#D4D4D4] bg-[#FAFAFA] px-4 py-3 text-center">
            <p className="text-[12px] sm:text-[13px] text-text-secondary">
              Lead created in CRM · fields filled ✓
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
