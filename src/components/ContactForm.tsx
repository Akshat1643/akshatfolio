import { useMemo, useState, type FormEvent } from 'react'

type ContactFormProps = {
  recipientEmail: string
  className?: string
  isDark?: boolean
}

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function ContactForm({ recipientEmail, className = '', isDark = true }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>(initialState)
  const [statusMessage, setStatusMessage] = useState('')

  const canSubmit = useMemo(
    () =>
      formState.name.trim().length > 0 &&
      formState.email.trim().length > 0 &&
      formState.subject.trim().length > 0 &&
      formState.message.trim().length > 0,
    [formState],
  )

  const panelClassName = isDark
    ? 'border-white/10 bg-slate-950/50 shadow-slate-950/25'
    : 'border-slate-200 bg-white/90 shadow-slate-200/40'
  const headingClassName = isDark ? 'text-white' : 'text-slate-950'
  const bodyClassName = isDark ? 'text-slate-300' : 'text-slate-700'
  const subtleClassName = isDark ? 'text-slate-400' : 'text-slate-500'
  const inputClassName = isDark
    ? 'border-white/10 bg-slate-900/80 text-white placeholder:text-slate-500 focus:border-cyan-300/50'
    : 'border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-cyan-500/50'
  const chipClassName = isDark
    ? 'border-white/10 bg-white/5 text-slate-400'
    : 'border-slate-200 bg-slate-50 text-slate-500'
  const buttonClassName = isDark
    ? 'from-cyan-400 to-emerald-400 text-slate-950'
    : 'from-cyan-600 to-emerald-500 text-white'

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!canSubmit) {
      setStatusMessage('Please complete every field before sending.')
      return
    }

    const body = [
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      '',
      formState.message,
    ].join('\n')

    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
    setStatusMessage('Your email client should open with the message prefilled.')
    setFormState(initialState)
  }

  function updateField(field: keyof FormState, value: string) {
    setFormState((currentState) => ({
      ...currentState,
      [field]: value,
    }))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-[2rem] border p-6 shadow-2xl ${panelClassName} ${className}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className={`text-xs sm:text-sm uppercase tracking-[0.28em] ${isDark ? 'text-cyan-200/80' : 'text-cyan-700/80'}`}>
            Write a message
          </p>
          <h3 className={`mt-2 text-lg sm:text-xl md:text-2xl font-bold ${headingClassName}`}>Start a conversation</h3>
        </div>
        <span className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.28em] ${chipClassName}`}>
          Quick reply
        </span>
      </div>

      <div className="mt-6 grid gap-4">
        <label className={`grid gap-2 text-sm ${bodyClassName}`}>
          Name
          <input
            value={formState.name}
            onChange={(event) => updateField('name', event.target.value)}
            required
            placeholder="Your name"
            className={`rounded-2xl border px-4 py-3 outline-none transition ${inputClassName}`}
          />
        </label>
        <label className={`grid gap-2 text-sm ${bodyClassName}`}>
          Email
          <input
            type="email"
            value={formState.email}
            onChange={(event) => updateField('email', event.target.value)}
            required
            placeholder="you@example.com"
            className={`rounded-2xl border px-4 py-3 outline-none transition ${inputClassName}`}
          />
        </label>
        <label className={`grid gap-2 text-sm ${bodyClassName}`}>
          Subject
          <input
            value={formState.subject}
            onChange={(event) => updateField('subject', event.target.value)}
            required
            placeholder="Project inquiry"
            className={`rounded-2xl border px-4 py-3 outline-none transition ${inputClassName}`}
          />
        </label>
        <label className={`grid gap-2 text-sm ${bodyClassName}`}>
          Message
          <textarea
            value={formState.message}
            onChange={(event) => updateField('message', event.target.value)}
            required
            rows={5}
            placeholder="Tell me about your role, timeline, or the kind of help you need."
            className={`resize-none rounded-2xl border px-4 py-3 outline-none transition ${inputClassName}`}
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className={`text-sm ${subtleClassName}`}>
          {statusMessage || `Sends through your email client to ${recipientEmail}`}
        </p>
        <button
          type="submit"
          className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r l px-6 py-3 font-semibold transition hover:opacity-90 ${buttonClassName}`}
           style={{ width: "31%" }}
        >
          Send message
        </button>
      </div>
    </form>
  )
}
