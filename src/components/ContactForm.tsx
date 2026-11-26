import { useState, type FormEvent } from 'react'
import { company } from '../data/company'

export type Field = { name: string; label: string; type?: string; required?: boolean; optional?: boolean; options?: string[]; textarea?: boolean; wide?: boolean }

export default function ContactForm({ fields, submitLabel, heading }: { fields: Field[]; submitLabel: string; heading: string }) {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const lines = fields.map((f) => `${f.label}: ${String(data.get(f.name) ?? '').trim() || '-'}`)
    const text = encodeURIComponent(`${heading}\n\n${lines.join('\n')}`)
    window.open(`https://wa.me/${company.whatsappNumber}?text=${text}`, '_blank', 'noopener')
    setSent(true)
    form.reset()
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-x-5 gap-y-6 bg-cream p-6 sm:grid-cols-2 sm:p-10">
      {fields.map((f) => (
        <label key={f.name} className={`block ${f.textarea || f.wide ? 'sm:col-span-2' : ''}`}>
          <span className="mb-2 block text-xs font-medium text-ink">
            {f.label}{f.optional && <span className="ml-1 text-[10px] text-muted">(optional)</span>}
          </span>
          {f.textarea ? (
            <textarea name={f.name} required={f.required} rows={4} className="field" />
          ) : f.options ? (
            <select name={f.name} required={f.required} defaultValue="" className="field">
              <option value="" disabled>Select one</option>
              {f.options.map((o) => <option key={o}>{o}</option>)}
            </select>
          ) : (
            <input name={f.name} type={f.type ?? 'text'} required={f.required} className="field" />
          )}
        </label>
      ))}
      <div className="sm:col-span-2">
        <button type="submit" className="btn-dark w-full sm:w-auto">{submitLabel}</button>
        {sent && <p role="status" className="mt-4 text-sm text-leaf">Your enquiry is ready in WhatsApp. Send it there and we will get back to you.</p>}
      </div>
    </form>
  )
}
