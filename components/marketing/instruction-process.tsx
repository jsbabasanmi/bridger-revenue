"use client";

import { motion } from "framer-motion";

const parsedSteps = [
  { label: "Price enquiries", kind: "trigger" as const },
  { label: "Wait 1 day", kind: "wait" as const },
  { label: "Follow up", kind: "action" as const },
  { label: "Wait 3 days", kind: "wait" as const },
  { label: "Follow up", kind: "action" as const },
  { label: "Stop", kind: "stop" as const },
];

const traditionalSteps = [
  { depth: 0, text: "Trigger" },
  { depth: 1, text: 'Customer enters stage "Quote Sent"' },
  { depth: 0, text: "Wait" },
  { depth: 1, text: "48 hours" },
  { depth: 0, text: "Condition" },
  { depth: 1, text: "No purchase" },
  { depth: 0, text: "Action" },
  { depth: 1, text: "Send template A" },
  { depth: 0, text: "Wait" },
  { depth: 1, text: "72 hours" },
  { depth: 0, text: "Condition" },
  { depth: 1, text: "No reply" },
  { depth: 0, text: "Action" },
  { depth: 1, text: "Send template B" },
];

export function InstructionToProcess() {
  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Instruction → saved process */}
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
        <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 sm:p-8 flex flex-col">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted mb-4">
            You say
          </p>
          <p className="text-[18px] sm:text-[20px] leading-[1.5] text-text">
            &ldquo;If someone asks for the price and doesn&apos;t buy, follow up tomorrow. If they
            still don&apos;t respond, follow up three days later. Don&apos;t message them more than
            twice.&rdquo;
          </p>
          <p className="mt-auto pt-6 text-[13px] text-text-muted">
            Typed the way you&apos;d explain it to a new hire.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] p-6 sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted mb-4">
            Revenue OS runs
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="text-[15px] font-semibold text-text mb-5"
          >
            Instruction saved.
          </motion.p>

          <ol className="space-y-0">
            {parsedSteps.map((s, i) => (
              <motion.li
                key={`${s.label}-${i}`}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="flex items-center gap-3 py-2 border-b border-[#E5E5E5] last:border-0"
              >
                <span
                  className={
                    "w-1.5 h-1.5 rounded-full shrink-0 " +
                    (s.kind === "trigger"
                      ? "bg-black"
                      : s.kind === "action"
                        ? "bg-accent"
                        : s.kind === "stop"
                          ? "bg-text-muted"
                          : "bg-[#D4D4D4]")
                  }
                />
                <span
                  className={
                    "text-[15px] " +
                    (s.kind === "wait"
                      ? "text-text-muted"
                      : s.kind === "stop"
                        ? "text-text-muted"
                        : "text-text font-medium")
                  }
                >
                  {s.label}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>

      {/* Traditional CRM vs Revenue OS */}
      <div>
        <div className="text-center mb-10">
          <h3 className="text-[26px] sm:text-[32px] leading-[1.15] tracking-[-0.03em] font-bold mb-3">
            Your instructions become your sales process.
          </h3>
          <p className="text-[16px] text-text-secondary max-w-[620px] mx-auto">
            Every other tool asks you to build a workflow. Revenue OS asks you how you sell.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Traditional */}
          <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted mb-6">
              Traditional CRM
            </p>
            <div className="space-y-1">
              {traditionalSteps.map((s, i) => (
                <p
                  key={i}
                  className={
                    s.depth === 0
                      ? "text-[11px] uppercase tracking-[0.1em] text-text-muted pt-3 first:pt-0"
                      : "text-[15px] text-text-secondary pl-4 border-l border-[#E5E5E5] ml-0.5 py-0.5"
                  }
                >
                  {s.text}
                </p>
              ))}
            </div>
            <p className="mt-6 pt-5 border-t border-[#E5E5E5] text-[14px] text-text-muted">
              Fourteen fields to say one thing.
            </p>
          </div>

          {/* Revenue OS */}
          <div className="rounded-2xl bg-black text-white p-6 sm:p-8 flex flex-col">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50 mb-6">
              Revenue OS
            </p>
            <p className="text-[19px] sm:text-[22px] leading-[1.5]">
              &ldquo;When someone gets a quote and doesn&apos;t buy, check back in two days. If they
              still haven&apos;t responded, try once more three days later.&rdquo;
            </p>
            <div className="mt-auto pt-6 flex items-baseline justify-between">
              <span className="text-[13px] text-white/50">One sentence.</span>
              <span className="text-[15px] font-semibold text-accent">Done.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
