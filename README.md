# raquelperezpintores.com

Portfolio profesional de **Raquel Pérez Pintor**: comunicación digital, redes
sociales, creación de contenido y divulgación cultural.

La web es un one-page editorial *mobile-first* con un archivo de proyectos,
pensado para enseñar trabajo real de redes sociales —Reels, TikTok, fotografía,
campañas y community management— de una forma visual, sencilla y accesible
desde cualquier móvil.

- **Web:** https://raquelperezpintores.com
- **Con www:** https://www.raquelperezpintores.com
- **Preview:** https://raquelperezpintores.vercel.app
- **Repositorio:** https://github.com/danigpas/portfolio-raquel

---

## Sobre Raquel

**Raquel Pérez Pintor** es comunicadora digital e historiadora del arte, con base
en Málaga. Lleva desde 2021 gestionando canales digitales para entidades
sociales, políticas y museísticas, y creando contenido multimedia con Canva y
CapCut.

Su perfil combina criterio visual, redacción divulgativa y conocimiento del
patrimonio cultural. Traduce mensajes institucionales, normativos y
reivindicativos a formatos ágiles, cercanos y accesibles para nuevos públicos.

### Datos de contacto

- **Email:** [rperezpintor@gmail.com](mailto:rperezpintor@gmail.com)
- **Teléfono / WhatsApp:** [658 426 820](tel:+34658426820)
- **Ubicación:** Málaga, España
- **Modalidad:** presencial en Málaga y remoto
- **Tiempo de respuesta comprometido:** menos de 24 h laborables
- **CV:** [descargar PDF](https://raquelperezpintores.com/cv/raquel-perez-pintor.pdf)

### Experiencia profesional

| Periodo | Puesto | Organización |
|---|---|---|
| Enero 2025 — Actualidad | Responsable de Redes Sociales y Comunicación Digital | Juventudes Socialistas de Málaga |
| Marzo 2026 — Junio 2026 | Prácticas en el Departamento de Difusión | Museo de Málaga |
| Febrero 2023 — Julio 2023 | Gestión de Redes y Atención al Visitante | Museo del Vidrio y el Cristal |
| 2021 — 2023 | Gestión de Redes, Campaña y Difusión | Sociedad Protectora de Animales y Plantas de Málaga |

**Qué ha hecho en esos proyectos:**

- Estrategia de contenidos para redes sociales a nivel provincial y local.
- Campañas de movilización juvenil, política social y derechos laborales.
- Cobertura de actos públicos, asambleas, ruedas de prensa y manifestaciones.
- Gestión de comunidad, moderación de debates y atención de consultas.
- Contenidos divulgativos y de mediación cultural para museos.
- Redacción de copys, cartelería digital y boletines informativos.
- Creación de vídeo vertical, fotografía y campañas de adopción y concienciación.
- Planificación editorial y atención al visitante en entornos digitales.

### Formación

- **Máster en Desarrollos Sociales de la Cultura Artística** — Universidad de
  Málaga, 2025–2026.
- **Grado en Historia del Arte** — Universidad de Málaga, 2019–2024.

### Herramientas y competencias

- Canva, CapCut, Meta Business Suite.
- Edición de vídeo vertical: Reels, TikTok y Shorts.
- Fotografía y bancos de imágenes abiertos.
- Copywriting y redacción divulgativa.
- Comunicación política y social.
- Cobertura de eventos en directo.
- Composición y teoría del color aplicada.
- Moderación de comunidades.

### Idiomas

- Español: nativo.
- Inglés: B2.

---

## Qué incluye la web

- **Hero** con propuesta de valor, CTA principal y descarga de CV.
- **Marquee** de especialidades.
- **Trabajo seleccionado** con pósters, vídeos y galerías de fotos reales.
- **Archivo de proyectos** filtrable por categoría en `/trabajo`.
- **Servicios**: estrategia, grabación, edición vertical, community management,
  cobertura de eventos, copy y divulgación.
- **Sobre mí** con retrato real y enfoque profesional.
- **Trayectoria** con experiencia, formación, herramientas e idiomas.
- **FAQ** con las dudas habituales antes de contratar.
- **Contacto** con email, WhatsApp, teléfono, formulario y compromiso de
  respuesta en menos de 24 h laborables.
- **CTA fijo en móvil** para contactar rápido.
- **Páginas legales y de soporte:** política de privacidad, página de
  agradecimiento y 404 personalizada.
- **SEO:** metadescripciones, Open Graph, `robots.txt`, `sitemap.xml`, datos
  estructurados (`Person`, `ProfessionalService`, `WebSite`, `FAQPage`) y migas
  de pan.

### Comportamiento móvil

La web está pensada primero para móvil:

- Sin scroll horizontal en la página.
- Zoom mínimo bloqueado para que no se pueda “encoger” la web por accidente;
  el zoom de acercamiento sigue permitido.
- Proyectos en rejilla vertical de dos columnas.
- Visor de proyecto a pantalla completa: vídeo 9:16 sin recortes, carrusel
  táctil entre reels y descripción debajo, estilo publicación de Instagram.
- Fotos cuadradas completas, sin recortes.
- Formulario con inputs de 16px para evitar el zoom automático de iOS.

---

## Stack

- Next.js 15 (App Router) + TypeScript estricto.
- Tailwind CSS v4 + sistema de diseño propio en `app/styles/`.
- GSAP 3 (ScrollTrigger + SplitText) para animaciones de scroll.
- `next/font` con Newsreader (display) e Inter (cuerpo).
- Formulario con API interna y envío opcional por Resend; fallback a `mailto:`.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build
npm start
```

## Contenido y edición

- `data/site.ts` — datos globales: nombre, email, WhatsApp, CV, redes, URL y
  tiempo de respuesta.
- `data/content.ts` — todo el contenido editorial: hero, proyectos, servicios,
  sobre mí, experiencia, formación, FAQ y contacto.
- `public/cv/raquel-perez-pintor.pdf` — CV descargable.
- `public/media/photos/` — fotos reales y retrato.
- `public/media/posters/` — pósters de los vídeos.
- `public/media/videos/` — vídeos (no versionados en Git; ver su README).

### Añadir o cambiar un proyecto

Los proyectos están en `data/content.ts` (`work`). Cada proyecto admite:

```ts
video: "/media/videos/mi-video.mp4",     // vídeo principal
poster: "/media/posters/mi-video.jpg",   // portada
videos: [                                 // playlist de una campaña
  { src: "/media/videos/a.mp4", poster: "/media/posters/a.jpg", label: "Reel 1" },
],
photos: [                                 // galería de fotos
  "/media/photos/a.jpg",
  "/media/photos/b.jpg",
],
```

### Vídeos y Git

Los MP4 **no se versionan** por tamaño. En local siguen en
`public/media/videos/` y el despliegue actual de Vercel ya los tiene. Si se
despliega desde GitHub, esa carpeta irá vacía: hay que desplegar desde local,
subir los vídeos a Vercel Blob/S3 o volver a añadirlos al repo.

## Formulario de contacto

Sin configuración, el formulario abre el correo del usuario con el mensaje
preparado (fallback `mailto:`). Para envío real:

**Opción A — Resend (recomendada):**

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` (por defecto `rperezpintor@gmail.com`)
- `CONTACT_FROM_EMAIL` (ej. `Web Raquel <web@raquelperezpintores.com>`)

**Opción B — Formspree / FormSubmit:**

- `NEXT_PUBLIC_FORM_ENDPOINT`

Si existe, tiene prioridad sobre Resend.

## Despliegue

El proyecto está desplegado en Vercel. El auto-deploy desde GitHub está
desconectado para no publicar una versión sin los vídeos (que no se versionan).
Se despliega desde local, donde sí están los MP4:

```bash
npx vercel deploy --prod
```

Variables recomendadas:

- `NEXT_PUBLIC_SITE_URL=https://raquelperezpintores.com`
- Variables de Resend si se activa el envío automático.

### Dominio

Dominio comprado en Porkbun y conectado a Vercel:

- `raquelperezpintores.com`
- `www.raquelperezpintores.com`

DNS configurado con los registros A y CNAME indicados por Vercel. SSL gestionado
automáticamente por Vercel.

## Estructura rápida

```
app/
  page.tsx                 home
  trabajo/page.tsx         archivo de proyectos
  gracias/page.tsx         página de agradecimiento
  privacidad/page.tsx      política de privacidad
  not-found.tsx            404 personalizada
  api/contact/route.ts     envío del formulario
  components/              UI
  styles/                  sistema de diseño
data/                      contenido y configuración
public/media/              fotos, pósters y vídeos
public/cv/                 CV en PDF
```

## Nota legal

La política de privacidad está en `/privacidad`. Conviene revisarla con asesoría
legal antes de publicar cambios importantes y mantener actualizada la fecha.
