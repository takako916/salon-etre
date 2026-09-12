export type SalonExposant2026 = {
  name: string;
  profession: string;
  businessName?: string;
  facebook?: string;
  instagram?: string;
  website?: string;
  imageUrl: string | null;
  conference: boolean;
  atelier: boolean;
};

export const salonExposants2026: SalonExposant2026[] = [
  {
    name: "Alice Laurent",
    profession: "Conseillère et formatrice en huiles essentielles",
    businessName: "Aroma'Life",
    imageUrl: "/images/exposants/2026/alice_laurent.png",
    conference: false,
    atelier: false,
    instagram:"https://www.instagram.com/aromalifeacademie",
  },
  {
    name: "Audrey Le Gall",
    profession: "Atelier arts et bien-être",
    businessName: "Le Cocon Créatif",
    imageUrl: "/images/exposants/2026/audrey_legall.png",
    conference: false,
    atelier: true,
    instagram:"https://www.instagram.com/audrey.artiste.pro",
    facebook:"https://www.facebook.com/coconcreatif",
  },
  {
    name: "Guylène Servant",
    profession: "Coaching intuitif / Techniques de libération des émotions",
    businessName: "Go-Bonheur",
    imageUrl: "/images/exposants/2026/guylene_servant.png",
    conference: false,
    atelier: false,
    facebook:"https://www.facebook.com/profile.php?id=61574621175553",
  },
  {
    name: "Philippe Claër",
    profession: "Magnétiseur",
    imageUrl: "/images/exposants/2026/philippe_clear.png",
    conference: false,
    atelier: false,
  },
  {
    name: "Véronique Vérove",
    profession: "Numérologue — Accompagnement & conseils",
    imageUrl: "/images/exposants/2026/veronique_verove.png",
    conference: true,
    atelier: false,
    instagram:"https://www.instagram.com/veroniqueverove",
    facebook:"https://www.facebook.com/EntreCorpsetConscience",
  },
  {
    name: "Laura Coniasse",
    profession: "Libération des blocages inconscients et émotionnels",
    businessName: "La Voix des Métamorph’OSEs",
    imageUrl: "/images/exposants/2026/laura_coniasse.png",
    conference: true,
    atelier: true,
    instagram:"https://www.instagram.com/lavoixdesmetamorphoses",
    facebook:"https://www.facebook.com/profile.php?id=61567020314678",
  },
  {
    name: "Roseline Perchey",
    profession: "Shiatsu, Massage Tui Na",
    businessName: "Roseline SHIATSU",
    imageUrl: "/images/exposants/2026/roseline_perchey.png",
    conference: false,
    atelier: false,
    website:"https://www.roselineshiatsu43700.com/",
  },
];
