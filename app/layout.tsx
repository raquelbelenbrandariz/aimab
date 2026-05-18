import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Aimara Bolger | Cosmetología Médica",
  description:
    "Clínica de estética especializada en el cuidado de la piel. Tratamientos personalizados para potenciar tu belleza natural con foco en la necesidad de cada persona.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${lato.variable} h-full`}>
      <body className="min-h-full bg-cream-light text-brown font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
