import { type FC } from 'react';

export const ArcArtSVG: FC = () => {
  return (
    <svg
      className='hero-arc-art'
      viewBox='0 0 680 880'
      preserveAspectRatio='xMaxYMax slice'
      focusable='false'
      aria-hidden='true'
    >
      <rect width='680' height='880' fill='var(--theme-primary)' />

      <circle cx='680' cy='880' r='780' fill='var(--theme-surface)' />
      <circle cx='680' cy='880' r='610' fill='var(--theme-foreground)' />
      <circle cx='680' cy='880' r='435' fill='var(--theme-secondary)' />
      <circle cx='680' cy='880' r='315' fill='var(--theme-tertiary)' />
      <circle cx='680' cy='880' r='175' fill='var(--theme-surface)' />
    </svg>
  );
};
