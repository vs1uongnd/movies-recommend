'use client';
import { BASE_URL } from '@/utils/constants';
import MoviesAndFilter from '@/components/MoviesList/MoviesAndFilter';
import { useCheckSignIn } from '@/utils/checkCookieClient';
import { redirect } from 'next/navigation';

const getKey = (
  pageIndex: number,
  previousPageData: { page: number; total_pages: number }
) => {
  pageIndex = pageIndex + 1;
  if (previousPageData && pageIndex >= previousPageData['total_pages'])
    return null; // reached the end
  return `${BASE_URL}/movie/popular?page=${pageIndex}`; // SWR key
};

const PopularTrending = () => {
  if (!useCheckSignIn()) redirect('/');
  return <MoviesAndFilter namePage='Popular' getKey={getKey} />;
};

export default PopularTrending;
