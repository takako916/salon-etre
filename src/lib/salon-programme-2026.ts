import { salon2026 } from "./salon-2026";

export type ProgrammeEventType = "CONFÉRENCE" | "ATELIER" | "ANIMATION";

export type ProgrammeEvent2026 = {
  time: string;
  type: ProgrammeEventType;
  /** Prénom Nom / organisateur */
  name?: string | null;
  /** Titre de la conférence / atelier */
  title?: string | null;
  /** Contenu / description */
  description?: string | null;
  /** Image optionnelle (affichée en petit) */
  imageUrl?: string | null;
};

export type ProgrammeDay2026 = {
  key: string;
  date: string;
  hours: string;
  events: ProgrammeEvent2026[];
};

export const salonProgramme2026: ProgrammeDay2026[] = [
  {
    key: salon2026.dates.days[0].key,
    date: salon2026.dates.days[0].date,
    hours: salon2026.dates.days[0].hours,
    events: [
      // Exemple — à remplacer / compléter au fur et à mesure :
      {
        time: "Tout le week-end sur demande",
        type: "ATELIER",
        name: "Takako Onodera - Chizoukou",
        title: "Atelier origami",
        description: "Atelier de fabrication de guirlandes en origami, sur demande au stand.",
        imageUrl: null,
      },
      {
        time: "10h00-11h00",
        type: "ATELIER",
        name: "Gire Joëlle",
        title: "Atelier crochet",
        description: "Découverte du crochet.",
        imageUrl: "/images/programme/2026/atelier_1.png",
      },
      {
        time: "10h30-12h00",
        type: "ATELIER",
        name: "Audrey Le Gall - Le Cocon Créatif",
        title: "Découverte de Cocon Créatif",
        description: "Un espace doux et artistique de création et de retour à soi. Ouvert à tous, sans prérequis.",
        imageUrl: "/images/programme/2026/atelier_2.png",
      },
      {
        time: "11h00-12h00",
        type: "ATELIER",
        name: "Alice Laurent - Aroma'Life",
        title: "Les huiles essentielles & les enfants : les bons réflexes pour les utiliser en toute sécurité.",
        description: null,
        imageUrl: null,
      },
      {
        time: "11h00-12h00",
        type: "CONFÉRENCE",
        name: "Laura Coniasse- La Voix des Métamorph’Oses",
        title: "Dans un monde en pleine évolution : comment réussir à vivre une vie paisible (relations, projets personnels et professionnels) ?",
        description: null,
        imageUrl: "/images/programme/2026/conf_1.png",
      },
      {
        time: "13h00-13h30",
        type: "ANIMATION",
        name: null,
        title: "Quiz sur le bien-être : cadeaux à gagner.",
        description: null,
        imageUrl: null,
      },
      {
        time: "14h00-15h00",
        type: "CONFÉRENCE",
        name: "Véronique Vérové - Numérologue humaniste",
        title: "Human Design : et si votre date de naissance révélait votre façon naturelle de fonctionner ?",
        description: null,
        imageUrl: null,
      },
      {
        time: "15h00-16h00",
        type: "CONFÉRENCE",
        name: "Thomas Ploton - Espace Soreï",
        title: "Constellation familiale et gestion des émotions.",
        description: null,
        imageUrl: "/images/programme/2026/conf_2.png",
      },
      {
        time: "15h00-16h00",
        type: "ATELIER",
        name: "Olivier Rossignol - Eveil Matriciel",
        title: "Découverte du tambour et de la table vibratoire, avec vente sur place.",
        description: null,
      },
      {
        time: "16h00-17h00",
        type: "ATELIER",
        name: "Wellness by Coline",
        title: "Yoga, méditation, respiration",
        description: "Atelier et démonstration de yoga.",
        imageUrl: null,
      },
      {
        time: "1700-18h00",
        type: "CONFÉRENCE",
        name: "Claire Henquet Autric - Santé mentale et résilience.",
        title: "« Vous ne guérirez jamais ! » - Conférence-témoignage de Claire Henquet.",
        description:null,
        imageUrl: "/images/programme/2026/conf_3.png",
      },
      {
        time: "1800-19h00",
        type: "ANIMATION",
        name: "Spectacle de clôture du salon 1re journée",
        title: "Wiwi:Show de danse : Freestyle Foot (Champion du monde Kill The Beat 2022, Top 8 Championnat de France 2026) & TEAM Production Directe - « Laisse-toi porter par le son »",
        description:null,
        imageUrl: null,
      },
    ],
  },
  {
    key: salon2026.dates.days[1].key,
    date: salon2026.dates.days[1].date,
    hours: salon2026.dates.days[1].hours,
    events: [
      {
        time: "Tout le week-end sur demande",
        type: "ATELIER",
        name: "Takako Onodera - Chizoukou",
        title: "Atelier origami",
        description: "Atelier de fabrication de guirlandes en origami, sur demande au stand.",
        imageUrl: null,
      },
      {
        time: "10h00-11h00",
        type: "ATELIER",
        name: "Olivier Rossignol - Eveil Matriciel",
        title: "Découverte du tambour et de la table vibratoire, avec vente sur place.",
        description:null,
        imageUrl: null,
      },
      {
        time: "10h00-11h00",
        type: "ATELIER",
        name: "Alice Laurent - Aroma'Life",
        title: "Entreprendre avec les huiles essentielles pour particuliers & professionnels.",
        description: null,
        imageUrl: "/images/programme/2026/atelier_3.png",
      },
      {
        time: "11h00-12h00",
        type: "CONFÉRENCE",
        name: "Véronique Vérové - Numérologue humaniste",
        title: "Human Design : mieux manger, mieux dormir… Et si votre corps avait son propre mode d’emploi ?",
        description: null,
        imageUrl: "/images/programme/2026/conf_4.png",
      },
      {
        time: "13h00-14h00",
        type: "ANIMATION",
        name: "CONCERT - Groupe TAMAÏ",
        title: "Handpan & Co.",
        description: null,
        imageUrl: null,
      },
      {
        time: "14h00-15h00",
        type: "ATELIER",
        name: "Laura Coniasse - La Voix des Métamorph’Oses",
        title: "Pratique de réveil corporel et d’écoute intérieure pour se libérer des émotions négatives.",
        description: null,
        imageUrl: null,
      },
      {
        time: "14h00-15h30",
        type: "ATELIER",
        name: "Audrey Le Gall - Le Cocon Créatif",
        title: "Un espace doux et artistique de création et de retour à soi. Ouvert à tous, sans prérequis.",
        description: null,
        imageUrl: null,
      },
      {
        time: "15h00-16h00",
        type: "ATELIER",
        name: "Patricia Vezzaro – Shiatsu humain-équin-massage",
        title: "Voyage sonore au tambour chamanique : du shiatsu au voyage sonore, une histoire de toucher, d’écoute et de vibration.",
        description: null,
        imageUrl: "/images/programme/2026/atelier_4.png",
      },
      {
        time: "16h00-17h00",
        type: "ATELIER",
        name: "Wellness by Coline - Yoga, méditation, respiration",
        title:  "Yoga, méditation, respiration",
        description: "Atelier et démonstration de yoga.",
        imageUrl: "/images/programme/2026/atelier_5.png",
      },
      {
        time: "17h00-18h00",
        type: "ATELIER",
        name: "Morgan Emica - Solaria Alchimia",
        title: "Atelier découverte : lecture intuitive du corps.",
        description: null,
        imageUrl: null,
      },
    ],
  },
];
