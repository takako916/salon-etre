import "./globals.css";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Script from "next/script";

export const metadata = {
  title: "Salon de l'être Blavozy 2025 | Bien-être Haute-Loire 43",
  description:
    "Salon de l'être à Blavozy (43, Haute-Loire) : bien-être, massage, réflexologie, énergétique, lithothérapie, coaching, conférences, ateliers, art divinatoire, tarot, astrologie, développement personnel, soins naturels, spiritualité, et plus. Proche Le Puy-en-Velay (Le Puy en Velay).",
  keywords:
    "salon bien-être, Blavozy, Haute-Loire, 43, Le Puy-en-Velay, Le Puy en Velay, Puy en Velay, salon bien-être Puy en Velay, bien-être Haute-Loire, massage, réflexologie, énergétique, lithothérapie, coaching, conférences, ateliers, art divinatoire, tarot, astrologie, développement personnel, soins naturels, spiritualité, médium, magnétiseur, sexothérapie, cartomancie",
  verification: {
    google: "qCUSiVJLqyIsWSPIvMek8WU-XOaFbLoxe3J_WGvN9Gg",
  },
  openGraph: {
    siteName: "Salon de l'être Blavozy",
    title: "Salon de l'être Blavozy 2025 | Bien-être Haute-Loire 43",
    description:
      "Salon de l'être à Blavozy (43, Haute-Loire) : bien-être, massage, réflexologie, énergétique, lithothérapie, coaching, conférences, ateliers, art divinatoire, tarot, astrologie, développement personnel, soins naturels, spiritualité, et plus. Proche Le Puy-en-Velay.",
    url: "https://salon-etre.vercel.app",
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKV7BJV5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PKV7BJV5');
          `}
        </Script>
        <Banner />
        <Navbar />
        <Breadcrumb />
        {children}
        <Footer />
      </body>
    </html>
  );
}
