import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { certificates } from '../data/profile'
import { Section } from './Section'

export function Certificates() {
  return (
    <Section
      id="certificates"
      eyebrow="Certificates"
      title="Continuous learning."
      subtitle="Credentials and certifications I've earned."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {certificates.map((cert, idx) => {
          const content = (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
              className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur transition-shadow duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/40 dark:hover:shadow-xl dark:hover:shadow-brand-500/5 ${cert.link ? 'cursor-pointer' : ''}`}
            >
              <div className="relative overflow-hidden rounded-3xl rounded-b-none">
                {cert.image ? (
                  <div className="relative h-44 w-full">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative h-44 w-full bg-gradient-to-br from-brand-600/20 via-fuchsia-500/10 to-cyan-500/20 dark:from-brand-500/15 dark:via-fuchsia-400/10 dark:to-cyan-400/15 flex items-center justify-center">
                    <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] dark:opacity-30" />
                    <div className="z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/50 text-brand-600 backdrop-blur-sm dark:bg-slate-900/50 dark:text-brand-400">
                      <FiAward className="h-8 w-8" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-white">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400" />
                    {cert.title}
                  </div>
                  {cert.date && (
                    <span className="rounded-xl border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                      {cert.date}
                    </span>
                  )}
                </div>

                {cert.description && (
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {cert.description}
                  </p>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.issuer && (
                    <span className="rounded-xl border border-slate-200 bg-white/60 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-200">
                      Issuer: {cert.issuer}
                    </span>
                  )}
                </div>
              </div>

              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-brand-600/10 to-cyan-500/10 blur-3xl transition group-hover:from-brand-600/15 group-hover:to-cyan-500/15 dark:from-brand-400/10 dark:to-cyan-400/10" />
            </motion.div>
          )

          return cert.link ? (
            <a key={cert.title} href={cert.link} target="_blank" rel="noopener noreferrer" className="block outline-none h-full">
              {content}
            </a>
          ) : (
            <div key={cert.title} className="h-full">
              {content}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
