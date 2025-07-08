export default function NousContacter() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-center text-xl text-[#218393] mb-8">Nous contacter</h2>
      <div className="bg-[#fcf7ea] rounded-xl p-8 space-y-6">
        <div className="text-lg font-semibold text-center">
          Vous souhaitez exposer au Salon de l&apos;être ou poser une question ?<br />
          N&apos;hésitez pas à nous contacter !
        </div>
        <div className="space-y-2 text-center">
          <div className="font-bold">Organisation :</div>
          <div>PRODUCTION DIRECTE – Victor MOUTBEKA</div>
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