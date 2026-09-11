import { FC } from 'react';

export interface BandcampEmbedProps {
  artist: string;
  song: string;
  accent: 'secondary' | 'tertiary';
  src: string;
  href: string;
}

const shadowClasses = {
  secondary: 'shadow-[0.5rem_0.5rem_var(--color-secondary)]',
  tertiary: 'shadow-[0.5rem_0.5rem_var(--color-tertiary)]'
} satisfies Record<BandcampEmbedProps['accent'], string>;

export const BandcampEmbed: FC<BandcampEmbedProps> = ({
  artist,
  song,
  src,
  accent,
  href
}) => {
  return (
    <iframe
      title={`${song} by ${artist} - Bandcamp Player`}
      className={`
      $border-0
      w-full
      h-[2.6rem]
      transition-shadow
      ${shadowClasses[accent]}
      hover:shadow-[-0.5rem_-0.5rem_var(--color-primary)]
    `}
      src={src}
    >
      <a href={href}>
        {song} by {artist}
      </a>
    </iframe>
  );
};
