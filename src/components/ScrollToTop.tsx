'use client';

export default function ScrollToTop() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-[#218393] hover:bg-[#1a6b7a] text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
        aria-label="Retour en haut de la page"
      >
        <span className="text-lg">↑</span>
        <span className="font-medium">Haut</span>
      </button>
    </div>
  );
}
