import { education, experience } from "@/data/content"
import { site } from "@/data/site"
import { ArrowRight, Clock, Download, MapPin } from "./Icons"

const principles = [
  {
    title: "Primero el mensaje",
    text: "Qué quieres decir, a quién y por qué debería importarle.",
  },
  {
    title: "Después el formato",
    text: "La pieza correcta para cada canal, no la misma pieza en todos.",
  },
  {
    title: "Siempre la comunidad",
    text: "Publicar es el principio: escuchar y responder también cuenta.",
  },
]

export default function Experience() {
  return (
    <section
      className="section section--line"
      id="experiencia"
      aria-labelledby="experience-title"
    >
      <div className="shell">
        <div className="section-head" data-reveal>
          <div className="section-head__top">
            <span className="section-head__num">04 — Trayectoria</span>
            <div className="section-head__actions">
              <a className="btn btn--ghost btn--sm" href={site.cv} download>
                <Download />
                Descargar CV
              </a>
            </div>
          </div>
          <h2 className="section-title" id="experience-title" data-split>
            De un museo a una <em>campaña</em>.
          </h2>
          <p className="section-lede">
            Instituciones culturales, política, causas sociales y calle. Distintos
            contextos, la misma obsesión: que el mensaje llegue y que la gente
            quiera quedarse.
          </p>
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <article className="job" key={`${job.org}-${job.period}`}>
              <div className="job__aside">
                <span className="job__period">{job.period}</span>
                <span className="job__location">{job.location}</span>
                {job.current ? (
                  <span className="badge-current">Actualidad</span>
                ) : null}
              </div>

              <div>
                <div className="job__head">
                  <h3 className="job__role">{job.role}</h3>
                </div>
                <p className="job__org">{job.org}</p>
                <p className="job__summary">{job.summary}</p>

                <ul className="job__bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <ul className="chips job__tags">
                  {job.tags.map((tag) => (
                    <li className="chip" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="credentials">
          <div className="credentials__block">
            <h3 className="credentials__title">Formación</h3>
            {education.map((item) => (
              <div className="edu-card" key={item.title}>
                <p className="edu-card__title">{item.title}</p>
                <div className="edu-card__meta">
                  <span>{item.org}</span>
                  <span className="edu-card__period">{item.period}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="credentials__block">
            <h3 className="credentials__title">Cómo trabajo</h3>
            <ul className="principle-list">
              {principles.map((principle) => (
                <li key={principle.title}>
                  <strong>{principle.title}</strong>
                  <span>{principle.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="credentials__block">
            <h3 className="credentials__title">Disponibilidad</h3>
            <ul className="lang-list">
              <li>
                <span className="inline-icon">
                  <MapPin />
                  Base
                </span>
                <span>Málaga</span>
              </li>
              <li>
                <span className="inline-icon">
                  <Clock />
                  Respuesta
                </span>
                <span>&lt; 24 h</span>
              </li>
              <li>
                <span className="inline-icon">
                  <ArrowRight />
                  Modalidad
                </span>
                <span>Remoto / presencial</span>
              </li>
            </ul>
            <a className="btn btn--ghost btn--sm cred-cv" href={site.cv} download>
              <Download />
              CV completo en PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
