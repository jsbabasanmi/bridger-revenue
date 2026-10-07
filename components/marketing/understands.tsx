"use client";

import { motion } from "framer-motion";

const WAVEFORM = [4, 9, 6, 14, 8, 12, 5, 10, 7, 13, 6, 9, 4, 7, 5];

const iconProps = { className: "w-5 h-5", viewBox: "0 0 24 24", "aria-hidden": true } as const;

const ABILITIES = [
  {
    title: "Voice notes",
    body: "A customer sends a voice note. Revenue OS reads it and answers the question inside.",
    icon: (
      <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={1.7}>
        <rect x="9" y="2.5" width="6" height="11" rx="3" />
        <path d="M5.5 11a6.5 6.5 0 0013 0M12 17.5V21" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Product photos",
    body: "A customer sends a screenshot from your page; it matches the item to your catalogue and answers with the right product and price.",
    icon: (
      <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={1.7}>
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <circle cx="8.5" cy="9.5" r="1.6" />
        <path d="M3.5 17l4.6-4a2 2 0 012.7 0l4.4 4M14 14l2-1.8a2 2 0 012.7 0l1.8 1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Documents and receipts",
    body: "It reads the text in documents and images customers send, so a payment receipt doesn't stall the conversation.",
    icon: (
      <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={1.7}>
        <path d="M14 2.5H7a2 2 0 00-2 2v15a2 2 0 002 2h10a2 2 0 002-2V7.5l-5-5z" strokeLinejoin="round" />
        <path d="M13.5 2.8V8h5M8.5 13h7M8.5 16.5h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Delivery answers",
    body: "Set your delivery rules once — areas, fees, timings — and it quotes them consistently, every time someone asks.",
    icon: (
      <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={1.7}>
        <path d="M2.5 7.5A1.5 1.5 0 014 6h9a1.5 1.5 0 011.5 1.5v8A1.5 1.5 0 0113 17H4a1.5 1.5 0 01-1.5-1.5v-8z" />
        <path d="M14.5 9.5h3.2a2 2 0 011.8 1.1l1.6 3.2a2 2 0 01.2.9v1.8a1.5 1.5 0 01-1.5 1.5h-.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="18.5" r="1.8" />
        <circle cx="17" cy="18.5" r="1.8" />
      </svg>
    ),
  },
  {
    title: "Your tone, not a robot",
    body: "Choose how your AI sounds — warm, brisk, formal. It writes the way your business writes.",
    icon: (
      <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={1.7}>
        <path d="M21 11.5a8.4 8.4 0 01-9 8.4 9 9 0 01-3.8-.8L3 21l1.9-4.9A8.4 8.4 0 013 11.5a8.4 8.4 0 019-8.4 8.4 8.4 0 019 8.4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 10h.01M12 10h.01M15.5 10h.01" strokeLinecap="round" strokeWidth={2.2} />
      </svg>
    ),
  },
];

export function Understands() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      {/* Voice note conversation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] p-5 sm:p-8"
      >
        <div className="rounded-xl border border-[#E5E5E5] bg-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#EEEEEE]">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[12px] font-semibold text-text">
                SA
              </span>
              <span>
                <span className="block text-[15px] font-semibold text-text leading-tight">
                  Sarah Anah
                </span>
                <span className="block text-[12px] text-text-muted">Customer conversation</span>
              </span>
            </div>
            <span className="flex items-center gap-1.5 text-[12px] text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
              WhatsApp
            </span>
          </div>

          {/* Voice note */}
          <div className="p-5 space-y-4">
            <div className="rounded-2xl rounded-tl-md bg-[#F4F4F5] px-4 py-3.5 max-w-[92%]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-text-muted mb-3">
                Voice note
              </p>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-text" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                    <path d="M3 1.5l7 4.5-7 4.5z" />
                  </svg>
                </span>
                <span className="flex items-end gap-[2px] h-4" aria-hidden="true">
                  {WAVEFORM.map((h, i) => (
                    <span
                      key={i}
                      className="w-[2px] rounded-full bg-[#B9B9BE]"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </span>
                <span className="ml-auto text-[12px] tabular-nums text-text-muted">0:18</span>
              </div>
              <p className="text-[13px] italic text-text-secondary">
                &ldquo;Do you have the brown one in a medium? I need it before Friday.&rdquo;
              </p>
            </div>

            {/* Reply */}
            <div className="flex justify-end">
              <div className="rounded-2xl rounded-tr-md bg-[#141418] px-4 py-3.5 max-w-[92%]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/45 mb-2">
                  Revenue OS replied
                </p>
                <p className="text-[14px] leading-[1.5] text-white">
                  Yes — the brown set is available in medium. Delivery before Friday is available
                  for your location. Shall I reserve it for you?
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Abilities */}
      <ul className="space-y-5">
        {ABILITIES.map((a, i) => (
          <motion.li
            key={a.title}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
            className="flex gap-4"
          >
            <span className="w-10 h-10 rounded-xl bg-black text-accent flex items-center justify-center shrink-0">
              {a.icon}
            </span>
            <span>
              <span className="block text-[16px] sm:text-[17px] font-semibold text-text mb-1">
                {a.title}
              </span>
              <span className="block text-[14px] sm:text-[15px] leading-[1.6] text-text-secondary">
                {a.body}
              </span>
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
