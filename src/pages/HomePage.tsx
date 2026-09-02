import { TypeCycle } from '../components/TypeCycle';

const phrases = [
  '[ superlative ] [ jargon ]',
  'thoughtful interfaces.',
  'accessible experiences.',
  'useful software.'
] as const;

export function HomePage() {
  return (
    <main>
      <section className='hero-shell mx-auto max-w-[96rem] overflow-hidden pb-8 pt-8 sm:pb-10 sm:pt-10 lg:pb-12 lg:pt-10'>
        <div className='hero-stage'>
          <div className='hero-main'>
            <h1 className='hero-name flex flex-col uppercase'>
              <span className='hero-name-brian'>Brian</span>
              <span className='hero-name-harvey'>Harvey</span>
            </h1>

            <p className='hero-statement font-medium leading-[1.06] tracking-[-0.035em]'>
              <span className='sr-only'>
                I build thoughtful interfaces, accessible experiences, and
                useful software.
              </span>
              <span aria-hidden='true'>I build </span>
              <TypeCycle phrases={phrases} />
            </p>
          </div>

          <div className='hero-composition pointer-events-none'>
            <svg
              className='hero-arc-art'
              viewBox='0 0 680 880'
              preserveAspectRatio='xMidYMid slice'
              focusable='false'
              aria-hidden='true'
            >
              <rect width='680' height='880' fill='var(--theme-primary)' />

              <circle cx='680' cy='880' r='780' fill='var(--theme-surface)' />
              <circle
                cx='680'
                cy='880'
                r='610'
                fill='var(--theme-foreground)'
              />
              <circle cx='680' cy='880' r='435' fill='var(--theme-secondary)' />
              <circle cx='680' cy='880' r='315' fill='var(--theme-tertiary)' />
              <circle cx='680' cy='880' r='175' fill='var(--theme-surface)' />

              <rect
                x='656'
                width='24'
                height='880'
                fill='var(--theme-primary)'
              />
            </svg>

            <div className='hero-role font-mono font-bold tracking-[0.12em] uppercase'>
              <span>Software Engineer</span>
              <span>Recordist</span>
              <span>Musician</span>
            </div>
          </div>

          <div className='hero-bottom'>
            <div className='hero-links flex gap-5 font-mono text-[0.72rem] font-bold tracking-[0.1em] uppercase'>
              <a
                href='https://github.com'
                className='link-accent border-b-2 border-transparent pb-1 transition-colors duration-150 hover:border-primary'
              >
                GitHub ↗
              </a>
              <a
                href='https://www.linkedin.com'
                className='link-accent border-b-2 border-transparent pb-1 transition-colors duration-150 hover:border-secondary'
              >
                LinkedIn ↗
              </a>
            </div>

            <p className='hero-location font-mono text-[0.68rem] font-bold tracking-[0.12em] uppercase sm:text-xs'>
              Portland, OR
            </p>
          </div>
        </div>
      </section>

      <section
        className='min-h-[42svh] border-t-[3px] border-foreground bg-foreground text-surface'
        aria-label='Prototype continuation'
      >
        <div className='mx-auto flex max-w-[96rem] items-start justify-between gap-8 px-5 py-10 sm:px-8 lg:px-12'>
          <p className='max-w-xl text-lg leading-relaxed'>
            Prototype continuation — intentionally sparse while the visual
            system is being evaluated.
          </p>
          <span className='font-mono text-xs font-bold tracking-[0.12em] uppercase text-primary'>
            01 / Visual System
          </span>
        </div>
      </section>
    </main>
  );
}
