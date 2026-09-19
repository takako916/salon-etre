"use client";

import Image from "next/image";
import ScrollToTop from "@/components/ScrollToTop";
import { useMemo, useState, type ReactNode } from "react";
import {
  salonExposants2026,
  type SalonExposant2026,
} from "@/lib/salon-exposants-2026";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.4V9.84c0-2.37 1.4-3.69 3.56-3.69 1.03 0 2.11.19 2.11.19v2.32h-1.19c-1.17 0-1.54.73-1.54 1.48v1.77h2.62l-.42 2.9h-2.2V22c4.78-.75 8.44-4.91 8.44-9.93z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.75 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  );
}

function WebsiteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
    </svg>
  );
}

type ExposantLink = {
  href: string;
  label: string;
  Icon: ({ className }: { className?: string }) => ReactNode;
};

function ExposantLinks({ exposant }: { exposant: SalonExposant2026 }) {
  const links: ExposantLink[] = [];

  if (exposant.facebook) {
    links.push({
      href: exposant.facebook,
      label: `Facebook — ${exposant.name}`,
      Icon: FacebookIcon,
    });
  }
  if (exposant.instagram) {
    links.push({
      href: exposant.instagram,
      label: `Instagram — ${exposant.name}`,
      Icon: InstagramIcon,
    });
  }
  if (exposant.website) {
    links.push({
      href: exposant.website,
      label: `Site web — ${exposant.name}`,
      Icon: WebsiteIcon,
    });
  }

  if (links.length === 0) return null;

  return (
    <div className="mt-3 flex items-center gap-3">
      {links.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-salon-primary transition-colors hover:text-salon-cta"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}

function ExposantCard({ exposant }: { exposant: SalonExposant2026 }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-salon-accent/30 bg-salon-surface shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-[4/5] w-full bg-[#e8e2d4]">
        {exposant.imageUrl ? (
          <Image
            src={exposant.imageUrl}
            alt={exposant.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">?</div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        {exposant.businessName && (
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-salon-accent">
            {exposant.businessName}
          </p>
        )}
        <h2 className="font-playfair text-xl font-semibold text-salon-primary">{exposant.name}</h2>
        <p className="mt-1 text-sm leading-snug text-gray-700">{exposant.profession}</p>

        <ExposantLinks exposant={exposant} />

        {(exposant.conference || exposant.atelier || exposant.animation) && (
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            {exposant.conference && (
              <span className="rounded bg-salon-cta px-2 py-1 text-xs font-bold text-white shadow-sm">
                CONFÉRENCE
              </span>
            )}
            {exposant.atelier && (
              <span className="rounded bg-salon-badge px-2 py-1 text-xs font-bold text-salon-accent shadow-sm">
                ATELIER
              </span>
            )}
            {exposant.animation && (
              <span className="rounded bg-salon-primary px-2 py-1 text-xs font-bold text-white shadow-sm">
                ANIMATION
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Exposants() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredExposants = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();

    return salonExposants2026.filter((exposant) => {
      const matchesSearch =
        !query ||
        exposant.name.toLowerCase().includes(query) ||
        exposant.profession.toLowerCase().includes(query) ||
        (exposant.businessName?.toLowerCase().includes(query) ?? false);

      const matchesFilter =
        selectedFilter === "all" ||
        (selectedFilter === "conference" && exposant.conference) ||
        (selectedFilter === "atelier" && exposant.atelier) ||
        (selectedFilter === "animation" && exposant.animation);

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, selectedFilter]);

  return (
    <div className="mx-auto max-w-6xl px-3 py-8 md:px-4">
      <h1 className="mb-8 text-center font-playfair text-xl text-salon-primary">
        Liste des exposants 2026
      </h1>

      <div className="mb-8 space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher un exposant, une activité..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-salon-accent bg-white px-4 py-3 pl-12 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-salon-primary"
          />
          <svg
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`rounded-lg px-4 py-2 font-medium transition-colors ${
              selectedFilter === "all"
                ? "bg-salon-accent text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Tous
          </button>
          <button
            onClick={() => setSelectedFilter("conference")}
            className={`rounded-lg px-4 py-2 font-medium transition-colors ${
              selectedFilter === "conference"
                ? "bg-salon-cta text-white"
                : "bg-orange-100 text-orange-700 hover:bg-orange-200"
            }`}
          >
            Conférence
          </button>
          <button
            onClick={() => setSelectedFilter("atelier")}
            className={`rounded-lg px-4 py-2 font-medium transition-colors ${
              selectedFilter === "atelier"
                ? "bg-salon-badge text-salon-accent"
                : "bg-amber-100 text-amber-700 hover:bg-amber-200"
            }`}
          >
            Atelier
          </button>
          <button
            onClick={() => setSelectedFilter("animation")}
            className={`rounded-lg px-4 py-2 font-medium transition-colors ${
              selectedFilter === "animation"
                ? "bg-salon-primary text-white"
                : "bg-teal-100 text-teal-800 hover:bg-teal-200"
            }`}
          >
            Animation
          </button>
        </div>

        <div className="text-center text-gray-600">
          {filteredExposants.length} exposant{filteredExposants.length > 1 ? "s" : ""} trouvé
          {filteredExposants.length > 1 ? "s" : ""}
        </div>
      </div>

      {filteredExposants.length === 0 ? (
        <div className="py-12 text-center">
          <div className="mb-4 text-lg text-gray-500">
            Aucun exposant ne correspond à votre recherche
          </div>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedFilter("all");
            }}
            className="rounded-lg bg-salon-accent px-6 py-2 text-white transition-colors hover:opacity-90"
          >
            Réinitialiser la recherche
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredExposants.map((exposant) => (
            <ExposantCard key={exposant.name} exposant={exposant} />
          ))}
        </div>
      )}

      <ScrollToTop />
    </div>
  );
}
