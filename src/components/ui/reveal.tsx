'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: React.ReactNode
  className?: string
  /** Optional stagger delay in milliseconds. */
  delay?: number
}

/**
 * Wraps content in a subtle fade/slide-in that triggers when scrolled into view.
 *
 * Accessibility & robustness:
 * - Renders visible during SSR, so content is never hidden without JavaScript.
 * - Skips the animation entirely when the user prefers reduced motion.
 * - Only arms the hidden state for elements below the fold, avoiding an
 *   above-the-fold flash on load.
 */
export const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [armed, setArmed] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) return

    // Already in view on load (e.g. the hero): keep it visible, no animation.
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.9) return

    setArmed(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    )
    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  const hidden = armed && !visible

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        'transition-all duration-700 ease-out motion-reduce:transition-none',
        hidden ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Reveal
