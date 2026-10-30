import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

export function ArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  )
}

export function ArrowUpRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Icon>
  )
}

export function ArrowDown(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 4v15" />
      <path d="m6 13 6 6 6-6" />
    </Icon>
  )
}

export function ChevronLeft(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m15 5-7 7 7 7" />
    </Icon>
  )
}

export function ChevronRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m9 5 7 7-7 7" />
    </Icon>
  )
}

export function Play(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8 5.5v13l10-6.5-10-6.5Z" fill="currentColor" stroke="none" />
    </Icon>
  )
}

export function Download(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </Icon>
  )
}

export function Menu(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3.5 7h17" />
      <path d="M3.5 12h17" />
      <path d="M3.5 17h17" />
    </Icon>
  )
}

export function Close(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </Icon>
  )
}

export function Mail(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </Icon>
  )
}

export function WhatsApp(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12.04 3a8.9 8.9 0 0 0-7.62 13.5L3.3 21l4.64-1.2A8.9 8.9 0 1 0 12.04 3Z" />
      <path d="M8.9 8.2c.2-.45.42-.46.62-.47h.53c.17 0 .44.06.67.5.24.46.8 1.96.87 2.1.07.14.11.3.02.48-.1.18-.14.3-.28.46l-.42.49c-.14.16-.28.33-.12.6.16.28.72 1.18 1.55 1.92 1.06.95 1.96 1.25 2.24 1.39.28.14.44.12.6-.07.17-.19.7-.81.88-1.09.18-.28.36-.23.6-.14.25.09 1.57.74 1.84.88.27.14.45.2.51.32.06.12.06.7-.16 1.38-.22.68-1.27 1.3-1.76 1.35-.5.06-1.12.08-1.8-.11-.42-.12-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.42Z" />
    </Icon>
  )
}

export function Phone(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 4h3.2l1.3 4-2 1.4a13.4 13.4 0 0 0 6.1 6.1l1.4-2 4 1.3V18c0 1.1-.9 2-2 2A16 16 0 0 1 3 6c0-1.1.9-2 2-2Z" />
    </Icon>
  )
}

export function MapPin(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20 10c0 5.5-8 11-8 11S4 15.5 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Icon>
  )
}

export function Clock(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </Icon>
  )
}

export function Instagram(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.7" fill="currentColor" stroke="none" />
    </Icon>
  )
}

export function TikTok(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 4v10.3a3.4 3.4 0 1 1-3.4-3.4" />
      <path d="M14 4c.5 2.3 2 3.9 4.5 4.2" />
    </Icon>
  )
}

export function LinkedIn(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M7.5 10v6.5" />
      <path d="M7.5 7.5v.1" />
      <path d="M11.3 16.5V10" />
      <path d="M11.3 13c0-1.8 1-2.8 2.5-2.8s2.4 1 2.4 2.8v3.5" />
    </Icon>
  )
}

export function Compass(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" />
    </Icon>
  )
}

export function Camera(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1l1.3-2h6.4L16.5 6h1A2.5 2.5 0 0 1 20 8.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-8Z" />
      <circle cx="12" cy="12.3" r="3.4" />
    </Icon>
  )
}

export function Scissors(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="6" cy="7" r="2.5" />
      <circle cx="6" cy="17" r="2.5" />
      <path d="m8.2 8.2 11.3 9.3" />
      <path d="m8.2 15.8 11.3-9.3" />
    </Icon>
  )
}

export function Community(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5.6" />
      <path d="M17.5 13.6a5.4 5.4 0 0 1 3 4.9" />
    </Icon>
  )
}

export function Calendar(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M3.5 9.5h17" />
      <path d="M8 13h.1" />
      <path d="M12 13h.1" />
      <path d="M16 13h.1" />
    </Icon>
  )
}

export function Pen(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m15.5 4.5 4 4L8 20H4v-4L15.5 4.5Z" />
      <path d="m13.5 6.5 4 4" />
    </Icon>
  )
}

export function Check(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </Icon>
  )
}

export function Plus(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 4v16" />
      <path d="M4 12h16" />
    </Icon>
  )
}

export function Heart(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 20s-7.5-4.4-7.5-9.5A4.2 4.2 0 0 1 12 7.4a4.2 4.2 0 0 1 7.5 3.1C19.5 15.6 12 20 12 20Z" />
    </Icon>
  )
}

export function Spark(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3.5c.3 4.4 2.3 6.4 6.7 6.7-4.4.3-6.4 2.3-6.7 6.7-.3-4.4-2.3-6.4-6.7-6.7 4.4-.3 6.4-2.3 6.7-6.7Z" />
      <path d="M18.5 15.5c.1 1.8.8 2.5 2.6 2.6-1.8.1-2.5.8-2.6 2.6-.1-1.8-.8-2.5-2.6-2.6 1.8-.1 2.5-.8 2.6-2.6Z" />
    </Icon>
  )
}

export function Shield(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3.5 19.5 6v5.5c0 4.6-3.2 7.6-7.5 9-4.3-1.4-7.5-4.4-7.5-9V6L12 3.5Z" />
      <path d="m8.8 12 2.1 2.1 4.3-4.6" />
    </Icon>
  )
}

export function Message(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20.5 11.5a7.5 7.5 0 0 1-11.1 6.6L4 19.5l1.5-5.2A7.5 7.5 0 1 1 20.5 11.5Z" />
      <path d="M8.5 11h.1" />
      <path d="M12 11h.1" />
      <path d="M15.5 11h.1" />
    </Icon>
  )
}

export function ExternalLink(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 4h6v6" />
      <path d="m20 4-9 9" />
      <path d="M18 14v4.5A1.5 1.5 0 0 1 16.5 20h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10" />
    </Icon>
  )
}

const map = {
  compass: Compass,
  camera: Camera,
  scissors: Scissors,
  community: Community,
  calendar: Calendar,
  pen: Pen,
} as const

export function ServiceIcon({ name, ...props }: IconProps & { name: keyof typeof map }) {
  const Component = map[name]
  return <Component {...props} />
}
