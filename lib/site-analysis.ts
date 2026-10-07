export type SourceKind = "website" | "instagram" | "feed";

export type AnalysisStep = {
  id: string;
  label: string;
};

export type AnalysisGap = {
  problem: string;
  fix: string;
};

export type AnalysisResult = {
  source: SourceKind;
  input: string;
  display: string;
  business: string;
  steps: AnalysisStep[];
  summary: string;
  tags: string[];
  example: {
    origin: string;
    question: string;
    answer: string;
  };
  gaps: AnalysisGap[];
};

export const ANALYSE_EVENT = "revenue-os:analyse";

/** Fire an analysis request from anywhere (e.g. the hero input). */
export function requestAnalysis(input: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(ANALYSE_EVENT, { detail: { input } }));
}

export function detectSource(input: string): SourceKind {
  const value = input.trim().toLowerCase();
  if (value.startsWith("@")) return "instagram";
  if (/\.(xml|csv)$/.test(value)) return "feed";
  return "website";
}

/** Turn whatever the visitor typed into something presentable. */
export function normaliseInput(raw: string): { display: string; business: string } {
  const trimmed = raw.trim();
  if (!trimmed) return { display: "", business: "" };

  if (trimmed.startsWith("@")) {
    const handle = trimmed.slice(1).replace(/\/+$/, "");
    return { display: `@${handle}`, business: titleCase(handle) };
  }

  const withoutProtocol = trimmed.replace(/^https?:\/\//i, "");
  const host = withoutProtocol.split("/")[0].replace(/^www\./i, "");
  const base = host.split(".")[0] || host;
  return { display: host, business: titleCase(base) };
}

function titleCase(value: string) {
  const cleaned = value.replace(/[._-]+/g, " ").trim();
  if (!cleaned) return "Your business";
  return cleaned
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Scripted analysis.
 *
 * Deliberately isolated behind this single function so a real backend
 * (fetch + LLM) can replace it without touching any UI.
 */
export function analyseSource(rawInput: string): AnalysisResult {
  const source = detectSource(rawInput);
  const { display, business } = normaliseInput(rawInput);

  const steps: AnalysisStep[] =
    source === "instagram"
      ? [
          { id: "profile", label: "Studying your profile" },
          { id: "catalogue", label: "Reading your posts and prices" },
          { id: "answers", label: "Writing your answers" },
          { id: "gaps", label: "Finding where chats leak" },
        ]
      : source === "feed"
        ? [
            { id: "feed", label: "Reading your product feed" },
            { id: "catalogue", label: "Building your catalogue" },
            { id: "answers", label: "Writing your answers" },
            { id: "gaps", label: "Finding where chats leak" },
          ]
        : [
            { id: "site", label: "Studying your site" },
            { id: "catalogue", label: "Building your product list" },
            { id: "answers", label: "Writing your answers" },
            { id: "gaps", label: "Finding where chats leak" },
          ];

  const channel =
    source === "instagram"
      ? "Instagram DMs and comments"
      : source === "feed"
        ? "your online store"
        : "your website, WhatsApp and Instagram";

  return {
    source,
    input: rawInput.trim(),
    display,
    business,
    steps,
    summary: `${business} sells through ${channel}. How much you make depends on how fast enquiries get answered, and whether anyone follows up when they don't buy.`,
    tags: [
      "New enquiries",
      "Price questions",
      "Quotations",
      "Follow-up",
      "Repeat customers",
      "Reorders",
      "Referrals",
    ],
    example: {
      origin:
        source === "instagram"
          ? "Example · Instagram DM"
          : source === "feed"
            ? "Example · product page visitor"
            : "Example · website visitor",
      question: "Hi, how much is this?",
      answer: `Hi! Thanks for reaching out to ${business}. I can confirm the price, what's in stock and delivery for your area — and hold it for you. Which one are you looking at?`,
    },
    gaps: [
      {
        problem: "Someone asks for a price, then goes quiet — and nobody follows up.",
        fix: "Revenue OS follows up on the schedule you set, and stops after two tries.",
      },
      {
        problem: "The same questions get answered from scratch, hundreds of times a month.",
        fix: "Revenue OS answers instantly from your prices, stock and policies.",
      },
      {
        problem: "A customer buys once and is never contacted again.",
        fix: "Revenue OS learns their usual reorder cycle and brings them back before they drift.",
      },
    ],
  };
}
