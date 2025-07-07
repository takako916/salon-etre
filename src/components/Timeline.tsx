"use client";
// components/Timeline.tsx
import Image from "next/image";
import { useState } from "react";

type YearPoster = {
  year: number;
  img: string; // 例 "2020.jpg"
  affiche: string | null;
};

const posters: YearPoster[] = [
  { year: 2020, img: "1.png", affiche: null },
  { year: 2021, img: "2.png", affiche: null },
  { year: 2022, img: "3.png", affiche: "affiche2022.jpg" },
  { year: 2023, img: "4.png", affiche: "affiche2023.jpg" },
  { year: 2024, img: "5.png", affiche: "affiche2024.jpg" },
  { year: 2025, img: "6.png", affiche: "affiche2025.png" },
];

export default function Timeline() {
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="mx-auto w-full max-w-7xl px-2 md:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-emerald-700">Les éditions précédentes</h2>
      {/* 年数のライン */}
      <div className="relative w-full flex justify-between items-center mb-2">
        {/* 横いっぱいのグレーライン */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-300 z-0" style={{transform: 'translateY(-50%)'}} />
        {posters.map((p, i) => (
          <span
            key={p.year}
            className={
              i === posters.length - 1
                ? "font-medieval text-2xl md:text-4xl font-bold text-orange-600 bg-white px-2 relative z-10 text-center"
                : "font-medieval text-base md:text-lg font-normal text-gray-700 bg-white px-2 relative z-10 text-center"
            }
            style={{ minWidth: 48 }}
          >
            {p.year}
          </span>
        ))}
      </div>
      {/* オレンジライン＋番号アイコン */}
      <div className="relative w-full flex justify-between items-center mb-4">
        {/* 横いっぱいのオレンジライン */}
        <div className="absolute left-0 right-0 top-1/2 h-1 bg-orange-400 z-0" style={{transform: 'translateY(-50%)'}} />
        {posters.map((p, i) => (
          <span key={p.img} className="relative z-10 flex justify-center w-9 md:w-12">
            <Image src={`/images/${p.img}`} alt={`No. ${i + 1}`} width={36} height={36} />
          </span>
        ))}
      </div>
      {/* ポスターアイコン */}
      <div className="w-full flex justify-between items-end">
        {posters.map((p, i) => (
          <div key={p.year} className="flex flex-col items-center w-9 md:w-12" style={{ width: i === posters.length - 1 ? 96 : (i >= 2 && i <= 4 ? 80 : undefined) }}>
            {p.affiche ? (
              <Image
                src={`/images/${p.affiche}`}
                alt={`Affiche ${p.year}`}
                width={i === posters.length - 1 ? 120 : (i >= 2 && i <= 4 ? 90 : 72)}
                height={i === posters.length - 1 ? 160 : (i >= 2 && i <= 4 ? 120 : 96)}
                className={
                  `rounded shadow-md transition-transform duration-300 hover:scale-175 hover:z-10 cursor-pointer`
                }
                style={{ zIndex: 10 }}
                onClick={() => setModal({ src: `/images/${p.affiche}`, alt: `Affiche ${p.year}` })}
              />
            ) : (
              <div className="w-18 h-24 bg-gray-200 rounded flex items-center justify-center text-gray-400">?</div>
            )}
          </div>
        ))}
      </div>
      {/* モーダル */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setModal(null)}
        >
          <div
            className="relative max-w-full max-h-full p-4"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition"
              onClick={() => setModal(null)}
              aria-label="閉じる"
            >
              ×
            </button>
            <img
              src={modal.src}
              alt={modal.alt}
              className="rounded shadow-2xl max-h-[80vh] max-w-[90vw]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
