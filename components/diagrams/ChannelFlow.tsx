"use client";

import { motion } from "framer-motion";

const channels = [
  { name: "WhatsApp", color: "#25D366", icon: "💬" },
  { name: "Facebook", color: "#1877F2", icon: "👍" },
  { name: "Instagram", color: "#E4405F", icon: "📷" },
  { name: "Website", color: "#6366F1", icon: "🌐" },
  { name: "Walk-in", color: "#F59E0B", icon: "🚶" },
  { name: "Marketplace", color: "#8B5CF6", icon: "🏪" },
];

export function ChannelFlow() {
  return (
    <section className="py-24 bg-white" aria-labelledby="channel-flow-heading">
      <div className="container-custom max-w-[1200px]">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-text-muted mb-4" id="channel-flow-heading">
            One Inbox. Every Channel.
          </p>
          <h2 className="text-[42px] leading-[1.1] tracking-[-0.035em] font-bold mb-6">
            Stop juggling apps to talk to customers
          </h2>
          <p className="text-[18px] leading-[1.6] text-text-secondary max-w-[700px] mx-auto">
            A WhatsApp message. A Facebook comment. An Instagram DM. A website chat. A walk-in. They all land in Revenue OS — and you reply from Revenue OS. Your reply goes right back to where the customer is.
          </p>
        </div>

        {/* Main Diagram */}
        <div className="relative">
          {/* Channels flowing in from left */}
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between mb-12">
            <div className="flex flex-col gap-4 md:order-1 w-full md:w-[35%]">
              {channels.map((channel, index) => (
                <motion.div
                  key={channel.name}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: `${channel.color}15` }}
                  >
                    <span aria-hidden="true">{channel.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-text">{channel.name}</p>
                    <p className="text-sm text-text-muted">
                      Messages, comments, DMs, inquiries
                    </p>
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                    className="hidden md:block w-16 h-0.5 rounded"
                    style={{ background: `linear-gradient(90deg, ${channel.color}40, ${channel.color})` }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Central Inbox Node */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring", stiffness: 100 }}
              className="relative flex flex-col items-center z-10 md:order-2"
            >
              {/* Pulse ring */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: "#00000040" }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: "#00000040" }}
                  animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </div>

              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl flex flex-col items-center justify-center text-center"
                style={{ background: "linear-gradient(135deg, #000 0%, #1a1a1a 100%)" }}
              >
                <div className="text-4xl md:text-5xl mb-2" aria-hidden="true">📥</div>
                <div className="font-bold text-white text-lg md:text-xl">Unified Inbox</div>
                <div className="text-xs text-white/60 mt-1">Revenue OS</div>
              </div>

              {/* Outgoing arrows */}
              <div className="mt-4 flex gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="flex items-center gap-2 text-sm text-text-muted"
                >
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    aria-hidden="true"
                  >
                    →
                  </motion.span>
                  <span>Reply to WhatsApp</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  className="flex items-center gap-2 text-sm text-text-muted"
                >
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                    aria-hidden="true"
                  >
                    →
                  </motion.span>
                  <span>Reply to Instagram</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Benefits on right */}
            <div className="flex flex-col gap-4 md:order-3 w-full md:w-[35%] md:ml-8">
              {[
                "Reply to messages — delivered to WhatsApp, Messenger, or Instagram",
                "Reply to comments — posted back on Facebook or Instagram",
                "Your whole team sees everything — one place, real time",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                  className="flex items-start gap-3 p-4 bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0 mt-2" />
                  <p className="text-sm text-text">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Channel icons row at bottom for mobile */}
          <div className="flex flex-wrap justify-center gap-4 md:hidden pt-8">
            {channels.map((channel) => (
              <div
                key={channel.name}
                className="flex flex-col items-center gap-2 px-4 py-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg min-w-[80px]"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                  style={{ backgroundColor: `${channel.color}15` }}
                >
                  <span aria-hidden="true">{channel.icon}</span>
                </div>
                <span className="text-xs font-medium text-text">{channel.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}