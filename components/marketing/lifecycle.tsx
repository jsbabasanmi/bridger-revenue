"use client";

import { motion } from "framer-motion";

const stages = [
  { name: "First enquiry", prompt: "\u201CWhat\u2019s the price?\u201D", body: "Captured the moment they make contact." },
  { name: "Sale", prompt: "Ready to buy?", body: "Quote sent, answered, closed." },
  { name: "Follow-up", prompt: "Did they accept?", body: "Chases the quotation instead of letting it die." },
  { name: "Delivery", prompt: "Did it arrive?", body: "Confirms delivery and checks back in." },
  { name: "Repeat purchase", prompt: "Time to reorder?", body: "Reminds them around their usual cycle." },
  { name: "Loyalty", prompt: "Happy again?", body: "Keeps the relationship working after the sale." },
  { name: "Referral", prompt: "Would they tell a friend?", body: "Turns good experiences into growth." },
];

export function Lifecycle() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-y-8">
      {stages.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
          className="relative border-t border-[#E5E5E5] pt-6 pr-4"
        >
          <span
            className={
              "absolute -top-1 left-0 w-2 h-2 rounded-full " +
              (i === stages.length - 1 ? "bg-accent" : "bg-black")
            }
          />
          <p className="text-[11px] tabular-nums text-text-muted mb-2">
            {String(i + 1).padStart(2, "0")}
          </p>
          <p className="text-[16px] font-semibold text-text leading-tight mb-2">{s.name}</p>
          <p className="text-[13px] text-text-secondary mb-2">{s.prompt}</p>
          <p className="text-[12px] leading-[1.5] text-text-muted">{s.body}</p>
        </motion.div>
      ))}
    </div>
  );
}