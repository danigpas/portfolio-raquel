import Link from "next/link"
import type { ReactNode } from "react"
import { site } from "@/data/site"
import { ArrowRight, Download, WhatsApp } from "./Icons"

export default function CtaBand({
  title,
  text,
}: {
  title: ReactNode
  text: string
}) {
  return (
    <section className="cta-band" aria-label="Contacto">
      <div className="shell">
        <div className="cta-band__inner" data-reveal>
          <div>
            <h2 className="cta-band__title">{title}</h2>
            <p className="cta-band__text">{text}</p>
          </div>
          <div className="cta-band__actions">
            <Link className="btn btn--primary" href="/#contacto">
              Hablemos
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
            <a className="btn btn--ghost" href={site.cv} download>
              <Download />
              CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
