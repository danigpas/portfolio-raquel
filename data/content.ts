/**
 * Contenido editorial de la web. Toda la copy vive aquí, no en los componentes.
 * Fuente: CV de Raquel Pérez Pintor (2026).
 */

export type Theme = "moss" | "clay" | "ochre" | "slate" | "ink"

export type WorkItem = {
  slug: string
  title: string
  client: string
  year: string
  category: string
  format: string
  summary: string
  tags: string[]
  theme: Theme
  /** Palabra grande del póster generado por CSS. */
  posterWord: string
  /** Línea pequeña del póster. */
  posterKicker: string
  /** Vídeo principal (compatibilidad). */
  video?: string | null
  /** Playlist de vídeos de una misma campaña. */
  videos?: { src: string; poster?: string; label?: string }[]
  /** Galería de fotos de una campaña. */
  photos?: string[]
  /** Imagen de portada opcional. */
  poster?: string | null
  featured?: boolean
}

export const hero = {
  kicker: "Comunicación digital · Málaga",
  titleLines: [
    { before: "Historias que ", em: "se ven", after: "." },
    { before: "Comunidades que ", em: "se quedan", after: "." },
  ],
  intro:
    "Estrategia, grabación y edición de contenido para marcas, museos y proyectos con algo que contar. Del titular al Reel, sin perder la esencia.",
  primaryCta: { label: "Hablemos de tu proyecto", href: "#contacto" },
  secondaryCta: { label: "Ver el trabajo", href: "#trabajo" },
  micro: "Respuesta en menos de 24 h laborables · Málaga y remoto",
  facts: [
    { value: "Desde 2021", label: "creando contenido y comunidad" },
    { value: "4", label: "organizaciones acompañadas" },
    { value: "Grado + Máster", label: "Historia del Arte · UMA" },
  ],
}

export const heroCards: {
  theme: Theme
  kicker: string
  word: string
  meta: string
}[] = [
  {
    theme: "clay",
    kicker: "Reel · Campaña",
    word: "Se ven.",
    meta: "Juventudes Socialistas · 2025",
  },
  {
    theme: "moss",
    kicker: "Divulgación",
    word: "Se acerca.",
    meta: "Museo de Málaga · 2026",
  },
  {
    theme: "ochre",
    kicker: "Comunidad",
    word: "Se queda.",
    meta: "Protectora de Málaga · 2021",
  },
]

export const marqueeItems = [
  "Estrategia editorial",
  "Reels que se ven",
  "TikTok",
  "Community management",
  "Museos que cuentan",
  "Causas sociales",
  "Cobertura en directo",
  "Copy divulgativo",
  "Fotografía",
  "Canva + CapCut",
]

