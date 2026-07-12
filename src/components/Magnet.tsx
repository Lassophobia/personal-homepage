import { useRef, useState, type MouseEvent, type ReactNode } from 'react'

type MagnetProps = {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export function Magnet({ children, padding = 150, strength = 3, activeTransition = 'transform .3s ease-out', inactiveTransition = 'transform .6s ease-in-out', className = '' }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({ transform: 'translate3d(0,0,0)', transition: inactiveTransition })

  const move = (event: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = event.clientX - (rect.left + rect.width / 2)
    const y = event.clientY - (rect.top + rect.height / 2)
    const inside = Math.abs(x) <= rect.width / 2 + padding && Math.abs(y) <= rect.height / 2 + padding
    if (inside) setStyle({ transform: `translate3d(${x / strength}px, ${y / strength}px, 0)`, transition: activeTransition })
  }

  return <div ref={ref} className={className} style={{ ...style, willChange: 'transform' }} onMouseMove={move} onMouseLeave={() => setStyle({ transform: 'translate3d(0,0,0)', transition: inactiveTransition })}>{children}</div>
}
