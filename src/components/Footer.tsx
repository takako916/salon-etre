import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 px-2 md:px-8" style={{ backgroundColor: '#63AD9E' }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {/* Left: Logo */}
        <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto gap-3">
          <Image src="/images/logo-transparent.png" alt="Organisateur Logo" width={60} height={60} className="drop-shadow-md" />
          {/* Social icons */}
          <a href="https://www.facebook.com/productiondirecte" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#1877F3]">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
            </svg>
          </a>
          <a href="https://www.instagram.com/productiondirecte/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#E4405F]">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.783 2.295 7.149 2.233 8.415 2.175 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
            </svg>
          </a>
        </div>
        {/* Center: Event name, edition, credit */}
        <div className="text-center flex-1">
          <div className="font-semibold">Salon de l&apos;être – 7ᵉ édition 2025<br/>Blavozy</div>
          <div className="text-xs text-gray-800 mt-1">©Production Directe</div>
        </div>
        {/* Right: Event info */}
        <Link href="/lieu" className="text-right text-sm md:text-base space-y-1 block cursor-pointer hover:bg-emerald-50 rounded transition p-2">
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
        </Link>
      </div>
    </footer>
  );
} 