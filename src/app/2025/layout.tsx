import type { Metadata } from "next";
import Navbar2025 from "@/components/Navbar";
import Breadcrumb2025 from "@/components/Breadcrumb";
import Footer2025 from "@/components/Footer";
import ConditionalBanner2025 from "@/components/ConditionalBanner";
export const metadata: Metadata = {
  title: {
    default: "Salon de l'être Blavozy 2025 | Bien-être Haute-Loire 43",
    template: "%s | Salon de l'être Blavozy",
  },
  description:
    "Salon de l'être à Blavozy (43) : bien-être, massage, réflexologie, développement personnel. 10-12 octobre 2025. Proche Le Puy-en-Velay.",
  openGraph: {
    siteName: "Salon de l'être Blavozy",
    title: "Salon de l'être Blavozy 2025 | Bien-être Haute-Loire 43",
    description:
      "Salon de l'être à Blavozy (43) : bien-être, massage, réflexologie, développement personnel. 10-12 octobre 2025. Proche Le Puy-en-Velay.",
    url: "https://salon-etre.vercel.app/2025",
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
  alternates: {
    canonical: "https://salon-etre.vercel.app/2025",
  },
};

export default function Layout2025({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ConditionalBanner2025 />
      <Navbar2025 />
      <Breadcrumb2025 />
      {children}
      <Footer2025 />    </>
  );
}
