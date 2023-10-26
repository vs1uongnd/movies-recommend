'use client';

import { fetcher } from '../utils/api';
import { BASE_URL } from '@/utils/constants';
import MoviesList from './MoviesList';
import useSWRInfinite from 'swr/infinite';

const getKey = (
  pageIndex: number,
  previousPageData: { page: number; total_pages: number }
) => {
  pageIndex = pageIndex + 1;
  if (previousPageData && pageIndex >= previousPageData['total_pages'])
    return null; // reached the end
  return `${BASE_URL}/discover/movie?page=${pageIndex}`; // SWR key
};

const Explore = () => {
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher);
  if (!data) return 'loading';

  return (
    <div className='mx-auto max-w-[1200px] px-5'>
      <div></div>
      {data.map((item) => (
        <MoviesList key={item.page} movies={item.results} />
      ))}
      <button
        type='button'
        className='relative left-1/2 my-5 inline-flex -translate-x-1/2 items-center rounded-lg bg-[#F7BE38] px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-[#F7BE38]/90'
        onClick={() => setSize(size + 1)}
      >
        Load More
      </button>
    </div>
  );
};

export default Explore;
