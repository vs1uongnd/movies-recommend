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
            className='whitespace-nowrap rounded bg-[#F7BE38] px-[5px] text-[12px] text-gray-900'
          >
            {genreObj?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
