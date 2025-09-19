import { Metadata } from 'next';
import Image from 'next/image';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: "Programme | Salon de l'être Blavozy 2025",
  description: "Programme Salon de l'être 2025 à Blavozy : conférences, ateliers, initiations. 10-12 octobre 2025. Bien-être et développement personnel.",
  keywords: "programme salon bien-être, conférences bien-être, ateliers développement personnel, Blavozy 2025, soins naturels, spiritualité, massage, réflexologie",
  openGraph: {
    title: "Programme Salon de l'être Blavozy 2025",
    description: "Conférences, ateliers et animations du Salon de l'être 2025",
    url: "https://salon-etre.vercel.app/programme",
  },
  alternates: {
    canonical: "https://salon-etre.vercel.app/programme",
  },
};

// プログラムデータ（JSONで管理）
const programmeData = {
  "vendredi10octobre": {
    "date": "vendredi 10 octobre",
    "events": [
             {
         "time": "20h00 -",
         "type": "CONFÉRENCE",
         "organizer": "Christine Clémino",
         "description": "Expérience de mort Imminente : Quand l'ombre rencontre la lumière (entrée 5€)",
         "imageUrl": "/images/programme/conf_2.png",
         "place": "Salle de cinéma"
       }
    ]
  },
  "samedi11octobre": {
    "date": "samedi 11 octobre",
    "events": [
      {
        "time": "10h00-11h00",
        "type": "ATELIER",
        "organizer": "Tym Amandine",
                 "description": "Atelier de méditation et pratique corporelle",
        "imageUrl": "/images/programme/atelier_1.png",
        "place": "Salle de l'instant présent"
      },
      {
        "time": "10h00-11h00",
        "type": "CONFÉRENCE",
        "organizer": "L'Éveil Matriciel - M.Rossignol Olivier",
        "description": "La roue de Médecine et les vibrations du Tambour",
        "imageUrl": "/images/programme/conf_1.png",
        "place": "Salle de cinéma"
      },
      {
        "time": "11h00-12h00",
        "type": "CONFÉRENCE",
        "organizer": "Médiumnité - Mme Chevalier Delphine",
                 "description": "Lumière de l'au-delà : Ce que vos êtres chers souhaitent vous dire",
        "imageUrl": "/images/programme/conf_8.png",
        "place": "Salle de cinéma"
      },
      {
        "time": "13h00-14h00",
        "type": "CONFÉRENCE",
        "organizer": "Delphine Shiatsu43 - Delphine Gire",
                 "description": "Présentation du Shiatsu",
        "imageUrl": "/images/programme/conf_14.png",
        "place": "Salle de cinéma"
      },
      {
        "time": "14h00-15h00",
        "type": "CONFÉRENCE",
        "organizer": "Ainsi Soi m'aime - Micheli Pauline",
        "description": "Découvrez Ainsi soi m'aime \"Allier l'être et le paraitre\"",
        "imageUrl": "/images/programme/conf_12.png",
        "place": "Salle de cinéma"
      },
      {
        "time": "14h00-15h00",
        "type": "CONFÉRENCE",
                 "organizer": "La voix des Métamorph'Oses - Coniasse Laura",
                 "description": "Quels sont les blocages conscients et inconscients que l'on porte en soi ? Comment s'en libérer ?",
        "imageUrl": null,
        "place": "Salle de l'instant présent"
      },
      {
        "time": "15h00-16h00",
        "type": "ATELIER",
        "organizer": "Roselyne Miejac - Naturopathie / Ayurvéda",
        "description": "Découverte des plantes sauvages comestibles en Automne",
        "imageUrl": "/images/programme/atelier_2.png",
        "place": "Départ devant le centre culturel"
      },
      {
        "time": "15h00-16h00",
        "type": "CONFÉRENCE",
        "organizer": "Les spécialités du Velay",
        "description": "Pierres de protection - Trousse de secours",
        "imageUrl": null,
        "place": "Salle de cinéma"
      },
      {
        "time": "16h00-17h00",
        "type": "CONFÉRENCE",
        "organizer": "Patricia Vezzaro - Shiatsu humain / animalier / et massage sensitif® de bien-être",
                 "description": "Le Shiatsu un art du toucher pour tous",
        "imageUrl": null,
        "place": "Salle de cinéma"
      },
      {
        "time": "16h00-17h00",
        "type": "CONFÉRENCE",
        "organizer": "Morgan Emica",
        "description": "S’ouvrir à son identité profonde",
        "imageUrl": null,
        "place": "Salle de cinéma"
      },
      {
        "time": "17h00-18h00",
        "type": "CONFÉRENCE",
                 "organizer": "Sexothérapeute - Lauriane Cydzik",
        "description": "Erotiser sa vie = Amour et sexualité",
        "imageUrl": "/images/programme/conf_9.png",
        "place": "Salle de cinéma"
      },
      {
        "time": "17h00-18h00",
        "type": "ATELIER",
        "organizer": "Jessica Hassine - Hypnobliss",
                 "description": "Constellation familiale en pratique",
        "imageUrl": "/images/programme/atelier_4.png",
        "place": "Salle de cinéma"
      },
      {
        "time": "18h00-19h00",
        "type": "CONFÉRENCE",
        "organizer": "Véronique Verove - Numérologie",
        "description": "Numérologie Humaniste \"Et si votre date de naissance racontait votre histoire\"",
        "imageUrl": null,
        "place": "Salle de cinéma"
      },
      {
        "time": "18h00-19h00",
        "type": "ATELIER",
        "organizer": "Au cœur de soi - Massage et sonotherapie - Oser sa voix - Corinne Drevet",
        "description": "Oser sa voix : Eploration du Corps Instrument, polyphonies et autres joyeuses surprises.",
        "imageUrl": "/images/programme/atelier_5.png",
        "place": "Salle de l'instant présent"
      }
    
    ]
  },
  "dimanche12octobre": {
    "date": "dimanche 12 octobre",
    "events": [
      {
        "time": "10h00-11h00",
        "type": "ATELIER",
        "organizer": "Clair Obscur - Florence Nicolas",
        "description": "Réveiller son intuition avec le Tarot",
        "imageUrl": "/images/programme/atelier_3.png",
        "place": "Salle de cinéma"
      },
      {
        "time": "11h00-12h00",
        "type": "ATELIER",
        "organizer": "CTME - Cabinet Thérapie Manuelle et énergétique - Bonnet Sébastien",
        "description": "Traitement de la douleur en énergétique traditionnelle Chinoise",
        "imageUrl": null,
        "place": "Salle de cinéma"
      },
      {
        "time": "13h00-14h00",
        "type": "CONFÉRENCE",
        "organizer": "Delphine Shiatsu43 - Delphine Gire",
        "description": "Présentation du Shiatsu",
        "imageUrl": "/images/programme/conf_11.png",
        "place": "Salle de cinéma"
      },
      {
        "time": "14h00-15h00",
        "type": "ATELIER",
        "organizer": "Patricia Vezzaro & Pascale Burger - (Association Cheval cœur à cœur)",
        "description": "Voyage au tambour chamanique",
        "imageUrl": "/images/programme/conf_3.png",
        "place": "Salle de cinéma"
      },
      {
        "time": "14h00-15h00",
        "type": "CONFÉRENCE",
        "organizer": "Jessica Hassine - Hypnobliss",
        "description": "Constellation familiale présentation",
        "imageUrl": "/images/programme/conf_10.png",
        "place": "Salle de l'instant présent"
      },
      {
        "time": "15h00-16h00",
        "type": "ATELIER",
        "organizer": "Roselyne Miejac - Naturopathie / Ayurvéda",
        "description": "Découverte des plantes sauvages comestibles en Automne",
        "imageUrl": null,
        "place": "Départ devant le centre culturel"
      },
      {
        "time": "15h00-16h00",
        "type": "CONFÉRENCE",
        "organizer": "Les spécialités du Velay",
        "description": "Pierres de protection",
        "imageUrl": "/images/programme/conf_5.png",
        "place": "Salle de cinéma"
      },
      {
        "time": "16h00-17h00",
        "type": "CONFÉRENCE",
                 "organizer": "Aurelien Boithias - Hypnoses & désensibilisation oculaire",
        "description": "L'enneagramme : Et le travail thérapeutique",
        "imageUrl": "/images/programme/conf_4.png",
        "place": "Salle de cinéma"
      },
      {
        "time": "16h00-17h00",
        "type": "CONFÉRENCE",
                 "organizer": "Maryline Chaurand - Réflexologie et énergétique chinoise",
        "description": "Réflexologie et diététique chinoise : ventre heureux, esprit tranquille !",
        "imageUrl": null,
        "place": "Salle de cinéma"
      },
      {
        "time": "17h00-18h00",
        "type": "ATELIER",
        "organizer": "Delphine Shiatsu43 - Delphine Gire",
        "description": "Auto massage Do In",
        "imageUrl": null,
        "place": "Salle de cinéma"
      },
      {
        "time": "17h00-18h00",
        "type": "ATELIER",
        "organizer": "Morgan Emica",
        "description": "Vivre son identité en conscience. Retrouver sa place et affirmer ses limites. Comprendre nos mécanismes inconscients pour poser des limites saines, pour soi et pour le monde.",
        "imageUrl": "/images/programme/conf_6.png",
        "place": "Salle de l'instant présent"
      }
    
    ]
  }
};

