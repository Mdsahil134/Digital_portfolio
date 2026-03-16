import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import { useRef } from 'react'
import { profile } from '../data/profile'
import { Container } from './Container'
import { TypingEffect } from './TypingEffect'

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/60 p-2 text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:bg-slate-900"
    >
      {children}
    </a>
  )
}

export function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={sectionRef} id="top" className="relative overflow-hidden pt-28">
      <motion.div
        style={{ opacity }}
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)] dark:opacity-40"
      />

      <motion.div
        style={{ y: y1 }}
        className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-gradient-to-tr from-brand-500/30 to-cyan-400/25 blur-3xl dark:from-brand-500/20 dark:to-cyan-400/15"
      />
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute -right-24 top-28 -z-10 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500/25 to-brand-500/25 blur-3xl dark:from-fuchsia-500/15 dark:to-brand-500/15"
      />

      <Container className="pb-16 sm:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-200"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-brand-500 to-cyan-400" />
              {profile.title}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-5 font-display text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl"
            >
              Hi, I’m{' '}
              <span className="bg-gradient-to-r from-brand-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent dark:from-brand-400 dark:via-fuchsia-400 dark:to-cyan-400">
                {profile.name}
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
            >
              “{profile.tagline}”
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-3 flex min-h-[1.75rem] flex-wrap items-center gap-1 text-base font-semibold text-brand-600 dark:text-brand-400 sm:text-lg"
            >
              <span className="text-slate-600 dark:text-slate-300">I am a</span>{' '}
              <TypingEffect className="min-w-[12ch] text-brand-600 dark:text-brand-400" />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button
                type="button"
                onClick={() => scrollToId('projects')}
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 via-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-xl active:translate-y-0"
              >
                View Projects
                <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={() => scrollToId('contact')}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                Contact Me
              </button>

              <div className="ml-0 flex items-center gap-2 sm:ml-2">
                <SocialLink href={profile.socials.github} label="GitHub">
                  <FaGithub className="h-5 w-5" />
                </SocialLink>
                <SocialLink href={profile.socials.linkedin} label="LinkedIn">
                  <FaLinkedinIn className="h-5 w-5" />
                </SocialLink>
                <SocialLink href={profile.socials.email} label="Email">
                  <FiMail className="h-5 w-5" />
                </SocialLink>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="relative mx-auto max-w-md"
            >
              <div className="mb-8 flex justify-center">
                <div className="relative h-52 w-52 rounded-full sm:h-60 sm:w-60 lg:h-64 lg:w-64">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-brand-600 via-fuchsia-500 to-cyan-500 opacity-70 blur-2xl" />
                  <img
                    src={profile.photo}
                    alt={`${profile.name} photo`}
                    loading="eager"
                    className="relative h-full w-full rounded-full border border-slate-200 object-cover shadow-2xl dark:border-slate-800"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-brand-600 via-fuchsia-500 to-cyan-500 opacity-30 blur" />
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/50">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400/80" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                      <span className="h-3 w-3 rounded-full bg-green-400/80" />
                    </div>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      developer.jsx
                    </span>
                  </div>

                  <pre className="mt-5 whitespace-pre-wrap text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  <code>
                    <span className="text-brand-700 dark:text-brand-300">const</span>{' '}
                    <span className="text-slate-900 dark:text-white">developer</span> = {'{'}
                    {'\n'}  name: <span className="text-emerald-700 dark:text-emerald-300">
                      '{profile.name}'
                    </span>
                    ,{'\n'}  role:{' '}
                    <span className="text-emerald-700 dark:text-emerald-300">
                      'Full Stack Web Developer'
                    </span>
                    ,{'\n'}  focus:{' '}
                    <span className="text-emerald-700 dark:text-emerald-300">
                      'Scalable apps + DSA in C++'
                    </span>
                    ,{'\n'}  vibe:{' '}
                    <span className="text-emerald-700 dark:text-emerald-300">
                      'Clean UI • Smooth UX • Reliable systems'
                    </span>
                    {'\n'}
                    {'}'};
                  </code>
                  </pre>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[
                      { k: 'Frontend', v: 'UI/UX' },
                      { k: 'Backend', v: 'APIs' },
                      { k: 'DSA', v: 'C++' },
                    ].map((x) => (
                      <div
                        key={x.k}
                        className="rounded-2xl border border-slate-200 bg-white/60 p-3 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950/30"
                      >
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {x.k}
                        </p>
                        <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                          {x.v}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

