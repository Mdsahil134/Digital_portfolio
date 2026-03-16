import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks, profile } from '../data/profile'
import { cn } from '../lib/cn'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Navbar({ isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = useMemo(() => navLinks, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onNav = useCallback((id) => {
    setOpen(false)
    scrollToId(id)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'border-b border-transparent transition-all duration-300 ease-out',
          scrolled
            ? 'border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-950/80'
            : 'bg-transparent',
        )}
      >
        <Container className="flex h-16 items-center justify-between">
          <button
            type="button"
            onClick={() => onNav('top')}
            className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 text-left"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400 shadow-[0_0_0_4px_rgba(99,102,241,0.15)] transition group-hover:shadow-[0_0_0_6px_rgba(99,102,241,0.18)]" />
            <span className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">
              {profile.name}
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => onNav(l.id)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-900/60 dark:hover:text-white"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 p-2 text-slate-700 shadow-sm backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-900 md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="border-b border-slate-200/60 bg-white/90 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/80">
              <Container className="py-3">
                <div className="grid gap-1">
                  {links.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => onNav(l.id)}
                      className="rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-900/60 dark:hover:text-white"
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </Container>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

