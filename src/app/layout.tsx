import "./globals.css";
import Script from "next/script";
import {
  salonMetadata,
  salonOrganizationStructuredData,
  salonSeo,
  salonWebsiteStructuredData,
} from "@/lib/salon-seo";

export const metadata = {
  metadataBase: new URL(salonSeo.baseUrl),
  title: {
    default: salonMetadata.root.title,
    template: salonMetadata.root.template,
  },
  description: salonMetadata.root.description,
  authors: [{ name: "Production Directe" }],
  creator: "Production Directe",
  publisher: "Production Directe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "s6MjtAbITnIR_6OhXNY7Qf_iDqXegKpLkmmFxQkpB94",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    siteName: "Salon du bien-être",
    title: salonMetadata.root.title,
    description: salonMetadata.root.description,
    url: salonSeo.baseUrl,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: salonMetadata.root.title,
    description: salonMetadata.root.description,
  },
  alternates: {
    canonical: salonSeo.baseUrl,
  },
  other: {
    "application-name": "Salon du bien-être",
    "apple-mobile-web-app-title": "Salon du bien-être",
    "msapplication-TileColor": "#218393",
    "theme-color": "#218393",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(salonOrganizationStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(salonWebsiteStructuredData),
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKV7BJV5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PKV7BJV5');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
