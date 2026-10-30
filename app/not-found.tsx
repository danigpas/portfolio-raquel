import Link from "next/link"
import Breadcrumbs from "./components/Breadcrumbs"
import { ArrowRight, Mail } from "./components/Icons"
import { site } from "@/data/site"

export default function NotFound() {
  return (
    <main id="contenido" className="page-main">
      <section className="notfound" aria-labelledby="notfound-title">
        <div className="notfound__glow" aria-hidden="true" />
        <div className="shell notfound__inner">
          <Breadcrumbs items={[{ label: "404" }]} />

          <p className="kicker notfound__kicker">
            <span className="kicker__dot" aria-hidden="true" />
            Error 404
          </p>

          <p className="notfound__code" aria-hidden="true">
            4<em>0</em>4
          </p>

          <h1 className="notfound__title" id="notfound-title">
            Te has salido del <em>guion</em>.
          </h1>
          <p className="notfound__lede">
            La página que buscas no existe o ha cambiado de sitio. Pero ya que
            estás aquí, puedes ver el trabajo de Raquel o escribirle directamente.
          </p>

          <div className="notfound__actions">
            <Link className="btn btn--primary" href="/">
              Volver al inicio
              <ArrowRight />
            </Link>
            <Link className="btn btn--ghost" href="/trabajo">
              Ver el trabajo
            </Link>
            <a className="btn btn--ghost" href={`mailto:${site.email}`}>
              <Mail />
              Escríbeme
            </a>
          </div>

          <div className="notfound__suggestions" aria-label="Enlaces útiles">
            <Link href="/#sobre-mi">Sobre mí</Link>
            <Link href="/#servicios">Servicios</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/privacidad">Privacidad</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
