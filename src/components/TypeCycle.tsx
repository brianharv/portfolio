import { useEffect, useMemo, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

type Phase = 'typing' | 'holding' | 'deleting'

type TypeCycleProps = {
  phrases: readonly string[]
}

export function TypeCycle({ phrases }: TypeCycleProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [characterCount, setCharacterCount] = useState(phrases[0]?.length ?? 0)
  const [phase, setPhase] = useState<Phase>('holding')

  const longestPhrase = useMemo(
    () => phrases.reduce((longest, phrase) => (phrase.length > longest.length ? phrase : longest), ''),
    [phrases],
  )

  const currentPhrase = phrases[phraseIndex] ?? ''
  const visiblePhrase = prefersReducedMotion
    ? phrases[0] ?? ''
    : currentPhrase.slice(0, characterCount)

  useEffect(() => {
    if (prefersReducedMotion || phrases.length < 2) return

    const delay = phase === 'typing' ? 54 : phase === 'deleting' ? 30 : 1400

    const timeout = window.setTimeout(() => {
      if (phase === 'typing') {
        if (characterCount >= currentPhrase.length) {
          setPhase('holding')
        } else {
          setCharacterCount((count) => count + 1)
        }
        return
      }

      if (phase === 'holding') {
        setPhase('deleting')
        return
      }

      if (characterCount > 0) {
        setCharacterCount((count) => count - 1)
      } else {
        setPhraseIndex((index) => (index + 1) % phrases.length)
        setPhase('typing')
      }
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [characterCount, currentPhrase.length, phase, phrases.length, prefersReducedMotion])

  return (
    <span className="relative inline-grid align-baseline" aria-hidden="true">
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {longestPhrase}
      </span>
      <span className="col-start-1 row-start-1" aria-hidden="true">
        {visiblePhrase}
        {!prefersReducedMotion && <span className="typing-caret" />}
      </span>
    </span>
  )
}
