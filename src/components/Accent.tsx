import type { ReactNode } from 'react'

export default function Accent({ children }: { children: ReactNode }) {
  return <em className="font-medium italic text-gold">{children}</em>
}
