import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiMail, FiSend } from 'react-icons/fi'
import { profile } from '../data/profile'
import { Section } from './Section'

function ContactCard({ href, icon: Icon, label, value }) {
  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      className="group rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600/15 to-cyan-500/15 text-brand-700 dark:from-brand-400/15 dark:to-cyan-400/15 dark:text-brand-300">
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">{label}</p>
          <p className="mt-1 truncate text-sm text-slate-600 dark:text-slate-300">{value}</p>
        </div>
      </div>
    </a>
  )
}

function buildMailto({ to, subject, body }) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const qs = params.toString()
  return `mailto:${to}${qs ? `?${qs}` : ''}`
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending

  const cards = useMemo(
    () => [
      {
        href: profile.socials.email,
        icon: FiMail,
        label: 'Email',
        value: profile.email,
      },
      {
        href: profile.socials.github,
        icon: FaGithub,
        label: 'GitHub',
        value: profile.socials.github.replace('https://', ''),
      },
      {
        href: profile.socials.linkedin,
        icon: FaLinkedinIn,
        label: 'LinkedIn',
        value: 'Connect with me',
      },
    ],
    [],
  )

  function onSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const subject = `Portfolio contact — ${form.name || 'Someone'}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    const href = buildMailto({ to: profile.email, subject, body })
    window.location.href = href

    window.setTimeout(() => setStatus('idle'), 700)
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something great."
      subtitle="Reach out for internships, collaborations, or project ideas."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5"
        >
          <div className="grid gap-3">
            {cards.map((c) => (
              <ContactCard key={c.label} {...c} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/40"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  Name
                </span>
                <input
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="h-11 rounded-2xl border border-slate-200 bg-white/70 px-4 text-sm text-slate-900 shadow-sm outline-none ring-brand-500/30 transition focus:ring-4 dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-100"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  Email
                </span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="h-11 rounded-2xl border border-slate-200 bg-white/70 px-4 text-sm text-slate-900 shadow-sm outline-none ring-brand-500/30 transition focus:ring-4 dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-100"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </label>
            </div>

            <label className="mt-4 grid gap-2">
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                Message
              </span>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="min-h-32 resize-y rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-brand-500/30 transition focus:ring-4 dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-100"
                placeholder="Tell me about your opportunity or idea..."
              />
            </label>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                This form opens your email client (no backend required).
              </p>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 via-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <FiSend className="h-4 w-4" />
                {status === 'sending' ? 'Opening…' : 'Send Message'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  )
}

