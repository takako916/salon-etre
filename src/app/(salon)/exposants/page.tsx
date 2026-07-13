"use client";

import Image from "next/image";
import ScrollToTop from "@/components/ScrollToTop";
import { useState, useMemo } from "react";

type Exposant = {
  name: string;
  activity: string;
  description: string;
  imageUrl: string | null;
  conference: boolean;
  atelier: boolean;
};

const exposants: Exposant[] = [];

export default function Exposants() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredExposants = useMemo(() => {
    return exposants.filter((exposant) => {
      const matchesSearch =
        exposant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exposant.activity.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exposant.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter =
        selectedFilter === "all" ||
        (selectedFilter === "conference" && exposant.conference) ||
        (selectedFilter === "atelier" && exposant.atelier);

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, selectedFilter]);

  return (
    <div className="max-w-5xl mx-auto py-8 px-2">
      <h1 className="text-center text-xl text-salon-primary mb-8 font-playfair">
        Liste des exposants 2026
      </h1>

      <div className="mb-8 space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher un exposant, une activité..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 border border-salon-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-primary focus:border-transparent bg-white"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
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

        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedFilter === "all"
                ? "bg-salon-accent text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Tous
          </button>
          <button
            onClick={() => setSelectedFilter("conference")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedFilter === "conference"
                ? "bg-salon-cta text-white"
                : "bg-orange-100 text-orange-700 hover:bg-orange-200"
            }`}
          >
            Conference
          </button>
          <button
            onClick={() => setSelectedFilter("atelier")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedFilter === "atelier"
                ? "bg-salon-badge text-salon-accent"
                : "bg-amber-100 text-amber-700 hover:bg-amber-200"
            }`}
          >
            Atelier
          </button>
        </div>

        <div className="text-center text-gray-600">
          {filteredExposants.length} exposant{filteredExposants.length > 1 ? "s" : ""} trouvé
          {filteredExposants.length > 1 ? "s" : ""}
        </div>
      </div>

      {exposants.length === 0 && (
        <div className="bg-salon-surface border border-salon-accent rounded-lg p-8 text-center mb-8">
          <p className="text-gray-700 text-lg">
            La liste des exposants sera publiée prochainement.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Vous souhaitez exposer ? Consultez la page{" "}
            <a href="/exposer" className="text-salon-primary underline">
              Nous contacter
            </a>
            .
          </p>
        </div>
      )}

      {exposants.length > 0 && filteredExposants.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-4">
            Aucun exposant ne correspond à votre recherche
          </div>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedFilter("all");
            }}
            className="px-6 py-2 bg-salon-accent text-white rounded-lg hover:opacity-90 transition-colors"
          >
            Réinitialiser la recherche
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredExposants.map((exposant, i) => (
          <div
            key={i}
            className="flex bg-salon-surface border border-salon-accent rounded p-6 items-center gap-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex-shrink-0">
              {exposant.imageUrl ? (
                <Image
                  src={exposant.imageUrl}
                  alt={exposant.name}
                  width={96}
                  height={128}
                  className="w-24 h-32 object-cover rounded"
                />
              ) : (
                <svg width="96" height="128" viewBox="0 0 96 128" fill="none">
                  <rect x="12" y="16" width="72" height="96" rx="8" stroke="#222" strokeWidth="6" fill="none" />
                  <polygon points="24,104 48,64 72,104" fill="#222" />
                  <circle cx="36" cy="40" r="8" fill="#222" />
                </svg>
              )}
            </div>
            <div className="flex-1">
              <div className="font-serif text-lg font-semibold mb-2">
                {exposant.name} - {exposant.activity}
              </div>
              <div className="text-sm whitespace-pre-line mb-4">{exposant.description}</div>
              <div className="flex gap-2 justify-end">
                {exposant.conference && (
                  <span className="bg-salon-cta text-white text-xs font-bold px-2 py-1 rounded shadow-md">
                    CONFÉRENCE
                  </span>
                )}
                {exposant.atelier && (
                  <span className="bg-salon-badge text-salon-accent text-xs font-bold px-2 py-1 rounded shadow-md">
                    ATELIER
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ScrollToTop />
    </div>
  );
}
