import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import PacketCard from './PacketCard'
import SectionHeading from './SectionHeading'
import { product } from '../data/products'

export default function ProductShowcase() {
  return (
    <section className="overflow-hidden bg-ivory py-20 sm:py-28">
      <div className="container-page grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <SectionHeading eyebrow="Our product" title="From the goodness of wheat to your kitchen." />
          <p className="mt-6 text-muted">Bhoomi Chakki Atta · {product.wheat}</p>
          <p className="mt-2 font-serif text-lg italic text-choc">Goodness of Nature, Trust of Purity</p>
          <div className="mt-10 border-t border-ink/15 pt-8">
            <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Available pack sizes</h3>
            <ul className="mt-5 flex flex-wrap gap-3">
              {product.packSizes.map((s) => (
                <li key={s} className="min-w-[92px] border border-ink/30 px-6 py-3 text-center text-sm font-semibold tracking-[0.12em]">{s}</li>
              ))}
            </ul>
          </div>
          <Link to="/product" className="btn-dark mt-10">View Product <ArrowRight size={14} /></Link>
        </Reveal>
        <Reveal delay={0.1}><PacketCard /></Reveal>
      </div>
    </section>
  )
}
