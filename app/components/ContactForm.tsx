"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { contact } from "@/data/content"
import { site } from "@/data/site"
import { ArrowRight } from "./Icons"

type Status =
  | { type: "idle" }
  | { type: "sending" }
  | { type: "ok"; message: string; mailto?: string }
  | { type: "error"; message: string }

type Errors = Partial<Record<"name" | "email" | "message" | "privacy", string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function ContactForm() {
  const router = useRouter()
  const [status, setStatus] = useState<Status>({ type: "idle" })
  const [errors, setErrors] = useState<Errors>({})

  const validate = (data: {
    name: string
    email: string
    message: string
    privacy: boolean
  }) => {
    const nextErrors: Errors = {}
    if (data.name.trim().length < 2) {
      nextErrors.name = "Dime tu nombre, aunque sea el de pila."
    }
    if (!emailPattern.test(data.email.trim())) {
      nextErrors.email = "Necesito un email válido para poder responderte."
    }
    if (data.message.trim().length < 10) {
      nextErrors.message = "Cuéntame un poco más: con un par de líneas basta."
    }
    if (!data.privacy) {
      nextErrors.privacy = "Necesito que aceptes la política de privacidad."
    }
    return nextErrors
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") ?? "")
    const email = String(formData.get("email") ?? "")
    const projectType = String(formData.get("projectType") ?? "")
    const message = String(formData.get("message") ?? "")
    const privacy = formData.get("privacy") === "on"
    const company = String(formData.get("company") ?? "")

    if (company) return

    const nextErrors = validate({ name, email, message, privacy })
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: "idle" })
      return
    }

    setStatus({ type: "sending" })

    const payload = { name, email, projectType, message, privacy: true }

    try {
      if (site.formEndpoint) {
        const response = await fetch(site.formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        })
        if (!response.ok) throw new Error("form-endpoint")
        router.push("/gracias")
        return
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; fallback?: string; mailto?: string; error?: string }
        | null

      if (response.ok && result?.ok) {
        router.push("/gracias")
        return
      }

      if (result?.fallback === "mailto" && result.mailto) {
        const mailto = result.mailto
        setStatus({
          type: "ok",
          message:
            "Te he preparado el mensaje en tu aplicación de correo. Solo tienes que darle a enviar. Si no se abre, escríbeme directamente a ",
          mailto,
        })
        window.location.href = mailto
        return
      }

      throw new Error(result?.error ?? "send-error")
    } catch {
      const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
        `Nuevo proyecto: ${projectType || "Consulta"}`,
      )}&body=${encodeURIComponent(
        `Hola Raquel,\n\nMe llamo ${name}.\n\n${message}\n\nPuedes responderme a ${email}.`,
      )}`
      setStatus({
        type: "ok",
        message:
          "Ahora mismo el envío automático no está disponible. Te he preparado un correo con tu mensaje; también puedes escribirme a ",
        mailto,
      })
      window.location.href = mailto
    }
  }

  const isSending = status.type === "sending"

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h3 className="contact-form__title">Cuéntame tu proyecto</h3>
      <p className="contact-form__hint">
        Responde a cuatro cosas y te contesto en menos de 24 h laborables.
      </p>

      <div className="form__row form__row--two">
        <div className="field">
          <label className="field__label" htmlFor="name">
            Nombre
          </label>
          <input
            className="field__input"
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Cómo te llamas"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p className="field__error" id="name-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="field">
          <label className="field__label" htmlFor="email">
            Email
          </label>
          <input
            className="field__input"
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="tu@email.com"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p className="field__error" id="email-error">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="field">
        <label className="field__label" htmlFor="projectType">
          ¿Qué necesitas?
        </label>
        <select
          className="field__select"
          id="projectType"
          name="projectType"
          defaultValue=""
        >
          <option value="" disabled>
            Elige una opción
          </option>
          {contact.projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label className="field__label" htmlFor="message">
          Cuéntame un poco más
        </label>
        <textarea
          className="field__textarea"
          id="message"
          name="message"
          placeholder="El proyecto, el canal, el momento en el que está…"
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p className="field__error" id="message-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="form__honeypot" aria-hidden="true">
        <label htmlFor="company">No rellenar</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field">
        <label className="form__check" htmlFor="privacy">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            required
            aria-invalid={Boolean(errors.privacy)}
            aria-describedby={errors.privacy ? "privacy-error" : undefined}
          />
          <span>
            He leído y acepto la{" "}
            <a href="/privacidad" target="_blank" rel="noopener noreferrer">
              política de privacidad
            </a>
            . Mis datos solo se usarán para responderme.
          </span>
        </label>
        {errors.privacy ? (
          <p className="field__error" id="privacy-error">
            {errors.privacy}
          </p>
        ) : null}
      </div>

      <button
        className="btn btn--light btn--block form__submit"
        type="submit"
        disabled={isSending}
      >
        {isSending ? "Enviando…" : "Enviar mensaje"}
        {!isSending ? <ArrowRight /> : null}
      </button>

      {status.type === "ok" ? (
        <p className="form__status form__status--ok" role="status" aria-live="polite">
          {status.message}
          {status.mailto ? (
            <a href={status.mailto}>{site.email}</a>
          ) : null}
        </p>
      ) : null}

      {status.type === "error" ? (
        <p className="form__status form__status--error" role="alert">
          {status.message}
        </p>
      ) : null}

      <p className="form__legal">
        Sin listas de correo, sin spam y sin compartir tus datos con nadie.
      </p>
    </form>
  )
}
