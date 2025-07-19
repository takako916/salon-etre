import "./globals.css";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL('https://salon-etre.vercel.app'),
  title: {
    default: "Salon de l'être Blavozy 2025 | Bien-être Haute-Loire 43",
    template: "%s | Salon de l'être Blavozy"
  },
  description:
    "Salon de l'être à Blavozy (43, Haute-Loire) : bien-être, massage, réflexologie, énergétique, lithothérapie, coaching, conférences, ateliers, art divinatoire, tarot, astrologie, développement personnel, soins naturels, spiritualité, et plus. Proche Le Puy-en-Velay (Le Puy en Velay).",
  keywords:
    "salon bien-être, Blavozy, Haute-Loire, 43, Le Puy-en-Velay, Le Puy en Velay, Puy en Velay, salon bien-être Puy en Velay, bien-être Haute-Loire, massage, réflexologie, énergétique, lithothérapie, coaching, conférences, ateliers, art divinatoire, tarot, astrologie, développement personnel, soins naturels, spiritualité, médium, magnétiseur, sexothérapie, cartomancie",
  authors: [{ name: "Salon de l'être Blavozy" }],
  creator: "Salon de l'être Blavozy",
  publisher: "Salon de l'être Blavozy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "qCUSiVJLqyIsWSPIvMek8WU-XOaFbLoxe3J_WGvN9Gg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
  twitter: {
    card: "summary_large_image",
    title: "Salon de l'être Blavozy 2025 | Bien-être Haute-Loire 43",
    description: "Salon de l'être à Blavozy (43, Haute-Loire) : bien-être, massage, réflexologie, énergétique, lithothérapie, coaching, conférences, ateliers, art divinatoire, tarot, astrologie, développement personnel, soins naturels, spiritualité, et plus. Proche Le Puy-en-Velay.",
    images: ["/images/affiche2025.png"],
  },
  alternates: {
    canonical: "https://salon-etre.vercel.app",
  },
  other: {
    'application-name': 'Salon de l\'être Blavozy',
    'apple-mobile-web-app-title': 'Salon de l\'être Blavozy',
    'msapplication-TileColor': '#218393',
    'theme-color': '#218393',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 構造化データ（Organization）
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Salon de l'être Blavozy",
    "url": "https://salon-etre.vercel.app",
    "logo": "https://salon-etre.vercel.app/images/logo.png",
    "description": "Salon de l'être à Blavozy : bien-être, massage, réflexologie, développement personnel. Proche Le Puy-en-Velay.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8 Pl. Félix Tempère",
      "addressLocality": "Blavozy",
      "postalCode": "43700",
      "addressRegion": "Haute-Loire",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "FR"
    },
    "sameAs": [
      "https://salon-etre.vercel.app"
    ]
  };

  // WebSite構造化データ
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Salon de l'être Blavozy",
    "url": "https://salon-etre.vercel.app",
    "description": "Site officiel du Salon de l'être à Blavozy - 6e édition 2025",
    "publisher": {
      "@type": "Organization",
      "name": "Salon de l'être Blavozy"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://salon-etre.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="fr">
      <body>
        {/* 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
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
