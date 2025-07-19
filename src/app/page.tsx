import { Metadata } from 'next';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Timeline from '@/components/Timeline';
import About from '@/components/About';

export const metadata: Metadata = {
  title: "Salon de l'être Blavozy 2025 | Bien-être Haute-Loire 43",
  description: "Salon de l'être à Blavozy (43, Haute-Loire) : bien-être, massage, réflexologie, énergétique, lithothérapie, coaching, conférences, ateliers, art divinatoire, tarot, astrologie, développement personnel, soins naturels, spiritualité, et plus. Proche Le Puy-en-Velay (Le Puy en Velay).",
  keywords: "salon bien-être, Blavozy, Haute-Loire, 43, Le Puy-en-Velay, Le Puy en Velay, Puy en Velay, salon bien-être Puy en Velay, bien-être Haute-Loire, massage, réflexologie, énergétique, lithothérapie, coaching, conférences, ateliers, art divinatoire, tarot, astrologie, développement personnel, soins naturels, spiritualité, médium, magnétiseur, sexothérapie, cartomancie",
  openGraph: {
    title: "Salon de l'être Blavozy 2025 | Bien-être Haute-Loire 43",
    description: "Salon de l'être à Blavozy (43, Haute-Loire) : bien-être, massage, réflexologie, énergétique, lithothérapie, coaching, conférences, ateliers, art divinatoire, tarot, astrologie, développement personnel, soins naturels, spiritualité, et plus. Proche Le Puy-en-Velay.",
    url: "https://salon-etre.vercel.app",
    siteName: "Salon de l'être Blavozy",
    images: [
      {
        url: "/images/affiche2025.png",
        width: 1200,
        height: 630,
        alt: "Salon de l'être Blavozy 2025",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salon de l'être Blavozy 2025 | Bien-être Haute-Loire 43",
    description: "Salon de l'être à Blavozy (43, Haute-Loire) : bien-être, massage, réflexologie, énergétique, lithothérapie, coaching, conférences, ateliers, art divinatoire, tarot, astrologie, développement personnel, soins naturels, spiritualité, et plus. Proche Le Puy-en-Velay.",
    images: ["/images/affiche2025.png"],
  },
  alternates: {
    canonical: "https://salon-etre.vercel.app",
  },
};

export default function Home() {
  return (
    <>
      <About />
      <Gallery />
      <Features />
      <Timeline /> {/* ← 次フェーズで実装予定 */}
    </>
  );
}
