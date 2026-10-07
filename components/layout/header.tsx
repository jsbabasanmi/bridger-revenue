'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Product', href: '/features' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E5E5E5]">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16">
          {/* Logo - Explee style: small, black, understated */}
          <Link href="/" className="text-[20px] font-bold tracking-[-0.04em] text-black">
            Revenue OS
          </Link>

          {/* Desktop Nav - minimal */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-black hover:text-text-secondary transition-colors duration-[180ms]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/book-demo"
              className="bg-black text-white h-11 px-5 rounded-lg text-sm font-semibold hover:bg-[#222] transition-all duration-[180ms] flex items-center"
            >
              Get started →
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E5E5]">
          <div className="container-custom py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-black py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/book-demo" className="block pt-2">
              <button className="w-full bg-black text-white h-11 px-5 rounded-lg text-sm font-semibold">
                Get started →
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
