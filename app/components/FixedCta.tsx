import { site } from "@/data/site"
import { Download, WhatsApp } from "./Icons"

export default function FixedCta() {
  return (
    <div className="fixed-cta" role="region" aria-label="Contacto rápido">
      <a
        className="btn btn--primary"
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsApp />
        Hablemos
      </a>
      <a className="btn btn--ghost" href={site.cv} download>
        <Download />
        CV
      </a>
    </div>
  )
}
