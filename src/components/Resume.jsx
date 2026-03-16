import { motion } from 'framer-motion'
import {
  profile,
  skills,
  projects,
  journey as training,
  certificates,
  achievements,
  education,
} from '../data/profile'
import { Section } from './Section'

function SectionTitle({ children }) {
  return (
    <h3 className="mb-4 border-b border-slate-200 pb-2 text-lg font-bold tracking-wider text-slate-800 dark:border-slate-800 dark:text-slate-100">
      {children}
    </h3>
  )
}

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="My professional summary."
      subtitle="A quick overview of my experience, education, and skills."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/50 sm:p-12"
      >
        {/* Header */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            {profile.name}
          </h2>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-600 dark:text-slate-400 sm:justify-start">
            <a href={profile.socials.linkedin} className="hover:text-brand-600 dark:hover:text-brand-400">
              LinkedIn
            </a>
            <span>|</span>
            <a href={profile.socials.email} className="hover:text-brand-600 dark:hover:text-brand-400">
              {profile.email}
            </a>
            <span>|</span>
            <a href={profile.socials.github} className="hover:text-brand-600 dark:hover:text-brand-400">
              GitHub
            </a>
            <span>|</span>
            <span>{profile.socials.mobile}</span>
          </div>
        </div>

        <div className="space-y-8">
          {/* Skills */}
          <div>
            <SectionTitle>SKILLS</SectionTitle>
            <div className="space-y-1">
              {skills.map((s) => (
                <div key={s.category} className="text-sm">
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {s.category}:{' '}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {s.items.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <SectionTitle>PROJECTS</SectionTitle>
            <div className="space-y-6">
              {projects.map((p) => (
                <div key={p.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">
                      {p.title}
                    </h4>
                    <span className="text-xs font-semibold text-slate-500">
                      {p.completed}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                    Tech Stack: {p.tech.join(', ')}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Training */}
          <div>
            <SectionTitle>TRAINING</SectionTitle>
            <div className="space-y-4">
              {training.map((t) => (
                <div key={t.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">
                      {t.title}
                    </h4>
                    <span className="text-xs font-semibold text-slate-500">
                      {t.duration}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {t.institution} • {t.type}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {t.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <SectionTitle>CERTIFICATES</SectionTitle>
            <ul className="list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
              {certificates.map((c) => (
                <li key={c.title}>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {c.title}
                  </span>{' '}
                  | {c.issuer} ({c.date})
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <SectionTitle>ACHIEVEMENTS</SectionTitle>
            <ul className="list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
              {achievements.map((a) => (
                <li key={a.title}>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {a.title}
                  </span>{' '}
                  ({a.date})
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <SectionTitle>EDUCATION</SectionTitle>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.institution}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">
                      {e.institution}
                    </h4>
                    <span className="text-xs font-semibold text-slate-500">
                      {e.date}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    {e.location}
                  </p>
                  <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
                    {e.degree} • <span className="font-medium max-w-sm">{e.score}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 flex justify-center"
      >
        <a
          href="/resume.pdf"
          download="MD_Sahil_Resume.pdf"
          className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl active:translate-y-0 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
        >
          Download Resume
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </motion.div>
    </Section>
  )
}
