import type { HTMLAttributes, ReactNode } from 'react'

import { useInView } from '../hooks/useInView'

type RevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
  as?: 'div' | 'section' | 'article'
} & HTMLAttributes<HTMLElement>

export function Reveal({ as = 'div', children, className = '', delayMs = 0, ...rest }: RevealProps) {
  const { ref, isVisible } = useInView<HTMLElement>()
  const Component = as as 'div' | 'section' | 'article'

  return (
    <Component
      ref={ref as never}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`reveal-item ${isVisible ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  )
}
