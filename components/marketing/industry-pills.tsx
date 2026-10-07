"use client";

import { motion } from "framer-motion";

const INDUSTRIES = [
  { label: "Retail", emoji: "🛍️" },
  { label: "Salons", emoji: "💅" },
  { label: "Real estate", emoji: "🏠" },
  { label: "Restaurants", emoji: "🍽️" },
  { label: "Distributors", emoji: "📦" },
  { label: "Car dealers", emoji: "🚗" },
  { label: "Clinics & pharmacies", emoji: "🏥" },
  { label: "Hotels", emoji: "🏨" },
  { label: "Schools", emoji: "🎓" },
  { label: "Law firms", emoji: "⚖️" },
  { label: "Construction", emoji: "🏗️" },
  { label: "Equipment suppliers", emoji: "🔧" },
];

export function IndustryPills() {
  return (
    <div className="mx-auto max-w-[900px]">
      <ul className="flex flex-wrap justify-center gap-3">
        {INDUSTRIES.map((industry, i) => (
          <motion.li
            key={industry.label}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.03, duration: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-4 py-2.5 text-[14px] text-text"
          >
            <span aria-hidden="true">{industry.emoji}</span>
            {industry.label}
          </motion.li>
        ))}
      </ul>

      <p className="mt-10 text-center text-[15px] text-text-muted italic">
        If your customers reach you on WhatsApp, Instagram or email, Revenue OS is for you.
      </p>
    </div>
  );
}
