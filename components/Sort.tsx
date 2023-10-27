'use client';

import { useState } from 'react';

const sortValues = [
  { id: 'popularity.desc', name: 'Popularity Descending' },
  { id: 'popularity.asc', name: 'Popularity Ascending' },
  { id: 'vote_average.desc', name: 'Rating Descending' },
  { id: 'vote_average.asc', name: 'Rating Ascending' },
  { id: 'primary_release_date.desc', name: 'Release Date Descending' },
  { id: 'primary_release_date.asc', name: 'Release Date Ascending' },
];

const Sort = ({
  onFilter,
}: {
  onFilter: (selectedItems: string | number, action: string) => void;
}) => {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  return (
    <div className='relative '>
      <button
        id='dropdownSearchButton'
        className='button-primary flex w-40 justify-between'
        type='button'
        onClick={() => setDropdownOpened((state) => !state)}
      >
        Sort by
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
          {sortValues.map(({ id, name }) => (
            <li
              key={id}
              className='flex cursor-pointer items-center rounded p-2 hover:bg-gray-100'
              onClick={() => {
                setDropdownOpened(false);
                onFilter(id, 'sort');
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
