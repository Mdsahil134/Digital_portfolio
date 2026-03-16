import { motion } from 'framer-motion'
import { cn } from '../lib/cn'
import { Container } from './Container'

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function Section({ id, eyebrow, title, subtitle, children, className }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: '-50px' }}
      variants={sectionVariants}
      className={cn('scroll-mt-24 py-16 sm:py-20', className)}
    >
      <Container>
        {(eyebrow || title || subtitle) && (
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-10"
          >
            {eyebrow && (
              <p className="text-sm font-semibold tracking-wider text-brand-600 dark:text-brand-400">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
                {subtitle}
              </p>
            )}
          </motion.header>
        )}

        {children}
      </Container>
    </motion.section>
  )
}