export default function Programme() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-2">
      <h1 className="text-center text-xl text-[#218393] mb-8 font-playfair">
        Programme Salon de l&apos;être Blavozy 2025
      </h1>
      
      {/* PDFダウンロードリンク */}
      <div className="text-center mb-8">
        <a 
          href="/images/programme/salon-de-lêtre-VERSO-Flyer-2025.pdf" 
          download="Programme-Salon-de-lêtre-Blavozy-2025.pdf"
          className="inline-flex items-center gap-2 bg-[#218393] text-white px-6 py-3 rounded-lg hover:bg-[#1a6b7a] transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          📄 Télécharger le programme PDF
        </a>
      </div>
      
      {/* 各日のセクション */}
      {Object.entries(programmeData).map(([dayKey, dayData]) => (
        <div key={dayKey} className="mb-8">
          {/* 日付ヘッダー - スティッキー */}
          <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-emerald-200 py-3 mb-4 shadow-sm">
            <h2 className="text-center text-lg text-[#218393] font-playfair font-bold flex items-center justify-center gap-2">
              📅 {dayData.date}
            </h2>
          </div>
          
          {/* イベントリスト */}
          <div className="space-y-4">
            {dayData.events.map((event, index) => (
              <div key={index} className="bg-amber-50 border border-emerald-700 rounded-lg p-6">
                <div className="flex gap-6">
                  {/* 左側：イベント情報 */}
                  <div className="flex-1">
                                         {/* 時間、バッジ、場所 */}
                     <div className="flex items-center gap-3 mb-3">
                       <span className="text-lg font-semibold text-emerald-700">
                         {event.time}
                       </span>
                                               <span className={`text-xs font-bold px-2 py-1 rounded shadow-md ${
                          event.type === "CONFÉRENCE"
                            ? "bg-orange-600 text-white" 
                            : "bg-amber-200 text-emerald-700"
                        }`}>
                          {event.type}
                        </span>
                       {event.place && (
                         <span className="text-xs text-emerald-600 font-medium px-2 py-1 bg-emerald-50 border border-emerald-200 rounded">
                           📍 {event.place}
                         </span>
                       )}
                     </div>
                    
                                         {/* 主催者と説明を1列に */}
                     <div className="text-gray-700 leading-relaxed">
                       <span className="text-lg font-semibold text-emerald-700">
                         {event.organizer}
                       </span>
                       <span className="ml-2">- {event.description}</span>
                     </div>
                  </div>
                  
                  {/* 右側：写真（存在する場合のみ）- デスクトップのみ表示 */}
                  {event.imageUrl && event.imageUrl !== "null" && event.imageUrl !== null && (
                    <div className="hidden md:block flex-shrink-0">
                      <Image 
                        src={event.imageUrl} 
                        alt={event.organizer} 
                        width={160}
                        height={120}
                        className="w-40 h-30 object-cover rounded shadow-md" 
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <ScrollToTop />
    </div>
  );
} 