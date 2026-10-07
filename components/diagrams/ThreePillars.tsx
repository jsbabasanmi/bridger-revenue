"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Acquisition",
    description: "Catch every inquiry — WhatsApp, Facebook, Instagram, your website, walk-ins, and the marketplace. All in one inbox.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "#6366F1",
    metrics: ["All channels unified", "Marketplace leads", "Instant capture"],
  },
  {
    title: "Sales",
    description: "Convert to customers — instant AI replies, inventory-aware quotes, a clear pipeline, and online payments.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "#F59E0B",
    metrics: ["AI instant replies", "Smart quotations", "Pipeline visibility"],
  },
  {
    title: "Retention",
    description: "Keep them for life — automatic follow-up after every sale, and an instant alert the moment a customer sounds unhappy.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "#10B981",
    metrics: ["Auto follow-up", "Sentiment alerts", "Referral engine"],
  },
];

export function ThreePillars() {
  return (
    <section className="py-24 bg-white" aria-labelledby="pillars-heading">
      <div className="container-custom max-w-[1100px]">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-text-muted mb-4" id="pillars-heading">
            One System for the Entire Customer Journey
          </p>
          <h2 className="text-[42px] leading-[1.1] tracking-[-0.035em] font-bold mb-6">
            Acquisition. Sales. Retention.
          </h2>
          <p className="text-[18px] leading-[1.6] text-text-secondary max-w-[700px] mx-auto">
            Most tools do one of these. Revenue OS does all three — powered by AI at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl hover:border-black/20 transition-all duration-300 h-full"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: pillar.color }}
              >
                {pillar.icon}
              </div>
              <h3 className="text-[22px] leading-[1.2] font-bold mb-3">{pillar.title}</h3>
              <p className="text-[16px] leading-[1.6] text-text-secondary mb-6">{pillar.description}</p>
              
              <div className="flex flex-wrap gap-2" role="list" aria-label={`${pillar.title} capabilities`}>
                {pillar.metrics.map((metric, mIndex) => (
                  <span
                    key={metric}
                    className="text-xs px-3 py-1 rounded"
                    style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}