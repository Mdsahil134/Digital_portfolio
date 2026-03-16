import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiDocker,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiPhp,
  SiJsonwebtokens,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { BsRobot } from 'react-icons/bs'
import { projects } from '../data/profile'
import { Section } from './Section'

const getTechIcon = (tech) => {
  const className = "h-3.5 w-3.5"
  switch (tech) {
    case 'React.js': return <SiReact className={`${className} text-[#61DAFB]`} />
    case 'Node.js': return <SiNodedotjs className={`${className} text-[#339933]`} />
    case 'MongoDB': return <SiMongodb className={`${className} text-[#47A248]`} />
    case 'Python': return <SiPython className={`${className} text-[#3776AB]`} />
    case 'Docker': return <SiDocker className={`${className} text-[#2496ED]`} />
    case 'Express.js': return <SiExpress className={className} />
    case 'HTML': return <SiHtml5 className={`${className} text-[#E34F26]`} />
    case 'JavaScript': return <SiJavascript className={`${className} text-[#F7DF1E]`} />
    case 'PHP': return <SiPhp className={`${className} text-[#777BB4]`} />
    case 'REST APIs': return <TbApi className={`${className} text-brand-500`} />
    case 'JWT Auth': return <SiJsonwebtokens className={className} />
    case 'NLP': return <BsRobot className={`${className} text-fuchsia-500`} />
    default: return null
  }
}

function ProjectCard({ p, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur transition-shadow duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/40 dark:hover:shadow-xl dark:hover:shadow-brand-500/5"
    >
      <div className="relative overflow-hidden rounded-3xl rounded-b-none">
        {p.image ? (
          <div className="relative h-44 w-full">
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="relative h-44 w-full bg-gradient-to-br from-brand-600/20 via-fuchsia-500/10 to-cyan-500/20 dark:from-brand-500/15 dark:via-fuchsia-400/10 dark:to-cyan-400/15">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] dark:opacity-30" />
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-white">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400" />
            {p.title}
          </div>
          {p.start && (
            <span className="rounded-xl border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
              Started {p.start}
            </span>
          )}
          {p.completed && (
            <span className="rounded-xl border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
              Completed {p.completed}
            </span>
          )}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {p.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white/60 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-200"
            >
              {getTechIcon(t)}
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-100 dark:hover:bg-slate-900"
          >
            <FiGithub className="h-4 w-4" />
            View on GitHub
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-brand-600/10 to-cyan-500/10 blur-3xl transition group-hover:from-brand-600/15 group-hover:to-cyan-500/15 dark:from-brand-400/10 dark:to-cyan-400/10" />
    </motion.article>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Real-world applications"
      subtitle="Full-stack systems, AI-powered solutions, and user-centric designs."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, idx) => (
          <ProjectCard key={p.title} p={p} index={idx} />
        ))}
      </div>
    </Section>
  )
}

