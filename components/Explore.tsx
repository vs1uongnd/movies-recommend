'use client';

import { fetcher } from '../utils/api';
import { BASE_URL } from '@/utils/constants';
import MoviesList from './MoviesList';
import useSWRInfinite from 'swr/infinite';
import LoadMore from './LoadMore';
import Filter from './Filter';
import { useState } from 'react';

const Explore = () => {
  const getKey = (
    pageIndex: number,
    previousPageData: { page: number; total_pages: number }
  ) => {
    pageIndex = pageIndex + 1;
    let withGenres = '';
    let withSort = '';
    if (previousPageData && pageIndex >= previousPageData['total_pages'])
      return null; // reached the end
    if (genres.length > 0) {
      withGenres = `&with_genres=${genres.join(',')}`;
    }
    if (sort.trim() !== '') {
      withSort = `&sort_by=${sort.trim()}`;
    }
    return `${BASE_URL}/discover/movie?page=${pageIndex}${withGenres}${withSort}`; // SWR key
  };

  const [genres, setGenres] = useState<number[]>([]);
  const [sort, setSort] = useState('');
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher);

  const onFilter = (selectedItems: number | string, action: string) => {
    if (action === 'genres') {
      setGenres((state: any) => {
        const index = state.indexOf(selectedItems as number);
        if (index === -1) {
          return [...state, selectedItems];
        } else {
          state.splice(index, 1);
          return [...state];
        }
      });
    }
    if (action === 'sort') {
      setSort(selectedItems as string);
    }
  };

  return (
    <div className='mx-auto max-w-[1200px] px-5 py-20'>
      <Filter onFilter={onFilter} />
      {data &&
        data.map((item) => (
          <MoviesList key={item.page} movies={item.results} />
        ))}
      <LoadMore onClick={() => setSize(size + 1)} />
    </div>
  );
};

export default Explore;
