import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import PacketCard from './PacketCard'
import Accent from './Accent'
import { company } from '../data/company'

export default function Hero() {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="container-page grid min-h-[calc(100vh-80px)] items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="font-serif text-[3rem] font-medium leading-[1] text-ink sm:text-6xl lg:text-[5.25rem]">
            Bringing freshness <Accent>to every kitchen.</Accent>
          </h1>
          <p className="mt-9 text-lg font-semibold text-ink">Made from {company.wheat}</p>
          <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{company.tagline} — a familiar everyday staple, presented with care.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/product" className="btn-dark">Explore Our Product <ArrowRight size={14} /></Link>
            <Link to="/contact" className="btn-outline">Contact Us <ArrowRight size={14} /></Link>
          </div>
          <a href="#promise" className="mt-16 hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted hover:text-gold sm:inline-flex">
            Scroll to discover <ArrowRight size={12} />
          </a>
        </motion.div>
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
        >
          <PacketCard />
        </motion.div>
      </div>
    </section>
  )
}
