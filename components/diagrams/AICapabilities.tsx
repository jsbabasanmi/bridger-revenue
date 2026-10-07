"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Responds & qualifies",
    description: "AI answers instantly, qualifies the customer, and knows your stock and pricing.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Quotes & schedules",
    description: "AI generates quotations and schedules follow-up — escalating to your team when needed.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Reads the mood",
    description: "AI analyses every reply and flags unhappy customers before they leave.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function AICapabilities() {
  return (
    <section className="py-24 bg-white" aria-labelledby="ai-heading">
      <div className="container-custom max-w-[1100px]">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-text-muted mb-4" id="ai-heading">
            Intelligence Throughout
          </p>
          <h2 className="text-[42px] leading-[1.1] tracking-[-0.035em] font-bold mb-6">
            AI in every step — not just a chatbot
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <motion.article
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl hover:border-black/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {cap.icon}
              </div>
              <h3 className="text-[22px] leading-[1.2] font-bold mb-3">{cap.title}</h3>
              <p className="text-[16px] leading-[1.6] text-text-secondary">{cap.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12 text-[18px] leading-[1.6] text-text"
        >
          The AI does the heavy lifting. Your team builds the relationships.
        </motion.p>
      </div>
    </section>
  );
}