import type { ReactNode } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function PageHeader({ eyebrow, title, text }: { eyebrow?: string; title: ReactNode; text?: string }) {
  return (
    <section className="bg-cream">
      <div className="container-page py-20 sm:py-28">
        <Reveal><SectionHeading as="h1" eyebrow={eyebrow} title={title} text={text} /></Reveal>
      </div>
    </section>
  )
}
