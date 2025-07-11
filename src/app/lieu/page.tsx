export default function Lieu() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-2">
      <h2 className="text-center text-xl text-[#218393] mb-8 font-playfair">Lieu &amp; Accès</h2>
      <div className="bg-[#fcf7ea] rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Google Map */}
        <div className="w-full md:w-1/2 flex justify-center">
          <iframe
            title="Google Map Blavozy"
            src="https://www.google.com/maps?q=8+Pl.+Félix+Tempère,+43700+Blavozy,+France&output=embed&hl=fr"
            width="100%"
            height="320"
            className="rounded border"
            style={{ minWidth: 250, maxWidth: 400 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        {/* Info */}
        <div className="w-full md:w-1/2 text-base space-y-4">
          <div>
            <div className="font-semibold">Salon de l&apos;être – 6ᵉ édition</div>
            <div>L&apos;art de prendre soin de soi</div>
          </div>
          <div>
            <span className="inline-block align-middle mr-1">
              {/* Calendar icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#218393" className="w-5 h-5 inline">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3.75 7.5h16.5M4.5 21h15a1.5 1.5 0 001.5-1.5V6.75a1.5 1.5 0 00-1.5-1.5h-15a1.5 1.5 0 00-1.5 1.5v12.75A1.5 1.5 0 004.5 21z" />
              </svg>
            </span>
            <span className="font-bold">Horaires :</span><br />
            Vendredi 10 octobre : conférence à 20h<br />
            Samedi 11 octobre : 10h – 19h<br />
            Dimanche 12 octobre : 10h – 18h
          </div>
          <div>
            <span className="inline-block align-middle mr-1">
              {/* Pin icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#218393" className="w-5 h-5 inline">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c4.5-6 7.5-10.125 7.5-13.125A7.5 7.5 0 0012 1.125a7.5 7.5 0 00-7.5 7.5c0 3 3 7.125 7.5 13.125z" />
                <circle cx="12" cy="8.25" r="2.25" />
              </svg>
            </span>
            <span className="font-bold">Centre socio-culturel de Blavozy</span><br />
            <a href="https://maps.google.com/?q=8+Pl.+Félix+Tempère,+43700+Blavozy" target="_blank" rel="noopener noreferrer" className="underline text-[#218393]">
              8 Pl. Félix Tempère, 43700 Blavozy
            </a>
          </div>
          <div>
            <span className="inline-block align-middle mr-1">
              {/* Money icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#218393" className="w-5 h-5 inline">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 17.25c-1.5 1.5-6.75 1.5-8.25 0s-1.5-6.75 0-8.25 6.75-1.5 8.25 0M9 12h6" />
              </svg>
            </span>
            Entrée : 3€ – Parking gratuit
          </div>
        </div>
      </div>
    </div>
  );
} 