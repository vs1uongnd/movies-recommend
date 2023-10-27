import { useGenre } from '@/hooks/customHook';
import React from 'react';

const Genres = ({ genreIds }: { genreIds: number[] }) => {
  const { data } = useGenre();
  if (!data) return;

  return (
    <div className='z-10 flex flex-row flex-wrap justify-end gap-1'>
      {genreIds?.map((g) => {
        const genreObj = data?.genres.find((genreObj) => genreObj.id === g);
        if (!genreObj) return;
        return (
          <div
            key={g}
            className='text-body-black bg-color-primary whitespace-nowrap rounded px-[5px] text-[12px]'
          >
            {genreObj?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
