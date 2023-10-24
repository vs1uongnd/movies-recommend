import PosterFallback from '../assets/no-poster.png';
import Image from 'next/image';
import CircleRating from './CircleRating';
import Genres from './Genres';
import dayjs from 'dayjs';
import { Movie } from '@/utils/types';

const imageLoader = ({ src }: { src: string }) => {
  return src;
};

const MovieCard = ({ data }: { data: Movie }) => {
  //   const { url } = useSelector((state) => state.home);
  const url = {
    backdrop: 'https://image.tmdb.org/t/p/original',
    poster: 'https://image.tmdb.org/t/p/original',
    profile: 'https://image.tmdb.org/t/p/original',
  };
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;

  return (
    <div className='mb-6 cursor-pointer'>
      <div className='relative mb-7 flex aspect-[1/1.5] items-end justify-between p-[10px]'>
        <Image
          loader={imageLoader}
          src={posterUrl}
          alt={data.title}
          layout='fill'
          className='absolute left-0 top-0 h-full w-full overflow-hidden rounded-xl object-cover object-center transition-opacity hover:opacity-60'
        />
        <>
          <CircleRating
            rating={Number(data.vote_average.toFixed(1))}
            className='relative top-[32px]'
          />
          <Genres data={data.genre_ids.slice(0, 2)} />
        </>
      </div>
      <div className='flex flex-col text-white'>
        <span className='line-clamp-1 text-xl'>{data.title || data.name}</span>
        <span className='text-sm opacity-50'>
          {dayjs(data.release_date).format('MMM D, YYYY')}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
