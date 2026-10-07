"use client";

import { motion } from "framer-motion";

const followUps = [
  { day: "DAY 1", message: "Thank you for your business! 🙏", sent: true },
  { day: "DAY 7", message: "How is everything working out?", sent: true },
  { day: "DAY 14", message: "Quick question — how would you rate us?", sent: true },
  { day: "DAY 30", message: "Know someone who'd love this too?", sent: false },
];

export function RetentionTimeline() {
  return (
    <section className="py-24 bg-white" aria-labelledby="retention-heading">
      <div className="container-custom max-w-[1000px]">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wide text-text-muted mb-4" id="retention-heading">
            What Every Other Tool Misses
          </p>
          <h2 className="text-[42px] leading-[1.1] tracking-[-0.035em] font-bold mb-6">
            Most businesses go silent after the sale. Revenue OS doesn&apos;t.
          </h2>
          <p className="text-[18px] leading-[1.6] text-text-secondary max-w-[700px] mx-auto">
            You define the follow-up. Revenue OS sends it automatically, reads every reply, and the moment a customer sounds unhappy, your team is alerted to step in — before the customer is gone for good.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Follow-up Timeline */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold text-text">Sale Won</span>
            </div>

            <div className="space-y-4" role="list" aria-label="Automated follow-up sequence">
              {followUps.map((followUp, index) => (
                <motion.div
                  key={followUp.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="relative pl-10"
                  role="listitem"
                >
                  {/* Timeline line */}
                  <div className="absolute left-3 top-0 bottom-0 w-0.5" style={{ background: index === followUps.length - 1 ? "#E5E5E5" : "#10B981" }} />
                  
                  {/* Day marker */}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                    style={{ 
                      backgroundColor: followUp.sent ? "#10B981" : "white",
                      borderColor: "#10B981",
                      color: followUp.sent ? "white" : "#10B981",
                    }}
                  >
                    {followUp.sent ? (
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      followUp.day.charAt(3)
                    )}
                  </div>

                  <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg p-4">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-xs font-semibold text-text-muted">{followUp.day}</span>
                      <span className={`text-xs px-2 py-0.5 rounded ${followUp.sent ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>
                        {followUp.sent ? "Sent automatically" : "Scheduled"}
                      </span>
                    </div>
                    <p className="text-text italic">&ldquo;{followUp.message}&rdquo;</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sentiment Detection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-warning" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-text">When a reply sounds wrong</p>
                <p className="text-sm text-text-muted">Revenue OS flags it instantly</p>
              </div>
            </div>

            {/* Customer message */}
            <div className="bg-white border border-[#E5E5E5] rounded-lg p-5 mb-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-warning/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <p className="text-text-muted mb-3">CUSTOMER REPLY</p>
              <blockquote className="text-[16px] leading-[1.6] text-text relative z-10">
                &ldquo;Honestly the delivery was late and I&apos;m not happy.&rdquo;
              </blockquote>
            </div>

            {/* Flag alert */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
              className="bg-danger/5 border border-danger/20 rounded-lg p-4 flex items-center gap-3"
              role="alert"
            >
              <div className="w-8 h-8 rounded-full bg-danger flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 102 0v-2zm0 6a1 1 0 10-2 0 1 1 0 002 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-danger">Flagged — Escalated to your team in seconds</p>
                <p className="text-sm text-text-muted">Negative sentiment detected. Automatic alert sent to assigned salesperson.</p>
              </div>
            </motion.div>

            <p className="text-sm text-text-muted mt-6 text-center">
              Save the customer before a bad experience becomes a lost one.
            </p>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center mt-16 text-[18px] leading-[1.6] text-text"
        >
          The difference between making a sale and keeping a customer for life.
        </motion.p>
      </div>
    </section>
  );
}