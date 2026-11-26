// The real number is set as VITE_PHONE (10 digits) in Vercel. The repository only holds this placeholder.
const phone = import.meta.env.VITE_PHONE || '0000000000'

export const company = {
  brand: 'Bhoomi Chakki Atta',
  manufacturer: 'Aarambh Manufacturers',
  phone,
  phoneHref: `tel:+91${phone}`,
  whatsappNumber: `91${phone}`,
  whatsappHref: `https://wa.me/91${phone}`,
  instagramHandle: '@aarambh_manufacturers',
  instagramHref: 'https://www.instagram.com/aarambh_manufacturers/',
  tagline: 'Goodness of Nature, Trust of Purity',
  heroLine: 'Bringing Freshness to Every Kitchen',
  wheat: 'Premium Sharbati Wheat',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Our Product', to: '/product' },
  { label: 'Quality', to: '/quality' },
  { label: 'Partner With Us', to: '/partner' },
  { label: 'Contact', to: '/contact' },
]

export const faqs = [
  { q: 'What is Bhoomi Chakki Atta?', a: 'Bhoomi Chakki Atta is a chakki atta made from Premium Sharbati Wheat by Aarambh Manufacturers, made for everyday Indian kitchens.' },
  { q: 'What wheat is used in Bhoomi Chakki Atta?', a: 'Bhoomi Chakki Atta is made from Premium Sharbati Wheat.' },
  { q: 'What pack sizes are available?', a: 'Bhoomi Chakki Atta is available in 1 KG, 5 KG and 10 KG packs.' },
  { q: 'Where can I buy Bhoomi Chakki Atta?', a: `Call or WhatsApp us on ${phone} and we will help you with availability.` },
  { q: 'How can I contact Bhoomi Chakki Atta?', a: `Call ${phone}, message us on WhatsApp, or write to us on Instagram at @aarambh_manufacturers.` },
]
