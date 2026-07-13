import type { Metadata } from "next";
import { salon2026 } from "./salon-2026";

export const salonSeo = {
  siteName: "Salon du bien-être",
  baseUrl: "https://salon-etre.vercel.app",
  location: "Blavozy, Haute-Loire (43)",
  venue: "Centre socio-culturel de Blavozy",
  dates: salon2026.dates.labelShort,
  hours: salon2026.hours,
  commonKeywords:
    "salon du bien-être, salon bien-être Blavozy, bien-être Haute-Loire, 43, Le Puy-en-Velay, massage, réflexologie, développement personnel, conférences bien-être, ateliers bien-être",
} as const;

function pageMetadata({
  title,
  description,
  path,
  keywords,
  openGraphDescription,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  openGraphDescription?: string;
}): Metadata {
  const url = `${salonSeo.baseUrl}${path}`;

  return {
    title,
    description,
    keywords: keywords ?? salonSeo.commonKeywords,
    openGraph: {
      title,
      description: openGraphDescription ?? description,
      url,
      siteName: salonSeo.siteName,
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: openGraphDescription ?? description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export const salonMetadata = {
  root: {
    title: "Salon du bien-être 2026",
    description: `Salon du bien-être 2026 à Blavozy (43) : ${salon2026.dates.labelLong}, ${salon2026.hours}. Bien-être, massage, réflexologie, développement personnel. Proche Le Puy-en-Velay.`,
    template: "%s | Salon du bien-être",
  },
  home: pageMetadata({
    title: "Salon du bien-être 2026 | Bien-être Haute-Loire 43",
    description: `Salon du bien-être à Blavozy (43) : ${salon2026.dates.labelLong}, ${salon2026.hours}. Massage, réflexologie, conférences et ateliers. Proche Le Puy-en-Velay.`,
    path: "/",
  }),
  programme: pageMetadata({
    title: "Programme | Salon du bien-être 2026",
    description: `Programme du Salon du bien-être 2026 à Blavozy : ${salon2026.dates.labelLong}, ${salon2026.hours}. Conférences, ateliers et initiations bien-être.`,
    path: "/programme",
    keywords: `programme salon du bien-être, conférences bien-être, ateliers développement personnel, Blavozy 2026, ${salonSeo.commonKeywords}`,
  }),
  exposants: pageMetadata({
    title: "Exposants | Salon du bien-être 2026",
    description: `Liste des exposants du Salon du bien-être 2026 à Blavozy : massage, réflexologie, énergétique, lithothérapie, coaching et plus. ${salon2026.dates.labelLong}.`,
    path: "/exposants",
    keywords: `exposants salon du bien-être, massage Blavozy, réflexologie Haute-Loire, ${salonSeo.commonKeywords}`,
  }),
  lieu: pageMetadata({
    title: "Lieu & Accès | Salon du bien-être 2026",
    description: `Adresse et accès du Salon du bien-être 2026 : ${salonSeo.venue}, 8 Pl. Félix Tempère, Blavozy. ${salon2026.dates.labelLong}, ${salon2026.hours}. Week-end pass 5 €, gratuit -12 ans. Restauration sur place. Proche Le Puy-en-Velay.`,
    path: "/lieu",
    keywords: `salon du bien-être Blavozy adresse, centre socio-culturel Blavozy, accès salon bien-être, parking Blavozy, Haute-Loire 43, ${salonSeo.commonKeywords}`,
  }),
  exposer: pageMetadata({
    title: "Contact | Salon du bien-être 2026",
    description:
      "Contactez l'organisation du Salon du bien-être 2026 pour exposer ou obtenir des informations. Production Directe – Victor MOUTBEKA. Tél : 06.29.18.16.58.",
    path: "/exposer",
    keywords: `contact salon du bien-être, exposer salon bien-être Blavozy, organisation salon bien-être, Victor MOUTBEKA, Haute-Loire, ${salonSeo.commonKeywords}`,
    openGraphDescription:
      "Contactez l'organisation du Salon du bien-être 2026 pour exposer ou obtenir des informations.",
  }),
};

export const salonEventStructuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Salon du bien-être 2026",
  description: `Salon du bien-être à Blavozy : bien-être, massage, réflexologie, développement personnel. ${salon2026.dates.labelLong}, ${salon2026.hours}. Proche Le Puy-en-Velay.`,
  startDate: "2026-10-03T10:00:00+02:00",
  endDate: "2026-10-04T18:00:00+02:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: salonSeo.venue,
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 Pl. Félix Tempère",
      addressLocality: "Blavozy",
      postalCode: "43700",
      addressRegion: "Haute-Loire",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "45.0569",
      longitude: "3.8728",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Production Directe",
    url: "https://production-directe.com",
  },
  areaServed: [
    { "@type": "City", name: "Le Puy-en-Velay" },
    { "@type": "City", name: "Brioude" },
    { "@type": "City", name: "Yssingeaux" },
  ],
  offers: {
    "@type": "Offer",
    price: "5",
    priceCurrency: "EUR",
    description: "Week-end pass. Gratuit pour les moins de 12 ans.",
    availability: "https://schema.org/InStock",
  },
};

export const salonOrganizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: salonSeo.siteName,
  url: salonSeo.baseUrl,
  logo: `${salonSeo.baseUrl}/images/logo.png`,
  description: `Salon du bien-être — événement dédié au bien-être en Haute-Loire. ${salon2026.dates.labelLong}, Blavozy.`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "8 Pl. Félix Tempère",
    addressLocality: "Blavozy",
    postalCode: "43700",
    addressRegion: "Haute-Loire",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+33-6-29-18-16-58",
    email: "salondeletre43@gmail.com",
    areaServed: "FR",
  },
  sameAs: [
    salonSeo.baseUrl,
    "https://www.facebook.com/profile.php?id=61591921076745",
    "https://www.instagram.com/bien.etre43/",
    "https://production-directe.com",
  ],
};

export const salonWebsiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: salonSeo.siteName,
  url: salonSeo.baseUrl,
  description: `Site officiel du Salon du bien-être 2026 à Blavozy. ${salon2026.dates.labelLong}.`,
  publisher: {
    "@type": "Organization",
    name: "Production Directe",
  },
};
