import { motion } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  as?: ElementType
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
}

export function FadeIn({ children, as: Tag = 'div', delay = 0, duration = .7, x = 0, y = 30, className = '' }: FadeInProps) {
  const MotionTag = motion.create(Tag)
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [.25, .1, .25, 1] }}
    >
      {children}
    </MotionTag>
  )
}
