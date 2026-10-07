"use client";

import { motion } from "framer-motion";

const kpis = [
  { label: "Leads Today", value: "47", icon: "📥", trend: "+12%", trendColor: "success" },
  { label: "Conversion Rate", value: "34%", icon: "📈", trend: "+3.2%", trendColor: "success" },
  { label: "Avg Response", value: "11s", icon: "⚡", trend: "-2s", trendColor: "success" },
  { label: "Customers Retained", value: "128", icon: "🔄", trend: "+18", trendColor: "success" },
];

const leadsBySource = [
  { source: "WhatsApp", value: 42, color: "#25D366" },
  { source: "Facebook", value: 23, color: "#1877F2" },
  { source: "Instagram", value: 18, color: "#E4405F" },
  { source: "Website", value: 11, color: "#6366F1" },
  { source: "Walk-in", value: 6, color: "#F59E0B" },
  { source: "Marketplace", value: 4, color: "#8B5CF6" },
];

const teamPerformance = [
  { initials: "AO", name: "Achieng Otieno", closed: 14, rate: "41%" },
  { initials: "BM", name: "Brian Mwangi", closed: 11, rate: "36%" },
  { initials: "FW", name: "Faith Wanjiru", closed: 9, rate: "31%" },
  { initials: "KO", name: "Kemi Okafor", closed: 7, rate: "28%" },
  { initials: "CN", name: "Chidi Nwosu", closed: 5, rate: "22%" },
];

export function Dashboard() {
  const maxLeads = Math.max(...leadsBySource.map(s => s.value));

  return (
    <section className="py-24 bg-[#FAFAFA]" aria-labelledby="dashboard-heading">
      <div className="container-custom max-w-[1200px]">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wide text-text-muted mb-4" id="dashboard-heading">
            Intelligence Throughout
          </p>
          <h2 className="text-[42px] leading-[1.1] tracking-[-0.035em] font-bold mb-6">
            Total visibility, finally
          </h2>
          <p className="text-[18px] leading-[1.6] text-text-secondary max-w-[800px] mx-auto">
            Leads today, deals, quotations, conversion rates. Response times and who closed what. Leads by source — WhatsApp, Facebook, Instagram, website, walk-ins, marketplace. New vs returning customers and lifetime value. Management sees the whole picture in one dashboard.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          {/* Header */}
          <div className="bg-[#FAFAFA] border-b border-[#E5E5E5] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-text">Revenue OS Dashboard</p>
                <p className="text-xs text-text-muted">Last 30 days • Updated 2 min ago</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-sm border border-[#E5E5E5] rounded-lg hover:bg-white transition-colors">This Month</button>
              <button className="px-3 py-1.5 text-sm bg-black text-white rounded-lg hover:bg-[#222] transition-colors">Export</button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-b border-[#E5E5E5]" role="region" aria-label="Key performance indicators">
            {kpis.map((kpi, index) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="p-4 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl" aria-hidden="true">{kpi.icon}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${kpi.trendColor === "success" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>
                    {kpi.trend} vs last month
                  </span>
                </div>
                <div className="text-[28px] font-bold text-black leading-tight mb-1">{kpi.value}</div>
                <div className="text-sm text-text-muted">{kpi.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid md:grid-cols-2 gap-6 p-6">
            {/* Leads by Source Bar Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl p-6"
            >
              <h3 className="font-semibold text-text mb-6">LEADS BY SOURCE</h3>
              <div className="space-y-4" role="img" aria-label="Bar chart showing leads by source">
                {leadsBySource.map((source, index) => (
                  <div key={source.source} className="group">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-text">{source.source}</span>
                      <span className="text-sm font-bold text-text" style={{ color: source.color }}>{source.value}</span>
                    </div>
                    <div className="h-3 rounded-full bg-[#E5E5E5] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(source.value / maxLeads) * 100}%` }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.4 + index * 0.08, duration: 0.6, type: "spring", stiffness: 90 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: source.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Team Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl p-6"
            >
              <h3 className="font-semibold text-text mb-6">TEAM PERFORMANCE</h3>
              <div className="space-y-3" role="table" aria-label="Team performance table">
                <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 text-xs text-text-muted border-b border-[#E5E5E5] pb-2">
                  <span></span>
                  <span>SALESPERSON</span>
                  <span className="text-right">CLOSED</span>
                  <span className="text-right">RATE</span>
                </div>
                {teamPerformance.map((member, index) => (
                  <motion.div
                    key={member.initials}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.06, duration: 0.4 }}
                    className="grid grid-cols-[auto_1fr_auto_auto] gap-4 items-center py-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-sm font-semibold text-text">
                      {member.initials}
                    </div>
                    <span className="text-sm text-text">{member.name}</span>
                    <span className="text-sm font-semibold text-text text-right">{member.closed}</span>
                    <span className="text-sm font-medium text-text-muted text-right">{member.rate}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center mt-8 text-sm text-text-muted"
        >
          Management sees the whole picture in one dashboard — no more guessing.
        </motion.p>
      </div>
    </section>
  );
}