type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ description, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs sm:text-sm uppercase tracking-[0.34em] text-(--accent) opacity-80">{eyebrow}</p>
      <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-(--heading)">{title}</h2>
      <p className="mt-4 text-sm sm:text-base leading-7 text-(--muted)">{description}</p>
    </div>
  )
}