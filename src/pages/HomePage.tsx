import { ArcArtSVG } from '../components/ArcArt';
import { TypeCycle } from '../components/TypeCycle';

const phrases = [
  'build accessible interfaces.',
  'thrive in collaboration.',
  'write scalable code.',
  'develop useful software.',
  'iterate and edify.'
] as const;

export function HomePage() {
  return (
    <main>
      <section className='hero-shell mx-auto xl:max-w-[82rem] 2xl:max-w-[95rem] overflow-hidden pb-8 sm:pb-0 sm:pt-0 lg:pb-12 lg:pt-10'>
        <div className='hero-stage'>
          <div className='hero-main'>
            <h1 className='hero-name m-0 flex flex-col uppercase leading-[0.9]'>
              <span className='hero-name-brian'>Brian</span>
              <span className='hero-name-harvey'>Harvey</span>
            </h1>

            <p className='hero-statement font-medium leading-[1.06] tracking-[-0.035em]'>
              <span className='sr-only'>
                I develop accessible interfaces, thrive in collaboration, write
                scalable code, build useful software, and iterate and edify.
              </span>
              <TypeCycle prefix='I ' phrases={phrases} />
            </p>
          </div>

          <div className='hero-composition pointer-events-none'>
            <ArcArtSVG />

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
