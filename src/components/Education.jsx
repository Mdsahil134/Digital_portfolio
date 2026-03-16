import { motion } from 'framer-motion'
import { FiBook } from 'react-icons/fi'
import { education } from '../data/profile'
import { Section } from './Section'

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic background."
      subtitle="Degrees, colleges, and schooling."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-slate-200 dark:bg-slate-800 sm:block" />
        <div className="grid gap-4">
          {education.map((item, idx) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="relative rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/40 sm:pl-14"
            >
              <div className="absolute left-3 top-6 hidden h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-indigo-600 shadow-sm dark:border-slate-800 dark:bg-slate-950/40 dark:text-indigo-400 sm:flex">
                <FiBook className="h-4 w-4" />
              </div>
              
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.institution}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {item.location}
                  </p>
                </div>
                
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {item.date}
                </span>
              </div>

              <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-800/60">
                <p className="text-base font-semibold text-brand-700 dark:text-brand-400">
                  {item.degree}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {item.score}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
