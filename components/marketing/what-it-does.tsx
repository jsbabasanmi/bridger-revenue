"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

const reveal = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration: 0.45, ease: "easeOut" },
});

function Num({ n }: { n: number }) {
  return (
    <span className="inline-flex w-9 h-9 shrink-0 items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-[13px] font-semibold text-text">
      {n}
    </span>
  );
}

function Row({
  n,
  title,
  kicker,
  children,
  reverse = false,
}: {
  n: number;
  title: string;
  kicker?: ReactNode;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      <motion.div className={reverse ? "lg:order-2" : ""} {...reveal()}>
        <Num n={n} />
        <h3 className="mt-5 text-[24px] sm:text-[30px] lg:text-[32px] leading-[1.12] tracking-[-0.03em] font-bold text-text">
          {title}
        </h3>
        {kicker ? (
          <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.6] text-text-secondary max-w-[440px]">
            {kicker}
          </p>
        ) : null}
      </motion.div>
      <motion.div className={reverse ? "lg:order-1" : ""} {...reveal(0.08)}>
        {children}
      </motion.div>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="flex justify-center py-2.5" aria-hidden>
      <svg width="16" height="26" viewBox="0 0 16 26" fill="none">
        <path d="M8 0v20M8 20l-5.5-5.5M8 20l5.5-5.5" stroke="#D4D4D4" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-[#E5E5E5] bg-white px-3 py-1.5 text-[13px] text-text-secondary">
      {children}
    </span>
  );
}

/* ── 1. Captures your leads ───────────────────────────────── */

const RECORD_FIELDS = [
  ["Interested in", "Brown two-piece · medium"],
  ["Their question", "“Can it arrive before Friday?”"],
  ["Buying intent", "High"],
  ["Objection", "Price"],
  ["Location", "Lekki, Lagos"],
  ["Previous interactions", "Bought twice"],
  ["Where they came from", "Instagram DM"],
];

function CaptureGraphic() {
  return (
    <div className="mx-auto w-full max-w-[460px]">
      {/* Enquiry */}
      <div className="rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted">
            WhatsApp Business
          </span>
        </div>
        <p className="text-[15px] leading-[1.5] text-text">
          Hi — do you have the brown two-piece in a medium? I need it before Friday, and how much is
          delivery to Lekki?
        </p>
      </div>

      <ArrowDown />

      {/* Customer record */}
      <div className="rounded-2xl border border-[#E5E5E5] bg-white p-5 sm:p-6 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#F0F0F0]">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[12px] font-semibold text-text">
              AO
            </span>
            <div>
              <p className="text-[15px] font-semibold text-text leading-tight">Amara Okoye</p>
              <p className="text-[12px] text-text-muted">Customer record created</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[12px] text-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Understood
          </span>
        </div>

        <dl className="mt-4 space-y-2.5">
          {RECORD_FIELDS.map(([label, value], i) => (
            <motion.div
              key={label}
              className="flex items-baseline justify-between gap-4"
              {...reveal(0.15 + i * 0.05)}
            >
              <dt className="text-[11px] uppercase tracking-[0.1em] text-text-muted shrink-0">
                {label}
              </dt>
              <dd className="text-[14px] text-text text-right">{value}</dd>
            </motion.div>
          ))}
        </dl>
      </div>

      <p className="mt-4 text-center text-[14px] italic text-text-muted">
        So valuable enquiries don’t disappear inside chat histories.
      </p>
    </div>
  );
}

/* ── 2. Makes sure leads get followed up ──────────────────── */

const FOLLOWUP_STEPS = ["Day 1 → Follow up", "Day 3 → Follow up again", "Day 7 → Final follow-up"];

