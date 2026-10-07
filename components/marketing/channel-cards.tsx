"use client";

import { motion } from "framer-motion";

const iconProps = { className: "w-6 h-6", viewBox: "0 0 24 24", "aria-hidden": true } as const;

const CHANNELS = [
  {
    name: "WhatsApp Business",
    color: "#25D366",
    icon: (
      <svg {...iconProps} fill="currentColor">
        <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 2a8 8 0 016.7 12.4l-.3.5.7 2.6-2.7-.7-.5.3A8 8 0 0112 4zm-3.3 4c-.2 0-.5.1-.7.4-.3.3-.9 1-.9 2.2 0 1.3 1 2.6 1.1 2.7.2.2 1.8 2.8 4.5 3.8 2.2.8 2.7.6 3.2.6.5-.1 1.5-.7 1.8-1.3.2-.6.2-1.1.1-1.3-.1-.1-.3-.2-.6-.4l-1.5-.7c-.2-.1-.4-.1-.5.1l-.5.7c-.1.2-.3.2-.5.1-.2-.1-.9-.4-1.8-1.2-.7-.6-1.1-1.4-1.3-1.6-.1-.2 0-.3.1-.4l.4-.5c.1-.2.1-.3 0-.5l-.6-1.5c-.2-.5-.4-.4-.5-.4h-.5z" />
      </svg>
    ),
    body: "Answer product questions, confirm availability and keep checkout moving without leaving a customer waiting.",
  },
  {
    name: "Facebook Business",
    color: "#1877F2",
    icon: (
      <svg {...iconProps} fill="currentColor">
        <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
      </svg>
    ),
    body: "Bring Messenger questions into one flow so every customer gets a timely, consistent response.",
  },
  {
    name: "Instagram Business",
    color: "#E4405F",
    icon: (
      <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
    body: "Keep up with DMs and story replies with fast answers grounded in your products and policies.",
  },
  {
    name: "Email",
    color: "#5F5F5F",
    icon: (
      <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={1.7}>
        <rect x="2.5" y="5" width="19" height="14" rx="3" />
        <path d="M3.5 7l7.4 5.3a2 2 0 002.2 0L20.5 7" strokeLinecap="round" />
      </svg>
    ),
    body: "Enquiries that arrive by email get the same capture, reply and follow-up treatment.",
  },
];

export function ChannelCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
      {CHANNELS.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: i * 0.07, duration: 0.4 }}
          className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
        >
          <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-[#FAFAFA]" style={{ color: c.color }}>
            {c.icon}
          </span>
          <h3 className="mt-5 text-[17px] font-bold tracking-[-0.02em] text-text">{c.name}</h3>
          <p className="mt-2 text-[14px] leading-[1.6] text-text-secondary">{c.body}</p>
        </motion.div>
      ))}
    </div>
  );
}