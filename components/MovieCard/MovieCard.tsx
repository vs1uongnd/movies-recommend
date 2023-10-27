import PosterFallback from '../../assets/no-poster.png';
import CircleRating from '../CircleRating';
import Genres from '../Genres';
import dayjs from 'dayjs';
import { Movie } from '@/utils/types';
import { useApiConfig } from '@/hooks/customHook';
import LazyImage from '../LazyImage';
import classes from './MovieCard.module.css';

const MovieCard = ({ movie }: { movie: Movie }) => {
  const { data: baseUrl } = useApiConfig();

  const posterUrl =
    movie.poster_path && baseUrl
      ? baseUrl + 'original' + movie.poster_path
      : '../../assets/no-poster.png';

  return (
    <div className='movie-card mb-6 cursor-pointer'>
      <div className='relative mb-7 flex aspect-[1/1.5] items-end justify-between p-[10px]'>
        <LazyImage
          alt={movie.title}
          src={posterUrl}
          className={classes.movieCardImage}
        />
        <CircleRating
          rating={Number(movie.vote_average.toFixed(1))}
          className='relative top-[32px]'
        />
        <Genres genreIds={movie.genre_ids.slice(0, 2)} />
      </div>
      <div className='flex flex-col text-white'>
        <p className='line-clamp-1 text-xl'>{movie.title || movie.name}</p>
        <p className='text-sm opacity-50'>
          {dayjs(movie.release_date).format('MMM D, YYYY')}
        </p>
        <p className='line-clamp-3 text-sm'>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
