"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

/**
 * Capa de movimiento del sitio.
 * - Barra de progreso de lectura.
 * - Revelados al hacer scroll con GSAP + ScrollTrigger.
 * - Titulares con SplitText (máscara por palabras).
 * - Parallax sutil en elementos decorativos.
 *
 * Todo se desactiva con prefers-reduced-motion y se limpia en cada ruta.
 */
export default function ScrollMotion() {
  const pathname = usePathname()

  useEffect(() => {
    let cancelled = false
    let cleanup: (() => void) | undefined

    const progressFill = document.querySelector<HTMLElement>(
      "[data-progress-fill]",
    )

    let frame = 0
    const updateProgress = () => {
      frame = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      if (progressFill) {
        progressFill.style.transform = `scaleX(${progress.toFixed(4)})`
      }
      doc.classList.toggle("is-scrolled", window.scrollY > 12)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })

    const run = async () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches
      if (prefersReduced) return

      const [{ gsap }, { ScrollTrigger }, { SplitText }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("gsap/SplitText"),
      ])
      if (cancelled) return

      gsap.registerPlugin(ScrollTrigger, SplitText)
      ScrollTrigger.config({ ignoreMobileResize: true })

      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const ctx = gsap.context(() => {
          const splits: SplitText[] = []

          // Revelado individual
          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
            gsap.from(element, {
              y: 26,
              opacity: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                once: true,
              },
            })
          })

          // Revelado escalonado por grupo
          gsap.utils
            .toArray<HTMLElement>("[data-reveal-group]")
            .forEach((group) => {
              const items = gsap.utils.toArray<HTMLElement>(
                group.querySelectorAll("[data-reveal-item]"),
              )
              if (!items.length) return

              gsap.from(items, {
                y: 30,
                opacity: 0,
                duration: 0.85,
                stagger: 0.075,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: group,
                  start: "top 86%",
                  once: true,
                },
              })
            })

          // Titulares con máscara de palabras
          gsap.utils.toArray<HTMLElement>("[data-split]").forEach((title) => {
            const split = new SplitText(title, {
              type: "lines,words",
              linesClass: "split-line",
              wordsClass: "split-word",
            })
            splits.push(split)

            gsap.from(split.words, {
              yPercent: 118,
              opacity: 0,
              duration: 0.85,
              stagger: 0.028,
              ease: "power3.out",
              scrollTrigger: {
                trigger: title,
                start: "top 88%",
                once: true,
              },
            })
          })

          // Parallax decorativo
          gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
            const amount = Number(element.dataset.parallax ?? 0.12)
            gsap.to(element, {
              yPercent: amount * 100,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            })
          })

          return () => {
            splits.forEach((split) => split.revert())
          }
        }, document.body)

        return () => ctx.revert()
      })

      const refresh = () => ScrollTrigger.refresh()
      window.addEventListener("load", refresh)
      if (document.fonts?.ready) {
        document.fonts.ready.then(refresh).catch(() => {})
      }

      cleanup = () => {
        window.removeEventListener("load", refresh)
        mm.revert()
      }
    }

    run().catch(() => {
      // Si GSAP no carga, el contenido sigue visible: no hacemos nada.
    })

    return () => {
      cancelled = true
      cleanup?.()
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [pathname])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span className="scroll-progress__fill" data-progress-fill />
    </div>
  )
}
