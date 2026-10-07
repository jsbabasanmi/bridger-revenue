import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  body,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  body?: ReactNode;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center mb-14 lg:mb-20" : "mb-14 lg:mb-20"}>
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted mb-5">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[34px] sm:text-[42px] lg:text-[50px] leading-[1.05] tracking-[-0.035em] font-bold text-text">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={
            "mt-5 text-[19px] sm:text-[22px] leading-[1.4] text-text-secondary " +
            (centered ? "mx-auto max-w-[720px]" : "max-w-[720px]")
          }
        >
          {subtitle}
        </p>
      ) : null}
      {body ? (
        <p
          className={
            "mt-6 text-[16px] sm:text-[17px] leading-[1.6] text-text-secondary " +
            (centered ? "mx-auto max-w-[680px]" : "max-w-[680px]")
          }
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
