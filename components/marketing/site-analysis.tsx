"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { AnalyseBar } from "./analyse-input";
import { ANALYSE_EVENT, analyseSource, type AnalysisResult, type SourceKind } from "@/lib/site-analysis";

const SOURCES: { id: SourceKind; label: string }[] = [
  { id: "website", label: "Website" },
  { id: "instagram", label: "Instagram" },
  { id: "feed", label: "Product feed" },
];

const STEP_MS = 750;

const DEFAULT_INPUT = "zeena.ng";

export function SiteAnalysis() {
  const [result, setResult] = useState<AnalysisResult>(() => analyseSource(DEFAULT_INPUT));
  const [completed, setCompleted] = useState(0);
  const [running, setRunning] = useState(false);

  const total = result.steps.length;

  function run(input: string) {
    const next = analyseSource(input);
    setResult(next);

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setCompleted(next.steps.length);
      setRunning(false);
      return;
    }

    setCompleted(0);
    setRunning(true);
    next.steps.forEach((_, i) => {
      setTimeout(() => setCompleted(i + 1), (i + 1) * STEP_MS);
    });
    setTimeout(() => setRunning(false), next.steps.length * STEP_MS + 100);
  }

  // Accept analysis requests from the hero input.
  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ input?: string }>).detail;
      if (!detail?.input?.trim()) return;
      run(detail.input);
    };
    window.addEventListener(ANALYSE_EVENT, handler);
    return () => window.removeEventListener(ANALYSE_EVENT, handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Show the default example in full on first paint.
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCompleted(total);
    if (prefersReduced) return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const done = completed >= total;

  return (
    <div>
      {/* Source pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {SOURCES.map((s) => {
          const active = result.source === s.id;
          return (
            <span
              key={s.id}
              className={
                "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[14px] font-medium transition-colors " +
                (active
                  ? "border-[#D4D4D4] bg-white text-text"
                  : "border-[#E5E5E5] bg-white/60 text-text-muted")
              }
            >
              <SourceIcon kind={s.id} />
              {s.label}
            </span>
          );
        })}
      </div>

      <div className="mx-auto max-w-[820px]">
        <AnalyseBar />

        {/* Results */}
        <div className="mt-8 rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] p-5 sm:p-8">
          {/* Progress */}
          <ol className="space-y-3 mb-8">
            {result.steps.map((step, i) => {
              const isDone = completed > i;
              const isActive = running && completed === i;
              return (
                <li key={step.id} className="flex items-center gap-4">
                  <span
                    className={
                      "w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-semibold shrink-0 transition-colors " +
                      (isDone ? "bg-black text-white" : "bg-[#EDEDED] text-text-muted")
                    }
                  >
                    {i + 1}
                  </span>
                  <span
                    className={
                      "text-[15px] sm:text-[16px] transition-colors " +
                      (isDone ? "text-text" : "text-text-muted")
                    }
                  >
                    {step.label}
                  </span>
                  <span className="ml-auto">
                    {isDone ? (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-success text-[15px]"
                        aria-label="done"
                      >
                        ✓
                      </motion.span>
                    ) : isActive ? (
                      <span className="text-text-muted text-[13px]">…</span>
                    ) : null}
                  </span>
                </li>
              );
            })}
          </ol>

          {/* Summary + tags */}
          <motion.div
            initial={false}
            animate={{ opacity: done ? 1 : 0.25 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-[16px] sm:text-[17px] leading-[1.6] text-text mb-5">
              <span className="text-success mr-2">✓</span>
              {result.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {result.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#E5E5E5] bg-white px-3.5 py-1.5 text-[13px] text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Example answer */}
          <motion.div initial={false} animate={{ opacity: done ? 1 : 0.25 }} transition={{ duration: 0.3 }}>
            <h3 className="text-[18px] sm:text-[20px] font-bold tracking-[-0.02em] mb-4">
              How Revenue OS would answer your customers
            </h3>

            <div className="rounded-xl border border-[#E5E5E5] bg-white p-4 sm:p-5 space-y-3 mb-10">
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-[#F4F4F5] px-4 py-3">
                  <p className="text-[11px] tracking-[0.06em] text-text-muted mb-1.5">
                    ↳ {result.example.origin}
                  </p>
                  <p className="text-[14px] sm:text-[15px] leading-[1.5] text-text">
                    {result.example.question}
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[88%] rounded-2xl rounded-tr-md bg-[#141418] px-4 py-3">
                  <p className="text-[14px] sm:text-[15px] leading-[1.5] text-white">
                    {result.example.answer}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Where chats leak */}
          <motion.div initial={false} animate={{ opacity: done ? 1 : 0.25 }} transition={{ duration: 0.3 }}>
            <h3 className="text-[18px] sm:text-[20px] font-bold tracking-[-0.02em] mb-4">
              Where your chats lose sales — and how Revenue OS closes them
            </h3>

            <div className="space-y-3">
              {result.gaps.map((gap, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#E5E5E5] bg-white p-4 sm:p-5 space-y-3"
                >
                  <p className="flex gap-3 text-[14px] sm:text-[15px] leading-[1.6] text-text-secondary">
                    <span className="text-danger shrink-0" aria-hidden="true">
                      ✕
                    </span>
                    {gap.problem}
                  </p>
                  <p className="flex gap-3 text-[14px] sm:text-[15px] leading-[1.6] text-text">
                    <span className="text-success shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    {gap.fix}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <p className="mt-4 text-center text-[12px] text-text-muted">
          Example analysis for {result.display || "your business"} — a live check runs on your own
          content.
        </p>
      </div>
    </div>
  );
}

function SourceIcon({ kind }: { kind: SourceKind }) {
  const common = "w-4 h-4 shrink-0";
  if (kind === "instagram") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="#E4405F" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="#E4405F" stroke="none" />
      </svg>
    );
  }
  if (kind === "feed") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M8 6l-5 6 5 6M16 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  );
}
