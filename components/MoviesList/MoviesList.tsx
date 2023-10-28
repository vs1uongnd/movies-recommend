import React from 'react';
import MovieCard from './MovieCard';
import { Movie } from '@/utils/types';

const MoviesList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className='grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5 lg:grid-cols-5'>
      {movies?.map((item, index) => {
        return <MovieCard key={index} movie={item} />;
      })}
    </div>
  );
};

export default MoviesList;
