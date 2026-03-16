import { GitHubCalendar } from 'react-github-calendar'
import { motion } from 'framer-motion'
import { FiActivity, FiCode, FiCpu } from 'react-icons/fi'
import { profile } from '../data/profile'
import { Section } from './Section'

const highlightCards = [
  {
    icon: FiCpu,
    title: 'DSA practice (C++)',
    desc: 'I regularly practice data structures and algorithms to improve problem-solving speed and accuracy.',
  },
  {
    icon: FiCode,
    title: 'Clean, scalable code',
    desc: 'I focus on maintainable architecture, reusable components, and consistent patterns.',
  },
  {
    icon: FiActivity,
    title: 'Shipping mindset',
    desc: 'I iterate quickly, test flows end-to-end, and prioritize a smooth UX.',
  },
]

export function GithubCoding({ isDark }) {
  const username = profile.githubUsername
  const isPlaceholder = !username || username.includes('your-')

  return (
    <Section
      id="github"
      eyebrow="GitHub & coding"
      title="Consistency + problem solving"
      subtitle="A quick glance at my GitHub activity and what I’m sharpening daily."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/40">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                GitHub contributions
              </p>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-brand-700 hover:underline dark:text-brand-300"
              >
                View profile
              </a>
            </div>

            <div className="mt-4">
              {isPlaceholder ? (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-200">
                  Set your GitHub username in{' '}
                  <span className="font-semibold">src/data/profile.js</span> to display your
                  contribution graph.
                </div>
              ) : (
                <div className="[&>svg]:w-full">
                  <GitHubCalendar
                    username={username}
                    colorScheme={isDark ? 'dark' : 'light'}
                    blockRadius={6}
                    blockSize={12}
                    blockMargin={4}
                    fontSize={12}
                    labels={{
                      totalCount: '{{count}} contributions in the last year',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="lg:col-span-5"
        >
          <div className="grid gap-3">
            {highlightCards.map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600/15 to-cyan-500/15 text-brand-700 dark:from-brand-400/15 dark:to-cyan-400/15 dark:text-brand-300">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {c.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

