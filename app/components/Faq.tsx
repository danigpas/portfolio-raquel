import Link from "next/link"
import { faq } from "@/data/content"
import { site } from "@/data/site"
import { ArrowRight, Clock, Mail, Plus, WhatsApp } from "./Icons"

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <section className="section section--line" id="faq" aria-labelledby="faq-title">
      <div className="shell">
        <div className="section-head" data-reveal>
          <div className="section-head__top">
            <span className="section-head__num">05 — Preguntas frecuentes</span>
          </div>
          <h2 className="section-title" id="faq-title" data-split>
            Lo que suele <em>preguntarse</em>.
          </h2>
          <p className="section-lede">
            Si tu duda no está aquí, escríbeme igualmente. Responder forma parte
            del trabajo.
          </p>
        </div>

        <div className="faq__grid">
          <div className="faq__intro" data-reveal>
            <p className="kicker">
              <span className="kicker__dot" aria-hidden="true" />
              Sin compromiso
            </p>
            <p className="section-lede faq__lede">
              Cuéntame qué tienes en mente. Si no es lo que hago, te lo digo; y si
              lo es, te cuento cómo lo abordaría.
            </p>
            <div className="faq__contact">
              <p>{site.responseCommitment}</p>
              <Link className="btn btn--primary btn--sm" href="/#contacto">
                Escríbeme
                <ArrowRight />
              </Link>
              <a className="btn btn--ghost btn--sm" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsApp />
                WhatsApp
              </a>
              <a className="btn btn--ghost btn--sm" href={`mailto:${site.email}`}>
                <Mail />
                Email
              </a>
              <span className="mono muted faq__response">
                <Clock />
                Respuesta &lt; {site.responseTime}
              </span>
            </div>
          </div>

          <div className="faq__list" data-reveal-group>
            {faq.map((item, index) => (
              <details
                className="faq__item"
                key={item.question}
                open={index === 0}
                data-reveal-item
              >
                <summary>
                  {item.question}
                  <span className="faq__icon" aria-hidden="true">
                    <Plus />
                  </span>
                </summary>
                <div className="faq__answer">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  )
}
