import { images } from '../data/products'

export default function PacketCard({ className = '' }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-md ${className}`}>
      <div className="absolute -right-8 top-1/2 -z-0 h-[115%] w-[115%] -translate-y-1/2 rounded-full bg-wheat/30" aria-hidden />
      <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-[3deg] bg-ink/10" aria-hidden />
      <div className="relative rotate-[2deg] border border-gold/50 bg-gradient-to-b from-wheat/50 to-cream p-6 shadow-xl shadow-black/10 transition-transform duration-500 hover:rotate-0 sm:p-8">
        <img
          src={images.packet}
          alt="Bhoomi Chakki Atta packaging by Aarambh Manufacturers"
          className="h-auto max-h-[540px] w-full object-contain"
        />
      </div>
    </div>
  )
}
