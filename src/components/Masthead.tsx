import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' }
] as const;

export function Masthead() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color] duration-200 ${
        hasScrolled
          ? 'border-foreground bg-surface'
          : 'border-foreground/35 bg-transparent'
      }`}
    >
      <div className='mx-auto flex min-h-16 xl:max-w-[82rem] 2xl:max-w-[95rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12'>
        <NavLink
          to='/'
          className='font-mono text-[0.72rem] font-bold tracking-[0.12em] uppercase sm:text-xs'
          aria-label='Brian Harvey, home'
        >
          Brian Harvey
        </NavLink>

        <nav aria-label='Primary'>
          <ul className='flex items-center gap-1 sm:gap-2'>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `relative block px-2.5 py-2 font-mono text-[0.68rem] font-bold tracking-[0.08em] uppercase transition-colors duration-150 sm:px-3 sm:text-xs ${
                      isActive
                        ? 'bg-primary text-foreground'
                        : 'text-foreground hover:bg-foreground hover:text-surface'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
