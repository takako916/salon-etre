import "./globals.css";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Salon de l'être Blavozy 2025 | Bien-être Haute-Loire 43",
  description:
    "Salon de l'être à Blavozy (43, Haute-Loire) : bien-être, massage, réflexologie, énergétique, lithothérapie, coaching, conférences, ateliers, art divinatoire, tarot, astrologie, développement personnel, soins naturels, spiritualité, et plus. Proche Le Puy-en-Velay.",
  keywords:
    "salon bien-être, Blavozy, Haute-Loire, 43, Le Puy-en-Velay, massage, réflexologie, énergétique, lithothérapie, coaching, conférences, ateliers, art divinatoire, tarot, astrologie, développement personnel, soins naturels, spiritualité, médium, magnétiseur, sexothérapie, cartomancie",
  openGraph: {
    title: "Salon de l'être Blavozy 2025 | Bien-être Haute-Loire 43",
    description:
      "Salon de l'être à Blavozy (43, Haute-Loire) : bien-être, massage, réflexologie, énergétique, lithothérapie, coaching, conférences, ateliers, art divinatoire, tarot, astrologie, développement personnel, soins naturels, spiritualité, et plus. Proche Le Puy-en-Velay.",
    url: "https://votre-domaine.fr",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Banner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
