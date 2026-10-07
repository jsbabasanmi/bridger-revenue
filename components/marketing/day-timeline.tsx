"use client";

import { motion } from "framer-motion";

const events = [
  { time: "9:00 AM", value: "7", label: "high-intent leads need attention" },
  { time: "10:30 AM", value: "4", label: "quotations haven't been followed up" },
  { time: "12:00 PM", value: "12", label: "customers approaching their reorder period" },
  { time: "2:15 PM", value: "8", label: "valuable customers have gone dormant" },
  { time: "3:45 PM", value: "3", label: "complaints need escalation" },
  { time: "5:20 PM", value: "5", label: "AI responses waiting for approval" },
];

export function DayTimeline() {
  return (
    <div className="mx-auto max-w-[760px]">
      <div className="relative">
        {/* Spine */}
        <span
          className="absolute left-[7px] top-2 bottom-2 w-px bg-[#E5E5E5]"
          aria-hidden="true"
        />

        <ul className="space-y-8">
          {events.map((e, i) => (
            <motion.li
              key={e.time}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative pl-8"
            >
              <span
                className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-black bg-white"
                aria-hidden="true"
              />
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="text-[12px] uppercase tracking-[0.12em] text-text-muted w-[68px] shrink-0">
                  {e.time}
                </span>
                <span className="text-[26px] sm:text-[32px] leading-none font-bold tabular-nums tracking-[-0.03em] text-text w-[54px] shrink-0">
                  {e.value}
                </span>
                <span className="text-[15px] sm:text-[16px] text-text-secondary">{e.label}</span>
              </div>
            </motion.li>
          ))}

          {/* Closing event */}
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="relative pl-8"
          >
            <span
              className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-accent"
              aria-hidden="true"
            />
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span className="text-[12px] uppercase tracking-[0.12em] text-text-muted w-[68px] shrink-0">
                8:00 PM
              </span>
              <span className="text-[16px] font-semibold text-text">
                Revenue OS keeps working.
              </span>
            </div>
          </motion.li>
        </ul>
      </div>
    </div>
  );
}