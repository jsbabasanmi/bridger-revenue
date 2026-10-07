"use client";

import { motion, type MotionProps } from "framer-motion";

const reveal = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration: 0.45, ease: "easeOut" },
});

/* ── PAIN: you are losing sales ───────────────────────────── */

const SAID = [
  "How much?",
  "Is this available?",
  "Can you deliver?",
  "Send your account details.",
  "I’ll get back to you.",
  "Let me discuss with my partner.",
  "I’ll buy next week.",
];

const UNANSWERED = [
  "Did someone follow up with them?",
  "Did anyone remember why they didn’t buy?",
  "Did someone contact them again at the right time?",
  "Or did the conversation simply disappear into WhatsApp?",
];

const ASKED = 20;
const BOUGHT = 3;

function TwentyGraphic() {
  return (
    <div className="mx-auto w-full max-w-[720px] rounded-2xl border border-[#E5E5E5] bg-white p-6 sm:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted mb-6">
        The last 20 people who asked
      </p>

      <div className="flex flex-wrap gap-2.5 sm:gap-3">
        {Array.from({ length: ASKED }).map((_, i) => {
          const bought = i < BOUGHT;
          return (
            <motion.span
              key={i}
              className={
                "w-6 h-6 sm:w-7 sm:h-7 rounded-full " +
                (bought
                  ? "bg-accent"
                  : "border border-dashed border-[#D4D4D4] bg-[#FAFAFA]")
              }
              {...reveal(0.05 + i * 0.025)}
            />
          );
        })}
      </div>

      <div className="mt-7 grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="rounded-xl bg-[#FAFAFA] px-5 py-4">
          <p className="text-[26px] font-bold tracking-[-0.03em] text-accent">{BOUGHT} bought</p>
          <p className="mt-1 text-[13px] text-text-muted">You know exactly what happened here.</p>
        </div>
        <div className="rounded-xl border border-dashed border-[#D4D4D4] px-5 py-4">
          <p className="text-[26px] font-bold tracking-[-0.03em] text-text-secondary">
            {ASKED - BOUGHT} vanished
          </p>
          <p className="mt-1 text-[13px] text-text-muted">Nobody knows what happened here.</p>
        </div>
      </div>

      <div className="mt-7 pt-6 border-t border-[#F0F0F0]">
        <div className="flex flex-wrap gap-2">
          {SAID.map((line) => (
            <span
              key={line}
              className="inline-flex rounded-lg border border-[#E5E5E5] bg-[#FAFAFA] px-3 py-1.5 text-[13px] text-text-secondary"
            >
              {line}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function UnansweredGraphic() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {UNANSWERED.map((q, i) => (
        <motion.div
          key={q}
          className="rounded-2xl border border-dashed border-[#D4D4D4] bg-[#FAFAFA] p-5"
          {...reveal(0.08 * i)}
        >
          <span className="text-[13px] font-mono text-text-muted">? </span>
          <p className="mt-2 text-[16px] leading-[1.45] text-text">{q}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function LosingSales() {
  return (
    <div className="space-y-12 lg:space-y-16">
      <TwentyGraphic />
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] gap-10 lg:gap-16 items-start">
        <div>
          <p className="text-[22px] sm:text-[26px] leading-[1.35] tracking-[-0.02em] text-text">
            You don’t necessarily have a lead-generation problem.
          </p>
          <p className="mt-4 text-[18px] sm:text-[20px] leading-[1.45] text-text-secondary">
            You may have a follow-up, customer management and revenue-leakage problem.
          </p>
          <p className="mt-6 text-[15px] leading-[1.6] text-text-muted">
            And more importantly — what happened to everyone who didn’t buy?
          </p>
        </div>
        <UnansweredGraphic />
      </div>
    </div>
  );
}

/* ── WHY: running on memory ───────────────────────────────── */

const SYMPTOMS = [
  "Leads are scattered across WhatsApp, Instagram, phone calls — and different salespeople.",
  "Salespeople forget to follow up.",
  "A customer asks a question someone already answered yesterday.",
  "A quotation is sent. Nobody checks whether the customer accepted it.",
  "A customer says “I’ll buy next month.” Nobody remembers next month.",
  "Someone buys today. Nobody knows when they’ll need the product again.",
  "A customer has a great experience. Nobody asks for a referral.",
  "Another customer is unhappy — and still gets promotional messages.",
];

const OWNER_QUESTIONS = [
  "What happened to this customer?",
  "Did anyone follow up?",
  "Why didn’t we close this person?",
  "Who is handling this lead?",
  "Which customers haven’t bought from us recently?",
];

export function RunningOnMemory() {
  return (
    <div className="space-y-12 lg:space-y-16">
      <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-6 lg:gap-14 items-start">
        <motion.ol className="space-y-3" {...reveal()}>
          {SYMPTOMS.map((s, i) => (
            <motion.li
              key={s}
              className="flex items-start gap-4 rounded-xl border border-[#E5E5E5] bg-white px-5 py-4"
              {...reveal(0.04 * i)}
            >
              <span className="mt-[7px] w-2 h-2 shrink-0 rounded-full bg-[#D4D4D4]" aria-hidden />
              <span className="text-[15px] sm:text-[16px] leading-[1.5] text-text-secondary">{s}</span>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          className="rounded-2xl bg-black p-6 sm:p-8"
          {...reveal(0.12)}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50 mb-6">
            And as the owner, you end up asking
          </p>
          <ul className="space-y-4">
            {OWNER_QUESTIONS.map((q, i) => (
              <motion.li key={q} className="flex items-start gap-3" {...reveal(0.16 + i * 0.07)}>
                <span className="mt-[9px] w-1.5 h-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span className="text-[16px] sm:text-[18px] leading-[1.45] text-white/85">“{q}”</span>
              </motion.li>
            ))}
          </ul>
          <p className="mt-8 pt-6 border-t border-white/10 text-[15px] leading-[1.6] text-white/60">
            At some point, you become the system holding the business together.
          </p>
        </motion.div>
      </div>

      <motion.p
        className="text-center text-[24px] sm:text-[32px] lg:text-[36px] leading-[1.2] tracking-[-0.03em] font-bold text-text"
        {...reveal()}
      >
        That’s dangerous. <span className="text-text-muted">Your memory should not be your CRM.</span>
      </motion.p>
    </div>
  );
}
