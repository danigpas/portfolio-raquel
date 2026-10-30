"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { site } from "@/data/site"
import { ArrowRight, ArrowUpRight, Close, Download, Menu } from "./Icons"

const navigation = [
  { label: "Trabajo", href: "/#trabajo" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Trayectoria", href: "/#experiencia" },
  { label: "FAQ", href: "/#faq" },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => {
      document.documentElement.classList.toggle("is-scrolled", window.scrollY > 12)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    const menu = document.getElementById("mobile-menu")
    const focusables = menu
      ? Array.from(
          menu.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        )
      : []
    const first = focusables[0]
    const last = focusables[focusables.length - 1]

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== "Tab" || !first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <header className="site-header">
        <div className="shell header__inner">
          <Link href="/" className="brand" aria-label={`${site.name} — Inicio`}>
            <span className="brand__mark" aria-hidden="true">
              {site.initials}
            </span>
            <span className="brand__text">
              <span className="brand__name">{site.shortName}</span>
              <span className="brand__sub">Contenido & redes</span>
            </span>
          </Link>

          <nav className="nav-desktop" aria-label="Navegación principal">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <a
              className="btn btn--ghost btn--sm header__cv"
              href={site.cv}
              download
            >
              <Download />
              CV
            </a>
            <Link className="btn btn--primary btn--sm header__cta" href="/#contacto">
              Hablemos
              <ArrowRight />
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((value) => !value)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " is-open" : ""}`}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="mobile-menu__head">
          <span className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            Menú
          </span>
          <button
            ref={closeRef}
            type="button"
            className="mobile-menu__close"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          >
            <Close />
          </button>
        </div>

        <nav aria-label="Navegación móvil">
          <ul className="mobile-menu__links">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="mobile-menu__link"
                  onClick={closeMenu}
                >
                  {item.label}
                  <ArrowUpRight />
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/trabajo"
                className="mobile-menu__link"
                onClick={closeMenu}
              >
                Todo el trabajo
                <ArrowUpRight />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mobile-menu__foot">
          <Link
            href="/#contacto"
            className="btn btn--primary btn--block"
            onClick={closeMenu}
          >
            Hablemos de tu proyecto
            <ArrowRight />
          </Link>
          <a className="btn btn--ghost btn--block" href={site.cv} download>
            <Download />
            Descargar CV
          </a>
          <p className="mobile-menu__contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          </p>
        </div>
      </div>
    </>
  )
}
