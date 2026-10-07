"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SEQUENCE = [
  { value: "23", label: "customers matched" },
  { value: "17", label: "eligible today" },
  { value: "11", label: "messages prepared" },
  { value: "8", label: "sent automatically" },
  { value: "3", label: "replies" },
  { value: "2", label: "purchases" },
];

const STEP_MS = 620;

export function HeroDemo() {
  // -1 = idle, 0 = acknowledgement, 1..n = sequence rows, n+1 = outcome
  const [step, setStep] = useState(-1);

  // The hero sits below the headline: play the sequence on mount so it has
  // finished by the time the reader reaches the panel, instead of leaving it blank.
  useEffect(() => {
    // Read the preference directly so behaviour is deterministic and SSR-safe.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setStep(SEQUENCE.length + 1);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setStep(0), 500));
    SEQUENCE.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i + 1), 500 + (i + 1) * STEP_MS));
    });
    timers.push(
      setTimeout(() => setStep(SEQUENCE.length + 1), 500 + (SEQUENCE.length + 1) * STEP_MS)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const show = (i: number) => step >= i;

  return (
    <div className="rounded-2xl border border-[#E5E5E5] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        {/* Your instruction */}
        <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-[#E5E5E5]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted mb-4">
            Your instruction
          </p>
          <p className="text-[17px] sm:text-[19px] leading-[1.5] text-text">
            Follow up with anyone who asks for a price but doesn&apos;t buy within 2 days.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs text-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            Written in your own words. No workflow builder.
          </div>
        </div>

        {/* Revenue OS at work */}
        <div className="p-6 sm:p-8 bg-[#FAFAFA]">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text">
              Revenue OS
            </span>
          </div>

          {/* Acknowledgement */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={show(0) ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.35 }}
            className="mb-6"
          >
            <p className="text-[15px] font-semibold text-text mb-1">Got it.</p>
            <p className="text-[15px] text-text-secondary">
              Monitoring <span className="font-semibold text-text">386 customers</span>
            </p>
          </motion.div>

          {/* Sequence */}
          <div className="space-y-0.5">
            {SEQUENCE.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -6 }}
                animate={show(i + 1) ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
                transition={{ duration: 0.3 }}
                className="flex items-baseline gap-3 py-1.5"
              >
                <span className="text-[13px] tabular-nums text-text-muted w-5 text-right shrink-0">
                  {i + 1}
                </span>
                <span className="text-[19px] sm:text-[22px] leading-none font-bold tabular-nums tracking-[-0.02em] text-text w-[68px] sm:w-[80px] shrink-0">
                  {row.value}
                </span>
                <span className="text-[14px] text-text-secondary">{row.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={show(SEQUENCE.length + 1) ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.45 }}
            className="mt-6 pt-5 border-t border-[#E5E5E5] flex items-baseline justify-between gap-4"
          >
            <span className="text-[13px] uppercase tracking-[0.12em] text-text-muted">
              Recovered
            </span>
            <span className="text-[28px] sm:text-[34px] leading-none font-bold tabular-nums tracking-[-0.03em] text-accent">
              ₦185,000
            </span>
          </motion.div>
        </div>
      </div>

      {/* Caption strip */}
      <div className="border-t border-[#E5E5E5] px-6 sm:px-8 py-3.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-text-muted">
        <span className="text-text font-medium">Instruction</span>
        <span aria-hidden="true">→</span>
        <span className="text-text font-medium">Memory</span>
        <span aria-hidden="true">→</span>
        <span className="text-text font-medium">Decision</span>
        <span aria-hidden="true">→</span>
        <span className="text-text font-medium">Action</span>
        <span aria-hidden="true">→</span>
        <span className="text-text font-medium">Outcome</span>
      </div>
    </div>
  );
}