export const work: WorkItem[] = [
  {
    slug: "campanas-juventudes",
    title: "Campañas que mueven a una generación",
    client: "Juventudes Socialistas de Málaga",
    year: "2025 — Actualidad",
    category: "Social y política",
    format: "5 reels · Campaña",
    summary:
      "Estrategia de contenidos a nivel provincial y local, con piezas de vídeo vertical para campañas de movilización juvenil, política social y derechos laborales. Esta selección reúne cinco reels de la campaña, grabados y editados para Instagram y TikTok, además de la cobertura de asambleas, ruedas de prensa y manifestaciones.",
    tags: ["Estrategia", "Vídeo vertical", "Canva", "CapCut", "Cobertura"],
    theme: "clay",
    posterWord: "Se ven.",
    posterKicker: "5 reels de campaña",
    featured: true,
    video: "/media/videos/js-malaga-03.mp4",
    poster: "/media/posters/js-malaga-03.jpg",
    videos: [
      { src: "/media/videos/js-malaga-03.mp4", poster: "/media/posters/js-malaga-03.jpg", label: "Atardecer" },
      { src: "/media/videos/js-malaga-01.mp4", poster: "/media/posters/js-malaga-01.jpg", label: "La Rosaleda" },
      { src: "/media/videos/js-malaga-02.mp4", poster: "/media/posters/js-malaga-02.jpg", label: "El barrio" },
      { src: "/media/videos/js-malaga-04.mp4", poster: "/media/posters/js-malaga-04.jpg", label: "Conciencia" },
      { src: "/media/videos/js-malaga-05.mp4", poster: "/media/posters/js-malaga-05.jpg", label: "Gobierno" },
    ],
  },
  {
    slug: "museo-de-malaga",
    title: "El museo, a un scroll",
    client: "Museo de Málaga",
    year: "2026",
    category: "Cultura y museos",
    format: "Divulgación · Contenido",
    summary:
      "Co-gestión de los canales oficiales del museo y dinamización de la comunidad virtual. Contenidos divulgativos y de mediación cultural para acercar el patrimonio al público general y escolar, con copys, cartelería digital y boletines informativos.",
    tags: ["Divulgación", "Copy", "Cartelería", "Boletines", "Comunidad"],
    theme: "moss",
    posterWord: "Se acerca.",
    posterKicker: "Patrimonio para todos",
    video: null,
    poster: null,
  },
  {
    slug: "museo-del-vidrio",
    title: "Cristal en movimiento",
    client: "Museo del Vidrio y el Cristal",
    year: "2023",
    category: "Cultura y museos",
    format: "Instagram · Facebook",
    summary:
      "Creación de contenidos visuales para Instagram y Facebook, dando visibilidad a la colección permanente y a las exposiciones temporales. Planificación editorial y atención a las dudas de las personas visitantes en el entorno digital.",
    tags: ["Instagram", "Facebook", "Planificación", "Fotografía"],
    theme: "slate",
    posterWord: "Se mira.",
    posterKicker: "La colección, en redes",
    video: null,
    poster: null,
  },
  {
    slug: "protectora-malaga",
    title: "Una adopción, una historia",
    client: "Sociedad Protectora de Animales y Plantas de Málaga",
    year: "2021 — 2023",
    category: "Causas sociales",
    format: "Fotografía · Campaña",
    summary:
      "Comunicación digital orientada a adopciones, concienciación y campañas de captación de recursos. Una selección de piezas gráficas y fotografía de animales pensadas para maximizar el alcance orgánico y la respuesta emocional de la comunidad.",
    tags: ["Fotografía", "Diseño", "Adopciones", "Comunidad"],
    theme: "ochre",
    posterWord: "Se queda.",
    posterKicker: "Campañas que encuentran hogar",
    video: null,
    poster: "/media/photos/prote-verano.jpg",
    photos: [
      "/media/photos/prote-verano.jpg",
      "/media/photos/prote-lupo.jpg",
      "/media/photos/prote-excursion.jpg",
    ],
  },
  {
    slug: "cobertura-directo",
    title: "Cuando pasa, se cuenta",
    client: "Actos públicos y asambleas",
    year: "2023 — Actualidad",
    category: "Eventos y directo",
    format: "Cobertura · Foto y vídeo",
    summary:
      "Cobertura de actos públicos, asambleas, ruedas de prensa y manifestaciones. Fotografía, vídeo y publicación en tiempo real para que la información llegue mientras sigue pasando.",
    tags: ["Directo", "Fotografía", "Vídeo", "Redacción"],
    theme: "ink",
    posterWord: "Se cuenta.",
    posterKicker: "Información en tiempo real",
    video: null,
    poster: null,
  },
  {
    slug: "carteleria",
    title: "Cartelería con criterio",
    client: "Proyectos sociales y culturales",
    year: "2021 — Actualidad",
    category: "Diseño y campañas",
    format: "Diseño gráfico",
    summary:
      "Piezas gráficas y cartelería digital para campañas, exposiciones y acciones de calle. Composición, jerarquía y teoría del color aplicadas para que el mensaje se entienda antes de leerlo.",
    tags: ["Canva", "Composición", "Color", "Campañas"],
    theme: "moss",
    posterWord: "Se entiende.",
    posterKicker: "Diseño que acompaña",
    video: null,
    poster: null,
  },
]

