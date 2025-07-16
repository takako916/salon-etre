import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Programme Salon de l'être Blavozy 2025 | Conférences & Ateliers",
  description: "Découvrez le programme complet du Salon de l'être 2025 à Blavozy : conférences, ateliers, initiations et animations tout le week-end. Bien-être, développement personnel et soins naturels.",
  keywords: "programme salon bien-être, conférences bien-être, ateliers développement personnel, Blavozy 2025, soins naturels, spiritualité, massage, réflexologie",
  openGraph: {
    title: "Programme Salon de l'être Blavozy 2025",
    description: "Conférences, ateliers et animations du Salon de l'être 2025",
    url: "https://salon-etre.vercel.app/programme",
  },
};

export default function Programme() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#fcf7ea] rounded-xl m-8">
      <span className="text-xl md:text-2xl text-[#218393] font-medieval text-center">
        Plus d&apos;informations à venir très bientôt !
      </span>
    </div>
  );
} 