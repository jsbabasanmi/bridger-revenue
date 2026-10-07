"use client";

import { motion } from "framer-motion";

const flywheelSteps = [
  { num: "1", title: "Marketplace generates leads", description: "Customers search for what you offer" },
  { num: "2", title: "Revenue OS converts them", description: "AI + your team close the deal" },
  { num: "3", title: "AI improves response speed", description: "Faster replies = higher conversion" },
  { num: "4", title: "Businesses grow", description: "More revenue, more capacity" },
  { num: "5", title: "More businesses join", description: "Network expands" },
  { num: "6", title: "Marketplace gets more valuable", description: "Better matches for everyone" },
];

// Node positions on the ring, as percentages of the container (start at top, clockwise).
const RING_RADIUS_PCT = 37;
const nodePositions = flywheelSteps.map((_, i) => {
  const angle = ((i * 60 - 90) * Math.PI) / 180;
  return {
    left: `${50 + RING_RADIUS_PCT * Math.cos(angle)}%`,
    top: `${50 + RING_RADIUS_PCT * Math.sin(angle)}%`,
  };
});

export function Flywheel() {
  return (
    <section className="py-24 bg-[#FAFAFA]" aria-labelledby="flywheel-heading">
      <div className="container-custom max-w-[1100px]">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-text-muted mb-4" id="flywheel-heading">
            More Than Software — A Network
          </p>
          <h2 className="text-[42px] leading-[1.1] tracking-[-0.035em] font-bold mb-6">
            The marketplace that brings you customers
          </h2>
          <p className="text-[18px] leading-[1.6] text-text-secondary max-w-[800px] mx-auto">
            Revenue OS isn&apos;t just your inbox. It&apos;s a marketplace where customers search for products, services, and businesses across Nigeria. When someone searches for what you offer, Revenue OS routes the lead straight into your inbox — where your AI or your team takes over.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Flywheel Visual */}
          <div
            className="relative mx-auto w-full max-w-[440px] aspect-square"
            role="img"
            aria-label="Revenue OS Flywheel: a repeating six-step cycle — the marketplace generates leads, Revenue OS converts them, AI improves response speed, businesses grow, more businesses join, and the marketplace becomes more valuable."
          >
            {/* Ring + spokes (scales with the container) */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="50"
                cy="50"
                r={RING_RADIUS_PCT}
                stroke="#E5E5E5"
                strokeWidth="0.6"
                strokeDasharray="2 1.6"
              />
              {nodePositions.map((_, i) => {
                const angle = ((i * 60 - 90) * Math.PI) / 180;
                const cx = 50 + RING_RADIUS_PCT * Math.cos(angle);
                const cy = 50 + RING_RADIUS_PCT * Math.sin(angle);
                // Stop the spoke short of both the centre disc and the node box.
                const inner = 23;
                const outer = RING_RADIUS_PCT - 14;
                return (
                  <line
                    key={i}
                    x1={50 + inner * Math.cos(angle)}
                    y1={50 + inner * Math.sin(angle)}
                    x2={50 + outer * Math.cos(angle)}
                    y2={50 + outer * Math.sin(angle)}
                    stroke="#E5E5E5"
                    strokeWidth="0.5"
                  />
                );
              })}
              {/* Arrowheads on the ring */}
              {[30, 150, 270].map((deg) => {
                const angle = ((deg - 90) * Math.PI) / 180;
                return (
                  <circle
                    key={deg}
                    cx={50 + RING_RADIUS_PCT * Math.cos(angle)}
                    cy={50 + RING_RADIUS_PCT * Math.sin(angle)}
                    r="1.1"
                    fill="#D4D4D4"
                  />
                );
              })}
            </svg>

            {/* Centre disc — wrapper owns the centering transform so motion never clobbers it */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] aspect-square">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 110 }}
                className="w-full h-full rounded-full flex flex-col items-center justify-center text-center"
                style={{ background: "linear-gradient(135deg, #000 0%, #1a1a1a 100%)" }}
              >
                <span className="text-3xl sm:text-4xl mb-1" aria-hidden="true">🔄</span>
                <span className="font-bold text-white text-sm sm:text-base leading-tight px-2">
                  Revenue OS
                </span>
                <span className="text-[10px] sm:text-xs text-white/60">Flywheel</span>
              </motion.div>
            </div>

            {/* Centre pulse */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] aspect-square pointer-events-none">
              <motion.div
                className="w-full h-full rounded-full border-2 border-black/10"
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />
            </div>

            {/* Step nodes */}
            {flywheelSteps.map((step, index) => (
              <div
                key={step.num}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[25%] aspect-square"
                style={nodePositions[index]}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.07, duration: 0.4, type: "spring", stiffness: 120 }}
                  className="w-full h-full rounded-2xl bg-white border-2 border-[#E5E5E5] flex flex-col items-center justify-center text-center p-1.5 sm:p-2"
                >
                  <span className="text-lg sm:text-2xl font-bold leading-none mb-1">{step.num}</span>
                  <span className="text-[9px] sm:text-[11px] font-semibold text-text leading-tight">
                    {step.title}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Step Descriptions */}
          <ol className="space-y-4">
            {flywheelSteps.map((step, index) => (
              <motion.li
                key={step.num}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="flex gap-4 p-4 bg-white border border-[#E5E5E5] rounded-xl hover:border-black/20 transition-colors"
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #000 0%, #1a1a1a 100%)" }}
                >
                  {step.num}
                </span>
                <span>
                  <span className="block font-semibold text-text mb-0.5">{step.title}</span>
                  <span className="block text-sm text-text-muted">{step.description}</span>
                </span>
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-14 text-[18px] leading-[1.6] text-text"
        >
          <strong className="font-semibold">The more businesses join, the more customers everyone gets.</strong>
        </motion.p>
      </div>
    </section>
  );
}
