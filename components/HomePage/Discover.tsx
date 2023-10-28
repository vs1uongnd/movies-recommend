'use client';

import { BASE_URL } from '@/utils/constants';
import { useState } from 'react';
import MoviesAndFilter from '../MoviesList/MoviesAndFilter';

const Discover = () => {
  const [genres, setGenres] = useState<number[]>([]);
  const [sort, setSort] = useState('');

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
    <MoviesAndFilter
      namePage='All Movies'
      getKey={getKey}
      onFilter={onFilter}
    />
  );
};

export default Discover;
