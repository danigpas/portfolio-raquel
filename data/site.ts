/**
 * Configuración global del sitio.
 * Cambia aquí los datos de contacto, el dominio o los enlaces sociales.
 */

const rawUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://raquelperezpintores.com"

export const site = {
  name: "Raquel Pérez Pintor",
  shortName: "Raquel Pérez",
  initials: "RP",
  role: "Comunicación digital, redes sociales y creación de contenido",
  tagline: "Historias que se ven. Comunidades que se quedan.",
  url: rawUrl,
  locale: "es_ES",
  lang: "es",
  location: "Málaga, España",
  locationShort: "Málaga · remoto",
  email: "rperezpintor@gmail.com",
  phone: "658 426 820",
  phoneHref: "+34658426820",
  whatsapp:
    "https://wa.me/34658426820?text=Hola%20Raquel%2C%20he%20visto%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20hablar%20de%20un%20proyecto.",
  cv: "/cv/raquel-perez-pintor.pdf",
  responseTime: "24 h laborables",
  responseCommitment: "Respondo en menos de 24 h laborables.",
  // Añade aquí los enlaces cuando estén disponibles (Instagram, TikTok, LinkedIn…).
  // Los enlaces vacíos no se muestran en la web.
  socials: [
    { label: "Instagram", href: "", handle: "" },
    { label: "TikTok", href: "", handle: "" },
    { label: "LinkedIn", href: "", handle: "" },
  ],
  // Opcional: endpoint tipo Formspree/FormSubmit. Si está vacío, el formulario
  // usa /api/contact y, si no hay proveedor de correo configurado, abre mailto.
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
} as const

export const socialLinks = site.socials.filter((social) => social.href.length > 0)
