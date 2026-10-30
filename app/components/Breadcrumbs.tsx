import Link from "next/link"
import { site } from "@/data/site"

export type Crumb = {
  label: string
  href?: string
}

export default function Breadcrumbs({
  items,
  className = "",
}: {
  items: Crumb[]
  className?: string
}) {
  const all = [{ label: "Inicio", href: "/" }, ...items]
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: `${site.url}${item.href === "/" ? "" : item.href}` }
        : { item: `${site.url}/` }),
    })),
  }

  return (
    <nav className={`breadcrumbs ${className}`.trim()} aria-label="Migas de pan">
      <ol>
        {all.map((item, index) => {
          const isCurrent = index === all.length - 1
          return (
            <li key={`${item.label}-${index}`}>
              {item.href && !isCurrent ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span aria-current={isCurrent ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  )
}
