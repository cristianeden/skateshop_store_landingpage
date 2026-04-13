import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Visual Attack SkateShop — Torreón, Coahuila",
  description:
    "La skateshop que patina. Tablas, ruedas, baleros, lijas, ropa y todo lo que necesitas para el skateboarding en Torreón, Coahuila, México.",
  keywords: [
    "skateshop",
    "Torreón",
    "Coahuila",
    "skate",
    "patinetas",
    "tablas",
    "ruedas",
    "visual attack",
  ],
  openGraph: {
    title: "Visual Attack SkateShop",
    description: "Somos los mismos de siempre. La skateshop que patina.",
    url: "https://visualattack.mx",
    siteName: "Visual Attack SkateShop",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
