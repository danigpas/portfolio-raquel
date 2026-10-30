import type { ReactNode } from "react"
import Breadcrumbs, { type Crumb } from "./Breadcrumbs"

export default function PageIntro({
  kicker,
  title,
  lede,
  crumbs,
}: {
  kicker: string
  title: ReactNode
  lede?: ReactNode
  crumbs: Crumb[]
}) {
  return (
    <header className="page-intro">
      <div className="shell page-intro__inner">
        <Breadcrumbs items={crumbs} />
        <p className="kicker">
          <span className="kicker__dot" aria-hidden="true" />
          {kicker}
        </p>
        <h1 className="page-intro__title">{title}</h1>
        {lede ? <p className="page-intro__lede">{lede}</p> : null}
      </div>
    </header>
  )
}
