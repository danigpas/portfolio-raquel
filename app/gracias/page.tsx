import type { Metadata } from "next"
import Link from "next/link"
import { site } from "@/data/site"
import PageIntro from "../components/PageIntro"
import { ArrowRight, Check, Heart, Mail, WhatsApp } from "../components/Icons"

export const metadata: Metadata = {
  title: "Gracias",
  description: "Gracias por escribir a Raquel Pérez Pintor.",
  alternates: { canonical: "/gracias" },
  robots: { index: false, follow: true },
}

const steps = [
  {
    number: "01",
    title: "Leo tu mensaje",
    text: "Con calma, sin plantillas. Miro el proyecto, el canal y el momento en el que está.",
  },
  {
    number: "02",
    title: "Te respondo",
    text: `En menos de ${site.responseTime}. Si necesito algo más, te lo pregunto en ese mismo correo.`,
  },
  {
    number: "03",
    title: "Hablamos",
    text: "Si encaja, proponemos una llamada corta y vemos cómo empezar sin marear la perdiz.",
  },
]

export default function GraciasPage() {
  return (
    <main id="contenido" className="page-main">
      <PageIntro
        kicker="Mensaje recibido"
        title={
          <>
            Gracias por <em>escribir</em>.
          </>
        }
        lede="Tu mensaje ya está en camino. Ahora toca lo importante: leerlo bien y responderte con algo que merezca la pena."
        crumbs={[{ label: "Gracias" }]}
      />

      <section className="thanks" aria-labelledby="thanks-title">
        <div className="thanks__glow" aria-hidden="true" />
        <div className="shell">
          <div className="thanks__inner">
            <span className="thanks__check" aria-hidden="true">
              <Check />
            </span>

            <h2 className="thanks__title" id="thanks-title">
              Esto es lo que <em>pasa ahora</em>.
            </h2>

            <p className="thanks__lede">
              Mientras tanto, puedes echar un vistazo al trabajo o escribirme por
              WhatsApp si es algo urgente.
            </p>

            <div className="thanks__steps">
              {steps.map((step) => (
                <div className="thanks__step" key={step.number}>
                  <span className="thanks__step-num">{step.number}</span>
                  <h3 className="thanks__step-title">{step.title}</h3>
                  <p className="thanks__step-text">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="thanks__actions">
              <Link className="btn btn--primary" href="/#trabajo">
                Ver el trabajo
                <ArrowRight />
              </Link>
              <a
                className="btn btn--ghost"
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp />
                WhatsApp
              </a>
              <a className="btn btn--ghost" href={`mailto:${site.email}`}>
                <Mail />
                Email
              </a>
            </div>

            <p className="thanks__note">
              <Heart />
              <span>
                Si no ves mi respuesta, revisa la carpeta de spam o escríbeme a{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
