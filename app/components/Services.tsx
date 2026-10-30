import { services } from "@/data/content"
import { ServiceIcon } from "./Icons"

export default function Services() {
  return (
    <section
      className="section section--line"
      id="servicios"
      aria-labelledby="services-title"
    >
      <div className="shell">
        <div className="section-head" data-reveal>
          <div className="section-head__top">
            <span className="section-head__num">02 — Servicios</span>
          </div>
          <h2 className="section-title" id="services-title" data-split>
            Estrategia, cámara y <em>criterio</em>.
          </h2>
          <p className="section-lede">
            Puedo coger todo el proceso o solo la parte que necesitas soltar.
            Sin fórmulas vacías: miro el objetivo, el público y el canal antes de
            proponer una sola pieza.
          </p>
        </div>

        <div className="services__grid" data-reveal-group>
          {services.map((service) => (
            <article className="service" key={service.number} data-reveal-item>
              <div className="service__top">
                <span className="service__icon" aria-hidden="true">
                  <ServiceIcon name={service.icon} />
                </span>
                <span className="service__num">{service.number}</span>
              </div>
              <div>
                <h3 className="service__title">{service.title}</h3>
                <p className="service__desc">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
