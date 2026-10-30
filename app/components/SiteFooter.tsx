import Link from "next/link"
import { site, socialLinks } from "@/data/site"
import { ArrowDown, Clock, Instagram, LinkedIn, TikTok } from "./Icons"

const socialIcons = {
  Instagram,
  TikTok,
  LinkedIn,
} as const

const year = new Date().getFullYear()

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__mark" aria-hidden="true">
              {site.initials}
            </span>
            <p className="footer__name">{site.name}</p>
            <p className="footer__tagline">
              Comunicación digital, redes sociales y contenido con criterio.
              Málaga y remoto.
            </p>
            <span className="footer__response">
              <Clock />
              Respuesta &lt; {site.responseTime}
            </span>
          </div>

          <nav className="footer__nav" aria-label="Enlaces del pie de página">
            <div>
              <p className="footer__col-title">Explorar</p>
              <ul className="footer__links">
                <li>
                  <Link href="/#trabajo">Trabajo</Link>
                </li>
                <li>
                  <Link href="/trabajo">Todo el trabajo</Link>
                </li>
                <li>
                  <Link href="/#servicios">Servicios</Link>
                </li>
                <li>
                  <Link href="/#sobre-mi">Sobre mí</Link>
                </li>
                <li>
                  <Link href="/#experiencia">Trayectoria</Link>
                </li>
                <li>
                  <Link href="/#faq">FAQ</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="footer__col-title">Contacto</p>
              <ul className="footer__links">
                <li>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                </li>
                <li>
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={site.cv} download>
                    Descargar CV
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="footer__col-title">Legal</p>
              <ul className="footer__links">
                <li>
                  <Link href="/privacidad">Privacidad</Link>
                </li>
                <li>
                  <Link href="/#contacto">Hablemos</Link>
                </li>
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.label as keyof typeof socialIcons]
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {Icon ? <Icon className="footer__social-icon" /> : null}
                        {social.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {site.name}. Todos los derechos reservados.
          </span>
          <span>
            Hecho con calma en Málaga ·{" "}
            <Link href="/privacidad">Política de privacidad</Link>
          </span>
          <a className="footer__top-link" href="#contenido">
            Volver arriba
            <ArrowDown />
          </a>
        </div>

        <p className="footer__wordmark" aria-hidden="true">
          Raquel
        </p>
      </div>
    </footer>
  )
}
