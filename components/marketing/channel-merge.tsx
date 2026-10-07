"use client";

import { motion } from "framer-motion";

const channels = ["WhatsApp", "Instagram", "Facebook", "SMS", "Email"];

export function ChannelMerge() {
  return (
    <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 lg:gap-4 items-center">
      {/* Channels */}
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted mb-4">
          Where your customers are
        </p>
        <div className="flex flex-wrap gap-2">
          {channels.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
              className="inline-flex items-center rounded-lg border border-[#E5E5E5] bg-white px-3 py-2 text-[13px] font-medium text-text"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>

      <Connector />

      {/* One memory */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
        className="rounded-xl bg-black text-white px-6 py-5 text-center"
      >
        <p className="text-[15px] font-semibold">One customer memory</p>
        <p className="text-[12px] text-white/60 mt-1">Every conversation, purchase and promise</p>
      </motion.div>

      <Connector />

      {/* AI sales staff */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="rounded-xl border border-[#E5E5E5] bg-white px-6 py-5 text-center"
      >
        <p className="text-[15px] font-semibold text-text">AI sales staff</p>
        <p className="text-[12px] text-text-muted mt-1">Knows what to do next</p>
      </motion.div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex items-center justify-center py-1 lg:py-0" aria-hidden="true">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="text-text-muted text-lg rotate-90 lg:rotate-0"
      >
        →
      </motion.span>
    </div>
  );
}
