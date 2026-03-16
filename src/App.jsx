import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'
import { Certificates } from './components/Certificates'
import { Education } from './components/Education'
import { Resume } from './components/Resume'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Journey } from './components/Journey'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { ScrollProgress } from './components/ScrollProgress'
import { Skills } from './components/Skills'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { isDark, toggle } = useTheme()

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar isDark={isDark} onToggleTheme={toggle} />

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950" />
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500/15 via-fuchsia-500/10 to-cyan-400/15 blur-3xl dark:from-brand-500/10 dark:via-fuchsia-500/10 dark:to-cyan-400/10" />
      </div>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Certificates />
        <Achievements />
        <Resume />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
