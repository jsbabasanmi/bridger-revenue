"use client";

import { motion } from "framer-motion";

const stages = [
  { phase: "Channels", items: ["WhatsApp", "Facebook", "Instagram", "Website", "Walk-in", "Marketplace"], color: "#6366F1" },
  { phase: "Capture", items: ["Unified Inbox"], color: "#000" },
  { phase: "Process", items: ["AI or Salesperson"], color: "#8B5CF6" },
  { phase: "Pipeline", items: ["Lead", "Qualified Lead", "Deal", "Quotation", "Sale"], color: "#F59E0B" },
  { phase: "Retention", items: ["Customer", "Automated Follow-up", "Repeat Customer", "Referral"], color: "#10B981" },
];

export function CustomerJourneyFlow() {
  return (
    <section className="py-24 bg-[#FAFAFA]" aria-labelledby="journey-heading">
      <div className="container-custom max-w-[1200px]">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-text-muted mb-4" id="journey-heading">
            Every customer, from first hello to lifelong loyalty
          </p>
          <h2 className="text-[42px] leading-[1.1] tracking-[-0.035em] font-bold mb-6">
            One system for the entire customer journey
          </h2>
          <p className="text-[18px] leading-[1.6] text-text-secondary max-w-[700px] mx-auto mb-10">
            Most tools do one of these. Revenue OS does all three — powered by AI at every step.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="relative">
          {/* Phase columns */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 relative" role="img" aria-label="Customer journey flow from channels through retention">
            
            {stages.map((stage, stageIndex) => (
              <motion.div
                key={stage.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: stageIndex * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Phase Label */}
                <div className="text-xs font-semibold uppercase tracking-wider mb-4 text-center"
                  style={{ color: stage.color }}
                >
                  {stage.phase}
                </div>

                {/* Nodes */}
                <div className="space-y-3 md:space-y-4">
                  {stage.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: stageIndex < 2 ? -20 : stageIndex > 2 ? 20 : 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ delay: stageIndex * 0.1 + itemIndex * 0.05, duration: 0.4 }}
                      className="relative"
                    >
                      <div
                        className="relative px-4 py-3 md:px-5 md:py-4 rounded-xl text-center font-medium text-sm md:text-base transition-all duration-200 hover:shadow-lg"
                        style={{
                          backgroundColor: stage.color === "#000" ? "#000" : `${stage.color}10`,
                          color: stage.color === "#000" ? "#fff" : stage.color,
                          border: stage.color === "#000" ? "none" : `2px solid ${stage.color}30`,
                        }}
                      >
                        {item}
                      </div>

                      {/* Downward connector within phase */}
                      {itemIndex < stage.items.length - 1 && (
                        <div className="absolute left-1/2 top-full -translate-x-1/2 w-0.5 h-4" style={{ background: `linear-gradient(to bottom, ${stage.color}40, ${stage.color}10)` }} />
                      )}

                      {/* Rightward connector to next phase */}
                      {stageIndex < stages.length - 1 && itemIndex === 0 && (
                        <div className="absolute right-full top-1/2 -translate-y-1/2 h-0.5 w-6 md:w-8">
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: stageIndex * 0.1 + 0.5, duration: 0.4 }}
                            className="h-full w-full origin-left"
                            style={{ background: `linear-gradient(90deg, ${stage.color}40, ${stages[stageIndex + 1].color}40)` }}
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-center mt-16 text-[18px] leading-[1.6] text-text"
          >
            <strong className="font-semibold">Nothing is lost. Every stage is tracked. Every customer accounted for.</strong>
          </motion.p>
        </div>
      </div>
    </section>
  );
}