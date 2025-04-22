import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Purifya | Service Premium de Nettoyage de Vitres et Verre à Montréal et Rive-Sud",
    description:
      "Purifya offre des services professionnels de nettoyage de vitres et de verre à Montréal, Brossard, Greenfield Park, St-Lambert et St-Hubert. Nous sommes spécialisés dans le nettoyage résidentiel et commercial pour maisons de luxe, immeubles à étages, vitrines, portes de douche et cloisons en verre. Résultats impeccables avec des solutions écologiques.",
    keywords: [
      "nettoyage de vitres",
      "service de nettoyage de verre",
      "lavage de fenêtres professionnel",
      "nettoyage de fenêtres résidentiel",
      "nettoyage de vitres commercial",
      "service de nettoyage de vitres d'immeubles",
      "nettoyage de vitrines",
      "nettoyage de cloisons en verre",
      "service de nettoyage de portes de douche",
      "nettoyage de vitres sans traces",
      "nettoyage de surfaces en verre",
      "service de nettoyage de miroirs",
      "nettoyage de fenêtres Brossard",
      "lavage de vitres",
      "services de nettoyage de vitres",
      "nettoyeurs de fenêtres",
      "nettoyage de verre maisons de luxe",
      "service de nettoyage de tables en verre",
      "nettoyage de vitres Airbnb",
      "nettoyage de verre écologique",
      "nettoyage de vitres pour entreprises",
      "nettoyage de fenêtres extérieures",
      "service de lavage de verre intérieur",
      "spécialistes en nettoyage de vitres et verre",
    ],
    icons: {
      icon: "/logo-cropped.png",
      apple: "/logo-cropped.png",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo-cropped.png" />
        <link rel="apple-touch-icon" href="/logo-cropped.png" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
