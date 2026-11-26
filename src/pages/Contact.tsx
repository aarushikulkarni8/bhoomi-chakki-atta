import { ArrowRight, Instagram, Phone } from 'lucide-react'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { company } from '../data/company'

export default function Contact() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <span className="eyebrow">{company.manufacturer}</span>
          <h1 className="font-serif text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-6xl">Let's Connect</h1>
          <p className="mt-6 text-muted">For product and business enquiries, reach us directly.</p>
          <p className="mt-8 font-serif text-xl">{company.brand}</p>
          <a href={company.phoneHref} className="mt-6 flex items-center gap-3 text-sm font-medium hover:text-gold"><Phone size={16} className="text-gold" /> Call {company.phone}</a>
          <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:text-gold">WhatsApp Us <ArrowRight size={14} className="text-gold" /></a>
          <a href={company.instagramHref} target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-3 text-sm font-medium hover:text-gold"><Instagram size={16} className="text-gold" /> {company.instagramHandle}</a>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm
            heading="Contact enquiry - Bhoomi Chakki Atta"
            submitLabel="Submit Enquiry"
            fields={[
              { name: 'name', label: 'Full Name', required: true },
              { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
              { name: 'email', label: 'Email', type: 'email', optional: true },
              { name: 'subject', label: 'Subject' },
              { name: 'message', label: 'Message', textarea: true, required: true },
            ]}
          />
        </Reveal>
      </div>
    </section>
  )
}
