import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lieu & Accès Salon de l'être Blavozy 2025 | Centre Socio-Culturel",
  description: "Adresse et accès Salon de l'être 2025 : Centre socio-culturel de Blavozy, 8 Pl. Félix Tempère. 10-12 octobre 2025. Entrée 3€, parking gratuit.",
  keywords: "salon bien-être Blavozy adresse, centre socio-culturel Blavozy, accès salon bien-être, parking Blavozy, horaires salon bien-être, Haute-Loire 43",
  openGraph: {
    title: "Lieu & Accès Salon de l'être Blavozy 2025",
    description: "Centre socio-culturel de Blavozy - 10-12 octobre 2025",
    url: "https://salon-etre.vercel.app/lieu",
  },
  alternates: {
    canonical: "https://salon-etre.vercel.app/lieu",
  },
};

// 構造化データ（Schema.org）
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Salon de l'être Blavozy 2025",
  "description": "Salon de l'être à Blavozy : bien-être, massage, réflexologie, développement personnel. Proche Le Puy-en-Velay.",
  "startDate": "2025-10-10T20:00:00",
  "endDate": "2025-10-12T18:00:00",
  "location": {
    "@type": "Place",
    "name": "Centre socio-culturel de Blavozy",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8 Pl. Félix Tempère",
      "addressLocality": "Blavozy",
      "postalCode": "43700",
      "addressRegion": "Haute-Loire",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.0569",
      "longitude": "3.8728"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "Production Directe - Salon de l'être"
  },
  "offers": {
    "@type": "Offer",
    "price": "3",
    "priceCurrency": "EUR"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Le Puy-en-Velay"
    },
    {
      "@type": "City", 
      "name": "Brioude"
    },
    {
      "@type": "City",
      "name": "Yssingeaux"
    }
  ]
};

export default function Lieu() {
  return (
    <>
      <div className="max-w-5xl mx-auto py-8 px-2">
        <h1 className="text-center text-xl text-[#218393] mb-8 font-playfair">Lieu &amp; Accès</h1>
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
              Vendredi 10 octobre 2025: conférence à 20h<br />
              Samedi 11 octobre 2025: 10h – 19h<br />
              Dimanche 12 octobre 2025: 10h – 18h
            </div>
            <div>
              <span className="inline-block align-middle mr-1">
                {/* Pin icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#218393" className="w-5 h-5 inline">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c4.5-6 7.5-10.125 7.5-13.125A7.5 7.5 0 0012 1.125a7.5 7.5 0 00-7.5 7.5c0 3 3 7.125 7.5 13.125z" />
                  <circle cx="12" cy="8.25" r="2.25" />
                </svg>
              </span>
              <span className="font-bold">Centre socio-culturel de Blavozy (Csc Blavozy)</span><br />
              <a href="https://maps.google.com/?q=8+Pl.+Félix+Tempère,+43700+Blavozy" target="_blank" rel="noopener noreferrer" className="underline text-[#218393]">
                8 Pl. Félix Tempère, 43700 Blavozy
              </a>
              <div className="mt-2 text-sm text-gray-600">
                <strong>À seulement 5 minutes du Puy-en-Velay</strong><br />
                Accès facile depuis Le Puy-en-Velay, Brioude, Yssingeaux et toute la Haute-Loire
              </div>
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

        {/* 地域アクセス情報セクション */}
        <div className="mt-8 bg-[#fcf7ea] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[#218393] mb-4">Accès depuis Le Puy-en-Velay et la région</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">🚗 En voiture :</h4>
              <ul className="text-sm space-y-1">
                <li><strong>Depuis Le Puy-en-Velay :</strong> 5 minutes (D590)</li>
                <li><strong>Depuis Brioude :</strong> 45 minutes (N102)</li>
                <li><strong>Depuis Yssingeaux :</strong> 30 minutes (D103)</li>
                <li><strong>Depuis Saint-Étienne :</strong> 1h15 (A72)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📍 Localisation :</h4>
              <ul className="text-sm space-y-1">
                <li><strong>Blavozy</strong> - Commune limitrophe du Puy-en-Velay</li>
                <li><strong>Centre socio-culturel</strong> - Au cœur du village</li>
                <li><strong>Parking gratuit</strong> - À proximité immédiate</li>
                <li><strong>Accès handicapé</strong> - Site accessible</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-amber-100 rounded-lg">
            <p className="text-sm text-center">
              <strong>Le Salon de l&apos;être : l&apos;événement bien-être de référence en Haute-Loire, 
              facilement accessible depuis Le Puy-en-Velay et toute la région !</strong>
            </p>
          </div>
        </div>
      </div>
      
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
} 