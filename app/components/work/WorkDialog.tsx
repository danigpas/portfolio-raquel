"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import type { WorkItem } from "@/data/content"
import { site } from "@/data/site"
import { ArrowRight, Close, Mail, Play } from "../Icons"

type MediaSlide =
  | { kind: "video"; src: string; poster?: string; label?: string }
  | { kind: "photo"; src: string }

export default function WorkDialog({
  item,
  onClose,
}: {
  item: WorkItem
  onClose: () => void
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const slidesRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState(0)

  const slides: MediaSlide[] = item.videos?.length
    ? item.videos.map((video) => ({ kind: "video", ...video }))
    : item.photos?.length
      ? item.photos.map((src) => ({ kind: "photo", src }))
      : item.video
        ? [{ kind: "video", src: item.video, poster: item.poster ?? undefined }]
        : []

  const hasSlides = slides.length > 0
  const hasGallery = slides.length > 1

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    `Quiero ver el proyecto: ${item.title}`,
  )}`

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (!dialog.open) dialog.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
      if (dialog.open) dialog.close()
    }
  }, [])

  useEffect(() => {
    const track = slidesRef.current
    if (!track) return
    track.querySelectorAll("video").forEach((video, index) => {
      if (index !== selected) video.pause()
    })
  }, [selected])

  const goTo = (index: number) => {
    setSelected(index)
    const track = slidesRef.current
    if (track) {
      track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" })
    }
  }

  const handleTrackScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const track = event.currentTarget
    if (!track.clientWidth) return
    const index = Math.round(track.scrollLeft / track.clientWidth)
    if (index !== selected && index >= 0 && index < slides.length) {
      setSelected(index)
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="work-dialog"
      aria-labelledby="work-dialog-title"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose()
      }}
    >
      <button
        type="button"
        className="work-dialog__close"
        aria-label="Cerrar proyecto"
        onClick={onClose}
      >
        <Close />
      </button>

      <div className="work-dialog__scroll">
        <div className="work-dialog__grid">
          <div className="work-dialog__media-col">
            <div
              className={`work-dialog__media poster--${item.theme}${
                hasSlides
                  ? " work-dialog__media--carousel"
                  : " work-dialog__media--empty"
              }`}
            >
              {hasSlides ? (
                <>
                  <div
                    ref={slidesRef}
                    className="work-dialog__slides"
                    onScroll={handleTrackScroll}
                    aria-label={`Galería de ${item.title}`}
                  >
                    {slides.map((slide, index) => (
                      <figure
                        className={`work-dialog__slide work-dialog__slide--${slide.kind}${
                          index === selected ? " is-active" : ""
                        }`}
                        key={slide.src}
                      >
                        {slide.kind === "video" ? (
                          <video
                            src={slide.src}
                            poster={slide.poster}
                            controls
                            autoPlay={index === 0}
                            playsInline
                            loop
                            preload="metadata"
                            aria-label={
                              slide.label ?? `Vídeo ${index + 1} de ${item.title}`
                            }
                          />
                        ) : (
                          <Image
                            src={slide.src}
                            alt={`${item.title} — pieza ${index + 1} de ${item.client}`}
                            fill
                            sizes="(min-width: 900px) 40vw, 100vw"
                            className="work-dialog__slide-img"
                          />
                        )}
                        <span className="poster__grain" aria-hidden="true" />
                      </figure>
                    ))}
                  </div>
                  <span className="work-dialog__media-label">{item.format}</span>
                </>
              ) : (
                <>
                  {item.poster ? (
                    <Image
                      src={item.poster}
                      alt=""
                      fill
                      sizes="(min-width: 900px) 40vw, 100vw"
                      className="work-dialog__poster-img"
                    />
                  ) : null}
                  <div className="work-dialog__media-shade" />
                  <div className="poster__grain" aria-hidden="true" />
                  <div className="work-dialog__media-content">
                    <p className="poster__kicker">{item.posterKicker}</p>
                    <p className="poster__word">{item.posterWord}</p>
                    <p className="work-dialog__media-note">
                      El vídeo completo está disponible bajo petición. Escríbeme
                      y te lo enseño con calma.
                    </p>
                    <a className="btn btn--light btn--sm" href={mailto}>
                      <Mail />
                      Pedir este reel
                    </a>
                  </div>
                </>
              )}
            </div>

            {hasGallery ? (
              <div className="work-dialog__mobile-nav">
                <span className="work-dialog__counter">
                  {selected + 1} / {slides.length}
                </span>
                <div className="work-dialog__dots" aria-label="Elegir pieza">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      className={`work-dialog__dot${
                        index === selected ? " is-active" : ""
                      }`}
                      onClick={() => goTo(index)}
                      aria-label={`Ver pieza ${index + 1}`}
                      aria-pressed={index === selected}
                    />
                  ))}
                </div>
                <span className="work-dialog__swipe-hint">Desliza</span>
              </div>
            ) : null}

            {hasGallery ? (
              <div className="work-dialog__gallery">
                <p className="work-dialog__gallery-hint">
                  {slides[0]?.kind === "video"
                    ? "Selecciona un reel de la campaña"
                    : "Selecciona una pieza de la campaña"}
                </p>
                <div className="work-dialog__thumbs">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      className={`work-dialog__thumb${
                        index === selected ? " is-active" : ""
                      }`}
                      onClick={() => goTo(index)}
                      aria-pressed={index === selected}
                      aria-label={`Ver pieza ${index + 1}`}
                    >
                      {(() => {
                        const thumb =
                          slide.kind === "video"
                            ? slide.poster ?? item.poster ?? null
                            : slide.src
                        return thumb ? (
                          <Image
                            src={thumb}
                            alt=""
                            fill
                            sizes="80px"
                            className="work-dialog__thumb-img"
                          />
                        ) : null
                      })()}
                      {slide.kind === "video" ? (
                        <span className="work-dialog__thumb-play">
                          <Play />
                        </span>
                      ) : null}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="work-dialog__content">
            <div className="work-dialog__eyebrow">
              <span className="tag">{item.category}</span>
              <span className="mono muted">{item.year}</span>
            </div>
            <h2 className="work-dialog__title" id="work-dialog-title">
              {item.title}
            </h2>
            <p className="work-dialog__client">{item.client}</p>
            <p className="work-dialog__summary">{item.summary}</p>

            <ul className="chips work-dialog__tags">
              {item.tags.map((tag) => (
                <li className="chip" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>

            <div className="work-dialog__foot">
              <Link
                className="btn btn--primary btn--sm"
                href="/#contacto"
                onClick={onClose}
              >
                Hablemos de algo así
                <ArrowRight />
              </Link>
              <a className="btn btn--ghost btn--sm" href={mailto}>
                <Mail />
                Escribir por email
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}
