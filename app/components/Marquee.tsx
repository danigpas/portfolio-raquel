import { marqueeItems } from "@/data/content"

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="marquee__group" aria-hidden={hidden || undefined}>
      {marqueeItems.map((item) => (
        <span className="marquee__item" key={item}>
          {item}
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Especialidades">
      <div className="marquee__track">
        <Group />
        <Group hidden />
      </div>
    </div>
  )
}
