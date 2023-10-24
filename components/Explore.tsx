'use client';
import MovieCard from './MovieCard';
import useSWR from 'swr';
import { Movie } from '@/utils/types';
import { fetcher } from '../utils/api';
import { BASE_URL } from '@/utils/constants';

const Explore = () => {
  const {
    data,
    error,
    isLoading,
  }: {
    data: { results: Movie[] };
    error: string | null | undefined;
    isLoading: boolean;
  } = useSWR(`${BASE_URL}/discover/movie`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className='mx-auto max-w-[1200px] px-5'>
      <div></div>
      <div className='grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5 lg:grid-cols-5'>
        {data?.results?.map((item, index) => {
          return <MovieCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Explore;
