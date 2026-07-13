import { salonEventStructuredData, salonMetadata } from "@/lib/salon-seo";
import { salon2026 } from "@/lib/salon-2026";

export const metadata = salonMetadata.lieu;

const structuredData = salonEventStructuredData;

export default function Lieu() {
  return (
    <>
      <div className="max-w-5xl mx-auto py-8 px-2">
        <h1 className="text-center text-xl text-salon-primary mb-8 font-playfair">
          Lieu &amp; Accès
        </h1>
        <div className="bg-salon-surface rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
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
            />
          </div>
          <div className="w-full md:w-1/2 text-base space-y-4">
            <div>
              <div className="font-semibold">Salon du bien-être 2026</div>
              <div>L&apos;art de prendre soin de soi</div>
            </div>
            <div>
              <span className="inline-block align-middle mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline text-salon-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3.75 7.5h16.5M4.5 21h15a1.5 1.5 0 001.5-1.5V6.75a1.5 1.5 0 00-1.5-1.5h-15a1.5 1.5 0 00-1.5 1.5v12.75A1.5 1.5 0 004.5 21z" />
                </svg>
              </span>
              <span className="font-bold">Horaires :</span>
              <br />
              {salon2026.dates.labelLong} · {salon2026.hours} (les deux jours)
            </div>
            <div>
              <span className="inline-block align-middle mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline text-salon-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c4.5-6 7.5-10.125 7.5-13.125A7.5 7.5 0 0012 1.125a7.5 7.5 0 00-7.5 7.5c0 3 3 7.125 7.5 13.125z" />
                  <circle cx="12" cy="8.25" r="2.25" />
                </svg>
              </span>
              <span className="font-bold">Centre socio-culturel de Blavozy (Csc Blavozy)</span>
              <br />
              <a
                href="https://maps.google.com/?q=8+Pl.+Félix+Tempère,+43700+Blavozy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-salon-primary"
              >
                8 Pl. Félix Tempère, 43700 Blavozy
              </a>
              <div className="mt-2 text-sm text-gray-600">
                <strong>À seulement 5 minutes du Puy-en-Velay</strong>
                <br />
                Accès facile depuis Le Puy-en-Velay, Brioude, Yssingeaux et toute la Haute-Loire
              </div>
            </div>
            <div>
              <span className="inline-block align-middle mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline text-salon-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 17.25c-1.5 1.5-6.75 1.5-8.25 0s-1.5-6.75 0-8.25 6.75-1.5 8.25 0M9 12h6" />
                </svg>
              </span>
              Week-end pass : 5 € – Gratuit pour les moins de 12 ans – Parking gratuit
            </div>
            <div>
              <span className="inline-block align-middle mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline text-salon-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-3.93.149-5.657.37m15 0a48.897 48.897 0 00-6.75 0m-6.75 0a48.897 48.897 0 00-6.75 0" />
                </svg>
              </span>
              <span className="font-bold">{salon2026.catering.label}</span>
              <br />
              {salon2026.catering.description}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-salon-surface rounded-xl p-6">
          <h3 className="text-lg font-semibold text-salon-primary mb-4">
            Accès depuis Le Puy-en-Velay et la région
          </h3>
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
                <li><strong>Restauration sur place</strong> - Pendant les horaires du salon</li>
                <li><strong>Accès handicapé</strong> - Site accessible</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-salon-badge/50 rounded-lg">
            <p className="text-sm text-center">
              <strong>
                Le Salon du bien-être : l&apos;événement bien-être de référence en Haute-Loire,
                facilement accessible depuis Le Puy-en-Velay et toute la région !
              </strong>
            </p>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
