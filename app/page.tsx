import type { Metadata } from "next"
import { site, socialLinks } from "@/data/site"
import { about } from "@/data/content"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import WorkSection from "./components/work/WorkSection"
import Services from "./components/Services"
import About from "./components/About"
import Experience from "./components/Experience"
import Faq from "./components/Faq"
import Contact from "./components/Contact"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      jobTitle: "Comunicación digital, redes sociales y creación de contenido",
      description:
        "Comunicadora digital e historiadora del arte especializada en redes sociales, contenido audiovisual vertical y divulgación cultural.",
      url: site.url,
      email: `mailto:${site.email}`,
      telephone: site.phoneHref,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Málaga",
        addressCountry: "ES",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universidad de Málaga",
      },
      knowsAbout: [
        "Redes sociales",
        "Community management",
        "Creación de contenido",
        "Edición de vídeo vertical",
        "Divulgación cultural",
        "Copywriting",
        "Historia del Arte",
      ],
      sameAs: socialLinks.map((social) => social.href),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: `${site.name} — Comunicación digital`,
      description:
        "Estrategia, creación y edición de contenido para redes sociales. Reels, TikTok, community management y divulgación cultural.",
      url: site.url,
      image: `${site.url}/og.png`,
      areaServed: ["Málaga", "España", "Remoto"],
      provider: { "@id": `${site.url}/#person` },
      serviceType: [
        "Gestión de redes sociales",
        "Creación de contenido",
        "Edición de vídeo vertical",
        "Community management",
        "Comunicación cultural",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: about.quote,
      inLanguage: "es-ES",
      publisher: { "@id": `${site.url}/#person` },
    },
  ],
}

export default function Home() {
  return (
    <>
      <main id="contenido" className="page-main">
        <Hero />
        <Marquee />
        <WorkSection />
        <Services />
        <About />
        <Experience />
        <Faq />
        <Contact />
      </main>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
