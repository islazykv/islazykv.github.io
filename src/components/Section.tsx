import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { spacing, motion as m } from '../theme'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  className?: string
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id={id} className={`${spacing.section} ${className}`}>
      <div ref={ref} className={spacing.container}>
        <motion.h2
          {...m.headingEnter}
          animate={isInView ? m.headingEnter.animate : {}}
          className="font-serif text-3xl md:text-4xl font-bold text-heading mb-12"
        >
          {title}
        </motion.h2>
        <motion.div
          {...m.sectionEnter}
          animate={isInView ? m.sectionEnter.animate : {}}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
