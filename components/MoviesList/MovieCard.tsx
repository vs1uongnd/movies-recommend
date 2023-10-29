import PosterFallback from '../../assets/no-poster.png';
import CircleRating from '../Global/CircleRating';
import Genres from '../Global/Genres';
import dayjs from 'dayjs';
import { Movie } from '@/utils/types';
import { useApiConfig } from '@/utils/api';
import LazyImage from '../Global/LazyImage';
import classes from './MovieCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

const MovieCard = ({ movie }: { movie: Movie }) => {
  const { data: baseUrl, isLoading } = useApiConfig();

  return (
    <Link
      href={`/movie/${movie.id}`}
      className='movie-card mb-6 cursor-pointer'
    >
      <div className='relative mb-7 flex aspect-[1/1.5] items-end justify-between p-[10px]'>
        {movie.poster_path && baseUrl ? (
          <LazyImage
            alt={movie.title}
            src={baseUrl + 'original' + movie.poster_path}
            className={classes.movieCardImage}
          />
        ) : (
          !isLoading && (
            <Image
              src={PosterFallback}
              alt={movie.title}
              fill={true}
              className={classes.movieCardImage}
            />
          )
        )}
        <CircleRating
          rating={Number(movie.vote_average.toFixed(1))}
          className='relative top-[32px] h-[40px] w-[40px] bg-white'
        />
        <Genres
          genreIds={movie.genre_ids.slice(0, 2)}
          className='justify-end'
        />
      </div>
      <div className='flex flex-col text-white'>
        <p className='line-clamp-1 text-xl'>{movie.title || movie.name}</p>
        <p className='text-sm opacity-50'>
          {dayjs(movie.release_date).format('MMM D, YYYY')}
        </p>
        <p className='line-clamp-3 text-sm'>{movie.overview}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
