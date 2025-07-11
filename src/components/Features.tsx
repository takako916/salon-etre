// components/Features.tsx
import Card from "@/components/Card";

export default function Features() {
  const items = [
    {
      title: "+ de 40 exposants",
      description:
        "Massage, réflexologie, énergétique chinoise, lithothérapie, coaching… Venez découvrir et tester.",
      href: "/exposants",
    },
    {
      title: "Conférences & ateliers",
      description:
        "Des spécialistes animent des temps d'initiation et d'apprentissage tout le week-end.",
      href: "/programme",
    },
    {
      title: "Nouveauté 2025 : Art Divinatoire",
      description:
        "Tarot, astrologie et approches intuitives pour explorer une autre facette du soin de soi.",
      isNew: true,
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((f) => (
          <Card key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
