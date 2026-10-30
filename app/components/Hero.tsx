import Link from "next/link"
import { hero, heroCards } from "@/data/content"
import { site } from "@/data/site"
import { ArrowDown, ArrowRight, Clock, Download, Play } from "./Icons"

const reelModifiers = ["a", "b", "c"] as const

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell hero__grid">
        <div className="hero__copy">
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            {hero.kicker}
          </p>

          <h1 className="hero__title" id="hero-title">
            {hero.titleLines.map((line) => (
              <span className="hero__line" key={line.em}>
                {line.before}
                <em>{line.em}</em>
                {line.after}
              </span>
            ))}
          </h1>

          <p className="hero__intro">{hero.intro}</p>

          <div className="hero__actions">
            <Link className="btn btn--primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRight />
            </Link>
            <a className="btn btn--ghost" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
              <ArrowDown />
            </a>
            <a className="btn btn--ghost" href={site.cv} download>
              <Download />
              CV
            </a>
          </div>

          <p className="hero__micro">
            <Clock />
            {hero.micro}
          </p>

          <ul className="hero__facts">
            {hero.facts.map((fact) => (
              <li className="hero__fact" key={fact.value}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__stage" aria-hidden="true">
          <div className="hero__halo" />
          {heroCards.map((card, index) => (
            <div
              className={`reel reel--${reelModifiers[index] ?? "a"} poster--${card.theme}`}
              key={card.word}
            >
              <div className="reel__grain" />
              <div className="reel__top">
                <span className="reel__live">{card.kicker}</span>
                <span>9:16</span>
              </div>
              <p className="reel__kicker">{card.meta}</p>
              <span className="reel__wave" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </span>
              <p className="reel__word">{card.word}</p>
              <span className="reel__play">
                <Play />
              </span>
              <span className="reel__meta">Raquel Pérez Pintor</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
