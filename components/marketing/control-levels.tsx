"use client";

import { motion } from "framer-motion";

export function ControlLevels() {
  return (
    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
      {/* You do it */}
      <Level
        index={1}
        title="You decide."
        subtitle="Do it yourself"
        description="Revenue OS finds the opportunity and hands it to you. You use exactly your own message."
        delay={0}
      >
        <div className="rounded-xl border border-[#E5E5E5] bg-white p-5">
          <p className="text-[11px] uppercase tracking-[0.14em] text-text-muted mb-3">Today</p>
          <p className="text-[17px] font-semibold text-text mb-4">
            12 customers need follow-up
          </p>
          <div className="space-y-2">
            {["Sarah O.", "Emeka N.", "Chioma B."].map((n) => (
              <div
                key={n}
                className="flex items-center justify-between py-1.5 border-b border-[#EEEEEE] last:border-0"
              >
                <span className="text-[14px] text-text-secondary">{n}</span>
                <span className="text-[12px] text-text-muted">Ready</span>
              </div>
            ))}
          </div>
        </div>
      </Level>

      {/* Work with AI */}
      <Level
        index={2}
        title="Work with AI."
        subtitle="Review its recommendations"
        description="Revenue OS prepares the action and the message. You review its recommendations before anything goes out."
        delay={0.08}
      >
        <div className="rounded-xl border border-[#E5E5E5] bg-white p-5">
          <p className="text-[15px] font-semibold text-text mb-1">Sarah is likely ready to buy again</p>
          <p className="text-[13px] text-text-muted mb-4">Suggested message</p>
          <p className="rounded-lg bg-[#FAFAFA] p-3 text-[14px] leading-[1.5] text-text">
            &ldquo;Hi Sarah, our new collection just arrived&hellip;&rdquo;
          </p>
          <div className="mt-4 flex gap-2">
            <span className="rounded-lg bg-black px-3.5 py-1.5 text-[13px] font-semibold text-white">
              Send
            </span>
            <span className="rounded-lg border border-[#E5E5E5] px-3.5 py-1.5 text-[13px] font-medium text-text">
              Edit
            </span>
          </div>
        </div>
      </Level>

      {/* Let AI handle it */}
      <Level
        index={3}
        title="Let AI handle it."
        subtitle="Give it permission to act"
        description="Give Revenue OS standing instructions and it keeps working without asking you each time. It acts within the boundaries you set."
        delay={0.16}
      >
        <div className="rounded-xl bg-black p-5 text-white">
          <p className="text-[11px] uppercase tracking-[0.14em] text-white/50 mb-3">
            Standing instruction
          </p>
          <p className="text-[15px] leading-[1.5] mb-5">
            &ldquo;Follow up with customers who haven&apos;t purchased in 60 days.&rdquo;
          </p>
          <div className="flex items-center gap-2 text-[13px] text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Running continuously
          </div>
        </div>
      </Level>
    </div>
  );
}

function Level({
  index,
  title,
  subtitle,
  description,
  children,
  delay,
}: {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.45 }}
      className="flex flex-col"
    >
      <div className="mb-5">
        <span className="text-[12px] tabular-nums text-text-muted">0{index}</span>
        <h3 className="text-[24px] sm:text-[28px] leading-[1.15] tracking-[-0.02em] font-bold mt-1 mb-1">
          {title}
        </h3>
        <p className="text-[13px] font-medium text-accent mb-3">{subtitle}</p>
        <p className="text-[15px] leading-[1.6] text-text-secondary">{description}</p>
      </div>
      {children}
    </motion.div>
  );
}
