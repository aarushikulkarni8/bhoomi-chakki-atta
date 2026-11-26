import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from '../data/company'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 border-b transition-all duration-300 ${scrolled || open ? 'border-ink/10 bg-ivory/90 backdrop-blur-md' : 'border-transparent bg-ivory'}`}>
      <div className={`mx-auto flex max-w-[1600px] items-center justify-between px-6 transition-all duration-300 lg:px-10 ${scrolled ? 'h-[72px]' : 'h-20'}`}>
        <Logo />
        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `border-b py-1.5 text-[13px] font-medium transition-colors ${isActive ? 'border-gold text-ink' : 'border-transparent text-muted hover:text-ink'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn-dark ml-2 min-h-[46px] px-6">
            Enquire Now <ArrowRight size={14} />
          </NavLink>
        </nav>
        <button
          className="flex h-11 w-11 items-center justify-center text-ink lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-ink/10 lg:hidden" aria-label="Mobile">
          <div className="container-page flex flex-col py-3">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `border-b border-ink/10 py-4 text-base font-medium ${isActive ? 'text-gold' : 'text-ink'}`}
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className="btn-dark my-5">
              Enquire Now <ArrowRight size={14} />
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  )
}
