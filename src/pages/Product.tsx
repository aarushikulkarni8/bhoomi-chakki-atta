import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import PacketCard from '../components/PacketCard'
import Reveal from '../components/Reveal'
import Accent from '../components/Accent'
import { product } from '../data/products'

export default function Product() {
  return (
    <>
      <PageHeader
        eyebrow="Our product"
        title={<>Bhoomi <Accent>Chakki Atta</Accent></>}
        text="The everyday staple, made with intention. Bhoomi Chakki Atta is made from Premium Sharbati Wheat, bringing a familiar goodness to everyday kitchens."
      />
      <section className="overflow-hidden bg-ivory py-20 sm:py-28">
        <div className="container-page grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal><PacketCard /></Reveal>
          <Reveal delay={0.1}>
            <dl className="border-t border-ink/15">
              <div className="grid grid-cols-[150px_1fr] gap-4 border-b border-ink/15 py-5 sm:grid-cols-[200px_1fr]">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Product</dt>
                <dd className="font-medium sm:text-right">{product.name}</dd>
              </div>
              <div className="grid grid-cols-[150px_1fr] gap-4 border-b border-ink/15 py-5 sm:grid-cols-[200px_1fr]">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Wheat</dt>
                <dd className="font-medium sm:text-right">{product.wheat}</dd>
              </div>
              <div className="grid grid-cols-[150px_1fr] gap-4 border-b border-ink/15 py-5 sm:grid-cols-[200px_1fr]">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Positioning</dt>
                <dd className="font-medium sm:text-right">Quality You Can Trust</dd>
              </div>
              <div className="grid grid-cols-[150px_1fr] gap-4 border-b border-ink/15 py-5 sm:grid-cols-[200px_1fr]">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Available pack sizes</dt>
                <dd className="font-medium sm:text-right">
                  {product.packSizes.map((s) => <span key={s} className="block">{s}</span>)}
                </dd>
              </div>
              <div className="grid grid-cols-[150px_1fr] gap-4 border-b border-ink/15 py-5 sm:grid-cols-[200px_1fr]">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Ingredients</dt>
                <dd className="font-medium sm:text-right">{product.ingredients}</dd>
              </div>
            </dl>
            <Link to="/contact" className="btn-dark mt-10">Enquire Now <ArrowRight size={14} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
