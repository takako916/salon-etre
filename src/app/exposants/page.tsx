import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Exposants Salon de l'être Blavozy 2025 | Bien-être Haute-Loire",
  description: "Exposants Salon de l'être 2025 : massage, réflexologie, kinésiologie, magnétisme, sexothérapie, cartomancie. +40 professionnels à Blavozy.",
  keywords: "exposants salon bien-être, massage Blavozy, réflexologie, kinésiologie, magnétiseur, sexothérapie, cartomancie, art thérapie, bien-être Haute-Loire",
  openGraph: {
    title: "Exposants Salon de l'être Blavozy 2025",
    description: "+40 professionnels du bien-être et du développement personnel",
    url: "https://salon-etre.vercel.app/exposants",
  },
  alternates: {
    canonical: "https://salon-etre.vercel.app/exposants",
  },
};

const exposants = [
  {
    name: "HELIE ANNE",
    activity: "DANSE DE L'ÊTRE",
    description: `Danse ô cœur de soi : connexion aux 5 éléments.
Un moment de mouvement libre et accompagnée par ma voix pour vibrer la terre, l'eau, le feu, l'air et l'éther.
La danse de l'Être® permet de se recentrer et libérer ce qui demande d'être exprimé, dans la bienveillance et la joie du corps, du cœur.`,
    imageUrl: "/images/exposants/helieanne.png",
    conference: false,
  },
  {
    name: "LYDIE CLERC",
    activity: " KINÉSIOLOGUE ET PRATICIENNE EFT",
    description: "Grâce à un test musculaire, la kinésiologie permet d'avoir accès à des informations au niveau du corps.\nLe but : déceler et corriger les déséquilibres et les stress d'origine physique, mentale et émotionnelle.",
    imageUrl: "/images/exposants/lydieclerc.png",
    conference: false,
  },
  {
    name: "PHILIPPE CLAËR",
    activity: "MAGNÉTISEUR",
    description: "Magnétiseur / rebouteux",
    imageUrl: "/images/exposants/philippeclaer.png",
    conference: false,
  },
  {
    name: "CHEVALIER DELPHINE",
    activity: "MÉDIUMNITÉ – ART THÉRAPEUTE",
    description: "Un accompagnement personnalisé autour du deuil et des grands passages de vie est proposé avec douceur, respect et profondeur.",
    imageUrl: "/images/exposants/chevalierdelphine.png",
    conference: true,
  },
  {
    name: "LAURIANE CYDZIK",
    activity: "SEXOTHÉRAPIE",
    description: "Sexothérapeute\nThérapies individuelles et de couples.",
    imageUrl: "/images/exposants/laurianecydzik.png",
    conference: true,
  },
  {
    name: "ÉCLAIREUSE DE VIE",
    activity: "CARTOMANCIE",
    description: "Cartomancie – accompagnement vers soi",
    imageUrl: "/images/exposants/ecailleuredevie.png",
    conference: false,
  },
  {
    name: "HYVERNAT MARIE-PAULE",
    activity: "LUMIÈRE PAIX",
    description: "Pratique énergétique, Accompagnement personnalisé Passage d'Ames et Guidance d'Ames. Ecriture intuitive. Découvertes des Êtres de la Nature.\nProposition sur le stand de découvrir l'écriture automatique, à partir d'une problématique ciblée. Cout :10€",
    imageUrl: "/images/exposants/lumierepaix.png",
    conference: false,
  },
  {
    name: "VÉRONIQUE VÉROVE",
    activity: "NUMÉROLOGIE",
    description: "Numerologie (humaniste, pentanalogie, human design) astrologie indienne",
    imageUrl: "/images/exposants/veroniqueverove.png",
    conference: false,
  },
  {
    name: "DELPHINE CHEVALIER",
    activity: "MÉDIUMNITÉ - ART THÉRAPEUTE",
    description: "Médiumnité – soin de l'âme-guidancemédiumnité – soin de l'âme-guidance\n accompagnement au deuil\n art-thérapeute",
    imageUrl: "/images/exposants/delphinechevalier.png",
    conference: false,
  },
  {
    "name": "AMANDINE PELLIZZARI",
    "activity": "TYM AMANDINE", 
    "description": "• Massage thaï (habillé, au sol sur futon, sans huile)\n• Réflexologie plantaire thaï (habillé, au sol ou sur table, avec huile bio)\n• Massage à l'huile ‹ deep tissue › (sur table / avec huile bio) au choix: – dos – mains & bras – pieds & jambes",
    "imageUrl": "/images/exposants/amandinepellizzari.png",
    conference: false,
  },
  {
    name: "SOLARIA ALCHIMIA - EMICA MORGAN",
    activity: "CLAIRE VOYANCE\nACCOMPAGNEMENT SUR L'IDENTITÉ",
    description: `Déployer sa raison d'être par le subtil.\nÉnergéticien, Alchimiste de la conscience.\nMettez vos perceptions de clairvoyance au service de votre pouvoir personnel.`,
    imageUrl: "/images/exposants/emicamorgan.png",
    conference: true,
  },
  {
    name: "DELPHINE SHIATSU 43",
    activity: "SHIATSU",
    description: "Spécialiste en shiatsu – bien-être et accompagnement à la santé",
    imageUrl: "/images/exposants/shiatsu43.png",
    conference: true,
  },
  {
    name: "SÉBASTIEN BONNET",
    activity: "CABINET DE THÉRAPIE MANUELLE ET ÉNERGÉTIQUE",
    description: "Nous pratiquons l'acupression antidouleur issue de techniques provenant directement des textes anciens comme le huangdi neijing et le nan jing.\nla méthode d'acupression utilisée est douce et indolore, car elle agit à distance des zones douloureuses. elle est particulièrement efficace pour soulager :\n- douleurs chroniques et anciennes – tendinites – entorses – sciatiques – lombalgies – cervicalgies – autres douleurs musculo – squelettiques",
    imageUrl: "/images/exposants/sebastienbonnet.png",
    conference: false,
  },
  {
    name: "ROUSSIGNOL OLIVIER",
    activity: "L'ÉVEIL MATRICIEL",
    description: "Fabrication de tambours et\nréalisation de séminaires chamaniques,\nséances biorésonance, lecture ‹ des\nénergies de naissance › et votre ‹\nétoile sacrée › avec les 22 arcanes\nmajeurs du tarot de marseille.",
    imageUrl: "/images/exposants/roussignololivier.png",
    conference: true,
  },
  {
    name: "ROSELYNE MIEJAC",
    activity: "NATUROPATHIE",
    description: "Aromathérapeute\nphytothérapeute\nanimatrice sortie plantes sauvages",
    imageUrl: "/images/exposants/roselynemiejac.png",
    conference: false,
  },
  {
    name: "ROSELINE SHIATSU",
    activity: "PRATICIENNE SHIATSU",
    description: "Praticienne shiatsu et massage tuina (shiatsu sur chaise)",
    imageUrl: "/images/exposants/roselineshiatsu.png",
    conference: false,
  },
  {
    name: "PATRICIA VEZZARO",
    activity: "SHIATSU & MASSAGE BIEN-ÊTRE",
    description: "Shiatsu humain\nMassage sensitif® de bien-être",
    imageUrl: "/images/exposants/patriciavezzaro.png",
    conference: true,
  },
  {
    "name": "BISSUEL SANDRA",
    "activity": "NATUROPATHIE",
    "description": "Naturopathie – méthode Bye Bye Allergies – consultation et formation Fleurs de Bach – ateliers huiles essentielles (thématique)",
    "imageUrl": "/images/exposants/bissuelsandra.png",
    conference: false,
  },
  {
    "name": "LES SPECIALITÉS DU VELAY - ANNIE BOISSONNEAU",
    "activity": "VENTE DE MINÉRAUX ET BIJOUTERIE",
    "description": "Vente de minéraux et de bijoux en pierres naturelles.",
    "imageUrl": "/images/exposants/annieboissonneau.png",
    conference: true,
  },
  {
    "name": "MAGNÉTIX/ PERRON MICHÈLE",
    "activity": "BIJOUX ET ACCESSOIRES MAGNÉTIQUES",
    "description": "Bijoux et accessoires magnétiques, arbres de vie, parfum Shogan.",
    "imageUrl": "/images/exposants/perronmichele.png",
    conference: false,
  },
  {
    "name": "AINSI SOI M'AIME - MICHELI PAULINE",
    "activity": "CONSEIL EN IMAGE ET DIETETIQUE",
    "description": "Conseil en image et diététique, produits exposés à la vente : infusions / thé, bons cadeaux.",
    "imageUrl": "/images/exposants/michelipauline.png",
    conference: true,
  },
  {
    "name": "MASSAGE SPORTIF - CHRISTIAN MARTEL",
    "activity": "MASSAGE SPORTIF",
    "description": "Praticien certifié.",
    "imageUrl": "/images/exposants/christianmartel.png",
    conference: false,
  },
  {
    "name": "LA VOIE D'ARTÉMIS / BIEN ÊTRE FEMININ",
    "activity": "LA VOIE D'ARTÉMIS / BIEN ÊTRE FEMININ",
    "description": "La voie d'Artémis est dédiée à l'accompagnement et au bien être féminin afin de soutenir chacune à travers les différents grands passages de la vie : puberté, cycle menstruel et problématiques féminines (endométriose, SOPK, SPM…), préconception, grossesse, postnatal, deuil périnatal, ménopause, fin de vie…",
    "imageUrl": "/images/exposants/lavoiedartemis.png",
    conference: false,
  },
  {
    "name": "LA VOIX DES METAMORPH'OSES / HYPNOTHÉRAPEUTE",
    "activity": "LA VOIX DES METAMORPH'OSES / HYPNOTHÉRAPEUTE",
    "description": "Accompagnement en libérations émotionnelles et harmonisation énergétique à l'aide de la médecine chinoise",
    "imageUrl": "/images/exposants/lavoixdesmetamorphoses.png",
    conference: true,
  },
  {
    "name": "LAROUER JULIE",
    "activity": "ENCENS BIJOUX BOUGIE",
    "description": "Encens parfumé à faible émission de carbone – cône de fumigation, bougie aromathérapie – bijoux et porte encens céramique. Tout est fait main.",
    "imageUrl": "/images/exposants/larouerjulie.png",
    conference: false,
  },
  {
    "name": "HYPNOBLISS",
    "activity": "HYPNOTHÉRAPEUTE",
    "description": "Praticienne en hypnosespirituelle régressive (vie antérieure), praticienne en hypnose ericksonienne, animatrice constellation familiale/spirituelle/organisationnelle, thérapie brève systémique.",
    "imageUrl": "/images/exposants/hypnobliss.png",
    conference: false,
  },
  {
    "name": "HAMONIE CHINOISE",
    "activity": "HC",
    "description": "Un accompagnement personnalisé autour du deuil et des grands passages de vie est proposé avec douceur, respect et profondeur.",
    "imageUrl": "/images/exposants/hamoniechinoise.png",
    conference: false,
  },
  {
    "name": "CLAIR OBSCUR - FLORENCE NICOLAS",
    "activity": "YOGA & TAROT",
    "description": "Cours de yoga, cours de tarot et guidances, copropriétaire du gîte Naya.",
    "imageUrl": "/images/exposants/florencenicolas.png",
    conference: false,
  },
  {
    "name": "CARINE GORDIENKO",
    "activity": "BEAUTY POSITIVITY",
    "description": "Conseillère bien être, produits de compléments alimentaires 100% naturels (fruits - épices - racines - légumes) de la gamme Fitline (société PM Internationale)",
    "imageUrl": "/images/exposants/carinegordienko.png",
    conference: false,
  },
  {
    "name": "AURÉLIEN BOITHIAS",
    "activity": "HYPNOSE",
    "description": "Hypnose thérapeutique, désensibilisation oculaire, accompagnement individuel et formation ennéagramme en ligne, développer la méditation spontanée (disponibilité sensorielle). RDV au cabinet et en ligne.",
    "imageUrl": "/images/exposants/aurelienboithias.png",
    conference: true,
  },
  {
    "name": "AMBRE",
    "activity": "LA VOIX ANIMALE",
    "description": "Accompagnement de l'humain et l'animal notamment dans sa relation pour plus de compréhension mutuelle, d'harmonie et de mieux être sur tous les plans grâce à la communication animale, les soins énergétiques individuels ou en duo, la naturopathie animale et les élixirs floraux et le tambour.",
    "imageUrl": "/images/exposants/ambre.png",
    conference: false,
  }
];

export default function Exposants() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-2">
      <h1 className="text-center text-xl text-[#218393] mb-8 font-playfair">Liste des exposants 2025</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {exposants.map((exposant, i) => (
          <div key={i} className="flex bg-[#fcf7ea] border border-emerald-700 rounded p-6 items-center gap-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex-shrink-0">
              {exposant.imageUrl ? (
                <div className="relative">
                  <Image 
                    src={exposant.imageUrl} 
                    alt={exposant.name} 
                    width={96}
                    height={128}
                    className="w-24 h-32 object-cover rounded" 
                  />
                  {exposant.conference && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md">
                        CONFERENCE
                      </span>
                    </div>
                  )}
                </div>
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