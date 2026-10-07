import Link from "next/link";

const links = [
  { label: "Product", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E5E5]">
      <div className="container-custom">
        <div className="py-14 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Identity */}
          <div>
            <p className="text-[20px] font-bold tracking-[-0.04em] text-black">Revenue OS</p>
            <p className="mt-2 text-[15px] text-text-secondary">Your AI sales staff.</p>
          </div>

          {/* Links */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-text-secondary hover:text-black transition-colors duration-[180ms]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-[#E5E5E5] py-6">
          <p className="text-[13px] text-text-muted">© Revenue OS</p>
        </div>
      </div>
    </footer>
  );
}
