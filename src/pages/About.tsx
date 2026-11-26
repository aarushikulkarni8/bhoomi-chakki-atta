import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Accent from '../components/Accent'
import { images } from '../data/products'
import { company } from '../data/company'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Bhoomi"
        title={<>Made <Accent>for home.</Accent></>}
        text="Bhoomi Chakki Atta is the brand from Aarambh Manufacturers, built around a simple belief: quality and freshness belong in every kitchen."
      />
      <section className="bg-ivory">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center justify-center bg-deep p-6 sm:p-12 lg:p-16">
            <div className="aspect-[4/5] w-full max-w-md overflow-hidden border border-gold/40 p-2">
              <img src={images.brandStory} alt="Wheat grains and ears of wheat" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="flex items-center px-6 py-16 sm:px-12 lg:px-20">
            <Reveal>
              <h2 className="font-serif text-4xl font-medium leading-[1.1] sm:text-5xl">The goodness of everyday food.</h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
                At Bhoomi, we keep the focus on what matters: Premium Sharbati Wheat, the familiar tradition of chakki atta, and quality you can trust.
              </p>
              <div className="mt-10 border-t border-ink/15 pt-6">
                <p className="text-sm text-muted">Manufacturer</p>
                <p className="mt-1 text-lg font-semibold uppercase tracking-[0.12em]">{company.manufacturer}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="bg-gold py-16 text-center">
        <p className="container-page font-serif text-2xl font-medium italic text-deep sm:text-4xl">“{company.heroLine}”</p>
      </section>
    </>
  )
}
