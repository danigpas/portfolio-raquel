import { contact } from "@/data/content"
import { site, socialLinks } from "@/data/site"
import ContactForm from "./ContactForm"
import {
  ArrowUpRight,
  Clock,
  Instagram,
  LinkedIn,
  Phone,
  TikTok,
  WhatsApp,
} from "./Icons"

const socialIcons = {
  Instagram,
  TikTok,
  LinkedIn,
} as const

export default function Contact() {
  return (
    <section className="contact" id="contacto" aria-labelledby="contact-title">
      <div className="shell">
        <div className="contact__panel">
          <div className="contact__grid">
            <div className="contact__copy" data-reveal>
              <p className="kicker contact__kicker">
                <span className="kicker__dot" aria-hidden="true" />
                {contact.kicker}
              </p>

              <h2 className="contact__title" id="contact-title">
                {contact.titleBefore}
                <em>{contact.titleEm}</em>
                {contact.titleAfter}
              </h2>

              <p className="contact__intro">{contact.intro}</p>

              <div className="contact__links">
                <a className="contact__link" href={`mailto:${site.email}`}>
                  <span>
                    {site.email}
                    <small>Email</small>
                  </span>
                  <ArrowUpRight />
                </a>
                <a
                  className="contact__link"
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    WhatsApp
                    <small>{site.phone}</small>
                  </span>
                  <ArrowUpRight />
                </a>
                <a className="contact__link" href={`tel:${site.phoneHref}`}>
                  <span>
                    Llamar
                    <small>{site.phone}</small>
                  </span>
                  <ArrowUpRight />
                </a>
              </div>

              <div className="contact__response">
                <Clock />
                <p>
                  <strong>Compromiso de respuesta:</strong> contesto en menos de{" "}
                  {site.responseTime}. Si es urgente, el WhatsApp es el camino
                  más rápido.
                </p>
              </div>

              {socialLinks.length > 0 ? (
                <div className="contact__socials">
                  {socialLinks.map((social) => {
                    const Icon =
                      socialIcons[social.label as keyof typeof socialIcons]
                    return (
                      <a
                        className="contact__social"
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {Icon ? <Icon /> : null}
                        {social.label}
                      </a>
                    )
                  })}
                </div>
              ) : null}

              <p className="contact__hint">{contact.budgetHint}</p>
            </div>

            <div data-reveal>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
