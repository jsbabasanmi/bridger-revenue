"use client";

import { motion } from "framer-motion";

const breakdown = [
  { value: "1,284", label: "customers checked" },
  { value: "173", label: "customers qualify" },
  { value: "146", label: "have WhatsApp available" },
  { value: "27", label: "need your approval" },
  { value: "119", label: "can be handled automatically" },
];

export function InstructionDemo() {
  return (
    <div className="mx-auto max-w-[1000px] rounded-2xl border border-[#E5E5E5] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* You */}
        <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-[#E5E5E5]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted mb-4">
            You
          </p>
          <p className="text-[17px] sm:text-[19px] leading-[1.5] text-text">
            &ldquo;Every customer who bought skincare more than 30 days ago should get a reminder to
            reorder. Don&apos;t message anyone who bought in the last 7 days.&rdquo;
          </p>
          <p className="mt-6 text-[13px] text-text-muted">
            Two rules, one exception. Nothing to configure.
          </p>
        </div>

        {/* Revenue OS */}
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

          <p className="text-[15px] font-semibold text-text mb-5">Got it.</p>

          <div className="space-y-0">
            {breakdown.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.35 }}
                className={
                  "flex items-baseline justify-between gap-4 py-2.5 border-b border-[#E5E5E5] " +
                  (i === breakdown.length - 1 ? "border-b-0" : "")
                }
              >
                <span className="text-[14px] text-text-secondary">{row.label}</span>
                <span
                  className={
                    "text-[19px] font-bold tabular-nums tracking-[-0.02em] " +
                    (i === breakdown.length - 1 ? "text-accent" : "text-text")
                  }
                >
                  {row.value}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <span className="inline-flex rounded-lg bg-black px-5 py-2.5 text-[14px] font-semibold text-white">
              Review
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
