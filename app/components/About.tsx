import Image from "next/image"
import { about } from "@/data/content"
import { site } from "@/data/site"

export default function About() {
  return (
    <section
      className="section section--line"
      id="sobre-mi"
      aria-labelledby="about-title"
    >
      <div className="shell">
        <div className="section-head" data-reveal>
          <div className="section-head__top">
            <span className="section-head__num">03 — Sobre mí</span>
          </div>
          <h2 className="section-title" id="about-title" data-split>
            La mirada que hay <em>detrás</em> del contenido.
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__visual" aria-hidden="true" data-reveal>
            {about.photo ? (
              <>
                <Image
                  src={about.photo}
                  alt=""
                  fill
                  sizes="(min-width: 900px) 38vw, 100vw"
                  className="about__visual-img"
                />
                <div className="about__visual-shade" />
              </>
            ) : null}
            <div className="about__visual-inner">
              <div className="about__visual-top">
                <span>{site.locationShort}</span>
                <span>Retrato editorial</span>
              </div>
              {about.photo ? null : (
                <p className="about__monogram">{site.initials}</p>
              )}
              <div className="about__visual-bottom">
                <div>
                  <p className="about__visual-name">{site.name}</p>
                  <p className="about__visual-role">
                    Comunicación digital · Historia del Arte
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about__copy" data-reveal>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}

            <blockquote className="about__quote">{about.quote}</blockquote>

            <div className="about__meta">
              <div>
                <span className="about__meta-label">Herramientas</span>
                <ul className="chips">
                  {about.tools.map((tool) => (
                    <li className="chip" key={tool}>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="about__meta-label">Competencias</span>
                <ul className="chips">
                  {about.competencies.map((competency) => (
                    <li className="chip" key={competency}>
                      {competency}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="about__meta-label">Idiomas</span>
                <ul className="lang-list">
                  {about.languages.map((language) => (
                    <li key={language.language}>
                      {language.language}
                      <span>{language.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
