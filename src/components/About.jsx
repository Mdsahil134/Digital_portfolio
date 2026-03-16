import { motion } from 'framer-motion'
import { FiBookOpen, FiMapPin, FiMusic, FiUser, FiWifi } from 'react-icons/fi'
import { about } from '../data/profile'
import { Section } from './Section'

const factIcons = {
  Location: FiMapPin,
  Education: FiBookOpen,
  Focus: FiUser,
}

const hobbyIcons = {
  'Surfing web': FiWifi,
  Reading: FiBookOpen,
  Music: FiMusic,
}

export function About() {
  return (
    <Section
      id="about"
      eyebrow=""
      title=""
      subtitle=""
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          About Me
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 via-fuchsia-500 to-cyan-400" />
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
          {about.headline}
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="grid gap-6 lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/40"
          >
            <p className="text-base font-bold text-slate-900 dark:text-white">Quick Facts</p>
            <div className="mt-5 grid gap-4">
              {about.quickFacts.map((f) => {
                const Icon = factIcons[f.label] ?? FiUser
                return (
                  <div key={f.label} className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600/15 to-cyan-500/15 text-brand-700 dark:from-brand-400/15 dark:to-cyan-400/15 dark:text-brand-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {f.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                        {f.value}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/40"
          >
            <p className="text-base font-bold text-slate-900 dark:text-white">When I’m Not Coding</p>
            <div className="mt-5 grid gap-3">
              {about.whenNotCoding.map((h) => {
                const Icon = hobbyIcons[h] ?? FiUser
                return (
                  <div
                    key={h}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/60 px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-950/30"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-800 dark:bg-white/5 dark:text-slate-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{h}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/40"
          >
            <p className="text-lg font-extrabold text-brand-600 dark:text-brand-400">
              My Journey
            </p>
            <div className="mt-4 grid gap-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              {about.journey.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/40"
          >
            <p className="text-lg font-extrabold text-brand-600 dark:text-brand-400">
              My Approach
            </p>
            <div className="mt-4 grid gap-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              {about.approach.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

