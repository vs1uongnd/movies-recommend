import { useGenres } from '@/utils/api';
import { useState } from 'react';

const SelectGenre = ({
  onFilter,
}: {
  onFilter: (selectedItems: string | number, action: string) => void;
}) => {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const { data } = useGenres();
  return (
    <div className='relative '>
      <button
        id='dropdownSearchButton'
        className='button-primary flex w-40 justify-between'
        type='button'
        onClick={() => setDropdownOpened((state) => !state)}
      >
        Genres
        <svg
          className='ml-2.5 h-2.5 w-2.5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>
      <div
        id='dropdownSearch'
        className={`z-10 ${
          dropdownOpened ? 'block' : 'hidden'
        } absolute top-[48px] w-40 overflow-hidden rounded-lg bg-white shadow`}
      >
        <ul
          className='h-48 overflow-y-auto py-3 text-sm text-gray-700'
          aria-labelledby='dropdownSearchButton'
        >
          {data &&
            data.genres.map((genre) => (
              <li key={genre.id}>
                <div className='flex cursor-pointer items-center rounded p-2 hover:bg-gray-100'>
                  <input
                    id={`genre-${genre.id}`}
                    type='checkbox'
                    className='bg-gray-10 h-4 w-4 rounded border-gray-300'
                    onChange={() => onFilter(genre.id, 'genres')}
                  />
                  <label
                    htmlFor={`genre-${genre.id}`}
                    className='ml-2 w-full rounded text-sm font-medium text-body-black '
                  >
                    {genre.name}
                  </label>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectGenre;
