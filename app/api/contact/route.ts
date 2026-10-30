import { NextResponse } from "next/server"
import { site } from "@/data/site"

type Payload = {
  name?: string
  email?: string
  projectType?: string
  message?: string
  privacy?: boolean
  company?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const rateLimit = new Map<string, number[]>()
const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 5

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const previous = rateLimit.get(ip) ?? []
  const recent = previous.filter((time) => now - time < WINDOW_MS)
  if (recent.length >= MAX_REQUESTS) {
    rateLimit.set(ip, recent)
    return true
  }
  recent.push(now)
  rateLimit.set(ip, recent)
  return false
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Demasiados envíos. Inténtalo de nuevo en unos minutos." },
      { status: 429 },
    )
  }

  let payload: Payload
  try {
    payload = (await request.json()) as Payload
  } catch {
    return NextResponse.json(
      { ok: false, error: "No he podido leer el formulario." },
      { status: 400 },
    )
  }

  // Honeypot: si viene relleno, fingimos éxito y no hacemos nada.
  if (payload.company) {
    return NextResponse.json({ ok: true })
  }

  const name = String(payload.name ?? "").trim().slice(0, 120)
  const email = String(payload.email ?? "").trim().slice(0, 180)
  const projectType = String(payload.projectType ?? "").trim().slice(0, 120)
  const message = String(payload.message ?? "").trim().slice(0, 5000)
  const privacy = payload.privacy === true

  if (
    name.length < 2 ||
    !emailPattern.test(email) ||
    message.length < 10 ||
    !privacy
  ) {
    return NextResponse.json(
      { ok: false, error: "Revisa los campos del formulario." },
      { status: 400 },
    )
  }

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    `Nuevo proyecto: ${projectType || "Consulta"}`,
  )}&body=${encodeURIComponent(
    `Hola Raquel,\n\nMe llamo ${name}.\n\n${message}\n\nPuedes responderme a ${email}.`,
  )}`

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        fallback: "mailto",
        mailto,
        error: "El envío automático no está configurado.",
      },
      { status: 503 },
    )
  }

  const to = process.env.CONTACT_TO_EMAIL ?? site.email
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Web Raquel <onboarding@resend.dev>"

  const html = `
    <div style="font-family: Inter, Arial, sans-serif; line-height: 1.6; color: #25251f; max-width: 620px;">
      <h2 style="font-family: Georgia, serif; font-weight: 400; margin: 0 0 16px;">
        Nuevo mensaje desde la web
      </h2>
      <p style="margin: 0 0 8px;"><strong>Nombre:</strong> ${escapeHtml(name)}</p>
      <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin: 0 0 8px;"><strong>Tipo de proyecto:</strong> ${escapeHtml(projectType || "No indicado")}</p>
      <hr style="border: 0; border-top: 1px solid #dcd8ce; margin: 20px 0;" />
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
      <hr style="border: 0; border-top: 1px solid #dcd8ce; margin: 20px 0;" />
      <p style="font-size: 12px; color: #6f6e65; margin: 0;">
        Enviado desde ${site.url}. Responde a este correo para contestar a ${escapeHtml(email)}.
      </p>
    </div>
  `

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Nuevo proyecto: ${projectType || "Consulta"} — ${name}`,
        html,
      }),
    })

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, fallback: "mailto", mailto, error: "No se pudo enviar el correo." },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, fallback: "mailto", mailto, error: "No se pudo enviar el correo." },
      { status: 502 },
    )
  }
}
