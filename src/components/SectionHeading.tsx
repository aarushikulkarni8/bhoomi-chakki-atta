import type { ReactNode } from 'react'

type Props = { eyebrow?: string; title: ReactNode; text?: string; align?: 'left' | 'center'; light?: boolean; as?: 'h1' | 'h2' }

export default function SectionHeading({ eyebrow, title, text, align = 'left', light, as = 'h2' }: Props) {
  const Tag = as
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className={`font-serif text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-[3.5rem] ${light ? 'text-white' : 'text-ink'}`}>{title}</Tag>
      {text && <p className={`mt-6 text-base leading-relaxed sm:text-lg ${light ? 'text-cream/75' : 'text-muted'}`}>{text}</p>}
    </div>
  )
}
