type Props = { image: string; alt: string; title: string; contain?: boolean; ratio?: string }

export default function FeatureCard({ image, alt, title, contain, ratio = 'aspect-[4/5]' }: Props) {
  return (
    <article className="group border border-ink/15 bg-ivory p-3 transition-colors duration-300 hover:border-gold">
      <div className={`${ratio} overflow-hidden ${contain ? 'bg-cream' : 'bg-wheat/30'}`}>
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${contain ? 'object-contain p-4' : 'object-cover'}`}
        />
      </div>
      <h3 className="px-2 pb-2 pt-5 text-xl font-medium text-ink">{title}</h3>
    </article>
  )
}
