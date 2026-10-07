"use client";

import { motion } from "framer-motion";

const pieces = [
  { title: "Your CRM", body: "Knows every customer." },
  { title: "Your channels", body: "Know where they are." },
  { title: "Your memory", body: "Knows what happened." },
  { title: "Your AI salesperson", body: "Knows what to do next." },
];

export function StackUnify() {
  return (
    <div className="mx-auto max-w-[980px]">
      {/* Pieces */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pieces.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="rounded-xl border border-[#E5E5E5] bg-white p-5"
          >
            <p className="text-[15px] font-semibold text-text mb-1">{p.title}</p>
            <p className="text-[13px] text-text-secondary">{p.body}</p>
          </motion.div>
        ))}
      </div>

      {/* Converging lines */}
      <div className="relative h-14" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          fill="none"
        >
          {[12.5, 37.5, 62.5, 87.5].map((x) => (
            <path
              key={x}
              d={`M ${x} 0 V 16 Q ${x} 24 50 24`}
              stroke="#D4D4D4"
              strokeWidth="0.4"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          <path d="M 50 24 V 38" stroke="#D4D4D4" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      {/* Result */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.35, duration: 0.45 }}
        className="rounded-xl bg-black text-white px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
      >
        <div>
          <p className="text-[18px] sm:text-[20px] font-semibold">Revenue OS</p>
          <p className="text-[13px] text-white/60 mt-1">
            One system, doing what four separate things could never do together.
          </p>
        </div>
        <span className="text-[15px] font-semibold text-accent whitespace-nowrap">
          Makes it happen
        </span>
      </motion.div>
    </div>
  );
}
