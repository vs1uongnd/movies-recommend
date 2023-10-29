'use client';

import useSWRInfinite from 'swr/infinite';
import { fetcher } from '../../utils/api';
import LoadMore from './LoadMore';
import Filter from './Filter';
import MoviesList from './MoviesList';
import Loading from '../Global/Loading';
import Error from '../Global/Error';
import Link from 'next/link';

const MoviesAndFilter = (props: {
  getKey: (
    pageIndex: number,
    previousPageData: { page: number; total_pages: number }
  ) => string | null;
  onFilter?: (selectedItems: number | string, action: string) => void;
  namePage: string;
}) => {
  const { getKey, onFilter, namePage } = props;
  const { data, size, setSize, isLoading, error } = useSWRInfinite(
    getKey,
    fetcher
  );
  if (isLoading) return <Loading />;
  if (error) return <Error message={error.message} />;
  return (
    <div className='mx-auto max-w-[1200px] px-5 py-8'>
      <h2 className='pb-8 text-4xl text-white'>{namePage}</h2>
      {data && (
        <>
          {onFilter && <Filter onFilter={onFilter} />}
          {data[data.length - 1].total_results !== 0 ? (
            data.map((item) => (
              <MoviesList key={item.page} movies={item.results} />
            ))
          ) : (
            <div className='flex flex-col items-center justify-center py-60'>
              <h3 className='mb-6 text-center text-xl text-white'>
                Nothing in your eyes
              </h3>
              <Link href='/' className='button-primary'>
                Go Home
              </Link>
            </div>
          )}
          {data[data.length - 1].page < data[data.length - 1].total_pages && (
            <LoadMore onClick={() => setSize(size + 1)} />
          )}
        </>
      )}
    </div>
  );
};

export default MoviesAndFilter;
