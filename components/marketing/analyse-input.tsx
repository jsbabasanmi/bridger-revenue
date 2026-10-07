"use client";

import { useState } from "react";
import { requestAnalysis } from "@/lib/site-analysis";

const GradientButton = ({ children }: { children: React.ReactNode }) => (
  <span
    className="inline-flex items-center gap-1.5 rounded-full px-5 h-11 text-[14px] font-semibold text-black whitespace-nowrap"
    style={{ background: "linear-gradient(100deg, #FBEED4 0%, #E89110 100%)" }}
  >
    {children}
  </span>
);

/** The hero pill: "yoursite.com or @instagram" + gradient CTA. */
export function HeroAnalyseInput() {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!value.trim()) return;
        requestAnalysis(value);
        document.getElementById("analyse")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="w-full max-w-[520px] rounded-full border border-[#E5E5E5] bg-white p-1.5 pl-5 flex items-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] focus-within:border-[#D4D4D4] transition-colors"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="yoursite.com or @instagram"
        aria-label="Your website or Instagram handle"
        className="flex-1 min-w-0 bg-transparent text-[15px] text-text placeholder:text-text-muted outline-none py-2"
      />
      <button type="submit" className="shrink-0">
        <GradientButton>Analyse →</GradientButton>
      </button>
    </form>
  );
}

/** The section bar: traffic lights, https:// prefix, gradient CTA. */
export function AnalyseBar() {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!value.trim()) return;
        requestAnalysis(value);
      }}
      className="rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] p-2 pl-4 flex flex-wrap sm:flex-nowrap items-center gap-3"
    >
      <span className="hidden sm:flex items-center gap-1.5 shrink-0" aria-hidden="true">
        <span className="w-3 h-3 rounded-full bg-[#ED6A5E]" />
        <span className="w-3 h-3 rounded-full bg-[#F5BF4F]" />
        <span className="w-3 h-3 rounded-full bg-[#61C454]" />
      </span>

      <span className="text-[15px] text-text-muted hidden sm:inline shrink-0">https://</span>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="usebridger.com"
        aria-label="Your website or Instagram handle"
        className="flex-1 min-w-[160px] bg-transparent text-[15px] text-text placeholder:text-text-muted outline-none py-2"
      />

      <button type="submit" className="shrink-0">
        <GradientButton>Analyse my business →</GradientButton>
      </button>
    </form>
  );
}
