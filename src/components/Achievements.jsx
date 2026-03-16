import { motion } from 'framer-motion'
import { FiExternalLink, FiCode } from 'react-icons/fi'
import { SiHackerrank, SiLeetcode } from 'react-icons/si'
import { achievements } from '../data/profile'
import { Section } from './Section'

const iconMap = {
  hackerrank: {
    icon: <SiHackerrank className="h-5 w-5" />,
    style: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400',
  },
  leetcode: {
    icon: <SiLeetcode className="h-5 w-5" />,
    style: 'bg-orange-50 text-orange-500 dark:bg-orange-900/30 dark:text-orange-400',
  },
  codility: {
    // using FiCode as a fallback for general coding platforms
    icon: <FiCode className="h-5 w-5" />,
    style: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  },
}

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Milestones and recognitions."
      subtitle="Highlights from my coding journey."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {achievements.map((item, idx) => {
          const { icon, style } = iconMap[item.icon] || iconMap.codility

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/40"
            >
              <div>
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-2xl ${style}`}
                >
                  {icon}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {item.date}
                </span>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    Link
                    <FiExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
