import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://ardenfuel.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arden Fuel Trading | Reliable Diesel & Fuel Supply Across the UAE",
    template: "%s | Arden Fuel Trading",
  },
  description:
    "Arden Fuel Trading delivers dependable diesel, EN590, marine gas oil and fuel oil across all seven Emirates and major UAE ports — JAFZA, Khalid Port, Hamriyah Port and Khorfakkan Port. Trusted sourcing, efficient logistics, uncompromising quality.",
  keywords: [
    "fuel supplier UAE",
    "diesel supplier Dubai",
    "EN590 diesel UAE",
    "marine gas oil UAE",
    "fuel oil supplier",
    "bulk diesel delivery UAE",
    "fleet fueling UAE",
    "Arden Fuel Trading",
  ],
  authors: [{ name: "Arden Fuel Trading" }],
  creator: "Arden Fuel Trading",
  publisher: "Arden Fuel Trading",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: "Arden Fuel Trading",
    title: "Arden Fuel Trading | Reliable Diesel & Fuel Supply Across the UAE",
    description:
      "Dependable petroleum products through trusted sourcing and efficient supply solutions — serving marine, construction, power generation, fleet, manufacturing and hospitality across the UAE.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Arden Fuel Trading" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arden Fuel Trading | Reliable Diesel & Fuel Supply Across the UAE",
    description:
      "Dependable petroleum products through trusted sourcing and efficient supply solutions across the UAE.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1f3a",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Arden Fuel Trading",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description:
    "Arden Fuel Trading delivers dependable petroleum products through trusted sourcing and efficient supply solutions, serving businesses across diverse industries and markets in the UAE.",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "United Arab Emirates",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "AE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
