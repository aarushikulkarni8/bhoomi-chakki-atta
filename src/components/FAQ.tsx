import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { faqs } from '../data/company'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="container-page">
        <Reveal><SectionHeading eyebrow="Questions, answered" title="A little more about Bhoomi." /></Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 border-t border-ink/15">
            {faqs.map((f, i) => (
              <div key={f.q} className="border-b border-ink/15">
                <button
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-base font-medium sm:text-lg">{f.q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-ink transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                </button>
                {open === i && <p className="pb-6 pr-10 leading-relaxed text-muted">{f.a}</p>}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
