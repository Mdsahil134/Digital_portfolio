import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { profile } from '../data/profile'
import { Container } from './Container'

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/60 p-2 text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-200 dark:hover:bg-slate-900"
    >
      {children}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-10 dark:border-slate-800/70">
      <Container className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Built with passion by {profile.name}
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <IconLink href={profile.socials.github} label="GitHub">
            <FaGithub className="h-5 w-5" />
          </IconLink>
          <IconLink href={profile.socials.linkedin} label="LinkedIn">
            <FaLinkedinIn className="h-5 w-5" />
          </IconLink>
          <IconLink href={profile.socials.email} label="Email">
            <FiMail className="h-5 w-5" />
          </IconLink>
        </div>
      </Container>
    </footer>
  )
}

