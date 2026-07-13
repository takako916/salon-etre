import SalonCard from "./SalonCard";

const featureItems = [
  {
    title: "Exposants",
    description:
      "Massage, réflexologie, énergétique, lithothérapie, coaching… Venez découvrir et tester.",
    href: "/exposants",
    buttonText: "Liste d'exposants",
  },
  {
    title: "Conférences & ateliers",
    description:
      "Des spécialistes animent des temps d'initiation et d'apprentissage tout le week-end.",
    href: "/programme",
    buttonText: "Programme",
  },
  {
    title: "Édition 2026",
    description:
      "Une nouvelle édition du salon pour explorer le bien-être sous toutes ses formes.",
  },
] as const;

export default function SalonFeatures() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      <div className="grid gap-6 md:grid-cols-3">
        {featureItems.map((item) => (
          <SalonCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
