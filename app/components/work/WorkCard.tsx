"use client"

import Image from "next/image"
import type { WorkItem } from "@/data/content"
import { Camera, Play } from "../Icons"

export default function WorkCard({
  item,
  index,
  variant,
  onOpen,
}: {
  item: WorkItem
  index: number
  variant: "rail" | "grid"
  onOpen: (item: WorkItem) => void
}) {
  return (
    <article className={`work-card work-card--${variant}`}>
      <button
        type="button"
        className="work-card__button"
        onClick={() => onOpen(item)}
        aria-haspopup="dialog"
        aria-label={`Abrir proyecto: ${item.title}, ${item.client}`}
      >
        <div className={`work-card__frame poster--${item.theme}`}>
          {item.poster ? (
            <Image
              src={item.poster}
              alt=""
              fill
              sizes="(min-width: 1040px) 33vw, (min-width: 640px) 50vw, 76vw"
              className="work-card__poster-img"
            />
          ) : null}
          <div className="poster__grain" />
          <div className="poster__top">
            <span className="poster__live">{item.format}</span>
            <span>9:16</span>
          </div>
          {item.videos?.length || item.video ? (
            <span className="work-card__stamp">
              <Play />
              {item.videos?.length ? `${item.videos.length} vídeos` : "Vídeo"}
            </span>
          ) : item.photos?.length ? (
            <span className="work-card__stamp">
              <Camera />
              Fotos
            </span>
          ) : null}
          <p className="poster__word">{item.posterWord}</p>
          <p className="poster__kicker">{item.posterKicker}</p>
          <span className="poster__play">
            <Play />
          </span>
        </div>

        <div className="work-card__caption">
          <div className="work-card__caption-top">
            <h3 className="work-card__title">
              <span className="sr-only">
                {String(index + 1).padStart(2, "0")}.{" "}
              </span>
              {item.title}
            </h3>
            <span className="work-card__year">{item.year}</span>
          </div>
          <p className="work-card__client">
            {item.client} · {item.category}
          </p>
        </div>
      </button>
    </article>
  )
}
