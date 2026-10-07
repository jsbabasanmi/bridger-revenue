"use client";

import { motion } from "framer-motion";

const outcomes = [
  "Respond faster",
  "Follow up consistently",
  "Recover lost sales",
  "Reactivate old customers",
  "Increase repeat purchases",
  "Never forget a customer",
];

export function Outcomes() {
  return (
    <ul className="mx-auto max-w-[880px] grid sm:grid-cols-2 gap-x-12">
      {outcomes.map((o, i) => (
        <motion.li
          key={o}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: i * 0.06, duration: 0.35 }}
          className="flex items-center gap-4 py-4 border-b border-[#E5E5E5]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
          <span className="text-[17px] sm:text-[19px] text-text">{o}</span>
        </motion.li>
      ))}
    </ul>
  );
}
