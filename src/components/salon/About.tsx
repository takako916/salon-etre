import { salon2026 } from "@/lib/salon-2026";

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="mb-4 text-2xl font-bold text-salon-primary text-center font-playfair">
        Salon du bien-être : l&apos;Art de Prendre Soin de Soi
      </h1>
      <p className="text-center text-salon-primary font-semibold mb-6">
        {salon2026.dates.labelLong} · {salon2026.hours} (les deux jours)
      </p>      <p className="leading-7">
        Le <strong>Salon du bien-être</strong>, organisé à{" "}
        <strong>Blavozy en Haute-Loire</strong>, à seulement 5 minutes du{" "}
        <strong>Puy-en-Velay</strong>, est un événement dédié au bien-être sous
        toutes ses formes&nbsp;: soins naturels, développement personnel,
        approches énergétiques ou spirituelles. Conférences, ateliers, rencontres
        avec des professionnels… Ce salon invite chacun à prendre soin de soi
        dans un cadre bienveillant et inspirant.
      </p>
      <p className="leading-7 mt-4">
        <strong>Facilement accessible depuis Le Puy-en-Velay</strong> et toute
        la Haute-Loire, le Salon du bien-être est l&apos;événement incontournable
        de la région. Que vous veniez du Puy-en-Velay, de Brioude,
        d&apos;Yssingeaux ou d&apos;ailleurs en Haute-Loire, rejoignez-nous pour
        un week-end de découverte et de bien-être.
      </p>
    </section>
  );
}
