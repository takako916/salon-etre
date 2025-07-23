import { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nous Contacter | Salon de l'être Blavozy 2025 | Exposer & Informations",
  description: "Contactez l'organisation du Salon de l'être 2025 pour exposer. Production Directe - Victor MOUTBEKA, Marilyne CHAURAND. Tél: 06.29.18.16.58",
  keywords: "contact salon bien-être Blavozy, exposer salon bien-être, organisation salon bien-être, Victor MOUTBEKA, Marilyne CHAURAND, Haute-Loire",
  openGraph: {
    title: "Nous Contacter - Salon de l'être Blavozy 2025",
    description: "Contactez l'organisation pour exposer ou informations",
    url: "https://salon-etre.vercel.app/exposer",
  },
  alternates: {
    canonical: "https://salon-etre.vercel.app/exposer",
  },
};

export default function NousContacter() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-center text-xl text-[#218393] mb-8 font-playfair">Nous contacter</h1>
      
      {/* 写真セクション */}
      <div className="flex justify-center gap-4 mb-8">
        <div className="relative">
          <Image
            src="/images/exposer1.jpg"
            alt="Exposer 1"
            width={200}
            height={150}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/exposer2.jpg"
            alt="Exposer 2"
            width={200}
            height={150}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      
      <div className="bg-[#fcf7ea] rounded-xl p-8 space-y-6">
        <div className="text-lg font-semibold text-center">
          Vous souhaitez exposer au Salon de l&apos;être ou poser une question ?<br />
          N&apos;hésitez pas à nous contacter !
        </div>
        <div className="space-y-2 text-center">
          <div className="font-bold">Organisation :</div>
          <div>Production Directe – Victor MOUTBEKA</div>
          <div>Marilyne CHAURAND (Réflexologue)</div>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div>
            <span className="font-semibold mr-2">Téléphone :</span>
            <a href="tel:0629181658" className="text-[#218393] underline">06.29.18.16.58</a>
          </div>
          <div>
            <span className="font-semibold mr-2">Email :</span>
            <a href="mailto:salondeletre43@gmail.com" className="text-[#218393] underline">salondeletre43@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
} 