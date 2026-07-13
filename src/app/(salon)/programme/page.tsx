import ScrollToTop from "@/components/ScrollToTop";
import { salon2026 } from "@/lib/salon-2026";
import { salonMetadata } from "@/lib/salon-seo";

export const metadata = salonMetadata.programme;

const programmeData: Record<string, { date: string; hours: string; events: never[] }> = {
  [salon2026.dates.days[0].key]: {
    date: salon2026.dates.days[0].date,
    hours: salon2026.dates.days[0].hours,
    events: [],
  },
  [salon2026.dates.days[1].key]: {
    date: salon2026.dates.days[1].date,
    hours: salon2026.dates.days[1].hours,
    events: [],
  },
};

export default function Programme() {
  const hasEvents = Object.values(programmeData).some((day) => day.events.length > 0);

  return (
    <div className="max-w-5xl mx-auto py-8 px-2">
      <h1 className="text-center text-xl text-salon-primary mb-4 font-playfair">
        Programme Salon du bien-être 2026
      </h1>
      <p className="text-center text-salon-primary mb-8">
        {salon2026.dates.labelLong} · {salon2026.hours} (les deux jours)
      </p>

      {!hasEvents && (
        <div className="bg-salon-surface border border-salon-accent rounded-lg p-8 text-center mb-8">
          <p className="text-gray-700 text-lg">
            Le programme sera publié prochainement.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Revenez bientôt pour découvrir les conférences et ateliers de l&apos;édition 2026.
          </p>
        </div>
      )}

      {Object.entries(programmeData).map(([dayKey, dayData]) => (
        <div key={dayKey} className="mb-8">
          <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-salon-accent/30 py-3 mb-4 shadow-sm">
            <h2 className="text-center text-lg text-salon-primary font-playfair font-bold">
              📅 {dayData.date}
            </h2>
            <p className="text-center text-sm text-salon-accent mt-1">{dayData.hours}</p>
          </div>
          {dayData.events.length === 0 && (
            <p className="text-center text-gray-500 text-sm py-4">
              Animations à venir pour cette journée.
            </p>
          )}
        </div>
      ))}

      <ScrollToTop />
    </div>
  );
}
