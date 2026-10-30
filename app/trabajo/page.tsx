import type { Metadata } from "next"
import Link from "next/link"
import { work } from "@/data/content"
import { site } from "@/data/site"
import PageIntro from "../components/PageIntro"
import WorkArchive from "../components/work/WorkArchive"
import CtaBand from "../components/CtaBand"
import { ChevronLeft } from "../components/Icons"

export const metadata: Metadata = {
  title: "Trabajo",
  description:
    "Proyectos de Raquel Pérez Pintor: campañas en redes, divulgación cultural, vídeo vertical, fotografía y community management para museos, causas sociales y proyectos políticos.",
  alternates: { canonical: "/trabajo" },
  openGraph: {
    title: "Trabajo · Raquel Pérez Pintor",
    description:
      "Campañas, divulgación cultural, vídeo vertical y community management. Una selección de proyectos con estrategia y criterio.",
    url: "/trabajo",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Trabajo · Raquel Pérez Pintor",
  url: `${site.url}/trabajo`,
  description:
    "Proyectos de comunicación digital, redes sociales y contenido audiovisual de Raquel Pérez Pintor.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: work.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      description: item.summary,
    })),
  },
}

export default function TrabajoPage() {
  return (
    <main id="contenido" className="page-main">
      <PageIntro
        kicker="Portfolio · 2021 — 2026"
        title={
          <>
            Trabajo que <em>se ve</em>.
          </>
        }
        lede="Campañas, divulgación, causas, cobertura y diseño. Cada proyecto tiene un contexto distinto; aquí puedes ver el conjunto y abrir cada ficha."
        crumbs={[{ label: "Trabajo" }]}
      />

      <section className="section" aria-labelledby="archive-title">
        <div className="shell">
          <div className="section-head" data-reveal>
            <div className="section-head__top">
              <span className="section-head__num">Archivo</span>
              <Link className="btn btn--ghost btn--sm" href="/#trabajo">
                <ChevronLeft />
                Volver al inicio
              </Link>
            </div>
            <h2 className="section-title" id="archive-title" data-split>
              Todos los <em>proyectos</em>.
            </h2>
            <p className="section-lede">
              Filtra por tipo de proyecto. Los vídeos completos se irán añadiendo
              aquí; mientras tanto, puedes pedirme cualquier reel por email.
            </p>
          </div>

          <WorkArchive />
        </div>
      </section>

      <CtaBand
        title={
          <>
            ¿Tu proyecto sería el <em>siguiente</em>?
          </>
        }
        text="Cuéntame qué tienes en mente. Te respondo en menos de 24 h laborables y vemos si encajamos."
      />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
