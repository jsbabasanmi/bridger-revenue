import Link from "next/link";

import { HeroDemo } from "@/components/marketing/hero-demo";
import { HeroChat } from "@/components/marketing/hero-chat";
import { HeroAnalyseInput } from "@/components/marketing/analyse-input";
// import { SiteAnalysis } from "@/components/marketing/site-analysis";
import { ChannelHub, CatchFlow } from "@/components/marketing/one-inbox";
import { ChannelCards } from "@/components/marketing/channel-cards";
import { WhatItDoes } from "@/components/marketing/what-it-does";
import { LosingSales, RunningOnMemory } from "@/components/marketing/pain-and-why";
import { Handoff } from "@/components/marketing/handoff";
import { Understands } from "@/components/marketing/understands";
import { IndustryPills } from "@/components/marketing/industry-pills";
import { InstructionToProcess } from "@/components/marketing/instruction-process";
import { ControlLevels } from "@/components/marketing/control-levels";
import { MemoryCard } from "@/components/marketing/memory-card";
import { Lifecycle } from "@/components/marketing/lifecycle";
import { DayTimeline } from "@/components/marketing/day-timeline";
import { StackUnify } from "@/components/marketing/stack-unify";
import { Outcomes } from "@/components/marketing/outcomes";
import { InstructionDemo } from "@/components/marketing/instruction-demo";
import { TrustLadder } from "@/components/marketing/trust-ladder";
import { SectionHeading } from "@/components/marketing/section-heading";

