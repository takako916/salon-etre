'use client';
// components/Navbar.tsx
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "/", label: "A propos" },
    { href: "/programme", label: "Programme" },
    { href: "/exposants", label: "Exposants" },
    { href: "/lieu", label: "Lieu & Accès" },
    { href: "/exposer", label: "Nous contacter" },
  ];
  return (
    <nav className="bg-amber-200 shadow font-medieval sticky top-0 z-40">
      <div className="flex items-center justify-center md:justify-center px-4 py-2 md:py-3 relative">
        {/* ハンバーガーアイコン（モバイル用） */}
        <button
          className="absolute right-4 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="メニューを開く"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* メニュー（PC用） */}
        <ul className="hidden md:flex justify-center items-center gap-6 text-base md:text-lg md:text-xl font-medium">
          {links.map((l) => (
            <li key={l.href} className="text-center">
              <Link href={l.href} className="hover:text-emerald-700 px-4 block whitespace-nowrap">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* メニュー（モバイル用） */}
      {menuOpen && (
        <ul className="flex flex-col md:hidden gap-2 px-4 pb-4 text-base font-medium animate-fade-in">
          {links.map((l) => (
            <li key={l.href} className="text-center">
              <Link
                href={l.href}
                className="hover:text-emerald-700 px-4 block whitespace-nowrap"
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
