'use client';

import { useGenres } from '@/utils/api';

const Genres = ({
  genreIds,
  genres,
  className,
}: {
  genreIds?: number[];
  genres?: { id: number; name: string }[] | undefined;
  className?: string;
}) => {
  const { data } = useGenres();
  if (!data && !genres) return;

  let genresFormatted: { id: number; name: string }[] = genres || [];

  if (!genres) {
    genreIds?.forEach((g) => {
      const genreObj = data?.genres.find((genreObj) => genreObj.id === g);
      if (genreObj) genresFormatted.push(genreObj);
    });
  }

  return (
    <div className={`z-10 flex flex-row flex-wrap gap-1 ${className}`}>
      {genresFormatted.map((genre) => (
        <div
          key={genre.id}
          className='whitespace-nowrap rounded bg-color-primary px-[5px] text-[12px] text-body-black'
        >
          {genre?.name}
        </div>
      ))}
    </div>
  );
};

export default Genres;