export default function Home() {
  return (
    <div className="bg-white">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="pt-12 sm:pt-20 pb-20 sm:pb-24 overflow-x-clip">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: the promise */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-[#FAFAFA] px-4 py-2 text-[13px] text-text-secondary mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Your AI revenue department
                              </span>
              <h1 className="text-[30px] sm:text-[44px] lg:text-[42px] leading-[1.02] tracking-[-0.04em] font-bold text-black mb-7">
                  Revenue OS remembers every customer, knows who needs attention, and keeps selling for you.

              </h1>

            <div className="space-y-1.5 mb-8">
              {["Give it instructions.", "It remembers your customers.", "It keeps selling."].map(
                (line) => (
                  <p
                    key={line}
                    className="text-[20px] sm:text-[25px] leading-[1.35] text-text-secondary"
                  >
                    {line}
                  </p>
                )
              )}
            </div>

              <p className="text-[16px] sm:text-[17px] leading-[1.6] text-text-secondary max-w-[520px] mx-auto lg:mx-0 mb-9">
                       </p>

              <div className="flex flex-col items-center lg:items-start gap-3">
                <HeroAnalyseInput />
                <p className="text-[13px] text-text-muted">Manage the customer journey from:
First enquiry → Sale → Follow-up → Delivery → Repeat purchase → Loyalty → Referral
       </p>
                <Link
                  href="/book-demo"
                  className="mt-2 text-[15px] font-semibold text-text underline underline-offset-4 decoration-[#D4D4D4] hover:decoration-black transition-colors"
                >
                Join 12 businesses growing revenues faster than ever  → 
                </Link>
              </div>
            </div>

            {/* Right: the live conversation */}
            <div>
              <HeroChat />
            </div>
          </div>

          {/* The instruction → outcome demo */}
          <div className="mt-20 sm:mt-24">
            <HeroDemo />
          </div>
        </div>
      </section>

      {/* ── HOW TO START ─────────────────────────────────────── */}
      {/* Site analysis — commented out for now. Restore this block together with the
          SiteAnalysis import at the top of this file to re-enable the URL demo.

      <section id="analyse" className="border-t border-[#E5E5E5] bg-[#FAFAFA] py-24 lg:py-32 scroll-mt-16">
        <div className="container-custom">
          <SectionHeading
            eyebrow="How to start"
            title={
              <>
                An agent in minutes.
                <br />
                <span className="text-text-muted">Drop a URL.</span>
              </>
            }
            body="A website or an Instagram — Revenue OS studies the content, builds the memory and catalogue, and is ready to talk to your customers."
          />
          <SiteAnalysis />
        </div>
      </section>

      ───────────────────────────────────────────────────────── */}

      {/* ── YOU ARE LOSING SALES (PAIN) ──────────────────────── */}
      <section className="border-t border-[#E5E5E5] bg-[#FAFAFA] py-24 lg:py-32">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Start here"
            title="You’re probably losing sales you already paid to acquire."
          />
          <LosingSales />
        </div>
      </section>

      {/* ── HERE IS WHY (WE UNDERSTAND YOUR BUSINESS) ────────── */}
      <section className="border-t border-[#E5E5E5] py-24 lg:py-32">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Here’s why"
            title="Your business is probably running on memory."
            subtitle="As your business grows, customer management becomes messy. This is what it looks like from the inside."
          />
          <RunningOnMemory />
        </div>
      </section>

      {/* ── WHAT DOES IT ACTUALLY DO ─────────────────────────── */}
      <section className="border-t border-[#E5E5E5] bg-[#FAFAFA] py-24 lg:py-32">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What it does"
            title="What does it actually do?"
            subtitle="Six jobs. All of them pointed at the same thing — more sales from the customers you already have."
          />
          <WhatItDoes />
        </div>
      </section>

      {/* ── 2. THE SALES TEAM THAT FORGETS ───────────────────── */}
      <section className="border-t border-[#E5E5E5] py-24 lg:py-32">
        <div className="container-custom">
          <SectionHeading
            title={
              <>
                One inbox. Every channel.
                <br />
                Zero missed messages.
              </>
            }
            body="You already have a sales team. It just doesn&apos;t remember anything — because your customers live in five different apps. Revenue OS puts them in one place."
          />
          <ChannelCards />

          <div className="mt-24 lg:mt-28">
            <ChannelHub />
          </div>

          <div className="mt-24 lg:mt-28">
            <CatchFlow />
          </div>
        </div>
      </section>

      {/* ── 3. TELL IT WHAT TO DO ────────────────────────────── */}
      <section className="border-t border-[#E5E5E5] bg-[#FAFAFA] py-24 lg:py-32">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Tell it what to do"
            title="No complicated workflows."
            subtitle="Just tell Revenue OS how you sell."
          />
          <InstructionToProcess />
        </div>
      </section>

      {/* ── IT REMEMBERS EVERY CUSTOMER ──────────────────────── */}
      <section className="border-t border-[#E5E5E5] py-24 lg:py-32">
        <div className="container-custom">
          <SectionHeading
            title="It remembers every customer."
            subtitle="Not just their name."
          />
          <MemoryCard />
        </div>
      </section>

      {/* ── IT READS MORE THAN TEXT ──────────────────────────── */}
      <section className="border-t border-[#E5E5E5] bg-[#FAFAFA] py-24 lg:py-32">
        <div className="container-custom">
          <SectionHeading
            title="It reads more than text."
            subtitle="Customers send voice notes, photos and receipts. Revenue OS understands all of it."
          />
          <Understands />
        </div>
      </section>

      {/* ── 5. YOU CHOOSE HOW MUCH IT DOES ───────────────────── */}
      <section className="border-t border-[#E5E5E5] py-24 lg:py-32">
        <div className="container-custom">
          <SectionHeading
            title="You choose how much it does."
            subtitle="It starts as an assistant and earns more responsibility as you trust it."
          />
          <ControlLevels />
          <p className="mt-16 text-center text-[20px] sm:text-[26px] leading-[1.4] tracking-[-0.02em] text-text">
            No reminders. No spreadsheets.{" "}
            <span className="text-text-muted">No forgetting.</span>
          </p>
        </div>
      </section>

      {/* ── WHEN YOU TAKE OVER ───────────────────────────────── */}
      <section className="border-t border-[#E5E5E5] bg-[#FAFAFA] py-24 lg:py-32">
        <div className="container-custom">
          <SectionHeading
            title="When you take over."
            subtitle="Some conversations should never be handled by software."
          />
          <Handoff />
        </div>
      </section>

      {/* ── 6. THE RIGHT NEXT MOVE ───────────────────────────── */}
      <section className="border-t border-[#E5E5E5] py-24 lg:py-32">
        <div className="container-custom">
          <SectionHeading title="Every customer gets the right next move." />
          <Lifecycle />
          <p className="mt-14 text-center text-[17px] sm:text-[19px] text-text">
            Revenue OS keeps the relationship moving.
          </p>
        </div>
      </section>

      {/* ── 7. KEEPS SELLING AFTER YOU STOP ──────────────────── */}
      <section className="border-t border-[#E5E5E5] bg-[#FAFAFA] py-24 lg:py-32">
        <div className="container-custom">
          <SectionHeading title="Your business keeps selling after you stop." />
          <DayTimeline />
        </div>
      </section>

      {/* ── 8. FINALLY WORKING AS ONE ────────────────────────── */}
      <section className="border-t border-[#E5E5E5] py-24 lg:py-32">
        <div className="container-custom">
          <SectionHeading
            title={
              <>
                CRM. WhatsApp. Social media.
                <br className="hidden sm:block" /> Memory. AI sales staff.
                <br />
                <span className="text-text-secondary">Finally working as one.</span>
              </>
            }
          />
          <StackUnify />
        </div>
      </section>

      {/* ── 9. OUTCOMES, NOT DASHBOARDS ──────────────────────── */}
      <section className="border-t border-[#E5E5E5] bg-[#FAFAFA] py-24 lg:py-32">
        <div className="container-custom">
          <SectionHeading
            title="You don't need another dashboard."
            subtitle="You need more customers buying."
          />
          <p className="text-center text-[15px] text-text-muted mb-8">Revenue OS helps you:</p>
          <Outcomes />
        </div>
      </section>

      {/* ── 10. THE PROMPT ───────────────────────────────────── */}
      <section className="border-t border-[#E5E5E5] py-24 lg:py-32">
        <div className="container-custom">
          <SectionHeading title="Tell Revenue OS what you want." />
          <InstructionDemo />
        </div>
      </section>

      {/* ── 11. EARNED TRUST ─────────────────────────────────── */}
      <section className="border-t border-[#E5E5E5] bg-[#FAFAFA] py-24 lg:py-32">
        <div className="container-custom">
          <SectionHeading
            title="Start with an assistant."
            subtitle="Let it earn your trust."
          />
          <TrustLadder />
          <p className="mt-14 text-center text-[17px] sm:text-[19px] text-text">
            You&apos;re always in control.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      {/* ── BUILT FOR EVERY BUSINESS ─────────────────────────── */}
      <section className="border-t border-[#E5E5E5] bg-[#FAFAFA] py-24 lg:py-32">
        <div className="container-custom">
          <SectionHeading title="Built for every business that talks to customers." />
          <IndustryPills />
        </div>
      </section>

      <section className="bg-black py-24 lg:py-32">
        <div className="container-custom">
          <div className="max-w-[720px] mx-auto text-center">
            <h2 className="text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.05] tracking-[-0.035em] font-bold text-white mb-8">
              Give your business an AI sales staff.
            </h2>
            <div className="space-y-1.5 mb-10">
              {["It remembers every customer.", "It never forgets a follow-up.", "It keeps working."].map(
                (line) => (
                  <p key={line} className="text-[17px] sm:text-[19px] text-white/60">
                    {line}
                  </p>
                )
              )}
            </div>
            <Link
              href="/book-demo"
              className="inline-flex items-center bg-white text-black h-12 px-7 rounded-lg text-[15px] font-semibold hover:bg-[#EDEDED] transition-colors duration-[180ms]"
            >
              Start free →
            </Link>
            <p className="mt-4 text-[13px] text-white/50">No complicated setup.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
