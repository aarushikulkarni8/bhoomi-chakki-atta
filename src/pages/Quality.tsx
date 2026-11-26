import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import ProcessSection from '../components/ProcessSection'

const pillars = [
  { title: 'Premium Sharbati Wheat', text: 'Every pack of Bhoomi Chakki Atta begins with Premium Sharbati Wheat.' },
  { title: 'Quality', text: 'Quality you can trust is the promise behind every Bhoomi pack.' },
  { title: 'Chakki tradition', text: 'The familiar goodness of chakki atta, brought to everyday Indian kitchens.' },
  { title: 'Freshness', text: 'Bringing freshness to every kitchen, one roti at a time.' },
]

export default function Quality() {
  return (
    <>
      <PageHeader
        eyebrow="Quality"
        title="Quality you can trust."
        text="Our quality story begins with Premium Sharbati Wheat and stays honest about what is verified."
      />
      <section className="bg-ivory py-20 sm:py-28">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="h-full border border-ink/15 bg-white p-7 transition-colors hover:border-gold">
                <h2 className="font-serif text-2xl font-medium leading-tight">{p.title}</h2>
                <p className="mt-4 text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <div className="bg-cream">
        <ProcessSection eyebrow="The journey" title="Care at every step" />
      </div>
      <section className="bg-deep py-16 text-center text-cream">
        <div className="container-page">
          <h2 className="font-serif text-3xl font-medium sm:text-4xl">Goodness of Nature, Trust of Purity</h2>
          <Link to="/contact" className="btn-gold mt-8">Contact Us <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  )
}
