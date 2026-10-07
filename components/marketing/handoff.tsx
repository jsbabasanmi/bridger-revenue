"use client";

import { motion } from "framer-motion";

const iconProps = { className: "w-5 h-5", viewBox: "0 0 24 24", "aria-hidden": true } as const;

const RULES = [
  {
    title: "Haggling past your floor price",
    body: "It holds your line on price. The moment a customer pushes below the floor you set, the negotiation is yours.",
    icon: (
      <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={1.7}>
        <path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0l-6.4-6.4a2 2 0 01-.6-1.4V4a2 2 0 012-2h8.8a2 2 0 011.4.6l4.8 4.8a2 2 0 010 2.8z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7.5" cy="7.5" r="1.3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Complaints",
    body: "An unhappy customer gets a human, not an automated apology.",
    icon: (
      <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={1.7}>
        <path d="M21 11.5a8.4 8.4 0 01-9 8.4 9 9 0 01-3.8-.8L3 21l1.9-4.9A8.4 8.4 0 013 11.5a8.4 8.4 0 019-8.4 8.4 8.4 0 019 8.4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 13.5a3.5 3.5 0 005 0" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Unusual requests",
    body: "Anything outside your catalogue and rules — custom work, bulk deals, anything odd — is flagged and handed back.",
    icon: (
      <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={1.7}>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.6" />
      </svg>
    ),
  },
  {
    title: "Low confidence",
    body: "If it doesn't have reliable information, it asks you instead of guessing.",
    icon: (
      <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={1.7}>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.6 9.4a2.5 2.5 0 114.4 1.6c-.6.7-1.5 1-1.5 2.1" strokeLinecap="round" />
        <circle cx="12.4" cy="16.6" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export function Handoff() {
  return (
    <div className="mx-auto max-w-[880px]">
      <p className="text-[16px] sm:text-[17px] leading-[1.6] text-text-secondary mb-8 max-w-[640px]">
        Revenue OS is deliberately cautious. Some conversations should never be handled by
        software — and those come straight to you:
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {RULES.map((rule, i) => {
          const highlighted = i === 0;
          return (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={
                "rounded-2xl p-6 flex flex-col " +
                (highlighted
                  ? "bg-black text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                  : "border border-[#E5E5E5] bg-white")
              }
            >
              <span
                className={
                  "w-10 h-10 rounded-full flex items-center justify-center mb-5 " +
                  (highlighted ? "bg-white/10 text-accent" : "bg-[#F5F5F5] text-text")
                }
              >
                {rule.icon}
              </span>
              <h3
                className={
                  "text-[17px] sm:text-[18px] font-bold tracking-[-0.02em] mb-2.5 " +
                  (highlighted ? "text-white" : "text-text")
                }
              >
                {rule.title}
              </h3>
              <p
                className={
                  "text-[14px] sm:text-[15px] leading-[1.6] " +
                  (highlighted ? "text-white/65" : "text-text-secondary")
                }
              >
                {rule.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
