"use client";
// components/Gallery.tsx
import { useState } from "react";

const images = [
  { src: "/images/salontop.jpg", alt: "salontop" },
  { src: "/images/salontop2.jpg", alt: "salontop2" },
  { src: "/images/exposer1.jpg", alt: "exposer1" },
  { src: "/images/exposer2.jpg", alt: "exposer2" },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= images.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, images.length - 3) : prevIndex - 3
    );
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-2xl font-bold text-emerald-700 mb-6 text-center">Aperçu des éditions précédentes</h2>
      
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous images"
        >
          <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Images Container */}
        <div className="flex gap-4 justify-center items-center min-h-[224px]">
          {visibleImages.map((image, index) => (
            <div key={currentIndex + index} className="flex-shrink-0">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="h-56 w-80 rounded-lg shadow-md object-cover transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next images"
        >
          <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: Math.ceil(images.length / 3) }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i * 3)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              i === Math.floor(currentIndex / 3) 
                ? 'bg-emerald-700 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
} 