'use client';

import Link from "next/link";
import { useState } from "react";
import { salonNavLinks } from "@/lib/salon-nav";

export default function SalonNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-salon-nav shadow font-medieval" data-salon-version="2026">
      <div className="flex items-center justify-center md:justify-center px-4 py-2 md:py-3 relative">
        <button
          className="absolute right-4 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="メニューを開く"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul className="hidden md:flex justify-center items-center gap-6 text-base md:text-lg md:text-xl font-medium">
          {salonNavLinks.map((l) => (
            <li key={l.href} className="text-center">
              <Link href={l.href} prefetch={false} className="hover:text-salon-accent px-4 block whitespace-nowrap">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {menuOpen && (
        <ul className="flex flex-col md:hidden gap-2 px-4 pb-4 text-base font-medium">
          {salonNavLinks.map((l) => (
            <li key={l.href} className="text-center">
              <Link
                href={l.href}
                prefetch={false}
                className="hover:text-salon-accent px-4 block whitespace-nowrap"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
