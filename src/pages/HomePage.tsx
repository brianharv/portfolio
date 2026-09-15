import { SubmitEventHandler, useState } from 'react';
import { ArcArtSVG } from '../components/ArcArt';
import { BandcampEmbed, BandcampEmbedProps } from '../components/BandcampEmbed';
import { TypeCycle } from '../components/TypeCycle';

const phrases = [
  'build accessible interfaces.',
  'thrive in collaboration.',
  'write scalable code.',
  'develop useful software.',
  'iterate and edify.'
] as const;

const songEmbeds = [
  {
    song: 'Along for the Ride',
    artist: 'Evan Thomas Way',
    src: 'https://bandcamp.com/EmbeddedPlayer/track=614049932/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/',
    href: 'https://evanthomasway.bandcamp.com/track/along-for-the-ride',
    accent: 'secondary'
  },
  {
    song: 'Learning to Swim',
    artist: 'Stoner Control',
    src: 'https://bandcamp.com/EmbeddedPlayer/album=1061548449/size=small/bgcol=ffffff/linkcol=0687f5/track=971151770/transparent=true/',
    href: 'https://stonercontrol.bandcamp.com/album/sparkle-endlessly',
    accent: 'tertiary'
  },
  {
    song: 'Freakshow',
    artist: 'Floating Room',
    src: 'https://bandcamp.com/EmbeddedPlayer/album=878317531/size=small/bgcol=ffffff/linkcol=0687f5/track=2524412158/transparent=true/',
    href: 'https://floatingroom.bandcamp.com/album/tired-and-true',
    accent: 'secondary'
  }
] satisfies BandcampEmbedProps[];

