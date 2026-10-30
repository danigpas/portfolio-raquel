import type { Metadata, Viewport } from "next"
import { Inter, Newsreader } from "next/font/google"
import { site } from "@/data/site"
import SiteHeader from "./components/SiteHeader"
import SiteFooter from "./components/SiteFooter"
import FixedCta from "./components/FixedCta"
import ScrollMotion from "./components/ScrollMotion"
import "./globals.css"

const display = Newsreader({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-display",
})

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

const title = `${site.name} — ${site.role}`
const description =
  "Portfolio de Raquel Pérez Pintor: estrategia, creación y edición de contenido para redes sociales. Reels, TikTok, community management y divulgación cultural para marcas, museos y causas sociales."

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "Raquel Pérez Pintor",
    "redes sociales",
    "community manager Málaga",
    "creación de contenido",
    "edición de vídeo vertical",
    "Reels",
    "TikTok",
    "divulgación cultural",
    "museos",
    "portfolio",
  ],
  category: "Comunicación digital",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#f4f1ea",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <ScrollMotion />
        <SiteHeader />
        {children}
        <SiteFooter />
        <FixedCta />
      </body>
    </html>
  )
}