export const services = [
  {
    number: "01",
    icon: "compass",
    title: "Estrategia y planificación",
    description:
      "Un calendario con intención: pilares de contenido, tono y objetivos claros para dejar de publicar por publicar.",
  },
  {
    number: "02",
    icon: "camera",
    title: "Creación y grabación",
    description:
      "Ideas, guion, rodaje y dirección de piezas pensadas para el formato vertical y para el lugar donde vive tu audiencia.",
  },
  {
    number: "03",
    icon: "scissors",
    title: "Edición vertical",
    description:
      "Reels, TikToks y Shorts con ritmo, subtítulos y un montaje que retiene. Del bruto al vídeo listo para publicar.",
  },
  {
    number: "04",
    icon: "community",
    title: "Community management",
    description:
      "Moderación, conversación y atención en canales digitales con criterio. Una comunidad que se siente escuchada.",
  },
  {
    number: "05",
    icon: "calendar",
    title: "Cobertura de eventos",
    description:
      "Actos, asambleas, ruedas de prensa y directos: foto, vídeo y publicación en tiempo real, sin perder el contexto.",
  },
  {
    number: "06",
    icon: "pen",
    title: "Copy y divulgación",
    description:
      "Traduzco mensajes institucionales, normativos y reivindicativos a un lenguaje cercano, claro y accesible.",
  },
] as const

export const about = {
  kicker: "Sobre mí",
  title: "La mirada que hay detrás del contenido.",
  paragraphs: [
    "Soy Raquel Pérez Pintor. Llevo desde 2021 gestionando canales digitales para entidades sociales, políticas y museísticas en Málaga. Mi punto de partida no es el algoritmo: es la historia que hay detrás.",
    "Estudié Historia del Arte y un máster en Desarrollos Sociales de la Cultura Artística. Eso me dio criterio visual, contexto y una forma de mirar el patrimonio —y las marcas— que va más allá de lo bonito.",
    "Trabajo con Canva y CapCut, grabo y edito contenido vertical, y escribo copys que traducen mensajes complejos a un lenguaje cercano. Me gusta que las cosas se entiendan a la primera y que la comunidad tenga ganas de responder.",
  ],
  quote:
    "Un buen contenido no solo se ve. Se entiende, se comparte y se recuerda.",
  photo: "/media/photos/raquel-retrato.jpg" as string | null,
  tools: [
    "Canva",
    "CapCut",
    "Meta Business Suite",
    "Edición vertical",
    "Fotografía",
    "Bancos de imágenes",
  ],
  competencies: [
    "Copywriting",
    "Redacción divulgativa",
    "Comunicación política y social",
    "Cobertura de eventos",
    "Composición y color",
    "Moderación de comunidades",
  ],
  languages: [
    { language: "Español", level: "Nativo" },
    { language: "Inglés", level: "B2" },
  ],
}

export const experience = [
  {
    role: "Responsable de Redes Sociales y Comunicación Digital",
    org: "Juventudes Socialistas de Málaga",
    period: "Enero 2025 — Actualidad",
    location: "Málaga",
    current: true,
    summary:
      "Estrategia y contenido para una organización con voz propia, a nivel provincial y local.",
    bullets: [
      "Diseño y ejecución de la estrategia de contenidos para redes sociales a nivel provincial y local.",
      "Creación de campañas de movilización juvenil, política social y derechos laborales con Canva y CapCut.",
      "Cobertura de actos públicos, asambleas, ruedas de prensa y manifestaciones.",
      "Gestión de comunidad, moderación de debates y atención de consultas en canales digitales.",
    ],
    tags: ["Estrategia", "Campañas", "Cobertura", "Comunidad"],
  },
  {
    role: "Prácticas en el Departamento de Difusión",
    org: "Museo de Málaga",
    period: "Marzo 2026 — Junio 2026",
    location: "Málaga",
    current: false,
    summary:
      "Divulgación cultural y comunidad virtual para acercar el patrimonio a nuevos públicos.",
    bullets: [
      "Co-gestión de los canales oficiales del museo y dinamización de la comunidad virtual.",
      "Elaboración de contenidos divulgativos y de mediación cultural orientados al público general y escolar.",
      "Redacción de copys, diseño de cartelería digital y boletines informativos.",
    ],
    tags: ["Divulgación", "Copy", "Cartelería", "Boletines"],
  },
  {
    role: "Gestión de Redes y Atención al Visitante",
    org: "Museo del Vidrio y el Cristal",
    period: "Febrero 2023 — Julio 2023",
    location: "Málaga",
    current: false,
    summary:
      "Contenido visual y planificación para dar visibilidad a la colección y a las exposiciones.",
    bullets: [
      "Creación de contenidos visuales para Instagram y Facebook, promoviendo la visibilidad de la colección permanente y las exposiciones.",
      "Planificación de publicaciones y atención a dudas de visitantes en entorno digital.",
    ],
    tags: ["Instagram", "Facebook", "Planificación"],
  },
  {
    role: "Gestión de Redes, Campaña y Difusión",
    org: "Sociedad Protectora de Animales y Plantas de Málaga",
    period: "2021 — 2023",
    location: "Málaga",
    current: false,
    summary:
      "Comunicación digital con emoción y propósito: adopciones, concienciación y captación de recursos.",
    bullets: [
      "Gestión de la comunicación digital orientada a adopciones, concienciación y campañas de captación de recursos.",
      "Creación de vídeos cortos y fotografía de animales para maximizar el alcance orgánico y la respuesta emocional de la comunidad.",
    ],
    tags: ["Vídeo corto", "Fotografía", "Causas sociales"],
  },
] as const

