"use client";

import { motion } from "framer-motion";

const rungs = [
  "Start manually",
  "Let it suggest",
  "Approve its actions",
  "Give it instructions",
  "Let it run automatically",
];

export function TrustLadder() {
  return (
    <ol className="mx-auto max-w-[720px] space-y-3">
      {rungs.map((rung, i) => {
        const progress = (i + 1) / rungs.length;
        const isLast = i === rungs.length - 1;
        return (
          <motion.li
            key={rung}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.09, duration: 0.4 }}
            className="flex items-center gap-4"
          >
            <span className="text-[12px] tabular-nums text-text-muted w-5 shrink-0">
              {i + 1}
            </span>
            <div
              className={
                "relative flex-1 rounded-xl px-5 py-4 overflow-hidden " +
                (isLast ? "bg-black" : "border border-[#E5E5E5] bg-white")
              }
            >
              {/* Progressive fill */}
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: `${progress * 100}%` }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 + i * 0.09, duration: 0.6, ease: "easeOut" }}
                className={
                  "absolute inset-y-0 left-0 " +
                  (isLast ? "bg-white/10" : "bg-accent-soft")
                }
                aria-hidden="true"
              />
              <span
                className={
                  "relative text-[16px] sm:text-[17px] " +
                  (isLast ? "font-semibold text-white" : "text-text")
                }
              >
                {rung}
              </span>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
