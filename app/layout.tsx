import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/constants";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const SITE_URL = "https://www.kadtech.example"; // TODO: replace with live domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kadtech Innovative Solutions | Buy, Sell, Swap & Fix Tech in Abuja",
    template: "%s | Kadtech Innovative Solutions",
  },
  description:
    "Kadtech Innovative Solutions Limited — smartphones, laptops, cameras, drones, accessories and Bluetooth speakers. Buy, sell, swap and repair technology at Old Banex Plaza, Wuse 2, Abuja.",
  openGraph: {
    type: "website",
    siteName: "Kadtech Innovative Solutions",
    title: "Kadtech Innovative Solutions | Buy, Sell, Swap & Fix Tech in Abuja",
    description:
      "Smartphones, laptops, cameras, drones, accessories and Bluetooth speakers — Old Banex Plaza, Wuse 2, Abuja.",
    url: SITE_URL,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kadtech Innovative Solutions",
    description: "Buy, sell, swap and fix technology in Abuja.",
  },
  alternates: {
    canonical: "/",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectronicsStore",
  name: BUSINESS.legalName,
  telephone: BUSINESS.contact.phone,
  email: BUSINESS.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop FC1143, Old Banex Plaza, 2nd Floor, By Access Bank",
    addressLocality: "Wuse 2, Abuja",
    addressCountry: "NG",
  },
  openingHours: "Mo-Sa 08:00-18:00",
  sameAs: [
    `https://instagram.com/${BUSINESS.contact.instagram}`,
    `https://twitter.com/${BUSINESS.contact.twitter.replace("@", "")}`,
    `https://tiktok.com/@${BUSINESS.contact.tiktok}`,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
