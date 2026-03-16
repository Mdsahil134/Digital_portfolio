import { motion, useScroll } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[100] h-0.5 origin-left bg-gradient-to-r from-brand-500 via-fuchsia-500 to-cyan-500"
      style={{ scaleX: scrollYProgress }}
      aria-hidden
    />
  )
}
