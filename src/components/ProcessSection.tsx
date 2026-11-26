import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { processSteps } from '../data/products'

type Props = { eyebrow?: string; title: string; text?: string }

export default function ProcessSection({ eyebrow = 'The journey', title, text }: Props) {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="container-page">
        <Reveal><SectionHeading eyebrow={eyebrow} title={title} text={text} /></Reveal>
        <Reveal delay={0.1}>
          <ol className="relative mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
            <span className="absolute left-0 right-0 top-[5px] hidden h-px bg-gold/50 lg:block" aria-hidden />
            {processSteps.map((s) => (
              <li key={s.n} className="relative">
                <span className="relative block h-[11px] w-[11px] rounded-full bg-gold" />
                <p className="mt-4 text-[11px] text-muted">{s.n}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink">{s.title}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
