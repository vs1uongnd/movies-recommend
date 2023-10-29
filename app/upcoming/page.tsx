'use client';
import { BASE_URL } from '@/utils/constants';
import MoviesAndFilter from '@/components/MoviesList/MoviesAndFilter';
import { redirect } from 'next/navigation';
import { hasCookie } from 'cookies-next';

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
  if (!hasCookie('sessionId')) redirect('/');
  return <MoviesAndFilter namePage='Upcoming' getKey={getKey} />;
};

export default Upcoming;
