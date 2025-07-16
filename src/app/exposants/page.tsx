import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Exposants Salon de l'être Blavozy 2025 | +40 Professionnels du Bien-être",
  description: "Découvrez les exposants du Salon de l'être 2025 : massage, réflexologie, kinésiologie, magnétisme, sexothérapie, cartomancie, art thérapie. +40 professionnels du bien-être à Blavozy.",
  keywords: "exposants salon bien-être, massage Blavozy, réflexologie, kinésiologie, magnétiseur, sexothérapie, cartomancie, art thérapie, bien-être Haute-Loire",
  openGraph: {
    title: "Exposants Salon de l'être Blavozy 2025",
    description: "+40 professionnels du bien-être et du développement personnel",
    url: "https://salon-etre.vercel.app/exposants",
  },
};

const exposants = [
  {
    name: "HELIE ANNE",
    activity: "DANSE DE L'ÊTRE",
    description: `Danse ô cœur de soi : connexion aux 5 éléments.
Un moment de mouvement libre et accompagnée par ma voix pour vibrer la terre, l'eau, le feu, l'air et l'éther.
La danse de l'Être® permet de se recentrer et libérer ce qui demande d'être exprimé, dans la bienveillance et la joie du corps, du cœur.`,
    imageUrl: "/images/helieanne.png",
  },
  {
    name: "LYDIE CLERC",
    activity: " KINÉSIOLOGUE ET PRATICIENNE EFT",
    description: "Grâce à un test musculaire, la kinésiologie permet d'avoir accès à des informations au niveau du corps.\nLe but : déceler et corriger les déséquilibres et les stress d'origine physique, mentale et émotionnelle.",
    imageUrl: "/images/lydieclerc.png"
  },
  {
    name: "PHILIPPE CLAËR",
    activity: "MAGNÉTISEUR",
    description: "Magnétiseur / rebouteux",
    imageUrl: "/images/philippeclaer.png"
  },
  {
    name: "CHEVALIER DELPHINE",
    activity: "MÉDIUMNITÉ – ART THÉRAPEUTE",
    description: "Un accompagnement personnalisé autour du deuil et des grands passages de vie est proposé avec douceur, respect et profondeur.",
    imageUrl: "/images/chevalierdelphine.png" 
},
  {
    name: "LAURIANE CYDZIK",
    activity: "SEXOTHÉRAPIE",
    description: "Sexothérapeute\nThérapies individuelles et de couples.",
    imageUrl: "/images/laurianecydzik.png"
  },
  {
    name: "ÉCLAIREUSE DE VIE",
    activity: "CARTOMANCIE",
    description: "Cartomancie – accompagnement vers soi",
    imageUrl: "/images/ecailleuredevie.png"
  },
];

export default function Exposants() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-2">
      <h2 className="text-center text-xl text-[#218393] mb-8 font-playfair">Liste des exposants 2025</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {exposants.map((exposant, i) => (
          <div key={i} className="flex bg-[#fcf7ea] border border-emerald-700 rounded p-6 items-center gap-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex-shrink-0">
              {exposant.imageUrl ? (
                <img src={exposant.imageUrl} alt={exposant.name} className="w-24 h-32 object-cover rounded" />
              ) : (
                <svg width="96" height="128" viewBox="0 0 96 128" fill="none">
                  <rect x="12" y="16" width="72" height="96" rx="8" stroke="#222" strokeWidth="6" fill="none" />
                  <polygon points="24,104 48,64 72,104" fill="#222" />
                  <circle cx="36" cy="40" r="8" fill="#222" />
                </svg>
              )}
            </div>
            <div>
              <div className="font-serif text-lg font-semibold mb-2">
                {exposant.name} - {exposant.activity}
              </div>
              <div className="text-sm whitespace-pre-line">{exposant.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 