export const education = [
  {
    title: "Máster en Desarrollos Sociales de la Cultura Artística",
    org: "Universidad de Málaga",
    period: "2025 — 2026",
  },
  {
    title: "Grado en Historia del Arte",
    org: "Universidad de Málaga",
    period: "2019 — 2024",
  },
] as const

export const faq = [
  {
    question: "¿Cómo empezamos a trabajar juntas?",
    answer:
      "Escríbeme contando qué necesitas, en qué canal y en qué momento está el proyecto. Te respondo en menos de 24 h laborables y te propongo una primera llamada de 20 minutos para ver si encajamos.",
  },
  {
    question: "¿Trabajas solo en Málaga?",
    answer:
      "Tengo base en Málaga y trabajo en remoto con marcas de cualquier lugar. Para grabaciones y coberturas presenciales, valoramos el desplazamiento dentro del presupuesto.",
  },
  {
    question: "¿Qué incluye la gestión de redes sociales?",
    answer:
      "Estrategia y calendario editorial, creación de piezas gráficas y de vídeo, edición vertical, publicación, community management y revisión de resultados. Se adapta a lo que ya tengas y a lo que necesites delegar.",
  },
  {
    question: "¿Haces grabación y edición de vídeo?",
    answer:
      "Sí. Grabo y edito contenido vertical para Reels, TikTok y Shorts, y también hago fotografía de apoyo para redes. Para producciones más grandes, coordino el equipo necesario.",
  },
  {
    question: "¿Trabajas con museos e instituciones?",
    answer:
      "Sí, es una de mis especialidades. He gestionado canales para el Museo de Málaga y el Museo del Vidrio y el Cristal, y sé moverme con mensajes institucionales, patrimonio y públicos muy distintos.",
  },
  {
    question: "¿Cuánto tarda un proyecto?",
    answer:
      "Depende del alcance. Una campaña puntual puede estar lista en una o dos semanas; una gestión mensual se planifica por trimestres. Antes de empezar recibes un calendario claro con entregas y revisiones.",
  },
  {
    question: "¿Qué necesitas de mí para empezar?",
    answer:
      "El material de marca que tengas, acceso a los canales si ya existen y una idea de objetivos. Si no lo tienes claro, lo definimos juntas en la primera llamada.",
  },
  {
    question: "¿Cuál es tu compromiso de tiempo de respuesta?",
    answer:
      "Respondo en menos de 24 h laborables. Si es urgente, escríbeme por WhatsApp y lo vemos lo antes posible.",
  },
]

export const contact = {
  kicker: "Contacto",
  titleBefore: "¿Tienes una historia que ",
  titleEm: "contar",
  titleAfter: "?",
  intro:
    "Cuéntame el proyecto, el canal y el momento en el que está. Te respondo en menos de 24 h laborables.",
  projectTypes: [
    "Redes sociales",
    "Campaña",
    "Contenido audiovisual",
    "Community management",
    "Cultura y museos",
    "Otro",
  ],
  budgetHint: "No hace falta que tengas el presupuesto cerrado.",
}
