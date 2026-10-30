# HANDOFF — raquelperezpintores.com

## Qué es

Portfolio de **Raquel Pérez Pintor** (comunicación digital, redes sociales,
contenido y divulgación cultural). One-page editorial mobile-first + archivo de
proyectos, páginas legales, 404 y gracias. Diseño inspirado en amble.fyi.

## Estado

- Implementación completa en `main`.
- Vídeos y fotos reales integrados en `public/media/` (5 reels de campaña +
  3 piezas de fotografía de la Protectora).
- Build de producción verificado (`npm run build`).
- Desplegado en Vercel:
  - Producción: https://portfolio-cv-pink-two.vercel.app
  - Inspector: https://vercel.com/daniyipis-projects/portfolio-cv
- Proyecto de Vercel conectado al repo `github.com/danigpas/portfolio-cv`.
- Dominio comprado en Porkbun: **raquelperezpintores.com**. Pendiente de
  añadirlo en Vercel y configurar DNS.

## Puesta en marcha local

```bash
npm install
npm run dev        # http://localhost:3000
```

## Contenido

- `data/site.ts`: contacto, WhatsApp, CV, redes, URL, tiempo de respuesta.
- `data/content.ts`: hero, proyectos, servicios, sobre mí, experiencia, FAQ.
- `public/media/`: vídeos MP4 H.264, pósters y fotos optimizadas.
- `public/cv/raquel-perez-pintor.pdf`: CV descargable.

## Formulario

- Sin variables: fallback a `mailto:` (abre el correo del usuario).
- Con `RESEND_API_KEY` + `CONTACT_TO_EMAIL` + `CONTACT_FROM_EMAIL`: envío real.
- Alternativa: `NEXT_PUBLIC_FORM_ENDPOINT` (Formspree/FormSubmit).

## Pendiente

1. Reclamar/iniciar sesión en Vercel y renombrar el proyecto a
   `raquelperezpintores` si se quiere la URL `raquelperezpintores.vercel.app`.
2. Añadir el dominio en Vercel y copiar los registros DNS exactos a Porkbun.
3. Configurar Resend (o Formspree) para que el formulario envíe de verdad.
4. Añadir los enlaces de Instagram/TikTok/LinkedIn en `data/site.ts`.
5. Revisar la política de privacidad con asesoría legal antes de publicar
   cambios importantes.
6. El retrato de “Sobre mí” ya usa la foto real (`about.photo`).
