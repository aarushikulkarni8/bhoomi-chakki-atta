import { ArrowRight, Phone } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Accent from '../components/Accent'
import ContactForm from '../components/ContactForm'
import { company } from '../data/company'

export default function Partner() {
  return (
    <>
      <PageHeader
        eyebrow="Partner with us"
        title={<>Grow with <Accent>Bhoomi.</Accent></>}
        text="Bring Bhoomi Chakki Atta to your customers. We welcome retailers, distributors, wholesalers, grocery stores and bulk buyers."
      />
      <section className="bg-ivory py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <span className="eyebrow">Let's talk business</span>
            <h2 className="font-serif text-4xl font-medium leading-[1.1] sm:text-5xl">A good partnership begins with a conversation.</h2>
            <a href={company.phoneHref} className="mt-10 flex items-center gap-3 text-sm font-medium hover:text-gold"><Phone size={16} className="text-gold" /> Call {company.phone}</a>
            <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:text-gold">WhatsApp Us <ArrowRight size={14} className="text-gold" /></a>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm
              heading="Partner enquiry - Bhoomi Chakki Atta"
              submitLabel="Submit Enquiry"
              fields={[
                { name: 'business', label: 'Business Name', required: true },
                { name: 'city', label: 'City', required: true },
                { name: 'name', label: 'Full Name', required: true },
                { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
                { name: 'email', label: 'Email', type: 'email', optional: true },
                { name: 'type', label: 'Business Type', options: ['Retailer', 'Distributor', 'Wholesaler', 'Grocery Store', 'Bulk Buyer'], required: true },
                { name: 'message', label: 'Message', textarea: true },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
