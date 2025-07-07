import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-6 px-2 md:px-8" style={{ backgroundColor: '#63AD9E' }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {/* Left: Logo */}
        <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
          <Image src="/images/logo.png" alt="Organisateur Logo" width={60} height={60} className="drop-shadow-md" />
        </div>
        {/* Center: Event name, edition, credit */}
        <div className="text-center flex-1">
          <div className="font-semibold">Salon de l'Être – 6ᵉ édition 2025<br/>Blavozy</div>
          <div className="text-xs text-gray-800 mt-1">©Production Directe</div>
        </div>
        {/* Right: Event info */}
        <div className="text-right text-sm md:text-base space-y-1">
          <div className="font-bold flex items-center justify-end gap-1">
            <span className="inline-block align-middle">
              {/* Calendar icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-emerald-900 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3.75 7.5h16.5M4.5 21h15a1.5 1.5 0 001.5-1.5V6.75a1.5 1.5 0 00-1.5-1.5h-15a1.5 1.5 0 00-1.5 1.5v12.75A1.5 1.5 0 004.5 21z" />
              </svg>
            </span>
            Du 10 au 12 octobre 2025
          </div>
          <div className="flex items-center justify-end gap-1">
            <span className="inline-block align-middle">
              {/* Map pin icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-emerald-900 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c4.5-6 7.5-10.125 7.5-13.125A7.5 7.5 0 0012 1.125a7.5 7.5 0 00-7.5 7.5c0 3 3 7.125 7.5 13.125z" />
                <circle cx="12" cy="8.25" r="2.25" />
              </svg>
            </span>
            <span className="font-semibold text-emerald-900">Centre socio-culturel de Blavozy</span>
          </div>
          <div className="flex items-center justify-end gap-1 mt-1">
            <span className="inline-block align-middle">
              {/* Money icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-emerald-900 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 17.25c-1.5 1.5-6.75 1.5-8.25 0s-1.5-6.75 0-8.25 6.75-1.5 8.25 0M9 12h6" />
              </svg>
            </span>
            <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-1 align-middle"></span>
            Entrée : 3€ ・ Parking gratuit
          </div>
        </div>
      </div>
    </footer>
  );
} 