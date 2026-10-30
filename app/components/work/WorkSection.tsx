"use client"

import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { work, type WorkItem } from "@/data/content"
import { ArrowRight, ChevronLeft, ChevronRight } from "../Icons"
import WorkCard from "./WorkCard"
import WorkDialog from "./WorkDialog"

export default function WorkSection() {
  const railRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<WorkItem | null>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateControls = useCallback(() => {
    const rail = railRef.current
    if (!rail) return
    setCanPrev(rail.scrollLeft > 8)
    setCanNext(rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 8)
  }, [])

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    updateControls()
    rail.addEventListener("scroll", updateControls, { passive: true })
    window.addEventListener("resize", updateControls)
    return () => {
      rail.removeEventListener("scroll", updateControls)
      window.removeEventListener("resize", updateControls)
    }
  }, [updateControls])

  const scrollByCard = (direction: -1 | 1) => {
    const rail = railRef.current
    if (!rail) return
    const card = rail.querySelector<HTMLElement>(".work-card")
    const amount = card ? card.offsetWidth + 16 : rail.clientWidth * 0.8
    rail.scrollBy({ left: direction * amount, behavior: "smooth" })
  }

  return (
    <section className="section section--line" id="trabajo" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-head">
          <div className="section-head__top">
            <span className="section-head__num">01 — Trabajo seleccionado</span>
            <div className="section-head__actions">
              <Link className="btn btn--ghost btn--sm" href="/trabajo">
                Ver todo
                <ArrowRight />
              </Link>
              <div className="rail-controls">
                <button
                  type="button"
                  className="rail-btn"
                  aria-label="Proyecto anterior"
                  onClick={() => scrollByCard(-1)}
                  disabled={!canPrev}
                >
                  <ChevronLeft />
                </button>
                <button
                  type="button"
                  className="rail-btn"
                  aria-label="Proyecto siguiente"
                  onClick={() => scrollByCard(1)}
                  disabled={!canNext}
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
          <h2 className="section-title" id="work-title" data-split>
            Contenido que <em>se ve</em>.
          </h2>
          <p className="section-lede">
            Campañas, divulgación, causas y cobertura en directo. Una selección
            de proyectos donde la estrategia y la edición van de la mano.
          </p>
        </div>

        <div className="work-rail" ref={railRef}>
          {work.map((item, index) => (
            <WorkCard
              key={item.slug}
              item={item}
              index={index}
              variant="rail"
              onOpen={setActive}
            />
          ))}
        </div>

        <p className="work-hint">
          <span className="work-hint__desktop">Desliza para ver más</span>
          <span className="work-hint__mobile">Toca un proyecto para abrirlo</span>
          <span>{String(work.length).padStart(2, "0")} proyectos</span>
        </p>
      </div>

      {active ? <WorkDialog item={active} onClose={() => setActive(null)} /> : null}
    </section>
  )
}
