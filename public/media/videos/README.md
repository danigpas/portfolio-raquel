# Vídeos

Los vídeos no se versionan en Git por su tamaño.

En local deben estar en esta carpeta con estos nombres:

- `js-malaga-01.mp4`
- `js-malaga-02.mp4`
- `js-malaga-03.mp4`
- `js-malaga-04.mp4`
- `js-malaga-05.mp4`

Los pósters sí están versionados en `public/media/posters/`.

## Para futuros despliegues

El despliegue actual de Vercel ya tiene los vídeos. Si se despliega desde GitHub,
esta carpeta irá vacía. Opciones:

1. Desplegar desde local con `npx vercel deploy --prod` (incluye los vídeos).
2. Subir los vídeos a Vercel Blob, S3 o similar y cambiar las rutas en
   `data/content.ts`.
3. Volver a añadirlos al repo (no recomendado por peso).
