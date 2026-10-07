"use client";

import { motion } from "framer-motion";

const attributes = [
  { label: "Last purchase", value: "₦85,000" },
  { label: "Last conversation", value: "\u201CI'll think about it.\u201D" },
  { label: "Bought", value: "47 days ago" },
  { label: "Typical purchase cycle", value: "42 days" },
  { label: "Favourite category", value: "Dresses" },
  { label: "Open opportunity", value: "New collection" },
];

export function MemoryCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-[880px] rounded-2xl border border-[#E5E5E5] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden"
    >
      <div className="grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        {/* Customer record */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-11 h-11 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[14px] font-semibold text-text">
              SO
            </span>
            <div>
              <p className="text-[17px] font-semibold text-text leading-tight">Sarah Okafor</p>
              <p className="text-[13px] text-text-muted">Customer since 2024</p>
            </div>
          </div>

          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {attributes.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.35 }}
              >
                <dt className="text-[11px] uppercase tracking-[0.12em] text-text-muted mb-1">
                  {a.label}
                </dt>
                <dd className="text-[16px] text-text">{a.value}</dd>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* AI read */}
        <div className="p-6 sm:p-8 bg-[#FAFAFA] border-t md:border-t-0 md:border-l border-[#E5E5E5] flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
              AI
            </span>
          </div>
          <p className="text-[17px] sm:text-[19px] leading-[1.5] text-text">
            Sarah is <span className="font-semibold">5 days overdue</span> for her usual purchase
            cycle.
          </p>
          <p className="text-[14px] text-text-secondary mt-3">
            She bought dresses twice before, and the new collection just landed.
          </p>
          <div className="mt-auto pt-6">
            <span className="inline-flex rounded-lg bg-black px-5 py-2.5 text-[14px] font-semibold text-white">
              Follow up
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
