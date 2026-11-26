import { Phone } from 'lucide-react'
import { company } from '../data/company'

const base = 'flex h-14 w-14 items-center justify-center rounded-full bg-gold text-deep shadow-lg shadow-black/20 transition-transform hover:scale-105'

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex gap-3 sm:bottom-7 sm:right-7">
      <a href={company.phoneHref} aria-label={`Call ${company.phone}`} className={base}>
        <Phone size={22} />
      </a>
      <a href={company.whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className={`${base} text-sm font-bold`}>
        WA
      </a>
    </div>
  )
}
