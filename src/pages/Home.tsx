import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Accent from '../components/Accent'
import FeatureCard from '../components/FeatureCard'
import ProductShowcase from '../components/ProductShowcase'
import ProcessSection from '../components/ProcessSection'
import FAQ from '../components/FAQ'
import { images } from '../data/products'
import { company } from '../data/company'

const values = [
  { n: '01', title: 'Premium Sharbati Wheat', text: 'Made from Premium Sharbati Wheat.' },
  { n: '02', title: 'Freshness', text: 'Bringing freshness to everyday kitchens.' },
  { n: '03', title: 'Chakki Tradition', text: 'Rooted in the familiar tradition of chakki atta.' },
  { n: '04', title: 'Quality', text: 'Quality you can trust in every pack.' },
]

export default function Home() {
  return (
    <>
      <Hero />

      <section id="promise" className="bg-ivory py-20 sm:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <span className="eyebrow">The Bhoomi promise</span>
            <h2 className="max-w-3xl font-serif text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-6xl">Goodness of nature. Trust of purity.</h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              At Bhoomi Chakki Atta, we believe everyday food begins with quality you can trust. Made from Premium Sharbati Wheat, Bhoomi brings freshness and the familiar goodness of chakki atta to everyday Indian kitchens.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="hidden lg:block">
            <div className="mx-auto flex h-56 w-56 flex-col items-center justify-center rounded-full border border-gold/50 text-center">
              <span className="font-serif text-5xl text-gold">BH</span>
              <span className="mt-2 max-w-[100px] text-[9px] font-semibold uppercase leading-tight tracking-[0.2em] text-gold/80">Made for everyday meals</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="container-page">
          <Reveal><SectionHeading eyebrow="Why Bhoomi" title="Simple values, thoughtfully made." /></Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.08}>
                <div className="border-t border-ink/20 pt-5">
                  <p className="text-xs text-gold">{v.n}</p>
                  <h3 className="mt-6 font-serif text-2xl font-medium leading-tight">{v.title}</h3>
                  <p className="mt-3 text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            <Reveal><FeatureCard image={images.packet} alt="Bhoomi Chakki Atta packet" title="Bhoomi" contain /></Reveal>
            <Reveal delay={0.1}><FeatureCard image={images.wheatField} alt="Golden ears of wheat" title="Wheat fields" /></Reveal>
            <Reveal delay={0.2}><FeatureCard image={images.chakki} alt="Traditional stone chakki" title="Chakki tradition" /></Reveal>
          </div>
        </div>
      </section>

      <ProductShowcase />

      <ProcessSection
        eyebrow="From wheat to kitchen"
        title="From wheat to kitchen."
        text="A simple story of care, from the grain you know to the atta your family enjoys."
      />

      <section className="bg-deep text-cream">
        <div className="grid lg:grid-cols-2">
          <Reveal className="flex items-center px-6 py-20 sm:px-10 lg:px-14 lg:py-28 xl:pl-[max(3.5rem,calc((100vw-1400px)/2+3.5rem))]">
            <div>
              <span className="eyebrow">A warmer kind of everyday</span>
              <h2 className="font-serif text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Your family deserves <Accent>the goodness of Bhoomi.</Accent>
              </h2>
              <p className="mt-8 max-w-md text-cream/75">Because everyday meals deserve ingredients you can trust.</p>
              <Link to="/contact" className="btn-gold mt-10">Contact Us <ArrowRight size={14} /></Link>
            </div>
          </Reveal>
          <div className="min-h-[320px] overflow-hidden lg:min-h-[560px]">
            <img src={images.familyTable} alt="Fresh roti being made on a tawa in a home kitchen" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Follow Bhoomi"
              title="Bringing freshness to every kitchen."
              text={`Follow ${company.instagramHandle} for the world around Bhoomi.`}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { src: images.freshRoti, alt: 'Fresh Indian roti in a wooden bowl' },
              { src: images.rotiStack, alt: 'Stack of rotis with a bowl of atta' },
              { src: images.brandStory, alt: 'Wheat grains in a wooden bowl' },
            ].map((t, i) => (
              <Reveal key={t.alt} delay={i * 0.08}>
                <a href={company.instagramHref} target="_blank" rel="noreferrer" className="group block aspect-[4/3] overflow-hidden bg-wheat/30">
                  <img src={t.src} alt={t.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </>
  )
}
