'use client';

import { BASE_URL } from '@/utils/constants';
import MoviesAndFilter from '@/components/MoviesList/MoviesAndFilter';

const Search = ({ params }: { params: { query: string } }) => {
  const { query } = params;

  const getKey = (
    pageIndex: number,
    previousPageData: { page: number; total_pages: number }
  ) => {
    pageIndex = pageIndex + 1;
    if (previousPageData && pageIndex > previousPageData['total_pages'])
      return null; // reached the end
    return `${BASE_URL}/search/movie?query=${query}&page=${pageIndex}`; // SWR key
  };
  return (
    <MoviesAndFilter
      namePage={`Search results of "${query}"`}
      getKey={getKey}
    />
  );
};

export default Search;
