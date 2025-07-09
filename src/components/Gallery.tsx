"use client";
// components/Gallery.tsx
import { useState, useEffect } from "react";

const images = [
  { src: "/images/salontop.jpg", alt: "salontop" },
  { src: "/images/salontop2.jpg", alt: "salontop2" },
  { src: "/images/exposer1.jpg", alt: "exposer1" },
  { src: "/images/exposer2.jpg", alt: "exposer2" },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(3);

  // レスポンシブ対応
  useEffect(() => {
    const updateImagesPerView = () => {
      if (window.innerWidth < 768) {
        setImagesPerView(1); // モバイル: 1枚
      } else if (window.innerWidth < 1024) {
        setImagesPerView(2); // タブレット: 2枚
      } else {
        setImagesPerView(3); // デスクトップ: 3枚
      }
    };

    updateImagesPerView();
    window.addEventListener('resize', updateImagesPerView);
    return () => window.removeEventListener('resize', updateImagesPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + imagesPerView >= images.length ? 0 : prevIndex + imagesPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - imagesPerView < 0 ? Math.max(0, images.length - imagesPerView) : prevIndex - imagesPerView
    );
  };

  const visibleImages = images.slice(currentIndex, currentIndex + imagesPerView);

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-2xl font-bold text-emerald-700 mb-6 text-center">Aperçu des éditions précédentes</h2>
      
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous images"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Images Container */}
        <div className="flex gap-2 md:gap-4 justify-center items-center min-h-[224px] px-8 md:px-12">
          {visibleImages.map((image, index) => (
            <div key={currentIndex + index} className="flex-shrink-0">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="h-48 md:h-56 w-64 md:w-80 rounded-lg shadow-md object-cover transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next images"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: Math.ceil(images.length / imagesPerView) }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i * imagesPerView)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
              i === Math.floor(currentIndex / imagesPerView) 
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