function FollowUpGraphic() {
  return (
    <div className="mx-auto w-full max-w-[460px]">
      {/* Quotation goes quiet */}
      <div className="rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] p-5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted">
            Quotation sent
          </span>
          <span className="text-[12px] text-text-muted">3 days ago</span>
        </div>
        <p className="mt-2 text-[15px] text-text">Linen two-piece · ₦42,000</p>
        <div className="mt-3 flex items-center gap-2 text-[13px] text-text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4D4D4]" />
          No reply since.
        </div>
      </div>

      <ArrowDown />

      {/* The rule */}
      <div className="rounded-2xl border border-[#E5E5E5] bg-white p-5 sm:p-6 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted">
            Follow-up rule
          </span>
        </div>

        <ol className="relative pl-6 space-y-4">
          <span
            className="absolute left-[5px] top-2 bottom-2 w-px bg-[#E5E5E5]"
            aria-hidden
          />
          {FOLLOWUP_STEPS.map((step, i) => (
            <motion.li key={step} className="relative" {...reveal(0.15 + i * 0.1)}>
              <span
                className="absolute -left-6 top-[6px] w-2.5 h-2.5 rounded-full border-2 border-white"
                style={{ background: i === FOLLOWUP_STEPS.length - 1 ? "#E89110" : "#111111" }}
                aria-hidden
              />
              <p className="text-[15px] font-medium text-text">{step}</p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-6 pt-5 border-t border-[#F0F0F0]">
          <p className="text-[13px] text-text-muted mb-3">Reminder goes to your salesperson.</p>
          <div className="flex flex-wrap items-center gap-2">
            <Chip>You write the exact message</Chip>
            <Chip>Or AI personalises it</Chip>
          </div>
          <p className="mt-4 text-[14px] font-semibold text-accent">You decide.</p>
        </div>
      </div>
    </div>
  );
}

/* ── 3. Helps your sales team know what to do next ────────── */

const CONTACT_TODAY = [
  ["High-intent leads", "7"],
  ["Stalled opportunities", "4"],
  ["Unanswered enquiries", "3"],
  ["Quotations awaiting response", "9"],
  ["Promised to buy later", "5"],
  ["Customers requiring attention", "2"],
];

function ContactTodayGraphic() {
  return (
    <div className="mx-auto w-full max-w-[460px] rounded-2xl border border-[#E5E5E5] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#F0F0F0] bg-[#FAFAFA]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-text-muted">
            Today’s list
          </span>
        </div>
        <span className="text-[12px] text-text-muted">30 customers</span>
      </div>

      <p className="px-5 pt-5 text-[19px] sm:text-[21px] leading-[1.35] font-semibold tracking-[-0.02em] text-text">
        “These are the customers you should contact today.”
      </p>

      <ul className="px-5 py-5">
        {CONTACT_TODAY.map(([label, count], i) => (
          <motion.li
            key={label}
            className="flex items-center justify-between gap-4 py-2.5 border-b border-[#F5F5F5] last:border-b-0"
            {...reveal(0.1 + i * 0.06)}
          >
            <span className="text-[15px] text-text">{label}</span>
            <span className="inline-flex min-w-[28px] justify-center rounded-md bg-[#FAFAFA] px-2 py-0.5 text-[13px] font-semibold text-text-secondary">
              {count}
            </span>
          </motion.li>
        ))}
      </ul>

      <div className="px-5 pb-5">
        <p className="text-[14px] italic text-text-muted">
          Less time searching for work. More time doing the work that matters.
        </p>
      </div>
    </div>
  );
}

/* ── 4. Doesn’t stop working when the customer buys ───────── */

const JOURNEY = [
  "Purchase",
  "Delivery confirmation",
  "Usage check-in",
  "Feedback",
  "Reorder reminder",
  "Loyalty",
  "Referral",
];

function JourneyGraphic() {
  return (
    <div className="mx-auto w-full max-w-[460px]">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-2.5">
        {JOURNEY.map((stage, i) => (
          <motion.span key={stage} className="flex items-center gap-2" {...reveal(i * 0.06)}>
            <span
              className={
                "inline-flex items-center rounded-full border px-3.5 py-1.5 text-[13px] " +
                (i === 4
                  ? "border-accent/40 bg-accent/10 font-semibold text-text"
                  : "border-[#E5E5E5] bg-white text-text-secondary")
              }
            >
              {stage}
            </span>
            {i < JOURNEY.length - 1 ? (
              <span className="text-[13px] text-[#C9C9C9]" aria-hidden>
                →
              </span>
            ) : null}
          </motion.span>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-[#E5E5E5] bg-white p-5 sm:p-6 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted">
            Day 45 · Reorder reminder
          </span>
          <span className="text-[12px] text-text-muted">Amara</span>
        </div>
        <p className="mt-3 text-[15px] leading-[1.5] text-text">
          “It’s about that time — would you like your usual, or the new collection?”
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Chip>An exact message you wrote</Chip>
          <Chip>Or AI-personalised</Chip>
        </div>
      </div>

      <p className="mt-4 text-center text-[14px] italic text-text-muted">
        A customer buying from you is not the end of the relationship.
      </p>
    </div>
  );
}

/* ── 5. Helps you bring old customers back ────────────────── */

const DORMANT = [
  ["30 days", "148"],
  ["60 days", "96"],
  ["90 days", "61"],
  ["180 days", "34"],
];

function ReactivateGraphic() {
  return (
    <div className="mx-auto w-full max-w-[460px]">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {DORMANT.map(([label, count], i) => (
          <motion.div
            key={label}
            className="rounded-xl border border-[#E5E5E5] bg-white px-3 py-4 text-center"
            {...reveal(i * 0.07)}
          >
            <p className="text-[22px] font-bold tracking-[-0.03em] text-text">{count}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-text-muted">{label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] px-4 py-3 text-center text-[12px] uppercase tracking-[0.12em] text-text-muted">
        Dormant customers, identified
      </div>

      <ArrowDown />

      <div className="rounded-2xl border border-accent/30 bg-white p-5 shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted">
            Reactivation campaign
          </span>
        </div>
        <p className="text-[15px] text-text">
          339 past customers, queued with a message they’ve bought from before.
        </p>
      </div>

      <p className="mt-4 text-center text-[15px] italic text-text-secondary">
        “How much revenue is sitting inside the customers we already acquired?”
      </p>
    </div>
  );
}

/* ── 6. Turns happy customers into growth ─────────────────── */

const GROWTH = ["Another purchase", "A referral", "An affiliate", "A loyal customer"];

const GROWTH_SUPPORT = [
  "Loyalty programmes",
  "Referral programmes",
  "Affiliate programmes",
  "Review requests",
  "Upselling",
  "Cross-selling",
];

function GrowthGraphic() {
  return (
    <div className="mx-auto w-full max-w-[460px]">
      <div className="rounded-2xl border border-[#E5E5E5] bg-white p-5 text-center shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
        <span className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-[#F5F5F5] text-[13px] font-semibold text-text">
          AO
        </span>
        <p className="mt-3 text-[15px] font-semibold text-text">A satisfied customer</p>
        <p className="text-[13px] text-text-muted">Bought 3 times · Replied every time</p>
      </div>

      <div className="flex flex-col items-center py-2" aria-hidden>
        <span className="w-px h-4 bg-[#D4D4D4]" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="w-px h-4 bg-[#D4D4D4]" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {GROWTH.map((outcome, i) => (
          <motion.div
            key={outcome}
            className="rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] px-4 py-3.5 text-[14px] font-medium text-text"
            {...reveal(0.1 + i * 0.07)}
          >
            {outcome}
          </motion.div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-[#E5E5E5] bg-white p-5 sm:p-6 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted mb-3">
          Revenue OS supports
        </p>
        <div className="flex flex-wrap gap-2">
          {GROWTH_SUPPORT.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
        <p className="mt-4 text-[14px] italic text-text-muted">
          So the relationship keeps producing value after the first sale.
        </p>
      </div>
    </div>
  );
}

/* ── Section ──────────────────────────────────────────────── */

export function WhatItDoes() {
  return (
    <div className="space-y-20 lg:space-y-28">
      <Row
        n={1}
        title="Captures your leads."
        kicker="Someone enquires on any connected channel. Revenue OS creates the customer record and understands what they actually want — not just what they typed."
      >
        <CaptureGraphic />
      </Row>

      <Row
        n={2}
        title="Makes sure leads get followed up."
        kicker="A customer asks for a quotation and disappears. Revenue OS reminds your salesperson, on the rule you set."
        reverse
      >
        <FollowUpGraphic />
      </Row>

      <Row
        n={3}
        title="Helps your sales team know what to do next."
        kicker="Instead of opening hundreds of chats trying to remember who needs attention, your team starts the day with a list."
      >
        <ContactTodayGraphic />
      </Row>

      <Row
        n={4}
        title="Doesn’t stop working when the customer buys."
        kicker="This is where we go beyond a traditional CRM. The sale is the start of the next one."
        reverse
      >
        <JourneyGraphic />
      </Row>

      <Row
        n={5}
        title="Helps you bring old customers back."
        kicker="You already have customers. Some simply haven’t bought in 30, 60, 90 or 180 days. Most businesses quietly forget them."
      >
        <ReactivateGraphic />
      </Row>

      <Row
        n={6}
        title="Turns happy customers into growth."
        kicker="A satisfied customer is not a closed deal. It’s the next four."
        reverse
      >
        <GrowthGraphic />
      </Row>

      <motion.p
        className="pt-4 text-center text-[18px] sm:text-[23px] leading-[1.5] tracking-[-0.02em] text-text-secondary"
        {...reveal()}
      >
        It remembers. It decides. It follows up.{" "}
        <span className="text-text font-semibold">You make the sale.</span> It learns. It does it
        again.
      </motion.p>
    </div>
  );
}
