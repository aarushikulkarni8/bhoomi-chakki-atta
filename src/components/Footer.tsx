import { Link } from 'react-router-dom'
import { company, navLinks } from '../data/company'

export default function Footer() {
  return (
    <footer className="bg-deep text-cream">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cream">Bhoomi</p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-cream/55">Chakki Atta</p>
          <p className="mt-8 text-sm text-cream/75">{company.tagline}.</p>
        </div>
        <div>
          <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Explore</h3>
          <ul className="mt-6 space-y-4 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="text-cream/75 transition-colors hover:text-gold">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Connect</h3>
          <ul className="mt-6 space-y-4 text-sm text-cream/75">
            <li><a href={company.phoneHref} className="hover:text-gold">{company.phone}</a></li>
            <li><a href={company.instagramHref} target="_blank" rel="noreferrer" className="hover:text-gold">{company.instagramHandle}</a></li>
            <li>Manufacturer: {company.manufacturer}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="container-page py-6 text-xs text-cream/45">© 2026 Bhoomi Chakki Atta. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
