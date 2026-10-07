"use client";

import { motion } from "framer-motion";

type Channel = {
  name: string;
  product: string;
  color: string;
  icon: React.ReactNode;
};

const iconProps = { className: "w-6 h-6", viewBox: "0 0 24 24", "aria-hidden": true } as const;

const CHANNELS: Channel[] = [
  {
    name: "WhatsApp",
    product: "WhatsApp Business",
    color: "#25D366",
    icon: (
      <svg {...iconProps} fill="currentColor">
        <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 2a8 8 0 016.7 12.4l-.3.5.7 2.6-2.7-.7-.5.3A8 8 0 1112 4zm-3.3 4c-.2 0-.5.1-.7.4-.3.3-.9 1-.9 2.2 0 1.3 1 2.6 1.1 2.7.2.2 1.8 2.8 4.5 3.8 2.2.8 2.7.6 3.2.6.5-.1 1.5-.7 1.8-1.3.2-.6.2-1.1.1-1.3-.1-.1-.3-.2-.6-.4l-1.5-.7c-.2-.1-.4-.1-.5.1l-.5.7c-.1.2-.3.2-.5.1-.2-.1-.9-.4-1.8-1.2-.7-.6-1.1-1.4-1.3-1.6-.1-.2 0-.3.1-.4l.4-.5c.1-.2.1-.3 0-.5l-.6-1.5c-.2-.5-.4-.4-.5-.4h-.5z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    product: "Facebook Business",
    color: "#1877F2",
    icon: (
      <svg {...iconProps} fill="currentColor">
        <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    product: "Instagram Business",
    color: "#E4405F",
    icon: (
      <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Email",
    product: "Email",
    color: "#5F5F5F",
    icon: (
      <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={1.7}>
        <rect x="2.5" y="5" width="19" height="14" rx="3" />
        <path d="M3.5 7l7.4 5.3a2 2 0 002.2 0L20.5 7" strokeLinecap="round" />
      </svg>
    ),
  },
];

/** Angle for each channel, clockwise from the top. */
const ANGLES = [-90, 0, 90, 180];
const RADIUS_PCT = 39;

function nodePosition(index: number) {
  const angle = (ANGLES[index] * Math.PI) / 180;
  return {
    left: `${50 + RADIUS_PCT * Math.cos(angle)}%`,
    top: `${50 + RADIUS_PCT * Math.sin(angle)}%`,
  };
}

export function ChannelHub() {
  return (
    <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
      {/* Radial hub */}
      <div
        className="relative mx-auto w-full max-w-[460px] aspect-square"
        role="img"
        aria-label="WhatsApp Business, Facebook Business, Instagram Business and email all flowing into one Revenue OS inbox."
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden="true"
        >
          {CHANNELS.map((_, i) => {
            const angle = (ANGLES[i] * Math.PI) / 180;
            const inner = 21;
            const outer = RADIUS_PCT - 13;
            const x1 = 50 + inner * Math.cos(angle);
            const y1 = 50 + inner * Math.sin(angle);
            const x2 = 50 + outer * Math.cos(angle);
            const y2 = 50 + outer * Math.sin(angle);
            return (
              <g key={i}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#E5E5E5" strokeWidth="0.5" />
                {/* travelling dots */}
                <circle
                  cx={50 + (inner + (outer - inner) * 0.55) * Math.cos(angle)}
                  cy={50 + (inner + (outer - inner) * 0.55) * Math.sin(angle)}
                  r="0.9"
                  fill="#E89110"
                />
              </g>
            );
          })}
        </svg>

        {/* Centre: the inbox */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-square">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, type: "spring", stiffness: 120 }}
            className="w-full h-full rounded-2xl bg-black text-white flex flex-col items-center justify-center text-center p-2"
          >
            <span className="text-[13px] sm:text-[15px] font-bold leading-tight">One inbox</span>
            <span className="text-[10px] sm:text-[11px] text-white/55 mt-0.5">Revenue OS</span>
          </motion.div>
        </div>

        {/* Pulse */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-square pointer-events-none">
          <motion.div
            className="w-full h-full rounded-2xl border-2 border-accent/30"
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
        </div>

        {/* Channel nodes */}
        {CHANNELS.map((c, i) => (
          <div
            key={c.name}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-[31%]"
            style={nodePosition(i)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-2xl border border-[#E5E5E5] bg-white px-2 py-3 flex flex-col items-center gap-1.5 text-center shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
            >
              <span style={{ color: c.color }}>{c.icon}</span>
              <span className="text-[11px] font-semibold text-text leading-tight">{c.name}</span>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Channel list */}
      <div>
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-text-muted mb-5">
          Connect once
        </p>
        <ul className="space-y-3">
          {CHANNELS.map((c, i) => (
            <motion.li
              key={c.name}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.07, duration: 0.35 }}
              className="flex items-start gap-4 rounded-xl border border-[#E5E5E5] bg-white p-4"
            >
              <span className="shrink-0 mt-0.5" style={{ color: c.color }}>
                {c.icon}
              </span>
              <span>
                <span className="block text-[15px] font-semibold text-text mb-0.5">
                  {c.product}
                </span>
                <span className="block text-[13px] text-text-secondary">
                  {c.name === "Email"
                    ? "Enquiries that arrive by email get the same treatment."
                    : `DMs, comments and enquiries answered from one place.`}
                </span>
              </span>
            </motion.li>
          ))}
        </ul>
        <p className="mt-6 text-[14px] leading-[1.6] text-text-muted">
          Turn a channel on once. Every conversation from then on is captured, answered and
          followed up.
        </p>
      </div>
    </div>
  );
}

/* ── How Revenue OS catches every inquiry ───────────────────── */

const STEPS = [
  { title: "Inquiry arrives", note: "any channel" },
  { title: "Revenue OS catches it", note: "one inbox" },
  { title: "Instant reply", note: "AI-powered" },
  { title: "Lead in CRM", note: "auto-created" },
  { title: "Customer retained", note: "followed up" },
];

export function CatchFlow() {
  return (
    <div className="mx-auto max-w-[1100px]">
      <h3 className="text-[24px] sm:text-[30px] leading-[1.15] tracking-[-0.03em] font-bold text-center mb-10">
        How Revenue OS catches every inquiry
      </h3>

      <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 items-stretch">
        {STEPS.map((step, i) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="relative rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] px-4 py-6 text-center"
          >
            <span className="block text-[13px] font-bold text-accent mb-3 tabular-nums">
              {i + 1}
            </span>
            <span className="block text-[15px] font-semibold text-text leading-tight mb-1.5">
              {step.title}
            </span>
            <span className="block text-[13px] text-text-muted">{step.note}</span>

            {i < STEPS.length - 1 ? (
              <span
                className="hidden lg:block absolute top-1/2 -right-2.5 -translate-y-1/2 text-accent text-[13px]"
                aria-hidden="true"
              >
                →
              </span>
            ) : null}
          </motion.li>
        ))}
      </ol>

      <p className="mt-8 text-center text-[14px] text-text-muted italic">
        Works for any business — product, service, clinic, hotel, school.
      </p>
    </div>
  );
}
