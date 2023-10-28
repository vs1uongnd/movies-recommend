'use client';
import { BASE_URL } from '@/utils/constants';
import MoviesAndFilter from '@/components/MoviesList/MoviesAndFilter';

const getKey = (
  pageIndex: number,
  previousPageData: { page: number; total_pages: number }
) => {
  pageIndex = pageIndex + 1;
  if (previousPageData && pageIndex >= previousPageData['total_pages'])
    return null; // reached the end
  return `${BASE_URL}/movie/upcoming?page=${pageIndex}`; // SWR key
};

const Upcoming = () => {
  return <MoviesAndFilter namePage='Upcoming' getKey={getKey} />;
};

export default Upcoming;
