'use client';
import { API_TOKEN } from '@/utils/constants';
import MovieCard from './MovieCard';

import useSWR from 'swr';
// import { fetcher } from '../utils/api';
const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: 'bearer ' + API_TOKEN,
    },
  }).then((res) => res.json());

const Explore = () => {
  const { data, error, isLoading } = useSWR(
    'https://api.themoviedb.org/3/discover/movie',
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);

  return (
    <div>
      {data?.results?.map((item, index) => {
        return <MovieCard key={index} data={item} />;
      })}
    </div>
  );
};

export default Explore;
