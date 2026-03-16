import { motion } from 'framer-motion'
import { FiAward, FiBookOpen } from 'react-icons/fi'
import { journey } from '../data/profile'
import { Section } from './Section'

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="Training"
      title="Learning with direction and consistency."
      subtitle="Formal training and hands-on skill building."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-slate-200 dark:bg-slate-800 sm:block" />
        <div className="grid gap-4">
          {journey.map((j, idx) => {
            const content = (
              <motion.div
                key={j.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                className={`relative rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/40 sm:pl-14 ${j.link ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
              >
                <div className="absolute left-3 top-6 hidden h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-700 shadow-sm dark:border-slate-800 dark:bg-slate-950/40 dark:text-brand-300 sm:flex">
                  <FiBookOpen className="h-4 w-4" />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-base font-bold text-slate-900 dark:text-white">{j.title}</p>
                  {j.type && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                      <FiAward className="h-3 w-3" />
                      {j.type}
                    </span>
                  )}
                </div>
                {(j.institution || j.duration) && (
                  <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {j.institution}
                    {j.institution && j.duration && ' • '}
                    {j.duration}
                  </p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {j.subtitle}
                </p>
                {j.details && j.details.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {j.details.map((d) => (
                      <li
                        key={d}
                        className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                        <span className="leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            )

            return j.link ? (
              <a key={j.title} href={j.link} target="_blank" rel="noopener noreferrer" className="block outline-none">
                {content}
              </a>
            ) : content
          })}
        </div>
      </div>
    </Section>
  )
}