export function HomePage() {
  type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const formStatusMessages: Record<FormStatus, string> = {
    idle: '',
    submitting: 'Sending your message…',
    success: 'Thanks — your message has been sent.',
    error: 'Something went wrong. Please try again.'
  };

  const handleFormSubmit: SubmitEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus('submitting');

    try {
      const body = new URLSearchParams();

      formData.forEach((value, key) => {
        if (typeof value === 'string') {
          body.append(key, value);
        }
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body.toString()
      });
      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }
      form.reset();
      setFormStatus('success');
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <main>
      <section
        id='root'
        className='hero-shell mx-auto xl:max-w-[82rem] 2xl:max-w-[95rem] overflow-hidden pb-8 sm:pb-0 sm:pt-0 lg:pb-12 lg:pt-10'
      >
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
                href={import.meta.env.VITE_GITHUB_URL}
                className='link-accent border-b-2 border-transparent pb-1 transition-colors duration-150 hover:border-primary'
              >
                GitHub ↗
              </a>
              <a
                href={import.meta.env.VITE_LINKEDIN_URL}
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
        id='work'
        className='min-h-[42svh] border-t-[3px] border-foreground bg-foreground text-surface'
        aria-labelledby='work-heading'
      >
        <div className='mx-auto flex max-w-[96rem] flex-col gap-10 px-5 py-8 sm:px-8 lg:px-12'>
          <div className='flex flex-col gap-4 py-10 md:flex-row md:items-start md:justify-between md:gap-2'>
            <p className='max-w-xl text-lg leading-relaxed'>
              I make some things for screens and others for speakers. Here are
              some of my favorite projects and collaborations.
            </p>
            <h2
              className='font-mono text-xs font-bold tracking-[0.12em] uppercase text-primary order-first md:order-last'
              id='work-heading'
            >
              01 / Work
            </h2>
          </div>
          <div className='self-center'>
            <h3 className='border-b-1 font-mono text-center tracking-[0.12em] uppercase md:text-xl lg:text-2xl text-s p-4'>
              Web
            </h3>
          </div>

          <div className='grid grid-cols-1 gap-8 pb-10 text-lg md:grid-cols-2'>
            <div className='min-w-0 flex flex-col items-center'>
              <div className='aspect-[512/290] w-full max-w-[28rem] overflow-hidden shadow-[0.5rem_0.5rem_var(--color-primary)]'>
                <img
                  className='h-full w-full object-cover'
                  src='diathrive-thumbnail.png'
                  alt='Diathrive marketing site.'
                />
              </div>

              <a
                className='link-accent mt-4 inline-block border-b-2 border-transparent pb-1 transition-colors duration-150 hover:border-primary'
                href='https://diathrive.com/'
              >
                Diathrive <span aria-hidden='true'>↗</span>
              </a>
            </div>

            <div className='min-w-0 flex flex-col items-center'>
              <div className='aspect-[512/290] w-full max-w-[28rem] overflow-hidden shadow-[0.5rem_0.5rem_var(--color-primary)]'>
                <img
                  className='h-full w-full object-cover'
                  src='allyvia-thumbnail.png'
                  alt='Allyvia marketing site.'
                />
              </div>

              <a
                className='link-accent mt-4 inline-block border-b-2 border-transparent pb-1 transition-colors duration-150 hover:border-primary'
                href='https://www.allyvia.co/'
              >
                Allyvia <span aria-hidden='true'>↗</span>
              </a>
            </div>
          </div>

          <div className='self-center'>
            <h3 className='border-b-1 font-mono text-center tracking-[0.12em] uppercase md:text-xl lg:text-2xl text-s p-4'>
              Music
            </h3>
          </div>

          <div className='grid grid-cols-1 justify-items-center gap-8 py-10 md:grid-cols-3 '>
            {songEmbeds.map((song) => (
              <BandcampEmbed key={song.src} {...song} />
            ))}
          </div>
        </div>
      </section>

      <section
        id='contact'
        className='hero-shell border-t-[3px] border-background bg-background text-foreground'
        aria-labelledby='contact-heading'
      >
        <div className='mx-auto flex max-w-[96rem] flex-col items-center gap-4 px-5 py-4 sm:px-8 lg:px-12'>
          <div className='flex w-full flex-col gap-4 py-10 md:flex-row md:items-start md:justify-between md:gap-2'>
            <p className='max-w-xl text-2xl leading-relaxed'>
              Thanks for stopping by, let's stay in touch.
            </p>

            <h2
              id='contact-heading'
              className='order-first font-mono text-xs font-bold tracking-[0.12em] uppercase text-primary md:order-last'
            >
              02 / Contact
            </h2>
          </div>

          <form
            name='contact'
            method='POST'
            onSubmit={handleFormSubmit}
            className='flex w-full flex-col items-center gap-8 font-sans text-sm md:max-w-[60rem] md:text-xl'
          >
            <input type='hidden' name='form-name' value='contact' />

            <div className='hidden' aria-hidden='true'>
              <label htmlFor='bot-field'>Don't fill this out</label>
              <input
                id='bot-field'
                name='bot-field'
                tabIndex={-1}
                autoComplete='off'
              />
            </div>

            <div className='flex w-full flex-col gap-2'>
              <label htmlFor='email-field' className='font-bold uppercase'>
                Email
              </label>

              <input
                id='email-field'
                name='email'
                type='email'
                autoComplete='email'
                className='rounded-sm border-2 border-foreground bg-surface p-2 text-foreground outline-offset-1'
                placeholder='email@address.com'
                required
              />
            </div>

            <div className='flex w-full flex-col gap-2'>
              <label htmlFor='message-field' className='font-bold uppercase'>
                Message
              </label>

              <textarea
                id='message-field'
                name='message'
                className='resize-none rounded-sm border-2 border-foreground bg-surface p-2 text-foreground outline-offset-1'
                placeholder='How can I help?'
                rows={8}
                required
                spellCheck
              />
            </div>

            <button
              type='submit'
              disabled={formStatus === 'submitting'}
              className='w-[10rem] rounded-sm border-2 border-secondary bg-secondary p-2 text-surface transition-colors transition-shadow shadow-[0.5rem_0.5rem_var(--color-tertiary)] hover:bg-primary hover:text-foreground hover:shadow-[0.0rem_0.0rem_var(--color-tertiary)] disabled:cursor-not-allowed disabled:opacity-60 md:w-[18rem]'
            >
              {formStatus === 'submitting' ? 'Sending…' : 'Send message'}
            </button>

            <p
              className={`min-h-[2rem] w-full text-center ${formStatus === 'error' ? 'text-error font-bold' : ''}`}
              role={formStatus === 'error' ? 'alert' : 'status'}
              aria-live={formStatus === 'error' ? 'assertive' : 'polite'}
              aria-atomic='true'
            >
              {formStatusMessages[formStatus]}
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
