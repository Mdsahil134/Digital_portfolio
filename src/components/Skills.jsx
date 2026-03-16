import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiDatabase, FiLayers, FiServer, FiTool, FiUsers } from 'react-icons/fi'
import {
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiGithub,
  SiGit,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiReact,
} from 'react-icons/si'
import { skills } from '../data/profile'
import { Section } from './Section'

const icons = {
  Languages: FiCode,
  'Web Technologies': FiServer,
  'Database & Tools': FiDatabase,
  'Core Concepts': FiLayers,
  'Soft Skills': FiUsers,
}

const skillIcons = {
  'C++': SiCplusplus,
  Python: SiPython,
  Java: FiCode,
  'HTML & CSS': SiHtml5,
  HTML: SiHtml5,
  CSS: FiCode,
  JavaScript: FiCode,
  'React.js': SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  'Data Structures & Algorithms': FiCpu,
  OOPS: FiLayers,
  DBMS: FiDatabase,
  'REST APIs': FiServer,
  'JWT Authentication': FiTool,
  'Problem-Solving': FiCpu,
  'Team Player': FiUsers,
  Adaptability: FiTool,
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A focused stack for building and shipping."
      subtitle="Full stack development with strong programming fundamentals."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, idx) => {
          const Icon = icons[s.category] || FiCode
          const level = Math.min(100, 18 * s.items.length + 10)
          return (
            <motion.div
              key={s.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/40"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-brand-600/10 to-cyan-500/10 blur-2xl transition group-hover:from-brand-600/15 group-hover:to-cyan-500/15 dark:from-brand-400/10 dark:to-cyan-400/10" />

              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600/15 to-cyan-500/15 text-brand-700 dark:from-brand-400/15 dark:to-cyan-400/15 dark:text-brand-300">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {s.category}
                  </p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                    {s.items.length} skills
                  </p>
                </div>
              </div>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800/80">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: idx * 0.05 + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-500"
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-200"
                  >
                    {(() => {
                      if (it === 'HTML & CSS') {
                        return (
                          <span className="inline-flex items-center gap-1">
                            <SiHtml5 className="h-3.5 w-3.5 text-slate-700 dark:text-slate-200" />
                            <FiCode className="h-3.5 w-3.5 text-slate-700 dark:text-slate-200" />
                          </span>
                        )
                      }
                      const ItemIcon = skillIcons[it]
                      return ItemIcon ? (
                        <ItemIcon className="h-3.5 w-3.5 text-slate-700 dark:text-slate-200" />
                      ) : null
                    })()}
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

