// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "/", label: "A propos" },
    { href: "/programme", label: "Programme" },
    { href: "/exposants", label: "Exposants" },
    { href: "/lieu", label: "Lieu & Accès" },
    { href: "/exposer", label: "Nous contacter" },
  ];
  return (
    <nav className="bg-amber-200 shadow font-medieval">
      <ul className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 py-3 text-lg md:text-xl font-medium">
        {links.map((l) => (
          <li key={l.href} className="w-full text-center md:w-auto">
            <Link href={l.href} className="hover:text-emerald-700 px-4 block whitespace-nowrap">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
