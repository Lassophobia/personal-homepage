import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

function AnimatedCharacter({ char, index, length, progress }: { char: string; index: number; length: number; progress: MotionValue<number> }) {
  const start = index / length
  const end = Math.min(start + 5 / length, 1)
  const opacity = useTransform(progress, [start, end], [.2, 1])
  const visible = char === ' ' ? '\u00A0' : char
  return <span className="relative inline-block"><span className="invisible">{visible}</span><motion.span className="absolute inset-0" style={{ opacity }}>{visible}</motion.span></span>
}

export function AnimatedText({ text }: { text: string }) {
  const target = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target, offset: ['start 0.8', 'end 0.2'] })
  return <p ref={target} className="max-w-[560px] whitespace-pre-line text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]">{text.split('').map((char, index) => <AnimatedCharacter key={`${char}-${index}`} char={char} index={index} length={text.length} progress={scrollYProgress} />)}</p>
}
