import Image from "next/image";
import ScrollToTop from "@/components/ScrollToTop";
import { salon2026 } from "@/lib/salon-2026";
import {
  salonProgramme2026,
  type ProgrammeEventType,
} from "@/lib/salon-programme-2026";
import { salonMetadata } from "@/lib/salon-seo";

export const metadata = salonMetadata.programme;

function typeBadgeClass(type: ProgrammeEventType) {
  switch (type) {
    case "CONFÉRENCE":
      return "bg-salon-cta text-white";
    case "ATELIER":
      return "bg-salon-badge text-salon-accent";
    case "ANIMATION":
      return "bg-salon-primary text-white";
    default:
      return "bg-gray-200 text-gray-700";
  }
}

export default function Programme() {
  const hasEvents = salonProgramme2026.some((day) => day.events.length > 0);

  return (
    <div className="mx-auto max-w-5xl px-2 py-8">
      <h1 className="mb-4 text-center font-playfair text-xl text-salon-primary">
        Programme Salon du bien-être 2026
      </h1>
      <p className="mb-8 text-center text-salon-primary">
        {salon2026.dates.labelLong} · {salon2026.hours} (les deux jours)
      </p>

      <div className="mb-8 text-center">
        <a
          href="/images/programme/2026/programme_2026.pdf"
          download="Programme-Salon-du-bien-etre-2026.pdf"
          className="inline-flex items-center gap-2 rounded-lg bg-salon-primary px-6 py-3 text-white shadow-md transition-colors duration-200 hover:bg-salon-accent hover:shadow-lg"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          📄 Télécharger le programme PDF
        </a>
      </div>

      {!hasEvents && (
        <div className="mb-8 rounded-lg border border-salon-accent bg-salon-surface p-8 text-center">
          <p className="text-lg text-gray-700">Le programme sera publié prochainement.</p>
          <p className="mt-2 text-sm text-gray-500">
            Revenez bientôt pour découvrir les conférences, ateliers et animations de
            l&apos;édition 2026.
          </p>
        </div>
      )}

      {salonProgramme2026.map((dayData) => (
        <div key={dayData.key} className="mb-8">
          <div className="sticky top-0 z-40 mb-4 border-b border-salon-accent/30 bg-white/95 py-3 shadow-sm backdrop-blur-sm">
            <h2 className="text-center font-playfair text-lg font-bold text-salon-primary">
              📅 {dayData.date}
            </h2>
            <p className="mt-1 text-center text-sm text-salon-accent">{dayData.hours}</p>
          </div>

          {dayData.events.length === 0 ? (
            <p className="py-4 text-center text-sm text-gray-500">
              Animations à venir pour cette journée.
            </p>
          ) : (
            <div className="space-y-4">
              {dayData.events.map((event, index) => (
                <article
                  key={`${dayData.key}-${index}`}
                  className="rounded-lg border border-salon-accent bg-salon-surface p-5 md:p-6"
                >
                  <div className="flex gap-4 md:gap-5">
                    <div className="min-w-0 flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-2 md:gap-3">
                        <span className="text-lg font-semibold text-salon-accent">
                          {event.time}
                        </span>
                        <span
                          className={`rounded px-2 py-1 text-xs font-bold shadow-md ${typeBadgeClass(event.type)}`}
                        >
                          {event.type}
                        </span>
                      </div>

                      <div className="leading-relaxed text-gray-700">
                        {event.name && (
                          <div className="text-lg font-semibold text-salon-accent">
                            {event.name}
                          </div>
                        )}
                        {event.title && (
                          <div className="mt-1 font-medium text-salon-primary">
                            {event.title}
                          </div>
                        )}
                        {event.description && (
                          <p className="mt-1 text-sm md:text-base">{event.description}</p>
                        )}
                      </div>
                    </div>

                    {event.imageUrl && (
                      <div className="hidden flex-shrink-0 md:block">
                        <Image
                          src={event.imageUrl}
                          alt={
                            [event.name, event.title].filter(Boolean).join(" — ") ||
                            "Programme"
                          }
                          width={96}
                          height={72}
                          className="h-[72px] w-24 rounded object-cover shadow-md"
                        />
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      ))}

      <ScrollToTop />
    </div>
  );
}
