import Image from "next/image";
import { salonMetadata } from "@/lib/salon-seo";

export const metadata = salonMetadata.exposer;

export default function NousContacter() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-center text-xl text-salon-primary mb-8 font-playfair">
        Nous contacter
      </h1>

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

      <div className="bg-salon-surface rounded-xl p-8 space-y-6">
        <div className="text-lg font-semibold text-center">
          Vous souhaitez exposer au Salon du bien-être 2026 ou poser une question ?
          <br />
          N&apos;hésitez pas à nous contacter !
        </div>
        <div className="space-y-2 text-center">
          <div className="font-bold">Organisation :</div>
          <div>Production Directe – Victor MOUTBEKA</div>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div>
            <span className="font-semibold mr-2">Téléphone :</span>
            <a href="tel:0629181658" className="text-salon-primary underline">
              06.29.18.16.58
            </a>
          </div>
          <div>
            <span className="font-semibold mr-2">Email :</span>
            <a href="mailto:salondeletre43@gmail.com" className="text-salon-primary underline">
              salondeletre43@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
