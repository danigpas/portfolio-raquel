"use client"

import { useMemo, useState } from "react"
import { work, type WorkItem } from "@/data/content"
import WorkCard from "./WorkCard"
import WorkDialog from "./WorkDialog"

export default function WorkArchive() {
  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(work.map((item) => item.category)))],
    [],
  )
  const [filter, setFilter] = useState("Todos")
  const [active, setActive] = useState<WorkItem | null>(null)

  const filtered = useMemo(
    () => (filter === "Todos" ? work : work.filter((item) => item.category === filter)),
    [filter],
  )

  return (
    <>
      <div className="work-archive__filters" role="group" aria-label="Filtrar proyectos">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter${filter === category ? " is-active" : ""}`}
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="mono muted" aria-live="polite">
        {String(filtered.length).padStart(2, "0")}{" "}
        {filtered.length === 1 ? "proyecto" : "proyectos"}
      </p>

      <div className="work-grid">
        {filtered.map((item, index) => (
          <WorkCard
            key={item.slug}
            item={item}
            index={index}
            variant="grid"
            onOpen={setActive}
          />
        ))}
      </div>

      {active ? <WorkDialog item={active} onClose={() => setActive(null)} /> : null}
    </>
  )
}
