import { Link } from 'react-router-dom'

export default function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="inline-block leading-none" aria-label="Bhoomi Chakki Atta home">
      <span className={`block text-[1.6rem] font-semibold uppercase tracking-[0.2em] ${light ? 'text-cream' : 'text-ink'}`}>Bhoomi</span>
      <span className="mt-1.5 block text-[9px] font-semibold uppercase tracking-[0.3em] text-gold">Chakki Atta</span>
    </Link>
  )
}
