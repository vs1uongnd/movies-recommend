'use client';

import useSWRInfinite from 'swr/infinite';
import { fetcher } from '../utils/api';
import LoadMore from './LoadMore';
import Filter from './Filter';
import MoviesList from './MoviesList';
import Loading from './Loading';
import Error from './Error';

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
    <div className='mx-auto max-w-[1200px] px-5 py-16'>
      <h2 className='pb-8 text-4xl text-white'>{namePage}</h2>
      {onFilter && <Filter onFilter={onFilter} />}
      {data &&
        data.map((item) => (
          <MoviesList key={item.page} movies={item.results} />
        ))}
      <LoadMore onClick={() => setSize(size + 1)} />
    </div>
  );
};

export default MoviesAndFilter;
