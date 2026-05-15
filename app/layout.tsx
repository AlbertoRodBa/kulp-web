import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kulp.cl"),

  title: "Kulp | Diseño web para proyectos con propósito",

  description:
    "Páginas web para instituciones públicas y privadas. Sitios institucionales, consultoría técnica y branding digital.",

  icons: {
    icon: "/icon-192x192.png",
  },

  openGraph: {
    siteName: "Kulp",
    title: "Kulp | Diseño web para proyectos con propósito",
    description:
      "Páginas web para instituciones públicas y privadas. Sitios institucionales, consultoría técnica y branding digital.",
    url: "https://kulp.cl",
    locale: "es_CL",
    type: "website",
  },

  keywords: [
    "diseño web institucional Chile",
    "desarrollo web municipalidades",
    "agencia UX UI Chile",
    "consultoría digital gobierno",
    "sitios web para empresas públicas",
    "branding digital Chile",
    "comunicación digital institucional",
    "transformación digital municipal",
    "WordPress",
    "Elementor",
    "accesibilidad web",
    "diseño web responsive",
  ],

  verification: {
    google: "Lof2fqS9ewJbzhACN0PAiNiAYm0dE3Hmp5bbCcLrg24",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}

        {/* Google Tag Manager */}
        <GoogleTagManager gtmId="GTM-5M24MCLP" />
      </body>
    </html>
  );
}
